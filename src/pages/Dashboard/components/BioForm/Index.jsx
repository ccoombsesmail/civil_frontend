import React, { useState } from 'react'
import useOnSubmit from './hooks/useOnSubmit'

import {
  Container, OuterContainer, HeaderContainer,
  Header, SubHeader, FieldContainer,
  FieldLabel, Textarea, ButtonContainer,
} from './Style/Index'

const BioForm = () => {
  const [bio, setBio] = useState('')
  const [experience, setExperience] = useState('')
  const onSubmit = useOnSubmit(bio, experience, setBio, setExperience)
  return (
    <OuterContainer>
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
