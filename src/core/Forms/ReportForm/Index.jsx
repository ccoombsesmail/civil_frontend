import React from 'react'

import { Formik } from 'formik'
import { SlideMenu } from 'primereact/slidemenu'
import { Footer } from '../SpaceForm/Style'

import {
  FormContainer, Container,
} from './Style/Index'
import useHandleOnSubmit from './hooks/useHandleOnSubmit'
import ExpandButton from '../../CommonComponents/Buttons/ExpandButton/Index'
import SliderMenuIcon from './components/SliderMenuIcon/SliderMenuIcon'
import {
  HarrassmentSvg, ViolationSvg,
  ExplicitSvg, ViolenceSvg, TerrorismSvg,
  TargetedSvg, DoxSvg, ProfanitySvg, Impersonate, RacismSvg, Threat,
} from '../../../svgs/svgs'
import SliderMenuItem from './components/SliderMenuTemplate/SliderMenuTemplate'
import useElementWidth from '../../CommonComponents/InfiniteLoaders/hooks/useElementWidth'

function ReportForm({ contentId, contentType, closeModal }) {
  const [elementRef, width] = useElementWidth()

  const items = [
    {
      label: 'Critical Severity: Illegal Activities or Immediate Safety Risks',
      icon: 'pi pi-fw pi-exclamation-triangle',
      // template: <SliderMenuItem sliderRef={sliderRef} text="Critical Severity: Illegal Activities or Immediate Safety Risks" primeIcon="pi-exclamation-triangle" />,
      items: [
        {
          template: (
            <SliderMenuItem fieldName="Explicit" text="Explicit Content (e.g Pornography, Graphic Nudity etc.)" Icon={<SliderMenuIcon Icon={ExplicitSvg} />} />
          ),
        },
        {
          template: (
            <SliderMenuItem fieldName="GraphicViolence" text="Graphic Violence" Icon={<SliderMenuIcon Icon={ViolenceSvg} />} />
          ),
        },
        {
          template: (
            <SliderMenuItem fieldName="Terrorism" text="Terrorism or Illegal Activities" Icon={<SliderMenuIcon Icon={TerrorismSvg} />} />
          ),
        },
      ],
    },
    {
      label: 'High Priority: Targeting, Threats, Doxing...',
      icon: <SliderMenuIcon Icon={ViolationSvg} />,
      items: [
        {
          template: (
            <SliderMenuItem fieldName="Targeted" text="Targeted Harrasment" Icon={<SliderMenuIcon Icon={TargetedSvg} />} />
          ),
        },
        {
          template: (
            <SliderMenuItem fieldName="Dox" text="Doxxing" Icon={<SliderMenuIcon Icon={DoxSvg} />} />
          ),
        },
        {
          template: (
            <SliderMenuItem fieldName="Threat" text="Threats" Icon={<SliderMenuIcon Icon={Threat} />} />
          ),
        },
      ],
    },
    {
      label: 'Moderate Violations: Extreme profanity, overt racism, impersonation...',
      icon: <SliderMenuIcon Icon={HarrassmentSvg} />,
      items: [
        {
          template: (
            <SliderMenuItem fieldName="Profanity" text="Extremely Offensive Language" Icon={<SliderMenuIcon Icon={ProfanitySvg} />} />
          ),
        },
        {
          template: (
            <SliderMenuItem fieldName="Impersonation" text="Impersonating Another Person Or User" Icon={<SliderMenuIcon Icon={Impersonate} />} />
          ),
        },
        {
          template: (
            <SliderMenuItem fieldName="Racism" text="Overt Racism" Icon={<SliderMenuIcon Icon={RacismSvg} />} />
          ),
        },
      ],
    },
    // {
    //   separator: true,
    // },
    // {
    //   label: 'Possible False Information',
    //   icon: <SliderMenuIcon Icon={PeerReview} />,
    //   items: [
    //     {
    //       label: 'Bookmark',
    //       icon: 'pi pi-fw pi-bookmark',
    //     },
    //     {
    //       label: 'Video',
    //       icon: 'pi pi-fw pi-video',
    //     },
    //   ],
    // },
  ]

  const handleOnSubmit = useHandleOnSubmit(contentId, contentType, closeModal)
  return (
    <Container>
      <Formik
        initialValues={{
          Targeted: false,
          Dox: false,
          Threat: false,
          Explicit: false,
          GraphicViolence: false,
          Terrorism: false,
          Profanity: false,
          Impersonation: false,
          Racism: false,
        }}
        validate={() => {
          const errors = {}
          return errors
        }}
        disabled
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting }) => (
          <FormContainer ref={elementRef}>
            <SlideMenu
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
              menuWidth={width}
              viewportHeight={300}
              model={items}
              pt={{
                root: {
                  className: 'w-full',
                },
                wrapper: {
                  className: 'w-full',
                },
                content: {
                  className: 'w-full',
                },
                menu: {
                  className: 'w-full',
                },
                menuitem: {
                  className: 'w-full text-lg font-bold',
                },
                icon: {
                  className: 'slide-menu-icon mr-5',
                },
              }}
            />
            <Footer>
              <ExpandButton type="submit" disabled={isSubmitting}>
                Submit
              </ExpandButton>
            </Footer>
          </FormContainer>
        )}
      </Formik>
    </Container>

  )
}

export default ReportForm
