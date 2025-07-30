import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetails = () => {
  const location = useLocation();
  const blog = location.state?.blog;

  if (!blog) {
    return <div className="p-8 text-center text-gray-500">No blog data found.</div>;
  }


  const allSections = [
    { title: blog.mainTitle, image: blog.mainImage, description: blog.mainDescription, isMain: true },
    ...(blog.subSections || []).map(sub => ({ ...sub, isMain: false }))
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-blue-50">
      <article className="w-full bg-white shadow-2xl rounded-none md:rounded-3xl overflow-hidden border border-gray-200 animate-fade-in">
    
        <div className="block md:hidden px-4 pt-8">
          <h1 className="text-xl font-extrabold text-gray-900 text-center leading-tight line-clamp-3 mb-4" style={{ wordBreak: 'break-word' }}>
            {blog.mainTitle}
          </h1>
        </div>
        {/* Main Image and Calendar (mobile: image after title, desktop: image first) */}
        <div className="relative w-full flex flex-col md:block" style={{ minHeight: 220, maxHeight: 520 }}>
          {/* Main Image (mobile below title, desktop as before) */}
          <img
            src={blog.mainImage}
            alt={blog.mainTitle}
            className="w-full object-cover object-center bg-white transition-transform duration-500 md:relative md:z-10"
            style={{ maxHeight: 520, minHeight: 220, height: '40vw', minWidth: '100vw' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none md:block hidden" />
          {/* Calendar Date Badge */}
          {blog.createdAt && (
            <div
              className="absolute top-4 right-4 z-20 md:top-8 md:right-8 md:w-[110px] md:h-[150px] w-[70px] h-[95px]"
            >
              <div className="w-full h-full rounded-2xl shadow-2xl border border-gray-400 bg-white flex flex-col items-center overflow-hidden relative">
                {/* Calendar Top Ring */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-2 bg-gray-300 rounded-b-xl shadow-inner z-10 md:w-16 md:h-3" />
                {/* Calendar Header (Month) */}
                <div className="w-full bg-gray-200 text-gray-800 text-center py-1 md:py-2 font-bold text-base md:text-lg tracking-widest uppercase border-b-2 border-gray-300 relative z-20" style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
                  {(() => {
                    const d = blog.createdAt.seconds ? new Date(blog.createdAt.seconds * 1000) : new Date(blog.createdAt);
                    return d.toLocaleString('default', { month: 'long' });
                  })()}
                </div>
                {/* Calendar Day */}
                <div className="flex-1 flex flex-col justify-center items-center bg-white w-full">
                  <span className="text-gray-900 font-extrabold text-3xl md:text-5xl leading-none mt-1 md:mt-2 drop-shadow-sm">
                    {(() => {
                      const d = blog.createdAt.seconds ? new Date(blog.createdAt.seconds * 1000) : new Date(blog.createdAt);
                      return d.getDate();
                    })()}
                  </span>
                </div>
                {/* Calendar Footer (Year) with tear-off effect */}
                <div className="w-full bg-gray-100 text-gray-900 text-center py-1 md:py-2 text-[10px] md:text-xs font-extrabold border-t-2 border-dashed border-gray-300 tracking-wider relative z-20" style={{ borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                  {(() => {
                    const d = blog.createdAt.seconds ? new Date(blog.createdAt.seconds * 1000) : new Date(blog.createdAt);
                    return d.getFullYear();
                  })()}
                </div>
              </div>
            </div>
          )}
          {/* Main Title (centered within main image, max width, two lines) */}
          <div className="hidden md:flex absolute bottom-8 left-0 w-full z-30 pointer-events-none">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight px-8 md:px-0 text-center"
              style={{
                maxWidth: '90vw',
                marginLeft: 'auto',
                marginRight: 'auto',
                wordBreak: 'break-word',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                overflow: 'hidden',
                pointerEvents: 'auto',
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              }}
              title={blog.mainTitle}
              dangerouslySetInnerHTML={{
                __html: (blog.mainTitle || '').replace(/<br\s*\/?\s*>/gi, '<br />')
              }}
            />
          </div>
        </div>

        <div className="px-2 sm:px-8 md:px-24 py-8 md:py-14 w-full">
          {/* Main Description */}
          <div className="prose prose-lg max-w-none text-gray-800 mb-10 text-justify leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: (blog.mainDescription || '').replace(/<br\s*\/?\s*>/gi, '<br />')
            }}
          />

          
          {blog.subSections && blog.subSections.length > 0 && (
            <div className="space-y-14">
              {blog.subSections.map((sub, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <section
                    key={idx}
                    className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-12 py-6 md:py-10`}
                  >
                    {sub.image && (
                      <img
                        src={sub.image}
                        alt={sub.title}
                        className="w-full md:w-1/2 h-56 md:h-72 object-cover rounded-xl mb-4 md:mb-0"
                        style={{ maxWidth: 380, minWidth: 180, background: '#fff' }}
                      />
                    )}
                    <div className="flex-1 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 mt-2 font-serif tracking-tight">
                        {sub.title}
                      </h2>
                      <div className="prose prose-base max-w-none text-gray-700 text-justify"
                        dangerouslySetInnerHTML={{
                          __html: (sub.description || '').replace(/<br\s*\/?\s*>/gi, '<br />')
                        }}
                      />
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
