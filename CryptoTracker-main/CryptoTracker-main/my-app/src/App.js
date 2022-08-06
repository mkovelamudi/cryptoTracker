import React, { Component } from 'react';
import { Switch, Route, Link ,Redirect,Router, BrowserRouter} from 'react-router-dom';
import { Layout, Typography, Space, Avatar } from 'antd';
import { GoogleLogin } from 'react-google-login';
import { Navbar, Exchanges, Homepage, DetailsCrypto, CurrencyCrypto, CryptoNews,  Prediction, Burger, IntroPage, Wallet} from './components';
import './App.css';
import icon from './images/cryptocurrency.png';
import axios from 'axios';

  class App extends Component {
    state={
      isLoggedIn:false,
      isOpen:false
    }
    // responseGoogle=async (response)=>{
  
      

    //   if(response.profileObj.email!=null){
    //     console.log(response.profileObj.email);
    //     const email = response.profileObj.email
    //     const {data} = await axios.post("http://localhost:8585/api/findByEmail",{email})
    //     if(!data.email){
    //         console.log("i am here not registered yet")
    //         const res  = await axios.post("http://localhost:8585/api/register",{email})
    //     }
    //   this.setState({isLoggedIn:true});
    //   localStorage.setItem("isLoggedIn","true");
    //   localStorage.setItem("email",data.email);
    //   console.log(response.profileObj.email!=null)
    //     window.location.reload();

    //   }
    // }

    openNavbar = () => {
      this.setState({isOpen:!this.state.isOpen});
      console.log("HHHHHH")
    }

    

    render() {
      return (
      <div className="app">
      { /* <Burger/> */ }
      <div className="navbar2">
          <Burger nav_handle = {this.openNavbar}/>
          <Navbar nav_open = {this.state.isOpen}/>
        </div>
    <div className={this.state.isOpen?"main":"main_close"}>
      <Layout>

        {/* {console.log(typeof(localStorage.getItem("isLoggedIn")),localStorage.getItem("isLoggedIn")=="false")}
      {
        (localStorage.getItem("isLoggedIn")==null||localStorage.getItem("isLoggedIn")=="false")?
        <div className='container'>
        <div className='row' style={{width:'22%', padding : '5px'}}>
        <div className="google-text col-sm-4">
        
        <Typography.Title level = {2} className = "logo col-sm-6">
                <h1>CryptoTracker</h1>
            </Typography.Title> 
        </div>
        <div className="Google-login">
        <GoogleLogin
        clientId="696846841621-r3h6mebbaqg764a0fiobre96us2eloeb.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        
        />
        </div></div></div>:''} */}
        
        <div className="routes">
        {/* {localStorage.getItem("isLoggedIn")=="true"? */}
        

           <Switch>
            <Route exact path="/cryptocurrencies">
              <CurrencyCrypto />
            </Route>
            <Route exact path="/crypto/:coinId">
              <DetailsCrypto />
            </Route>
            <Route exact path="/news">
              <CryptoNews />
            </Route>
            <Route exact path = "/prediction">
              <Prediction />
            </Route>
            <Route path = "/wallet">
              <Wallet />
            </Route>
            <Route exact path = "/intro">
              <IntroPage />
            </Route>
            <Route exact path="/">
              <Homepage />
              </Route>
          </Switch>
          {/* :''} */}
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022
          <Link to="/">
          CryptoTracker Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/cryptocurrencies">Crypto</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);
      }}

export default App;