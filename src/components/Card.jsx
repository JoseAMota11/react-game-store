export const Card = ({ data, setId }) => {
  return data ? (
    data.map(({ id, name, image }) => (
      <article onClick={() => setId(id)} key={id} className='card'>
        <img className='card__image' src={image} alt={name} />
        <p className='card__title'>{name}</p>
      </article>
    ))
  ) : (
    <Error />
  );
};
