import { FC, useState } from 'react'
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
	useSigner,
} from 'wagmi'
import { ethers } from 'ethers'
import React from 'react'
import SubmitProposal from '@/components/CurrentEventCard'
import CurrentEvent from '@/components/CurrentEventCard'
import { useEffect, ChangeEvent } from 'react'
import abi from 'src/abi/kaleidor.json'
import { write } from 'fs'

const Build = () => {
	const [title, setTitle] = React.useState<string>('')
	const [description, setDescription] = React.useState<string>('')

	const { address, isConnecting, isDisconnected } = useAccount()

	const { data: proposalData, write: create } = useContractWrite({
		mode: 'recklesslyUnprepared',
		address: '0xd7C7F734CA21C3470D99037AaeB1994073d72452',
		abi: abi,
		functionName: 'create',
		args: [[title, description, address]],
	})

	return (
		<>
			<div className="bg-black min-h-screen overflow-hidden flex flex-col md:flex-row md:space-x-10 md:pt-0 items-center justify-center content-center pt-24 font-Mont space-y-20 pb-24">
				<div className="absolute w-full top-3">
					<Header />
				</div>
				{/* DISCOVER HERE */}
				<CurrentEvent />

				<section className="flex flex-col text-center w-10/12 sm:w-8/12 md:w-5/12 lg:w-5/12 xl:w-4/12 space-y-5 ">
					<h1 className="text-2xl font-bold">SUBMIT SOLUTION</h1>
					<input
						onChange={e => setTitle(e.target.value)}
						type="text"
						placeholder="  TITLE..."
						className="bg-black border-2 rounded-xl py-3 placeholder:italic placeholder:pl-2"
					/>
					<textarea
						onChange={e => setDescription(e.target.value)}
						className="pb-64 text-white bg-black border-2 placeholder:italic placeholder:pt-2 placeholder:pl-2 text-wrap mb-5 rounded-xl font-Mont w-full"
						// value={collection}
						placeholder="   DESCRIPTION..."
					/>
					<button onClick={() => create?.()} className="border-2 rounded-xl py-3 font-bold">
						SUBMIT
					</button>
				</section>
			</div>
		</>
	)
}

export default Build
