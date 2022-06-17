import React, { useState } from 'react';

function NavEx() {
    const [showNav, setShowNav] = useState(true)


    return (
        <>
        {showNav && <div 
            isOpen={showNav} 
            className="bg-gray-200 py-10">
            <button 
                className="bg-primary rounded-lg text-red-500" 
                onClick={() => setShowNav(false)}
            >
                Close Navbar
            </button>       
            <h1>Dashboard</h1>
            <h2>Menu item</h2>
            <h2>Menu item</h2>
            <h2>Menu item</h2>
        </div>}

        <div>
        <button 
            className="bg-primary rounded-lg text-blue-500" 
            onClick={() => setShowNav(true)}
        >
            Open Navbar
            </button>
        </div>
        </>)
}

export default NavEx
