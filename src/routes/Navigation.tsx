import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import logo from '../logo.svg'
// import { LazyPage1 } from "../01-lazyload/pages/LazyPage1"
// import { LazyPage2 } from "../01-lazyload/pages/LazyPage2"
// import { LazyPage3 } from "../01-lazyload/pages/LazyPage3"
import {route} from "../routes/routes"
import { Suspense } from "react"

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="" />

                    <ul>
                        {
                            route.map(({to, name}) => (
                                <li key={to}>
                                    <NavLink 
                                        to={to} 
                                        className={({isActive}) => isActive ? 'nav-active' : ''}
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <Routes>
                    {
                        route.map(({to, path, Component}) => (
                            <Route key={to} path={path} element={<Component />} />
                        ))
                    }
                    <Route path="/*" element={<Navigate to="/lazy1" replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    </Suspense>
  )
}
