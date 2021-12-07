import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import HomePage from './components/HomePage';
import MatchProfile from './components/MatchProfile';
import MyProfile from './components/MyProfile';
import Inbox from './components/Inbox';
import PrivateChat from './components/PrivateChat';
import Main from './components/Main';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="welcome" element={<WelcomePage/>} />
    <Route path="signup" element={<SignUp/>} />
    <Route path="login" element={<Login/>} />
    <Route path="/" element={<HomePage/>} >
        <Route index element={<Main/>} />
        <Route path="profile" element={<MyProfile/>} />
        <Route path=":id" element={<MatchProfile/>} />
        <Route path="inbox" element={<Inbox/>} >
            <Route path=":chatName" element={<PrivateChat/>} />
        </Route>
    </Route>

  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
