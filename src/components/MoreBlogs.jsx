import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MoreBlogs = ({ show, onClose }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (show) {
      fetch('/getbloglist')
        .then(res => res.json())
        .then(data => {
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
          const sorted = [...data].sort((a, b) => getDate(b) - getDate(a));
          setBlogs(sorted);
        })
        .catch(err => {
          console.error('Error fetching blogs:', err);
        });
    }
  }, [show]);

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-8 relative" style={{ maxHeight: '80vh', overflow: 'auto' }}>
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">More Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, idx) => {
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
                key={idx}
                to={{ pathname: '/blogdetails' }}
                state={{ blog }}
                className="bg-gray-100 rounded-lg overflow-hidden shadow cursor-pointer hover:shadow-xl transition-shadow duration-200"
                style={{ textDecoration: 'none' }}
                onClick={onClose}
              >
                <img src={blog.mainImage} alt={blog.mainTitle} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{blog.mainTitle}</h3>
                  {dateObj && (
                    <div className="text-xs text-gray-500 mb-1 font-semibold">
                      {dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' })}
                    </div>
                  )}
                  <p className="text-gray-600 text-sm mb-2 line-clamp-4">
                    {blog.mainDescription}
                    <span className="text-blue-500 font-semibold ml-1">See more</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoreBlogs; 