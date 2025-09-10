import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  title: string;
  excerpt: string;
  category: string;
  type: "blog" | "article";
  readTime: string;
  date: string;
  slug: string;
  className?: string;
}

const ContentCard = ({ 
  title, 
  excerpt, 
  category, 
  type, 
  readTime, 
  date, 
  slug,
  className 
}: ContentCardProps) => {
  return (
    <Card className={cn(
      "group cursor-pointer bg-gradient-card shadow-elegant transition-all duration-300 hover:shadow-hover hover:-translate-y-1",
      className
    )}>
      <Link to={`/${type}s/${category.toLowerCase()}/${slug}`}>
        <CardHeader className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant={type === "blog" ? "default" : "secondary"}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
          </div>
          
          <h3 className="text-xl font-semibold leading-tight text-card-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-muted-foreground line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{date}</span>
            <span>{readTime}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ContentCard;