import leftIcon from '../assets/leftIcon.svg';

export const Navbar = ({ setSinglePage }) => {
  return (
    <nav className='navbar'>
      <ul className='list'>
        <li className='list-1'>
          <h1 className='list__title'>Game Store</h1>
        </li>
        <li className='list-2'>
          <img
            className='list__icon--left'
            src={leftIcon}
            alt='Left arrow icon'
            onClick={() => setSinglePage(false)}
          />
        </li>
      </ul>
    </nav>
  );
};
