import { THREE, renderer, scene, mainCamera } from './renderer';
import { config } from './config';


// Init.
const box = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(box, material);
scene.add(mesh);

mainCamera.position.z = 50;

// Render.
renderer.setSize(config.width, config.height);
renderer.render(scene, mainCamera);
