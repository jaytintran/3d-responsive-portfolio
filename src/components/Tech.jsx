import React from "react"
import { motion } from "framer-motion"
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from "../styles"
import { textVariant } from "../utils/motion"

const Tech = () => {
	return (
		<>
			<motion.div variants={textVariant()} className="mb-5 mx-auto">
				<p className={`${styles.sectionSubText} text-center`}>
					My tools for the job
				</p>
				<h2 className={styles.sectionHeadText}>Skillset</h2>
			</motion.div>

			<div className="flex flex-row flex-wrap justify-center gap-10">
				{technologies.map((technology) => (
					<div className="w-28 h-28" key={technology.name}>
						<BallCanvas icon={technology.icon} />
						<p className="font-semibold text-center capitalize">
							{technology.name}
						</p>
					</div>
				))}
			</div>
		</>
	)
}

export default SectionWrapper(Tech, "")
