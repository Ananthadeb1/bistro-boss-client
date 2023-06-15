import { Outlet } from "react-router-dom";
import Footer from "../Routes/Shared/Footer/Footer";
import NevBar from "../Routes/Shared/NevBar/NevBar";


const Main = () => {
    return (
        <div>
            <NevBar></NevBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;