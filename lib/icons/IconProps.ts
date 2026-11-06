import type { SVGProps } from "react";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "aria-hidden"> & {
    ariaHidden?: boolean;
};
