import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header className="p-4 border-b">
        <h1 className="text-xl font-semibold">My Blog</h1>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
      <footer className="p-4 border-t text-sm text-center text-gray-500">
        &copy; 2025 My Blog. All rights reserved.
      </footer>
    </>
  );
}
