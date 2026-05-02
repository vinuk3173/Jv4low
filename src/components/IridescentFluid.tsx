import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function IridescentFluid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create a fluid/blobby mesh
    const geometry = new THREE.TorusKnotGeometry(1, 0.35, 128, 32);
    
    // Iridescent shader
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        uniform float time;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          
          // Add some vertex displacement for "fluid" movement
          vec3 pos = position;
          pos.x += sin(pos.y * 3.0 + time * 0.5) * 0.1;
          pos.y += cos(pos.x * 2.0 + time * 0.6) * 0.1;
          pos.z += sin(pos.y * 4.0 + time * 0.7) * 0.1;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        uniform float time;

        vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
          return a + b*cos( 6.28318*(c*t+d) );
        }

        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = pow(1.0 - dot(normal, viewDir), 2.0);
          
          // Rainbow iridescence
          vec3 color = pal( fresnel + time * 0.1, vec3(0.5,0.5,0.5),vec3(0.5,0.5,0.5),vec3(1.0,1.0,1.0),vec3(0.0,0.33,0.67) );
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const animate = (time: number) => {
      material.uniforms.time.value = time * 0.001;
      mesh.rotation.y = time * 0.0002;
      mesh.rotation.x = time * 0.0001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full min-h-[400px]" />;
}
