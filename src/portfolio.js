/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nikhil Arora",
  title: "Hi, I'm Nikhil",
  subTitle: emoji(
    "Freelance Full Stack Developer | I help businesses build scalable web applications and digital solutions. With 2.5+ years of hands-on experience, I've successfully delivered multiple projects including POS systems, mobile apps, and custom web platforms. I specialize in turning complex business requirements into high-quality, scalable solutions that drive results. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1UPNBeXwDJQ26ei5iN46IFYHsm9AOA2Rb/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/NikhilArora5",
  linkedin: "https://www.linkedin.com/in/nikhilarora6541b91a4/",
  gmail: "devnikhil585@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Expertise",
  subTitle: "I bring a comprehensive technical skill set and proven track record to every client project. Here are the technologies I work with to deliver exceptional results:",
  skills: [
    emoji(
      "⚡ Successfully delivered 8+ production-ready projects across various industries including POS systems, mobile applications, and custom web platforms."
    ),
    emoji(
      "⚡ Optimized server performance by 70% through efficient cron job management and system architecture improvements, reducing operational costs for clients."
    ),
    emoji(
      "⚡ Expert in full-stack development with seamless frontend-backend integration, real-time systems, payment gateway integration, and scalable API design."
    ),
    emoji(
      "⚡ Proven track record of delivering production-ready solutions on schedule, with focus on code quality, scalability, and long-term maintainability."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Next js",
      // fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "React Native",
      // fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Redux Toolkit",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Tailwind css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Socket.io",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fa-brands fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "AWS S3",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "AWS EC2",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Stripe",
      fontAwesomeClassname: "fab fa-stripe"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section - Reframed as Client Engagements

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Glocify Technologies",
      companylogo: require("./assets/images/facebookLogo.png"), // Update with actual logo if available
      date: "January 2024 – Present",
      desc: "Leading development of multiple client projects including POS systems, mobile applications, and custom business solutions. Specialized in payment integrations, real-time systems, and scalable architecture.",
      descBullets: [
        "Developed Pokato - POS platform with Stripe Terminal integration for in-person payments, including merchant onboarding via Stripe Connect OAuth",
        "Built GymMatrix - Comprehensive gym management system with real-time biometric attendance tracking and multi-branch support",
        "Created BroodBox App - Slot booking platform with complex timezone calculations and dynamic quota management",
        "Developed ZeroPrint - Automated URL scanning application with scheduling, notifications, and admin panel",
        "Built CrownPages - Mobile app for custom business page creation with subscription management and team collaboration",
        "Integrated Stripe SDK and webhooks across multiple projects for secure payment processing",
        "Implemented role-based access control (RBAC) systems with global, branch-level, and module-level permissions"
      ]
    },
    {
      role: "Software Developer | MERN Stack",
      company: "Omva Data Solutions",
      companylogo: require("./assets/images/quoraLogo.png"), // Update with actual logo if available
      date: "October 2022 – January 2024",
      desc: "Developed and maintained backend systems for integrated POS and online food ordering platform. Focused on automation, optimization, and seamless payment integrations.",
      descBullets: [
        "Maintained and developed backend for integrated POS machine & online food ordering platform",
        "Automated critical product reports and billing management system, reducing manual work significantly",
        "Optimized cron jobs reducing server load by ~70% and improving report maintainability",
        "Integrated payment gateways and generated bifurcated financial reports for clients",
        "Developed dynamic deposit system for reports customized per client types and requirements"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Client Projects & Case Studies - Reframed for Freelancer Portfolio

const bigProjects = {
  title: "Client Work & Case Studies",
  subtitle: "Real projects I've delivered for clients, showcasing solutions that drive business results",
  projects: [
    {
      image: require("./assets/images/projects/img-1.png"),
      projectName: "Pokato - POS Payment Platform",
      projectDesc: [
        "Comprehensive Point-of-Sale platform enabling businesses to accept secure in-person payments",
        "Integrated Stripe Terminal SDK with S700 internet-connected readers for live payment collection",
        "Implemented Stripe Connect OAuth for seamless merchant onboarding and authorization",
        "Built robust backend APIs for payment intent creation and merchant-Stripe account mapping",
        "Designed future-ready architecture supporting Bluetooth readers and Tap to Pay capabilities"
      ],
      technologies: "Node.js, Next.js, React Native, PostgreSQL, Stripe Terminal, Stripe Connect",
      results: "Enabled businesses to accept in-person payments seamlessly | Secure merchant onboarding | Scalable payment infrastructure",
      footerLink: [
        {
          name: "View Details",
          // url: "https://htmlcss-projects.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/projects/broodboxLogo.png"),
      projectName: "GymMatrix - Gym Management System",
      projectDesc: [
        "Comprehensive gym management application with real-time attendance tracking via biometric devices",
        "Implemented log syncing mechanism to recover missed entries and ensure data accuracy",
        "Built multi-branch organization management with centralized control",
        "Developed sophisticated RBAC system with global, branch-level, and module-level permissions",
        "Created manual attendance entry system for flexibility and backup"
      ],
      technologies: "Node.js, React.js, PostgreSQL, Electron, Tailwind CSS",
      results: "Real-time attendance tracking | Multi-branch support | Advanced permission management",
      footerLink: [
        {
          name: "View Details",
          // url: "https://htmlcss-projects.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/projects/img-1.png"),
      projectName: "A-Board/Tree Drive - Restaurant POS System",
      projectDesc: [
        "POS-based food ordering software for managing in-house and online orders seamlessly",
        "Real-time order synchronization between online platform and POS using Socket.io",
        "Automated financial reporting system with cron jobs for sales, refunds, and revenue tracking",
        "Designed and maintained robust backend APIs handling orders and restaurant operations",
        "Enabled restaurants to manage orders from multiple channels in a unified system"
      ],
      technologies: "Node.js, React.js, Socket.io, MongoDB, Cron Jobs",
      results: "Seamless online-to-POS order sync | Automated financial reporting | Real-time operations",
      footerLink: [
        {
          name: "View Details",
          // url: "https://htmlcss-projects.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/projects/broodboxLogo.png"),
      projectName: "BroodBox - Slot Booking Platform",
      projectDesc: [
        "Sophisticated slot booking platform with multi-region support and complex timezone calculations",
        "Structured booking flow enabling users to select location, resource, and available slots",
        "Integrated Stripe SDK and webhooks for secure payment processing",
        "Dynamic user quota management system that updates automatically on booking and cancellation",
        "Admin dashboard with override capabilities and conflict prevention mechanisms"
      ],
      technologies: "Node.js, React.js, Stripe SDK, Webhooks",
      results: "Multi-region booking with timezone handling | Automated payment processing | Dynamic quota management",
      footerLink: [
        {
          name: "View Details",
          // url: "https://htmlcss-projects.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/projects/coursehive2.png"),
      projectName: "CrownPages - Custom Business Pages",
      projectDesc: [
        "Mobile app enabling users to create custom business pages with unique slugs",
        "Dynamic page creation with pre-built templates (Hero, About, Gallery, FAQ, Features, Contact)",
        "Section-level customization for background colors, text styles, and media",
        "Stripe integration for subscription plans (organization & individual tiers)",
        "License key sharing system for team collaboration and access management",
        "Analytics dashboard to track page visits and user engagement metrics"
      ],
      technologies: "Node.js, Next.js, React Native, PostgreSQL, Stripe",
      results: "Custom business page creation | Subscription management | Team collaboration features | Analytics integration",
      footerLink: [
        {
          name: "View Details",
          // url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/projects/htmlcss1290.png"),
      projectName: "ZeroPrint - Automated URL Scanner",
      projectDesc: [
        "Automated URL scanning application with backend for scheduling and executing scans",
        "Random URL fetching from server with in-app browser for visiting URLs",
        "Instant scan execution and scheduled scans with push notifications",
        "Comprehensive scan history tracking and reporting system",
        "Admin panel with APIs for URL management, JSON file uploads, and daily tips display"
      ],
      technologies: "Node.js, React Native, Backend APIs",
      results: "Automated URL scanning | Scheduling & notifications | Admin management panel",
      footerLink: [
        {
          name: "View Details",
          // url: "https://htmlcss-projects.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/projects/htmlcss1290.png"),
      projectName: "Frontend Templates Collection",
      projectDesc: [
        "Designed and developed 13+ landing pages for various services and themes",
        "Built using pure HTML and CSS with modern, clean design principles",
        "Fully responsive templates optimized for all devices",
        "Production-ready code with clean structure and best practices"
      ],
      technologies: "HTML5, CSS3, Responsive Design",
      results: "13+ Production-ready templates | Fully responsive | Modern design",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://htmlcss-projects.netlify.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I try to write  what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // {
    //   url: "https://nikhilarora.hashnode.dev/array-and-array-methods",
    //   title: "Array and Array Methods",
    //   description:
    //     "Introduction In this Article we will learn about Arrays and array methods with examples. Arrays? Array is a special kind of object, that allows us to store and manage an ordered collection of data items. It can store items of different data types."
    // },
   
    {
      url: "https://nikhilarora.hashnode.dev/markdown-cheat-sheet",
      title: "Markdown Cheat-sheet",
      description:
        "Markdown is a markup language Which uses plain text formatting syntax. It is mostly used for readme files and is intended to convert into structured HTML.        "
    },{
      url: "https://nikhilarora.hashnode.dev/overlaying-color-on-background-image-in-css",
      title: " Overlaying color on background image in CSS",
      description:
        "Hi, i hope you all are doing great. In this blog our aim is to learn how can we overlay color and create fading effects on background image using gradients in css."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's Work Together 💼"),
  subtitle:
    "Have a project in mind? I'm available for new freelance opportunities. Let's discuss how I can help bring your vision to life. I typically respond within 24 hours.",
  // number: "+92-0000000000",
  email_address: "devnikhil585@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// Services Section for Freelancer Portfolio
const servicesSection = {
  title: "Services I Offer",
  subtitle: "Comprehensive full-stack development services to help your business grow",
  services: [
    {
      title: "Custom Web Application Development",
      description: "Build scalable, responsive web applications tailored to your business needs using modern technologies like React, Next.js, and Node.js"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native for iOS and Android with seamless backend integration"
    },
    {
      title: "POS System Development",
      description: "Complete Point-of-Sale solutions with payment gateway integration, inventory management, and real-time synchronization"
    },
    {
      title: "Payment Gateway Integration",
      description: "Expert integration of Stripe, payment processing, subscription management, and secure transaction handling"
    },
    {
      title: "Backend API Development",
      description: "Robust RESTful APIs, real-time systems with Socket.io, database design, and server optimization"
    },
    {
      title: "E-commerce Solutions",
      description: "Full-featured e-commerce platforms with product management, order processing, and payment integration"
    },
    {
      title: "System Optimization & Automation",
      description: "Performance optimization, automated reporting, cron job management, and server load reduction"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance, bug fixes, feature enhancements, and technical support for existing applications"
    }
  ],
  ownershipCommitments: [
    "I take full ownership of your project from concept to deployment, ensuring every detail meets your business goals",
    "Your product's success is my priority - I think beyond code to understand how it impacts your business",
    "Proactive communication with regular updates, so you're always informed about progress and decisions",
    "I deliver production-ready code that's maintainable, scalable, and built for long-term success",
    "Post-launch support and optimization to ensure your product continues to perform at its best",
    "I treat your project as if it were my own business - with care, attention to detail, and commitment to excellence"
  ],
  display: true // Set to true to display services section
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  servicesSection
};
