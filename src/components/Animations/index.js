import React, { useEffect, useRef } from 'react';
import './style.css';

const HorizontalScroll = ({ direction = 'right', speed = 0.1 }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;

    const startScrolling = () => {
      if (direction === 'right') {
        scrollAmount += speed;
        if (scrollAmount >= 100) {
          scrollAmount = 0; // Reset to start for continuous scroll
        }
      } else {
        scrollAmount -= speed;
        if (scrollAmount <= 0) {
          scrollAmount = 100; // Reset to end for continuous scroll
        }
      }

      scrollContainer.style.transform = `translate3d(-${scrollAmount}%, 0, 0)`;
      requestAnimationFrame(startScrolling);
    };

    startScrolling();
  }, [direction, speed]);

  // Image data array containing all images
  const imageData = [
    {
      src: "https://assets-global.website-files.com/6437f1cee9bf232c0289bfd7/6437f1cee9bf23047589c03b_1.webp",
      alt: "exemple boisson idam"
    },
    {
      src: "https://assets-global.website-files.com/6437f1cee9bf232c0289bfd7/6437f1cee9bf231ba789c037_2.webp",
      alt: "intérieur idam"
    },
    {
      src: "https://assets-global.website-files.com/6437f1cee9bf232c0289bfd7/6437f1cee9bf23a59889c03f_3.webp",
      alt: "exemple plat idam"
    },
    {
      src: "https://assets-global.website-files.com/6437f1cee9bf232c0289bfd7/6437f1cee9bf230b4789c039_6.webp",
      alt: "exemple boisson idam"
    },
    {
      src: "https://assets-global.website-files.com/6437f1cee9bf232c0289bfd7/6437f1cee9bf23262b89c038_5.webp",
      alt: "intérieur idam"
    },
    {
      src: "https://assets-global.website-files.com/6437f1cee9bf232c0289bfd7/6437f1cee9bf23047589c03b_1.webp",
      alt: "exemple boisson idam"
    },
    {
      src: "https://assets-global.website-files.com/6437f1cee9bf232c0289bfd7/6437f1cee9bf231ba789c037_2.webp",
      alt: "intérieur idam"
    },
    {
      src: "https://assets-global.website-files.com/6437f1cee9bf232c0289bfd7/6437f1cee9bf23a59889c03f_3.webp",
      alt: "exemple plat idam"
    },
    {
      src: "https://assets-global.website-files.com/6437f1cee9bf232c0289bfd7/6437f1cee9bf230b4789c039_6.webp",
      alt: "exemple boisson idam"
    },
    {
      src: "https://assets-global.website-files.com/6437f1cee9bf232c0289bfd7/6437f1cee9bf23262b89c038_5.webp",
      alt: "intérieur idam"
    }
  ];

  return (
    <div className="scroll-container">
      <div ref={scrollContainerRef} className="scroll-content">
        <div className="header78_image-list">
          {imageData.map((image, index) => (
            <div key={index} className="header78_image-wrapper">
              <img src={image.src} alt={image.alt} className="header78_image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
