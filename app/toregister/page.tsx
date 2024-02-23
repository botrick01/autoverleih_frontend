import Image from 'next/image'

export default function ToRegister() {
    return (
      <div className=" bg-slate-100 h-full p-10 bg-center">
         <div className='bg-white p-10 rounded-xl'>
            <h1 className=''>
            Registrieren
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
         </div>
  
      </div>
    )
  }