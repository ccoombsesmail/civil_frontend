import React, { useEffect, Suspense } from 'react'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'
import { UserProfile } from '@clerk/clerk-react'

import { Container, FormContainer } from './Style'
import sessionActions from '../../redux/actions/session/index'

import useBindDispatch from '../hooks/redux/useBindDispatch'
import Header from './components/Header/Index'
import { Line } from '../CommonComponents/Line'
import Button from '../CommonComponents/Button/Index'

import BioForm from './components/BioForm/Index'
import BasicInformation from '../AuthFlow/components/BasicInformation/Index'
import { INIT_DID_FORM_VALUES } from '../util/form_helpers/init_form_values'
import useAddVcCred from '../DID/hooks/useAddVcCred'

const Dashboard = () => {
  const { getCurrentUser } = useBindDispatch(sessionActions)
  const user = useSelector((s) => s.session.currentUser)
  useEffect(() => {
    const clerkWrapper = document.getElementsByClassName('cl-main')[0]
    console.log(clerkWrapper)
    if (clerkWrapper) clerkWrapper.insertBefore(document.getElementById('bio-dashboard'), null)
    if (user) getCurrentUser(user?.id)
  }, [])
  const addVcCred = useAddVcCred()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Header user={user} />
        <Line />
        <UserProfile />
        {/* <Formik
          initialValues={INIT_DID_FORM_VALUES}
          onSubmit={(values, params) => addVcCred(values, params)}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <FormContainer>
              <BasicInformation setFieldValue={setFieldValue} />
              <Button
                width="40%"
                height="2.5vw"
                type="submit"
                backgroundColor="var(--m-elastos-theme)"
                disabled={isSubmitting}
                onClick={() => addVcCred(values)}
              >
                Update Decentralized Identity
              </Button>
            </FormContainer>
          )}
        </Formik> */}
        <Line />
        <BioForm user={user} />
      </Container>
    </Suspense>
  )
}

export default Dashboard
