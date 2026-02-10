import "tailwindcss/tailwind.css";
import "@/styles/main.css";

import { AppProps } from "next/app";

import DarkVeil from "@/components/global/DarkVeil/DarkVeil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-30">
        <DarkVeil
          hueShift={40}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1.0}
        />
      </div>
      <Component {...pageProps} />
    </>
  );
}
