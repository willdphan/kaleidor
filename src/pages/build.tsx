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
} from 'wagmi'
import { ethers } from 'ethers'
import React from 'react'
import SubmitProposal from '@/components/SubmitProposal'

const build = () => {
	return (
		<>
			<div>
				<Header />
			</div>
			<div>
				<SubmitProposal />
			</div>
		</>
	)
}

export default build
