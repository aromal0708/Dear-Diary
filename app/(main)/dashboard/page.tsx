"use client";
import { authOptions } from "@/app/lib/auth";
import { signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

const Dashboard =  () => {
  const session = useSession();
  console.log("Session:", session);
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => signOut()}>signOut</button>
    </div>
  );
};

export default Dashboard;
