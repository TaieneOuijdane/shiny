import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Survey from './pages/Survey.jsx'
import Header from './components/Header.jsx';
import Error from './components/Error.jsx';
import Profile from './pages/Pofile'
import Results from './pages/Results.jsx';
import Freelances from './pages/Freelances.jsx';
import {ThemeProvider, SurveyProvider } from './utils/context.jsx'
import Footer from './pages/Footer.jsx';
import GlobalStyle from './utils/style/GlobalStyle.jsx';


const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
    <ThemeProvider>
      <SurveyProvider>
        <Header/>
        <GlobalStyle />
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/survey/:questionNumber' element={<Survey/>} />
          <Route path='*' element={<Error />} />
          <Route path='/results'  element={<Results />} />
          <Route path='/freelances'  element={<Freelances />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
        <Footer />
        </SurveyProvider>
    </ThemeProvider>
    </Router>
  </React.StrictMode>
)
