
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { mockColleges } from '../data/mockData';
import { Search, MapPin, Users, DollarSign } from 'lucide-react';

const CollegeFinder = () => {
  const [examName, setExamName] = useState('');
  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
  };

  const getEligibleColleges = () => {
    if (!rank) return [];
    
    const userRank = parseInt(rank);
    return mockColleges.filter(college => {
      const cutoffMultiplier = getCutoffMultiplier(category);
      const adjustedCutoff = college.cutoffRank * cutoffMultiplier;
      return userRank <= adjustedCutoff;
    });
  };

  const getCutoffMultiplier = (category: string) => {
    switch (category) {
      case 'SC': return 1.5;
      case 'ST': return 1.8;
      case 'BC': return 1.2;
      case 'EWS': return 1.1;
      default: return 1.0; // General
    }
  };

  const eligibleColleges = getEligibleColleges();

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">College Finder</h1>
          <p className="text-muted-foreground">
            Find colleges based on your entrance exam rank and reservation category
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Enter Your Exam Details</CardTitle>
            <CardDescription>
              Get personalized college predictions based on your performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="exam">Entrance Exam</Label>
                <Select value={examName} onValueChange={setExamName}>
                  <SelectTrigger id="exam">
                    <SelectValue placeholder="Select exam" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EAMCET">TS EAMCET</SelectItem>
                    <SelectItem value="JEE">JEE Main</SelectItem>
                    <SelectItem value="NEET">NEET</SelectItem>
                    <SelectItem value="ICET">TS ICET</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rank">Your Rank</Label>
                <Input
                  id="rank"
                  type="number"
                  placeholder="Enter your rank"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Reservation Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger id="category">
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

              <div className="flex items-end">
                <Button 
                  onClick={handleSearch} 
                  className="w-full"
                  disabled={!examName || !rank || !category}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Find Colleges
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {showResults && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Colleges for {category} Category (Rank: {rank})
              </h2>
              <p className="text-muted-foreground">
                {eligibleColleges.length} colleges found based on your criteria
              </p>
            </div>

            {eligibleColleges.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {eligibleColleges.map((college) => (
                  <Card key={college.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{college.name}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {college.location}
                          </CardDescription>
                        </div>
                        <Badge variant={college.type === 'Government' ? 'default' : 'secondary'}>
                          {college.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <span>{college.fees}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{college.seatsAvailable} seats</span>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-sm mb-2">Available Courses:</h4>
                          <div className="flex flex-wrap gap-1">
                            {college.courses.slice(0, 3).map((course, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {course}
                              </Badge>
                            ))}
                            {college.courses.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{college.courses.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-sm mb-2">Last Year Cutoff:</h4>
                          <p className="text-sm text-muted-foreground">
                            Rank {college.cutoffRank} (General Category)
                          </p>
                        </div>

                        <div className="pt-2">
                          <div className="text-xs text-muted-foreground mb-2">Seat Distribution:</div>
                          <div className="grid grid-cols-5 gap-1 text-xs">
                            <div className="text-center">
                              <div className="font-medium">{college.reservationQuota.general}%</div>
                              <div className="text-muted-foreground">Gen</div>
                            </div>
                            <div className="text-center">
                              <div className="font-medium">{college.reservationQuota.sc}%</div>
                              <div className="text-muted-foreground">SC</div>
                            </div>
                            <div className="text-center">
                              <div className="font-medium">{college.reservationQuota.st}%</div>
                              <div className="text-muted-foreground">ST</div>
                            </div>
                            <div className="text-center">
                              <div className="font-medium">{college.reservationQuota.bc}%</div>
                              <div className="text-muted-foreground">BC</div>
                            </div>
                            <div className="text-center">
                              <div className="font-medium">{college.reservationQuota.ews}%</div>
                              <div className="text-muted-foreground">EWS</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No colleges found</h3>
                  <p className="text-muted-foreground">
                    Based on your rank and category, no colleges are currently available. 
                    Try checking with a different category or rank range.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeFinder;
