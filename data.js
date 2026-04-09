const projectData = [
    {
        title: "Flight Dynamics Simulation",
        shortDesc: "6-DOF rocket and missile simulator with realistic physics.",
        tech: "C++20, Python, Physics Simulation",
        tags: ["C++", "Python", "Simulation", "Physics", "Math"],
        body: "Most physics/game engines abstract away the underlying physics, so I built a simulator to directly model rigid-body dynamics. Solves nonlinear equations of motion using Euler integration, with modular force components for aerodynamics, propulsion, and gravity.",
        link: "https://github.com/Aiden-10/Flight-Dynamics-Simulation",
        image: "https://raw.githubusercontent.com/Aiden-10/Flight-Dynamics-Simulation/main/scripts/demo.png"
    },
    {
        title: "Immediate UI Framework",
        shortDesc: "Custom GUI system with its own input handling and renderer.",
        tech: "C++20, Direct3D 11, Win32 API",
        tags: ["C++", "Graphics", "GUI"],
        body: "Built an immediate-mode GUI system from scratch using Direct3D 11. Implemented core UI components (buttons, sliders, text input, checkboxes) along with a custom input pipeline for mouse and keyboard handling. Includes focus management, draggable windows, and z-ordering, designed to run inside a real-time render loop without external frameworks.",
        link: "https://github.com/Aiden-10/immediate_gui_cpp",
        image: "https://raw.githubusercontent.com/Aiden-10/immediate_gui_cpp/master/gui_cpp/Images/demo.png"
    },
    {
        title: "Aviation Delay Pipeline",
        shortDesc: "Multi-source data science pipeline for modeling flight delays.",
        tech: "Python, Scikit-learn, Pandas, Geospatial API",
        tags: ["Data Science", "Python", "Collaboration", "Data Engineering"], 
        body: "Developed in a two-person collaborative environment, this project involved building an end-to-end pipeline to predict aviation delays. Integrated 4 months of BTS flight data with NOAA observations. Engineered custom 'Airport Congestion' and 'Inclement Weather' metrics to increase model sensitivity.",
        link: "", 
        image: "https://placehold.co/800x400/222222/00d474?text=Flight+Delay+Analysis"
    },
    {
        title: "SIMD Matrix Library",
        shortDesc: "AVX-optimized matrix library for high-throughput matrix operations.",
        tech: "C++20, AVX/AVX2, FMA",
        tags: ["C++", "HPC", "SIMD", "Optimization"],
        body: "Built a linear algebra library using AVX intrinsics instead of relying on compiler auto-vectorization. Focused on memory alignment, loop unrolling, and fused multiply-add instructions to improve throughput and better understand low-level CPU performance.",
        link: "https://github.com/Aiden-10/simd_matrix",
        image: "https://placehold.co/800x400/222222/00d474?text=SIMD+Math+Library"
    },
    {
        title: "The Traveling Salesman Problem Optimization",
        shortDesc: "Hybrid Genetic Algorithm with 2-opt local search for Traveling Salesman Problem.",
        tech: "C++20, Algorithms",
        tags: ["C++", "Algorithms", "Optimization", "Heuristics"],
        body: "Implemented a Memetic Algorithm to find approximate solutions for the Traveling Salesman Problem (TSP). Combines a Genetic Algorithm for global exploration with a 2-opt local search for refinement. Utilizes modern C++ features for efficient implementation.",
        link: "",
        image: "https://placehold.co/800x400/222222/00d474?text=TSP+Optimization+Graph"
    }
];
