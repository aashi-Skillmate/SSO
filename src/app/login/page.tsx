"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
export const dynamic = "force-dynamic"; // <- add this to force dynamic render

function LoginPage() {
  const searchParams = useSearchParams();
  const callback = `${process.env.NEXT_PUBLIC_API}/${new URLSearchParams(searchParams).get("redirect") ?? "/"}`;

  // if (status === "authenticated") {
  //   router.push("/dashboard");
  // }
  const handleSignInWithProviderAndRedirect = async (
    provider: string,
    callbackUrl: string,
  ) => {
    await signIn(provider, {
      redirect: true,
      callbackUrl: callbackUrl,
    });
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 pb-40">
      <div className="w-full max-w-xl rounded-lg border border-black p-8 shadow-lg">
        <div className="mb-10 flex flex-col items-center justify-center gap-4">
          <Image
            className=""
            src={"/svg/skillmate.svg"}
            alt="skillmate logo"
            width={250}
            height={250}
          />
          <p className="text-center text-lg font-bold">
            Where genuine skills meet great opportunities
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-10">
          <button
            onClick={() =>
              handleSignInWithProviderAndRedirect("google", callback)
            }
            className="flex items-center justify-center rounded-md border border-black p-4 transition duration-300 hover:bg-white hover:text-[#0dba4b] focus:outline-none"
          >
            <Image
              width={50}
              height={50}
              src={"/svg/google.svg"}
              alt="Google Login"
              className="mr-2 h-6 w-6"
            />

            <p>Google</p>
          </button>
          <button
            onClick={() => handleSignInWithProviderAndRedirect("github", `/`)}
            className="flex items-center justify-center rounded-md border border-black p-4 transition duration-300 hover:bg-white hover:text-[#0dba4b] focus:outline-none"
          >
            <Image
              width={25}
              height={25}
              src={"/svg/github.svg"}
              alt="Github Login"
              className="mr-2 h-6 w-6"
            />

            <p>Github</p>
          </button>
        </div>
        <footer className="mt-4 text-center">
          <h1 className="text-xl font-normal">Sign in to Continue</h1>
        </footer>
      </div>
    </div>
  );
}

export default LoginPage;
