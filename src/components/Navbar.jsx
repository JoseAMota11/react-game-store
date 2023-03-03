import rightIcon from '../assets/rightIcon.svg';
import leftIcon from '../assets/leftIcon.svg';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='list'>
        <li className='list-1'>
          <h1 className='list__title'>Logo</h1>
        </li>
        <li className='list-2'>
          <button className='list__btn--back'>
            <img
              className='list__icon--left'
              src={leftIcon}
              alt='Left arrow icon'
            />
          </button>
          <button className='list__btn--next'>
            <img
              className='list__icon--right'
              src={rightIcon}
              alt='Right arrow icon'
            />
          </button>
        </li>
        <li className='list-3'>
          <input
            className='list__search-input'
            type='search'
            placeholder='E.g. Minecraft...'
          />
        </li>
      </ul>
    </nav>
  );
};
