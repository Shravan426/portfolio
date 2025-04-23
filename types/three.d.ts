// Declare the THREE namespace globally
declare namespace THREE {
    class Scene {
      add(object: Points): void;
    }
    class PerspectiveCamera {
      constructor(fov: number, aspect: number, near: number, far: number);
      position: Vector3;
      aspect: number;
      updateProjectionMatrix(): void;
    }
    class WebGLRenderer {
      constructor(parameters?: { alpha?: boolean });
      setSize(width: number, height: number): void;
      render(scene: Scene, camera: PerspectiveCamera): void;
      domElement: HTMLCanvasElement;
    }
    class BufferGeometry {
      setAttribute(name: string, attribute: BufferAttribute): void;
    }
    class BufferAttribute {
      constructor(array: Float32Array, itemSize: number);
    }
    class PointsMaterial {
      constructor(parameters: { size: number; vertexColors: boolean });
    }
    class Points {
      constructor(geometry: BufferGeometry, material: PointsMaterial);
      rotation: Vector3;
    }
    class Vector3 {
      x: number;
      y: number;
      z: number;
    }
  }