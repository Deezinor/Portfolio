// src/components/ModelViewer/ModelViewer.tsx
import React from "react";
import * as THREE from "three";
import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Html,
  useGLTF,
  Bounds,
  Center,
} from "@react-three/drei";

type Props = {
  /** URL to .glb/.gltf (absolute or relative) */
  src: string;
  /** Optional HDRI preset or custom hdr url (leave undefined for none) */
  envPreset?: "city" | "sunset" | "studio" | "dawn" | "forest" | "apartment";
  /** Model scale multiplier */
  scale?: number;
  /** Auto-rotate the camera */
  autoRotate?: boolean;
  /** Canvas height class; give it explicit height somewhere */
  className?: string;
};

function resolveSrc(src: string) {
  // If it's http(s) or data/blob, use as-is; otherwise respect Vite base
  if (/^(https?:|data:|blob:)/i.test(src)) return src;
  const base = import.meta.env.BASE_URL ?? "/";
  return `${base}${src.replace(/^\//, "")}`;
}

function GLTFModel({ url, scale = 1 }: { url: string; scale?: number }) {
  const gltf = useGLTF(url, true);
  useMemo(() => {
    gltf.scene.traverse((obj: THREE.Object3D) => {
      if ((obj as THREE.Mesh).isMesh) {
        const m = obj as THREE.Mesh;
        m.castShadow = false;
        m.receiveShadow = false;
        // Optional: ensure frustum cull sane for tiny/huge models
        // m.frustumCulled = true;
      }
    });
  }, [gltf]);
  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={gltf.scene} scale={scale} />;
}

export default function ModelViewer({
  src,
  envPreset = "city",
  scale = 1,
  autoRotate = false,
  className = "w-full h-80 md:h-[60vh]",
}: Props) {
  const url = resolveSrc(src);

  return (
    <div
      className={`relative rounded-2xl border border-zinc-200 bg-zinc-50 ${className}`}
    >
      <Canvas camera={{ position: [2.5, 1.5, 3.5], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        <Suspense
          fallback={
            <Html center className="text-sm text-zinc-600">
              Loading 3D…
            </Html>
          }
        >
          {envPreset && <Environment preset={envPreset} />}
          {/* Fit camera to model bounds regardless of model size */}
          <Bounds fit clip observe margin={1.5}>
            <Center>
              <GLTFModel url={url} scale={scale} />
            </Center>
          </Bounds>
          <OrbitControls
            makeDefault
            enableDamping
            dampingFactor={0.05}
            autoRotate={autoRotate}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>

      <div className="pointer-events-none absolute bottom-2 right-3 text-xs text-zinc-500">
        Drag to orbit • Scroll to zoom
      </div>
    </div>
  );
}
