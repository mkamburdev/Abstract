import React from 'react'
import services from '../services'

function Main() {
	return (
		<div className="py-24 grid m-auto lg:grid-cols-2 mt-20 justify-center items-center xl:px-2 xlg:w-[78rem] xxl:w-[90rem]">
			{services.map(service => (
				<div className="" key={service.id}>
					<div className="flex h-72 ">
						<img
							className="w-16 h-16 mx-4 mt-2 xlg:w-20 xlg:h-20 xxl:w-24 xxl:h-24"
							src={service.img}
							alt={service.title}
						/>
						<div>
							<h3 className="text-2xl font-bold mb-4 text-[#191a1b]">{service.title}</h3>
							<p className=" max-w-xs text-2xl break-words mb-6 md:max-w-xl">
								{service.body}
							</p>
							<a className="text-[#4C5FD5] text-[1.2em] font-medium" href="#">
								Learn More →
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Main
