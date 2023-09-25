import { data } from "@/constants/data";
import Image from "next/image";

function Bod() {
  return (
    <>
        <h1 className="flex justify-center py-8 text-2xl font-sans font-bold" id="Coordinators">Coordinators</h1>
        <div className='grid lg:pl-40 pl-[98px]  gap-9 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
            {data.map((item) => (
                <div className="w-[240px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className='flex flex-col items-center'>
                        <Image src={item.image} alt={item.name} width={100} height={100} className=' w-24 h-24 object-cover border rounded-full' />
                        <h1 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.name}</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.post}</span>
                    </div>
                </div>
            ))
            }
            
        </div>
    </>
  )
}

export default Bod;