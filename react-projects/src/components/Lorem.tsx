import { useMemo } from "react";

interface LoremProp {
  para: number,
  maxWords: number
}
const chars: string[] = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
function generateParas(para: number, maxWords: number): string[] {
  const r: string[] = [];
  //let w: number[] = [];
  let s: string = ""
  for (let i = 0; i < para; i++) {
    const w = Math.floor((Math.random() * maxWords)) + 5
    s = ""
    for (let j = 0; j < w; j++) {
      const c = Math.floor((Math.random() * 12) + 3)
      for (let k = 0; k < c; k++) {
        const letter: string = chars[Math.floor(Math.random() * chars.length)]
        if (k === 0) {
          letter.toUpperCase();
        }
        s += letter
      }
      s += " "
    }
    s.replace(/\w$/, ".")
    r.push(s);
  }
  return r;
}
function Lorem({ para, maxWords }: LoremProp) {
  const paras = useMemo(() => {
    return generateParas(para, maxWords)
  }, [para, maxWords])
  return (
    <div className="bg-slate-800 px-4 py-2">
      {
        paras.map((para, i) => {
          return <p key={i}>{para}</p>
        })
      }
    </div>
  )
}

export default Lorem
