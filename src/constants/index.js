import assetPath from "../utils/assetPath";

const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Tech Stack",
        link: "#techstack",
    },
];

const words = [
    { text: "Learning", imgPath: assetPath('images/ideas.svg') },
    { text: "Building", imgPath: assetPath('images/code.svg') },
    { text: "Developing", imgPath: assetPath('images/concepts.svg') },
    { text: "and Evolving", imgPath: assetPath('images/designs.svg') },
    { text: "Learning", imgPath: assetPath('images/ideas.svg') },
    { text: "Building", imgPath: assetPath('images/code.svg') },
];

const counterItems = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 108, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: assetPath('images/logos/company-logo-1.png'),
    },
    {
        imgPath: assetPath('images/logos/company-logo-2.png'),
    },
    {
        imgPath: assetPath('images/logos/company-logo-3.png'),
    },
    {
        imgPath: assetPath('images/logos/company-logo-4.png'),
    },
    {
        imgPath: assetPath('images/logos/company-logo-5.png'),
    },
    {
        imgPath: assetPath('images/logos/company-logo-6.png'),
    },
    {
        imgPath: assetPath('images/logos/company-logo-7.png'),
    },
    {
        imgPath: assetPath('images/logos/company-logo-8.png'),
    },
    {
        imgPath: assetPath('images/logos/company-logo-9.png'),
    },
    {
        imgPath: assetPath('images/logos/company-logo-10.png'),
    },
    {
        imgPath: assetPath('images/logos/company-logo-11.png'),
    },
];

const abilities = [
    {
        imgPath: assetPath('images/seo.png'),
        title: "Growth-oriented",
        desc: "I focus on continuous improvement by applying new skills through projects and real-world practice.",
    },
    {
        imgPath: assetPath('images/chat.png'),
        title: "Curious",
        desc: "I actively seek to learn new technologies and explore better ways to solve problems.",
    },
    {
        imgPath: assetPath('images/time.png'),
        title: "Disciplined",
        desc: "I stay consistent with my learning goals and manage my time effectively to improve every day.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: assetPath('images/logos/react.png'),
    },
    {
        name: "Python Developer",
        imgPath: assetPath('images/logos/python.svg'),
    },
    {
        name: "Backend Developer",
        imgPath: assetPath('images/logos/node.png'),
    },
    {
        name: "Interactive Developer",
        imgPath: assetPath('images/logos/three.png'),
    },
    {
        name: "Project Manager",
        imgPath: assetPath('images/logos/git.svg'),
    },
];

const techStackIcons = [
    {
        name: "Java",
        modelPath: assetPath('models/java_logo.glb'),
        scale: 3,
        rotation: [0, 0, 0],
    },
    {
        name: "C++",
        modelPath: assetPath('models/cpp-logo.glb'),
        scale: 45,
        rotation: [0, 0, 0],
    },
    {
        name: "React",
        modelPath: assetPath('models/react_logo-transformed.glb'),
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Tailwind CSS",
        modelPath: assetPath('models/tailwind_css.glb'),
        scale: 50,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Git",
        modelPath: assetPath('models/git-svg-transformed.glb'),
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Philips is a leading Dutch health technology company, founded in 1891, that focuses on improving people's health and well-being through meaningful innovation.",
        imgPath: assetPath('images/exp1.png'),
        logoPath: assetPath('images/logo1.png'),
        title: "Product Security Intern",
        date: "August 2023 - June 2024",
        responsibilities: [
            "During my internship at Philips, Bangalore, I focused on improving product security by",
            "implementing secure coding practices, conducting vulnerability assessments,",
            "and contributing to the development of robust security solutions.",
            "Optimized web applications for maximum speed and scalability.",
        ],
    },
    {
        review:
            "Containers are lightweight, portable units that package an application along with its dependencies, ensuring it runs consistently across different environments.Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.",
        imgPath: assetPath('images/exp2.png'),
        logoPath: assetPath('images/logo2.png'),
        title: "Kubernetes and Containers Bootcamp",
        date: "March 2024 - April 2024",
        responsibilities: [
            "At Philips, I participated in a Kubernetes and Containers Bootcamp, where I learned  ",
            "the fundamentals of Kubernetes and containerization. The training emphasized their role",
            "in streamlining deployment processes and their applications in vulnerability security ",
            "assessments, enhancing overall system security and efficiency.",
        ],
    },
    {
        review:
            "Amazon Web Services (AWS) is a cloud computing platform that provides on-demand services like computing, storage, and databases, enabling businesses to build and scale applications efficiently.",
        imgPath: assetPath('images/exp3.png'),
        logoPath: assetPath('images/logo3.png'),
        title: "AWS Cloud Services Bootcamp",
        date: "May 2024 - June 2024",
        responsibilities: [
            "At Philips, I attended an AWS Cloud Service Bootcamp where I learned the fundamentals ",
            "of AWS and its applications. The training focused on enhancing the security and ",
            "adaptability of AWS services, making them more efficient and reliable for business use.",
        ],
    },
    {
        review:
            "Celebal Technologies is a technology consulting company specializing in digital transformation, data engineering, cloud solutions, and enterprise platforms, helping organizations leverage modern technologies to drive business growth.",
        imgPath: assetPath('images/exp4.png'),
        logoPath: assetPath('images/logo4.png'),
        title: "PowerApps Training",
        date: "March 2023 - May 2023",
        responsibilities: [
            "During my training at Celebal, I gained hands-on experience with Microsoft PowerApps ",
            "and Power Automate, learning to create full-length web and mobile applications. I ",
            "developed skills in integrating applications with SharePoint, SQL, and other databases,",
            "enabling seamless data management and workflow automation. This training enhanced my ",
            "ability to design and deploy efficient, user-friendly business solutions.",

        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: assetPath('images/logo1.png'),
    },
    {
        name: "logo2",
        imgPath: assetPath('images/logo2.png'),
    },
    {
        name: "logo3",
        imgPath: assetPath('images/logo3.png'),
    },
    {
        name: "logo4",
        imgPath: assetPath('images/logo4.png'),
    },
];

const skills = [
    {
        name: "SpringBoot",
        imgPath: assetPath('images/sb.png'),
        review:
            "Spring Boot simplifies Java-based web application and microservice development through pre-configured setups, embedded servers, and reduced boilerplate code. It is well-suited for building scalable, secure, and cloud-ready REST APIs and enterprise applications. I am currently learning Spring Boot through YouTube resources.",
    },
    {
        name: "MERN",
        review:
            "The MERN stack—MongoDB, Express.js, React.js, and Node.js—is a JavaScript-based framework used to build dynamic and scalable web applications. I am currently learning these technologies through the online platform 30DC and plan to develop new projects to apply and strengthen these skills.",
        imgPath: assetPath('images/ms.png'),
    },
    {
        name: "Ai Tools and Certificates",
        review:
            "I am actively learning new AI tools to accelerate my development process and improve productivity. Alongside this, I am working on building new projects to apply these tools in real-world scenarios and further honing my AI skills through Google’s free skill courses.",
        imgPath: assetPath('images/aitools.png'),
    },
];

const socialImgs = [
    {
        name: "github",
        url: "https://github.com/LAKSHAYJAIN19?tab=repositories",
        imgPath: assetPath('images/gh.png'),
    },
    {
        name: "x",
        url: "https://x.com/Lakshayjntw",
        imgPath: assetPath('images/xlogo.png'),
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/lakshayjain19/",
        imgPath: assetPath('images/li.png'),
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    skills,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};