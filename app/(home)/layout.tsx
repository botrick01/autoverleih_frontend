"use client";

import UserService from "@/services/user.service";
import { SignOut } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const logout = () => {
        UserService.logout();
        router.push("/login");
    }
  return (
    <div>
      <div className="flex justify-between flex-row p-2">
        <h1 className="text-3xl">Car Rental</h1>
        <button className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={logout}>
            <SignOut/>
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default HomeLayout;