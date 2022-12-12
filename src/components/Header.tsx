// import { FC } from 'react'
// import ConnectWallet from './ConnectWallet'
// import Link from 'next/link'
// import { DisabledContextProvider } from 'antd/es/config-provider/DisabledContext'
// import Image from 'next/image'
// import headerlogo from 'images/headerlogo.png'
// //logo

// const Header: FC = () => {
// 	return (
// 		<header className="z-99 ">
// 			<ul className="flex flex-row absolute top-8 left-14 space-x-28 font-Mont text-2xl font-medium bg-black">
// 				<li className="mt-[-1.5rem]">
// 					<a href={'/'}>
// 						<Image src={headerlogo} alt="Picture" width={80} height={80} />
// 					</a>
// 				</li>
// 				<li>
// 					<Link href="/discover">
// 						<a className="font-Roboto max-w-7xl ">DISCOVER</a>
// 					</Link>
// 				</li>
// 				<li>
// 					<Link href="/govern">
// 						<a className="font-Roboto max-w-7xl ">GOVERN</a>
// 					</Link>
// 				</li>
// 				<li>
// 					<Link href="/build">
// 						<a className="font-Roboto max-w-7xl ">BUILD</a>
// 					</Link>
// 				</li>
// 				<li>
// 					<Link href="/learn">
// 						<a className="font-Roboto max-w-7xl ">LEARN</a>
// 					</Link>
// 				</li>
// 			</ul>
// 			<div className="absolute top-6 right-6 ">
// 				<ConnectWallet />
// 			</div>
// 		</header>
// 	)
// }

// export default Header

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

const pages = ['Products', 'Pricing', 'Blog']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

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
		<AppBar position="static">
			<Container maxWidth="xl" className="bg-black pt-3">
				<Toolbar disableGutters>
					{/* MD WIDTH AND ABOVE */}
					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>

					{/* MD WIDTH AND BELOW */}
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						{/* MENU ICON */}
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						{/* MENU OPEN/CLOSE */}
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{/* MENU ITEMS */}
							{pages.map(page => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						<Image src={headerlogo} alt="Picture" width={90} height={80} />
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map(page => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>

					{/* <Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map(setting => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box> */}
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default ResponsiveAppBar
