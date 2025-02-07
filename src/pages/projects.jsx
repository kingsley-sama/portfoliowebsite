import React from "react"

const Avatar = ({ src, alt, fallback }) => (
  <div className="h-6 w-6 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
    {src ? (
      <img src={src || "/placeholder.svg"} alt={alt} className="h-full w-full object-cover" />
    ) : (
      <span className="text-xs font-medium text-gray-500">{fallback}</span>
    )}
  </div>
)

const BlogCard = ({ post }) => (
  <article className="group relative h-[400px] cursor-pointer overflow-hidden rounded-lg">
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
      style={{ backgroundImage: `url(${post.image})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/0" />

    {/* Description overlay */}
    <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div className="rounded-lg bg-black/70 p-4 text-center text-white">
        <p>{post.description}</p>
      </div>
    </div>

    <div className="absolute inset-0 flex flex-col justify-end p-6">
      <div className="flex items-center gap-2 text-sm text-white/90">
        <time dateTime={post.date}>{post.date}</time>
        <span>·</span>
        <div className="flex items-center gap-2">
          <Avatar src={post.author.image} alt={post.author.name} fallback={post.author.name[0]} />
          <span>{post.author.name}</span>
        </div>
      </div>
      <h2 className="mt-2 text-xl font-semibold text-white">{post.title}</h2>
    </div>
  </article>
)

const BlogGrid = () => {
  const posts = [
    {
      title: "Boost your conversion rate",
      date: "Mar 16, 2020",
      author: {
        name: "Michael Foster",
        image: "/placeholder.svg?height=40&width=40",
      },
      image:
        "/img/steptodown.com504145.jpg",
      description: "Learn effective strategies to increase your website's conversion rate and drive more sales.",
    },
    {
      title: "How to use search engine optimization to drive sales",
      date: "Mar 10, 2020",
      author: {
        name: "Lindsay Walton",
        image: "/placeholder.svg?height=40&width=40",
      },
      image:"/img/steptodown.com504145.jpg",
      description: "Discover powerful SEO techniques that can boost your online visibility and increase your sales.",
    },
    {
      title: "Improve your customer experience",
      date: "Feb 12, 2020",
      author: {
        name: "Tom Cook",
        image: "/placeholder.svg?height=40&width=40",
      },
      image:
        "public/assets/banner.png",
      description:
        "Explore ways to enhance your customer experience and build lasting relationships with your audience.",
    },
  ]

  return (
    <div className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </div>
  )
}

export default BlogGrid

