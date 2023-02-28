const MainBody = () => {


    return (
        <>


            <div>
                <section className="mb-32 text-gray-800 text-center">
                    <div className="px-6 py-12 md:px-12">
                        <div className="container mx-auto xl:px-32">
                            <div className="grid lg:grid-cols-2 flex items-center">

                                <div className="md:mb-12 lg:mb-0">
                                    <img
                                        src="/android-landing.png"
                                        className="max-w-sm rounded-lg shadow-lg"
                                        alt=""
                                    />
                                </div>
                                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                                    <div
                                        className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                                    >
                                        <div className="text-4xl">
                                            <div className=" text-white">
                                            Track your NFTs from your phone.
                                            </div>
                                        </div>

                                        <h2 className="py-4 text-zinc-400 font-thin text-2xl mb-12 text-justify">
                                        NFTfolio is an all-in-one mobile NFT tracker and discovery app. Users can view real-time updates on any projects stats, listings and sales activity. Alongside tracking Ethereum & Solana NFTs, you can seamlessly track your NFT portfolio, get price alert notifications, view daily NFT news, and chat with the NFT community.


                                        </h2>
                                        <a href="" className="relative px-6 py-3 font-bold text-white group">
                                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-stone-800 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                            <span className="absolute inset-0 w-full h-full border-4 border-slate-400"></span>
                                            <span className="relative">

                                                Download on iOS</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
};

export default MainBody;
