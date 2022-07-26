import { lazy } from "react";
import { Route } from "../index/index";
import { Layout } from "../01-lazyload/layout/Layout";
import { Nolazy } from "../01-lazyload/pages";
const Lazy1 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1")
);
const Lazy2 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3")
);
const LazyLayout = lazy(() => import("../01-lazyload/layout/Layout"));

export const routes: Route[] = [
  {
    to: "/nolazy",
    path: "nolazy",
    Component: Nolazy,
    name: "nolazy",
  },
  {
    to: "/lazyLayout/",
    path: "/lazyLayout/*",
    Component: LazyLayout,
    name: "lazyLayout-2",
  },
];
