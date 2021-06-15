const canvas = document.getElementById("canvas");

const engine = new BABYLON.Engine(canvas, true);

function createScene() {
  const scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera(
    "Camera",
    (3 * Math.PI) / 4,
    Math.PI / 4,
    2,
    BABYLON.Vector3(5, 5, 5),
    scene
  );
  camera.attachControl(canvas, true);

  const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(1, 1, 0),
    scene
  );

  let defaultMaterial = new BABYLON.StandardMaterial("defaultMaterial", scene);
  defaultMaterial.diffuseTexture = new BABYLON.Texture(
    "media/model/textures/map.png",
    scene
  );
  defaultMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

  let defaultMaterialO = new BABYLON.StandardMaterial("defaultMaterialO", scene);
  defaultMaterialO.diffuseTexture = new BABYLON.Texture(
    "media/model/textures/mapo.png",
    scene
  );
  defaultMaterialO.specularColor = new BABYLON.Color3(0, 0, 0);

  let mesh = new BABYLON.SceneLoader.ImportMesh(
    "",
    "media/model/",
    "map.obj",
    scene,
    function (newMeshes) {
      scene.onPointerDown = function castRay() {
        var ray = scene.createPickingRay(
          scene.pointerX,
          scene.pointerY,
          BABYLON.Matrix.Identity(),
          camera
        );

        var hit = scene.pickWithRay(ray);

        if (hit.pickedMesh) {
          getData(hit.pickedMesh.id)
        }
      };
      bro();
    }
  );

  function bro() {
    scene.meshes.forEach((element) => {
      element.material = defaultMaterial;
      element.position = new BABYLON.Vector3(10,-5,8)
    });
  }

  $("#canvas").mousemove(function () {
    let hit = scene.pickWithRay(
      scene.createPickingRay(
        scene.pointerX,
        scene.pointerY,
        BABYLON.Matrix.Identity(),
        camera
      )
    );
    if (hit.pickedMesh) {
        scene.meshes.forEach((element) => {
            element.material = defaultMaterial;
          });
        hit.pickedMesh.material = defaultMaterialO
    }
  });

  return scene;
}

const scene = createScene();

engine.runRenderLoop(() => {
  scene.render();
});
