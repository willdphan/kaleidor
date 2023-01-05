import { FC, useState, useEffect, ChangeEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import particle from 'images/particle.png'
import {
	useSendTransaction,
	usePrepareSendTransaction,
	useContractWrite,
	usePrepareContractWrite,
	useAccount,
	useContractRead,
	useWaitForTransaction,
	useBlockNumber,
} from 'wagmi'
import { ethers, utils } from 'ethers'
import LineChart from 'src/components/Charts/LineChart.js'
import React from 'react'
import abi from 'src/abi/particle.json'

const Discover = () => {
	const [string, setString] = React.useState<any>('')
	const [image, setImage] = React.useState<any>('')

	const { address, isConnecting, isDisconnected } = useAccount()

	const [totalSold, setTotalSold] = React.useState<any>('')
	const [timeSinceStart, setTimeSinceStart] = React.useState<any>('')
	const [VRGDA, setVRGDA] = React.useState<any>('')
	const [startTime, setStartTime] = React.useState<any>('')

	/////////////////////////
	////// START TIME ///////
	/////////////////////////

	const { data: getStartTimestamp } = useContractRead({
		address: '0x4e5E8D702b4c617AF24b366e6c81d15aAB4c010A',
		abi: abi,
		functionName: 'startTime',

		onSuccess(getStartTimestamp) {
			setStartTime(getStartTimestamp)
			console.log('Start Timestamp', getStartTimestamp.toString())
		},
	})

	///////////////////////////////
	////// TIME SINCE START ///////
	///////////////////////////////

	// Calculate the time that has passed since the startTimestamp
	const { ethers } = require('ethers')

	// Get the timestamp of the latest block
	const { data: currentTimestamp } = useBlockNumber()

	const getTimeSinceStart = React.useMemo(() => {
		if (currentTimestamp !== undefined) {
			const timesince = currentTimestamp - startTime
			setTimeSinceStart(timesince)
			console.log('Time Since Start', timesince)
		}
	}, [currentTimestamp, startTime])

	/////////////////////////
	////// TOTAL SOLD ///////
	/////////////////////////

	const { data: getTotalSold } = useContractRead({
		address: '0x4e5E8D702b4c617AF24b366e6c81d15aAB4c010A',
		abi: abi,
		functionName: 'totalSold',
		onSuccess(getTotalSold) {
			setTotalSold(getTotalSold)
			console.log('Total NFTs Minted', getTotalSold.toString())
		},
	})

	/////////////////////////
	////// VRGDA PRICE //////
	/////////////////////////

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { data: getVRGDA } = useContractRead({
		address: '0x4e5E8D702b4c617AF24b366e6c81d15aAB4c010A',
		abi: abi,
		functionName: 'getVRGDAPrice',
		args: [timeSinceStart, totalSold],

		onSuccess(getVRGDA) {
			const etherAmount = utils.formatEther(getVRGDA.toString())
			setVRGDA(etherAmount)
			console.log('VRGDA Price', etherAmount.toString())
		},
	})

	//////////////////////
	////// NFT IMAGE /////
	//////////////////////

	const getImage = useContractRead({
		address: '0x4e5E8D702b4c617AF24b366e6c81d15aAB4c010A',
		abi: abi,
		functionName: 'getImage',
		args: [string],

		onSuccess(data) {
			setImage(data)
			console.log('Image SVG', data)
		},
	})

	//////////////////////
	////// MINT NFT //////
	//////////////////////

	const {
		config,
		error: prepareError,
		isError: isPrepareError,
	} = usePrepareContractWrite({
		address: '0x4e5E8D702b4c617AF24b366e6c81d15aAB4c010A',
		abi: [
			{
				inputs: [{ internalType: 'string', name: '_signal', type: 'string' }],
				name: 'mint',
				outputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
				stateMutability: 'payable',
				type: 'function',
			},
		],
		functionName: 'mint',
		args: [string],

		enabled: Boolean(string),
	})
	const { data, error, isError, write } = useContractWrite(config)

	const { isLoading, isSuccess } = useWaitForTransaction({
		hash: data?.hash,
	})

	// useEffect(() => {
	// 	if (getStartTime) {
	// 		console.error(startTime)
	// 	}
	// 	if (timeSinceStart) {
	// 		console.error(timeSinceStart)
	// 	}
	// 	if (getTotalSold) {
	// 		console.error(totalSold)
	// 	}
	// 	if (getVRGDAPrice) {
	// 		console.error(VRGDA)
	// 	}
	// 	if (getTotalSold) {
	// 		console.error(totalSold)
	// 	}
	// }, [VRGDA, getStartTime, getTotalSold, getVRGDAPrice, startTime, timeSinceStart, totalSold])

	return (
		<>
			<section className="bg-black min-h-screen overflow-hidden flex flex-col pt-24 sm:flex-row sm:pt-32 items-center justify-center content-center sm:space-x-10 ">
				<div className="absolute w-full top-3">
					<Header />
				</div>
				{/* DISCOVER HERE */}
				{/* w-10/12 sm:w-5/12 md:w-4/12 lg:w-5/12 xl:w-4/12 */}
				<div className="flex flex-col items-center justify-center mb-28 w-10/12 sm:w-5/12 md:w-4/12 lg:w-5/12 xl:w-4/12  ">
					{image ? <Image src={image} alt="getImage" height={380} width={400} /> : <></>}
					<h1 className="text-2xl py-3 font-Mont font-bold text-center">RENDER YOUR PARTICLE</h1>

					<textarea
						onChange={e => setString(e.target.value)}
						className=" pb-24 w-10/12 text-white bg-black mt-4 border-2 placeholder:italic text-wrap mb-5 rounded-xl font-Mont"
						// value={collection}
						placeholder="   ENTER SIGNAL..."
					></textarea>

					<button
						onClick={() => write?.()}
						className=" border-2 rounded-xl font-Mont font-bold py-3 w-10/12"
						// disabled={!write || isLoading}
					>
						{isLoading ? 'MINTING...' : 'MINT ≈ 1.23 ETH'}
					</button>
					{isSuccess && (
						<div
							className="flex flex-col content-center text-center mt-2 space-y-0 font-Mont
						"
						>
							<div className="mt-2">Successfully minted your NFT!</div>
							<div>
								{/* CHANGE LINK TO MAINNET LATER */}
								<a
									className="decoration underline"
									href={`https://goerli.etherscan.io/tx/${data?.hash}`}
								>
									View on Etherscan!
								</a>
							</div>
						</div>
					)}
					{(isPrepareError || isError) && <div>{(prepareError || error)?.message}</div>}
				</div>
				<div className="w-10/12 sm:w-5/12 md:w-4/12 lg:w-5/12 xl:w-4/12 xl:mt-[-5.5rem]  ">
					<LineChart />
				</div>
			</section>
		</>
	)
}

export default Discover
