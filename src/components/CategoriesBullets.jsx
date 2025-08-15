'use client';
import { useState, useRef, useEffect } from 'react';

const categories = [
  'For you',
  'Following',
  'Money',
  'React',
  'Nft',
  'Deep Learning',
  'Artificial intelligence',
  'Coding',
  'Blockchain',
  'Javascript',
  'Software Development',
  'Python',
  'Cryptocurrency',
  'Machine Learning',
  'Technology',
  'Data Science',
  'Programming',
];

const categoryContent = {
  'For you': 'This is content for "For you" category.',
  'Following': 'This is content for "Following" category.',
  'Money': 'This is content for "Money" category.',
  'React': 'This is content for "React" category.',
  'Nft': 'This is content for "Nft" category.',
  // Add more content for other categories as needed...
};

const CategoriesBullets = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Default selected category
  const containerRef = useRef(null);
  const selectedCategoryRef = useRef(null); // Ref for the selected category
  const underlineRef = useRef(null); // Ref for the underline
  const [underlineProps, setUnderlineProps] = useState({ width: 0, left: 0 }); // State for underline position and width

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const isScrollable = container.scrollWidth > container.clientWidth;
        setCanScrollRight(isScrollable);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollWidth > container.clientWidth &&
      container.scrollLeft + container.clientWidth < container.scrollWidth
    );
  };

  const scrollRight = () => {
    const container = containerRef.current;
    container.scrollBy({ left: 150, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    container.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const handleCategoryClick = (category, index) => {
    setSelectedCategory(category);

    // Update underline position and width when a category is clicked
    const categoryElement = containerRef.current.children[index + 1]; // Use the index to locate the child element
    if (categoryElement) {
      setUnderlineProps({
        width: categoryElement.offsetWidth,
        left: categoryElement.offsetLeft - containerRef.current.scrollLeft, // Adjust based on scroll position
      });

      // Ensure the selected category is fully visible in the viewport
      categoryElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center', // Center the selected category in view
      });
    }
  };

  // Update the underline position when the component mounts or the category changes
  useEffect(() => {
    if (selectedCategoryRef.current && containerRef.current) {
      const selectedCategoryElement = selectedCategoryRef.current;
      setUnderlineProps({
        width: selectedCategoryElement.offsetWidth,
        left: selectedCategoryElement.offsetLeft - containerRef.current.scrollLeft,
      });

      // Ensure the selected category is visible in the viewport
      selectedCategoryElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [selectedCategory]);

  return (
    <div className="relative w-full">
      {/* Left arrow */}
      {canScrollLeft && (
        <button
          className="absolute left-0 top-1 bg-gray-200 p-1 rounded-full z-10"
          onClick={scrollLeft}
        >
          <svg width="26px" height="26px" className="svgIcon-use" viewBox="0 0 19 19" aria-hidden="true">
            <path fillRule="evenodd" d="M11.47 13.969 6.986 9.484 11.47 5l.553.492L8.03 9.484l3.993 3.993z"></path>
          </svg>
        </button>
      )}

      {/* Categories container */}
      <div
        className="flex overflow-x-auto scrollbar-hide scroll-smooth relative"
        ref={containerRef}
        onScroll={handleScroll}
      >
        <span className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" class="hs ht hu"><path fill-rule="evenodd" d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9z"></path></svg></span>
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              ref={category === selectedCategory ? selectedCategoryRef : null} 
              onClick={() => handleCategoryClick(category, index)} 
              className={`px-4 py-2 m-1 whitespace-nowrap text-sm cursor-pointer ${
                selectedCategory === category ? 'font-bold text-blue-500' : ''
              }`}
            >
              {category}
            </div>
          );
        })}
      </div>

      {/* Spacer with underline effect */}
      <div className="relative mt-2">
        <div className="spacer h-[1px] bg-gray-300"></div>
        {/* Underline with dynamic width and position */}
        <div
          ref={underlineRef}
          className="absolute bg-blue-500 h-[2px] transition-all duration-300"
          style={{
            width: `${underlineProps.width}px`,
            left: `${underlineProps.left}px`,
          }}
        />
      </div>

      {/* Right arrow */}
      {canScrollRight && (
        <button
          className="absolute right-0 top-1 bg-gray-200 p-1 rounded-full z-10"
          onClick={scrollRight}
        >
          <svg width="26px" height="26px" className="svgIcon-use" viewBox="0 0 19 19" aria-hidden="true" style={{ transform: 'rotate(180deg)' }}>
            <path fillRule="evenodd" d="M11.47 13.969 6.986 9.484 11.47 5l.553.492L8.03 9.484l3.993 3.993z"></path>
          </svg>
        </button>
      )}

      {/* Render selected category content */}
      <div className="mt-4">
        {selectedCategory && (
          <div>
            <h2 className="text-xl font-bold">{selectedCategory}</h2>
            <p>{categoryContent[selectedCategory] || 'Content for this category will be displayed here.'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesBullets;
