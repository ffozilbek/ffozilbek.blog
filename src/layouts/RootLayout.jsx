import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [scrolled,setScrolled]=useState(false)
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") document.title = "Fozilbek's Blog";
    else if (path === "/about") document.title = "About Me";
  }, [location]);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup scroll listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className={`${scrolled ? 'scrolled': ''} sm:pt-[25px] sm:pb-[20px] pt-[20px] pb-[15px] fixed top-0 left-0 w-full transition duration-75 ease-linear`}>
       <Navbar />
      </header>
      <main className="custom-container flex-1 my-[80px]">
        <Outlet />
      </main>
      <footer className="text-center text-[16px] sm:pt-[25px] sm:pb-[15px] pt-[20px] pb-[10px]">
        &copy; 2025 ffozilbek.blog
      </footer>
    </div>
  );
}
