import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogList = ({ onEditBlog }) => {
  const [groups, setGroups] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/getbloglistgroup')
      .then(res => res.json())
      .then(data => {
        setGroups(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 text-center">Loading blogs...</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Blog List (Grouped)</h2>
      {Object.keys(groups).length === 0 && <div className="text-gray-400">No blogs found.</div>}
      {Object.entries(groups).map(([group, blogs]) => (
        <div key={group} className="mb-6">
          <div className="font-bold text-lg text-blue-700 mb-2">{group}</div>
          <ul className="space-y-2">
            {blogs.map(blog => (
              <li key={blog.id} className="bg-white rounded-lg shadow p-4 flex items-center justify-between border border-gray-200">
                <div>
                  <div className="font-semibold text-base">{blog.mainTitle}</div>
                  <div className="text-gray-500 text-xs line-clamp-1">{blog.mainDescription?.slice(0, 80)}...</div>
                </div>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold ml-4"
                  onClick={() => {
                    if (onEditBlog) {
                      onEditBlog(blog);
                    } else {
                      navigate('/add-blog', { state: { editId: blog.id } });
                    }
                  }}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
