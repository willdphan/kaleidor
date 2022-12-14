import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import particle from 'images/particle.png'

const CurrentECard = () => {
	return (
		<div className="w-full px-4">
			<section className="flex flex-row items-center justify-center border-2 rounded-xl space-x-5 px-1  sm:space-x-10 md:space-x-30 py-2 font-Mon sm:mb-10 md:mb-0">
				<Image src={particle} alt="Picture" width={40} height={35} />
				{/* MAKE SURE YOU PUT DOTS INSTEAD OF OVERFLOW */}
				<div className="w-2/8 flex items-center justify-start overflow-hidden  whitespace-nowrap  ">
					THIS IS THE TITLE...
				</div>
				{/* <div className="w-3/10 flex items-center justify-center  overflow-hidden">
						hellogfhrethertertherergr
					</div> */}
				<div className="flex space-x-2 justify-end">
					<div className="w-1/8 flex items-center ">V</div>
					<div className="w-1/8 flex items-center ">#435</div>
				</div>
			</section>
		</div>
	)
}

export default CurrentECard
