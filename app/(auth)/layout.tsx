import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex pt-40 pb-4 justify-center">{children}</div>;
};

export default AuthLayout;
