import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderJon from '../components/Header/Header'

export default function Layout() {
    return (
        <div>
            <HeaderJon />
            <Outlet />
            <Footer />
        </div>
    )
}