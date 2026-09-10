import "./App.css";

function App() {
  return (
    <>
      <div>
        <p>hello world</p>
      </div>
      <Text display="whats up" />
    </>
  );
}

function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;
