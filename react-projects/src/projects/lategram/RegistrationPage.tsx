import { useRef, useState } from "react"
function RegistrationPage() {
  const [isLogin, setIsLogin] = useState(true)
  const username = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  function handleClick() {
    (async () => {
      try {
        if (username.current && password.current) {
          const url = `http://localhost:5000/authenticate/${isLogin ? "login" : "signup"}`
          const data = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "username": username.current.value,
              "password": password.current.value
            })
          })
          const result = await data.json()
          console.log(result.token);
        }
      } catch (error) {
        console.log(error);
      }
    })()
  }
  return (
    <div className="mx-4 w-full border border-neutral-800 rounded-md p-2 bg-primary text-primary_accent"
    >
      <div className="w-full h-12">
        <button className={`text-2xl font-bold w-1/2 h-full rounded-md ${isLogin ? " bg-primary_accent text-primary" : " bg-primary text-primary_accent"}`} onClick={() => setIsLogin(true)}>Login</button>
        <button className={`text-2xl font-bold w-1/2 h-full rounded-md ${isLogin ? " bg-primary text-primary_accent" : " bg-primary_accent text-primary"}`} onClick={() => setIsLogin(false)}>Signup</button>
      </div>
      <div className="w-full h-48 flex flex-col justify-around">
        <input type="text" id="username" placeholder="username" className="w-full rounded-md focus:outline-primary_accent p-2 font-semibold text-xl" ref={username} />
        <input type="password" id="password" placeholder="password" className="w-full rounded-md focus:outline-primary_accent p-2 font-semibold text-xl" ref={password} />
        <button className="w-full rounded-md bg-primary_accent p-2 text-center font-bold text-primary active:outline-primary text-2xl" onClick={handleClick}>
          {
            isLogin ? "Login" : "Signup"
          }
        </button>
      </div>
    </div >
  )
}

export default RegistrationPage
