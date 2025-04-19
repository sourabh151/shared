import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = ({ id, name, job, image, text, prevUser, nextUser, randomUser }) => {
  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={() => prevUser(id)}><FaChevronLeft /></button>
      <button className='next-btn' onClick={() => nextUser(id)}><FaChevronRight /></button>
    </div>
    <button className='random-btn' onClick={() => randomUser(id)}>surprise me</button>
  </article>
};

export default Review;
