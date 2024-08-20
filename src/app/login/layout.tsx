import React, { Suspense } from "react";

export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <div>{children}</div>
      </Suspense>
    </>
  );
}
