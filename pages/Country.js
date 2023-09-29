import React from 'react'
import Image from 'next/image'

function Country() {
  return (
    <section class="pt-10 pb-8 overflow-hidden bg-gray-100 sm:pt-16 lg:pt-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Connect with all apps</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
           
        </div>
    </div>

    <Image class="w-full min-w-full mx-auto mt-12 scale-150 max-w-7xl lg:min-w-0 lg:mt-0 lg:scale-100" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693384462/template%20img/services-icons_f9gph0.png" alt="" width={1920} height={1920} />
</section>

  )
}

export default Country