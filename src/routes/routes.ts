import { JSX, lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage1 } from "../01-lazyload/pages/LazyPage1";
// import { LazyPage2 } from "../01-lazyload/pages/LazyPage2";
// import { LazyPage3 } from "../01-lazyload/pages/LazyPage3";

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
    name: string;
}

// const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1"));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2"));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3"));
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"));

export const route:Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'Lazylayout -  Dashboard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
    // {
    //     to: '/lazy3',
    //     path: 'lazy3',
    //     Component: Lazy3,
    //     name: 'Lazy-3'
    // }
]