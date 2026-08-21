import { Outlet } from "react-router-dom";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#252525]">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;