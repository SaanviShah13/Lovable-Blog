import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Have thoughts on any of the topics discussed? I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-accent" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Ready to discuss ideas that matter
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Whether you're interested in historical analysis, philosophical debates, 
                  or economic insights, I'm always open to meaningful conversations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div className="space-y-2">
                  <Textarea 
                    placeholder="Your message..."
                    className="min-h-[100px]"
                  />
                </div>
                <Button className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;