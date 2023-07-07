import RegisteredLayout from "../layouts/RegisteredLayout";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import Forum from "../pages/Forum/Forum";
import NewQuestion from "../pages/NewQuestion/NewQuestion";
import Question from "../pages/Question/Question";
import EditQuestion from "../pages/EditQuestion/EditQuestion";

export const LOGIN_ROUTE = "/";
export const REGISTER_ROUTE = "/register";
export const FORUM_ROUTE = "/";
export const PROFILE_ROUTE = "/profile";
export const NEW_QUESTION_ROUTE = `${FORUM_ROUTE}new`;
export const QUESTION_ROUTE = `${FORUM_ROUTE}:id`;
export const EDIT_QUESTION_ROUTE = `${QUESTION_ROUTE}/edit`;

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
    {
      path: NEW_QUESTION_ROUTE,
      Component: NewQuestion,
    },
    {
      path: QUESTION_ROUTE,
      Component: Question,
    },
    {
      path: EDIT_QUESTION_ROUTE,
      Component: EditQuestion,
    },
  ],
};

export const topbarNavigationItems = [{ route: FORUM_ROUTE, title: "Forum" }];
