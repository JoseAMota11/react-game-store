export const Card = ({ data }) => {
  return data ? (
    data.map(({ id, name, image }) => (
      <article key={id} className='card'>
        <img className='card__image' src={image} alt={name} />
        <p className='card__title'>{name}</p>
      </article>
    ))
  ) : (
    <Error />
  );
};
