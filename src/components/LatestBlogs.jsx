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
        {blogs.slice(0, 8).map((blog, idx) => {
          const isLatest = idx === 0;
          return (
            <Link
              to={{ pathname: '/blogdetails' }}
              state={{ blog }}
              key={blog._id || idx}
              className={
                `flex-shrink-0 w-80 rounded-xl overflow-hidden border transition-shadow duration-300 group ` +
                (isLatest
                  ? 'bg-gradient-to-br from-yellow-100 to-pink-100 border-pink-400 shadow-2xl ring-2 ring-pink-300 scale-105 z-10'
                  : 'bg-white border-gray-200 shadow-lg hover:shadow-2xl')
              }
              style={isLatest ? { boxShadow: '0 8px 32px 0 rgba(255, 0, 128, 0.18)' } : {}}
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
                {isLatest && (
                  <div className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse z-20">
                    Latest
                  </div>
                )}
              </div>
              <div className={isLatest ? "p-5" : "p-4"}>
                <h3 className={
                  (isLatest
                    ? "text-xl font-extrabold text-pink-700 mb-2 truncate drop-shadow"
                    : "text-lg font-bold text-gray-900 mb-2 truncate")
                }>{blog.mainTitle}</h3>
                <p className={isLatest ? "text-gray-800 text-base font-semibold line-clamp-3 mb-2" : "text-gray-600 text-sm line-clamp-3 mb-2"}>
                  {blog.mainDescription?.slice(0, 120)}{blog.mainDescription?.length > 120 ? '...' : ''}
                </p>
                <span className={isLatest ? "text-pink-600 text-sm font-bold" : "text-blue-500 text-xs font-semibold"}>See more</span>
              </div>
            </Link>
          );
        })}
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
