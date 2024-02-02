'use client'
import React from "react";
import { dataForm ,dataSekolah,dataAlamat} from "@/data/DataForm";
import Select from 'react-select'
const Form = () => {
  return( <React.Fragment>
    <div className="flex flex-col items-center gap-4 mb-16">
            {/* <img className="h-auto w-48" src={LogoGo} /> */}
            <h1 className=" text-center font-semibold text-2xl xl:text-3xl">
              Pendaftaran TOBK
            </h1>
            <form   className="grid grid-cols-12 gap-4 w-full px-12">
            {dataForm.map((data, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col gap-4 col-span-12 md:col-span-6"
                >
                  <label  className="-mb-3">
                    {data.title}
                    <sup className="text-red-500">*</sup>
                  </label>
                  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      {data.icon}
    </div>
    <input
      type={data.type}
      id="default-search"
      className={`${data.icon ? "ps-12" :"ps-8"} block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 `}
      placeholder="Search Mockups, Logos..."
  
    />
 
  </div>
               
                </div>
              );
            })}
            <hr/>
            <p className="font-semibold col-span-full">Data Sekolah</p>
            {dataSekolah.map((data,i)=>{
              return(
                  <div
                  key={i}
                  className="flex flex-col gap-4 col-span-12 md:col-span-6"
                >
               <label  className="-mb-3">
                    {data.label}
                    <sup className="text-red-500">*</sup>
                  </label>
              <Select
               placeholder={`Pilih ${data.label}`}
              />
            </div>
              )
            })}
             <hr/>
            <p className="font-semibold col-span-full">Data Diri</p>
            {dataAlamat.map((data,i)=>{
              return(
                  <div
                  key={i}
                  className="flex flex-col gap-4 col-span-12 md:col-span-6"
                >
               <label  className="-mb-3">
                    {data.label}
                    <sup className="text-red-500">*</sup>
                  </label>
              <Select
               placeholder={`Pilih ${data.label}`}
              />
            </div>
              )
            })}
              <div
       
                  className="flex flex-col gap-4 col-span-12 "
                >
               <label  className="-mb-3">
                    Alamat
                    <sup className="text-red-500">*</sup>
                  </label>
                  <input
      type="text"
      id="default-search"
      className={` h-24  ps-12 block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 `}
      placeholder="Search Mockups, Logos..."
  
    />
            </div>
            </form>
          </div> 
   </React.Fragment>)
};

export default Form
