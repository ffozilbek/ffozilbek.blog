import { Outlet } from "react-router-dom";
import { Navbar } from "../user/components";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sm:pt-[25px] sm:pb-[20px] pt-[20px] pb-[15px] mb-[50px]">
       <Navbar />
      </header>
      <main className="custom-container flex-1">
        <Outlet />
      </main>
      <footer className="text-center text-[16px] sm:pt-[25px] sm:pb-[15px] pt-[20px] pb-[10px]">
        &copy; 2025 ffozilbek.blog
      </footer>
    </div>
  );
}
