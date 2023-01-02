import React from "react";

export interface INavbar {
  name: string;
  path: string;
  icon?: React.ReactNode;
  children?: INavbar[];
};
