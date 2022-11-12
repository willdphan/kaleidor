import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import Splitz from 'public/images/Splitz.png'
import Image from 'next/image'
// import Header from '@/components/Header'
import Link from 'next/link'

const Home: FC = () => {
	return (
		<div>
			<div className="flex flex-col justify-center text-center items-center pb-28 min-h-screen bg-black pt-24 ">
				{/* <Image className="mt-[-10rem] " src={Splitz} alt="Picture of NFT" width={650} height={650} /> */}
				<h1 className="bg-black text-[#42805F] text-8xl tracking-[.3em] mb-10 pl-5">
					<a className="text-[#08F294]">S</a>PLITZ <br />S<a className="text-[#08F294]">P</a>LITZ <br />
					SP<a className="text-[#08F294]">L</a>ITZ <br />
					SPL<a className="text-[#08F294]">I</a>TZ <br />
					SPLI<a className="text-[#08F294]">T</a>Z <br />
					SPLIT<a className="text-[#08F294]">Z</a> <br />
				</h1>
				<div className="flex items-center justify-center">
					<Link href="/splitz">
						<button className="bg-black text-[#08F294] border-2 border-[#08F294] px-5  py-2 font-Roboto font-normal">
							ENTER APP
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
