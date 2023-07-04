import RegisteredLayout from "../layouts/RegisteredLayout";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import Main from "../pages/Main/Main";

export const MAIN_ROUTE = "/main";
export const REGISTER_ROUTE = "/register";
export const LOGIN_ROUTE = "/";
export const PROFILE_ROUTE = "/profile";
export const CONTACTS_ROUTE = "/contacts";

export const loginRoutes = {
  Layout: LoginLayout,
  routes: [
    {
      path: LOGIN_ROUTE,
      Component: Login,
    },
    {
      path: REGISTER_ROUTE,
      Component: Register,
    },
  ],
};

export const authenticatedRoutes = {
  Layout: RegisteredLayout,
  routes: [
    {
      path: MAIN_ROUTE,
      Component: Main,
    },
    {
      path: PROFILE_ROUTE,
      Component: Profile,
    },
  ],
};

export const topbarNavigationItems = [{ route: MAIN_ROUTE, title: "Forum" }];
