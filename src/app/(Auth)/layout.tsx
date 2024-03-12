import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('/authBg.svg')` }}
    >
      <div className="flex min-h-screen items-center justify-center">
        {children}
      </div>
    </section>
  );
}
