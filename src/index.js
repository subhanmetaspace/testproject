import * as THREE from 'three';
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
import Stats from 'three/addons/libs/stats.module.js';



            const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 50000 );
            scene.background = new THREE.Color( 0x228ae1 );

            camera.position.z = 800;

            const loader = new THREE.TextureLoader();
		    scene.background = loader.load( '/src/sky.jpg' );
            scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

            const controls = new TrackballControls(camera, renderer.domElement)

            // CYLINDER
            // const cylindergeometry = new THREE.CylinderGeometry( 3, 3, 20, 32 );
            // const cylindermaterial = new THREE.MeshBasicMaterial( {color: 0x818c95, wireframe: true} );
            // const cylinder = new THREE.Mesh( cylindergeometry, cylindermaterial );
            // scene.add( cylinder )
            // cylinder.rotation.x = Math.PI / 2;
            // cylinder.position.y = 2;
            // cylinder.position.z = -4;

            const geometry = new THREE.CylinderGeometry( 0, 3, 10, 4, 1 );
				const material = new THREE.MeshPhongMaterial( { color: 0xffffff } );

				for ( let i = 0; i < 500; i ++ ) {

					const mesh = new THREE.Mesh( geometry, material );
					mesh.position.x = ( Math.random() - 0.5 ) * 1000;
					mesh.position.y = ( Math.random() - 0.5 ) * 1000;
					mesh.position.z = ( Math.random() - 0.2 ) * 1000;
					mesh.updateMatrix();
					mesh.matrixAutoUpdate = false;
					scene.add( mesh );

				}


            const ringgeometry = new THREE.RingGeometry( 4.8, 5, 50 );
				const ringmaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, wireframe:true } );

				for ( let i = 0; i < 500; i ++ ) {

					const ringmesh = new THREE.Mesh( ringgeometry, ringmaterial );
					// mesh.position.x = ( Math.random() - 0.5 ) * 1000;
					// mesh.position.y = ( Math.random() - 0.5 ) * 1000;
					ringmesh.position.z = ( Math.random() - 0.2 ) * 1000;
					ringmesh.updateMatrix();
					ringmesh.matrixAutoUpdate = false;
					scene.add( ringmesh );

				}

                const stats = new Stats();
				document.body.appendChild( stats.dom );




            // CUBE 1
			const cubegeometry = new THREE.BoxGeometry( 1, 1, 1 );
			const cubematerial = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
			const cube = new THREE.Mesh( cubegeometry, cubematerial );
			scene.add( cube );

            cube.position.z = 100;

            // CUBE 2
            const texture = new THREE.TextureLoader().load( 'src/box2.jpg' );
			const cube2geometry = new THREE.BoxGeometry( 1.5, 2, 0.1 );
			const cube2material = new THREE.MeshPhongMaterial( { map: texture } );
			const cube2 = new THREE.Mesh( cube2geometry, cube2material );
			scene.add( cube2 );
            cube2.position.z = 50;
            cube2.position.y = 0;
            cube2.position.x = 1;
            cube2.rotation.x = 0;
            cube2.rotation.y = -0.5;

            // CUBE 3
            const texture3 = new THREE.TextureLoader().load( 'src/box3.jpg' );
			const cube3geometry = new THREE.BoxGeometry( 1.5, 2, 0.1 );
			const cube3material = new THREE.MeshPhongMaterial( { map: texture3} );
			const cube3 = new THREE.Mesh( cube3geometry, cube3material );
			scene.add( cube3 );
            cube3.position.z = 70;
            cube3.position.y = 0;
            cube3.position.x = -1;
            cube3.rotation.x = 0;
            cube3.rotation.y = 0.5;


            // PLANE
            // const planegeometry = new THREE.PlaneGeometry( 80, 80, 80, 80 );
            // const planematerial = new THREE.MeshBasicMaterial( {color: 0x1a1f22, side: THREE.DoubleSide} );
            // const floor = new THREE.Mesh( planegeometry, planematerial );
            // scene.add( floor );
            // floor.rotation.x = Math.PI / 2;
            // floor.position.y = -2;


            // lights

				const dirLight1 = new THREE.DirectionalLight( 0xffffff );
				dirLight1.position.set( 1, 1, 1 );
				scene.add( dirLight1 );

				// const dirLight2 = new THREE.DirectionalLight( 0x002288 );
				// dirLight2.position.set( - 1, - 1, - 1 );
				// scene.add( dirLight2 );

				// const ambientLight = new THREE.AmbientLight( 0x222222 );
				// scene.add( ambientLight );

			




			function animate() {
				requestAnimationFrame( animate );
                cube.rotation.y += 0.01;
                controls.update()
                stats.update();
                

				renderer.render( scene, camera );
			};

			animate();