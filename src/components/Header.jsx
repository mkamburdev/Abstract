import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi";


function Header() {
	return (
		<>
			<section className="bg-customPurple h-[22rem] flex flex-col justify-center items-center sm:h-[23rem] lg:h-[25rem]">
				<div className="w-11/12 h-40 flex flex-col justify-between items-center sm:h-48 lg:mb-6">
					<h1 className="text-[2.5em] tracking-tighter sm:text-[4em] lg:text-[5.1em]">
						How can we help?
					</h1>
					<div className="relative w-full lgs:w-[45rem] hover:text-blue-600">
						<input
							className="appearance-none border-black text-[1.2em] font-medium hover:border-blue-600 transition-colors rounded-md w-full py-[1.2rem] px-3 border text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
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
