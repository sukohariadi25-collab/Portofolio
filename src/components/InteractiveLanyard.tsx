'use client';

import * as THREE from 'three';
import { useRef, useState } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { RigidBody, Physics, BallCollider, CuboidCollider, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

extend({ MeshLineGeometry, MeshLineMaterial });

function Card({ imageUrl }: { imageUrl: string }) {
  const card = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  
  const [dragged, setDragged] = useState<THREE.Vector3 | false>(false);
  const [hovered, setHovered] = useState(false);

  // Load tekstur gambar menggunakan prop imageUrl
  const texture = useTexture(imageUrl);

  // Fisika Tali (Rope Joints)
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.4, 0]]);

  useFrame((state) => {
    if (dragged) {
      const vec = new THREE.Vector3();
      state.raycaster.ray.intersectPlane(
        new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
        vec
      );
      card.current?.setNextKinematicTranslation(vec);
    }
  });

  return (
    <>
      {/* Titik Atas Gantung (Fixed) */}
      <RigidBody ref={fixed} type="fixed" position={[0, 3, 0]} />

      {/* Segmen Tali */}
      <RigidBody ref={j1} position={[0, 2, 0]}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody ref={j2} position={[0, 1, 0]}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody ref={j3} position={[0, 0, 0]}>
        <BallCollider args={[0.1]} />
      </RigidBody>

      {/* Kartu Foto Lanyard */}
      <RigidBody
        ref={card}
        position={[0, -1, 0]}
        type={dragged ? 'kinematicPosition' : 'dynamic'}
        enabledRotations={[true, true, true]}
      >
        <CuboidCollider args={[0.8, 1.1, 0.05]} />
        <mesh
          onPointerDown={(e) => {
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
            setDragged(new THREE.Vector3().copy(e.point));
          }}
          onPointerUp={(e) => {
            (e.target as HTMLElement).releasePointerCapture(e.pointerId);
            setDragged(false);
          }}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <planeGeometry args={[1.8, 2.4]} />
          {/* Menerapkan imageUrl sebagai tekstur pada mesh */}
          <meshBasicMaterial map={texture} color={hovered ? '#f8fafc' : '#ffffff'} />
        </mesh>
      </RigidBody>
    </>
  );
}

export default function InteractiveLanyard({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="w-full h-[400px] sm:h-[480px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        <Physics interpolate gravity={[0, -20, 0]} timeStep={1 / 60}>
          <Card imageUrl={imageUrl} />
        </Physics>
      </Canvas>
    </div>
  );
}