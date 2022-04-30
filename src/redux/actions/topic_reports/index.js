import { toast } from 'react-toastify'
import { closeModal } from '../ui/index'
import { ADD_TOPIC_REPORT } from '../../reducers/topic_reports/topicReportsReducer'
import * as TopicReportsApiUtil from '../../../api/v1/topic_reports/topic_reports_api_util'
import { errorFormatter } from '../../utils/errorFormatter'

const addTopicReportActionCreator = (topicReport) => ({
  type: ADD_TOPIC_REPORT,
  payload: topicReport,
})

export const getTopicReport = (topicId) => (dispatch) => (
  TopicReportsApiUtil.getTopicReport(topicId)
    .then((res) => dispatch(addTopicReportActionCreator(res.data)))
    .catch((error) => toast.error(errorFormatter(error)))
    .finally(() => dispatch(closeModal()))
)

export default {
  getTopicReport,
}
