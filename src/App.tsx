import { useAuth0 } from '@auth0/auth0-react'

export default function App() {
  const { isAuthenticated, isLoading, user, loginWithRedirect, logout } = useAuth0()

  return (
    <main style={{ fontFamily: 'system-ui', maxWidth: 640, margin: '80px auto', textAlign: 'center' }}>
      <h1>MLH Builders App</h1>
      <p>Auth0 login flow demo — Global Hack Week: Builders Week</p>
      {isLoading && <p>Loading…</p>}
      {!isLoading && !isAuthenticated && (
        <button style={{ padding: '10px 24px', fontSize: 16 }} onClick={() => loginWithRedirect()}>
          Log in with Auth0
        </button>
      )}
      {isAuthenticated && user && (
        <div>
          <h2>Welcome, {user.name}</h2>
          <img src={user.picture} alt="avatar" width={80} style={{ borderRadius: '50%' }} />
          <p>{user.email}</p>
          <p><strong>Authenticated via Auth0 Universal Login</strong></p>
          <button style={{ padding: '8px 20px' }} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log out
          </button>
        </div>
      )}
    </main>
  )
}
