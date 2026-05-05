import React from 'react'

const EmptyState = ({title,imageUrl,description}) => {
  return (
   <>
   <div className='flex flex-col mt-10 justify-center items-center px-4 py-4'>
    <img src={imageUrl} alt={title} className='w-1/3 h-1/3'/>
    <h1 className='text-2xl font-bold text-indigo-500'>{title}</h1>
    <p className='text-lg font-semibold italic text-gray-400'>{description}</p>
   </div>
   </>
  )
}

export default EmptyState