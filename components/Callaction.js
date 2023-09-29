import React from 'react'
import Image from 'next/image'

function Callaction() {
  return (
    <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
            <div>
                <Image class="object-cover w-16 h-16 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/9/female-avatar-1.png" alt="" width={1920} height={1920} />
                <blockquote>
                    <p class="mt-6 text-xl leading-relaxed text-black">Modern Urban Living: Stylish Condo in the Heart of the Arts District</p>
                </blockquote>
                <p class="mt-6 text-base font-semibold text-black">Rohit Sharma</p>
                <p class="mt-1 text-base text-gray-600">Project Manager at Unboxxbusiness</p>
            </div>

            <div>
                <div class="overflow-hidden bg-white">
                    <div class="p-8 lg:px-12 lg:py-10">
                        <h3 class="text-2xl font-semibold text-black">Join 5,000 other Agents</h3>
                        <p class="mt-4 text-base text-gray-600">Country Charm: Charming Farmhouse with Wraparound Porch and Acres of Land</p>

                        <a href="#" title="" class="flex items-center justify-center w-full px-4 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border-2 border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
                            Create your first website
                        </a>

                        <a href="tel: 9599695872" title="" class="flex items-center justify-center w-full px-4 py-4 mt-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border-2 border-black rounded-md hover:bg-black focus:bg-black hover:text-white focus:text-white" role="button">
                            Talk to sales
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Callaction