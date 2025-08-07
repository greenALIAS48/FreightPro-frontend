import './style.css';

document.getElementById('root').innerHTML = `
  <h1>FreightPro Frontend is Live</h1>
  <p>Connected to backend via: ${import.meta.env.VITE_API_URL}</p>
`;