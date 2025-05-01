const btn: HTMLButtonElement | null = document.querySelector(".btn")
const list: HTMLUListElement | null = document.querySelector(".list")
const inp: HTMLInputElement | null = document.querySelector(".form-input")
const form: HTMLFormElement | null = document.querySelector(".form")
btn?.addEventListener("click", (e) => {
  e.preventDefault()
  const n: HTMLLIElement | null = document.createElement("li")
  if (inp) {
    n.innerText = inp.value
    list?.appendChild(n)
    inp.value = ""
  }
})
