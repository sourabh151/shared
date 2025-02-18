function hexColor() {
  const tokens = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let i = Math.floor(Math.random() * 16);
    color += tokens[i];
  }
  return color;
}
function Color() {
  let c = hexColor();
  return (
    <div className='Color' style={{ backgroundColor: c }}>
      {c}
    </div>
  )
}

export default Color
