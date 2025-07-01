import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import "../styles/global.scss";

export function Layout(){
    return(
        <>
        <div className='main-container'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
        <Footer />
    </>
    )
}