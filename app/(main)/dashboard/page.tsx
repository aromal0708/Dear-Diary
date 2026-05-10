"use client";
import { authOptions } from "@/app/lib/auth";
import { signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

const Dashboard = () => {
  const session = useSession();
  console.log("Session:", session);

  const { data, status } = session;
  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome, {data?.user?.name}</p>
      <p>Status: {status}</p>
      <button className="cursor-pointer outline-1 " onClick={() => signOut()}>signOut</button>
    </div>
  );
};

export default Dashboard;
