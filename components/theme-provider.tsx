"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function ThemeProvider({
  children,
  ...props
}: Readonly<React.ComponentProps<typeof NextThemesProvider>>) {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.debug(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fps_limit: 60,
      style: {
        backgroundImage: "linear-gradient(to right, #121212, #141414, #1f1f1f)",
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: { particles_nb: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#fff" },
        links: {
          color: "#fff",
          distance: 150,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          bounce: false,
          direction: "none",
          enable: true,
          outMode: "out",
          random: false,
          speed: 2,
          straight: false,
        },
        number: { density: { enable: true, area: 1000 }, value: 50 },
        opacity: { value: 0.09 },
        shape: { type: "circle" },
        size: { random: true, value: 4 },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <NextThemesProvider {...props}>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        {children}
      </NextThemesProvider>
    );
  }
}
