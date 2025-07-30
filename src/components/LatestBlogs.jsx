import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LatestBlogs = ({ apiUrl }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const scrollRef = useRef(null);

  // Scroll handler for arrows
  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${apiUrl}/getbloglist`);
        // Sort by addingDate (if present), else createdAt
        const getDate = (blog) => {
          if (blog.addingDate) {
            if (blog.addingDate.seconds) return new Date(blog.addingDate.seconds * 1000);
            return new Date(blog.addingDate);
          }
          if (blog.createdAt) {
            if (blog.createdAt.seconds) return new Date(blog.createdAt.seconds * 1000);
            return new Date(blog.createdAt);
          }
          return new Date(0);
        };
        const sorted = [...res.data].sort((a, b) => getDate(b) - getDate(a));
        setBlogs(sorted);
      } catch (err) {
        setError('Failed to fetch blogs');
      }
      setLoading(false);
    };
    fetchBlogs();
  }, [apiUrl]);

  if (loading) return <div className="py-8 text-center text-gray-400">Loading latest blogs...</div>;
  if (error) return <div className="py-8 text-center text-red-400">{error}</div>;
  if (!blogs.length) return <div className="py-8 text-center text-gray-400">No blogs found.</div>;

  return (
    <div className="w-full py-4 relative">
      {/* Left Arrow */}
      <button
        type="button"
        aria-label="Scroll left"
        className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-blue-100 border border-blue-200 rounded-full shadow p-2 transition"
        style={{ boxShadow: '0 2px 8px rgba(59,130,246,0.10)' }}
        onClick={() => scrollByAmount(-320)}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      {/* Right Arrow */}
      <button
        type="button"
        aria-label="Scroll right"
        className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-blue-100 border border-blue-200 rounded-full shadow p-2 transition"
        style={{ boxShadow: '0 2px 8px rgba(59,130,246,0.10)' }}
        onClick={() => scrollByAmount(320)}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
      </button>
      <div
        ref={scrollRef}
        className="flex space-x-6 min-w-[700px] overflow-x-auto no-scrollbar px-2"
        style={{ scrollBehavior: 'smooth' }}
      >
        {blogs.slice(0, 8).map((blog, idx) => {
          // Pick date: addingDate if present, else createdAt
          let dateObj = null;
          if (blog.addingDate) {
            if (blog.addingDate.seconds) dateObj = new Date(blog.addingDate.seconds * 1000);
            else dateObj = new Date(blog.addingDate);
          } else if (blog.createdAt) {
            if (blog.createdAt.seconds) dateObj = new Date(blog.createdAt.seconds * 1000);
            else dateObj = new Date(blog.createdAt);
          }
          return (
            <Link
              to={{ pathname: '/blogdetails' }}
              state={{ blog }}
              key={blog._id || idx}
              className="flex-shrink-0 w-80 rounded-xl overflow-hidden border bg-white border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={blog.mainImage}
                  alt={blog.mainTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Date badge */}
                {dateObj && (
                  <div className="absolute top-3 right-3 bg-white/90 rounded-lg px-3 py-1 text-xs font-bold text-gray-700 shadow">
                    {dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' })}
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-center items-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center px-6 truncate w-full" style={{lineHeight: 1.25}}>{blog.mainTitle}</h3>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3 mb-2 text-center px-1">
                  {blog.mainDescription?.slice(0, 120)}{blog.mainDescription?.length > 120 ? '...' : ''}
                </p>
                <span className="text-blue-500 text-xs font-semibold block text-center">See more</span>
              </div>
            </Link>
          );
        })}
      </div>
      <style>{`
        /* Hide scrollbar for all browsers */
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
};

export default LatestBlogs;
