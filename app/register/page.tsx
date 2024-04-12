"use client"
import Inputfield from "@/components/inputfield";
import Loginbutton from "@/components/loginbutton";
import UserService from "@/services/user.service";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

export default function Register() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const { mutate } = useMutation({
    mutationKey: "register",
    mutationFn: UserService.register,
    onSuccess() {
      router.push("/login");
    },
    onError(error: any) {
      toast.error(error.message);
    }
  });
  const register = () => {
    if(password === confirmPassword){
      mutate({username, email, password});
    }
    else{
      toast.error("Passwords do not match");
    }
  }


  return (
    <div className=" bg-slate-100 h-full py-20 px-60 bg-center">
      <div className="bg-white p-32 rounded-3xl">
        <h1 className="text-3xl pb-3">Register</h1>
        <hr />
        <div className="pt-5 text-lg">
          <div>Username</div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="p-1 bg-slate-100 rounded-xl hover:bg-slate-200"
          />
        </div>
        <div className="pt-5 text-lg">
          <div>E-Mail</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="p-1 bg-slate-100 rounded-xl hover:bg-slate-200"
          />
        </div>
        <div className="pt-5 text-lg">
          <div>Password</div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="p-1 bg-slate-100 rounded-xl hover:bg-slate-200"
          />
        </div>
        <div className="pt-5 text-lg">
          <div>Confirm Password</div>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className="p-1 bg-slate-100 rounded-xl hover:bg-slate-200"
          />
        </div>

        <div className="flex flex-row">
          <Loginbutton name="To Login" onClick={() => router.push("/login")}/>
          <Loginbutton name="Register" onClick={register}/>
        </div>
      </div>
    </div>
  );
}

