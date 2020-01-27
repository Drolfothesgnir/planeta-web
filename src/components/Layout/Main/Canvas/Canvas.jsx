import React from "react";
import {
  PerspectiveCamera,
  Scene,
  Color,
  DirectionalLight,
  IcosahedronGeometry,
  MeshPhongMaterial,
  VertexColors,
  Mesh,
  WebGLRenderer
} from "three";

function init(ref) {

    const container = ref.current;
  let mouseX = 0,
    mouseY = 0,
    windowHalfX = container.offsetWidth - (container.offsetWidth/ 100) * 20,
    windowHalfY = container.offsetHeight - (container.offsetHeight/ 100) * 20;

    const camera = new PerspectiveCamera(
      23,
      container.offsetWidth / container.offsetHeight,
      1,
      10000
    ),
    scene = new Scene(),
    light = new DirectionalLight(0xffffff),
    radius = 250,
    geometry = new IcosahedronGeometry(radius, 1),
    faceIndices = ["a", "b", "c"],
    material = new MeshPhongMaterial({
      color: 0xffffff,
      flatShading: true,
      vertexColors: VertexColors,
      shininess: 0
    }),
    mesh = new Mesh(geometry, material),
    renderer = new WebGLRenderer({ antialias: true });

  camera.position.z = 1500;
  scene.background = new Color(0xd6e9f1);
  light.position.set(0, 0, 1);
  scene.add(light);

  for (let i = 0; i < geometry.faces.length; i++) {
    const f = geometry.faces[i];
    for (let j = 0; j < 3; j++) {
      const vertexIndex = f[faceIndices[j]];
      const p = geometry.vertices[vertexIndex];
      const color = new Color(0xffffff);
      color.setHSL((p.y / radius + 1) / 0, 0.2, 0.2);
      f.vertexColors[j] = color;
    }
  }

  mesh.position.x = 0;
  mesh.position.y = 0;
  scene.add(mesh);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  function onWindowResize() {
    windowHalfX = container.offsetWidth / 2;
    windowHalfY = container.offsetHeight / 2;
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
  }
  function onDocumentMouseMove(event) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }
  //
  function animate() {
    requestAnimationFrame(animate);
    render();
  }
  function render() {
    camera.position.x += (mouseX - camera.position.x) * 0.03;
    camera.position.y += (-mouseY - camera.position.y) * 0.03;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }

  document.addEventListener("mousemove", onDocumentMouseMove, false);
  window.addEventListener("resize", onWindowResize, false);
  animate();
  return function() {
    document.removeEventListener("mousemove", onDocumentMouseMove, false);
    window.removeEventListener("resize", onWindowResize, false);
  };
}

function Canvas() {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    if (outerWidth >= 1280) {
        return init(canvasRef);
    }
  }, []);

  return <div style={{height: '90%', width: '100%'}} ref={canvasRef}/>;
}

export default Canvas;
