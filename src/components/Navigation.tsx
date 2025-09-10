import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown, History, Brain, TrendingUp } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const categories = [
    { 
      name: "history", 
      title: "History", 
      icon: History,
      description: "Exploring past events and their impact"
    },
    { 
      name: "philosophy", 
      title: "Philosophy", 
      icon: Brain,
      description: "Examining fundamental questions of existence"
    },
    { 
      name: "economics", 
      title: "Economics", 
      icon: TrendingUp,
      description: "Understanding economic systems and markets"
    },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary">
            Intellectual Discourse
          </Link>
          
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors hover:text-accent rounded-md",
                      location.pathname === "/"
                        ? "text-accent"
                        : "text-muted-foreground"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                      location.pathname.startsWith("/blogs")
                        ? "text-accent"
                        : "text-muted-foreground"
                    )}
                  >
                    <Link to="/blogs" className="flex items-center gap-1">
                      Blogs
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-card border shadow-hover p-4 w-80 z-50">
                    <div className="space-y-3">
                      <div className="pb-2 border-b">
                        <h4 className="font-semibold text-primary">Blog Categories</h4>
                        <p className="text-sm text-muted-foreground">Explore our thoughtful blog posts</p>
                      </div>
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          to={`/blogs/${category.name}`}
                          className="block p-3 rounded-md hover:bg-secondary/50 transition-colors group"
                        >
                          <div className="flex items-start gap-3">
                            <category.icon className="h-5 w-5 text-accent mt-0.5" />
                            <div>
                              <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                                {category.title}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {category.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                      location.pathname.startsWith("/articles")
                        ? "text-accent"
                        : "text-muted-foreground"
                    )}
                  >
                    <Link to="/articles" className="flex items-center gap-1">
                      Articles
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-card border shadow-hover p-4 w-80 z-50">
                    <div className="space-y-3">
                      <div className="pb-2 border-b">
                        <h4 className="font-semibold text-primary">Article Categories</h4>
                        <p className="text-sm text-muted-foreground">In-depth scholarly analysis</p>
                      </div>
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          to={`/articles/${category.name}`}
                          className="block p-3 rounded-md hover:bg-secondary/50 transition-colors group"
                        >
                          <div className="flex items-start gap-3">
                            <category.icon className="h-5 w-5 text-accent mt-0.5" />
                            <div>
                              <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                                {category.title}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {category.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;