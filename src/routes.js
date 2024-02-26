import Admin from "./pages/AdminPanel/Admin";
import Main from "./pages/Main";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import ServicePage from "./pages/ServicePage";
import AdminAuth from "./pages/AdminAuth/AdminAuth";
import {
    ABOUTUS_ROUTE,
    ADMINAUTH_ROUTE,
    ADMIN_ROUTE,
    CONTACTS_ROUTE,
    MAIN_ROUTE,
    PORTFOLIO_ROUTE,
    SERVICES_ROUTE,
} from "./utils/consts";
import PortfolioType from "./pages/PortfolioType";
import Gallery from "./pages/Gallery";

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
];

export const publicRoutes = [
    {
        path: ADMINAUTH_ROUTE,
        Component: AdminAuth,
    },
    {
        path: MAIN_ROUTE,
        Component: Main,
    },
    {
        path: SERVICES_ROUTE,
        Component: Services,
    },
    {
        path: SERVICES_ROUTE + "/:id",
        Component: ServicePage,
    },
    {
        path: PORTFOLIO_ROUTE,
        Component: Portfolio,
    },
    {
        path: PORTFOLIO_ROUTE + '/:id',
        Component: PortfolioType,
    },
    {
        path: PORTFOLIO_ROUTE + '/gallery/:id',
        Component: Gallery,
    },
    {
        path: ABOUTUS_ROUTE,
        Component: AboutUs,
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts,
    },
];
