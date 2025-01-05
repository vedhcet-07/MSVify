import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface SignInFormProps {
  loading: boolean;
  onSubmit: (email: string, password: string) => Promise<void>;
}

export const SignInForm: React.FC<SignInFormProps> = ({ loading, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-300 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none"
          placeholder="your@email.com"
          disabled={loading}
          required
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none"
          placeholder="••••••••"
          disabled={loading}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </button>

      <p className="text-gray-400 text-center mt-6">
        Don't have an account?{' '}
        <Link to="/signup" className="text-green-500 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};