import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flowfolio</title>
        <meta name="description" content="FitQuest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <div>
        <section className="mb-32 text-gray-800 text-center">
          <div className="px-6 py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="grid lg:grid-cols-2 flex items-center">
                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                  <div
                    className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                  >
                  <div className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">
                  <div className="block text-transparent bg-clip-text bg-gradient-to-l from-[#544646] to-[#ffffff] pb-4">
                    Flowfolio
                  </div>
                  </div>

                  <div>
                    <div className="text-blue-200 text-4xl font-bold font-mono">Your Personal</div>
                    <div className="text-white text-4xl  font-bold font-mono">NFT Tracker App.</div>
                  </div>
                    <h2 className="py-4 text-zinc-400 font-thin text-2xl mb-12">
                    Track your NFT portfolio on the go. <br/>
                    Supports FLow NFTs.
                    </h2>
                    <a href="" className="relative px-6 py-3 font-bold text-white group">
                      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-stone-800 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full border-4 border-slate-400"></span>
                      <span className="relative">
                      
                      Download on iOS</span>
                    </a>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <img
                    src="/android-landing.png"
                    className="max-w-sm rounded-lg shadow-lg"
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
}


  //  {/* <main className="px-4 pt-5 md:px-0 mx-auto max-w-[1080px] h-[calc(100vh-143px)]">
  //       <div className="md:text-left flex justify-center flex-row">
  //         <div className="flex flex-col justify-center">
  //           <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">

  //             <span className="block text-transparent bg-clip-text bg-gradient-to-l from-[#000000] to-[#ffffff] pb-4">
  //               Flowfolio
  //             </span>

  //           </h1>
  //           <p className="mt-3 text-base text-[#E3FED8] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
  //             Your Personal NFT Tracker App.
  //             Track your NFT portfolio on the go.
  //           </p>
  //           <div className="mt-5 sm:mt-8 sm:flex lg:justify-start md:flex-col lg:flex-row">
  //             <div>
  //               <Link
  //                 href="/plans"
  //                 className="w-full md:w-[70%] lg:w-full flex items-center justify-center px-8 py-3 border-0 border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-[#08EA70] to-[#35B226] hover:shadow-lg hover:shadow-white/20 transition hover:-translate-y-0.5 hover:delay-100 md:py-2 md:text-lg md:px-8"
  //               >
  //                 Explore
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="items-end">
  //           <Image src="/android-landing.png" width="600" height="500" alt="Banner" />
  //         </div>
  //       </div>
   

  //     </main> */}