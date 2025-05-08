import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QrCode } from './QrCode'
// import './index.css'      ----->      this is for UserCard
// import { UserCard } from './UserCard'
// import App from './App.jsx'
import './QrCode.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UserCard /> */}
    <QrCode />
  </StrictMode>,
)
