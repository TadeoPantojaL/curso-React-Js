import { useEffect } from "react";

const API_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

function CatFact({ setFact, setThreeFirstWords, fact }) {
  useEffect(() => {
    const getCatFact = async () => {
      try {
        const res = await fetch(API_ENDPOINT_RANDOM_FACT);
        const data = await res.json();
        setFact(data.fact);
        const threeWords = data.fact.split(" ").slice(0, 3).join(" ");
        setThreeFirstWords(threeWords);
      } catch (error) {
        console.error("Error fetching cat fact:", error);
      }
    };

    getCatFact();
  }, [setFact, setThreeFirstWords]);

  return fact ? <p>{fact}</p> : <p>Cargando hecho...</p>;
}

export default CatFact;
