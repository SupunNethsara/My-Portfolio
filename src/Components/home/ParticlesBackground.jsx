import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="absolute inset-0 z-0">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    particles: {
                        number: {
                            value: 20,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: "#ffffff",
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000",
                            },
                            polygon: {
                                nb_sides: 5,
                            },
                        },
                        opacity: {
                            value: 0.3,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 5,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 1.5,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                            onclick: {
                                enable: true,
                                mode: "push",
                            },
                            resize: true,
                        },
                        modes: {
                            repulse: {
                                distance: 200,
                            },
                            push: {
                                particles_nb: 4,
                            },
                        },
                    },
                    retina_detect: true,
                }}
            />
        </div>
    );
};

export default ParticlesBackground;