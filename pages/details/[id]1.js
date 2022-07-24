import Image from 'next/image'
import pic4 from "../../image/1296674.svg"
import pic1 from "../../image/2027245.svg"
import pic2 from "../../image/146687.svg"
import pic3 from "../../image/1784571.svg"
function Details() {
  return (
    <div className='container px-5 py-24 mx-auto'>
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
            {/*Image */}
            <div className='lg:w-1/2 w-full pt-6'>
                
            <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <Image
              src={pic1}
              alt={pic1}
              className="w-full h-full object-center object-cover bg-gray-100 rounded-lg"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <Image
                src={pic2}
                alt={pic2}
                className="w-full h-full object-center object-cover bg-gray-100 rounded-lg"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <Image
                src={pic3}
                alt={pic3}
                className="w-full h-full object-center object-cover bg-gray-100 rounded-lg"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <Image
              src={pic4}
              alt={pic4}
              className="w-full h-full object-center object-cover bg-gray-100 rounded-lg"
            />
          </div>
        </div>





            </div>
            {/*word */}
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <h1>word</h1>
            </div>
        </div>
        <div>
            <h1>jdhdhdh</h1>
        </div>
        
        
        
        
    </div>
  )
}

export default Details