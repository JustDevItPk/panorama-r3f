import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function Annotation({ data, isOpen, onToggle }) {
  const ref = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (ref.current) ref.current.lookAt(camera.position);
  });

  return (
    <group position={data.position}>
      {/* 3D Anchor */}
      <mesh
        ref={ref}
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
      >
        <circleGeometry args={[6, 32]} />
        <meshBasicMaterial color="orange" />
      </mesh>

      {/* UI Panel — ignores depth */}
      {isOpen && (
        <Html
          center
          transform
          distanceFactor={150}
          style={{ pointerEvents: "auto" }}
          occlude={false}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.75)",
              padding: "12px 14px",
              borderRadius: "10px",
              color: "white",
              minWidth: "180px",
              maxWidth: "240px",
              fontSize: "14px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
            }}
          >
            <strong>{data.title}</strong>
            <p style={{ margin: 0 }}>{data.description}</p>
          </div>
        </Html>
      )}
    </group>
  );
}
