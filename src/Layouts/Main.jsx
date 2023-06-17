import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Routes/Shared/Footer/Footer";
import NevBar from "../Routes/Shared/NevBar/NevBar";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signup');
    return (
        <div>
            { noHeaderFooter || <NevBar></NevBar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;