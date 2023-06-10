import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "@/components/cssfiles/navbar.css"
import "@/components/cssfiles/footer.css"
import "@/components/cssfiles/page.css"
export default function App({ Component, pageProps }) {
    return (
        <>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
        </>
      );
  }