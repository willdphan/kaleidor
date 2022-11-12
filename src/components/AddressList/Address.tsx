import React from 'react'
import { IAddress } from '@/components/AddressList/Interfaces/interfaces.js'

interface Props {
	task: IAddress
	deleteAddress(AddressToDelete: string): void
}

const Address = ({ task, deleteAddress }: Props) => {
	return (
		<div className="task">
			<div className="flex text-[#08F294] space-x-4 mb-3">
				<span>{task.addressName}</span>

				<button
					onClick={() => {
						deleteAddress(task.addressName)
					}}
				>
					X
				</button>
			</div>
		</div>
	)
}

export default Address
