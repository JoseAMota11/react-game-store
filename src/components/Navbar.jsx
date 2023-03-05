import rightIcon from '../assets/rightIcon.svg';
import leftIcon from '../assets/leftIcon.svg';

export const Navbar = () => {
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
          />
          <img
            className='list__icon--right'
            src={rightIcon}
            alt='Right arrow icon'
            fill='yellow'
          />
        </li>
      </ul>
    </nav>
  );
};
