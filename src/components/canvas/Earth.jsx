import { Suspense, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"

const Earth = ({ isMobile }) => {
	const earth = useGLTF("./planet/scene.gltf")
	return (
		<mesh>
			<primitive
				object={earth.scene}
				scale={isMobile ? 2.5 : 2}
				position-y={0}
				rotation-y={0}
			/>
		</mesh>
	)
}

const EarthCanvas = () => {
	const [isMobile, setisMobile] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setisMobile(window.innerWidth < 768)
		}
		window.addEventListener("resize", handleResize)
		handleResize()

		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return (
		<Canvas
			shadows
			frameloop="demand"
			gl={{ preserveDrawingBuffer: true }}
			camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls autoRotate enableZoom={false} />
				<Earth isMobile={isMobile} />
			</Suspense>
		</Canvas>
	)
}

export default EarthCanvas
