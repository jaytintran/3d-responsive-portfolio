import React from "react"
import { github, url } from "../assets"

function Footer() {
	return (
		<div className="flex justify-between items-center max-w-7xl mx-auto ">
			<div>
				<p className="text-bold text-[14px]">Made by Tin Tran</p>
			</div>

			<div className="flex flex-row gap-3">
				<div
					onClick={() => window.open("https://github.com/jaytintran", "_blank")}
					className="w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
				>
					<img
						src={github}
						alt="github"
						className="w-1/2 h-1/2 object-contain"
					/>
				</div>
				<div
					onClick={() => window.open("https://aceit.hashnode.dev/", "_blank")}
					className="w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
				>
					<img
						src={url}
						alt="url"
						className="invert w-1/2 h-1/2 object-contain"
					/>
				</div>
			</div>
		</div>
	)
}

export default Footer
