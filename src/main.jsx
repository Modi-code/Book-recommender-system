import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Form from './Form/Form.jsx'
import Joke from './Joke/Joke.jsx'
import PasswordV from "./PasswordV/PasswordV.jsx";
import IPFinder from './IPFinder/IPFinder.jsx'
import Dice from "./Dice/Dice.jsx";
import AppG from "./GameRBS/AppG.jsx";
import App from "./App.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<Form/>*/}
    {/*<Joke/>*/}
    {/*<PasswordV/>*/}
    {/*<IPFinder/>*/}
    {/*{<Dice/>}*/}
    {/*<AppG/>*/}
      <App/>
  </StrictMode>,
)
