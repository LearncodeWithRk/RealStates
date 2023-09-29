import React from 'react'
import Image from 'next/image'
function Eventgallary() {
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">

<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-xl mx-auto text-center">
            
            <h2 class="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Local expertise for luxury homes</h2>
            <p class="mt-4 text-base leading-relaxed text-gray-600">Redfin Premier agents have years of experience buying and selling high-end homes. Get the highest level of service from our best agents.</p>
        </div>


	<div className="container grid grid-cols-2 gap-4 p-8 mx-auto md:grid-cols-4">
		<Image src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693383341/template%20Image/evangeline-shaw-nwLTVwb7DbU-unsplash_icyyzr.jpg" alt="" width={1920} height={1920} className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<Image alt="" width={1920} height={1920} className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693383340/template%20Image/edwin-andrade-4V1dC_eoCwg-unsplash_n1fs9t.jpg" />
		<Image alt="" width={1920} height={1920} className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693383340/template%20Image/product-school-V8KOZEUTx9E-unsplash_v5gjqc.jpg" />
		<Image alt="" width={1920} height={1920} className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693383340/template%20Image/sincerely-media-dGxOgeXAXm8-unsplash_v8trym.jpg" />
		<Image alt="" width={1920} height={1920} className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693383747/template%20Image/pexels-binyamin-mellish-1396132_mojthv.jpg" />
		<Image alt="" width={1920} height={1920} className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693383747/template%20Image/pexels-pixabay-208736_vz3jxg.jpg" />
		<Image alt="" width={1920} height={1920} className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693383747/template%20Image/pexels-pixabay-259751_lxguqd.jpg" />
		<Image alt="" width={1920} height={1920} className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693383746/template%20Image/pexels-sebastian-s%C3%B8rensen-731082_ai1el7.jpg" />
		<Image alt="" width={1920} height={1920} className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693383747/template%20Image/pexels-expect-best-323775_sckai2.jpg" />
		<Image src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693383654/template%20Image/house_rmasj3.png" alt="" width={1920} height={1920} className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
	</div>
</section>
  )
}

export default Eventgallary