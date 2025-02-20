const Book = (props) => {
  const { img, title, author ,getBook,id} = props;

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={()=>{getBook(id)}}>click me</button>
      <h4>{author} </h4>
    </article>
  );
};

export default Book;
