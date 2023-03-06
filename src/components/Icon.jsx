import leftIcon from '../assets/leftIcon.svg';

export const Icon = ({ setSinglePage }) => {
  return (
    <img
      className='list__icon--left'
      src={leftIcon}
      alt='Left arrow icon'
      onClick={() => setSinglePage(false)}
    />
  );
};
