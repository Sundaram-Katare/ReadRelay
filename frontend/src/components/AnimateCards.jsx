import { motion } from "framer-motion";

export default function AnimatedCards() {
  return (
    <>
      <div className="flex flex-row gap-10 my-10 justify-center">
        
        {/* Card 1 - slide in from right */}
        <motion.div
          initial={{ opacity: 0, x: 120, rotate: 0 }}
          animate={{ opacity: 1, x: 20, rotate: -6 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img
            src="https://m.media-amazon.com/images/I/617lxveUjYL._AC_UF1000,1000_QL80_.jpg"
            className="h-80 rounded-2xl shadow-2xl shadow-black"
            alt="Card 1"
          />
        </motion.div>

        {/* Card 2 - slide up */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <img
            src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855652.jpg"
            className="h-80 rounded-2xl shadow-2xl shadow-black"
            alt="Card 2"
          />
        </motion.div>

        {/* Card 3 - center pop (zoom in) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <img
            src="https://www.bookswagon.com/productimages/mainimages/292/9780735211292.jpg"
            className="h-80 rounded-2xl shadow-2xl shadow-black"
            alt="Card 3"
          />
        </motion.div>

        {/* Card 4 - slide up with rotation */}
        <motion.div
          initial={{ opacity: 0, y: 120, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: 6 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg"
            className="h-80 rounded-2xl shadow-2xl shadow-black"
            alt="Card 4"
          />
        </motion.div>

        {/* Card 5 - slide in from left */}
        <motion.div
          initial={{ opacity: 0, x: -120, rotate: 0 }}
          animate={{ opacity: 1, x: -20, rotate: -6 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
            className="h-80 rounded-2xl shadow-2xl shadow-black"
            alt="Card 5"
          />
        </motion.div>

      </div>
    </>
  );
}