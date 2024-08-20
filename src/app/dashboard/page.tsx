"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getServerAuthSession } from "@/server/auth";
import Image from "next/image";

function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      console.log("not auth");
      // router.push("/login");
      // redirect("/api/auth/sigin?callbackUrl='/dashboard'");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
    console.log(session?.user);
  }, [session]);

  if (status === "unauthenticated") {
    router.push(`${process.env.NEXT_PUBLIC_API}/login?callbackUrl=dashboard`);
  }

  return (
    <div className="h-screen">
      <h1>Dashboard</h1>
      <h3>{session?.user?.name}</h3>
      <h3>{session?.user?.email}</h3>
      {/* <h3>{session?.user.role}</h3> */}
      <Image
        alt={session?.user?.name ?? ""}
        src={session?.user?.image ?? ""}
        width={100}
        height={100}
        className="h-44 w-44"
      />
      <button onClick={() => signOut()}>LOGOUT</button>
    </div>
  );
}

export default DashboardPage;
