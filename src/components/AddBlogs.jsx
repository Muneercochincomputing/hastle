import React, { useState } from 'react';
import { HiOutlineDocumentAdd } from 'react-icons/hi';
import { FiUploadCloud } from 'react-icons/fi';

const AddBlogs = () => {
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

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    setMainImage(file);
    setMainImagePreview(file ? URL.createObjectURL(file) : null);
    setMainImageName(file ? file.name : '');
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
    setSubtitles((prev) => {
      const updated = [...prev];
      updated[idx].image = file;
      updated[idx].imagePreview = file ? URL.createObjectURL(file) : null;
      updated[idx].imageName = file ? file.name : '';
      return updated;
    });
  };

  // Helper to convert File to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) return resolve("");
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert images to base64
      const mainImageBase64 = await fileToBase64(mainImage);
      const subImagesBase64 = await Promise.all(subtitles.map(s => fileToBase64(s.image)));

      // Prepare payload as per API contract
      const payload = {
        mainTitle,
        mainDescription,
        mainImage: mainImageBase64,
        subTitle1: subtitles[0].subtitle,
        subDescription1: subtitles[0].description,
        subImage1: subImagesBase64[0],
        subTitle2: subtitles[1].subtitle,
        subDescription2: subtitles[1].description,
        subImage2: subImagesBase64[1],
        subTitle3: subtitles[2].subtitle,
        subDescription3: subtitles[2].description,
        subImage3: subImagesBase64[2],
      };

      const response = await fetch('/insertBlogContent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to submit blog');
      }

      alert('Blog submitted successfully!');
      // Optionally, reset form here
    } catch (err) {
      alert('Error submitting blog: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 w-full">
      <div className="w-full bg-gray-800 rounded-2xl shadow-xl p-10 border border-gray-700 animate-fade-in">
        <div className="flex items-center justify-center mb-8">
          <span className="bg-gradient-to-r from-blue-700 to-blue-400 p-4 rounded-full shadow">
            <HiOutlineDocumentAdd className="text-4xl text-white" />
          </span>
        </div>
        <h2 className="text-3xl font-bold text-center text-white mb-2 tracking-tight font-serif">Add New Blog</h2>
        <p className="text-center text-gray-300 mb-8 font-normal">Fill in the details below to create a new blog post.</p>
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
                    required
                  />
                </label>
                {mainImageName && (
                  <div className="mt-2 text-sm text-gray-400">Selected: <span className="font-semibold text-gray-200">{mainImageName}</span></div>
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
                    required
                  />
                </label>
                {subtitles[0].imageName && (
                  <div className="mt-1 text-xs text-gray-400">Selected: <span className="font-semibold text-gray-200">{subtitles[0].imageName}</span></div>
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
                        required
                      />
                    </label>
                    {subtitles[idx].imageName && (
                      <div className="mt-1 text-xs text-gray-400">Selected: <span className="font-semibold text-gray-200">{subtitles[idx].imageName}</span></div>
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
            <button
              type="submit"
              className="w-full max-w-md bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-2xl shadow-lg transition-all duration-200 text-xl tracking-wide border-2 border-blue-900"
            >
              Submit Blog
            </button>
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