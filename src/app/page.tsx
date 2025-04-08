"use client";

import About from "@/components/About";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Products from "@/components/Products";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <Header setIsNavbarOpen={setIsNavbarOpen} />
      <Sidebar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />

      <main>
        <article>
          <Hero />
          <About />
          <Products />
          <Blog />
          <Newsletter />
        </article>
      </main>

      <Footer />
    </>
  );
}
