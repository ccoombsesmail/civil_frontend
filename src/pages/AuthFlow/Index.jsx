import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignUpComponent, SignInComponent } from './components/AuthMethodTabs/Index'
import NewDidFlow from './components/NewDidFlow/Index'
import RestoreDid from './components/RestoreDid/Index'
import CivicTest from './components/CivicTest/Index'

const AuthFlow = () => (
  <Routes>
    <Route path="/signup" element={<SignUpComponent />} />
    <Route path="/new-did" element={<NewDidFlow />} />
    <Route path="/restore-did" element={<RestoreDid />} />
    <Route path="/civic" element={<CivicTest />} />

    <Route path="/" element={<SignInComponent />} />
  </Routes>
)

export default AuthFlow
