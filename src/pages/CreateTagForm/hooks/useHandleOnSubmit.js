import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
// import { useUser } from '@clerk/clerk-react'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import uiActionCreators, { closeModal } from '../../../redux/actions/ui/index'
import userActionCreators from '../../../redux/actions/users/index'
// const resolveAfter1500ms = new Promise((resolve) => setTimeout(resolve, 1500))

export default (userId) => {
  const dispatch = useDispatch()
  // const { user } = useUser()

  const {
    createUserTag,
  } = useBindDispatch(uiActionCreators, userActionCreators)
  return useCallback(async (values, { setSubmitting, resetForm }) => {
    // if (user) {
    //   user.update({
    //     unsafeMetadata: {
    //       userCivilTag: values.tag,
    //     },
    //   })
    // }
    await toast.promise(
      createUserTag(values),
      {
        pending: 'Creating Tag...',
        success: 'Unique Tag Succefully Created!',
        error: {
          render({ data: errorData }) {
            const { response } = errorData
            const { data: responseData } = response
            return `${responseData.msg} 🤯 `
          },
        },
      },
    )
    dispatch(closeModal())
    setSubmitting(false)
    resetForm({})
  }, [userId])
}
