import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded by JR <br />
          <a
            className="GitHubLink"
            href="https://github.com/JadziaRydzyk/dictionary-app"
            target="_blank "
          >
            Look at my GitHub repository
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
