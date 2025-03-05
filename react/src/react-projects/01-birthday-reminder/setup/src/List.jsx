const List = ({ persons,removePerson }) => {
  return (
    <>
      {
        persons.map(({ id, name, age, image }) => {
          return (
            <article className="person" key={id}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
              <button style={{ width: "3rem", height: "3rem" }}
                onClick={()=>{
                  removePerson(id)
                }}
              >X</button>
            </article>
          );
        })
      }
    </>
  );
};

export default List;
