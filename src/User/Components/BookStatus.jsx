import React from 'react'

function BookStatus() {
  return (
    <div className='p-10 my-15 shadow rounded'>
        {/* duplicate book */}
        <div className="p-5 rounded mt-4 bg-blue-100">
            <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                    <h1 className='text-2xl'>Title</h1>
                    <h2 className='text-xl'>Author</h2>
                    <h3 className='text-lg text-blue-700'>$ Discount Price</h3>
                    <p className='text-justify'>Abstract</p>
                    {/* statu image */}
                    <div className="flex my-3">
                        <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-clipart/20230802/original/pngtree-pending-stamp-illustration-symbol-stamp-vector-picture-image_9294534.png" alt="pending" />
                              <img width={'120px'} height={'120px'} src="https://pngimg.com/uploads/approved/approved_PNG54.png" alt="Approved" />
                                    <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-vector/20251121/ourmid/pngtree-red-grunge-stop-stamp-with-bold-text-png-image_18028743.webp" alt="Stop" />
                    </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXnUbLgEnyeEa5sGo5yGas9wr8bF5AV1PCc3W1QC8ns8Pyuh2rHMt6To&s=10" alt="" />
                        <div className="mt-4 flex justify-end">
                            <button className="bg-red-800 text-white p-2 rounded">DELETE</button>
                        </div>
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default BookStatus
