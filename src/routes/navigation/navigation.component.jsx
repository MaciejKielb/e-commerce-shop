import { Fragment } from 'react/jsx-runtime';
import { Outlet, Link } from 'react-router';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <div>Logo</div>
        </Link>
        <Link className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
