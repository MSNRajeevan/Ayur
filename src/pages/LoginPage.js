import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import LoginPrompt from '../components/LoginPrompt';
import PasswordReset from '../components/PasswordReset';
import './LoginPage.css';

function LoginPage({ onLogin, user }) {
  const [showPasswordReset, setShowPasswordReset] = useState(false);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="login-page">
      <h1>Login or Sign Up</h1>
      {showPasswordReset ? (
        <PasswordReset onBack={() => setShowPasswordReset(false)} />
      ) : (
        <LoginPrompt 
          onLogin={onLogin} 
          onForgotPassword={() => setShowPasswordReset(true)} 
        />
      )}
    </div>
  );
}

export default LoginPage;