import React from 'react'

const NavBar = () => {
  return (
     <div className="navbar bg-gradient-to-br from-base-100 to-base-200 shadow-lg border-b border-opacity-10 border-primary backdrop-blur-sm">
      <div className="flex-1">
        <a className="btn btn-ghost px-2 hover:bg-opacity-10 hover:bg-primary transition-all duration-300 group">
          <div className="relative h-10 w-10 mr-2 group-hover:rotate-12 transition-transform duration-500">
            <img 
              src="https://img.icons8.com/?size=100&id=FL8t1QCMYTQy&format=png&color=6366F1" 
              alt="DEVTINDER Logo" 
              className="absolute h-full w-full object-contain drop-shadow-lg" 
            />
            <div className="absolute inset-0 bg-primary rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
            DEVTINDER
          </span>
        </a>
      </div>
      <div className="flex gap-3">
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Search developers..." 
            className="input input-bordered w-32 md:w-64 pl-10 focus:pl-12 pr-4 bg-base-100 bg-opacity-70 focus:bg-opacity-100 focus:shadow-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder-opacity-70" 
          />
          <svg 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-opacity-10 hover:bg-primary transition-all duration-300 group">
            <div className="w-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100 relative overflow-hidden">
              <img
                alt="User profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
                className="group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-56 p-2 shadow-2xl border border-opacity-10 border-primary backdrop-blur-lg">
            <li className="menu-title p-4 border-b border-opacity-10">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="w-12 rounded-full ring-2 ring-primary">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div>
                  <p className="font-bold">Sarah Developer</p>
                  <p className="text-xs opacity-70">sarah@devtinder.com</p>
                </div>
              </div>
            </li>
            <li>
              <a className="justify-between hover:bg-primary hover:text-primary-content transition-colors">
                <span>My Profile</span>
                <span className="badge badge-primary badge-sm">New</span>
              </a>
            </li>
            <li>
              <a className="hover:bg-primary hover:text-primary-content transition-colors">
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <a className="hover:bg-primary hover:text-primary-content transition-colors">
                <span>Notifications</span>
                <span className="badge badge-sm">3</span>
              </a>
            </li>
            <li className="border-t border-opacity-10 mt-1 pt-1">
              <a className="text-error hover:bg-error hover:text-error-content transition-colors">
                <span>Logout</span>
                <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar;