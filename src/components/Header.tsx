import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import headerlogo from 'images/headerlogo.png'
import Image from 'next/image'
import ConnectWallet from './ConnectWallet'
import Link from 'next/link'

const pages = ['DISCOVER', 'GOVERN', 'BUILD', 'LEARN']

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<header aria-label="Site Header" className="bg-opacity-0	">
			<div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
				<a className="block pt-2">
					<span className="sr-only">Home</span>
					<Link href="/">
						<Image width={80} height={80} src={headerlogo} alt="logo" className="cursor-pointer" />
					</Link>
				</a>

				<div className="flex flex-1 items-center justify-end md:justify-between">
					<nav aria-label="Site Nav" className="hidden md:block">
						<ul className="flex items-center gap-20 font-Syne text-xl font-Mont font-semibold">
							<Link href="/discover">
								<li>
									<a className=" transition hover:text-gray-500/75  text-white pl-10 cursor-pointer">
										DISCOVER
									</a>
								</li>
							</Link>
							<Link href="/build">
								<li>
									<a className=" transition hover:text-gray-500/75  text-white pl-10 cursor-pointer">
										BUILD
									</a>
								</li>
							</Link>
							<Link href="/govern">
								<li>
									<a className=" transition hover:text-gray-500/75  text-white pl-10 cursor-pointer">
										GOVERN
									</a>
								</li>
							</Link>
							<Link href="/learn">
								<li>
									<a className=" transition hover:text-gray-500/75  text-white pl-10 cursor-pointer">
										LEARN
									</a>
								</li>
							</Link>
						</ul>
					</nav>

					<div className="flex items-center gap-4">
						<ConnectWallet />
					</div>
				</div>
			</div>
		</header>
	)
}

export default ResponsiveAppBar
