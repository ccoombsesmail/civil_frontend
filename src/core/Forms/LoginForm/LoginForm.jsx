/* eslint-disable max-len */
import React, { memo, useState, useCallback } from 'react'
import { Divider } from 'primereact/divider'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import ExpandButton from '../../CommonComponents/Buttons/ExpandButton/Index'
import useGoToAuthPage from '../../hooks/routing/useGoToAuthPage'
import { Container } from './Style/Index'

function LoginForm() {
  const goToAuthPage = useGoToAuthPage()
  return (
    <Container className="flex align-items-center justify-content-center">

      <div className="h-full flex flex-column align-items-center">
        Register
        <img className="w-3 mb-4" src="https://media.discordapp.net/attachments/1048453486456619088/1151412608986009610/C00mbsie_register_icon_white_background_minimilist_guide_ff9a923b-0738-4020-b6ba-532b9971ed93.png?width=605&height=605" alt="" />
        <ExpandButton
          height="2.5vw"
          type="button"
          bgColor="var(--primary-color)"
          onClick={goToAuthPage}
          margin={0}
        >
          Sign Up Guide
        </ExpandButton>

      </div>

      <Divider layout="vertical " />
      <div className="h-full flex flex-column align-items-center">
        Login
        <img className="w-3 mb-4" src="https://media.discordapp.net/attachments/1048453486456619088/1151408813744848946/C00mbsie_login_icon_white_background_minimilist_register_32a706f6-d216-4db3-958a-e1fb602c263b.png?width=605&height=605" alt="" />
        <WalletMultiButton />

      </div>

    </Container>

  )
}

export default memo(LoginForm)
