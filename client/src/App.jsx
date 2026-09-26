import { useState } from 'react'
import './App.css'

function App() {
  const [screen, setScreen] = useState('welcome')
  const [message, setMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  if (screen === 'login') {
    return (
      <main className="welcome login-screen">
        <button type="button" onClick={() => setScreen('welcome')}>
          ← Back
        </button>

        <h1>Log in</h1>
        <p>Use your university email to continue</p>

        <form onSubmit={(event) => {
          event.preventDefault()
          setMessage('Account login will be connected later.')
        }}>
          <label htmlFor="email">School Email *</label>
          <input id="email" type="email" placeholder="yourname@university.edu" autoComplete="email" required />

          <label htmlFor="password">Password *</label>
          <div className="password-field">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button
            type="button"
            className="forgot-password"
            onClick={() => setMessage('Password reset will be connected later.')}
          >
            Forgot password?
          </button>

          <button type="submit">Log in</button>

          <div className="login-divider">or</div>
          <button
            type="button"
            className="sso-button"
            onClick={() => setMessage('University SSO will be connected later.')}
          >
            Continue with University SSO
          </button>


        </form>
        <p className="signup-prompt">
          Don&apos;t have an account?{' '}
          <button
            type="button"
            onClick={() => setMessage('Account creation will be connected later.')}
          >
            Create Account
          </button>
        </p>

        {message && <p role="status">{message}</p>}
      </main >
    )
  }

  return (
    <main className="welcome welcome-screen">
      <div className="welcome-icon" aria-hidden="true">🎓</div>
      <h1>Campus Event Finder</h1>
      <p>Discover events, connect with your campus community, and make the most of university life.</p>
      <div className="welcome-features">
        <span>🔎 Discover</span>
        <span>🔖 Save</span>
        <span>🎟️ Register</span>
      </div>
      <button type="button" onClick={() => setScreen('login')}>
        Log in
      </button>
    </main>
  )
}

export default App