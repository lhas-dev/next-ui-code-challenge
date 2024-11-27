import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}
