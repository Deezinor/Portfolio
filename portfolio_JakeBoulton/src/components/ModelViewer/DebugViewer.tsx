import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function DebugViewer() {
  return (
    <div className="w-full h-[60vh] rounded-lg border border-zinc-200 bg-zinc-50">
      <Canvas camera={{ position: [3, 2, 3], fov: 50 }}>
        <mesh rotation={[0.5, 0.8, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial />
        </mesh>
        <ambientLight intensity={0.8} />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}