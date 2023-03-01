
const TimeLine = () => {


    return (
        <>
            <div className="p-48">
                <div className="text-5xl text-white font-extrabold">Timeline</div>
                <div class="container  mx-auto w-full h-full">
                    <div class="relative wrap overflow-hidden p-10 h-full">
                        <div class="border-2-2 absolute border-opacity-20 border-white h-full border left-1/2"></div>

                        <div class="mb-8 flex justify-between items-center w-full right-timeline">
                            <div class="order-1 w-5/12"></div>
                            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
                            </div>
                            <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 class="mb-3 font-bold text-gray-800 text-xl">Prototype Development:</h3>
                                <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Our team started by developing a prototype version of Flowfolio for the LaLiga Golazos ecosystem, using Flow SDKs and other tools to ensure that the app was fully integrated with the Flow blockchain.</p>
                            </div>
                        </div>

                        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div class="order-1 w-5/12"></div>
                            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
                            </div>
                            <div class="order-1 bg-gray-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 class="mb-3 font-bold text-white text-xl">User Testing:</h3>
                                <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100"> Once we had a functional prototype, we conducted user testing with a small group of beta testers to gather feedback and refine the apps design and user interface.</p>
                            </div>
                        </div>

                        <div class="mb-8 flex justify-between items-center w-full right-timeline">
                            <div class="order-1 w-5/12"></div>
                            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
                            </div>
                            <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 class="mb-3 font-bold text-gray-800 text-xl">App Store Launch: </h3>
                                <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">After making final adjustments based on user feedback, we submitted Flowfolio to the app store for approval and launched it to the public. Users can now download the app and start tracking their LaLiga Golazos NFT portfolios with ease.</p>
                            </div>
                        </div>

                        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div class="order-1 w-5/12"></div>
                            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
                            </div>
                            <div class="order-1 bg-gray-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 class="mb-3 font-bold text-white text-xl">Integration with Other Marketplaces: </h3>
                                <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">In addition to providing a comprehensive NFT portfolio tracking solution for the LaLiga Golazos ecosystem, we plan to expand Flowfolio to support other marketplaces as well. Our team is already working on integrating with other Flow-based NFT projects and marketplaces, so stay tuned for updates!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimeLine;
