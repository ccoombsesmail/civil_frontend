import { useCallback } from "react";
import { useHistory } from "react-router";



export default (id) => {
  const history = useHistory()
  return useCallback(() => history.push(id), [id])
 } 