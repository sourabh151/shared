const ErrorExample = () => {
  let count = 0;
  function handleClick(e) {
    console.log(++count);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick} className="btn">increment</button>
    </div>);
};

export default ErrorExample;
