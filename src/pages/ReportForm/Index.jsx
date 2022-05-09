import React from 'react'

import Modal from 'react-bootstrap/Modal'
import { Formik, Field } from 'formik'

import Button from '../CommonComponents/Button/Index'
import { Checkbox } from '../CommonComponents/Form/Checkbox/Index'

import {
  FormContainer, ItemList, Container, Item, ItemDescription,
} from './Style/Index'
import useHandleOnSubmit from './hooks/useHandleOnSubmit'

export const ReportForm = ({ contentId }) => {
  const handleOnSubmit = useHandleOnSubmit(contentId)
  return (
    <Container>
      <Formik
        initialValues={{
          toxic: false,
          spam: false,
          personalAttack: false,
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
                    <Field name="toxic" showCheckmark component={Checkbox} />
                    <ItemDescription>
                      Extremely toxic or racist language
                    </ItemDescription>
                  </Item>
                  <Item>
                    <Field name="personalAttack" showCheckmark component={Checkbox} />
                    <ItemDescription>
                      Targeting a specific user (i.e doxing, personal threats)
                    </ItemDescription>
                  </Item>
                  <Item>
                    <Field name="spam" showCheckmark component={Checkbox} />
                    <ItemDescription>
                      Spam (excessively promoting content, non-sensical posts )
                    </ItemDescription>
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
