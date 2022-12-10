import { FC } from 'react'
import ConnectWallet from './ConnectWallet'
import Link from 'next/link'
import { DisabledContextProvider } from 'antd/es/config-provider/DisabledContext'
import Image from 'next/image'
import logo from '/Users/williamphan/Desktop/developer/kaleidor/images/logo.png'

const Header: FC = () => {
	return (
		<header className="">
			<ul className="flex flex-row absolute top-8 left-14 space-x-28 font-Mont text-2xl font-medium">
				<li>
					<a href={'/'}>
						<Image src={logo} alt="Picture" width={55} height={30} />
					</a>
				</li>
				<li>
					<Link href="/">
						<a className="font-Roboto max-w-7xl ">KALEIDOR</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a className="font-Roboto max-w-7xl ">KALEIDOR</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a className="font-Roboto max-w-7xl ">KALEIDOR</a>
					</Link>
				</li>
			</ul>
			<div className="absolute top-6 right-6 ">
				<ConnectWallet />
			</div>
		</header>
	)
}

export default Header
