import { IoMenu } from "react-icons/io5"

function Navbar() {
  return (
    <>
      <div className="w-full h-12 flex justify-between p-2 sticky top-0 bg-slate-600/90 backdrop-blur-sm">
        {/* <div className="w-full h-full absolute top-0 backdrop-blur-md"></div> */}
        <a href="#" className="flex items-center gap-2">
          <img src="./src/assets/react.svg" alt="hehe" />
          <h2>REACT</h2>
        </a>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="menu" id="menu" className="hidden peer" />
          <label htmlFor="menu" className="text-4xl">
            <IoMenu />
          </label>
        </div>
      </div >
    </>
  )
}

export default Navbar
