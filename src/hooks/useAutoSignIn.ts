import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getPersistedSession, refreshSession } from '../lib/auth';
import toast from 'react-hot-toast';

export const useAutoSignIn = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const autoSignIn = async () => {
      try {
        // Skip if already authenticated
        if (isAuthenticated) return;

        const session = await getPersistedSession();
        if (session) {
          await refreshSession();
          navigate('/', { replace: true });
          toast.success('Welcome back!');
        }
      } catch (error) {
        console.error('Auto sign-in failed:', error);
      }
    };

    autoSignIn();
  }, [isAuthenticated, navigate]);
};