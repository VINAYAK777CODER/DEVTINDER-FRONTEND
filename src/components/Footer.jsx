import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-0.5 px-2 shadow-md flex flex-col items-center">
        <div className="flex items-center space-x-1">
          <svg width="14" height="14" viewBox="0 0 24 24" className="fill-current">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V7H9V5.5L3 7V9L9 10.5V12.5L3 14V16L9 17.5V22H15V17.5L21 16V14L15 12.5V10.5L21 9Z" />
          </svg>
          <p className="text-xs font-semibold">DevTinder</p>
        </div>

        <p className="text-[8px] opacity-80 mt-0.5">© {new Date().getFullYear()} All rights reserved.</p>

        <div className="flex space-x-2 mt-1">
          {["Twitter", "GitHub", "LinkedIn", "YouTube"].map((icon, i) => (
            <a key={i} href="#" className="hover:scale-105 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="fill-current">
                {/* Replace with actual icons */}
                <circle cx="12" cy="12" r="10" />
              </svg>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
