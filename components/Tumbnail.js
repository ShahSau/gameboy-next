import { LightBulbIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { forwardRef } from "react"
import Link from "next/link";
const Tumbnail=forwardRef(({result},ref)=> {

  return (
    <div  ref={ref} className="group  p-2 transition duration-200
        ease-in transform sm:hover:scale-105 hover:z-50 hover:shadow-lg">
        <Link href={`details/${result.id}`} passHref >
        <Image 
            layout="responsive"
            src={result.thumbnail}
            height={1080}
            width={1920}
            className="cursor-pointer"
        />
        </Link>
        <div className="p-2">
            <p className="truncate max-w-md">{result.short_description}</p>
            <h2 className="mt-1 text-2xl text-white transition-all
                duration-100 ease-in-out group-hover: font-bold
            ">
                {result.title}
            </h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">
                {result.media_type && `${result.media_type} • `}{" "}
                {result.release_date} • {" "}
                <LightBulbIcon className="h-5 mx-2" /> {result.publisher}
            </p>
        </div>
    </div>
  )
}
)
export default Tumbnail