import React from 'react'

import { Formik, Field } from 'formik'
import { Footer } from '../TopicForm/Style'

import Button from '../../CommonComponents/Button/Index'
import { Checkbox } from '../../CommonComponents/Form/Checkbox/Index'

import {
  FormContainer, ItemList, Container, Item, ItemDescription,
} from './Style/Index'
import useHandleOnSubmit from './hooks/useHandleOnSubmit'
import ExpandButton from '../../CommonComponents/Buttons/ExpandButton/Index'
import { Line } from '../../CommonComponents/Line/index';

function ReportForm({ contentId }) {
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
          <FormContainer>
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
            <Footer>
              <ExpandButton type="submit" disabled={isSubmitting}>
                Submit
              </ExpandButton>
            </Footer>
          </FormContainer>
        )}
      </Formik>
    </Container>

  )
}

export default ReportForm
