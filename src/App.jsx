import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherProvider } from "./provider";

function App() {
  return (
    <>
      <WeatherProvider>
        <Header />
        <main>
          <section className="flex justify-center h-[90vh] items-center">
            <WeatherBoard />
          </section>
        </main>
      </WeatherProvider>
    </>
  );
}

export default App;
