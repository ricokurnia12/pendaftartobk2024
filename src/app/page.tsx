
'use client'
import Head from 'next/head';
import Image from 'next/image'
import Select from 'react-select';
import {useState} from 'react'
import CekNoreg from '@/components/CekNoreg';
const Home = () => {
const [cekNoreg,setCekNoreg] = useState(true)

  interface SelectOption {
    label: string;
    // ......
  }
  
  const dataSelect: SelectOption[] = [
    {
      label: "Pilih Kota",
    },
    {
      label: "Pilih Outlet",
    },
  ];
  
  const data: any[] = [];
  const handleDaftar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCekNoreg(false);
  };

  return (
    <div>
      <Head>
        <title>Product Selection</title>

       
      </Head>
<div className='bg-[#EC323F] h-screen px-8 py-12'>
  <div className='grid grid-cols-12 h-full gap-20 '>
    <div className='col-span-4 flex items-center'>
      <Image
      width={200}
      height={200}
className='w-full hidden lg:block'
alt='ganesha operation'
      src={'https://ganeshaoperation.com/bimbeltest/static/media/filter.aa69a155a5e6b75f5c50aaf93d3b03c8.svg'}
      />
    </div>
    <div className='col-span-full lg:col-span-8 flex flex-col h-full justify-center'>
      <h1 className='text-4xl text-white font-semibold'>
        PENDAFTARAN<br/>
      TOBK Nasional Sukses SNBT 2024
      </h1>

<form className='text-white mt-8'>
  
{
  cekNoreg ? <CekNoreg/> : dataSelect.map((data, idx) => (
    <div key={idx} className="mb-3">
      <label htmlFor="pilihkota" className="font-semibold">
        {data.label}
      </label>
      <Select
        placeholder={data.label}
      />
    </div>
  ))
}


      
<button onClick={(e)=>handleDaftar(e)} className="w-full bg-yellow-500 hover:bg-yellow-600 text-orange-900 font-bold py-2 px-4 rounded mt-4">

Daftar TOBK
</button>

</form>
    </div>

  </div>

</div>
    
    </div>
  );
};

export default Home;
