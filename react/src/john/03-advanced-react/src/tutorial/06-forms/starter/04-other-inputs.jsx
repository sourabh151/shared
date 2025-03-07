import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("vue")
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ shipping, framework })
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <input type='checkbox' name='shipping' id="shipping" value={shipping} onChange={() => setShipping(!shipping)} />
          <label htmlFor='shipping'> Free Shipping </label>
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select name='framework' id="framework" value={framework} onChange={(e) => {
            setFramework(e.target.value);
          }}>
            {
              frameworks.map((f) => {
                return <option key={f}>{f}</option>
              })
            }
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
