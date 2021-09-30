import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from 'react-bootstrap/Modal'


import { Formik, Field } from 'formik'

import { FormContainer, InputWrapper, Container, Toolbar } from './Style'
import sessionActions from '../../redux/actions/session'
import ImageCheckbox from './components/ImageCheckbox/Index'
import Button from '../CommonComponents/Button/Index'

const uuidRegEx = new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g)

const initValues = new Array(16).fill(0).map((_, idx) => [`profile_img_${idx+1}`, ''])
const initValuesObject = Object.fromEntries(initValues)
const SelectIconForm = () => {

  const dispatch = useDispatch()
  const { updateUserIcon } = bindActionCreators(sessionActions, dispatch)

  const user = useSelector((s) => s.session.currentUser)
  
  return (
    <Container>
      <Formik

        initialValues={initValuesObject}
        validate={(values) => {
          const errors = {}
          return errors
        }}
        onSubmit={(values, { setSubmitting  }) => {
          let profileImg
          for (const [k,v] of Object.entries(values)) {
            if (v) profileImg = k
          }
          console.log(profileImg)
          updateUserIcon({username: user?.username, iconSrc: profileImg})
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <>
            <FormContainer>
              <section>
              {
                new Array(16).fill(0).map((_, idx) => {
                  return <Field key={String(idx)} type="checkbox" iconSrc={`/assets/64_${idx+1}.png`} name={`profile_img_${idx+1}`} component={ImageCheckbox} />
                })                  
              }
              </section>
            <Button small={true} type="submit" disabled={isSubmitting}>
                  Submit
            </Button>
            </FormContainer>
          </>
        )}
      </Formik>
    </Container>

  )
}

export default SelectIconForm
