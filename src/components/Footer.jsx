export const Footer = () => {
  return (
    <footer className='footer'>
      <span>Created by José Mota</span>
      <span className='footer__item'>
        &copy; Copyright {new Date().getFullYear()}
      </span>
    </footer>
  );
};
