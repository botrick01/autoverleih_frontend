import Image from "next/image";

export default function Dashboard() {
  return (
    <div className=" bg-slate-100 h-full p-20 bg-center">
      <div className="bg-white p-16 rounded-3xl">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-3xl pb-3">Autoverleih Dashboard</h1> <hr />
          </div>
          <div className="bg-slate-500 text-white p-3 rounded-xl">
            <h2 className="text-xl"> Logindata: </h2>
            <br /> <hr className="bg-white" />
            <div className="p-2">
              lfenkart <br />
              lukasfenkart1011@gmail.com
            </div>
          </div>
        </div>

        <div className="p-3">
          <hr />
        </div>

        <div className="bg-slate-200 rounded-t-xl">
          <div className="p-2">
            <button className="p-2 bg-slate-300 rounded-lg hover:bg-slate-400">
              search for free cars
            </button>
          </div>
        </div>
        
        <div className="bg-slate-300 rounded-b-xl">
          <div className="p-5">
            Auto
            <div>
              <hr />
            </div>
          </div>
          
          <div className="p-5">
            Auto
            <div>
              <hr />
            </div>
          </div>

          <div className="p-5">
            Auto
            <div>
              <hr />
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
