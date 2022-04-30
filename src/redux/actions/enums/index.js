import { toast } from 'react-toastify'
import { GET_ALL_ENUMS } from '../../reducers/enumsReducer'
import * as EnumApiUtil from '../../../api/v1/enums/enums_api_util'
import { errorFormatter } from '../../utils/errorFormatter'

const getAllEnumsActionCreator = (enums) => ({
  type: GET_ALL_ENUMS,
  payload: enums,

})

export const getAllEnums = () => (dispatch) => EnumApiUtil.getAllEnums()
  .then((res) => dispatch(getAllEnumsActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export default {
  getAllEnums,
}
