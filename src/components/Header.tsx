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
		<AppBar position="static" className="bg-black ">
			<Container maxWidth="xl" className="bg-black pt-3">
				<Toolbar disableGutters>
					{/* MD WIDTH AND ABOVE */}
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
						<Link href={'/'}>
							<Image src={headerlogo} alt="Picture" width={90} height={80} />
						</Link>
					</Typography>

					{/* MD WIDTH AND BELOW */}
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						{/* MENU ICON */}
						<IconButton
							className="scale-150 "
							// size="large"
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
							<Link href={'/discover'}>
								<MenuItem className=" bg-black text-white font-Mont hover:bg-white hover:text-black text-lg font-medium">
									DISCOVER
								</MenuItem>
							</Link>
							<Link href={'/govern'}>
								<MenuItem className=" bg-black text-white font-Mont hover:bg-white hover:text-black text-lg font-medium">
									GOVERN
								</MenuItem>
							</Link>
							<Link href={'/build'}>
								<MenuItem
									href={'/build'}
									className=" bg-black text-white font-Mont hover:bg-white hover:text-black text-lg font-medium"
								>
									BUILD
								</MenuItem>
							</Link>
							<Link href={'/learn'}>
								<MenuItem className=" bg-black text-white font-Mont hover:bg-white hover:text-black text-lg font-medium">
									LEARN
								</MenuItem>
							</Link>
							{/* {pages.map(page => (
								<MenuItem
									key={page}
									onClick={handleCloseNavMenu}
									className=" bg-black text-white font-Mont hover:bg-white hover:text-black text-2xl font-medium"
								>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))} */}
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
						<Link href={'/'}>
							<Image src={headerlogo} alt="Picture" width={100} height={100} />
						</Link>
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Link href={'/discover'}>
							<MenuItem className=" bg-black text-white font-Mont hover:bg-white hover:text-black text-lg font-medium">
								DISCOVER
							</MenuItem>
						</Link>
						<Link href={'/govern'}>
							<MenuItem className=" bg-black text-white font-Mont hover:bg-white hover:text-black text-lg font-medium">
								GOVERN
							</MenuItem>
						</Link>
						<Link href={'/build'}>
							<MenuItem
								href={'/build'}
								className=" bg-black text-white font-Mont hover:bg-white hover:text-black text-lg font-medium"
							>
								BUILD
							</MenuItem>
						</Link>
						<Link href={'/learn'}>
							<MenuItem className=" bg-black text-white font-Mont hover:bg-white hover:text-black text-lg font-medium">
								LEARN
							</MenuItem>
						</Link>
					</Box>
					<div className="">
						<ConnectWallet />
					</div>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default ResponsiveAppBar
