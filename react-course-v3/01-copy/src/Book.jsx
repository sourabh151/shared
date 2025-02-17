import React from 'react'

function Book({author,title,img}) {
    console.log(img);
    
  return (
    <section className='Book'>
        <img src={img} alt={title} />
        <p>{author}</p>
        <h2>{title}</h2>
    </section>
  )
}

export default Book