import React, { useState, useEffect } from 'react'
import { InputTextarea } from 'primereact/inputtextarea'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import ExpandButton from '../../../../CommonComponents/Buttons/ExpandButton/Index'
import useOnSubmit from './hooks/useOnSubmit'

import {
  Container, OuterContainer, HeaderContainer,
  Header, SubHeader, FieldContainer,
  FieldLabel, ButtonContainer,
} from './Style/Index'

function BioForm() {
  const { currentUser } = useGetCurrentUser()
  const [bio, setBio] = useState(currentUser?.bio)
  const [experience, setExperience] = useState(currentUser?.experience)

  useEffect(() => {
    setBio(currentUser?.bio)
    setExperience(currentUser?.experience)
  }, [currentUser])

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
            <InputTextarea
              value={bio}
              rows={4}
              cols={90}
              onChange={(e) => setBio(e.target.value)}
            />
          </FieldContainer>
          <FieldContainer>
            <FieldLabel>
              Experience
            </FieldLabel>
            <InputTextarea
              value={experience}
              rows={4}
              cols={90}
              onChange={(e) => setExperience(e.target.value)}
            />
          </FieldContainer>
          <ButtonContainer>
            <ExpandButton type="submit">Save Bio Information </ExpandButton>
          </ButtonContainer>
        </form>
      </Container>
    </OuterContainer>
  )
}

export default BioForm
