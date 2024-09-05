import { useEffect, useState } from "react";
import Canvas from "./Canvas";

const API_ENDPOINT_CAT_IMAGE = "https://api.thecatapi.com/v1/images/search";

function CatImage({ threeFirstWords }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (threeFirstWords) {
      fetch(API_ENDPOINT_CAT_IMAGE)
        .then((res) => res.json())
        .then((response) => {
          const imageUrl = response[0]?.url;
          if (imageUrl) {
            setImageUrl(imageUrl);
          } else {
            console.error("Image URL not found in response.");
          }
        })
        .catch((error) => console.error("Error fetching image:", error));
    }
  }, [threeFirstWords]);

  return imageUrl ? (
    <Canvas imageUrl={imageUrl} text={threeFirstWords} />
  ) : (
    <p>Cargando imagen...</p>
  );
}

export default CatImage;
