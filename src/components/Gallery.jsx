import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Gallery Component with true masonry layout
export default function Gallery() {
  const [columns, setColumns] = useState(3);
  const containerRef = useRef(null);
  
  // Images with descriptions
  const images = [
    {
      id: 1,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Modern architectural marvel in downtown metropolis",
      aspectRatio: 1.33 // 4:3
    },
    {
      id: 2,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Candid portrait capturing raw human emotion",
      aspectRatio: 0.75 // 3:4
    },
    {
      id: 3,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Serene forest landscape at dawn",
      aspectRatio: 1.25 // 5:4
    },
    {
      id: 4,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Hidden alleyway in ancient European city",
      aspectRatio: 1.4 // 7:5
    },
    {
      id: 5,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Abstract composition exploring form and shadow",
      aspectRatio: 0.67 // 2:3
    },
    {
      id: 6,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Vibrant street photography capturing daily life",
      aspectRatio: 1.5 // 3:2
    },
    {
      id: 7,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Minimalist study in negative space",
      aspectRatio: 1 // 1:1
    },
    {
      id: 8,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Urban landscape transitioning at dusk",
      aspectRatio: 1.6 // 8:5
    },
    {
      id: 9,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Culinary artistry from renowned chef",
      aspectRatio: 1.5 // 3:2
    },
    {
      id: 10,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Intimate portrait series exploring identity",
      aspectRatio: 0.78 // 7:9
    },
    {
      id: 11,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Avant-garde fashion concept shoot",
      aspectRatio: 0.71 // 5:7
    },
    {
      id: 12,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Minimalist product photography against textured backdrop",
      aspectRatio: 1 // 1:1
    },
    {
      id: 13,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Macro photography revealing hidden details",
      aspectRatio: 1.33 // 4:3
    },
    {
      id: 14,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Breathtaking aerial perspective of coastal formations",
      aspectRatio: 1 // 1:1
    },
    {
      id: 15,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Experimental photography pushing boundaries",
      aspectRatio: 1.25 // 5:4
    },
    {
      id: 16,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Documentary moment capturing historical significance",
      aspectRatio: 1.2 // 6:5
    },
    {
      id: 17,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Environmental portrait in subject's creative space",
      aspectRatio: 0.57 // 4:7
    },
    {
      id: 18,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Dramatic landscape showcasing natural wonder",
      aspectRatio: 1.75 // 7:4
    },
    {
      id: 19,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Timeless black and white composition",
      aspectRatio: 1 // 1:1
    },
    {
      id: 20,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Architectural study of light and geometry",
      aspectRatio: 1.29 // 9:7
    },
    {
      id: 21,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Urban street art reflecting cultural movement",
      aspectRatio: 1.5 // 3:2
    },
    {
      id: 22,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Conceptual piece exploring modern themes",
      aspectRatio: 1 // 1:1
    },
    {
      id: 23,
      url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
      description: "Night photography capturing city in motion",
      aspectRatio: 0.83 // 5:6
    },
  ];
  
  // Initialize with shuffled images
  const [galleryItems, setGalleryItems] = useState(() => {
    return [...images].sort(() => Math.random() - 0.5);
  });
  
  // Handle responsive column count
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(2);
      } else if (window.innerWidth < 1024) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };
    
    // Initial setup
    updateColumns();
    
    // Listen to window resize events
    window.addEventListener('resize', updateColumns);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateColumns);
  }, []);
  
  // Arrange images into column structure based on aspect ratio
  const getColumnizedItems = () => {
    // Create initial array of columns
    const columnHeights = Array(columns).fill(0);
    const columnItems = Array(columns).fill().map(() => []);
    
    // Distribute images to columns
    galleryItems.forEach(image => {
      // Find the shortest column
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      
      // Add image to shortest column
      columnItems[shortestColumnIndex].push(image);
      
      // Update column height (add image height based on aspect ratio)
      // Use normalized height for calculation (taller images = higher value)
      columnHeights[shortestColumnIndex] += 1 / image.aspectRatio;
    });
    
    return columnItems;
  };
  
  // Get styled columns
  const columnItems = getColumnizedItems();
  
  // Container variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  // Item variants for Framer Motion
  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  
  return (
    <motion.div 
      ref={containerRef}
      className="w-full min-h-screen p-1 md:p-2"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex w-full gap-1 md:gap-2">
        {/* Create actual columns */}
        {columnItems.map((column, colIndex) => (
          <div key={`col-${colIndex}`} className="flex-1 flex flex-col gap-1 md:gap-2">
            {column.map(image => (
              <GalleryItem 
                key={image.id}
                image={image}
                itemVariants={itemVariants}
              />
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Individual Gallery Item Component
const GalleryItem = ({ image, itemVariants }) => {
  const [hover, setHover] = useState(false);
  
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg"
      variants={itemVariants}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <div 
        className="w-full overflow-hidden"
        style={{ 
          paddingBottom: `${(1 / image.aspectRatio) * 100}%`,
          position: 'relative'
        }}
      >
        <div
          className="absolute inset-0"
          style={{ 
            backgroundImage: `url(${image.url})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'
          }}
        >
          {/* Image overlay shadow for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent opacity-20"></div>
          
          {/* Description overlay */}
          <motion.div 
            className="absolute inset-0 flex items-end p-2 md:p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: hover ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-full bg-navy-800/70 backdrop-blur-sm text-white p-2 rounded-md shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: hover ? 0 : 20, 
                opacity: hover ? 1 : 0 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20 
              }}
            >
              <p className="text-xs md:text-sm font-medium">{image.description}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};