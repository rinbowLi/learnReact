import Home from "../pages/Home";
import About,{  Abouta, Aboutus,Clture } from "../pages/About";
// import About from "../pages/About";
import Detail from "../pages/Detail";
import Detail2 from "../pages/Detail2";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about/clture",
        component: Clture,
        exact: true
      },
      {
        path: "/about/abouta",
        component: Abouta,
        exact: true
      },
      {
        path: "/about/aboutus",
        component: Aboutus,
        exact: true
      },
    ]
  },
  {
    path: "/detail",
    component: Detail
  },
  {
    path: "/detail2",
    component: Detail2
  },
];


export default routes;