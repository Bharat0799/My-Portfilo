import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success('Message sent successfully! I will get back to you soon.');
    form.reset();
  }

  return (
    <section id="contact" className="section-padding bg-background section-light relative scroll-mt-24 md:scroll-mt-32">
      <div className="container-padding max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 tracking-tighter">
              Let's build something <span className="text-primary">meaningful</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-[500px] leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col gap-8">
              <a href="mailto:hello@premiumportfolio.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <Mail className="w-6 h-6 text-foreground group-hover:text-dark" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground font-bold">Email</p>
                  <p className="text-lg font-bold">hello@premiumportfolio.com</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <Linkedin className="w-6 h-6 text-foreground group-hover:text-dark" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground font-bold">LinkedIn</p>
                  <p className="text-lg font-bold">linkedin.com/in/founder</p>
                </div>
              </a>

              <a href="https://github.com/Bharat0799" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <Github className="w-6 h-6 text-foreground group-hover:text-dark" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground font-bold">GitHub</p>
                  <p className="text-lg font-bold">github.com/Bharat0799</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[32px] p-8 md:p-12 border border-border card-elevation"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="h-14 bg-muted/50 border-border focus:ring-primary focus:border-primary rounded-xl" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="h-14 bg-muted/50 border-border focus:ring-primary focus:border-primary rounded-xl" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Project Inquiry" {...field} className="h-14 bg-muted/50 border-border focus:ring-primary focus:border-primary rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          {...field} 
                          className="min-h-[150px] bg-muted/50 border-border focus:ring-primary focus:border-primary rounded-xl resize-none" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-dark text-white hover:bg-primary hover:text-dark transition-all duration-500 h-16 rounded-button text-lg font-bold group">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
