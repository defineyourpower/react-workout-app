
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Wait for the device to be ready if in Capacitor environment
document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById("root")!).render(<App />);
});
