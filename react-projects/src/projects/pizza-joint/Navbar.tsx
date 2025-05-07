import { RiPieChartLine } from "react-icons/ri"
import {motion} from "framer-motion"

function Navbar() {
  return (
    <motion.div className="sticky top-0 w-full h-12 flex gap-4 items-center p-4 backdrop-blur-md"
      initial={{y:-300}}
      animate={{y:0}}
      transition={{type:"spring",duration:1.5,staggerChildren:120}}
    >
      <RiPieChartLine color="white" className="w-10 h-10" />
      <h2 className="w-full border-b border-b-slate-200 text-sm text-white">Pizza Joint</h2>
    </motion.div>
  )
}

export default Navbar
