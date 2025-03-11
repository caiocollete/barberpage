import Hero from "../components/hero";
import About from "../components/about";
import OurTeam from "../components/about/ourteam";
import Products from "../components/about/products";
import RelaxEnv from "../components/about/relaxEnv";
import Contact from "../components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return(
      <div className="bg-[#0d0d0d]">
        <Hero/>
        <About/>
        <OurTeam/>
        <Products/>
        <RelaxEnv/>
        <Contact/>
        <Footer/>
      </div>
  );
}
