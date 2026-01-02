import { Canvas } from "@react-three/fiber";
import { useState, useRef } from "react";
import { useTexture } from "@react-three/drei";
import Panorama from "./components/Panorama";
import Hotspot from "./components/Hotspot";
import Annotation from "./components/Annotation";
import { scenes } from "./scene";
import StaticLookControls from "./components/StaticLookControl";

function Preloader() {
  useTexture(scenes.map(s => s.image));
  return null;
}

export default function App() {
  const [currentSceneId, setCurrentSceneId] = useState("lobby");
  const [activeAnnotationId, setActiveAnnotationId] = useState(null);

  const materialRef = useRef();

  const currentScene = scenes.find((s) => s.id === currentSceneId);

  const handleHotspotClick = (targetSceneId) => {
  setCurrentSceneId(targetSceneId);
  setActiveAnnotationId(null);
};


  return (
    <Canvas camera={{ position: [0, 0, 0.01], near: 0.1, far: 2000 }}>
      <Preloader />
      <Panorama imageUrl={currentScene.image} materialRef={materialRef} />
      {currentScene.hotspots.map((h) => (
        <Hotspot
          key={h.id}
          id={h.id}
          position={h.position}
          onClick={() => handleHotspotClick(h.targetSceneId)}
        />
      ))}
      {currentScene.annotations.map(a => (
  <Annotation
    key={a.id}
    data={a}
    isOpen={activeAnnotationId === a.id}
    onToggle={() =>
      setActiveAnnotationId(prev => prev === a.id ? null : a.id)
    }
  />
))}


      <StaticLookControls sensitivity={0.005} />
    </Canvas>
  );
}
