import { Comment } from './Comment';

export const SinglePage = ({ singleData }) => {
  const { name, image, description, comments } = singleData;

  return (
    <div className='single-page'>
      <h3 className='single-page__name'>{name}</h3>
      <img className='single-page__image' src={image} alt={name} />
      <p className='single-page__description'>{description}</p>
      <Comment comments={comments} />
    </div>
  );
};
