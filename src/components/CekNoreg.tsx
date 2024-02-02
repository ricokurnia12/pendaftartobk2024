import React from 'react'

const CekNoreg = () => {
  return (
    <React.Fragment>


    <p className='font-semibold mb-4 '>Apakah Kamu Punya Nomor Registrasi Siswa GO ?</p>
<div className="flex gap-4 items-center text-white mb-4">
<div className="flex items-center ">
    <input
      id="default-radio-1"
      type="radio"
      defaultValue=""
      name="default-radio"
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
    />
    <label
      htmlFor="default-radio-1"
      className="ms-2 text-sm font-medium "
    >
     Punya
    </label>
  </div>
  <div className="flex items-center">
    <input

      id="default-radio-2"
      type="radio"
      defaultValue=""
      name="default-radio"
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
    />
    <label
      htmlFor="default-radio-2"
      className="ms-2 text-sm font-medium t "
    >
      Tidak
    </label>
  </div>
</div>

  <label
    htmlFor="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only "
  >
    Search
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
      placeholder="Search Mockups, Logos..."
  
    />
    <button
      type="submit"
      className="text-white absolute end-2.5 bottom-2.5 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 "
    >
     Cek Noreg
    </button>
  </div>


</React.Fragment>

  )
}

export default CekNoreg