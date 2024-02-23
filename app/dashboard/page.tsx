import Image from 'next/image'


export default function Dashboard() {
  return (
    <div className=" bg-slate-100 h-full p-20 bg-center">
      <div className="bg-white p-16 rounded-3xl">
        <div className='flex flex-row justify-between pb-3'>
          <div>
          <h1 className="text-3xl pb-3">Autoverleih Dashboard</h1>
          </div>
          <div className='bg-slate-800 text-white p-3 rounded-xl'>
            <h2 className='text-xl'> Logindata: </h2><br/> <hr className='bg-white'/>
            <div className='p-2'>
            lfenkart <br/>
            lukasfenkart1011@gmail.com
            </div>
          </div>
        </div>
          <hr />
      </div>

      <div className='bg-slate-200'>

      </div>
    </div>
  )
}
