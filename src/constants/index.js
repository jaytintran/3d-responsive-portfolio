// ==================== ICONS
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
	nikewebsite,
	threejs,
	devjobs,
	adminis,
	clickcart,
	shield,
	locker,
	minecraft,
	computer,
} from "../assets"

// ==================== NAVIGATION
export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "skills",
		title: "Skills",
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

// ==================== SERVICES
const services = [
	{
		title: "Front-end Developer",
		icon: web,
	},
	{
		title: "ReactJS + NextJS",
		icon: mobile,
	},
	{
		title: "Full Stack",
		icon: backend,
	},
	{
		title: "UI/UX",
		icon: creator,
	},
]

// ==================== TECH GOALS
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

// ==================== SKILLS
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

// ==================== EXPERIENCES
const experiences = [
	{
		title: "Full Stack Developer",
		company_name: "Meowcart",
		icon: web,
		iconBg: "#383E56",
		date: "Jun 2023 to Current",
		points: [
			"Participated in building the front-end of a direct notification app for store owners enabling their customers to get live notifications from their order.",
			"Built a full stack project for a car dealership client developing their full-stack cars showcasing website.",
			"Developed and maintained headless e-commercial storefronts using Shopify Hydrogen, React.js, Remix and its complementary technologies.",
			"Worked with clients and back end developers to create a user friendly and visually appealing experience for the user.",
		],
	},
	{
		title: "Front-end Developer",
		company_name: "NTSoft",
		icon: web,
		iconBg: "#383E56",
		date: "April 2023 to Jun 2023",
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
		date: "Jul 2022 to Dec 2022",
		points: [
			"Led an admin panel project, redesign and coded the UI led to 15% better in downtime.",
			"Oversaw concept mock-up and wireframe design to further user satisfaction by 35%.",
			"Updated the code base to better suit the new requirements, improved performance by 15%.",
			"Collaborated with VP of sales that led to an average 10% growth per month in leads.",
		],
	},
	// {
	// 	title: "WordPress Desginer",
	// 	company_name: "SB Agency",
	// 	icon: web,
	// 	iconBg: "#E6DEDD",
	// 	date: "April 2021 to May 2022",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers.",
	// 	],
	// },
	// {
	// 	title: "Web Designer",
	// 	company_name: "Freelancing",
	// 	icon: web,
	// 	iconBg: "#383E56",
	// 	date: "May 2020 to Jan 2021",
	// 	points: [
	// 		"Created mockups of website designs using design software such as Sketch, Adobe XD, or Figma to present to clients for approval before moving to the wireframing stage.",
	// 		"Produced wireframes using design software or hand-drawn sketches to map out the structure of the website, including the placement of content, images, and navigation elements.",
	// 		"Designed and developed websites using WebFlow, HTML5 & CSS3, and JavaScript, and occasionally used WordPress for clients who needed a content management system. This included implementing responsive design, optimizing website speed and performance, and ensuring cross-browser compatibility.",
	// 	],
	// },
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
	// ================== FULL STACK WEB APP PROJECTS
	{
		name: "Threads Clone",
		progress: "progress",
		description:
			"A full stack social media app that allows users to post, comment, like, and share their thoughts and ideas. Made with MERN Next.js 13 Threads App | React, Next JS, TypeScript, MongoDB.",
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
				name: "nextjs",
				color: "text-red-700",
			},
		],
		image: devjobs,
		source_code_link: "https://github.com/jaytintran/devjobs",
		demo_link: "https://github.com/",
		category: "fullstack",
	},
	// {
	// 	name: "Adminis",
	// 	process: "progress",
	// 	description:
	// 		"Web-based admin dashboard that allows business owners to manage their expenses, revenues, projects, clients and employees. It provides a convenient and efficient solution for management needs.",
	// 	tags: [
	// 		{
	// 			name: "react",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "MERN",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "mongodb",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "pink-text-gradient",
	// 		},
	// 		{
	// 			name: "refine",
	// 			color: "text-red-700",
	// 		},
	// 		{
	// 			name: "crud",
	// 			color: "blue-text-gradient",
	// 		},
	// 	],
	// 	image: adminis,
	// 	source_code_link: "https://github.com/jaytintran/adminis",
	// 	demo_link: "https://github.com/",
	// 	category: "fullstack",
	// },
	// {
	// 	name: "ClickCart",
	// 	progress: "progress",
	// 	description:
	// 		"Full stack e-com web application that enables business owners to establish their online presence for their brands. Also it provides a customizable platform to sell and market products efficiently.",
	// 	tags: [
	// 		{
	// 			name: "reactjs",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "nextjs",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "ssr",
	// 			color: "pink-text-gradient",
	// 		},
	// 		{
	// 			name: "sanity",
	// 			color: "text-red-700",
	// 		},
	// 		{
	// 			name: "stripe",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "context",
	// 			color: "text-green-300",
	// 		},
	// 	],
	// 	image: clickcart,
	// 	source_code_link: "https://github.com/jaytintran/clickcart",
	// 	demo_link: "https://github.com/",
	// 	category: "fullstack",
	// },
	// {
	// 	name: "Airbnb Clone",
	// 	progress: "progress",
	// 	description:
	// 		"A comprehensive travel booking platform that allows users to book stays, hotels, and rentals, and offers curated recommendations for popular destinations.",
	// 	tags: [
	// 		{
	// 			name: "nextjs",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "reactjs",
	// 			color: "text-red-700",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "css",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: tripguide,
	// 	source_code_link: "https://github.com/jaytintran/airbnb-clone",
	// 	demo_link: "https://github.com/",
	// 	category: "fullstack",
	// },

	// ================== UX UI WEB DESIGN PROJECTS
	{
		name: "Elecar",
		process: "done",
		description:
			"Responsive mobile-first design for a car dealership agency. Used HTML/CSS, JS and BEM CSS.",
		tags: [
			{
				name: "ux/ui",
				color: "blue-text-gradient",
			},
		],
		category: "design",
		source_code_link: "https://github.com/jaytintran/elec-car",
		demo_link: "https://jaytintran.github.io/elec-car/",
		image: "https://jaytintran.github.io/assets/elec-car.png",
	},
	{
		name: "Rolexie",
		process: "done",
		description:
			"A website design for a luxirious watches dealer. Beautiful demonstration of their watches and contact information.",
		tags: [
			{
				name: "ux/ui",
				color: "blue-text-gradient",
			},
		],
		category: "design",
		source_code_link: "https://github.com/jaytintran/rolexie",
		demo_link: "https://jaytintran.github.io/rolexie/",
		image: "https://jaytintran.github.io/assets/rolexie.png",
	},
	{
		name: "Yummey",
		process: "done",
		description:
			"Full page design for a restaurant specialized in salad and natural food. Showcasing their cooks and information.",
		tags: [
			{
				name: "ux/ui",
				color: "blue-text-gradient",
			},
		],
		category: "design",
		source_code_link: "https://github.com/jaytintran/yummey",
		demo_link: "https://jaytintran.github.io/yummey/",
		image: "https://jaytintran.github.io/assets/yummey.png",
	},

	// ================== FRONT-END PROJECTS
	{
		name: "Saigon Nike Store",
		process: "done",
		description:
			"Offers customers an easy way to browse and purchase the latest sportswear online. Developed using React, it features a sleek, modern UI with Tailwind CSS for styling.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
			{
				name: "vite",
				color: "blue-text-gradient",
			},
		],
		category: "frontend",
		source_code_link: "https://github.com/jaytintran/utube-react-app",
		demo_link: "https://utube-v1.netlify.app/",
		image: nikewebsite,
	},
	{
		name: "UTube",
		process: "done",
		description:
			"Modern YouTube Clone Application in React JS with Material UI 5 | RapidAPI.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "rapidapi",
				color: "orange-text-gradient",
			},
			{
				name: "material-ui",
				color: "green-text-gradient",
			},
		],
		category: "frontend",
		source_code_link: "https://github.com/jaytintran/utube-react-app",
		demo_link: "https://utube-v1.netlify.app/",
		image:
			"https://user-images.githubusercontent.com/29084790/195362823-eb9d671e-4f16-49c9-9ed6-d15882183c41.png",
	},
	{
		name: "Movie Box",
		process: "done",
		description:
			"A movie catalogue web app based on Netflix inspiration. Developed mainly using ReactJS",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "rapidapi",
				color: "green",
			},
			{
				name: "material-ui",
				color: "green-text-gradient",
			},
			{
				name: "redux",
				color: "blue-text-gradient",
			},
		],
		category: "frontend",
		source_code_link: "https://github.com/jaytintran/movie-box",
		demo_link: "https://emoviebox.netlify.app/",
		image: "https://jaytintran.github.io/assets/movie-box.png",
	},
	{
		name: "Maganime",
		process: "done",
		description:
			"Front-end web app ranking animes. Developed mainly using JavaScript, a capstone project for the course FES",
		tags: [
			{
				name: "javascript",
				color: "orange-text-gradient",
			},
			{
				name: "rapidapi",
				color: "green",
			},
			{
				name: "material-ui",
				color: "green-text-gradient",
			},
			{
				name: "redux",
				color: "blue-text-gradient",
			},
		],
		category: "frontend",
		source_code_link: "https://github.com/jaytintran/maganime",
		demo_link: "https://jaytintran.github.io/maganime/",
		image: "https://jaytintran.github.io/assets/maganime.png",
	},
	// {
	// 	name: "DevJobs",
	// 	progress: "done",
	// 	description:
	// 		"Implemented the newest React Native and other tools to build a full mobile app for browsing jobs related to the tech industry",
	// 	tags: [
	// 		{
	// 			name: "react native",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "mobile",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "pink-text-gradient",
	// 		},
	// 		{
	// 			name: "axios",
	// 			color: "red-text-gradient",
	// 		},
	// 		{
	// 			name: "apis",
	// 			color: "blue-text-gradient",
	// 		},
	// 	],
	// 	image: devjobs,
	// 	source_code_link: "https://github.com/jaytintran/devjobs",
	// 	demo_link: "https://github.com/",
	// 	category: "mobile",
	// }
	// },
	// {
	// 	name: "Liberteous",
	// 	progress: "ongoing",
	// 	description:
	// 	"A full stack web3 crowdfunding web app with an secure crowdfunding experience. Metamask and smart contract integration, effortlessly interact with the Ethereum blockchain",
	// 	tags: [
	// 		{
	// 			name: "ethereum",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "reactjs",
	// 			color: "text-red-700",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "blockchain",
	// 			color: "pink-text-gradient",
	// 		},
	// 		{
	// 			name: "solidity",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: cryptoket,
	// 	source_code_link: "https://github.com/jaytintran/airbnb-clone",
	// 	demo_link: "https://github.com/",
	// 	category: "web3",
	// },
	// {
	// 	name: "Mache NFT",
	// 	progress: "ongoing",
	// 	description:
	// 		"A full stack Marketplace developed and built with modern tech stacks like ReactJS, Hardhat, Ethereum...",
	// 	tags: [
	// 		{
	// 			name: "nextjs",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "reactjs",
	// 			color: "text-red-700",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "css",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: cryptoket,
	// 	source_code_link: "https://github.com/jaytintran/airbnb-clone",
	// 	demo_link: "https://github.com/",
	// },
]

export {
	services,
	learnings,
	technologies,
	experiences,
	testimonials,
	projects,
}
