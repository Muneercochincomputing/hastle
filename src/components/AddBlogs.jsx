import React, { useState, useEffect } from 'react';
// import BlogList from './BlogList';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineDocumentAdd } from 'react-icons/hi';
import { FiUploadCloud } from 'react-icons/fi';

const AddBlogs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Use local state for editId so we can set it without navigation
  const [editId, setEditId] = useState(location.state?.editId || null);
  const [mainTitle, setMainTitle] = useState('');
  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [mainImageName, setMainImageName] = useState('');
  const [mainDescription, setMainDescription] = useState('');

  const [subtitles, setSubtitles] = useState([
    { subtitle: '', image: null, imagePreview: null, imageName: '', description: '' },
    { subtitle: '', image: null, imagePreview: null, imageName: '', description: '' },
    { subtitle: '', image: null, imagePreview: null, imageName: '', description: '' },
  ]);

  // Prefill for edit mode
  const [blogLoading, setBlogLoading] = useState(false);
  const [blogError, setBlogError] = useState(null);
  useEffect(() => {
    // Only clear fields if not editing
    if (!editId) {
      setMainTitle('');
      setMainDescription('');
      setMainImage(null);
      setMainImagePreview(null);
      setMainImageName('');
      setSubtitles([
        { subtitle: '', image: null, imagePreview: null, imageName: '', description: '' },
        { subtitle: '', image: null, imagePreview: null, imageName: '', description: '' },
        { subtitle: '', image: null, imagePreview: null, imageName: '', description: '' },
      ]);
    }
  }, [editId]);

  // Handler to load a blog for editing from BlogList
  const handleEditBlog = (blog) => {
    setEditId(blog.id);
    setMainTitle(blog.mainTitle || '');
    setMainDescription(blog.mainDescription || '');
    setMainImageName('');
    setMainImagePreview(blog.mainImage || null);
    setMainImage(null);
    setSubtitles([
      ...[0, 1, 2].map(i => ({
        subtitle: blog.subSections?.[i]?.title || '',
        image: null,
        imagePreview: blog.subSections?.[i]?.image || null,
        imageName: '',
        description: blog.subSections?.[i]?.description || '',
      }))
    ]);
  };

  // State for showing blog list in edit mode
  const [showBlogList, setShowBlogList] = useState(true);
  const [blogGroups, setBlogGroups] = useState({});
  const [loadingBlogs, setLoadingBlogs] = useState(false);

  // Fetch blog list for edit mode (limit to latest 4 blogs only)
  useEffect(() => {
    if (showBlogList) {
      setLoadingBlogs(true);
      fetch('/getbloglist')
        .then(res => res.json())
        .then(data => {
          // data is an array of blogs sorted by createdAt desc
          const latest4 = data.slice(0, 4);
          // Group by mainTitle for display (optional, or just show as one group)
          const group = { 'Latest Blogs': latest4 };
          setBlogGroups(group);
          setLoadingBlogs(false);
        })
        .catch(() => setLoadingBlogs(false));
    }
  }, [showBlogList]);

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainImage(file);
      setMainImagePreview(URL.createObjectURL(file));
      setMainImageName(file.name);
    }
    // If no file selected, do not clear preview or name
  };

  const handleSubtitleChange = (idx, field, value) => {
    setSubtitles((prev) => {
      const updated = [...prev];
      updated[idx][field] = value;
      return updated;
    });
  };

  const handleSubtitleImageChange = (idx, e) => {
    const file = e.target.files[0];
    if (file) {
      setSubtitles((prev) => {
        const updated = [...prev];
        updated[idx].image = file;
        updated[idx].imagePreview = URL.createObjectURL(file);
        updated[idx].imageName = file.name;
        return updated;
      });
    }
    // If no file selected, do not clear preview or name
  };



  // Loading state for API submit/update
  const [apiLoading, setApiLoading] = useState(false);

  // Submit new blog (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiLoading(true);
    try {
      console.log('Submitting new blog.');
      const formData = new FormData();
      formData.append('mainTitle', mainTitle);
      formData.append('mainDescription', mainDescription);
      if (mainImage) formData.append('mainImage', mainImage);
      formData.append('subTitle1', subtitles[0].subtitle);
      formData.append('subDescription1', subtitles[0].description);
      if (subtitles[0].image) formData.append('subImage1', subtitles[0].image);
      formData.append('subTitle2', subtitles[1].subtitle);
      formData.append('subDescription2', subtitles[1].description);
      if (subtitles[1].image) formData.append('subImage2', subtitles[1].image);
      formData.append('subTitle3', subtitles[2].subtitle);
      formData.append('subDescription3', subtitles[2].description);
      if (subtitles[2].image) formData.append('subImage3', subtitles[2].image);

      const response = await fetch('/insertBlogContent', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Blog submit failed:', errorText);
        throw new Error(errorText || 'Failed to submit blog');
      }

      alert('Blog submitted successfully!');
      setApiLoading(false);
    } catch (err) {
      setApiLoading(false);
      console.error('Error submitting blog:', err);
      alert('Error submitting blog: ' + err.message);
    }
  };

  // Submit edited blog (PUT)
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setApiLoading(true);
    try {
      if (!editId) return;
      console.log('Submitting edited blog.');
      const formData = new FormData();
      formData.append('mainTitle', mainTitle);
      formData.append('mainDescription', mainDescription);
      if (mainImage) formData.append('mainImage', mainImage);
      formData.append('subTitle1', subtitles[0].subtitle);
      formData.append('subDescription1', subtitles[0].description);
      if (subtitles[0].image) formData.append('subImage1', subtitles[0].image);
      formData.append('subTitle2', subtitles[1].subtitle);
      formData.append('subDescription2', subtitles[1].description);
      if (subtitles[1].image) formData.append('subImage2', subtitles[1].image);
      formData.append('subTitle3', subtitles[2].subtitle);
      formData.append('subDescription3', subtitles[2].description);
      if (subtitles[2].image) formData.append('subImage3', subtitles[2].image);

      const response = await fetch(`/blog/${editId}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Blog edit failed:', errorText);
        throw new Error(errorText || 'Failed to update blog');
      }

      alert('Blog updated successfully!');
      setApiLoading(false);
    } catch (err) {
      setApiLoading(false);
      console.error('Error editing blog:', err);
      alert('Error editing blog: ' + err.message);
    }
  };

  if (editId && blogLoading) {
    return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white text-xl">Loading blog for editing...</div>;
  }
  if (editId && blogError) {
    return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-red-400 text-xl">{blogError}</div>;
  }
  return (
    <div className="min-h-screen bg-gray-900 py-8 w-full relative">
      {/* API loading overlay */}
      {apiLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="flex flex-col items-center">
            <svg className="animate-spin h-16 w-16 text-blue-400 mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            <div className="text-white text-xl font-bold">Please wait...</div>
          </div>
        </div>
      )}
      <div className="w-full bg-gray-800 rounded-2xl shadow-xl p-10 border border-gray-700 animate-fade-in">
        {/* Tab UI for Add/Edit mode */}
        <div className="flex justify-center mb-8">
          <div className="flex rounded-xl overflow-hidden border-2 border-blue-700 bg-gray-900">
            <button
              type="button"
              className={`px-8 py-3 font-bold text-lg transition-all duration-200 focus:outline-none ${!editId ? 'bg-blue-700 text-white' : 'bg-gray-900 text-blue-300 hover:bg-blue-800 hover:text-white'}`}
              disabled={!editId}
              onClick={() => {
                // Hide blog list and reset form to add mode
                setShowBlogList(false);
                setEditId(null);
                setMainTitle('');
                setMainDescription('');
                setMainImage(null);
                setMainImagePreview(null);
                setMainImageName('');
                setSubtitles([
                  { subtitle: '', image: null, imagePreview: null, imageName: '', description: '' },
                  { subtitle: '', image: null, imagePreview: null, imageName: '', description: '' },
                  { subtitle: '', image: null, imagePreview: null, imageName: '', description: '' },
                ]);
              }}
            >
              Add Blog
            </button>
            <button
              type="button"
              className={`px-8 py-3 font-bold text-lg transition-all duration-200 focus:outline-none ${editId ? 'bg-blue-700 text-white' : 'bg-gray-900 text-blue-300 hover:bg-blue-800 hover:text-white'}`}
              disabled={!!editId}
              onClick={() => setShowBlogList((prev) => !prev)}
            >
              Edit Blog
            </button>
          </div>
        </div>
        {/* Collapsible blog list for edit mode */}
        {showBlogList && (
          <div className="mb-8">
            <div className="bg-gray-700 rounded-xl p-6 shadow border border-blue-700">
              <h3 className="text-xl font-bold text-white mb-4">Uploaded Blogs</h3>
              {loadingBlogs ? (
                <div className="text-gray-300">Loading blogs...</div>
              ) : (
                Object.keys(blogGroups).length === 0 ? (
                  <div className="text-gray-400">No blogs found.</div>
                ) : (
                  Object.entries(blogGroups).map(([group, blogs]) => (
                    <div key={group} className="mb-6">
                      <div className="font-bold text-lg text-blue-300 mb-2">{group}</div>
                      <ul className="space-y-2">
                        {blogs.map(blog => (
                          <li key={blog.id} className="bg-white rounded-lg shadow p-4 flex items-center justify-between border border-gray-200">
                            <div>
                              <div className="font-semibold text-base">{blog.mainTitle}</div>
                              <div className="text-gray-500 text-xs line-clamp-1">{blog.mainDescription?.slice(0, 80)}...</div>
                            </div>
                            <button
                              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold ml-4"
                              onClick={() => handleEditBlog(blog)}
                            >
                              Edit
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )
              )}
              <div className="text-xs text-gray-400 mt-2">Click 'Edit' on a blog to load it for editing.</div>
            </div>
          </div>
        )}
        <div className="flex items-center justify-center mb-8">
          <span className="bg-gradient-to-r from-blue-700 to-blue-400 p-4 rounded-full shadow">
            <HiOutlineDocumentAdd className="text-4xl text-white" />
          </span>
        </div>
        <h2 className="text-3xl font-bold text-center text-white mb-2 tracking-tight font-serif">{editId ? 'Edit Blog' : 'Add New Blog'}</h2>
        <p className="text-center text-gray-300 mb-8 font-normal">{editId ? 'Update the details below to edit the blog post.' : 'Fill in the details below to create a new blog post.'}</p>
        <form onSubmit={handleSubmit} className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left: Main Blog Info */}
            <div className="flex flex-col gap-8 justify-start">
              {/* Main Title */}
              <div>
                <label className="block font-semibold mb-2 text-gray-200">Main Title</label>
                <input
                  type="text"
                  className="w-full border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-700 text-white transition-all duration-200 shadow-sm placeholder-gray-400"
                  value={mainTitle}
                  onChange={(e) => setMainTitle(e.target.value)}
                  required
                />
              </div>
              {/* Main Image Modern Upload */}
              <div>
                <label className="block font-semibold mb-2 text-gray-200">Main Image</label>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-600 rounded-xl cursor-pointer bg-gray-900 hover:bg-gray-800 transition group">
                  <FiUploadCloud className="text-3xl text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400 font-medium">Click to upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleMainImageChange}
                    required={!editId}
                  />
                </label>
                {mainImageName && (
                  <div className="mt-2 text-sm text-gray-400">Selected: <span className="font-semibold text-gray-200">{mainImageName}</span></div>
                )}
                {!mainImageName && mainImagePreview && editId && (
                  <div className="mt-2 text-sm text-gray-400">Current image in use</div>
                )}
                {mainImagePreview && (
                  <div className="mt-4 flex justify-center">
                    <div className="rounded-xl overflow-hidden shadow border border-gray-700 bg-gray-900 w-60">
                      <img
                        src={mainImagePreview}
                        alt="Main Preview"
                        className="h-40 w-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                )}
              </div>
              {/* Main Description */}
              <div>
                <label className="block font-semibold mb-2 text-gray-200">Main Description</label>
                <textarea
                  className="w-full border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-700 text-white transition-all duration-200 shadow-sm placeholder-gray-400"
                  rows={4}
                  value={mainDescription}
                  onChange={(e) => setMainDescription(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* Right: Subtitle 1 on top, Subtitle 2 & 3 side by side below */}
            <div className="flex flex-col gap-8 justify-start">
              {/* Subtitle 1 */}
              <div className="bg-gray-800 rounded-2xl p-6 shadow border border-gray-700 animate-fade-in-up">
                <h3 className="font-semibold mb-3 text-lg text-white font-serif">Subtitle 1</h3>
                <input
                  type="text"
                  className="w-full border border-gray-700 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-700 text-white transition-all duration-200 shadow-sm placeholder-gray-400"
                  placeholder="Subtitle 1"
                  value={subtitles[0].subtitle}
                  onChange={(e) => handleSubtitleChange(0, 'subtitle', e.target.value)}
                  required
                />
                <label className="block font-semibold mb-2 text-gray-200">Subtitle Image</label>
                <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-gray-600 rounded-xl cursor-pointer bg-gray-900 hover:bg-gray-800 transition group">
                  <FiUploadCloud className="text-2xl text-blue-400 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400 font-medium text-sm">Click to upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleSubtitleImageChange(0, e)}
                    required={!editId}
                  />
                </label>
                {subtitles[0].imageName && (
                  <div className="mt-1 text-xs text-gray-400">Selected: <span className="font-semibold text-gray-200">{subtitles[0].imageName}</span></div>
                )}
                {!subtitles[0].imageName && subtitles[0].imagePreview && editId && (
                  <div className="mt-1 text-xs text-gray-400">Current image in use</div>
                )}
                {subtitles[0].imagePreview && (
                  <div className="mt-3 flex justify-center">
                    <div className="rounded-lg overflow-hidden shadow border border-gray-700 bg-gray-900 w-44">
                      <img
                        src={subtitles[0].imagePreview}
                        alt="Subtitle 1 Preview"
                        className="h-28 w-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                )}
                <label className="block font-semibold mb-2 text-gray-200 mt-3">Subtitle Description</label>
                <textarea
                  className="w-full border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-700 text-white transition-all duration-200 shadow-sm placeholder-gray-400"
                  rows={2}
                  value={subtitles[0].description}
                  onChange={(e) => handleSubtitleChange(0, 'description', e.target.value)}
                  required
                />
              </div>
              {/* Subtitle 2 & 3 side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1,2].map((idx) => (
                  <div key={idx} className="bg-gray-800 rounded-2xl p-6 shadow border border-gray-700 animate-fade-in-up">
                    <h3 className="font-semibold mb-3 text-lg text-white font-serif">Subtitle {idx+1}</h3>
                    <input
                      type="text"
                    className="w-full border border-gray-700 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-700 text-white transition-all duration-200 shadow-sm placeholder-gray-400"
                      placeholder={`Subtitle ${idx+1}`}
                      value={subtitles[idx].subtitle}
                      onChange={(e) => handleSubtitleChange(idx, 'subtitle', e.target.value)}
                      required
                    />
                    <label className="block font-semibold mb-2 text-gray-200">Subtitle Image</label>
                    <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-gray-600 rounded-xl cursor-pointer bg-gray-900 hover:bg-gray-800 transition group">
                      <FiUploadCloud className="text-2xl text-blue-400 mb-1 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-400 font-medium text-sm">Click to upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleSubtitleImageChange(idx, e)}
                        required={!editId}
                      />
                    </label>
                    {subtitles[idx].imageName && (
                      <div className="mt-1 text-xs text-gray-400">Selected: <span className="font-semibold text-gray-200">{subtitles[idx].imageName}</span></div>
                    )}
                    {!subtitles[idx].imageName && subtitles[idx].imagePreview && editId && (
                      <div className="mt-1 text-xs text-gray-400">Current image in use</div>
                    )}
                    {subtitles[idx].imagePreview && (
                      <div className="mt-3 flex justify-center">
                        <div className="rounded-lg overflow-hidden shadow border border-gray-700 bg-gray-900 w-44">
                          <img
                            src={subtitles[idx].imagePreview}
                            alt={`Subtitle ${idx+1} Preview`}
                            className="h-28 w-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    )}
                    <label className="block font-semibold mb-2 text-gray-200 mt-3">Subtitle Description</label>
                    <textarea
                      className="w-full border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-700 text-white transition-all duration-200 shadow-sm placeholder-gray-400"
                      rows={2}
                      value={subtitles[idx].description}
                      onChange={(e) => handleSubtitleChange(idx, 'description', e.target.value)}
                      required
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            {editId ? (
              <button
                type="button"
                onClick={handleEditSubmit}
                className="w-full max-w-md bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-2xl shadow-lg transition-all duration-200 text-xl tracking-wide border-2 border-blue-900"
              >
                Update Blog
              </button>
            ) : (
              <button
                type="submit"
                className="w-full max-w-md bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-2xl shadow-lg transition-all duration-200 text-xl tracking-wide border-2 border-blue-900"
              >
                Submit Blog
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;

// Animations (add to your global CSS or Tailwind config if not present):
// .animate-fade-in { animation: fadeIn 0.7s ease; }
// .animate-fade-in-up { animation: fadeInUp 0.7s ease; }
// .animate-bounce-once { animation: bounce 0.7s 1; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
// @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } } 