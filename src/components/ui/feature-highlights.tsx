
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, BookOpen, Bell } from 'lucide-react';

const FeatureHighlights = () => {
  const features = [
    {
      icon: Search,
      title: 'Explore Careers',
      description: 'Discover career paths based on your interests, stream, and entrance exam preferences with detailed course information.',
      color: 'text-blue-500'
    },
    {
      icon: BookOpen,
      title: 'College Predictions',
      description: 'Get accurate college predictions based on your EAMCET rank, reservation category, and preferred courses.',
      color: 'text-green-500'
    },
    {
      icon: Bell,
      title: 'Exam Alerts',
      description: 'Stay updated with entrance exam dates, deadlines, and important announcements personalized for you.',
      color: 'text-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for Your <span className="text-gradient">Career Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools and resources to help you make informed decisions about your educational and career path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
