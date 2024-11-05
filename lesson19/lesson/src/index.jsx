import { createRoot } from 'react-dom/client'
import App from './conponents/App.jsx'
import './styles.css'

const root = createRoot(document.getElementById('app'))

root.render(<App />)
