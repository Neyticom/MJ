import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

import './index.scss';

const vercelEnv = import.meta.env.VERCEL_ENV;
const gitBranch = import.meta.env.VERCEL_GIT_COMMIT_REF;

let title = 'Maxence Jeudy | Coach sportif';

if (!vercelEnv) {
  title = 'Local - Maxence | Coach sportif';
} else if (vercelEnv === 'preview') {
  if (gitBranch === 'dev') {
    title = 'Vercel - Dev Preview | Maxence Jeudy';
  } else {
    title = 'Vercel - Feature Preview | Maxence Jeudy';
  }
}

document.title = title;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
