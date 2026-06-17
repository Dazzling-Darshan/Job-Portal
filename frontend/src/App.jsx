import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/recruiter/Companies'
import CompanyCreate from './components/recruiter/CompanyCreate'
import CompanySetup from './components/recruiter/CompanySetup'
import AdminJobs from './components/recruiter/AdminJobs'
import PostJob from './components/recruiter/PostJob'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },{
    path:'/jobs',
    element:<Jobs/>
  },{
    path:'/description/:id',
    element:<JobDescription/>
  },{
    path:'/browse',
    element:<Browse/>
  },
  ,{
    path:'/profile',
    element:<Profile/>
  },
  //recruiter
  {
    path : '/admin/companies',
    element : <Companies/>
  },
  {
    path : '/admin/companies/create',
    element : <CompanyCreate/>
  },
  {
    path : '/admin/companies/:id',
    element : <CompanySetup/>
  },
  {
    path : '/admin/jobs',
    element : <AdminJobs/>
  },
  {
    path : '/admin/jobs/create',
    element : <PostJob/>
  },

])
function App() {

  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  )
}

export default App
