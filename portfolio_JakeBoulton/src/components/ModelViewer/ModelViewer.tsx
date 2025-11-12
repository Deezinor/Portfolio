import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html, useGLTF } from "@react-three/drei";

type ModelProps = { url: string; scale?: number };

function Model({ url, scale = 1}: ModelProps) {
    const gltf = useGLTF(url, true); // true = use cache
    //Optional: turn off frustrumCulled for tiny parts if they pop
    useMemo(() => {
        gltf.scene.traverse((o: any) => {
            if (o.ishMesh) {
                o.castShadow = false;
                o.recieveShadow = false;
            }
        });
    }, [gltf]);
    return <primitive object={gltf.scene} scale={scale} />;
}
useGLTF.preload("/models/example-model.glb");