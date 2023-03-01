import Head from "next/head";
import Link from "next/link";

const Hero = () => {

    return (
        <>
            <Head>
                <title>Flowfolio</title>
                <meta name="description" content="FitQuest" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/flowfolio-logo.png" />
            </Head>
            <div>
                <section className="mb-32 text-gray-800 text-center">
                    <div className="px-6  md:px-12">
                        <div className="container mx-auto xl:px-32">
                            <div className="grid lg:grid-cols-2  items-center">
                                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                                    <div
                                        className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                                    >
                                        <div className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">
                                            <div className="text-white py-6">
                                                Flowfolio
                                            </div>
                                        </div>

                                        <div className="">
                                            <div className="text-blue-300 text-4xl font-bold font-mono">Your Personal</div>
                                            <div className="text-white text-4xl py-2 font-bold font-mono">NFT Tracker App.</div>
                                        </div>
                                        <div className="py-6 hover:scale-95 ease-in duration-500">

                                            <button className=" bg-neutral-900 border  hover:bg-slate-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                                <img src="/apple.png" className="w-8 pr-2" />
                                                <span>Download on iOS</span>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                <div className="md:mb-12 lg:mb-0">
                                    <img
                                        src="/android-landing.png"
                                        className="max-w-sm rounded-lg shadow-lg h-auto max-w-lg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
};

export default Hero;
