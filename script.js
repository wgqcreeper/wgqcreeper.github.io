particlesJS("particles-js", {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 700
      }
    },
    color: {
      value: "#c6ddf1"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#FF00FF"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.7260172626387177,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 4.810221721157459,
      direction: "bottom-left",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 481.02217211574595,
        rotateY: 1523.236878366529
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 383.61638361638364,
        line_linked: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 467.53246753246754,
        size: 3.996003996003996,
        duration: 0.3196803196803197,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});