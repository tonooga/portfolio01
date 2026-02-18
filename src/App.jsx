import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/Projects";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Project01 from "./components/Project01";
import ArticlesPage from "./pages/Articles";
import Article01 from "./components/Article01";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout/>} >
                <Route index element = {<HomePage/>} />
                <Route path='/projects' element={<ProjectsPage />}/>
                <Route path='/projects/project01' element={<Project01/>}/>
                <Route path='/articles' element={<ArticlesPage/>}/>
                <Route path='/articles/article01' element={<Article01/>}/>
            </Route>
        )
    )
    return (
        <RouterProvider router={router}/>
    );
}

export default App
