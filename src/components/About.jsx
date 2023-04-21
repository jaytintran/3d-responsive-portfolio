import React from "react"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { learnings } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { Tilt } from "react-tilt"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({ index, icon, title }) => (
	<Tilt className="xs:w-[250px] w-full">
		<motion.div
			variants={fadeIn("right", "spring", 0.5 * index, 0.7)}
			className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div
				options={{ max: 45, scale: 1, speed: 450 }}
				className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
			>
				<img src={icon} alt={title} className="w-16 h-16 object-contain" />
				<h3 className="text-white text-[20px] font-bold text-center">
					{title}
				</h3>
			</div>
		</motion.div>
	</Tilt>
)

const About = () => {
	return (
		<>
			<motion.div>
				<p className={styles.sectionSubText} id="about">
					Introduction
				</p>
				<h2 className={styles.sectionHeadText}>Overview</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl"
			>
				My aim is to build user-centered applications with great UI and user
				experience. I have experience working with TypeScript and JavaScript,
				and knowledge about frameworks like React.js, Node.js, and Next.js. I'm
				a quick learner and I enjoy working on difficult problems and improving
				my skills.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>

			<motion.div>
				<p
					className={styles.sectionSubText}
					id="about"
					style={{ paddingTop: "8rem" }}
				>
					My Potenial Learnings
				</p>
				<h2 className={styles.sectionHeadText}>Tech Interests</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl"
			>
				I'm always a curious person who takes interests in learning different
				skills. I know in today age, we should be an expert in one field but
				also openly to learn different skillsets. Besides I hope those knowledge
				will aid me sometime in the future.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{learnings.map((learning, index) => (
					<ServiceCard key={learning.title} index={index} {...learning} />
				))}
			</div>
		</>
	)
}

export default SectionWrapper(About, "about")
