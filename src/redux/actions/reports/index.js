import { toast } from 'react-toastify'
import { closeModal } from '../ui/index'
import { ADD_REPORT } from '../../reducers/reports/reportsReducer'
import * as ReportsApiUtil from '../../../api/v1/reports/reports_api_util'
import { errorFormatter } from '../../utils/errorFormatter'

const addReportActionCreator = (report) => ({
  type: ADD_REPORT,
  payload: report,
})

export const getReport = (contentId) => (dispatch) => (
  ReportsApiUtil.getReport(contentId)
    .then((res) => dispatch(addReportActionCreator(res.data)))
    .catch((error) => toast.error(errorFormatter(error)))
    .finally(() => dispatch(closeModal()))
)

export default {
  getReport,
}
