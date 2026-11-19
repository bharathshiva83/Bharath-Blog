/**
 * =========================================================================
 * PALANCHA BHARATH SHIVA - PERSONAL PROFILE & RESUME CONFIG
 * Centralized data source for portfolio, experience, resume, & projects.
 * =========================================================================
 */

export const personalInfo = {
  name: "Palancha Bharath Shiva",
  role: "AI & Computer Vision Engineer",
  tagline: "AI & Computer Vision Engineer building real-time object detection, multi-object tracking, and edge-inference systems deployed on GPU and edge devices (Raspberry pi, NVIDIA Jetson).",
  status: "Available for roles & collaborations",
  location: "Hyderabad, India",
  phone: "+91 901 456 3447",
  email: "palanchabharath2828@gmail.com",
  socials: {
    github: "https://github.com/bharathshiva83",
    linkedin: "https://www.linkedin.com/in/palanchabharath",
  },
  about: [
    "I am an AI & Computer Vision Engineer with experience building and deploying real-time object detection, multi-object tracking, and edge-inference systems. My work focuses on training custom deep learning models end-to-end—from dataset curation and annotation to model architecture optimization for GPU and embedded edge platforms (NVIDIA Jetson Nano/Orin).",
    "At EON Space Labs, I lead the development of multi-sensor PTZ surveillance systems, building custom YOLOv8/v11 pipelines achieving 10+ FPS real-time inference in field-validated deployments, paired with PyQt5 operator control GUIs and super-resolution video enhancement (FSRCNN, EDSR).",
    "I believe in building AI that runs reliably in real-world operating environments with strict latency constraints and deterministic hardware integration."
  ]
};

export const resume = {
  pdfUrl: "/Bharath-Blog/resume.pdf",
  summary: "AI/Computer Vision Engineer with 1+ year of experience building and deploying real-time object detection, multi-object tracking, and edge-inference systems. Skilled in training custom deep learning models end-to-end — dataset curation, training, and optimization for GPU and embedded edge platforms — achieving 30+ FPS real-time inference in field-validated deployments. Experienced across the full development cycle, including hardware integration, GUI development, and proof-of-concept delivery.",
  certifications: []
};

export const experiences = [
  {
    role: "AI Application Engineer",
    company: "EON Space Labs",
    period: "Dec 2025 — Present",
    description: "Leading end-to-end development of multi-sensor PTZ surveillance systems, custom YOLO object detection, and PyQt5 GUI operator applications.",
    bullets: [
      "Led end-to-end development of a multi-sensor PTZ surveillance system, integrating real-time video feeds, sensor controls, pan-tilt operation, AI-based detection/tracking, and target management into a unified operator interface.",
      "Designed and built PyQt5 GUI applications for sensor control, pan-tilt actuation, AI inference toggles, and auto-zoom/tracking workflows, deployed across live field systems.",
      "Developed and optimized custom YOLO-based object detection models on domain-specific datasets for FOD (Foreign Object Debris), aerial monitoring, and surveillance systems, achieving 30+ FPS real-time inference validated through field trials.",
      "Developed multi-object tracking pipelines with auto-tracking and target persistence for live video streams; implemented real-time image enhancement using super-resolution models (FSRCNN, EDSR) to improve long-range feed clarity.",
      "Built and demonstrated functional prototypes and proof-of-concept systems to enterprise clients under real-world operating conditions."
    ]
  },
  {
    role: "AI Intern",
    company: "EON Space Labs",
    period: "Jul 2025 — Nov 2025",
    description: "Trained custom object detection models, curated structured video datasets, and integrated super-resolution models into live inference pipelines.",
    bullets: [
      "Trained a custom single-class object detection model from scratch, achieving mAP@0.5 of 0.968, precision of 0.97, recall of 0.95, and F1-score of 0.95; extended the model to support detection-coupled tracking for continuous target persistence.",
      "Curated training datasets from live video streams via frame extraction and structured annotation (CVAT, LabelImg); iterated across training cycles to close performance gaps identified through confusion-matrix and curve analysis.",
      "Integrated super-resolution models into live inference pipelines to improve detection reliability in degraded and low-resolution video feeds.",
      "Contributed in early-stage development of AI-based surveillance and monitoring prototypes."
    ]
  }
];

export const projects = [
  {
    title: "Facial Recognition System",
    description: "Real-time facial recognition application using InsightFace, OpenCV, and PyTorch, featuring GPU-accelerated inference, multi-face detection/tracking, live webcam support, Tkinter GUI, and known-face recognition.",
    tags: ["PyTorch", "InsightFace", "OpenCV", "CUDA", "Tkinter"],
    github: "https://github.com/bharathshiva83",
  },
  {
    title: "License Plate Recognition System",
    description: "Automated license plate detection and OCR-based alphanumeric number extraction pipeline achieving ~80% accuracy using image processing and ML algorithms across diverse vehicle images.",
    tags: ["Python", "OpenCV", "OCR", "Machine Learning"],
    github: "https://github.com/bharathshiva83",
  },
  {
    title: "Multi-Sensor PTZ Surveillance System",
    description: "Operator control platform integrating real-time EO/IR feeds, pan-tilt actuation, custom YOLOv8/v11 detection models (30+ FPS), and ByteTrack multi-object tracking for field-grade surveillance.",
    tags: ["PyQt5", "YOLOv8", "TensorRT", "Jetson Orin", "OpenCV"],
    github: "https://github.com/bharathshiva83",
  },
  {
    title: "IMDB Movie Analysis Dashboard",
    description: "Cleaned and transformed movie dataset using Power Query; built interactive Power BI dashboards to analyze key patterns influencing movie ratings, profitability, and genre success.",
    tags: ["Power BI", "Power Query", "Data Analytics"],
    github: "https://github.com/bharathshiva83",
  }
];

export const skills = [
  { category: "Computer Vision", items: "Object Detection, Multi-Object Tracking, IR Imaging, EO/IR Fusion" },
  { category: "Models & Architectures", items: "YOLOv8, YOLOv11, RT-DETR, ByteTrack, FSRCNN, EDSR" },
  { category: "Frameworks", items: "PyTorch, TensorFlow, Keras" },
  { category: "Deployment & Optimization", items: "ONNX, TensorRT, CUDA, NVIDIA Jetson Nano/Orin" },
  { category: "Languages", items: "Python, C, Java, SQL" },
  { category: "Tools & GUI", items: "OpenCV, PyQt5, LabelImg, CVAT, VS Code, Git" },
  { category: "Operating Systems", items: "Linux (Ubuntu), Windows" }
];

export const education = {
  degree: "B.Tech in Computer Science & Data Science",
  institution: "JNTUH (Jawaharlal Nehru Technological University, Hyderabad)",
  period: "Nov 2021 — Jun 2025",
  status: "Completed"
};

export const publications = [
  {
    title: "Bone Fracture Detection with Deep Learning and Ensemble of CNN Models in X-Ray Images",
    authors: "Co-Author",
    journal: "International Journal of Advanced Research in Science, Communication and Technology (IJARSCT)",
    date: "May 2025",
    description: "Developed a soft-voting ensemble (Xception + NASNetMobile) for automated X-ray bone-fracture detection achieving 95.8% accuracy, deployed via a Flask-based web interface for real-time clinical use.",
    doi: "10.48175/IJARSCT-26934",
    link: "https://doi.org/10.48175/IJARSCT-26934",
    paper: "https://www.ijarsct.co.in/Paper26934.pdf"
  }
];
