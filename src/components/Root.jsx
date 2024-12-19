import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;