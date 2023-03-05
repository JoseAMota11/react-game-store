export const Button = ({ content, func }) => {
  return (
    <button className='pagination__btn' onClick={func}>
      {content}
    </button>
  );
};
