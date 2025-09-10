import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import { contentData } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PostDetail = () => {
  const { type, category, slug } = useParams<{ 
    type: string; 
    category: string; 
    slug: string; 
  }>();
  
  const post = contentData.find(
    item => item.slug === slug && item.category === category && 
    (type === "blogs" ? item.type === "blog" : item.type === "article")
  );

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Post Not Found</h1>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link to={type === "blogs" ? `/blogs/${category}` : "/articles"}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {type === "blogs" ? `${category} blogs` : "articles"}
            </Link>
          </Button>

          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant={post.type === "blog" ? "default" : "secondary"}>
                    {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                  </Badge>
                  <Badge variant="outline">
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </Badge>
                </div>
                
                <h1 className="text-4xl font-bold text-primary mb-4 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8 font-medium">
                  {post.excerpt}
                </p>
                
                <div className="text-foreground leading-relaxed space-y-6">
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

export default PostDetail;