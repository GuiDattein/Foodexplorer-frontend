import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Prato } from '../pages/Prato';
// import { AddDishes } from '../pages/AddDishes';
// import { SignIn } from '../pages/SignIn';
// import { SignOut } from '../pages/SignOut';

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prato/:id" element={<Prato />} />
            {/* <Route path="/AddDishes" element={<AddDishes />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/register" element={<SignOut />} /> */}
        </Routes>
    )
}