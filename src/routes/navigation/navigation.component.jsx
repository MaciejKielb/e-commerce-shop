import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router';

import { ReactComponent as ShopLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
