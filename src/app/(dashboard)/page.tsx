"use client";


import { CryptoCards } from "./components/cryptoCards/cryptoCards";
import PageFooter from "./components/footer";
import { PageHeader } from "./components/header";
import Hero from "./components/hero";


export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <PageHeader pageName="topPage" />
      <Hero />
      <CryptoCards />
      <PageFooter />
    </div>
  );
}
