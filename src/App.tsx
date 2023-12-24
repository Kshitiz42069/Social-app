import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/Form/SignInForm";
import SignupForm from "./_auth/Form/SignupForm";
import RootLayout from "./_root/RootLayout";
import { AllUsers, CreatePost, EditPost, Explore, Home, LikedPosts, PostDetails, Profile, Saved, UpdateProfile } from "./_root/pages";


import "./globals.css"
import { Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Router are of two types Public*/}
        <Route element={<AuthLayout/>}>
            <Route path='/sign-in' element={<SignInForm/>}/>
            <Route path='/sign-up' element={<SignupForm/>}/>
        </Route>
        
        {/* and Private */}
        <Route element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/saved' element={<Saved/>}/>
            <Route path='/profile/:id/*' element={<Profile/>}/>
            <Route path='/create-post' element={<CreatePost/>}/>
            <Route path='/all-users' element={<AllUsers/>}/>
            <Route path='/update-post/:id' element={<EditPost/>}/>
            <Route path='/post/:id' element={<PostDetails/>}/>
            <Route path='/update-profile/:id' element={<UpdateProfile/>}/>
            <Route path='/liked-posts/:id' element={<LikedPosts/>}/>
        </Route>
          
      </Routes>
    </main>
  )
}

export default App