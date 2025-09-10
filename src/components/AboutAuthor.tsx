import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award } from "lucide-react";

const AboutAuthor = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              About the Author
            </Badge>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Exploring Ideas That Matter
            </h2>
            <p className="text-lg text-muted-foreground">
              A passionate researcher and writer dedicated to making complex ideas accessible
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Card className="shadow-elegant">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold text-lg">Academic Background</h3>
                  </div>
                  <p className="text-muted-foreground">
                    With advanced degrees in History and Philosophy, I bring rigorous academic 
                    training to the exploration of complex ideas that have shaped human civilization.
                  </p>
                  
                  <div className="flex items-center gap-3 mt-6 mb-4">
                    <Users className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold text-lg">Research Focus</h3>
                  </div>
                  <p className="text-muted-foreground">
                    My work focuses on the intersection of historical events, philosophical thought, 
                    and economic systems, examining how these domains influence each other across time.
                  </p>

                  <div className="flex items-center gap-3 mt-6 mb-4">
                    <Award className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold text-lg">Mission</h3>
                  </div>
                  <p className="text-muted-foreground">
                    To make intellectual discourse accessible to curious minds, bridging the gap 
                    between academic research and public understanding of crucial ideas.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 md:order-2 text-center">
              <div className="bg-gradient-hero rounded-full w-48 h-48 mx-auto mb-6 flex items-center justify-center">
                <div className="text-6xl text-primary-foreground">📚</div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Dr. Alexandria Scholar</h3>
              <p className="text-muted-foreground mb-4">
                Historian, Philosopher & Economic Thinker
              </p>
              <div className="flex justify-center gap-2 flex-wrap">
                <Badge variant="secondary">PhD History</Badge>
                <Badge variant="secondary">MA Philosophy</Badge>
                <Badge variant="secondary">Economic Research</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;