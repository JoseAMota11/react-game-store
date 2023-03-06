import { Icon } from './Icon';

export const Navbar = ({ setSinglePage, singlePage }) => {
  return (
    <nav className='navbar'>
      <ul className='list'>
        <li className='list-1'>
          <h1 className='list__title'>Game Store</h1>
        </li>
        <li className='list-2'>
          {singlePage && <Icon setSinglePage={setSinglePage} />}
        </li>
      </ul>
    </nav>
  );
};
