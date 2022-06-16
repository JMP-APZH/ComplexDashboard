import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css'
import NavEx from './components/NavEx';

const App = () => {
  const [showNav, setShowNav] = useState(true)
  const { activeMenu, themeSettings, setThemeSettings } = useStateContext();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div>

      <NavEx />

      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div 
            // isOpen={showNav}
            className='fixed right-4 bottom-4' style={{ zIndex:'1000' }}>
            <TooltipComponent content='Settings' position='Top'>
              <button 
                type='button' 
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ background: 'blue', borderRadius: '50%' }}
                // onClick={() => setThemeSettings(true)}
                // onClick={() => setShowNav(true)}
                onClick={toggle}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
            {activeMenu ? (
              <div 
                className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                <Sidebar />
              </div>
            ) : (
              <div 
                className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar />
              </div>
            )}
            <div className={
              `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
            }>
              <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar />
              </div>
            

            <div>
              {themeSettings && <ThemeSettings />}


              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/eCommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                <Route path="/kanban" element={<Kanban />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />

              </Routes>
            </div>
        </div>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App