import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <AboutUs />
      <Services />
      <Footer />
      <a href="https://wa.me/551920187198" target="_blank">
        <img src="/images/whatsapp.png" alt="Background" width={100} height={100} className="wpp-img transition-transform duration-300 hover:-translate-y-2"/>
      </a>
    </main>
  );
}
