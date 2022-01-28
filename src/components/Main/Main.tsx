import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Card from '../Card/Card';
import Converter from "../Converter/Converter";
import Courses from "../Courses/Courses";

const Main: FC = () => {
    return (

        <Routes>
            <Route path='/' element={<Card />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/converter' element={<Converter />} />
        </Routes>


    );
}

export default Main;