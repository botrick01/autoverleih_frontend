import Inputfield from "@/components/inputfield";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className=" bg-slate-100 h-full py-20 px-40 bg-center">
      <div className="bg-white p-16 rounded-3xl">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-3xl pb-3">CRD - Car Rent Dashboard</h1> <hr />
          </div>
          <div className="bg-slate-400 text-white p-3 rounded-xl">
            <h2 className="text-xl"> Logindata: </h2>
            <br /> <hr className="bg-white" />
            <div className="p-2">
              lfenkart <br />
              lukasfenkart1011@gmail.com
            </div>
          </div>
        </div>

        <div className="py-3">
          <hr />
        </div>

        <div className="bg-slate-100 rounded-t-xl text-lg">
          <div className="p-5 flex flex-row justify-between">
            <button className="p-2 px-4 bg-slate-200 rounded-lg hover:bg-slate-300">
              search for free cars
            </button>

            <div className="flex flex-row gap-5">
              <div className="flex flex-row p-1">
                <div className="p-1 px-4 rounded-l-xl bg-white">Start Date: </div>
                <div>
                  <input
                    type="date"
                    className="p-1 bg-slate-150 rounded-r-xl hover:bg-slate-200"
                  />
                </div>
              </div>

              <div className="flex flex-row p-1">
                <div className="p-1 px-4 rounded-l-xl bg-white">End Date: </div>
                <div>
                  <input
                    type="date"
                    className="p-1 bg-white rounded-r-xl hover:bg-slate-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-200 rounded-b-xl">
          <div className="p-5">Test Auto 1</div>

          <div className="p-5">Test Auto 2</div>

          <div className="p-5">Test Auto 3</div>
        </div>
      </div>
    </div>
  );
}
