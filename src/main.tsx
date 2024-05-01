import Lenis from 'lenis';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ColorProvider } from './providers';
import { router } from './router';
import './styles/main.css';

const lenis = new Lenis();

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
