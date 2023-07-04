import RegisteredLayout from "../layouts/RegisteredLayout";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import Forum from "../pages/Forum/Forum";

export const FORUM_ROUTE = "/forum";
export const REGISTER_ROUTE = "/register";
export const LOGIN_ROUTE = "/";
export const PROFILE_ROUTE = "/profile";

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
      path: FORUM_ROUTE,
      Component: Forum,
    },
    {
      path: PROFILE_ROUTE,
      Component: Profile,
    },
  ],
};

export const topbarNavigationItems = [{ route: FORUM_ROUTE, title: "Forum" }];
