import AboutContainer from "../components/features/AboutContainer/AboutContainer";
import { useWeatherData } from "../store/storeWeatherData";

export default function About() {
  const isTheme = useWeatherData((state) => state.getCurrentTheme());
  return (
    <>
      <div className={`about-main ${isTheme}`}>
        <div className="about-container">
          <AboutContainer />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
