import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { FavouriteProvider, WeatherProvider } from "./provider";

function App() {
  return (
    <>
      <WeatherProvider>
        <FavouriteProvider>
          <Header />
          <main>
            <section className="flex justify-center h-[90vh] items-center">
              <WeatherBoard />
            </section>
          </main>
        </FavouriteProvider>
      </WeatherProvider>
    </>
  );
}

export default App;
