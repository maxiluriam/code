import "./style.css";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { WebGLRenderer } from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.y = 20;
camera.position.x = 10;

const abiantLight = new THREE.AmbientLight("ffffff");
scene.add(abiantLight);

let addplane = function (posX, posY, posZ, rotX, rotY, rotZ) {
  const torusObject = new THREE.PlaneGeometry(20, 20, 10, 10);
  const torusMaterial = new THREE.MeshStandardMaterial({
    color: "gray",
    wireframe: false,
  });
  const Plane = new THREE.Mesh(torusObject, torusMaterial);

  Plane.position.x = posX;
  Plane.position.y = posY;
  Plane.position.z = posZ;
  Plane.rotation.x = Math.PI / rotX;
  Plane.rotation.y = Math.PI / rotY;
  Plane.rotation.z = Math.PI / rotZ;

  scene.add(Plane);
};

addplane(0, 0, 0, 2, 1, 1);
addplane(-11, 11, 0, 1, 2, 1);
addplane(0, 11, 11, -300, 1, 1);

const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

let snake = [
  { x: 3, y: 9, z: 0, rotation: 2 },
  { x: 5, y: 9, z: 0, rotation: 2 },
  { x: 7, y: 9, z: 0, rotation: 2 },
];

let renderSnake = function (snake, snakeSegment, snakeMaterial) {
  while (scene.children.length > 4) {
    scene.remove(scene.children[scene.children.length - 1]);
  }

  for (let i = 0; i < snake.length; i++) {
    let snakeCube = new THREE.Mesh(snakeSegment, snakeMaterial);

    if (snake[i].number === 0) {
      if (snake[i].rotationY === 1.5) {
        snakeCube.position.x = snake[i].y + 0.3;
        snakeCube.position.z = snake[i].x;
        snakeCube.position.y = snake[i].z;
      } else if (snake[i].rotationY === 2) {
        snakeCube.position.x = snake[i].y;
        snakeCube.position.z = snake[i].x + 0.3;
        snakeCube.position.y = snake[i].z;
      } else if (snake[i].rotationY === 2.5) {
        snakeCube.position.x = snake[i].y - 0.3;
        snakeCube.position.z = snake[i].x;
        snakeCube.position.y = snake[i].z;
      } else if (snake[i].rotationY === 1) {
        snakeCube.position.x = snake[i].y;
        snakeCube.position.z = snake[i].x - 0.3;
        snakeCube.position.y = snake[i].z;
      }
    } else if (snake[i].number === 1) {
      if (snake[i].rotationX === 1.5) {
        snakeCube.position.x = snake[i].y;
        snakeCube.position.z = snake[i].x;
        snakeCube.position.y = snake[i].z - 0.3;
      } else if (snake[i].rotationY === 1.5) {
        snakeCube.position.x = snake[i].y - 0.3;
        snakeCube.position.z = snake[i].x;
        snakeCube.position.y = snake[i].z;
      } else if (snake[i].rotationX === 2.5) {
        snakeCube.position.x = snake[i].y;
        snakeCube.position.z = snake[i].x;
        snakeCube.position.y = snake[i].z + 0.3;
      } else if (snake[i].rotationY === 2.5) {
        snakeCube.position.x = snake[i].y + 0.3;
        snakeCube.position.z = snake[i].x;
        snakeCube.position.y = snake[i].z;
      }
    } else if (snake[i].number === 2) {
      if (snake[i].rotationX === 1.5) {
        snakeCube.position.x = snake[i].y;
        snakeCube.position.z = snake[i].x;
        snakeCube.position.y = snake[i].z - 0.3;
      } else if (snake[i].rotationX === 1) {
        snakeCube.position.x = snake[i].y;
        snakeCube.position.z = snake[i].x - 0.3;
        snakeCube.position.y = snake[i].z;
      } else if (snake[i].rotationX === 2.5) {
        snakeCube.position.x = snake[i].y;
        snakeCube.position.z = snake[i].x;
        snakeCube.position.y = snake[i].z + 0.3;
      } else if (snake[i].rotationX === 2) {
        snakeCube.position.x = snake[i].y;
        snakeCube.position.z = snake[i].x + 0.3;
        snakeCube.position.y = snake[i].z;
      }
    }

    snakeCube.rotation.x = Math.PI * snake[i].rotationX;
    snakeCube.rotation.y = Math.PI * snake[i].rotationY;
    snakeCube.rotation.z = Math.PI * snake[i].rotationZ;

    scene.add(snakeCube);
  }
};

