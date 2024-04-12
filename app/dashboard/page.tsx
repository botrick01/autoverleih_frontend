"use client"
import Inputfield from "@/components/inputfield";
import Cars from "@/services/car.service";
import UserService from "@/services/user.service";
import Image from "next/image";
import { useQuery } from "react-query";

export default function Dashboard() {
  const {
    data: cars
  } = useQuery({
    queryKey: "cars",
    queryFn: Cars.getCars,
  });

  const {
    data: user
  } = useQuery({
    queryKey: "user",
    queryFn: UserService.currentUser,
  });

  return (
    <div className=" bg-slate-100 h-screen py-20 px-40 bg-center">
      <div className="bg-white p-16 rounded-3xl">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-3xl pb-3">CRD - Car Rent Dashboard</h1> <hr />
          </div>
          <div className="bg-slate-400 text-white p-3 rounded-xl">
            <h2 className="text-xl"> Logindata: </h2>
            <br /> <hr className="bg-white" />
            <div className="p-2">
              {user?.userName} <br />
              {user?.email}
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
                <div className="p-1 px-4 rounded-l-xl bg-white">
                  Start Date:{" "}
                </div>
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
          {cars
            ? cars.map((carName, index) => {
                return (
                  <div className="p-5 flex flex-col" key={index}>
                    <div>
                    Modell:{carName.model}
                      </div>
                      <div>
                    Brand:{carName.carBrand}
                      </div>
                      <div>
                    Trunkspace: {carName.trunkSpace}
                      </div>
                      <div>
                    Seats: {carName.seats}
                      </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
