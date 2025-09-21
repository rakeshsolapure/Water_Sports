import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="src/assets/wallpaperflare.com_wallpaper.jpg"
          alt="Water Sports in Goa"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ultimate Destination for Water Sports Adventures in Goa..!
              </h1>

              {/* Optional Subtext */}
              <p className="text-lg md:text-xl text-gray-200">
                Experience the thrill of water sports with the best adventure packages.
              </p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="pt-4"
              >
                <a
                  href="#book-now"
                  className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition duration-300 group"
                >
                  Book Now
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div> */}
          {/* </div> */}
        {/* </motion.div> */}
      </div>
    </div>
  );
};

export default Hero;