// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications listed in reverse chronological order.* Equal contribution",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my past and ongoing projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-",
          title: "",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/_pages/dropdown/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-excited-to-join-tri-s-robotics-group-as-a-summer-intern",
          title: 'Excited to join TRI’s Robotics group as a summer intern.',
          description: "",
          section: "News",},{id: "projects-data-driven-bulldozer-blade-control-for-autonomous-terrain-leveling",
          title: 'Data-Driven Bulldozer Blade Control for Autonomous Terrain Leveling',
          description: "Simulation-driven framework for optimizing low-level bulldozer blade control",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-3d-human-pose-estimation-in-video",
          title: '3D Human Pose Estimation in Video',
          description: "Comparison between transformer and CNN-based architectures for 3D human pose estimation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-flexible-multibody-dynamics-simulator",
          title: 'Flexible Multibody Dynamics Simulator',
          description: "Finite-element simulation of a clamped cantilever beam with BDF-1 integrator.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-comparative-study-of-gpu-programming-languages",
          title: 'Comparative Study of GPU Programming Languages',
          description: "Comparison of GPU languages across common kernels and their performance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_project/";
            },},{id: "projects-lunar-rover-vehicle-simulation-infrastructure",
          title: 'Lunar Rover Vehicle Simulation Infrastructure',
          description: "GPU-accelerated framework for lunar vehicle simulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-triumph-motorcycles",
          title: 'Triumph Motorcycles',
          description: "My contribution to Speed 400 and Scrambler 400 X",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-bmw-f450gs-development",
          title: 'BMW F450GS Development',
          description: "Vehicle Dynamics &amp; Suspension Engineering for BMW’s next-gen ADV platform",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-sae-baja-team",
          title: 'SAE BAJA Team',
          description: "Chassis Design, Powertrain, and Data Acquisition – BAJA SAE India &amp; Enduro Student India",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-powertrain-modeling-raptee-energy",
          title: 'Powertrain Modeling - Raptee Energy',
          description: "Model-based design and control of electric motorcycle drivetrain",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-gpu-accelerated-path-planning-for-autonomous-robots",
          title: 'GPU-Accelerated Path Planning for Autonomous Robots',
          description: "Accelerated path planning using Rapidly-exploring Random Trees (RRT) with OpenMP/CUDA",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-loader-simulation-with-dem",
          title: 'Loader Simulation with DEM',
          description: "Modeling wheel loader-soil interaction using Chrono::Engine and DEM",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-robotic-manipulator-simulation",
          title: 'Robotic Manipulator Simulation',
          description: "Modeling and control of a serial robotic arm",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-gpu-based-linear-solvers-for-multibody-dynamics",
          title: 'GPU-Based Linear Solvers for Multibody Dynamics',
          description: "High-performance computing acceleration for large-scale mechanical systems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%72%69%76%6F%6C%69@%77%69%73%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ganesh12a", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/gnsh-a", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=fyiJskcAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
