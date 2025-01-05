import { supabase } from './supabase';
import { Session } from '@supabase/supabase-js';

// Check if session is within last 2 days
const isSessionValid = (session: Session | null): boolean => {
  if (!session) return false;
  
  const expiryDate = new Date(session.expires_at! * 1000);
  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
  
  return expiryDate > twoDaysAgo;
};

export const getPersistedSession = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return isSessionValid(session) ? session : null;
};

export const refreshSession = async () => {
  const { data: { session }, error } = await supabase.auth.refreshSession();
  if (error) throw error;
  return session;
};

export const signOut = async () => {
  await supabase.auth.signOut();
};