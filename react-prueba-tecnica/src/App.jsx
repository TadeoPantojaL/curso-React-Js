import { useState } from "react";
import CatFact from "./components/CatFact";
import CatImage from "./components/CatImage";
import "./styles.css";

function App() {
  const [fact, setFact] = useState("");
  const [threeFirstWords, setThreeFirstWords] = useState("");

  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={() => window.location.reload()} >
      Get New Cat Fact
      </button>
     <section>
     <CatFact setFact={setFact} setThreeFirstWords={setThreeFirstWords} fact={fact} />
     <CatImage threeFirstWords={threeFirstWords} />
     </section>
      
    </main>
  );
}

export default App;
