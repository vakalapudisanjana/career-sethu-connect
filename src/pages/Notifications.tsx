
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockNotifications } from '../data/mockData';
import { Bell, Calendar, AlertCircle, Info } from 'lucide-react';

const Notifications = () => {
  const [notifications, setNotifications] = useState(mockNotifications);

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'exam': return Calendar;
      case 'deadline': return AlertCircle;
      case 'announcement': return Info;
      default: return Bell;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'exam': return 'text-blue-500';
      case 'deadline': return 'text-red-500';
      case 'announcement': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Notifications</h1>
            <p className="text-muted-foreground">
              Stay updated with exam alerts and important announcements
            </p>
          </div>
          {unreadCount > 0 && (
            <Button onClick={markAllAsRead} variant="outline">
              Mark all as read ({unreadCount})
            </Button>
          )}
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => {
            const Icon = getIcon(notification.type);
            const iconColor = getTypeColor(notification.type);
            
            return (
              <Card 
                key={notification.id} 
                className={`transition-all hover:shadow-md ${
                  !notification.isRead ? 'border-primary/20 bg-primary/5' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-full bg-muted ${iconColor}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">
                            {notification.title}
                            {!notification.isRead && (
                              <Badge className="ml-2" variant="secondary">
                                New
                              </Badge>
                            )}
                          </h3>
                          <p className="text-muted-foreground mb-2">
                            {notification.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>
                              {new Date(notification.date).toLocaleDateString('en-IN', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {notification.type}
                            </Badge>
                          </div>
                        </div>
                        
                        {!notification.isRead && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                          >
                            Mark as read
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {notifications.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No notifications</h3>
              <p className="text-muted-foreground">
                You're all caught up! Check back later for updates.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Notifications;
