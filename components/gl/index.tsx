import { Component, ReactNode, useEffect, useState } from "react";
import { Perf } from "r3f-perf";
import { Effects } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Particles } from "./particles";
import { VignetteShader } from "./shaders/vignetteShader";

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.warn("WebGL Error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="w-full h-full bg-black/90" />; // Fallback
    }

    return this.props.children;
  }
}

export const GL = ({ hovering }: { hovering: boolean }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [supportsWebGL, setSupportsWebGL] = useState(true); // Optimistic default

  useEffect(() => {
    setIsMounted(true);
    // Check for WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setSupportsWebGL(false);
        console.warn("WebGL not supported, falling back to CSS background.");
      }
    } catch (e) {
      setSupportsWebGL(false);
      console.warn("Error checking WebGL support:", e);
    }
  }, []);

  // Fixed defaults (control bar removed)
  const speed = 1.0;
  const focus = 3.8;
  const aperture = 1.79;
  const size = 512;
  const noiseScale = 0.6;
  const noiseIntensity = 0.52;
  const timeScale = 1;
  const pointSize = 10.0;
  const opacity = 0.8;
  const planeScale = 10.0;
  const vignetteDarkness = 1.5;
  const vignetteOffset = 0.4;
  const useManualTime = false;
  const manualTime = 0;

  if (!isMounted) return <div className="w-full h-full bg-black" />;
  if (!supportsWebGL) return <div className="w-full h-full bg-black/90" />;

  return (
    <div id="webgl" className="w-full h-full">
      <ErrorBoundary>
        <Canvas
          className="w-full h-full"
          style={{ width: "100%", height: "100%" }}
          camera={{
            position: [
              1.2629783123314589, 2.664606471394044, -1.8178993743288914,
            ],
            fov: 50,
            near: 0.01,
            far: 300,
          }}
          gl={{
            powerPreference: "high-performance",
            antialias: false,
            stencil: false,
            depth: false,
            failIfMajorPerformanceCaveat: true // Fail fast if GPU is bad
          }}
          onCreated={({ gl }) => {
            // Check if context is lost immediately
            if (gl.getContext().isContextLost()) {
              console.warn("WebGL context lost immediately");
            }
          }}
        >
          <color attach="background" args={["#000"]} />
          <Particles
            speed={speed}
            aperture={aperture}
            focus={focus}
            size={size}
            noiseScale={noiseScale}
            noiseIntensity={noiseIntensity}
            timeScale={timeScale}
            pointSize={pointSize}
            opacity={opacity}
            planeScale={planeScale}
            useManualTime={useManualTime}
            manualTime={manualTime}
            introspect={hovering}
          />
          <Effects multisamping={0} disableGamma>
            <shaderPass
              args={[VignetteShader]}
              uniforms-darkness-value={vignetteDarkness}
              uniforms-offset-value={vignetteOffset}
            />
          </Effects>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};
