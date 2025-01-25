import React from "react";

export interface IContainerProps {
  children: React.ReactNode;
}
export default function Container({ children }: IContainerProps) {
  return (
    <div style={{ width: "95%", margin: "0px auto", maxWidth: "1280px" }}>
      {children}
    </div>
  );
}
