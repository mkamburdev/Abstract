import React from 'react'
import services from '../services'

function Main() {
	return (
		<div className="p-1 lg:grid lg:grid-cols-2 lg:mt-40 md:w-[82%] md:m-auto">
			{services.map(service => (
				<div
					key={service.id}
					className="w-[95%] m-auto flex flex-row my-24 lg:my-2"
				>
					<div className="w-[18%] max-w-24 mt-1 lg:w-[20%] mr-8">
						<img src={service.img} alt={service.title} />
					</div>
					<div className="w-9/12 flex flex-col lg:mb-12 xlg:mb-16 xxl:mb-24">
						<h2 className="text-2xl font-bold text-zinc-900">
							{service.title}
						</h2>
						<p className="text-2xl py-3">{service.body}</p>
						<a href="#" className="text-[1.2em] font-medium text-purple">
							Learn More →
						</a>
					</div>
				</div>
			))}
		</div>
	)
}

export default Main