let movement = [0, 0];

let number = 0;

let input = document.addEventListener("keydown", (e) => {
  if (e.key === "w" && movement[1] !== 2) {
    movement[0] = 0;
  } else if (e.key === "a" && movement[1] !== 3) {
    movement[0] = 1;
  } else if (e.key === "s" && movement[1] !== 0) {
    movement[0] = 2;
  } else if (e.key === "d" && movement[1] !== 1) {
    movement[0] = 3;
  }

  console.log(movement);
});

let checkPlane = function (snake, number, movement) {
  if (number === 0) {
    if (snake[snake.length - 1].x > 10) {
      return [(number = 1), (movement = 0)];
    } else if (snake[snake.length - 1].y < -10) {
      return [(number = 2), (movement = movement)];
    } else {
      return [(number = number), (movement = movement)];
    }
  } else if (number === 1) {
    if (snake[snake.length - 1].y < -10) {
      return [(number = 2), (movement = movement)];
    } else if (snake[snake.length - 1].z < 1) {
      return [(number = 0), (movement = 3)];
    } else {
      return [(number = number), (movement = movement)];
    }
  } else if (number === 2) {
    if (snake[snake.length - 1].z < 1) {
      return [(number = 0), (movement = movement)];
    } else if (snake[snake.length - 1].x > 10) {
      return [(number = 1), (movement = movement)];
    } else {
      return [(number = number), (movement = movement)];
    }
  } else {
    return [(number = number), (movement = movement)];
  }
};

let checkApple = function (apple, snake) {
  if (
    snake[snake.length - 1].x === apple.x &&
    snake[snake.length - 1].y === apple.y &&
    snake[snake.length - 1].z === apple.z
  ) {
    apple.eaten = true;
  }

  return apple;
};

let spawnApple = function (apple, snake) {
  if (apple.eaten === true) {
    let spawned = false;

    while (spawned === false) {
      let number1 = Math.floor(Math.random() * 3);

      if (number1 === 0) {
        let i = Math.floor(Math.random() * 5) - 2.5;
        let r = i * 2;

        let i2 = Math.floor(Math.random() * 5) - 2.5;
        let r2 = i2 * 2;

        apple.x = r;
        apple.y = r2;
        apple.z = 0;
      } else if (number1 === 1) {
        let i = Math.floor(Math.random() * 5) - 2.5;
        let r = i * 2;

        let i2 = Math.floor(Math.random() * 9);
        let r2 = i2 * 2;

        apple.x = 11;
        apple.y = r;
        apple.z = r2;
      } else if (number1 === 2) {
        let i = Math.floor(Math.random() * 6) - 2.5;
        let r = i * 2;

        let i2 = Math.floor(Math.random() * 9);
        let r2 = i2 * 2;

        apple.x = r;
        apple.y = -11;
        apple.z = r2;
      }

      for (let i = 0; i < snake.length; i++) {
        if (
          apple.x !== snake[i].x &&
          apple.y !== snake[i].y &&
          apple.z !== snake[i].z
        ) {
          spawned = true;
        }
      }
    }
  }
  return apple;
};

let apple = { x: 5, y: 5, z: 0, eaten: false };

let appleGeometry = new THREE.BoxGeometry(1, 1, 1, 1);
let appleMaterial = new THREE.MeshStandardMaterial({
  color: "red",
  wireframe: false,
});

let snakeSegment = new THREE.BoxGeometry(1, 1, 1.7, 1);
let snakeMaterial = new THREE.MeshStandardMaterial({
  color: "green",
  wireframe: false,
});

let renderApple = function (apple, appleGeometry, appleMaterial) {
  let snakeCube = new THREE.Mesh(appleGeometry, appleMaterial);

  snakeCube.position.x = apple.y;
  snakeCube.position.z = apple.x;
  snakeCube.position.y = apple.z;

  scene.add(snakeCube);
};

