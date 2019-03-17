import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'
import AccountPage from '../account'
import AdminPage from '../admin'
import HomePage from '../home'
import LandingPage from '../landing'
import Navigation from '../navigation'
import PasswordForgetPage from '../password-forget'
import SignUpPage from '../sign-up'
import SignInPage from '../sign-in'

const App = () => (
  <BrowserRouter>
    <Navigation />
    <hr />
    <Route exact path={ROUTES.LANDING} component={LandingPage} />
    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
    <Route path={ROUTES.HOME} component={HomePage} />
    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
    <Route path={ROUTES.ADMIN} component={AdminPage} />
  </BrowserRouter>
)

export default App
