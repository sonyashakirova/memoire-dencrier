import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ColorProvider } from './providers';
import { lenis } from './lenis';
import { router } from './router';
import './styles/main.css';

const raf = (time: DOMHighResTimeStamp) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorProvider>
      <RouterProvider router={router} />
    </ColorProvider>
  </React.StrictMode>,
);
