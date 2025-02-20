import Rank from "./Rank";

const Book = (props) => {
  const { img, title, author,id} = props;

  return (
    <article className='book'>
      <Rank id={id}/>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

export default Book;
