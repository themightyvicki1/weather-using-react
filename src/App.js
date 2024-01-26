import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      {/* container because we are using bootstrap, imported it differently with react so not in index.html, it will update this way*/}
      <div className="container">
        <h1 className="text-center">🌡Weather ☁</h1>

        {/*component call to the weather app */}
        {/*send a default city to component, this will load app with this city */}
        <Weather defaultCity="Seattle" />

        <footer>
          <a
            href="https://github.com/themightyvicki1/react-weather-project"
            title="https://github.com/themightyvicki1/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            Open source
          </a>{" "}
          coded by Victoria Greer{" "}
          <small>
            <i className="fa-regular fa-heart"></i>
          </small>
        </footer>
      </div>
    </div>
  );
}
