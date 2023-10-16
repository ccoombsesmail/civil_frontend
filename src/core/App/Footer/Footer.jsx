import React, { useState, useEffect, useCallback } from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import './Footer.css'
import { UserSettingsSvg, HomeIcon, NotificationSvg, Gavel2, UserIconSvg } from '../../../svgs/svgs';
import { Link, useNavigate } from 'react-router-dom';
import useGetCurrentUser from '../hooks/useGetCurrentUser';

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate()
  const { currentUser } = useGetCurrentUser()

  const onTabChange = useCallback((e) => {
    setActiveIndex(e.index)

    switch (e.index) {
      case 0:
        navigate('/home/spaces')
        break;
      case 1:
        if (!currentUser) {
          navigate('/authenticate')
        } else {
          navigate('/dashboard')
        }
        break;
      case 2:
        navigate('/home/notifications')
        break;
      case 3:
        navigate('/home/notifications-tribunal')
        break;
      default:
        break;
    }
  }, [activeIndex])

    const items = [
        {label: '', icon: <HomeIcon className={activeIndex === 0 ? 'active-footer-index' : ''} />},
        {label: '', icon: <UserSettingsSvg size='24px' className={activeIndex === 1 ? 'active-footer-index' : ''} ></UserSettingsSvg>},
        {label: '', icon: <NotificationSvg size='24px' className={activeIndex === 2 ? 'active-footer-index' : ''} />},
        {label: '', icon: <Gavel2 size='24px' className={activeIndex === 3 ? 'active-footer-index' : ''} />},
    ];

    const signedOutItems = [
      {label: '', icon: <HomeIcon className={activeIndex === 0 ? 'active-footer-index' : ''} />},
      {label: '', icon: <UserIconSvg className={activeIndex === 1 ? 'active-footer-index' : ''} ></UserIconSvg>},

    ]

    return (
        <div className={`card custom-tab-menu`}>
            <TabMenu pt={{
              menu: {
                className: 'flex justify-content-between'
              }
            }} model={!currentUser ? signedOutItems : items} activeIndex={activeIndex} onTabChange={onTabChange}/>
        </div>
    )
}
         