import { useState } from 'react'

import './App.css'
import Form from './Form'
import Homepage from './Homepage'
import { BottomNavigation } from './Navigation'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProfessorRegistration from './ProfessorRegistration'
import Getdata from './Getdata'


function App() {
  const saumyaRouter = createBrowserRouter([
    {
      path: '/',
      element: <><BottomNavigation /><Homepage pageTitle="SAUMYA" fullForm="Software for Attendance Utility with Mongodb bY Akarsh" /></>
    },
    {
      path: '/DSA-lab-attendance',
      element: <><BottomNavigation /><Form formTitle="DSA" subject="DSA" url="http://localhost:3000/dsa-lab-attendance" /></>
    },
    {
      path: '/OOPS-lab-attendance',
      element: <><BottomNavigation /><Form formTitle="OOPS" subject="OOPS" url="http://localhost:3000/oops-lab-attendance" /></>
    },
    {
      path: '/AEC-lab-attendance',
      element: <><BottomNavigation /><Form formTitle="AEC" subject="AEC" url="http://localhost:3000/aec-lab-attendance" /></>
    },
    {
      path:'/professor-registration',
      element:<><BottomNavigation/><ProfessorRegistration/></>
    },
    {
      path:'/download-attendance-data',
      element:<><BottomNavigation/><Getdata/></>
    }
  ])


  return (
    <>
      <main>
        <RouterProvider router={saumyaRouter} />
      </main>

    </>
  )
}

export default App
