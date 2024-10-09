import React, { useState } from 'react';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import './PasswordReset.css';

function PasswordReset({ onBack }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Check your inbox.');
      setError('');
    } catch (error) {
      setError('Failed to send password reset email. ' + error.message);
      setMessage('');
    }
  };

  return (
    <div className="password-reset">
      <h2>Reset Password</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Send Reset Email</button>
      </form>
      <button onClick={onBack}>Back to Login</button>
    </div>
  );
}

export default PasswordReset;