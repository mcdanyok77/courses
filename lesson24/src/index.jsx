import 'the-new-css-reset/css/reset.css'
import '@fontsource-variable/montserrat'
import './styles.css'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'

const root = createRoot(document.getElementById('app'))

root.render(<App />)
