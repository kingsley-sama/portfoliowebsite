
export const projectsData = [
  {
    id: "sucasa",
    title: "Sucasa",
    imageUrl: "/projects_images/sucasa.png",
    userStory: "Your user story here",
    techStack: "React, Node.js, MongoDB",
    liveUrl: "https://example.com",
    
    // Competitor Analysis Data
    competitorAnalysis: {
      description: "Although our app is something that hasn't been done before, we wanted to take a closer look at the companies that have attempted to enhance their in-person shopping experience, whether through integrating coffee shops or juice bars within their retail space or by hosting engaging events, and examine their levels of success or failure.",
      competitors: [
        {
          name: "lululemon",
          logo: "/placeholder.svg?height=50&width=150",
          image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop",
        },
        {
          name: "GYMSHARK",
          logo: "/placeholder.svg?height=50&width=150",
          image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=600&fit=crop",
        },
        {
          name: "manifest",
          logo: "/placeholder.svg?height=50&width=150",
          image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=600&fit=crop",
        }
      ]
    },
    
    // Problem Discovery Data
    problemDiscovery: {
      paragraphs: [
        "After COVID-19, we observed a notable shift in people's desire for authentic, real-life connections. However, the available options for such interactions were found lacking. Traditional spaces like co-working environments, coffee shops, gyms, and bars, while popular, often provided limited experiences that felt somewhat disconnected and independent. Recognizing this social need for meaningful connections, we aimed to address these challenges specifically within brick-and-mortar retail spaces.",
        "On the other hand, a significant challenge emerged within the realm of online shopping experiences. Brands increasingly converted their physical stores into marketing channels to drive sales, engagement, and gather insights into customer preferences. However, a crucial gap existed in how these brands captured and analyzed in-store interactions. With a predominant focus on optimizing the online shopping journey, the real-life engagement happening within physical stores often went unnoticed and underutilized."
      ],
      images: [
        {
          src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop",
          alt: "Illustration of two people using laptops back to back"
        },
        {
          src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop",
          alt: "Illustration of hands interacting with analytics dashboard"
        }
      ]
    },
    
    collaborators: [
      {
        name: "Alex Johnson",
        role: "Lead UX Designer",
      },
      {
        name: "Sam Lee",
        role: "Frontend Developer",
      },
      {
        name: "Taylor Swift",
        role: "Project Manager",
      },
      {
        name: "Jordan Patel",
        role: "UI Designer",
      },
      {
        name: "Casey Morgan",
        role: "Backend Developer",
      }
    ]
  },
    {
      id: "simpleshell",
      title: "Simple Shell",
      imageUrl: "/simple-shell-image.jpg",
      userStory: "This project aims to build a custom UNIX shell interpreter from scratch, helping learners understand UNIX system operations and system call functionalities.",
      techStack: "C Programming, UNIX System Calls",
      liveUrl: null, // No live URL since it's a CLI project
      
      // Competitor Analysis Data
      competitorAnalysis: {
        description: "While there are many shell implementations, this project focuses on providing a hands-on approach to understanding core UNIX system functionality. We drew inspiration from existing shells like bash and zsh, analyzing their features and simplifying them for educational purposes.",
        competitors: [
          {
            name: "bash",
            logo: "/placeholder.svg?height=50&width=150",
            image: "https://images.unsplash.com/photo-1581092580498-38cb7c1b3d14?w=800&h=600&fit=crop",
          },
          {
            name: "zsh",
            logo: "/placeholder.svg?height=50&width=150",
            image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&h=600&fit=crop",
          },
          {
            name: "fish",
            logo: "/placeholder.svg?height=50&width=150",
            image: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=800&h=600&fit=crop",
          }
        ]
      },
      
      // Problem Discovery Data
      problemDiscovery: {
        paragraphs: [
          "Building a shell from scratch allows developers to demystify how UNIX systems operate and how commands are processed at a fundamental level. Existing shells often hide these intricate details, leaving developers unaware of the underlying mechanics.",
          "Many educational resources explain shell functionality theoretically, but practical implementations are scarce. This project bridges the gap, offering an opportunity to learn through coding and debugging real-world functionality."
        ],
        images: [
          {
            src: "https://images.unsplash.com/photo-1603570411690-5c6e4e1e6f20?w=800&h=600&fit=crop",
            alt: "Illustration of shell commands being executed",
          },
          {
            src: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1c?w=800&h=600&fit=crop",
            alt: "Developer working on UNIX shell project",
          }
        ]
      },
      
      collaborators: [
        {
          name: "Gift Aghaulor",
          role: "Core Developer",
        },
        {
          name: "Kingsley Okpo",
          role: "Lead Developer",
        }
      ],
      
      // Functions and System Calls
      functionsAndSystemCalls: [
        "access", "chdir", "close", "closedir", "execve", "exit", "_exit", "fflush",
        "fork", "free", "getcwd", "getline", "getpid", "isatty", "kill", "malloc",
        "open", "opendir", "perror", "read", "readdir", "signal", "stat", "lstat",
        "fstat", "*strtok", "wait", "waitpid", "wait3", "wait4", "write"
      ],
      
      // Contribution Guide
      contributionGuide: {
        steps: [
          "Fork the Repository: Start by forking the repository to your GitHub account.",
          "Clone your Fork: Clone the forked repository to your local machine using git clone.",
          "Explore and Implement: Review the source code and implement changes by adding new features or creating a new one.",
          "Test your Implementation: Test your code without changing or affecting its functionality.",
          "Create Pull Request: Submit a well-documented pull request with reasons for improvements."
        ],
        example: `
          git clone https://github.com/your-username/custom-simple_shell.git
          cd custom-simple_shell
          # Start coding and make it your own!
        `
      },
      
      resources: [
        {
          name: "Shell Man Page",
          url: "https://man7.org/linux/man-pages/man1/sh.1.html",
        },
        {
          name: "C Programming",
          url: "https://en.wikipedia.org/wiki/C_(programming_language)",
        },
        {
          name: "Unix Shell",
          url: "https://en.wikipedia.org/wiki/Unix_shell",
        }
      ]
    },
    {
      id: "oderasbm",
      title: "Odera School of Business & Management (OSBM)",
      imageUrl: "/osbm-website-image.jpg",
      userStory: "Designed and developed a professional website for OSBM, showcasing its extensive range of professional development courses and highlighting its commitment to enhancing individual and organizational capacities.",
      techStack: "HTML, CSS, JavaScript, React, Node.js",
      liveUrl: "https://osbm-example.com",
      
      // Competitor Analysis Data
      competitorAnalysis: {
        description: "The website was developed to provide a modern and engaging platform for professional training services. We reviewed similar platforms offering business and management training to identify key features and differentiate OSBM's offerings.",
        competitors: [
          {
            name: "Coursera",
            logo: "/placeholder.svg?height=50&width=150",
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop",
          },
          {
            name: "LinkedIn Learning",
            logo: "/placeholder.svg?height=50&width=150",
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&h=600&fit=crop",
          },
          {
            name: "Udemy",
            logo: "/placeholder.svg?height=50&width=150",
            image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1c?w=800&h=600&fit=crop",
          }
        ]
      },
      
      // Problem Discovery Data
      problemDiscovery: {
        paragraphs: [
          "Many individuals and organizations struggle to find training programs that combine practicality with strategic insights. OSBM fills this gap by offering tailored courses designed to enhance leadership, management, and technical skills across various organizational levels.",
          "While online learning platforms are widely available, OSBM stands out by providing highly practical and interactive training experiences, ensuring participants can immediately apply what they learn to their work environments."
        ],
        images: [
          {
            src: "https://images.unsplash.com/photo-1555421689-491a3979f1d5?w=800&h=600&fit=crop",
            alt: "Illustration of a training session at OSBM",
          },
          {
            src: "https://images.unsplash.com/photo-1555421689-491a3979f1d5?w=800&h=600&fit=crop",
            alt: "Illustration of professionals collaborating during a workshop",
          }
        ]
      },
      
      collaborators: [
        {
          name: "Kingsley Okpo",
          role: "Full Stack Developer",
        },
        {
          name: "Mrs Doris Ojo",
          role: "Founder & Content Strategist",
        }
      ],
      
      // Features and Offerings
      featuresAndOfferings: [
        "Leadership and Management Training",
        "Project Management",
        "IT Service Management",
        "Business Consulting",
        "Business Analytics",
        "Data Science and Machine Learning",
        "Sales and Customer Service",
        "Small Business Management",
        "Finance Skills",
        "Graduate Employability Programs"
      ],
      
      // Founder Highlight
      founder: {
        name: "Mrs Doris Ojo",
        bio: "Mrs Doris Ojo brings extensive experience in leadership, international strategic and change management, soft skills, and IT training. Her passion for learning and development drives OSBM's mission to empower individuals and organizations."
      },
      
      resources: [
        {
          name: "OSBM Official Website",
          url: "https://osbm-example.com",
        },
        {
          name: "Leadership and Management Resources",
          url: "https://example-leadership-resources.com",
        }
      ]
    },

  
];