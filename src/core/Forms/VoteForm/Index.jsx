import React, { memo, useState, useCallback } from 'react'

import { Formik, Field } from 'formik'

import { Button } from 'primereact/button'
import { Checkbox } from '../../CommonComponents/Form/Checkbox/Index'

import {
  FormContainer, ItemList, Container, Item, ItemDescription,
} from './Style/Index'
import useHandleOnSubmit from './hooks/useHandleOnSubmit'
import { Footer } from '../SpaceForm/Style'

function VoteForm({ contentId, closeModal }) {
  const [voteToStrikeSelected, setVoteToStrikeSelected] = useState(false)
  const [voteToAcquitSelected, setVoteToAcquitSelected] = useState(false)
  const handleOnSubmit = useHandleOnSubmit(contentId, voteToStrikeSelected, voteToAcquitSelected, closeModal)
  const onClickVoteToStrike = useCallback(() => {
    setVoteToStrikeSelected((prev) => !prev)
    setVoteToAcquitSelected(false)
  }, [])

  const onClickVoteToAcquit = useCallback(() => {
    setVoteToAcquitSelected((prev) => !prev)
    setVoteToStrikeSelected(false)
  }, [])

  return (
    <Container>
      <Formik
        initialValues={{
          voteAgainst: false,
          voteFor: false,
        }}
        validate={() => {
          const errors = {}
          return errors
        }}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting }) => (
          <FormContainer>
            <ItemList>
              <Item>
                <ItemDescription>
                  Vote To Indicate This Content Has Violated
                  Community Guidlines And Should Be Removed
                </ItemDescription>
                <Field name="voteToStrike" checked={voteToStrikeSelected} onClick={onClickVoteToStrike} showCheckmark={false} component={Checkbox} />
              </Item>
              <Item>
                <ItemDescription>
                  Vote To Indicate This Content Has Not Violated Community Guidlines
                </ItemDescription>
                <Field name="voteToAcquit" checked={voteToAcquitSelected} onClick={onClickVoteToAcquit} showCheckmark={false} component={Checkbox} />
              </Item>
            </ItemList>
            <Footer>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Footer>
          </FormContainer>
        )}
      </Formik>
    </Container>

  )
}

export default memo(VoteForm)
