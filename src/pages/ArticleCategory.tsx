import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import ContentCard from "@/components/ContentCard";
import { contentData } from "@/data/content";
import { Badge } from "@/components/ui/badge";

const ArticleCategory = () => {
  const { category } = useParams<{ category: string }>();
  
  const filteredContent = contentData.filter(
    item => item.category === category && item.type === "article"
  );

  const categoryTitle = category?.charAt(0).toUpperCase() + category?.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Article Category
          </Badge>
          <h1 className="text-4xl font-bold text-primary mb-4">
            {categoryTitle} Articles
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In-depth scholarly articles exploring {category} through rigorous analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredContent.map((item) => (
            <ContentCard
              key={item.id}
              title={item.title}
              excerpt={item.excerpt}
              category={item.category}
              type={item.type}
              readTime={item.readTime}
              date={item.date}
              slug={item.slug}
            />
          ))}
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

export default ArticleCategory;