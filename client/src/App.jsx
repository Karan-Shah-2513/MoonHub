import "./App.css";

function App() {
  return (
    <div className="App p-10">
      <div className="text-3xl text-blue-600 text-center">
        Footprints on the Moon !
      </div>
      <div className="links flex flex-col w-12 text-center">
        <a
          href={`${import.meta.env.BASE_URL}` + "login"}
          className="underline bg-blue-500 hover:bg-blue-200"
        >
          Login
        </a>
        <a
          href={`${import.meta.env.BASE_URL}` + "hub"}
          className="underline bg-blue-500 hover:bg-blue-200"
        >
          Hub
        </a>
      </div>
    </div>
  );
}

export default App;
