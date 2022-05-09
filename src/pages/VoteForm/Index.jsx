import React, { memo, useState, useCallback } from 'react'

import Modal from 'react-bootstrap/Modal'
import { Formik, Field } from 'formik'

import Button from '../CommonComponents/Button/Index'
import { Checkbox } from '../CommonComponents/Form/Checkbox/Index'

import {
  FormContainer, ItemList, Container, Item, ItemDescription,
} from './Style/Index'
import useHandleOnSubmit from './hooks/useHandleOnSubmit'

const VoteForm = ({ contentId }) => {
  const [voteForSelected, setVoteForSelected] = useState(false)
  const [voteAgainstSelected, setVoteAgainstSelected] = useState(false)
  const handleOnSubmit = useHandleOnSubmit(contentId, voteForSelected, voteAgainstSelected)
  const onClickVoteFor = useCallback(() => {
    setVoteForSelected((prev) => !prev)
    setVoteAgainstSelected(false)
  }, [])

  const onClickVoteAgainst = useCallback(() => {
    setVoteAgainstSelected((prev) => !prev)
    setVoteForSelected(false)
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
          <>
            <Modal.Header closeButton>
              <Modal.Title>Why Are You Reporting This Content?</Modal.Title>
            </Modal.Header>
            <FormContainer>
              <Modal.Body>
                <ItemList>
                  <Item>
                    <ItemDescription>
                      Vote To Indicate This Content Has Violated Community Guidlines And Should Be Removed
                    </ItemDescription>
                    <Field name="voteAgainst" checked={voteAgainstSelected} onClick={onClickVoteAgainst} showCheckmark={false} component={Checkbox} />
                  </Item>
                  <Item>
                    <ItemDescription>
                      Vote To Indicate This Content Has Not Violated Community Guidlines
                    </ItemDescription>
                    <Field name="voteFor" checked={voteForSelected} onClick={onClickVoteFor} showCheckmark={false} component={Checkbox} />
                  </Item>
                </ItemList>
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Modal.Footer>
            </FormContainer>
          </>
        )}
      </Formik>
    </Container>

  )
}

export default memo(VoteForm)
