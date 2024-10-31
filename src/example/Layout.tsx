import { Link, Outlet } from 'react-router-dom';
import Canvas from './Canvas';
import Github from '@/assets/github-mark-white.svg';

const Layout = () => {
    return (
        <>
            <div className='layout'>
                <a target='_blank' href='https://github.com/Abraham10VelGlez'>
                    <img className='icon' src={Github} alt='icon' />                                                            
                </a>
                
                <nav className='nav'>
                
                    <Link to='/'>DEMO 1</Link>
                    <Link to='/example2'>DEMO 2</Link>
                    <Link to='/example3'>DEMO 3</Link>
                </nav>
            </div>

            <Canvas />
            <Outlet />
        </>
    );
};

export default Layout;