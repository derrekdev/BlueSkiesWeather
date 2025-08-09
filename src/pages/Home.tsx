import Footer from "../components/features/Footer/Footer";
import Header from "../components/features/Header/Header";
import MainComponent from "../components/features/MainComponent/MainComponent";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}
