import React from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from '@/components/shared/footer';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light900_dark900 relative">
      <Navbar />
      <div className="flex ">
        <section className="flex min-h-screen flex-1 flex-col  pb-6 pt-[6rem] max-md:pb-14">
          {children}
        </section>
      </div>
      {/* Toaster */}
      <Footer />
    </main>
  );
};

export default AppLayout;
