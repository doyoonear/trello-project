import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import baseTheme from './styles/baseTheme';
import Main from './pages/Main'

function RootWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return (
    <React.StrictMode>
      <ThemeProvider theme={baseTheme}>
        <Main />
      </ThemeProvider>
    </React.StrictMode>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<RootWithCallbackAfterRender />);
