// AskPBot demo page, embedded by the case study in an iframe.
// components/, lib/ and the two CSS files are copied from the askpbot repo
// (github.com/aidarollin/askpbot @ fa6c33c). pbot.css is generated there from
// pandai.question.uiux — re-copy it rather than editing it here. The only
// behavioural change is lib/demo.ts standing in for the /api/chat call.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './pbot.css'
import './pbot-host.css'
import { PBotWeb } from './components/PBotWeb'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PBotWeb />
  </StrictMode>,
)
