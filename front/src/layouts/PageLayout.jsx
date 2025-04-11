import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../page/Footer';

export default function PageLayout() {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  )
}
