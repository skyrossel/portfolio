import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '@/lib/model'
import { DogContainer, DogSpinner } from '@/components/model/voxel-dog-loader'

function easeOutCirc(x: number): number {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = (): JSX.Element => {
  const refContainer = useRef<HTMLDivElement>(null)
  const refRenderer = useRef<THREE.WebGLRenderer | null>(null)

  const [loading, setLoading] = useState<boolean>(true)

  const handleWindowResize = useCallback((): void => {
    const { current: container } = refContainer
    const { current: renderer } = refRenderer

    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const { current: container } = refContainer

    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer
      renderer.setSize(scW, scH)

      const scene = new THREE.Scene()
      const target = new THREE.Vector3(-0.5, 1.2, 0)
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI),
      )

      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000,
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      loadGLTFModel(scene, '/glb/dog.glb', {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req: number | null = null
      let frame = 0
      const animate = (): void => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.y = 10
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }
        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req!)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  )
}

export default VoxelDog
