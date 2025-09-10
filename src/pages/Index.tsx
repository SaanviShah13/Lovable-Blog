import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutAuthor from "@/components/AboutAuthor";
import ContactSection from "@/components/ContactSection";
import ContentCard from "@/components/ContentCard";
import { contentData } from "@/data/content";

const Index = () => {
  const featuredContent = contentData.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Featured Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most recent explorations into history, philosophy, and economics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.map((item) => (
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
      </section>

      <AboutAuthor />
      
      <ContactSection />
    </div>
  );
};

export default Index;
