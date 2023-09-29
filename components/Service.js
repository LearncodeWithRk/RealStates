import React from 'react'
import Image from 'next/image'

function Service() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
            <div className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
                <p className="text-xs font-semibold tracking-widest text-white uppercase">Real estate Service</p>
            </div>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Local expertise for luxury homes</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">Redfin Premier agents have years of experience buying and selling high-end homes. Get the highest level of service from our best agents.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
            <div className="transition-all duration-200 bg-white hover:shadow-xl">
                <div className="py-10 px-9">
                <Image classNameName="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693304354/template%20img/pexels-photo-323780_ogztr3.jpg" alt="" width={1920} height={1920} />
                    <h3 className="mt-8 text-lg font-semibold text-black">Buy a home</h3>
                    <p className="mt-4 text-base text-gray-600">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                </div>
            </div>

            <div className="transition-all duration-200 bg-white hover:shadow-xl">
                <div className="py-10 px-9">
                <Image classNameName="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693304354/template%20img/pexels-photo-186077_xndtxw.jpg" alt="" width={1920} height={1920} />
                    <h3 className="mt-8 text-lg font-semibold text-black">Buy a home</h3>
                    <p className="mt-4 text-base text-gray-600">A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise expenses.</p>
                </div>
            </div>

            <div className="transition-all duration-200 bg-white hover:shadow-xl">
                <div className="py-10 px-9">
                <Image classNameName="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693304354/template%20img/pexels-photo-1396122_ht7qcv.jpg" alt="" width={1920} height={1920} />
                    <h3 className="mt-8 text-lg font-semibold text-black">Rent a home</h3>
                    <p className="mt-4 text-base text-gray-600">We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Service