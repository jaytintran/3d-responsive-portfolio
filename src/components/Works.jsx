import React, { useEffect, useState } from "react"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { github, url } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { styles } from "../styles"
import FilterComponent from "./utils/FilterComponent"

const backdropStyles = {
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	backgroundColor: "rgba(0, 0, 0, 0.2)", // Use your preferred color and opacity
	zIndex: 999, // Adjust the z-index as needed
}

const upcomingStyles = {
	position: "absolute",
	top: "10px" /* Adjust the top position as needed */,
	left: "10px" /* Adjust the left position as needed */,
	backgroundColor: "yellow" /* Use your preferred color */,
	color: "black" /* Use your preferred color */,
	padding: "5px 10px" /* Adjust the padding as needed */,
}

// in-progress styles
const progressStyles = {
	position: "absolute",
	top: "10px" /* Adjust the top position as needed */,
	left: "10px" /* Adjust the left position as needed */,
	backgroundColor: "lightblue" /* Use your preferred color */,
	color: "black" /* Use your preferred color */,
	zIndex: "10",
	padding: "5px 10px" /* Adjust the padding as needed */,
}

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	progress,
}) => (
	// <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
	<Tilt
		options={{ max: 45, scale: 1, speed: 400 }}
		className="bg-tertiary p-5 rounded-2xl sm:w-[500px] w-full lg:h-[450px] h-auto"
	>
		{progress === "ongoing" ||
			(progress === "progress" && (
				<div>
					<p
						style={progressStyles}
						className="rounded-2xl text-xs font-semibold"
					>
						{progress === "ongoing" ? "Upcoming" : "In Progress"}
					</p>
				</div>
			))}

		<div className="relative w-full h-[230px]">
			<img
				src={image}
				alt={name}
				className="w-full h-full object-cover rounded-2xl"
			/>

			<div className="absolute inset-0 flex justify-end m-3 gap-1 card-img_hover">
				<div
					onClick={() => window.open(source_code_link, "_blank")}
					className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
				>
					<img
						src={github}
						alt="github"
						className="w-1/2 h-1/2 object-contain"
					/>
				</div>
				<div
					onClick={() => window.open(demo_link, "_blank")}
					className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
				>
					<img
						src={url}
						alt="url"
						className="invert w-1/2 h-1/2 object-contain"
					/>
				</div>
			</div>
		</div>

		<div className="mt-5">
			<h3 className="text-white text-[18px] font-bold mb-2">{name}</h3>
			<p className="text-secondary text-[14px]">{description}</p>
		</div>

		<div className="mt-4 flex flex-wrap gap-2">
			{tags.map((tag) => (
				<p key={tag.name} className={`text-[14px] ${tag.color}`}>
					{tag.name}
				</p>
			))}
		</div>
	</Tilt>
	// </motion.div>
)

const Works = () => {
	const [activeFilter, setActiveFilter] = useState("fullstack")

	const handleFilterClick = (filterValue) => {
		setActiveFilter(filterValue)
	}

	const filteredProjects =
		activeFilter === "all"
			? projects
			: projects.filter((project) => project.category === activeFilter)

	console.log("Active Filter:", activeFilter)
	console.log("Filtered Projects:", filteredProjects)

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My works so far</p>
				<h2 className={styles.sectionHeadText}>Projects</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					Showcasing my skills and experiences via examples of my work. Each
					project is briefly described and attached with demo link or github
					link. It reflects my abilities to solve problems and work with
					different technologies.
				</motion.p>
			</div>

			<FilterComponent
				activeFilter={activeFilter}
				onFilterClick={handleFilterClick}
			/>

			<div className="mt-10 flex flex-wrap gap-7 justify-center">
				{filteredProjects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	)
}

export default SectionWrapper(Works, "work")
