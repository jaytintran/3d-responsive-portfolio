import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"

const Model = ({ isMobile }) => {
	const computer = useGLTF("./desktop_pc/scene.gltf")
	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 15, 10]}
				angle={0.12}
				prenumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.4 : 0.625}
				position={isMobile ? [2, -2, 0] : [0, -3, -1.15]}
				rotation={[0, -0.05, 0]}
			/>
		</mesh>
	)
}

const ComputersCanvas = () => {
	const [isMobile, setisMobile] = useState(false)

	useEffect(() => {
		// const mediaQuery = window.matchMedia("(max-width: 500)")

		// setisMobile(mediaQuery.matches)

		// const handleMediaQueryChange = (event) => {
		// 	setisMobile(event.matches)
		// }

		// mediaQuery.addEventListener("change", handleMediaQueryChange)

		// return () => {
		// 	mediaQuery.removeEventListener("change", handleMediaQueryChange)
		// }

		const handleResize = () => {
			setisMobile(window.innerWidth < 768) // Set to true if screen width is less than 768px (typically a mobile device)
		}

		window.addEventListener("resize", handleResize)
		handleResize()

		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Model isMobile={isMobile} />
			</Suspense>

			{/* <Preload all /> */}
		</Canvas>
	)
}

export default ComputersCanvas
