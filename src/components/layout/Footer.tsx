
import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gradient">Career Sethu</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Your bridge to the right career. Helping students in Telangana find the perfect educational path based on their interests and exam scores.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Career Sethu. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/careers" className="hover:text-primary transition-colors">Explore Careers</a></li>
              <li><a href="/colleges" className="hover:text-primary transition-colors">College Finder</a></li>
              <li><a href="/notifications" className="hover:text-primary transition-colors">Exam Alerts</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/help" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
