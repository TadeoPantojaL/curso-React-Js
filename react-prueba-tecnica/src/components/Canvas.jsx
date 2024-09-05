import { useEffect, useRef } from "react";

function Canvas({ imageUrl, text }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (imageUrl && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(text, canvas.width / 2, canvas.height - 30);
      };
    }
  }, [imageUrl, text]);

  return <canvas ref={canvasRef} />;
}

export default Canvas;
