import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
				<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
					<a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
						<img
							src="./images/logo.png"
							className="w-20 h-20 text-white p-2 rounded-full"
						/>
						<span className="ml-3 text-xl">SuperHeroValley</span>
					</a>
					{/* <p className="mt-2 text-sm text-gray-500">
						Air plant banjo lyft occupy retro adaptogen indego
					</p> */}
				</div>
				<div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
							SOCIAL
						</h2>
						<nav className="list-none mb-10">
							<li>
								<Link href="https://www.linkedin.com/company/superhero-valley/">
									<a className="text-gray-600 hover:text-blue-500">Linkedin</a>
								</Link>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
							LINK UTILI
						</h2>
						<nav className="list-none mb-10">
							<li>
								<Link href="/coc">
									<a className="text-gray-600 hover:text-blue-500">
										Codice di Condotta
									</a>
								</Link>
							</li>
							{/* <li>
								<a className="text-gray-600 hover:text-blue-500">
									Privacy Policy
								</a>
							</li> */}
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
							GRUPPI
						</h2>
						<nav className="list-none mb-10">
							<li>
								<Link href="https://discord.gg/uPRmhHwMem">
									<a className="text-gray-600 hover:text-blue-500">Discord</a>
								</Link>
							</li>

							<li>
								<Link href="https://t.me/+zIcgNjPpYpIzNmU0">
									<a className="text-gray-600 hover:text-blue-500">Telegram</a>
								</Link>
							</li>
						</nav>
					</div>
				</div>
			</div>
			<div className="bg-gray-100">
				<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
					<p className="text-gray-500 text-sm text-center sm:text-left hover:text-blue-500">
						© 2022 Superhero Valley —
						<a
							href="https://twitter.com/lucacorbucci"
							rel="noopener noreferrer"
							className="text-gray-600 ml-1"
							target="_blank"
						>
							@lucacorbucci
						</a>
					</p>
					<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
						<a className="ml-3 text-gray-500">
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
							</svg>
						</a>

						<a className="ml-3 text-gray-500">
							<svg
								fill="currentColor"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="0"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path
									stroke="none"
									d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
								></path>
								<circle cx="4" cy="4" r="2" stroke="none"></circle>
							</svg>
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
};
