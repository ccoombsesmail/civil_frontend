import { GET_ALL_ENUMS } from '../../reducers/enumsReducer'
import * as EnumApiUtil from '../../../api/v1/enums/enums_api_util'


const getAllEnumsActionCreator = (enums) => ({
  type: GET_ALL_ENUMS,
  payload: enums,

})


export const getAllEnums = () => (dispatch) => EnumApiUtil.getAllEnums()
  .then((res) => dispatch(getAllEnumsActionCreator(res.data)))




export default {
  getAllEnums,
}
