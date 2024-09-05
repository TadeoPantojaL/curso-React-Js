import { useState } from "react";
import CatFact from "./components/CatFact";
import CatImage from "./components/CatImage";
import "./styles.css";

function App() {
  const [fact, setFact] = useState("");
  const [threeFirstWords, setThreeFirstWords] = useState("");

  return (
    <main style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }}>
      <h1>App de Gatitos</h1>
      <button onClick={() => window.location.reload()} >
      Get New Cat Fact
      </button>
      <CatFact setFact={setFact} setThreeFirstWords={setThreeFirstWords} fact={fact} />
      <CatImage threeFirstWords={threeFirstWords} />
    </main>
  );
}

export default App;
