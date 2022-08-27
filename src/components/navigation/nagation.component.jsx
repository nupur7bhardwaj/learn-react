import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';

import './navigation.styles.css';

const Navigation = () => (
    <Fragment>
        <div className='site-nav text-end'>
            
            <Link className='nav-link' to='/'>
                Home
            </Link>

            <Link className='nav-link' to='/services'>
                Services
            </Link>

            <Link className='nav-link' to='/console'>
                Console
            </Link>
        </div>

        <div>
            <Outlet />
        </div>
    </Fragment>
);

export default Navigation;