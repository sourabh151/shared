import { motion } from "framer-motion"
function LikeButton() {
  return (
    <motion.button className="px-3 py-1 rounded-md bg-blue-500 text-white text-2xl shadow-sm shadow-black"
      initial={{}}
      whileTap={{ scale: [0.75, 0.5, 1], rotateZ: [0, 50, 360] }}
      transition={{ times: [0, 0.2, 1], duration: 1 }}
    >Like</motion.button>
  )
}

export default LikeButton
