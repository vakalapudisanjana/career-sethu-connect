
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Bell, User } from 'lucide-react';
import { mockNotifications } from '../data/mockData';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p>Please log in to access your dashboard.</p>
            <Link to="/login">
              <Button className="mt-4">Login</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const recentNotifications = mockNotifications.filter(n => !n.isRead).slice(0, 3);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground">
            Continue your career exploration journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link to="/careers">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Search className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Explore Careers</h3>
                <p className="text-sm text-muted-foreground">Find your perfect career path</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/colleges">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">College Finder</h3>
                <p className="text-sm text-muted-foreground">Predict your college options</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/notifications">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Bell className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Exam Alerts</h3>
                <p className="text-sm text-muted-foreground">Stay updated with deadlines</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/profile">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <User className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Profile</h3>
                <p className="text-sm text-muted-foreground">Update your preferences</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
              <CardDescription>
                Important updates and deadlines for you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentNotifications.map((notification) => (
                  <div key={notification.id} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Bell className="h-5 w-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{notification.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{notification.description}</p>
                    </div>
                  </div>
                ))}
                <Link to="/notifications">
                  <Button variant="outline" className="w-full">
                    View All Notifications
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common tasks to help you explore careers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Link to="/careers?stream=Science">
                  <Button variant="outline" className="w-full justify-start">
                    <Search className="mr-2 h-4 w-4" />
                    Explore Science Careers
                  </Button>
                </Link>
                <Link to="/colleges?exam=EAMCET">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    EAMCET College Predictor
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Update Preferences
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
