import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import ContentCard from "@/components/ContentCard";
import { contentData } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { History, Brain, TrendingUp } from "lucide-react";

const BlogsHome = () => {
  const blogs = contentData.filter(item => item.type === "blog");
  const categories = [
    {
      name: "history",
      title: "History",
      description: "Exploring past events and their lasting impact on our world",
      icon: History,
      posts: blogs.filter(item => item.category === "history")
    },
    {
      name: "philosophy", 
      title: "Philosophy",
      description: "Examining fundamental questions about existence, knowledge, and ethics",
      icon: Brain,
      posts: blogs.filter(item => item.category === "philosophy")
    },
    {
      name: "economics",
      title: "Economics", 
      description: "Understanding economic systems, markets, and financial behavior",
      icon: TrendingUp,
      posts: blogs.filter(item => item.category === "economics")
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Blog Collection
          </Badge>
          <h1 className="text-4xl font-bold text-primary mb-4">
            Thoughtful Blogs
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Engaging explorations of history, philosophy, and economics through accessible blog posts
          </p>
        </div>

        {/* Category Sections */}
        {categories.map((category) => (
          <section key={category.name} className="mb-16">
            <Card className="shadow-elegant mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-accent" />
                  <div>
                    <CardTitle className="text-2xl">
                      <Link 
                        to={`/blogs/${category.name}`}
                        className="hover:text-accent transition-colors"
                      >
                        {category.title} Blogs
                      </Link>
                    </CardTitle>
                    <p className="text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.posts.map((post) => (
                <ContentCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  type={post.type}
                  readTime={post.readTime}
                  date={post.date}
                  slug={post.slug}
                />
              ))}
            </div>

            {category.posts.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No {category.title.toLowerCase()} blogs available yet.</p>
              </div>
            )}
          </section>
        ))}
      </div>

      <ContactSection />
    </div>
  );
};

export default BlogsHome;