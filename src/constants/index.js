import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Competitive Coder",
      icon: mobile,
    },
    {
      title: "React Js Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Node.js, React Js.",
      company_name: "Web App for Video calling",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2023 - March 2023",
      points: 
      ["The purpose of this Node.js application is to provide a seamless and reliable platform for users to participate in video calls with multiple participants. The application is designed to facilitate real-time communication between users, enabling them to collaborate and connect from anywhere in the world.",
      "The application allows multiple participants to join a video call simultaneously, making it easy for teams or groups to collaborate and connect.",
      "The application facilitates real-time communication between participants, allowing for seamless conversations and the ability to share ideas and feedback in real-time.",
      "The video calling application is built using a client-server architecture, with the server component running on Node.js. The application leverages WebRTC (Web Real-Time Communication) technology to enable real-time communication between participants."
        ,
      ],
    },
    {
      title: "React.Js",
      company_name: "Codepen Clone",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "March 2023 - April 2023",
      points: [
        "Codepen is a popular online platform that allows developers to create and share front-end code snippets, including HTML, CSS, and JavaScript. In this project, I have built a clone of Codepen using React.js, with a focus on providing a user-friendly and intuitive interface that enables users to create, save, and share their own code snippets",
        "One of the key features of the application is the ability to save and share code snippets. Users can create an account on the platform, which enables them to save their code snippets to the cloud and access them from any device. They can also share their code snippets with others by generating a unique URL, which can be shared via social media or other channels.",
        "Overall, the Codepen clone built with React.js is designed to provide a powerful and intuitive platform for developers to create and share front-end code snippets, with a range of customization options and cloud-based storage for added convenience and accessibility.",
        ,
      ],
    },
    
    {
      title: "React Js., Redux, Rapid API",
      company_name: "Music Player Web APP",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "A web application built using React JS and Redust! With this player, you can enjoy your favorite tunes while experiencing a sleek and modern interface.",
        "One of the key benefits of this player is its user-friendly design, which makes it easy to navigate and control your music playback. Whether you're browsing through your library, searching for a specific track, or adjusting the volume, you'll find that the interface is intuitive and straightforward.",
        "Under the hood, this player relies on the Redust library to manage its state and control its behavior. This allows for efficient and responsive performance, as well as easy customization and extensibility.",
      ],
    },
  /*
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }*/
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CodePen",
      description:
        "Codepen is a popular online platform that allows developers to create and share front-end code snippets, including HTML, CSS, and JavaScript. In this project, I have built a clone of Codepen using React.js, with a focus on providing a user-friendly and intuitive interface that enables users to create, save, and share their own code snippets",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Web App for Video Chats",
      description:
        "The purpose of this Node.js application is to provide a seamless and reliable platform for users to participate in video calls with multiple participants. The application is designed to facilitate real-time communication between users, enabling them to collaborate and connect from anywhere in the world.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Node.JS",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Music Player",
      description:
        "A web application built using React JS and Redust! With this player, you can enjoy your favorite tunes while experiencing a sleek and modern interface.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "Rapid API",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "purple-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };