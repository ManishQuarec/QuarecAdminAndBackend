import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import AuthLockScreen from "../pages/Authentication/AuthLockScreen";

// Pages Calendar
import Calendar from "../pages/Calendar/Calendar";



// Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login";
import Register1 from "../pages/AuthenticationInner/Register";
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword";

//Admin Routes
import News from "../pages/Admin/News";
import Categories from "../pages/Admin/Categories";
import ENews from "../pages/Admin/E-News";
import BreakingNews from "../pages/Admin/BreakingNews";

const authProtectedRoutes = [
  //calendar
  { path: "/calendar", component: Calendar },

  { path: "/news", component: News },
  { path: "/categories", component: Categories },
  { path: "/e-news", component: ENews },
  { path: "/breaking-news", component: BreakingNews },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/news" /> },
];

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
  { path: "/auth-lock-screen", component: AuthLockScreen },

  // Authentication Inner
  { path: "/auth-login", component: Login1 },
  { path: "/auth-register", component: Register1 },
  { path: "/auth-recoverpw", component: ForgetPwd1 },
];

export { authProtectedRoutes, publicRoutes };
