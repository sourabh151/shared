import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <motion.div className="w-full h-full flex flex-col justify-center gap-10 items-center"
    initial={{x:"-100vw"}}
    animate={{x:0}}
    >
      <p className="text-white text-2xl font-bold">Welcome to Pizza Joint</p>
      <Link to="/base" className="border border-white rounded-full text-slate-200 py-2 px-4">Create Your Pizza</Link>
    </motion.div>
  )
}

export default HomePage
