import React from 'react'
import Image from 'next/image'

function Brand() {
  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="text-center">
            <h2 class="text-xl font-medium text-gray-900">Partners with the best</h2>
        </div>

        <div class="grid items-center grid-cols-2 gap-10 mt-12 md:grid-cols-4 sm:gap-y-16">
            <div>
                <Image class="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695998884/template%20img/logo-11_bhux6r.png" alt="" width={1920} height={1920} />
            </div>

            <div>
                <Image class="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695998940/template%20img/logo-12_ikwpam.png" alt="" width={1920} height={1920} />
            </div>

            <div>
                <Image class="object-contain w-auto h-10 mx-auto" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695998987/template%20img/logo-13_cqfp6w.png" alt="" width={1920} height={1920} />
            </div>

            <div>
                <Image class="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695999049/template%20img/logo-14_iboevx.png" alt="" width={1920} height={1920} />
            </div>
        </div>
    </div>
</section>

  )
}

export default Brand