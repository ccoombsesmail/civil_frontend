import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import useOnSubmit from './hooks/useOnSubmit'

import {
  Container, OuterContainer, HeaderContainer,
  Header, SubHeader, FieldContainer,
  FieldLabel, Textarea, ButtonContainer,
} from './Style/Index'

const BioForm = ({ user }) => {
  const userData = useSelector((s) => s.users)[user?.id]
  const [bio, setBio] = useState(userData?.bio)
  const [experience, setExperience] = useState(userData?.experience)

  useEffect(() => {
    setBio(userData?.bio)
    setExperience(userData?.experience)
  }, [userData])

  useEffect(() => {
    const clerkWrapper = document.getElementsByClassName('cl-main')[0]
    if (clerkWrapper) clerkWrapper.insertBefore(document.getElementById('bio-dashboard'), null)
  }, [])

  const onSubmit = useOnSubmit(bio, experience, setBio, setExperience)
  return (
    <OuterContainer id="bio-dashboard">
      <Container>
        <HeaderContainer>
          <Header>Bio Information</Header>
          <SubHeader>Manage Bio and Experience Information</SubHeader>
        </HeaderContainer>
        <form onSubmit={onSubmit}>
          <FieldContainer>
            <FieldLabel>
              Bio
            </FieldLabel>
            <Textarea value={bio} onChange={(e) => setBio(e.target.value)} />
          </FieldContainer>
          <FieldContainer>
            <FieldLabel>
              Experience
            </FieldLabel>
            <Textarea value={experience} onChange={(e) => setExperience(e.target.value)} />
          </FieldContainer>
          <ButtonContainer>
            <button type="submit">Save Bio Information</button>
          </ButtonContainer>
        </form>
      </Container>
    </OuterContainer>
  )
}

export default BioForm
