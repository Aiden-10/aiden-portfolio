const projectData = [
    {
        title: "Flight Dynamics Simulation",
        shortDesc: "6-DOF rocket and missile simulator with realistic physics.",
        tech: "C++20, Python, Physics Simulation",
        tags: ["C++", "Python", "Simulation", "Physics", "Math"],
        body: "A six degrees of freedom flight simulation engine. The core physics engine is built as a Windows C++ Server that computes flight and environment data and streams that data in real-time to a React web client via WebSockets for rendering.",
        link: "https://github.com/Aiden-10/Flight-Dynamics-Simulation",
        doc: "",
        image: "https://raw.githubusercontent.com/Aiden-10/Flight-Dynamics-Simulation/main/scripts/demo.png"
    },
    {
        title: "Immediate UI Framework",
        shortDesc: "Custom GUI system with its own input handling and renderer.",
        tech: "C++20, Direct3D 11, Win32 API",
        tags: ["C++", "Graphics", "GUI"],
        body: "Built an immediate-mode GUI system from scratch using Direct3D 11. Implemented core UI components (buttons, sliders, text input, checkboxes) along with a custom input pipeline for mouse and keyboard handling. Includes focus management, draggable windows, and z-ordering, designed to run inside a real-time render loop without external frameworks.",
        link: "https://github.com/Aiden-10/immediate_gui_cpp",
        doc: "", 
        image: "https://raw.githubusercontent.com/Aiden-10/immediate_gui_cpp/master/gui_cpp/Images/demo.png"
    },
    {
        title: "Aviation Delay Pipeline",
        shortDesc: "Multi-source data science pipeline for modeling flight delays.",
        tech: "Python, Scikit-learn, Pandas, Geospatial API",
        tags: ["Data Science", "Python", "Collaboration", "Data Engineering"], 
        body: "Developed in a two-person collaborative environment, this project involved building an end-to-end pipeline to predict aviation delays. Integrated 4 months of BTS flight data with NOAA observations. Engineered custom 'Airport Congestion' and 'Inclement Weather' metrics to increase model sensitivity.",
        link: "",
        doc: "", 
        image: "https://placehold.co/800x400/222222/00d474?text=Flight+Delay+Analysis"
    },
    {
        title: "Robotic Grasping with RL",
        shortDesc: "Trained a robotic agent using Proximal Policy Optimization (PPO) to execute a task-oriented lift operation.",
        tech: "Python, PyBullet, StableBaselines3, PPO",
        tags: ["Reinforcement Learning", "Robotics", "Simulation", "Python"],
        body: "Investigated the application of Reinforcement Learning to solve robotic manipulation problems, specifically a 'lift' skill for a dispenser. Configured a virtual simulation using the PyBullet physics engine and utilized the AffordPose database to define initial task-informed hand postures. Implemented the PPO algorithm via StableBaselines3 with a two-stage composite reward function, achieving a 99.69% success rate.",
        link: "", 
        doc: "./docs/CS484_Reinforcement_Learning_Paper.pdf", 
        image: "https://placehold.co/800x400/222222/00d474?text=Robotic+RL+Grasping"
    },
    {
        title: "SIMD Matrix Library",
        shortDesc: "AVX-optimized matrix library for high-throughput matrix operations.",
        tech: "C++20, AVX/AVX2, FMA",
        tags: ["C++", "HPC", "SIMD", "Optimization"],
        body: "Built a linear algebra library using AVX intrinsics instead of relying on compiler auto-vectorization. Focused on memory alignment, loop unrolling, and fused multiply-add instructions to improve throughput and better understand low-level CPU performance.",
        link: "https://github.com/Aiden-10/simd_matrix",
        doc: "", 
        image: "https://placehold.co/800x400/222222/00d474?text=SIMD+Math+Library"
    }
];
