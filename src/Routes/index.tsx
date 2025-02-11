import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Default from "../Pages/Dashboard/Default";

export default function Routers() {
    return (
        <BrowserRouter basename={'/'}>
            <Routes>
                <Route path="/" element={<Default />} />
            </Routes>
        </BrowserRouter>
    )
}
