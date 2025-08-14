import { Fragment } from 'react/jsx-runtime';
import { Outlet, Link } from 'react-router';

import { ReactComponent as ShopLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <ShopLogo className='logo' />
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
