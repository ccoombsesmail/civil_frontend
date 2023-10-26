/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unescaped-entities */
import React, { memo, useEffect, useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { Message } from 'primereact/message';
import { Gavel2 } from '../../../svgs/svgs';

function Steps() {
  const items = [
    {
      title: 'Reports',
      icon: <img className='w-6rem h-6rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1163377755438723082/C00mbsie_icon_tribunal_report_white_background_minimalist_9d155f2c-1688-4b9d-8fe2-6c28aafe3727.png?ex=653f5af7&is=652ce5f7&hm=ce3ec0c4bc08a6a74a8d3fa7c1811edcf8a1b74d2d30e53f17a3bf6469155b67&=&width=621&height=621" />,
      content: 'Users can report content based for any of a number of possible violations as outlined in the Community Guidelines. Once a certain number of reports for a specific violation have been recording, the content is placed under Community Review (The Tribunal)'
    },

    { 
      title: 'Community Tribunal', 
      content: 'A random group of users is chosen to serve as the jury. These users are presented with the alleged guideline violation, and then review the reported content. During the review period, the defendent, jury members, reporters, and general public can chime in with their thoughts on whether or not the content has violated guidlines', 
      icon: <img className='w-6rem h-6rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1163380278740398101/C00mbsie_icon_judicial_court_jury_members_tribunal_report_white_c2a4a53f-bfd7-409c-b9e2-84e76ba07649.png?ex=653f5d51&is=652ce851&hm=bb971d1ca6106bb75c15deee2878dd4700af34625f1b020dd658c43c937f287c&=&width=621&height=621" />
    },
    { 
      title: 'Verdict', 
      content: 'If enough votes are cast, a verdict can be reached. If the number of votes do not pass a certain threshold, the voting timer is restarted, and jury members are reselected or more are added. If the voting threshold is met, the majority verdict stands', 
      icon: <img className='w-6rem h-6rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1163382474043293736/C00mbsie_icon_gavel_verdict_tribunal_white_background_minimalis_8e7728b0-255c-493d-8c1f-499094eca70b.png?ex=653f5f5c&is=652cea5c&hm=c1fbb632a2f558d29640d7af2f30c0a3290b7887bc29708d15a4f4359ada49b8&=&width=621&height=621" />
    },
    { 
      title: 'Civility Points & Tier System', 
      content: "Serving as the platform's cornerstone, this system promotes active participation, civility, and informed decision-making. Drawing from Game Theory for effective incentivization, it rewards users and strengthens community cohesion", 
      icon: <img className='w-6rem h-6rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1164088524316880946/C00mbsie_icon_points_currency_reward_users_white_background_min_dc86339e-465e-4831-bbb5-98b2f62c9d96.png?ex=6541f0eb&is=652f7beb&hm=e1b9fcc361957669ee2a0101cb2232c35a7656d437867e2808a048bc8200a72c&=&width=621&height=621" />
    },
  ];


  const productTemplate = (item) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          {item.icon}
        </div>
        <h2>{item.title}</h2>
        <p>
          {item.content}
        </p>
      </div>
    );
  };

  return (
    <div className="card mt-2">
      {
        <Carousel value={items} numScroll={1} numVisible={1} itemTemplate={productTemplate} />
      }

    </div>


  )
}


function TribunalTutorialModal({ visible, setVisible }) {

  const headerTemplate = (
    <div className='w-10 m-auto flex justify-content-between align-items-center'>
      <img className='w-6rem h-6rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1163382474043293736/C00mbsie_icon_gavel_verdict_tribunal_white_background_minimalis_8e7728b0-255c-493d-8c1f-499094eca70b.png?ex=653f5f5c&is=652cea5c&hm=c1fbb632a2f558d29640d7af2f30c0a3290b7887bc29708d15a4f4359ada49b8&=&width=621&height=621" />
      <h1 className='text-base md:text-lg lg:text-lg'>
        The Community Tribunal System
      </h1>
      <img className='w-6rem h-6rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1163382474043293736/C00mbsie_icon_gavel_verdict_tribunal_white_background_minimalis_8e7728b0-255c-493d-8c1f-499094eca70b.png?ex=653f5f5c&is=652cea5c&hm=c1fbb632a2f558d29640d7af2f30c0a3290b7887bc29708d15a4f4359ada49b8&=&width=621&height=621" />
    </div>
  )

  return (
    <Dialog
      className='w-full lg:w-7'
      header={headerTemplate}
      pt={{
        content: {
          className: 'px-0'
        }
      }}
      visible={visible} onHide={() => setVisible(false)}>
      <div className='w-full'>
        <Message icon className='w-full my-1' pt={{ text: { className: 'text-sm md:text-base text-left' } }} severity='info' text="This is an Alpha version, and as such, it likely contains bugs and/or other issues" />
        <Message icon className='w-full my-1' security='info' pt={{ text: { className: 'text-sm md:text-base' } }} text="This is just a primer to the Tribunal System. It has more facets, and will evolve in future iterations" />

      </div>

      <Steps />

    </Dialog>
  )
}


export default TribunalTutorialModal