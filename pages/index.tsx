import type { NextPage } from "next";
import Head from "next/head";
import SVG from "../svgs/undraw_operating_system_re_iqsc.svg";
import Image from "next/image";
import { MdLocationCity, MdPhone, MdEmail } from "react-icons/md";
import { useState } from "react";

const Home: NextPage = () => {
	const [showModalLogin, setShowModalLogin] = useState(false);

	return (
		<div className="relative w-screen h-screen">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{showModalLogin ? (
				<div
					onClick={(e) => {
						e.stopPropagation();
						setShowModalLogin((p) => !p);
					}}
					className="fixed flex justify-center items-center w-full h-full z-20 bg-gray-500 bg-opacity-50"
				>
					<div className="rounded-lg drop-shadow-sm p-5 bg-white max-w-xl w-full h-fit max-h-[50%]">
						<div className="space-y-6">
							<div className="text-center text-xl font-medium text-neutral-600">
								Login
							</div>
							<div>
								<label className="block text-sm font-medium text-neutral-600">
									{" "}
									Email address{" "}
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										required
										placeholder="Your Email"
										className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
									/>
								</div>
							</div>

							<div className="space-y-1">
								<label className="block text-sm font-medium text-neutral-600">
									{" "}
									Password{" "}
								</label>
								<div className="mt-1">
									<input
										id="password"
										name="password"
										type="password"
										placeholder="Your Password"
										className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
									/>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										placeholder="Your password"
										className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
									/>
									<label className="block ml-2 text-sm text-neutral-600">
										{" "}
										Remember me{" "}
									</label>
								</div>

								<div className="text-sm">
									<a
										href="#"
										className="font-medium text-blue-600 hover:text-blue-500"
									>
										{" "}
										Forgot your password?{" "}
									</a>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
								>
									Sign in
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}

			<header className="relative">
				<div className="custom-shape-divider-top-1670170565">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
							opacity=".25"
							className="shape-fill"
						></path>
						<path
							d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
							opacity=".5"
							className="shape-fill"
						></path>
						<path
							d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
							className="shape-fill"
						></path>
					</svg>
				</div>
				<nav className="relative p-5 container mx-auto max-w-[1000px] flex justify-between items-center">
					<div className="flex">
						<div className="p-2 px-8">Home</div>
					</div>
					<ul className="flex">
						<a href="#about" className="p-2 px-8">
							ABOUT
						</a>
						<a href="#pricing" className="p-2 px-8">
							PRICING
						</a>
						<a href="#contact" className="p-2 px-8">
							CONTACT
						</a>
						<button
							onClick={() => setShowModalLogin(true)}
							className="border border-blue-500 text-blue-500 rounded-md p-2 px-8"
						>
							LOGIN
						</button>
					</ul>
				</nav>
			</header>

			<main className="container mx-auto max-w-[1000px]">
				<div id="about" className="flex flex-col items-center gap-20 py-24">
					<Image src={SVG} alt="svg" height={300} />
					<div>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Praesentium ut magnam doloribus autem unde blanditiis! Perspiciatis
						qui velit saepe recusandae placeat expedita cupiditate id ex
						repellendus sed, nesciunt magni nobis!
					</div>
				</div>
				<div id="pricing" className="py-10">
					<h1 className="text-center font-bold text-3xl">Pricing</h1>
					<section>
						<div className="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl">
							<div>
								<div className="relative p-10 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 rounded-xl">
									<div className="relative flex flex-col p-8 bg-white">
										<div className="flex-1">
											<h3 className="text-xl font-semibold text-neutral-600">
												Basic
											</h3>
											<p className="flex items-baseline mt-4 text-neutral-600">
												<span className="text-5xl font-extrabold tracking-tight">
													$24
												</span>
												<span className="ml-1 text-xl font-semibold">
													/month
												</span>
											</p>
											<ul role="list" className="pt-6 mt-6 space-y-6 border-t">
												<span className="text-lg font-semibold text-neutral-600">
													What's included?
												</span>

												<li className="flex">
													<div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
														<svg
															className="flex-shrink-0 w-4 h-4 mx-auto text-white"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															aria-hidden="true"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M5 13l4 4L19 7"
															></path>
														</svg>
													</div>
													<span className="ml-3 text-neutral-600">
														Catat barang masuk
													</span>
												</li>

												<li className="flex">
													<div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
														<svg
															className="flex-shrink-0 w-4 h-4 mx-auto text-white"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															aria-hidden="true"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M5 13l4 4L19 7"
															></path>
														</svg>
													</div>
													<span className="ml-3 text-neutral-600">
														Catat barang keluar
													</span>
												</li>

												<li className="flex">
													<div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
														<svg
															className="flex-shrink-0 w-4 h-4 mx-auto text-white"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															aria-hidden="true"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M5 13l4 4L19 7"
															></path>
														</svg>
													</div>
													<span className="ml-3 text-neutral-600">
														Catat hasil keuntungan
													</span>
												</li>
											</ul>
										</div>
										<div className="mt-6 rounded-lg">
											<a
												href="#"
												type="highlight"
												className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
											>
												{" "}
												Get Started{" "}
											</a>
										</div>
									</div>
									<div className="relative flex flex-col p-8 bg-blue-600 rounded-2xl">
										<div className="relative flex-1">
											<h3 className="text-xl font-semibold text-white">
												Business
											</h3>

											<p className="flex items-baseline mt-4 text-white">
												<span className="text-5xl font-extrabold tracking-tight">
													$32
												</span>
												<span className="ml-1 text-xl font-semibold">
													/month
												</span>
											</p>

											<ul role="list" className="pt-6 mt-6 space-y-6 border-t">
												<span className="text-lg font-semibold text-white">
													What's included?
												</span>

												<li className="flex">
													<div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
														<svg
															className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															aria-hidden="true"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M5 13l4 4L19 7"
															></path>
														</svg>
													</div>
													<span className="ml-3 text-white">
														Catat barang masuk dan keluar
													</span>
												</li>

												<li className="flex">
													<div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
														<svg
															className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															aria-hidden="true"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M5 13l4 4L19 7"
															></path>
														</svg>
													</div>
													<span className="ml-3 text-white">
														Catat keuntungan
													</span>
												</li>

												<li className="flex">
													<div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
														<svg
															className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															aria-hidden="true"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M5 13l4 4L19 7"
															></path>
														</svg>
													</div>
													<span className="ml-3 text-white">
														Analisa penjualan dengan CHART
													</span>
												</li>

												<li className="flex">
													<div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
														<svg
															className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															aria-hidden="true"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M5 13l4 4L19 7"
															></path>
														</svg>
													</div>
													<span className="ml-3 text-white">
														Support 7x24 Jam
													</span>
												</li>
											</ul>
										</div>
										<div className="z-50 mt-6 rounded-lg">
											<a
												href="/pricing"
												type="highlight"
												className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
											>
												{" "}
												Get started{" "}
											</a>
										</div>
									</div>
									<div className="relative flex flex-col p-8 bg-white">
										<div className="flex-1">
											<h3 className="text-xl font-semibold text-neutral-600">
												Enterpreneur
											</h3>
											<p className="flex items-baseline mt-4 text-neutral-600">
												<span className="text-5xl font-extrabold tracking-tight">
													$48
												</span>
												<span className="ml-1 text-xl font-semibold">
													/month
												</span>
											</p>

											<ul role="list" className="pt-6 mt-6 space-y-6 border-t">
												<span className="text-lg font-semibold text-neutral-600">
													What's included?
												</span>

												<li className="flex">
													<div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
														<svg
															className="flex-shrink-0 w-4 h-4 mx-auto text-white"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															aria-hidden="true"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M5 13l4 4L19 7"
															></path>
														</svg>
													</div>
													<span className="ml-3 text-neutral-600">
														Catat barang masuk dan keluar
													</span>
												</li>

												<li className="flex">
													<div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
														<svg
															className="flex-shrink-0 w-4 h-4 mx-auto text-white"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															aria-hidden="true"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M5 13l4 4L19 7"
															></path>
														</svg>
													</div>
													<span className="ml-3 text-neutral-600">
														Catat keuntungan
													</span>
												</li>

												<li className="flex">
													<div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
														<svg
															className="flex-shrink-0 w-4 h-4 mx-auto text-white"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															aria-hidden="true"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M5 13l4 4L19 7"
															></path>
														</svg>
													</div>
													<span className="ml-3 text-neutral-600">
														Analisa penjualan dengan CHART
													</span>
												</li>

												<li className="flex">
													<div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
														<svg
															className="flex-shrink-0 w-4 h-4 mx-auto text-white"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															aria-hidden="true"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M5 13l4 4L19 7"
															></path>
														</svg>
													</div>
													<span className="ml-3 text-neutral-600">
														Support 7x24 Jam
													</span>
												</li>

												<li className="flex">
													<div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
														<svg
															className="flex-shrink-0 w-4 h-4 mx-auto text-white"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															aria-hidden="true"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M5 13l4 4L19 7"
															></path>
														</svg>
													</div>
													<span className="ml-3 text-neutral-600">
														Export data ke Excel
													</span>
												</li>

												<li className="flex">
													<div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
														<svg
															className="flex-shrink-0 w-4 h-4 mx-auto text-white"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															aria-hidden="true"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M5 13l4 4L19 7"
															></path>
														</svg>
													</div>
													<span className="ml-3 text-neutral-600">
														AI prediksi penghasilan
													</span>
												</li>
											</ul>
										</div>

										<div className="mt-6 rounded-lg">
											<a
												href="#"
												type="highlight"
												className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
											>
												{" "}
												Get Started{" "}
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div id="contact" className="py-10">
					<h1 className="text-center text-bold text-4xl">Contact</h1>
					<div className="text-center my-10">
						KeDa Tech is a software house based in Jakarta, Indonesia. We cater
						any client needs including the development of software, apps, or
						website. Should you have any questions regarding our business, feel
						free to reach us by your preferred contact method. Lorem ipsum dolor
						sit amet consectetur, adipisicing elit. Quasi mollitia aut alias
						autem voluptate nostrum! Odio nostrum eveniet, dolorem officiis
						quaerat consequuntur molestiae asperiores. Laborum officiis quis
						iusto. Minima, suscipit!
					</div>
					<div className="flex flex-col gap-5">
						<div className="flex flex-col items-center">
							<MdLocationCity />
							<div>
								Komplek Green Ville, Jalan Ratu Kemuning Blok BL No. 1,
								RT.8/RW.14 Daerah Khusus Ibukota Jakarta
							</div>
						</div>
						<div className="flex flex-col items-center">
							<MdPhone />
							<div>+(62-81) 398-716-212</div>
						</div>
						<div className="flex flex-col items-center">
							<MdEmail />
							<div>cs@keda-tech.com</div>
						</div>
					</div>
				</div>
			</main>

			<footer className="relative flex h-24 w-full items-center justify-center border-t">
				<a
					className="relative z-10 flex items-center justify-center gap-2"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Not Copyrighted KeDa Tech 2022
				</a>
				<div className="custom-shape-divider-bottom-1670170511">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
							opacity=".25"
							className="shape-fill"
						></path>
						<path
							d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
							opacity=".5"
							className="shape-fill"
						></path>
						<path
							d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
							className="shape-fill"
						></path>
					</svg>
				</div>
			</footer>
		</div>
	);
};

export default Home;
