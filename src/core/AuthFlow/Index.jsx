import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignUpComponent, SignInComponent } from './components/AuthMethodTabs/Index'
import NewDidFlow from './components/NewDidFlow/Index'
import RestoreDid from './components/RestoreDid/Index'
import CivicTest from './components/CivicVerify/Index'

function AuthFlow() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpComponent />} />
      <Route path="/new-did" element={<NewDidFlow />} />
      <Route path="/restore-did" element={<RestoreDid />} />
      <Route path="/civic" element={<CivicTest />} />
      <Route path="/civic-verify" element={<CivicTest />} />

      <Route path="/" element={<SignInComponent />} />
    </Routes>
  )
}

export default AuthFlow
