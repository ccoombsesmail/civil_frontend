/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
import React, { useCallback } from 'react'
import { Formik, Field } from 'formik'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import ImageCheckbox from '../ImageCheckbox/Index'
import Dropzone from '../../../../CommonComponents/Dropzone/Dropzone.tsx'

import sessionActions from '../../../../../redux/actions/session/index'
import useBindDispatch from '../../../../hooks/redux/useBindDispatch'

import {
  FormContainer, Container, ButtonContainer,
} from './Style'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import { useUpdateUserIconMutation } from '../../../../../api/services/users.ts'

function UploadIconForm({ closeModal }) {
  const onChangeIcon = useCallback((e, idx, setFieldValue) => {
    for (let i = 1; i < 4; i++) {
      document.getElementById(`profile_icon_${i}`).checked = false
    }
    document.getElementById(`profile_icon_${idx + 1}`).checked = true

    setFieldValue(e.target.name, true)
  }, [])

  const { uploadUserIcon } = useBindDispatch(sessionActions)

  const [updateUserIcon] = useUpdateUserIconMutation()

  const { currentUser: user } = useGetCurrentUser()
  return (
    <Container>
      <div className="flex flex-column">
        <h2 className="p-2 my-4">
          Upload Custom Icon
        </h2>
        <Dropzone user={user} uploadUserIcon={uploadUserIcon} closeModal={closeModal} />
      </div>
      <Formik
        initialValues={{
          file: '',
        }}
        validate={() => {
          const errors = {}
          return errors
        }}
        onSubmit={(values) => {
          const profileImg = Object.entries(values).find(([, v]) => v === true)?.[0]
          updateUserIcon({ username: user?.username, iconSrc: `https://civil-dev.s3.us-west-1.amazonaws.com/profile_images/${profileImg}.png` })
          closeModal()
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <FormContainer>

            <Divider className="my-5" />

            <h2 className="p-2 my-4">
              Or Choose An Avatar
            </h2>
            <section>
              {
                new Array(16).fill(0).map((_, idx) => (
                  <Field
                    onChange={(e) => onChangeIcon(e, idx, setFieldValue)}
                    key={String(idx)}
                    iconSrc={`https://civil-dev.s3.us-west-1.amazonaws.com/profile_images/profile_icon_${idx + 1}.png`}
                    name={`profile_icon_${idx + 1}`}
                    component={ImageCheckbox}
                  />
                ))
              }
            </section>
            <ButtonContainer>
              <Button
                type="submit"
                raised
                disabled={isSubmitting}
                label="Set Profile Icon"
                className="w-5"
              />

            </ButtonContainer>
          </FormContainer>
        )}
      </Formik>

    </Container>

  )
}

export default UploadIconForm
