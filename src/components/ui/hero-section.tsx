
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Career Sethu</span>
              <br />
              <span className="text-foreground">Your Bridge to the Right Career</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover your perfect career path with personalized guidance, college predictions based on entrance exam scores, and comprehensive career exploration for students in Telangana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/careers">
                <Button size="lg" className="px-8 py-6 text-lg font-semibold">
                  Start Exploring
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/colleges">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold">
                  Find Colleges
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Career Options</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Colleges</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Entrance Exams</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
