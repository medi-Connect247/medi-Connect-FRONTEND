import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      
      const response = await fetch('http://localhost:8080/api/v1/user/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // const data = await response.json();
        // const token = data.token;
        navigate("/PractitionerDashboard")
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      
      setError('An error occurred during login');
    }
    setEmail('');
    setPassword('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <Link to="/">
        <button type="submit" className="prac-back-button">
          Back to Homepage
        </button>
      </Link>
      <img src={logo} alt="Logo" className="authentication-logo" />
      <div className="login-section">
        <div className="login-image"></div>
        <div className="login-right">
          <h2 className="login-header">Welcome Back</h2>
          <p className="login-sub-text">Continue from where you stopped</p>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="login-input"
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="login-input"
              />
            </label>
            {error && <p>{error}</p>}

            <button type="submit" className="login-btn">
              Login
            </button>

            <div className="container">
              <p className="last-text">Don't have an account?</p>
              <Link to="/PractitionerSignUp">
                <a href="" className="a-tag">
                  Create an account
                </a>
              </Link>
            </div>
            </form>
              </div>
           </div>
      </div>
    )
  
    }
      

export default PhysiciansLoginForm;
