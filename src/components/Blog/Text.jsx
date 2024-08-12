import React from 'react'

const Text = () => {
  return (
    <div>
        <div className='w-full'>
            <div className='mb-4 flex gap-6'>
              <h1>By Alex Manie</h1>
              <h2>January 22, 2022</h2>
              <p>35</p>
            </div>

            <div className='mb-4'>
              <p className='text-2xl font-bold md:text-4xl mb-7'>Colour ideas for kitchen and dining spaces</p>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum.</p>
              <button className='mt-2 border  p-4 '>Explore Now</button>
            </div>
          </div>
    </div>
  )
}

export default Text