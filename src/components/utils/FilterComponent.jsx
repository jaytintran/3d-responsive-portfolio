import React, { useState } from "react"

const filterButton = (isActive) => `
  md:py-3 md:px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl sm:py-1 sm:px-5
  ${isActive ? "bg-blue-400" : ""}
`

function FilterComponent({ activeFilter, onFilterClick }) {
	// Define your filter data as an array of objects
	const filterTag = [
		{ label: "All", filterValue: "all" },
		{ label: "UX/UI", filterValue: "design" },
		{ label: "Front End", filterValue: "frontend" },
		{ label: "Full Stack", filterValue: "fullstack" },
		{ label: "Web 3", filterValue: "web3" },
		// Add more filter options here
	]

	return (
		<div className="work__filter flex flex-row justify-center gap-1 mt-10">
			{filterTag.map((filterItem) => (
				<button
					key={filterItem.filterValue}
					className={filterButton(activeFilter === filterItem.filterValue)}
					onClick={() => onFilterClick(filterItem.filterValue)}
				>
					{filterItem.label}
				</button>
			))}
		</div>
	)
}

export default FilterComponent
