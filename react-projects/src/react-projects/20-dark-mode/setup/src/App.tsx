import { useState } from 'react'
import data from './data'
import Article from './Article'
//import { useThemeContext } from './contexts/ThemeContext'

function App() {
  //const { theme, switchTheme } = useThemeContext()
  const [theme, setTheme] = useState<string>("dark-mode-colors-light")
  function handleClick() {
    setTheme(theme === "dark-mode-colors-light" ? "dark-mode-colors-dark" : "dark-mode-colors-light")
  }
  return (
    <main className={"w-screen h-screen flex flex-col bg-myBg text-myText dark-mode-transition " + theme}>
      <header className='w-full flex flex-row justify-around items-center h-32 mb-12'>
        <h2 className='text-4xl font-bold text-myText'>Overreacted</h2>
        <button onClick={() => handleClick()} className='bg-myAccent text-myBg px-4 py-1 w-auto h-auto rounded-md capitalize font-semibold'>toggle</button>
      </header>
      <section>
        {
          data.map((article) => {
            return <Article key={article.id} data={article} />
          })
        }
      </section>
    </main>
  )
}

export default App
