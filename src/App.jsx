import React, { Component } from 'react'
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {} from 'antd';
import Admin from './pages/Admin'
import Login from './pages/Login'
import './App.less';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* 只匹配其中一个 */}
        <Routes> 
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path = '*' element = {<Navigate to='/login'/>}></Route>
        </Routes>

      </BrowserRouter>
    )
  }
}
