import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.css';

const Navigation = () => (
    <div className='site-nav text-end'>
        
        <Link className='nav-link' to='/'>
            Home
        </Link>

        <Link className='nav-link' to='/services'>
            Services
        </Link>
        
        <div>
            <Outlet />
        </div>
    </div>
);

export default Navigation;