let snakeMovement = function (movement, snake, number, apple) {
  if (number === 0) {
    if (movement[0] === 0) {
      snake.push({
        x: snake[snake.length - 1].x,
        y: snake[snake.length - 1].y - 2,
        z: snake[snake.length - 1].z,
        rotationX: 1,
        rotationY: 1.5,
        rotationZ: 1,
        number: 0,
      });
    } else if (movement[0] === 1) {
      snake.push({
        x: snake[snake.length - 1].x + 2,
        y: snake[snake.length - 1].y,
        z: snake[snake.length - 1].z,
        rotationX: 1,
        rotationY: 1,
        rotationZ: 1,
        number: 0,
      });
    } else if (movement[0] === 2) {
      snake.push({
        x: snake[snake.length - 1].x,
        y: snake[snake.length - 1].y + 2,
        z: snake[snake.length - 1].z,
        rotationX: 1,
        rotationY: 2.5,
        rotationZ: 1,
        number: 0,
      });
    } else if (movement[0] === 3) {
      snake.push({
        x: snake[snake.length - 1].x - 2,
        y: snake[snake.length - 1].y,
        z: snake[snake.length - 1].z,
        rotationX: 1,
        rotationY: 2,
        rotationZ: 1,
        number: 0,
      });
    }
  }
  if (number === 1) {
    if (movement[0] === 0) {
      snake.push({
        x: snake[snake.length - 1].x,
        y: snake[snake.length - 1].y,
        z: snake[snake.length - 1].z + 2,
        rotationX: 1.5,
        rotationY: 1,
        rotationZ: 1,
        number: 1,
      });
    } else if (movement[0] === 1) {
      snake.push({
        x: snake[snake.length - 1].x,
        y: snake[snake.length - 1].y + 2,
        z: snake[snake.length - 1].z,
        rotationX: 1,
        rotationY: 1.5,
        rotationZ: 1,
        number: 1,
      });
    } else if (movement[0] === 2) {
      snake.push({
        x: snake[snake.length - 1].x,
        y: snake[snake.length - 1].y,
        z: snake[snake.length - 1].z - 2,
        rotationX: 2.5,
        rotationY: 1,
        rotationZ: 1,
        number: 1,
      });
    } else if (movement[0] === 3) {
      snake.push({
        x: snake[snake.length - 1].x,
        y: snake[snake.length - 1].y - 2,
        z: snake[snake.length - 1].z,
        rotationX: 1,
        rotationY: 2.5,
        rotationZ: 1,
        number: 1,
      });
    }
  }
  if (number === 2) {
    if (movement[0] === 0) {
      snake.push({
        x: snake[snake.length - 1].x,
        y: snake[snake.length - 1].y,
        z: snake[snake.length - 1].z + 2,
        rotationX: 1.5,
        rotationY: 1,
        rotationZ: 1,
        number: 2,
      });
    } else if (movement[0] === 1) {
      snake.push({
        x: snake[snake.length - 1].x + 2,
        y: snake[snake.length - 1].y,
        z: snake[snake.length - 1].z,
        rotationX: 1,
        rotationY: 1,
        rotationZ: 1,
        number: 2,
      });
    } else if (movement[0] === 2) {
      snake.push({
        x: snake[snake.length - 1].x,
        y: snake[snake.length - 1].y,
        z: snake[snake.length - 1].z - 2,
        rotationX: 2.5,
        rotationY: 1,
        rotationZ: 1,
        number: 2,
      });
    } else if (movement[0] === 3) {
      snake.push({
        x: snake[snake.length - 1].x - 2,
        y: snake[snake.length - 1].y,
        z: snake[snake.length - 1].z,
        rotationX: 2,
        rotationY: 1,
        rotationZ: 1,
        number: 2,
      });
    }
  }

  if (apple === false) {
    snake.shift();
    apple = false;
  }

  apple = false;
  movement[1] = movement[0];

  return [movement, apple];
};
let death = false;
setInterval(function () {
  [movement, apple.eaten] = snakeMovement(movement, snake, number, apple.eaten);

  [number, movement[0]] = checkPlane(snake, number, movement[0]);

  apple = checkApple(apple, snake);

  apple = spawnApple(apple, snake);

  console.log(scene.children);

  let e = renderer.info;

  console.log(e);

  if (death === true) {
    clearInterval();
  }
}, 300);

function animate() {
  requestAnimationFrame(animate);

  renderSnake(snake, snakeSegment, snakeMaterial);

  renderApple(apple, appleGeometry, appleMaterial);

  //console.log(scene.children);

  renderer.render(scene, camera);
}

animate();
