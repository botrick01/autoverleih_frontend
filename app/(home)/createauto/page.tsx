"use client"
import Inputfield from "@/components/inputfield";
import Loginbutton from "@/components/loginbutton";
import UserService from "@/services/user.service";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import Cars from "@/services/car.service";

export default function Carcreate() {
  const router = useRouter();

  const [carbrand, setCarbrand] = useState("");
  const [model, setModel] = useState("");
  const [seats, setSeats] = useState(0);
  const [trunkspace, setTrunkspace] = useState(0);
  const [type, setType] = useState("");
  
  const { mutate } = useMutation({
    mutationKey: "register",
    mutationFn: Cars.createCar,
    onSuccess() {}
  });
  const createcar = () => {
      mutate({carBrand: carbrand, model: model, seats: seats, trunkSpace: trunkspace, type: 2});
  }

  return (
    <div className=" bg-slate-100 h-full py-20 px-60 bg-center">
      <div className="bg-white p-32 rounded-3xl">
        <h1 className="text-3xl pb-3">Create Car</h1>
        <hr />
        <div className="pt-5 text-lg">
          <div>Car brand</div>
          <input
            value={carbrand}
            onChange={(e) => setCarbrand(e.target.value)}
            type="text"
            className="p-1 bg-slate-100 rounded-xl hover:bg-slate-200"
          />
        </div>
        <div className="pt-5 text-lg">
          <div>Model</div>
          <input
            value={model}
            onChange={(e) => setModel(e.target.value)}
            type="text"
            className="p-1 bg-slate-100 rounded-xl hover:bg-slate-200"
          />
        </div>
        <div className="pt-5 text-lg">
          <div>Seats</div>
          <input
            value={seats}
            onChange={(e) => setSeats(parseInt(e.target.value))}
            type="number"
            className="p-1 bg-slate-100 rounded-xl hover:bg-slate-200"
          />
        </div>
        <div className="pt-5 text-lg">
          <div>Trunkspace</div>
          <input
            value={trunkspace}
            onChange={(e) => setTrunkspace(parseInt(e.target.value))}
            type="number"
            className="p-1 bg-slate-100 rounded-xl hover:bg-slate-200"
          />
        </div>
        <div className="pt-5 text-lg">
          <div>Car Type</div>
          <input
            value={type}
            onChange={(e) => setType(e.target.value)}
            type="number"
            className="p-1 bg-slate-100 rounded-xl hover:bg-slate-200"
          />
        </div>

        <div className="flex flex-row">
          <Loginbutton name="Create Car" onClick={() => console.log("")}/>
        </div>
      </div>
    </div>
  );
}
