import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LatestBlogs = ({ apiUrl }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${apiUrl}/getbloglist`);
        // Sort by date descending (latest first)
        const sorted = [...res.data].sort((a, b) => {
          const dateA = a.createdAt?.seconds ? new Date(a.createdAt.seconds * 1000) : new Date(a.createdAt);
          const dateB = b.createdAt?.seconds ? new Date(b.createdAt.seconds * 1000) : new Date(b.createdAt);
          return dateB - dateA;
        });
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
    <div className="w-full overflow-x-auto py-4 relative">
      <div className="flex space-x-6 min-w-[700px]">
        {blogs.slice(0, 8).map((blog, idx) => (
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
              {blog.createdAt && (
                <div className="absolute top-3 right-3 bg-white/90 rounded-lg px-3 py-1 text-xs font-bold text-gray-700 shadow">
                  {(() => {
                    const d = blog.createdAt.seconds ? new Date(blog.createdAt.seconds * 1000) : new Date(blog.createdAt);
                    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' });
                  })()}
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
        ))}
      </div>
      {/* Right arrow for mobile scroll hint */}
      <div className="block md:hidden absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none z-20">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-right">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
      <style>{`
        @keyframes bounce-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        .animate-bounce-right {
          animation: bounce-right 1.2s infinite;
        }
      `}</style>
    </div>
  );
};

export default LatestBlogs;
