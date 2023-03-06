import { Comment } from './Comment';

export const SinglePage = ({ singleData }) => {
  const { name, image, description, comments } = singleData;

  return (
    <div className='single-page'>
      <h3 className='single-page__name'>{name}</h3>
      <img className='single-page__image' src={image} alt={name} />
      <div>
        <h3>Description</h3>
        <p className='single-page__description'>{description}</p>
        {!description && <span>No description</span>}
      </div>
      <Comment comments={comments} />
    </div>
  );
};
