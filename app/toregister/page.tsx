import Inputfield from "@/components/inputfield";
import Loginbutton from "@/components/loginbutton";
import Image from "next/image";

export default function Login() {
  return (
    <div className=" bg-slate-100 h-full py-20 px-60 bg-center">
      <div className="bg-white p-32 rounded-3xl">
        <h1 className="text-3xl pb-3">Register</h1>
        <hr />
        <Inputfield name="User" />
        <Inputfield name="E-Mail" />
        <Inputfield name="Password" />
        <Inputfield name="Confirm Password" />

        <div className="pt-5 text-lg">
          <div>Admin?</div>
          <input
            type="checkbox"
            className="p-1 bg-slate-100 rounded-xl hover:bg-slate-200"
          />
        </div>

        <div className="flex flex-row">
          <Loginbutton name="Login" />
          <Loginbutton name="To Register" />
        </div>
      </div>
    </div>
  );
}
