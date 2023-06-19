/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useMemo } from 'react'
import { BreadCrumb } from 'primereact/breadcrumb'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { uuidRegEx } from '../../../../../../../generic/regex/uuid'

const iconItemTemplate = (item, options) => (
  <a className={`${options.className} p-menuitem-link`} onClick={item.onClick}>
    <span className="p-menuitem-text  hover:text-green-700">{item.label}</span>
    {item.icon}
  </a>
)
function BreadCrumbs() {
  const { pathname } = useLocation()
  const { spaceId } = useParams()
  const navigate = useNavigate()
  const discussionId = pathname.match(uuidRegEx)?.[1]
  const commentId = pathname.match(uuidRegEx)?.[2]

  const items = useMemo(() => {
    if (discussionId && !commentId) {
      return [
        {
          onClick: () => navigate(`/home/spaces/${spaceId}/discussions`),
          label: 'Space',
          template: iconItemTemplate,
        },
        {
          onClick: () => navigate(`/home/spaces/${spaceId}/discussions/${discussionId}`),
          label: 'Discussion Thread',
          template: iconItemTemplate,
        },
      ]
    } if (commentId) {
      return [
        {
          onClick: () => navigate(`/home/spaces/${spaceId}/discussions`),
          label: 'Space',
          template: iconItemTemplate,
        },
        {
          onClick: () => navigate(`/home/spaces/${spaceId}/discussions/${discussionId}`),
          label: 'Discussion Thread',
          template: iconItemTemplate,
        }, {
          onClick: () => navigate(`/home/spaces/${spaceId}/discussions/${discussionId}/comments/${commentId}`),
          label: 'Comment Thread',
          template: iconItemTemplate,
        }]
    }
    return [{ onClick: () => navigate(`/home/spaces/${spaceId}/discussions`), label: 'Space', template: iconItemTemplate }]
  }, [discussionId, commentId])

  const home = {
    icon: <img className="w-2rem cursor-pointer" alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/olive2.png" />,
    template: iconItemTemplate,
    onClick: () => navigate('/home/spaces'),
  }

  return (
    <BreadCrumb className="m-3" model={items} home={home} />
  )
}

export default BreadCrumbs
