import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetails = () => {
  const location = useLocation();
  const blog = location.state?.blog;

  if (!blog) {
    return <div className="p-8 text-center text-gray-500">No blog data found.</div>;
  }

  // Combine all content: mainDescription + subSections
  const allSections = [
    { title: blog.mainTitle, image: blog.mainImage, description: blog.mainDescription, isMain: true },
    ...(blog.subSections || []).map(sub => ({ ...sub, isMain: false }))
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-blue-50">
      <article className="w-full bg-white shadow-2xl rounded-none md:rounded-3xl overflow-hidden border border-gray-200 animate-fade-in">
        {/* Main Blog Image */}
        <div className="relative w-full" style={{ minHeight: 220, maxHeight: 520 }}>
          <img
            src={blog.mainImage}
            alt={blog.mainTitle}
            className="w-full object-cover object-center bg-white transition-transform duration-500"
            style={{ maxHeight: 520, minHeight: 220, height: '40vw', minWidth: '100vw' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          {/* Calendar Date Badge */}
          {blog.createdAt && (
            <div
              className="absolute top-8 right-8 z-20"
              style={{ width: 110, height: 150 }}
            >
              <div className="w-full h-full rounded-2xl shadow-2xl border border-gray-400 bg-white flex flex-col items-center overflow-hidden relative">
                {/* Calendar Top Ring */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-gray-300 rounded-b-xl shadow-inner z-10" />
                {/* Calendar Header (Month) */}
                <div className="w-full bg-gray-200 text-gray-800 text-center py-2 font-bold text-lg tracking-widest uppercase border-b-2 border-gray-300 relative z-20" style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
                  {(() => {
                    const d = blog.createdAt.seconds ? new Date(blog.createdAt.seconds * 1000) : new Date(blog.createdAt);
                    return d.toLocaleString('default', { month: 'long' });
                  })()}
                </div>
                {/* Calendar Day */}
                <div className="flex-1 flex flex-col justify-center items-center bg-white w-full">
                  <span className="text-gray-900 font-extrabold text-5xl leading-none mt-2 drop-shadow-sm">
                    {(() => {
                      const d = blog.createdAt.seconds ? new Date(blog.createdAt.seconds * 1000) : new Date(blog.createdAt);
                      return d.getDate();
                    })()}
                  </span>
                </div>
                {/* Calendar Footer (Year) with tear-off effect */}
                <div className="w-full bg-gray-100 text-gray-900 text-center py-2 text-xs font-extrabold border-t-2 border-dashed border-gray-300 tracking-wider relative z-20" style={{ borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                  {(() => {
                    const d = blog.createdAt.seconds ? new Date(blog.createdAt.seconds * 1000) : new Date(blog.createdAt);
                    return d.getFullYear();
                  })()}
                </div>
              </div>
            </div>
          )}
          <h1 className="absolute bottom-8 left-0 w-full text-center text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight px-4 md:px-0">
            {blog.mainTitle}
          </h1>
        </div>

        <div className="px-2 sm:px-8 md:px-24 py-8 md:py-14 w-full">
          {/* Main Description */}
          <div className="prose prose-lg max-w-none text-gray-800 mb-10 text-justify leading-relaxed">
            {blog.mainDescription}
          </div>

          {/* All sub-sections as part of the main content */}
          {blog.subSections && blog.subSections.length > 0 && (
            <div className="space-y-14">
              {blog.subSections.map((sub, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <section
                    key={idx}
                    className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-12 bg-gray-50 rounded-2xl shadow border border-gray-200 p-6 md:p-10`}
                  >
                    {sub.image && (
                      <img
                        src={sub.image}
                        alt={sub.title}
                        className="w-full md:w-1/2 h-56 md:h-72 object-cover rounded-xl shadow mb-4 md:mb-0 border border-gray-200"
                        style={{ maxWidth: 380, minWidth: 180, background: '#fff' }}
                      />
                    )}
                    <div className="flex-1 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 mt-2 font-serif tracking-tight">
                        {sub.title}
                      </h2>
                      <div className="prose prose-base max-w-none text-gray-700 text-justify">
                        {sub.description}
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
