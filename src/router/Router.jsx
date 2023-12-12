// Router.......................
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Components...................
import Header from "../components/Header"
import Footer from "../components/Footer"

// Pages...........................
import Home from '../pages/Home'
import Authors from '../pages/Authors'
import AuthorPosts from '../pages/AuthorPosts'
import CategoryPosts from '../pages/CategoryPosts'
import CreatePosts from '../pages/CreatePosts'
import Dashboard from '../pages/Dashboard'
import DeletePost from '../pages/DeletePost'
import EditPost from '../pages/EditPost'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import PostDtail from '../pages/PostDtail' 
import Register from '../pages/Register'
import UserProfile from '../pages/UserProfile' 


export default function Router() {
  return (
    <>  
    <BrowserRouter >
        <Header />
         <Routes>           
            <Route path="/" element={<Home />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/posts/user/:id" element={<AuthorPosts />} />
            <Route path="/posts/categories/:category" element={<CategoryPosts />} />
            <Route path="/create" element={<CreatePosts />} />
            <Route path="/myposts/:id" element={<Dashboard />} />
            <Route path="/posts/:id/delete" element={<DeletePost />} />
            <Route path="/posts/:id/edit" element={<EditPost />} />     
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/posts/:id" element={<PostDtail />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/:id" element={<UserProfile />} />  
            <Route path="*" element={<ErrorPage />} />          
         </Routes>   
        <Footer />  
    </BrowserRouter>     
    </>
  )
}