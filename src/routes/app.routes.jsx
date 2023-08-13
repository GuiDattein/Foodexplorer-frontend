import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { AddDishes } from '../pages/AddDishes';
import { Prato } from '../pages/Prato';
/*import { Edit } from '../pages/EditDishes;'*/

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddDishes />} />
            <Route path="/prato/:id" element={<Prato />} />
        </Routes>
    )
}