
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { mockCourses } from '../data/mockData';
import { Search, BookOpen, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareerExplorer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStream, setSelectedStream] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');

  const filteredCourses = useMemo(() => {
    return mockCourses.filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStream = !selectedStream || course.stream === selectedStream;
      const matchesDuration = !selectedDuration || course.duration.includes(selectedDuration);
      
      return matchesSearch && matchesStream && matchesDuration;
    });
  }, [searchTerm, selectedStream, selectedDuration]);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Explore Career Options</h1>
          <p className="text-muted-foreground">
            Discover courses and career paths that match your interests and goals
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Find Your Perfect Course</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedStream} onValueChange={setSelectedStream}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Stream" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Streams</SelectItem>
                  <SelectItem value="Science">Science</SelectItem>
                  <SelectItem value="Commerce">Commerce</SelectItem>
                  <SelectItem value="Arts">Arts</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger>
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Duration</SelectItem>
                  <SelectItem value="3">3 Years</SelectItem>
                  <SelectItem value="4">4 Years</SelectItem>
                  <SelectItem value="5">5+ Years</SelectItem>
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedStream('');
                  setSelectedDuration('');
                }}
              >
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight mb-2">{course.name}</CardTitle>
                    <CardDescription className="text-sm">{course.description}</CardDescription>
                  </div>
                  <Badge variant="secondary">{course.stream}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{course.fees}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-2">Eligibility:</h4>
                    <p className="text-sm text-muted-foreground">{course.eligibility}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Career Paths:</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.careerPaths.slice(0, 3).map((path, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {path}
                        </Badge>
                      ))}
                      {course.careerPaths.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.careerPaths.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Link to={`/course/${course.id}`}>
                    <Button className="w-full" size="sm">
                      <BookOpen className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or filters
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CareerExplorer;
