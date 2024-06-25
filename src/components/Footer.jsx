import React from 'react'

function Footer() {
	return (
		<footer className="w-full py-8 bg-black">
			<div className="w-11/12 m-auto bg-black text-white grid grid-cols-2 gap-4 xl:grid-cols-5 xl:w-10/12">
				<div className="menus w-1/2 mb-10">
					<h3 className="text-2xl font-bold pb-4">Abstract</h3>
					<ul className="text-[1.03em] font-medium">
						<li className="hover:underline">
							<a href="#">Start Trial</a>
						</li>
						<li className="hover:underline">
							<a href="#">Pricing</a>
						</li>
						<li className="hover:underline">
							<a href="#">Download</a>
						</li>
					</ul>
				</div>
				<div className="menus w-1/2 mb-10">
					<h3 className="text-2xl font-bold pb-4">Resources</h3>
					<ul className="text-[1.03em] font-medium">
						<li className="hover:underline">
							<a href="#">Blog</a>
						</li>
						<li className="hover:underline">
							<a href="#">Help Center</a>
						</li>
						<li className="hover:underline">
							<a href="#">Release</a>
						</li>
						<li className="hover:underline">
							<a href="#">Notes</a>
						</li>
						<li className="hover:underline">
							<a href="#">Status</a>
						</li>
					</ul>
				</div>
				<div className="menus w-1/2">
					<h3 className="text-2xl font-bold pb-4">Community</h3>
					<ul className="text-[1.03em] font-medium">
						<li className="hover:underline">
							<a href="#">Twitter</a>
						</li>
						<li className="hover:underline">
							<a href="#">LinkedIn</a>
						</li>
						<li className="hover:underline">
							<a href="#">Facebook</a>
						</li>
						<li className="hover:underline">
							<a href="#">Dribble</a>
						</li>
						<li className="hover:underline">
							<a href="#">Podcast</a>
						</li>
					</ul>
				</div>
				<div className="menus w-1/2 xl:col-span-2">
					<h3 className="text-2xl font-bold pb-4">Company</h3>
					<ul className="text-[1.03em] font-medium mb-7">
						<li className="hover:underline">
							<a href="#">About Us</a>
						</li>
						<li className="hover:underline">
							<a href="#">Careers</a>
						</li>
						<li className="hover:underline">
							<a href="#">Legal</a>
						</li>
					</ul>
					<h4 className="font-bold">Contact Us</h4>
					<span>info@abstract.com</span>
				</div>
				<div className="footer-copy text-xl font-medium col-span-2 lg:col-span-1 lg:col-end-3 xl:col-span-5 xl:col-start-5">
					<svg
						className="abstract-logo logo py-5 w-60"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 350 51"
						preserveAspectRatio="xMinYMid slice"
					>
						<g className="abstract-logo-mark" fill="#fff">
							<path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
							<circle cx="21.24" cy="29.58" r="4.96"></circle>
						</g>
					</svg>
					<p>&copy; Copyright 2023</p>
					<p>Abstract Studio Design, Inc.</p>
					<p>All rights reserved</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
