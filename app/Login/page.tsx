import Image from 'next/image'

export default function Login() {
    return (
      <div className=" bg-slate-100 h-full p-20 bg-center">
         <div className='bg-white p-14 rounded-xl'>
            <h1 className=''>
            Login
            </h1>
            <hr />

            <div className='pt-5'>
                <div>
                Benutzer:
                </div>
                    <input type="text" className='bg-slate-100 rounded-xl'/>
                </div>
            <div>
                <div>
                    Passwort:
                </div>
                <div>
                    <input type="text" className='bg-slate-100 rounded-xl'/>
                </div>
            </div>
            <div>
                <button className=''>
                    Anmelden
                </button>
            </div>
         </div>
  
      </div>
    )
  }