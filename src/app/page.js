import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
     <Navbar/>
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Hello World</h1>
      </div>
      <Footer/>
    </>
  );
}
