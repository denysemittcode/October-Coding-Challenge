import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const container = document.querySelector("#scene-container");

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  45,
  container.clientWidth / container.clientHeight,
  0.1,
  100
);

camera.position.set(0, 1, 15);

// Renderer
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});

renderer.setSize(
  container.clientWidth,
  container.clientHeight
);

renderer.setPixelRatio(
  Math.min(window.devicePixelRatio, 2)
);

container.appendChild(renderer.domElement);

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(3, 5, 4);
scene.add(directionalLight);

// Load witch
const loader = new GLTFLoader();

loader.load(
  "assets/witch.glb",

function (gltf) {
  const witch = gltf.scene;

  // Measure the model
  const box = new THREE.Box3().setFromObject(witch);

  // Find the center of the model
  const center = box.getCenter(new THREE.Vector3());

  // Move the witch to the center of the scene
  witch.position.x -= center.x;
  witch.position.y -= center.y;
  witch.position.z -= center.z;

  scene.add(witch);
},

  undefined,

  function (error) {
    console.error(error);
  }
);

// Rotation controls
const controls = new OrbitControls(
  camera,
  renderer.domElement
);

controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  controls.update();
  renderer.render(scene, camera);
}

animate();

// Responsive resizing
window.addEventListener("resize", function () {
  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
});