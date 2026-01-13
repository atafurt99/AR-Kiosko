// ...existing code...
const THREE = window.MINDAR.THREE;
document.addEventListener('DOMContentLoaded', async () => {
    const start = async() => {
        const mindarThree = new window.MINDAR.MindARThree({
            container: document.body,
            imageTargetSrc: './assets/targets.mind'
        });
        const {renderer, scene, camera} = mindarThree;

        const geometry = new THREE.BoxGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
        const plane = new THREE.Mesh(geometry, material);

        const anchor = mindarThree.addAnchor(0);
        anchor.group.add(plane);
        await mindarThree.start();

        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });
    }       
    start();
});




/*import * as THREE from "./three.module.js";

document.addEventListener('DOMContentLoaded', async () => {
    const scene = new THREE.Scene();
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    cube.position.set(0, 0, -2);
    cube.rotation.set(0.5, Math.PI / 4, 0);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(1, 1, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(500, 500);
    renderer.render(scene, camera);
    

    const video = document.createElement('video');
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        video.play();
    });

    video.style.position = 'absolute';
    renderer.domElement.style.position = 'absolute';
    video.style.width = renderer.domElement.width; 
    video.style.height = renderer.domElement.height;
    renderer.domElement.style.position = 'absolute';


    document.body.appendChild(video);
    document.body.appendChild(renderer.domElement);

    const ar = new SOME_AR_ENGINE();
    while(true) {
        await nextVideoFrameReady();
         const {position, rotation} = ar.computeObjectPose(video);
         cube.position = position;
         cube.rotation = rotation;
    }
   

   /* window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();

});
// ...existing code...*/