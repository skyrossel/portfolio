import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGLTFModel(
  scene: { add: (arg0: any) => void },
  glbPath: any,
  options = { receiveShadow: true, castShadow: true },
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      glbPath,
      (gltf: { scene: any }) => {
        const obj = gltf.scene
        obj.name = 'Voxel Dog'
        obj.position.x = 0
        obj.position.y = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child: {
          isMesh: any
          receiveShadow: boolean
          castShadow: boolean
        }) {
          if (child.isMesh) {
            child.receiveShadow = receiveShadow
            child.castShadow = castShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error: any) {
        reject(error)
      },
    )
  })
}
