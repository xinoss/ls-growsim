import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">관리자 로그인</h2>

        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="사용자 입력"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? '처리 중...' : '로그인'}
        </button>
      </form>
  );
};

export default LoginForm;
