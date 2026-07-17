import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { PageRails } from "@/components/page-rails";

export default function Home() {
  return (
    <>
      <Header />
      <PageRails />
      <main className="relative z-10">
        <Hero />
        <Process />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
