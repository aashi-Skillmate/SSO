"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { env } from "process";

export default function HomePage() {
  const router = useRouter();
  const { status } = useSession();
  function handleClick() {
    console.log(`${process.env.NEXT_PUBLIC_API}/login`);
    router.push(`${process.env.NEXT_PUBLIC_API}/login`);
  }
  if (status === "authenticated") {
    router.push("/dashboard");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <button onClick={handleClick}>LOGIN</button>
      </div>
    </main>
  );
}
