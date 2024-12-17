import React, { useState, useEffect } from "react";
import axios from "axios";
import imageCompression from "browser-image-compression";

const CMS = () => {
  const [text, setText] = useState(["Edit this text!"]);
  const [currentPage, setCurrentPage] = useState("Home");
  const [pageOptions, setPageOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [images, setImages] = useState([null, null, null]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);

  const url = import.meta.env.VITE_HOST_URL;
  const sessionId = sessionStorage.getItem('sessionId');

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 6000); // Hide the spinner after 6 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  useEffect(() => {
    const fetchCMSData = async () => {
      try {
        const result = await axios.get(`${url}/getcmsAll`);
        
        // Sort pageOptions based on grouping and numeric part
        const groupPages = (data) => {
          const grouped = {};
          
          // Group pages by their prefix (AboutPage, BlogPage, etc.)
          data.forEach(item => {
            const pagePrefix = item.page.replace(/\d+$/, ''); // Remove numeric suffix (e.g., 'AboutPage1' -> 'AboutPage')
            if (!grouped[pagePrefix]) {
              grouped[pagePrefix] = [];
            }
            grouped[pagePrefix].push(item);
          });

          return grouped;
        };

        // Sorting function for numeric suffix
        const sortByNumericSuffix = (pages) => {
          return pages.sort((a, b) => {
            const numA = parseInt(a.page.replace(/\D/g, ''));
            const numB = parseInt(b.page.replace(/\D/g, ''));
            return numA - numB;
          });
        };

        const groupedPages = groupPages(result.data);

        // Define the order of page types
        const pageOrder = ["AboutPage", "BlogPage", "ServicePage", "HomePage", "BlogLandingPage"];

        // Combine all grouped and sorted pages based on the defined order
        let sortedPages = [];
        pageOrder.forEach(prefix => {
          if (groupedPages[prefix]) {
            sortedPages = [...sortedPages, ...sortByNumericSuffix(groupedPages[prefix])];
          }
        });

        setPageOptions(sortedPages);
        console.log(sortedPages); // Log sorted pages for debugging
      } catch (error) {
        console.error("Error fetching CMS data:", error);
        alert("An error occurred while fetching CMS data. Please try again.");
      }
    };
    fetchCMSData();
  }, [url]);

  const handleImageUpload = async (event, index) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
      }

      try {
        const options = {
          maxSizeMB: 2,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };

        let compressedFile = await imageCompression(file, options);

        if (compressedFile.size < 50 * 1024) { // 50 KB
          options.maxSizeMB = 0.05; // Setting max size to 50 KB (0.05 MB)
          compressedFile = await imageCompression(file, options);
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          const updatedImages = [...images];
          updatedImages[index] = e.target.result;
          setImages(updatedImages);
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error("Error compressing the image:", error);
        alert("An error occurred while compressing the image.");
      }
    }
  };

  const handlePageSelection = (page) => {
    setCurrentPage(page);
    setSelectedOption(null);
    setImages([null, null, null]);
    setText(["Edit this text!"]);

    const optionsForPage = pageOptions.filter((option) => option.page === page);
    setFilteredOptions(optionsForPage);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setImages(option.images || [null, null, null]);
    setText(option.text || ["Edit this text!"]);
  };

  const handleSaveChanges = async () => {
    if (selectedOption) {
      const data = {
        page: currentPage,
        label: selectedOption.label,
        text,
      };

      images.forEach((image, index) => {
        if (image !== null) {
          data[`image${index + 1}`] = image;
        }
      });

      setLoading(true);
      try {
        await axios.put(`${url}/addcms`, data);
        alert("Changes saved successfully!");
      } catch (error) {
        console.error("Error saving changes:", error);
        alert("An error occurred while saving changes.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please select an option to save changes.");
    }
  };

  return (
    <div className={`relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white  ${sessionId ? `` : `hidden`}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <header className="flex items-center justify-between px-8 py-4 bg-gray-800/30 backdrop-blur-md shadow-lg">
        <h1 className="text-2xl font-bold tracking-wider">CMS Dashboard</h1>
      </header>
      <div className="flex flex-col lg:flex-row">
        <aside className="w-full lg:w-1/6 bg-gray-800/40 backdrop-blur-lg p-6">

          <div className={`flex min-h-screen fixed top-0 z-50 ${visible ? '' : 'hidden'}`}>
            {visible && (
              <div
                className="w-10 h-10 border-4 justify-center border-t-blue-500 border-gray-200 rounded-full animate-spin"
                style={{ animationDuration: '1s', animationIterationCount: '6' }}
              ></div>
            )}
          </div>

          <nav className="space-y-4">
            {[...new Set(pageOptions.map((option) => option.page))].map((page) => (
              <button
                key={page}
                onClick={() => handlePageSelection(page)}
                className={`block px-4 py-2 rounded-lg ${currentPage === page
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600"
                  : "white"
                  } shadow-lg text-center hover:scale-105 transition-transform duration-300`}
              >
                {page}
              </button>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="mb-6">
            <label htmlFor="pageOptions" className="block mb-2 text-sm">Select Content:</label>
            <select
              id="pageOptions"
              className="w-full p-2 rounded-lg bg-gray-200 text-gray-800"
              value={selectedOption?.label || ""}
              onChange={(e) =>
                handleOptionChange(
                  filteredOptions.find((opt) => opt.label === e.target.value)
                )
              }
            >
              <option value="" disabled>Select an option</option>
              {filteredOptions.map((option) => (
                <option key={option.label} value={option.label}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
            {images.map((image, index) => (
              <div
                key={index}
                className="p-12 rounded-lg shadow-2xl bg-gradient-to-tr from-gray-700 to-gray-800 hover:scale-105 transition-transform duration-300"
              >
                <h2 className="mb-2 text-lg font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-400">
                  {`Media Management for image ${index + 1}`}
                </h2>
                <div className="mt-4">
                  <input
                    type="file"
                    accept="image/*"
                    className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                    onChange={(e) => handleImageUpload(e, index)}
                  />
                  <div className="mt-4 border-2 border-dashed border-gray-600 rounded-lg p-4 h-64 flex items-center justify-center">
                    {image ? (
                      <img
                        src={image}
                        alt={`Preview image ${index + 1}`}
                        className="w-auto h-full max-h-full object-contain rounded-lg"
                      />
                    ) : (
                      <p className="text-gray-400 text-sm">No image selected</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Edit Text Content:</h3>
            {text.map((data, index) => (
              <textarea
                key={index}
                className="w-full p-4 rounded-lg bg-gray-800 border-2 border-dashed border-gray-600 text-gray-200 resize-none h-32 mb-4"
                value={data}
                onChange={(e) => {
                  const updatedText = [...text];
                  updatedText[index] = e.target.value;
                  setText(updatedText);
                }}
              ></textarea>
            ))}
          </div>
          <button
            onClick={handleSaveChanges}
            className="mt-6 px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded-lg hover:bg-green-600 transition-transform duration-300"
          >
            Save Changes
          </button>
        </main>
      </div>
      <footer className="bg-gray-900 text-gray-400 text-center py-4">
        <p className="text-sm">Cochin Computing CMS - 2024</p>
      </footer>
    </div>
  );
};

export default CMS;
