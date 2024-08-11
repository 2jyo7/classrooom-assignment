"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/');
      return;
    }
    // Here, you'd typically decode the token and check the role to redirect to the appropriate dashboard.
    // For simplicity, let's redirect to the principal dashboard for now.
    router.push('/principal');
  }, []);

  return null;
};

export default Dashboard;
