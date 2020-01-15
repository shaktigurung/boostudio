import React, { Component } from 'react'
    import ReactDOM from 'react-dom'
    import { BrowserRouter, Route, Switch } from 'react-router-dom'
    import Header from './header/header.component';
    import Footer from './footer/footer.component';
    import Login from './pages/login/login.component';
    import Register from './pages/register/register.component';
    import Home from './pages/home/home.component';

    import './App.styles.scss';

    class App extends Component {
      render () {
        return (
          <BrowserRouter>
            <div className='app'>
              <Header />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
              </Switch>
              <Footer />
            </div>
          </BrowserRouter>
        )
      }
    }

    ReactDOM.render(<App />, document.getElementById('app'))