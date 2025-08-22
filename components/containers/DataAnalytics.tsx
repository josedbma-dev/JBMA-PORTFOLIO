import Image from 'next/image'
import React from 'react'

export const DataAnalytics = () => {
  return (
    <div className="w-full h-[300px] bg-gray-100 relative overflow-hidden">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            <div className="w-full h-[300px] relative overflow-hidden group">
                <Image
                    src={ 'https://res.cloudinary.com/dukr0q0th/image/upload/v1744074172/Frame_1__2_-removebg-preview_gfttoz.png' }
                    alt="Title"
                    layout="fill"
                    className={`${ false? "opacity-50" : "group-hover:opacity-50" }`}
                />
            </div>

            <div className="w-[350px] h-[220px] relative overflow-hidden group">
                <Image
                    src={ 'https://res.cloudinary.com/dukr0q0th/image/upload/v1744074172/Frame_1__2_-removebg-preview_gfttoz.png' }
                    alt="Title"
                    layout="fill"
                    className={`${ false? "opacity-50" : "group-hover:opacity-50" }`}
                />
            </div>

        </div>

    </div>
  )
}
