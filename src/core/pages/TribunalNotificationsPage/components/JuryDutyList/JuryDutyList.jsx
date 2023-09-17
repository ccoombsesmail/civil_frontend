/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'
import { Button } from 'primereact/button'
import { DataView } from 'primereact/dataview'
import { Tag } from 'primereact/tag'
import { Avatar } from 'primereact/avatar'
import { Checkbox } from 'primereact/checkbox'
import { useNavigate } from 'react-router-dom'
import { Divider } from 'primereact/divider'
import { useGetUserJuryDutiesQuery } from '../../../../../api/services/tribunal_jury.ts'
import { CLEAN, MARKED, UNDER_REVIEW } from '../../../../../enums/report_status'
import UsernameAndTag from '../../../../CommonComponents/UsernameAndTag/Index'
import { DEFAULT_PROFILE_IMAGE } from '../../../../../theme/constants'
import { useGoToUserProfile } from '../../../../hooks/routing/useGoToUserProfile'
import { userJoinedDate } from '../../../../../generic/time/userJoinedDate'
import { useGetItemImage } from './hooks/useGetItemImage'
import { CircleLoading } from '../../../../../svgs/spinners/CircleLoading'
import './JuryDutyList.css'

function JurtDutyList() {
  const { data: duties, isLoading } = useGetUserJuryDutiesQuery()
  const goToUserProfile = useGoToUserProfile()
  const navigate = useNavigate()
  const [sortKey, setSortKey] = useState('')
  const [sortOrder, setSortOrder] = useState(0)
  const [sortField, setSortField] = useState('')
  const [filteredDuties, setFilteredDuties] = useState([])

  const getItemImage = useGetItemImage()

  useEffect(() => {
    setFilteredDuties(duties)
  }, [duties])

  const onSortChange = (event) => {
    const {value} = event

    if (value.indexOf('!') === 0) {
      setSortOrder(-1)
      setSortField(value.substring(1, value.length))
      setSortKey(value)
    } else {
      setSortOrder(1)
      setSortField(value)
      setSortKey(value)
    }
  }

  const getSeverity = useCallback((reportStatus) => {
    switch (reportStatus) {
      case CLEAN:
        return 'success'
      case UNDER_REVIEW:
        return 'warning'
      case MARKED:
        return 'danger'
      default:
        return null
    }
  }, [])

  const itemTemplate = ({
    space, discussion, comment, contentType, contentId, juryDutyCompletionTime, ...data
  }) => {
    const {
      title,
      createdByUsername,
      createdByTag,
      createdByUserId,
      reportStatus,
      createdByIconSrc,
      editorTextContent,
    } = space || discussion || comment || {}

    const reviewEnded = !!juryDutyCompletionTime
    const img = getItemImage(contentType, space || discussion || comment)
    return (
      <div className="duty_list_item_container col-12 hover:surface-100 focus:surface-100">
        <div className="flex p-4 gap-4">

          <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
            <div className="flex flex-column align-items-start justify-content-start gap-2 w-7">
              <div className="flex">
                {img}
                <div className="flex-column ml-3">
                  <Avatar
                    className="mr-2"
                    shape="circle"
                    image={createdByIconSrc || DEFAULT_PROFILE_IMAGE}
                    onClick={(e) => goToUserProfile(e, createdByUserId)}
                    size="large"
                  />
                  <UsernameAndTag
                    usernameDisplay={createdByUsername}
                    userId={createdByUserId}
                    userTag={createdByTag}
                  />

                </div>

              </div>
              <h5>{title || editorTextContent}</h5>
            </div>
            <Divider align="center" layout={screen.width <= 992 ? 'horizontal' : 'vertical'}>
              <i id="double_arrow_divider" className="pi pi-arrows-v block lg:hidden xl:hiden" style={{ color: 'slateblue', fontSize: '2rem'}} />
            </Divider>
            <div className="flex flex-row lg:flex-column align-items-center lg:align-items-start gap-4 lg:gap-2">
              {/* icon={<Gavel2 size="24px" color="white" />}  */}
              <Button
                label={reviewEnded ? 'Concluded' : 'Ongoing...'}
                onClick={() => navigate(`/tribunal/${contentType}/${contentId}`)}
              />
              <Tag value={reportStatus} severity={getSeverity(reportStatus)} />
              { reviewEnded ? (
                <b>
                  Ended:
                  <br />
                  {userJoinedDate(juryDutyCompletionTime, false)}
                </b>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const [filters, setFilters] = useState(['Concluded', 'Ongoing'])

  const onFilterChange = (e) => {
    const _filters = [...filters]
    if (e.checked) { _filters.push(e.value) } else { _filters.splice(_filters.indexOf(e.value), 1) }
    setFilters(_filters)

    if (_filters.includes('Concluded') && _filters.includes('Ongoing')) {
      setFilteredDuties(duties)
    } else if (_filters.includes('Concluded') && !_filters.includes('Ongoing')) {
      const filteredArray = duties.filter((d) => Boolean(d.juryDutyCompletionTime))
      setFilteredDuties(filteredArray)
    } else if (!_filters.includes('Concluded') && _filters.includes('Ongoing')) {
      const filteredArray = duties.filter((d) => !d.juryDutyCompletionTime)
      setFilteredDuties(filteredArray)
    } else {
      setFilteredDuties([])
    }
  }

  const header = () => (
    <div>
      <h5 className="w-full flex justify-content-center text-2xl">Jury Duty</h5>
      <Divider />
      <div className="flex flex-wrap justify-content-center gap-3">
        <div className="flex align-items-center">
          <Checkbox inputId="concluded" name="concluded" value="Concluded" onChange={onFilterChange} checked={filters.includes('Concluded')} />
          <label htmlFor="concluded" className="ml-2">Concluded</label>
        </div>
        <div className="flex align-items-center">
          <Checkbox inputId="ongoing" name="ongoing" value="Ongoing" onChange={onFilterChange} checked={filters.includes('Ongoing')} />
          <label htmlFor="ongoing" className="ml-2">Ongoing</label>
        </div>
      </div>

    </div>
  )

  return (
    <div className="card bg-white w-full pb-8">
      {isLoading ? <CircleLoading />
        : <DataView value={filteredDuties} itemTemplate={itemTemplate} header={header()} paginator rows={4} />}
    </div>
  )
}

export default JurtDutyList
