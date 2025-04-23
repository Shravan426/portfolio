'use client';
/// <reference path="../../types/three.d.ts" />
import { useEffect, useRef, useState } from 'react';

const createRenderer = (width: number, height: number) => {
  const renderer = new window.THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(width, height);
  return renderer;
};

const createSceneAndCamera = (width: number, height: number) => {
  const scene = new window.THREE.Scene();
  const camera = new window.THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 200;
  return { scene, camera };
};

const createParticles = () => {
  const particles = 10000;
  const geometry = new window.THREE.BufferGeometry();
  const positions = new Float32Array(particles * 3);
  const colors = new Float32Array(particles * 3);

  for (let i = 0; i < particles; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = Math.cbrt(Math.random()) * 100;
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
    colors[i * 3] = 0.5 + Math.random() * 0.5;
    colors[i * 3 + 1] = 0.5 + Math.random() * 0.5;
    colors[i * 3 + 2] = 1;
  }

  geometry.setAttribute('position', new window.THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new window.THREE.BufferAttribute(colors, 3));
  const material = new window.THREE.PointsMaterial({ size: 0.1, vertexColors: true });
  return new window.THREE.Points(geometry, material);
};

const startAnimation = (
  points: THREE.Points,
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const animate = () => {
    requestAnimationFrame(animate);
    points.rotation.y += 0.001;
    renderer.render(scene, camera);
  };
  animate();
};

const handleResize = (camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

export default function GalaxyScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isThreeLoaded, setIsThreeLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Load Three.js from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.THREE) {
        setIsThreeLoaded(true);
      } else {
        console.error('Three.js loaded but window.THREE is undefined');
      }
    };

    script.onerror = () => {
      console.error('Failed to load Three.js from CDN');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!isThreeLoaded || !mountRef.current || !window.THREE) return;

    const renderer = createRenderer(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const { scene, camera } = createSceneAndCamera(window.innerWidth, window.innerHeight);
    const points = createParticles();
    scene.add(points);

    startAnimation(points, renderer, scene, camera);

    const resizeHandler = () => handleResize(camera, renderer);
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [isThreeLoaded]);

  

  return <div ref={mountRef} className="absolute inset-0" />;
}