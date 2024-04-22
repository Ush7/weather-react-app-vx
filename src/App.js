import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        {" "}
        This project coded by{" "}
        <a
          href="https://github.com/Ush7/weather-react-app-vx"
          rel="noreferrer"
          target="_blank"
        >
          Unisha Shilpakar
        </a>{" "}
        and is{" "}
        <a href="https://github.com/Ush7" rel="noreferrer" target="_blank">
          open-sourced
        </a>{" "}
        on Github
      </footer>
    </div>
  );
}

export default App;
