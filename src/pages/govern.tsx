import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import particle from 'images/particle.png'
import CurrentECard from '@/components/Solution_Cards/CurrentECard'

const govern = () => {
	return (
		<>
			<section className=" bg-black min-h-screen overflow-hidden flex flex-col items-center justify-center  md:flex-row text-center">
				<div className="absolute w-full top-3">
					<Header />
				</div>
				<section className=" flex flex-col items-center justify-center pt-32 sm:pt-0 content-center  w-10/12 sm:w-10/12 md:w-5/12 lg:w-5/12 xl:w-4/12 md:mr-5">
					<h1 className="text-2xl mb-5 font-Mont font-semibold">CURRENT EVENT PROPOSALS</h1>
					<div className="w-full border-2 flex flex-col items-center justify-center rounded-xl py-4 font-Mont mb-10 sm:mb-10 md:mb-0 space-y-4 ">
						<CurrentECard />
						<CurrentECard />
						<CurrentECard />
						<CurrentECard />
						<CurrentECard />
					</div>
				</section>
				<section className=" flex flex-col items-center justify-center pt-0  sm:pt-0 content-center  w-10/12 sm:w-10/12 md:w-5/12 lg:w-5/12 xl:w-4/12 md:ml-5">
					<h1 className="text-2xl mb-5 font-Mont font-semibold">NEXT EVENT IDEAS</h1>
					<div className="w-full border-2 flex flex-col items-center justify-center rounded-xl py-4 font-Mont mb-10 sm:mb-10 md:mb-0 space-y-4">
						<CurrentECard />
						<CurrentECard />
						<CurrentECard />
						<CurrentECard />
						<CurrentECard />
					</div>
				</section>
			</section>
		</>
	)
}

export default govern
