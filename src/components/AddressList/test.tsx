return (
    <div className="">
        <div className=" flex mt-24 mb-5">
            <input
                type="text"
                placeholder=" Recipient Address"
                name="task"
                value={address}
                className=" border-2 mr-5 h-9 w-8/12 bg-black placeholder:text-[#42805F] border-[#42805F] text-[#42805F] "
                onChange={handleChange}
            />
            <button
                className="bg-black text-[#08F294] border-2 border-[#08F294] w-4/12 py-1 font-Roboto font-normal mb-5 "
                onClick={addAddress}
            >
                ADD
            </button>
        </div>
        <form
            onSubmit={e => {
                e.preventDefault()
                createSplit?.()
            }}
        >
            <div className="App">
                <div className="header">
                    <div className="inputContainer">
                        <input
                            type="text"
                            placeholder=" Owner Address"
                            name="owner"
                            value={owner}
                            className="border-2 mr-5 h-9 w-full mb-5 bg-black text-[#42805F] placeholder:text-[#42805F] border-[#42805F]"
                            onChange={handleOwnerChange}
                        />
                    </div>
                    <div className="inputContainer">
                        <br />
                        <button
                            disabled={!createSplit || isLoading}
                            className="bg-black text-[#08F294] border-2 border-[#08F294] w-full  py-1 font-Roboto font-normal mb-5 "
                        >
                            {isLoading ? '...CREATING SPLIT' : 'CREATE SPLIT'}
                        </button>
                    </div>
                </div>
                <p className="font-Roboto font-normal pb-3 text-[#08F294]">SPLITZ RECIPIENTS</p>
                <div className="addressList">
                    {addressList.map((task: IAddress, key: number) => {
                        return <Address key={key} task={task} deleteAddress={deleteAddress} />
                    })}
                </div>
                {isSuccess && (
                    <div>
                        Successfully minted your NFT!
                        <div>
                            <a href={`https://etherscan.io/tx/${newSplit?.hash}`}>Etherscan</a>
                        </div>
                    </div>
                )}
            </div>
        </form>
    </div>
)
}