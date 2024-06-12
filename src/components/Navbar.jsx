import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { HiXMark } from 'react-icons/hi2'
import { LuMenu } from 'react-icons/lu'

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [iconOpacity, setIconOpacity] = useState(1)

	const toggleMenu = () => {
		setIconOpacity(0)
		setTimeout(() => {
			setIsMenuOpen(!isMenuOpen)
			setIconOpacity(1)
		}, 100)
	}
	return (
		<>
			<section className="navbar bg-black h-[5.50rem] flex items-center justify-center ">
				<div className="navbar-container flex w-11/12 lg:w-10/12">
					<div className="navbar-left h-14 flex justify-start items-center w-full">
						<div className="navbar-left-logo xs:w-32 lg:w-36 lg:mr-2">
							<span className="text-white text-2xl font-semibold w-full flex">
								<svg
									className="abstract-logo logo"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 230 51"
									preserveAspectRatio="xMinYMid slice"
								>
									<g className="abstract-logo-mark" fill="#fff">
										<path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
										<circle cx="21.24" cy="29.58" r="4.96"></circle>
									</g>
								</svg>
								Abstract
							</span>
						</div>
						<div className="navbar-left-text ml-2 border-l-2 px-2 lg:px-3">
							<span className=" text-white text-2xl w-full flex">
								Help Center
							</span>
						</div>
					</div>
					<div className="navbar-right flex justify-end items-center">
						<div className="navbar-right-search text-white text-2xl">
							<FaSearch />
						</div>
						<div
							className="navbar-right-menu text-white text-3xl pl-2"
							style={{
								transition: 'opacity 100ms ease-in-out',
								opacity: iconOpacity
							}}
						>
							{isMenuOpen ? (
								<HiXMark className="cursor-pointer" onClick={toggleMenu} />
							) : (
								<LuMenu className="cursor-pointer" onClick={toggleMenu} />
							)}
						</div>
					</div>
				</div>
				{isMenuOpen && (
					<div className="bg-zinc-900 h-52 flex flex-col justify-center items-center absolute left-0 top-[5.5rem] z-10 w-full">
						<span className="text-2xl text-zinc-100 h-16 grid place-items-center border-b cursor-pointer">
							Submit a request
						</span>
						<span className="text-2xl text-zinc-100 h-16 grid place-items-center cursor-pointer">
							Sign in
						</span>
					</div>
				)}
			</section>
		</>
	)
}

export default NavBar
