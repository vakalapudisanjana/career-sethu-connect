
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../hooks/use-toast';
import { User } from 'lucide-react';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    class: user?.class || '',
    stream: user?.preferences?.stream || '',
    preferredLocation: user?.preferences?.preferredLocation || '',
    budgetRange: user?.preferences?.budgetRange || '',
    reservationCategory: user?.preferences?.reservationCategory || ''
  });

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p>Please log in to access your profile.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    updateUser({
      name: formData.name,
      email: formData.email,
      class: formData.class,
      preferences: {
        stream: formData.stream,
        preferredLocation: formData.preferredLocation,
        budgetRange: formData.budgetRange,
        reservationCategory: formData.reservationCategory,
        interestedCourses: user.preferences?.interestedCourses || []
      }
    });

    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
          <p className="text-muted-foreground">
            Manage your account information and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <Card>
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Class:</span>
                  <span>{user.class}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Stream:</span>
                  <span>{user.preferences?.stream || 'Not set'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span>{user.preferences?.preferredLocation || 'Not set'}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Edit Profile Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your account details and preferences
                    </CardDescription>
                  </div>
                  {!isEditing && (
                    <Button onClick={() => setIsEditing(true)}>
                      Edit Profile
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="class">Class</Label>
                      <Select 
                        value={formData.class} 
                        onValueChange={(value) => handleInputChange('class', value)}
                        disabled={!isEditing}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10th">10th Grade</SelectItem>
                          <SelectItem value="12th">12th Grade</SelectItem>
                          <SelectItem value="graduation">Graduation</SelectItem>
                          <SelectItem value="postgraduation">Post Graduation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="stream">Stream</Label>
                      <Select 
                        value={formData.stream} 
                        onValueChange={(value) => handleInputChange('stream', value)}
                        disabled={!isEditing}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your stream" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Science">Science</SelectItem>
                          <SelectItem value="Commerce">Commerce</SelectItem>
                          <SelectItem value="Arts">Arts</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Preferred Location</Label>
                      <Select 
                        value={formData.preferredLocation} 
                        onValueChange={(value) => handleInputChange('preferredLocation', value)}
                        disabled={!isEditing}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Telangana">Telangana</SelectItem>
                          <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                          <SelectItem value="Karnataka">Karnataka</SelectItem>
                          <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select 
                        value={formData.budgetRange} 
                        onValueChange={(value) => handleInputChange('budgetRange', value)}
                        disabled={!isEditing}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Under 1 Lakh">Under 1 Lakh</SelectItem>
                          <SelectItem value="1-5 Lakhs">1-5 Lakhs</SelectItem>
                          <SelectItem value="5-10 Lakhs">5-10 Lakhs</SelectItem>
                          <SelectItem value="10+ Lakhs">10+ Lakhs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Reservation Category</Label>
                    <Select 
                      value={formData.reservationCategory} 
                      onValueChange={(value) => handleInputChange('reservationCategory', value)}
                      disabled={!isEditing}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General">General</SelectItem>
                        <SelectItem value="SC">SC</SelectItem>
                        <SelectItem value="ST">ST</SelectItem>
                        <SelectItem value="BC">BC</SelectItem>
                        <SelectItem value="EWS">EWS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {isEditing && (
                    <div className="flex space-x-4">
                      <Button type="submit">
                        Save Changes
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
