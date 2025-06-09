
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id'> & { password: string }) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('careerSethuUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - in real app, this would call an API
    const mockUser: User = {
      id: '1',
      name: 'Rahul Kumar',
      email,
      class: '12th',
      stream: 'Science',
      preferences: {
        stream: 'Science',
        interestedCourses: ['Engineering', 'Medicine'],
        preferredLocation: 'Telangana',
        budgetRange: '1-5 Lakhs',
        reservationCategory: 'General'
      }
    };
    setUser(mockUser);
    localStorage.setItem('careerSethuUser', JSON.stringify(mockUser));
    return true;
  };

  const register = async (userData: Omit<User, 'id'> & { password: string }): Promise<boolean> => {
    // Mock registration
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      class: userData.class,
      preferences: {
        stream: 'Science',
        interestedCourses: [],
        preferredLocation: 'Telangana',
        budgetRange: '1-5 Lakhs',
        reservationCategory: 'General'
      }
    };
    setUser(newUser);
    localStorage.setItem('careerSethuUser', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('careerSethuUser');
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('careerSethuUser', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
