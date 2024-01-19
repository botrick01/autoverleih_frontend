import Image from 'next/image'

export default function Home() {
  return (
    <div className=" bg-slate-500 h-full">
       <div className="bg-slate-300 w-1/2 text-4xl p-4 rounded-br-lg">
          Autoverleihhh Herbert 
       </div>
       <div className="p-4">
       Hier koennen sie bequem Autos mieten und sind immer up to date 
       </div>
        <div className='p-2'>
        <hr/>
        </div>
       <div className='p-4'>
        Auto
       </div>
       <div className='flex flex-row'>
          <div className="bg-slate-100 w-1/5 p-2 rounded-bl-xl rounded-br-md">
              Autos 
          </div>
          <div className="bg-slate-200 w-1/5 p-2 rounded-b-md">
              777-200er 
          </div>
          <div className="bg-slate-300 w-1/5 p-2 rounded-b-md">
              777-200lr
          </div>
          <div className="bg-slate-400 w-1/5 p-2 rounded-b-md">
              777F
          </div>
          <div className="bg-slate-500 w-1/5 p-2 rounded-b-md">
              777-300
          </div>
          <div className="bg-slate-600 w-1/5 p-2 rounded-b-md">
              777-300er 
          </div>
          <div className="bg-slate-700 w-1/5 p-2 rounded-br-xl rounded-bl-md">
              777X-8 & 777X-9
          </div>
       </div>


    </div>
  )
}
