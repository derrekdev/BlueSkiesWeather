import Footer from "../components/features/Footer/Footer";
import Header from "../components/features/Header/Header";
import MainComponent from "../components/features/MainComponent/MainComponent";
import { useWeatherData } from "../store/storeWeatherData";

export default function Home() {
  const isTheme = useWeatherData((state) => state.getCurrentTheme());
  return (
    <div className={`container ${isTheme}`}>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}
