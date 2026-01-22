'use client';

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import SidebarContent from './Sidebar';

const Layout = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:max-w-7xl md:mx-auto px-4 py-10 relative">

            {/* Mobile toggle button */}
            <button
                className="md:hidden fixed top-4 right-4 z-50 btn btn-sm btn-primary"
                onClick={() => setOpen(true)}
            >
                <FiMenu size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-9 gap-4">
                {/* Main content */}
                <div className="md:col-span-7 w-full">
                    {children}
                </div>

                {/* Desktop Sidebar */}
                <div className="hidden md:block md:col-span-2 bg-gray-400 p-4 rounded-lg h-fit sticky top-20 space-y-1">
                    <SidebarContent />
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${open ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setOpen(false)}
            />

            {/* Mobile Sidebar Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-400 z-50 p-4
                transform transition-transform duration-300
                ${open ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Close Button */}
                <button
                    className="btn btn-sm btn-ghost absolute top-3 right-3"
                    onClick={() => setOpen(false)}
                >
                    <FiX size={20} />
                </button>

                <SidebarContent onItemClick={() => setOpen(false)} />
            </div>
        </div>
    );
};

export default Layout;