
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"

const Background = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        name: "Link Triangles",
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                },
            },
            color: {
                value: "#ff0000",
                animation: {
                    enable: true,
                    speed: 10,
                    sync: true,
                },
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 0.5,
            },
            size: {
                value: {
                    min: 1,
                    max: 3,
                },
            },
            links: {
                enable: true,
                distance: 150,
                color: "random",
                opacity: 0.4,
                width: 1,
                triangles: {
                    enable: true,
                    color: "#ffffff",
                    opacity: 0.1,
                },
            },
            move: {
                enable: true,
                speed: 2,
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                onClick: {
                    enable: true,
                    mode: "push",
                },
            },
            modes: {
                grab: {
                    distance: 400,
                    links: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 0.8,
                },
                repulse: {
                    distance: 200,
                },
                push: {
                    quantity: 4,
                },
                remove: {
                    quantity: 2,
                },
            },
        },
        background: {
            color: "#000000",
        },
    }}
    />
  );
};

export default Background;