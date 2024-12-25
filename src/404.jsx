import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);
    const redirect = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div className="container">
      <div className="ghost">
        👻
      </div>
      <h1 className="title">4😵4</h1>
      <p className="message">
        Oops! Looks like you've wandered into the void
      </p>
      <div className="countdown">
        Redirecting to home in {countdown}s...
      </div>
      <style>{`
        .container {
          min-height: 100vh;
          background-color: #1a1a1a;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .ghost {
          font-size: 6rem;
          margin-bottom: 2rem;
          animation: bounce 1s infinite;
        }

        .title {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .message {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          color: #a0a0a0;
        }

        .countdown {
          color: #666;
          animation: pulse 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default NotFound;