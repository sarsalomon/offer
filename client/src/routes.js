import AddCategory from "./pages/add/AddCategory"
import AddTrafficUrl from "./pages/add/AddTrafficUrl"
import Auth from "./pages/Auth"
import Dashboard from "./pages/Dashboard"
import Faq from "./pages/Faq"
import Home from "./pages/Home"
import NotFounded from "./pages/NotFounded"
import Offer from "./pages/Offer"
import Shop from "./pages/Shop"
import Traffic from "./pages/Traffic"
import Category from "./pages/view/Category"
import TrafficUrl from "./pages/view/TrafficUrl"
import { ACTIVATION_ROUTE, ADD_CATEGORY_ROUTE, ADD_TRAFFIC_ROUTE, ADMIN_ROUTE, CATEGORY_ROUTE, DASHBOARD_ROUTE, FAQ_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NOTFOUNDED_ROUTE, OFFER_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, TRAFFICS_ROUTE, TRAFFIC_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Home
    },
    {
        path: DASHBOARD_ROUTE,
        Component: Dashboard
    },
    {
        path: FAQ_ROUTE,
        Component: Faq
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: OFFER_ROUTE,
        Component: Offer
    },
    {
        path: TRAFFIC_ROUTE,
        Component: Traffic
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: TRAFFICS_ROUTE,
        Component: TrafficUrl
    },
    {
        path: ADD_TRAFFIC_ROUTE,
        Component: AddTrafficUrl
    },
    {
        path: CATEGORY_ROUTE,
        Component: Category
    },
    {
        path: ADD_CATEGORY_ROUTE,
        Component: AddCategory
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: ACTIVATION_ROUTE,
        Component: Auth
    },
    {
        path: NOTFOUNDED_ROUTE,
        Component: NotFounded
    }
]