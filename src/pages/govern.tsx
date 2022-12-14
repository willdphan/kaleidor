import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import particle from 'images/particle.png'
import CurrentECard from '@/components/Solution_Cards/CurrentECard'

const govern = () => {
	return (
		<>
			<div>
				<Header />
			</div>
			<section className="bg-black min-h-screen overflow-hidden flex flex-col pt-0 md:flex-row sm:pt-0 items-center justify-center content-center md:space-x-10 ">
				{/* DISCOVER HERE */}

				<section className="flex flex-col items-center justify-center w-10/12 sm:w-10/12 md:w-5/12 lg:w-5/12 xl:w-5/12 border-2 rounded-xl py-4 font-Mont mb-10 sm:mb-10 md:mb-0 space-y-4">
					<CurrentECard />
					<CurrentECard />
					<CurrentECard />
					<CurrentECard />
					<CurrentECard />
				</section>
				<div className="flex flex-col items-center justify-center w-10/12 sm:w-10/12 md:w-5/12 lg:w-5/12 xl:w-5/12 border-2 rounded-xl space-y-4 py-4 font-Mont mb-10 sm:mb-10 md:mb-0">
					<CurrentECard />
					<CurrentECard />
					<CurrentECard />
					<CurrentECard />
					<CurrentECard />
				</div>
			</section>
		</>
	)
}

export default govern
