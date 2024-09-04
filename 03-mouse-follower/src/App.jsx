import { useEffect, useState } from "react";

// Custom Hook for managing pointer movement
function usePointerMovement(enabled) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      // Directly set the initial position to the current mouse position
      const initialPosition = (event) => {
        const { clientX, clientY } = event;
        setPosition({ x: clientX, y: clientY });
      };
      
      // Trigger the position update immediately
      window.addEventListener('pointermove', initialPosition, { once: true });
      window.addEventListener('pointermove', handleMove);
    } else {
      setPosition({ x: 0, y: 0 });
    }

    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, [enabled]);

  return position;
}

// Circle Component
function Circle({ position }) {
  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        width: 40,
        height: 40,
        top: -20,
        left: -20,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}

// Main App Component
function App() {
  const [enabled, setEnabled] = useState(false);
  const position = usePointerMovement(enabled);

  return (
    <main>
      {/* Conditionally render the Circle component */}
      {enabled && <Circle position={position} />}
      <h3 style={{ textAlign: 'center', marginTop: '20px',backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '10px' }}>Proyecto 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  );
}

export default App;
