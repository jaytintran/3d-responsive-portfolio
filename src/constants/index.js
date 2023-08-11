import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	cryptoket,
	threejs,
	devjobs,
	adminis,
	clickcart,
	shield,
	locker,
	minecraft,
	computer,
} from "../assets"

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
]

const services = [
	{
		title: "Front-end Developer",
		icon: web,
	},
	{
		title: "React Developer",
		icon: mobile,
	},
	{
		title: "Full Stack Developer",
		icon: backend,
	},
	{
		title: "Web Designer",
		icon: creator,
	},
]

const learnings = [
	{
		title: "Cyber Security",
		icon: shield,
	},
	{
		title: "Software Development",
		icon: computer,
	},
	{
		title: "Python + Data Science",
		icon: locker,
	},
	{
		title: "Artifical Inteligence",
		icon: minecraft,
	},
]

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "react native",
		icon: reactjs,
	},
]

const experiences = [
	{
		title: "Front-end Developer",
		company_name: "NTSoft",
		icon: web,
		iconBg: "#383E56",
		date: "Feb 2023 to July 2023",
		points: [
			"Implemented ASP.NET Web Forms, and gain overall proficiency in C#, ADO.NET, and SQL Server. Built interfaces with Bootstrap, jQuery, AJAX, and JavaScript with functionality and interactivity.",
			"Participated in migration team to port the front-end to the  modern React.js stack, improve efficiency, optimization, and help boost the comunication workload up to 30%.",
			"Collaborated with a team to create a robust and secure web application, leveraging modern front-end framework & library. Utilized SQL and SQL Server for efficient data storage, retrieval, and manipulation, ensuring seamless data integration and accuracy.",
			"Contributed to the full development lifecycle, from requirements gathering to deployment, ensuring adherence to project timelines and delivering a high-quality product. Demonstrated strong problem-solving skills and attention to detail, resulting in a reliable and efficient admin panel and management web app.",
		],
	},
	{
		title: "Intern Front-end Developer",
		company_name: "Ultraverse",
		icon: web,
		iconBg: "#383E56",
		date: "Sep 2022 to Feb 2023",
		points: [
			"Led an admin panel project, redesign and coded the UI led to 15% better in downtime.",
			"Oversaw concept mock-up and wireframe design to further user satisfaction by 35%.",
			"Updated the code base to better suit the new requirements, improved performance by 15%.",
			"Collaborated with VP of sales that led to an average 10% growth per month in leads.",
		],
	},
	{
		title: "Web Developer",
		company_name: "SB Agency",
		icon: web,
		iconBg: "#E6DEDD",
		date: "April 2021 to May 2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Web Designer",
		company_name: "Freelancing",
		icon: web,
		iconBg: "#383E56",
		date: "May 2020 to Jan 2021",
		points: [
			"Created mockups of website designs using design software such as Sketch, Adobe XD, or Figma to present to clients for approval before moving to the wireframing stage.",
			"Produced wireframes using design software or hand-drawn sketches to map out the structure of the website, including the placement of content, images, and navigation elements.",
			"Designed and developed websites using WebFlow, HTML5 & CSS3, and JavaScript, and occasionally used WordPress for clients who needed a content management system. This included implementing responsive design, optimizing website speed and performance, and ensuring cross-browser compatibility.",
		],
	},
	// {
	// 	title: "Full stack Developer",
	// 	company_name: "Meta",
	// 	icon: meta,
	// 	iconBg: "#E6DEDD",
	// 	date: "Jan 2023 - Present",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers.",
	// 	],
	// },
]

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Tin proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Tin does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Tin optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
]

const projects = [
	{
		name: "DevJobs",
		progress: "done",
		description:
			"Implemented the newest React Native and other tools to build a full mobile app for browsing jobs related to the tech industry",
		tags: [
			{
				name: "react native",
				color: "blue-text-gradient",
			},
			{
				name: "mobile",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "axios",
				color: "red-text-gradient",
			},
			{
				name: "apis",
				color: "blue-text-gradient",
			},
		],
		image: devjobs,
		source_code_link: "https://github.com/jaytintran/devjobs",
		demo_link: "https://github.com/",
	},
	{
		name: "Adminis",
		process: "done",
		description:
			"Web-based admin dahsboard that allows business owners to manage their expenses, revenues, projects, clients and employees. It provides a convenient and efficient solution for management needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "MERN",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "refine",
				color: "text-red-700",
			},
			{
				name: "crud",
				color: "blue-text-gradient",
			},
		],
		image: adminis,
		source_code_link: "https://github.com/jaytintran/adminis",
		demo_link: "https://github.com/",
	},
	{
		name: "ClickCart",
		progress: "ongoing",
		description:
			"Full stack e-com web application that enables business owners to establish their online presence for their brands. Also it provides a customizable platform to sell and market products efficiently.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "nextjs",
				color: "green-text-gradient",
			},
			{
				name: "ssr",
				color: "pink-text-gradient",
			},
			{
				name: "sanity",
				color: "text-red-700",
			},
			{
				name: "stripe",
				color: "blue-text-gradient",
			},
			{
				name: "context",
				color: "text-green-300",
			},
		],
		image: clickcart,
		source_code_link: "https://github.com/jaytintran/clickcart",
		demo_link: "https://github.com/",
	},
	{
		name: "Airbnb Clone",
		progress: "ongoing",
		description:
			"A comprehensive travel booking platform that allows users to book stays, hotels, and rentals, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "reactjs",
				color: "text-red-700",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/jaytintran/airbnb-clone",
		demo_link: "https://github.com/",
	},
	{
		name: "Mache NFT",
		progress: "ongoing",
		description:
			"A full stack Marketplace developed and built with modern tech stacks like ReactJS, Hardhat, Ethereum...",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "reactjs",
				color: "text-red-700",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: cryptoket,
		source_code_link: "https://github.com/jaytintran/airbnb-clone",
		demo_link: "https://github.com/",
	},
	{
		name: "Liberteous",
		progress: "ongoing",
		description:
			"A full stack web3 crowdfunding web app with an secure crowdfunding experience. Metamask and smart contract integration, effortlessly interact with the Ethereum blockchain",
		tags: [
			{
				name: "ethereum",
				color: "blue-text-gradient",
			},
			{
				name: "reactjs",
				color: "text-red-700",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "blockchain",
				color: "pink-text-gradient",
			},
			{
				name: "solidity",
				color: "pink-text-gradient",
			},
		],
		image: cryptoket,
		source_code_link: "https://github.com/jaytintran/airbnb-clone",
		demo_link: "https://github.com/",
	},
]

export {
	services,
	learnings,
	technologies,
	experiences,
	testimonials,
	projects,
}
