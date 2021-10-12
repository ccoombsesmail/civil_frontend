import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import enumActions from "../../../redux/actions/enums"

export default () => {
  const dispatch = useDispatch()
  const { getAllEnums } = bindActionCreators(enumActions, dispatch)
  useEffect(() => {
    getAllEnums()
  }, [])
}