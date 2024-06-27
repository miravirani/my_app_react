import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Home from "../Header/Home";
import Portfolio from "../Header/Portfolio";
import Outlets from "../outlet/Outlets";
import Blog from "../Header/Blog";
import Contact from "../Header/Contact";
import NotFound from "../Header/NotFound";
import B1 from "../useContext/B1";
import B2 from "../useContext/B2";
import B3 from "../useContext/B3";
import SocialSignUp from "../auth/SocialSignUp";
import SocialForgot from "../auth/SocialForgot";

export default function Navigations() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route element={<Outlets/>}> */}

                  {/* <Route path="/" element={<apiCall />} />
                  <Route path="/mockApi/:id" element={<useParamsHook/>} /> */}
                    {/* <Route index element={<Home />}/>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Portfolio" element={<Portfolio/>}/>
                    <Route path="/Blog" element={<Blog/>}/>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/signUp" element={<SignUp />} /> */}
                    <Route path="/" element={<SocialSignUp />} />
                    {/* <Route path="/" element={<SocialForgot/>} /> */}
                    {/* <Route path="/Contact/:name" element={<Contact/>}/> */}

                {/* </Route> */}
                {/* <Route path="*" element={<NotFound/>}/>
                <Route path="/B1" element={<B1/>}/>
                <Route path="/B3" element={<B3/>}/> */}
            </Routes>
        </BrowserRouter>
    );
}
