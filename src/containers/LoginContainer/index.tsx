
import { FormEvent, useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'https://mock-api.arikmpt.com/api/user/login',
        {
          email,
          password,
        }
      );

      if (res.data) {
        // Handle successful login
      }
    } catch (err) {
      console.error(err);
      // Show user that an error has occurred
    }

  };

  return (
    <div className="flex items-center justify-center my-24">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="md:flex md:items-center mb-6">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

