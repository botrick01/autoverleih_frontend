"use client";
import Inputfield from "@/components/inputfield";
import Loginbutton from "@/components/loginbutton";
import UserService from "@/services/user.service";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = useMutation(
    "login",
    async () => await UserService.login({ username, password }),
    {
      onSuccess: () => {
        router.push("/dashboard");
      },
      onError: (error: any) => {
        setUsername("");
        setPassword("");
        console.log(error.message);
      },
    }
  );

  useEffect(() => {
    router.prefetch("/dashboard");
  }, [router]);

  return (
    <div className=" bg-slate-100 h-full py-20 px-60 bg-center">
      <div className="bg-white p-32 rounded-3xl">
        <h1 className="text-3xl pb-3">Login</h1>
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
          <div>Password</div>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="p-1 bg-slate-100 rounded-xl hover:bg-slate-200"
          />
        </div>

        <div className="flex flex-row">
          <Loginbutton name="Login" onClick={login.mutateAsync} />
          <Loginbutton
            name="To Register"
            onClick={() => router.push("/register")}
          />
        </div>
      </div>
    </div>
  );
}
