import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../utils/authUtils';

const navVars = {
  '--nav-bg': '#1a1a1a',
  '--nav-text': '#e0e0e0',
  '--nav-hover': '#2d2d2d',
  '--nav-active': '#3a3a3a',
  '--nav-accent': '#4a90e2',
} as React.CSSProperties;

const HeaderNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav
        style={navVars}
        className="bg-[color:var(--nav-bg)] text-[color:var(--nav-text)] fixed z-[1000] shadow-[0_2px_10px_rgba(0,0,0,0)] h-[75px] w-full left-0 top-0 flex items-center p-0 font-['Pretendard','sans-serif']"
      >
        <div className="w-full max-w-[1555px] flex justify-between items-center mx-auto my-0 px-5 py-0">
          <Link to="/admin/equipment" className="flex items-center text-3xl font-bold text-white no-underline p-0 m-0">
            <img src="/static/img/icons/logo.png" alt="logo" className="h-[45px] mr-2" />
          </Link>
          <ul className="flex h-full m-0 p-0 list-none">
            <li className="flex items-center">
            <Link
              to="/admin/equipment"
              className={
                "relative flex items-center font-medium text-[20px] no-underline whitespace-nowrap px-[18px] h-[75px] transition-all duration-300 ease-[ease] text-[color:var(--nav-text)] hover:bg-[color:var(--nav-hover)] hover:text-white after:content-[''] after:absolute after:left-2/4 after:bottom-0 after:-translate-x-2/4 after:w-0 after:h-[3.75px] after:bg-[color:var(--nav-accent)] after:transition-[width] after:duration-300 after:ease-[ease]" +
                (location.pathname === "/admin/equipment" ? " bg-[color:var(--nav-active)] text-white after:!w-full" : "")
              }
            >
              장비관리
            </Link>
            <Link
              to="/admin/register"
              className={
                "relative flex items-center font-medium text-[20px] no-underline whitespace-nowrap px-[18px] h-[75px] transition-all duration-300 ease-[ease] text-[color:var(--nav-text)] hover:bg-[color:var(--nav-hover)] hover:text-white after:content-[''] after:absolute after:left-2/4 after:bottom-0 after:-translate-x-2/4 after:w-0 after:h-[3.75px] after:bg-[color:var(--nav-accent)] after:transition-[width] after:duration-300 after:ease-[ease]" +
                (location.pathname === "/admin/register" ? " bg-[color:var(--nav-active)] text-white after:!w-full" : "")
              }
            >
              회원가입
            </Link>
            <Link
              to="/"
              className="relative flex items-center font-medium text-[20px] no-underline whitespace-nowrap px-[18px] h-[75px] transition-all duration-300 ease-[ease] text-[color:var(--nav-text)] hover:bg-[color:var(--nav-hover)] hover:text-white"
              onClick={() => {
                logout(true);
              }}
            >
              로그아웃
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default HeaderNav;
