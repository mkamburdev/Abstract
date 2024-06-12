import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi";


function Header() {
	return (
		<>
			<section className="bg-purple h-[22rem] flex flex-col justify-center items-center">
				<div className="w-11/12 h-36 flex flex-col justify-between items-center">
					<span className="text-[2.5em] tracking-tighter">
						How can we help?
					</span>
					<div className="relative w-full">
						<input
							className="appearance-none border-2 border-gray-300 text-[1.4em] hover:border-gray-400 transition-colors rounded-md w-full py-[1.1rem] px-3 border border-black text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
							id="username"
							type="text"
							placeholder="Search"
						/>
						<div className="absolute right-0 inset-y-0 flex items-center">
							<HiOutlineArrowRight  className='text-2xl mr-4' />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Header
