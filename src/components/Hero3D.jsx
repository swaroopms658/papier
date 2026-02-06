import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Center, ContactShadows, Instance, Instances } from '@react-three/drei';
import * as THREE from 'three';

// Configuration
const TISSUE_COUNT = 15;
const GRAVITY = 0.05;
const SPAWN_INTERVAL = 30; // Frames between spawns

// Reusable Tissue Geometry & Material
const Tissue = ({ id, ...props }) => {
    const ref = useRef();
    const [landed, setLanded] = useState(false);
    const speed = useRef(Math.random() * 0.02 + 0.03);
    const rotSpeed = useRef((Math.random() - 0.5) * 0.05);

    useFrame((state) => {
        if (!ref.current) return;

        if (!landed) {
            // Falling logic
            ref.current.position.y -= speed.current;
            ref.current.rotation.x += rotSpeed.current;
            ref.current.rotation.z += rotSpeed.current;

            // Landing logic (stacking simulation)
            const targetY = -1.5 + (id * 0.02); // Stack height offset
            if (ref.current.position.y <= targetY) {
                ref.current.position.y = targetY;
                ref.current.rotation.set(Math.PI / 2, 0, (Math.random() - 0.5) * 0.2); // Flat on ground
                setLanded(true);
            }
        }
    });

    return (
        <group {...props}>
            <mesh ref={ref} position={[0, 4 + id * 2, 0]} rotation={[Math.random(), Math.random(), Math.random()]}>
                <boxGeometry args={[2.2, 0.02, 1.4]} /> {/* Thin tissue shape */}
                <meshStandardMaterial
                    color="#ffffff"
                    roughness={0.9}
                    transparent
                    opacity={0.95}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    );
}

const SachetContainer = () => {
    return (
        <group position={[0, -1.8, 0]}>
            {/* Main Pack Body */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[2.4, 1.2, 1.6]} />
                <meshPhysicalMaterial
                    color="#e62e2e"
                    transmission={0.6} // Glass-like
                    opacity={0.8}
                    transparent
                    roughness={0.2}
                    thickness={0.5}
                />
            </mesh>
            {/* Branding Label */}
            <mesh position={[0, 0.5, 0.81]}>
                <planeGeometry args={[1.5, 0.8]} />
                <meshBasicMaterial color="#ffffff" />
            </mesh>
            {/* Logo text (simple shapes for demo) */}
            <mesh position={[0, 0.5, 0.82]}>
                <planeGeometry args={[0.5, 0.2]} />
                <meshBasicMaterial color="#e62e2e" />
            </mesh>
        </group>
    )
}

const Scene = () => {
    return (
        <>
            <Environment preset="studio" />
            <directionalLight position={[5, 10, 5]} intensity={2} castShadow />
            <ambientLight intensity={0.5} />

            <Center>
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <SachetContainer />
                    {Array.from({ length: TISSUE_COUNT }).map((_, i) => (
                        <Tissue key={i} id={i} />
                    ))}
                </Float>
            </Center>

            <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        </>
    );
};

const Hero3D = () => {
    return (
        <div className="w-full h-full min-h-[500px] relative canvas-container">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}> // Optimization: limit dpr
                <Scene />
            </Canvas>
        </div>
    );
};

export default Hero3D;
