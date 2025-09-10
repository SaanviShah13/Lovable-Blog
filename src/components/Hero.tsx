import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-primary-foreground md:text-6xl">
            Exploring Ideas That
            <span className="block text-accent"> Shape Our World</span>
          </h1>
          
          <p className="mb-8 text-xl text-primary-foreground/90 md:text-2xl">
            Deep dives into history, philosophy, and economics through 
            thoughtful blogs and scholarly articles
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/blogs/philosophy">Read Latest Blogs</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/articles">Browse Articles</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl"></div>
    </section>
  );
};

export default Hero;