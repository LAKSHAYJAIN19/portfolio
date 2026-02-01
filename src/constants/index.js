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
    { text: "Learning", imgPath: "/images/ideas.svg" },
    { text: "Building", imgPath: "/images/code.svg" },
    { text: "Developing", imgPath: "/images/concepts.svg" },
    { text: "and Evolving", imgPath: "/images/designs.svg" },
    { text: "Learning", imgPath: "/images/ideas.svg" },
    { text: "Building", imgPath: "/images/code.svg" },
    { text: "Developing", imgPath: "/images/concepts.svg" },
    { text: "and Evolving", imgPath: "/images/designs.svg" }
];

const counterItems = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 108, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Growth-oriented",
        desc: "I focus on continuous improvement by applying new skills through projects and real-world practice.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Curious",
        desc: "I actively seek to learn new technologies and explore better ways to solve problems.",
    },
    {
        imgPath: "/images/time.png",
        title: "Disciplined",
        desc: "I stay consistent with my learning goals and manage my time effectively to improve every day.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "Java",
        modelPath: "/models/java_logo.glb",
        scale: 3,
        rotation: [0, 0, 0],
    },
    {
        name: "C++",
        modelPath: "/models/cpp-logo.glb",
        scale: 45,
        rotation: [0, 0, 0],
    },
    {
        name: "React",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Tailwind CSS",
        modelPath: "/models/tailwind_css.glb",
        scale: 50,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Git",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Philips is a leading Dutch health technology company, founded in 1891, that focuses on improving people's health and well-being through meaningful innovation.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
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
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
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
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
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
        imgPath: "/images/exp4.png",
        logoPath: "/images/logo4.png",
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
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
    {
        name: "logo4",
        imgPath: "/images/logo4.png",
    },
];

const skills = [
    {
        name: "SpringBoot",
        // mentions: "@estherhoward",
        review:
            "Spring Boot simplifies Java-based web application and microservice development through pre-configured setups, embedded servers, and reduced boilerplate code. It is well-suited for building scalable, secure, and cloud-ready REST APIs and enterprise applications. I am currently learning Spring Boot through YouTube resources.",
        imgPath: "/images/sb.png",
    },
    {
        name: "MERN",
        // mentions: "@wadewarren",
        review:
            "The MERN stack—MongoDB, Express.js, React.js, and Node.js—is a JavaScript-based framework used to build dynamic and scalable web applications. I am currently learning these technologies through the online platform 30DC and plan to develop new projects to apply and strengthen these skills.",
        imgPath: "/images/ms.png",
    },
    {
        name: "Ai Tools and Certificates",
        // mentions: "@guyhawkins",
        review:
            "I am actively learning new AI tools to accelerate my development process and improve productivity. Alongside this, I am working on building new projects to apply these tools in real-world scenarios and further honing my AI skills through Google’s free skill courses.",
        imgPath: "/images/aitools.png",
    },
    // {
    //     name: "Marvin McKinney",
    //     mentions: "@marvinmckinney",
    //     review:
    //         "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    //     imgPath: "/images/client5.png",
    // },
    // {
    //     name: "Floyd Miles",
    //     mentions: "@floydmiles",
    //     review:
    //         "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    //     imgPath: "/images/client4.png",
    // },
    // {
    //     name: "Albert Flores",
    //     mentions: "@albertflores",
    //     review:
    //         "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    //     imgPath: "/images/client6.png",
    // },
];

const socialImgs = [
    {
        name: "github",
        url: "https://github.com/LAKSHAYJAIN19?tab=repositories",
        imgPath: "/images/gh.png",
    },
    {
        name: "x",
        url: "https://x.com/Lakshayjntw",
        imgPath: "/images/xlogo.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/lakshayjain19/",
        imgPath: "/images/li.png",
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