import Tour from './Tour';
const Tours = ({ tours, deleteTour }) => {
  return <section>
    <div className='title'>
      <h2>Our Tours</h2>
    </div>
    <div className='underline' />
    <div className='grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6'>
      {tours.map((data) => {
        return <Tour {...data} key={data.id} deleteTour={deleteTour} />
      })}
    </div>
  </section>
};

export default Tours;
