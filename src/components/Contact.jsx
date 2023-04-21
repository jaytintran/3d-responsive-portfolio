import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { BallCanvas, EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

function Input(props) {
	const { label, name, type, value, onChange } = props

	return (
		<label className="flex flex-col">
			<span className="text-white font-medium mb-4">{label}</span>
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={`What's your ${name}?`}
				className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
			/>
		</label>
	)
}
// template_qoa3hdj
// service_5r6n8yk
const Contact = () => {
	const formRef = useRef()
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	})
	const [loading, setLoading] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target
		setForm({ ...form, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		setLoading(true)
		emailjs
			.send(
				"service_5r6n8yk",
				"template_qoa3hdj",
				{
					from_name: form.name,
					to_name: "Tin Tran",
					from_emai: "jaytintran@gmail.com",
					message: form.message,
				},
				"qyuU-UqOSE7i73Hjr"
			)
			.then(
				() => {
					setLoading(false)
					alert("Thank you for leaving a message! I will get back to you asap.")
					setForm({
						name: "",
						email: "",
						message: "",
					})
				},
				(error) => {
					setLoading(false)
					alert("Something went wrong...")
				}
			)
	}

	return (
		<div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
			{/* The Contact Form */}
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				{/* Usage of css modules to style p and h3 */}
				<p className={`${styles.heroSubText}`}>Get in touch</p>
				<h3 className={`${styles.heroHeadText}`}>Contact</h3>

				{/* Form */}
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="flex mt-12 flex-col gap-8"
				>
					<Input
						label="Your Name:"
						name="name"
						type="text"
						value={form.name}
						onChange={handleChange}
					/>
					<Input
						label="Your Email:"
						name="email"
						type="email"
						value={form.email}
						onChange={handleChange}
					/>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message:</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder={`What do you want to say?`}
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<button
						type="submit"
						className="bg-sky-900 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>

			{/* The 3D Earth */}
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-[0.75] xl:h-auto md:h-[500px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	)
}

export default SectionWrapper(Contact, "contact")
