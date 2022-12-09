import React from 'react'

function Info() {
  return (
    <div className='w-8/12 bg-neutral-900 mx-auto mt-14 max-w-md'>
        <img src="./src/assets/photo.jpg" className='rounded-t-xl'/>
        <h1 className='text-center text-sky-300 font-bold text-3xl pt-4'>Eze Onyebuchi</h1>
        <p className='text-center text-yellow-600'>Frontend Developer</p>
        <p className='text-center text-xs text-white pt-1 mb-5'><a href="#">eze4acme.website</a></p>
        <div className='flex justify-center gap-5 pb-10 overflow-auto'>
          <div className='bg-white px-7 py-1 rounded flex items-center'>
            <i class="ri-mail-fill mr-1"></i>
            <button>Email</button>
          </div>
          <div className='bg-blue-500 px-7 py-1 rounded flex items-center'>
            <i class="ri-linkedin-box-fill mr-1"></i>
            <button>Linkedin</button>
          </div>
        </div>
    </div>
  )
}

export default Info