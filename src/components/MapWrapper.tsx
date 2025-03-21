// src/components/MapWrapper.tsx

"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./Map"), { ssr: false });

type MapWrapperProps = {
  routeName: string;
};

export default function MapWrapper({ routeName }: MapWrapperProps) {
  return <DynamicMap routeName={routeName} />;
}
