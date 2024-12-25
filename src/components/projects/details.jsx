
export const projectsData = [
  {
    id: "sucasa",
    title: "Sucasa",
    imageUrl: "/project-image.jpg",
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
  }
  // Add more projects as needed
];