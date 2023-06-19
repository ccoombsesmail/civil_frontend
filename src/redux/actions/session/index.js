import { toast } from 'react-toastify'
import { createDraft, finishDraft } from 'immer'
import {
  ADD_SESSION_DATA_CLERK, UPDATE_SESSION, ADD_SESSION_DATA_DID,
} from '../../reducers/sessionReducer'
import * as SessionApiUtil from '../../../api/v1/session/session_api_util'
import { errorFormatter } from '../../utils/errorFormatter'

import { sessionApi } from '../../../api/services/session.ts'

export const CREATE_TAG_FORM = 'CREATE_TAG_FORM'

export const addUserActionCreatorClerk = (userData) => ({
  type: ADD_SESSION_DATA_CLERK,
  payload: userData,
})

export const addSessionDataDID = (didData) => ({
  type: ADD_SESSION_DATA_DID,
  payload: didData,
})

export const updateSessionActionCreator = (data) => ({
  type: UPDATE_SESSION,
  payload: data,
})

export const addDIDSession = (didData) => (dispatch) => {
  dispatch(addSessionDataDID(didData))
}

export const updateUserIcon = (userData) => (dispatch) => SessionApiUtil.updateUserIcon(userData)
  .then((res) => dispatch(updateSessionActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

const uploadUserIcon = (dta, username) => (dispatch) => SessionApiUtil.uploadUserIcon(dta, username)
  .then((res) => {
    dispatch(
      sessionApi.util.updateQueryData('getCurrentUser', username, (draft) => {
        const newDraft = createDraft(draft)
        newDraft.iconSrc = `${res.data.icon_src}?t=${Date.now()}`
        return finishDraft(newDraft)
      }),
    )
  })

export default {
  updateUserIcon,
  uploadUserIcon,
  addDIDSession,
}
