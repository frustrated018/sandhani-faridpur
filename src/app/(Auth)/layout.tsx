import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="h-screen min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('/authBg.svg')` }}
    >
      <div className="flex h-screen items-center justify-center">
        {children}
      </div>
    </section>
  );
}
