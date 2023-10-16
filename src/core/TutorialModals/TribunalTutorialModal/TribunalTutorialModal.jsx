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
      title: 'From Tech Oligrachy, To Digital Democracy',
      icon: <img className='w-4rem h-4rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1162268130807128114/C00mbsie_agoras_town_circle_conversations_people_f226a9b0-3059-4b45-b91c-37ca4e3cd3f2.png?ex=653b518c&is=6528dc8c&hm=7baae1aadaad5c56ab18c75ccbb833c8470a17880cd19760b91be2d2d720754b&=&width=621&height=621" />,
      content: 'The Internet should be a public good. Too few companies and individuals make too many of the decisions regarding how we can use the Internet. Community moderation and decentralized governance is a step towards shifting the power to the people who actually use and rely on the Internet'
    },

    { 
      title: 'Democractic', 
      content: 'Witness the power of community-driven moderation. Here, your voice matters, and together, we decide what is or is not allowed on the platform, not just a select few', 
      icon: <img className='w-4rem h-4rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1162266633000210472/C00mbsie_icon_intellecutal_white_background_minimalist_digital__62634bd6-b658-4689-a59f-519dc8d299e7.png?ex=653b5027&is=6528db27&hm=7e6f8e5718897645ad3f3f8912d5c9b789d370f64170e493d2fd6ad42a6e7c52&=&width=621&height=621" /> 
    },
    { 
      title: 'Authentic & Transparent', 
      content: 'In the age of AI, guaranteeing authenticity is harder and more important than ever before. Say goodbye to bots and shadowy algorithms. With advanced authentication and blockchain integration, what you see is genuine human discourse', 
      icon: <img className='w-4rem h-4rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1151408813744848946/C00mbsie_login_icon_white_background_minimilist_register_32a706f6-d216-4db3-958a-e1fb602c263b.png?ex=6538ba05&is=65264505&hm=872c01da96dde0a25740f145616b57b8367ea504a96f173eb7464e24abe7e43e&=&width=621&height=621" />
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

  const headerTempalte = (
    <div className='w-10 m-auto flex justify-content-between align-items-center'>
      <Gavel2 />
      <h1 className='text-base md:text-lg lg:text-lg'>
        The Community Tribunal System
      </h1>
      <Gavel2 />
    </div>
  )

  return (
    <Dialog
      className='w-full lg:w-7'
      header={headerTempalte}
      pt={{
        content: {
          className: 'px-0'
        }
      }}
      visible={visible} onHide={() => setVisible(false)}>
      <div className='w-full'>
        <Message icon className='w-full my-1' pt={{ text: { className: 'text-sm md:text-base text-left' } }} severity='info' text="This is an Alpha version, and as such, it likely contains bugs and/or other issues" />
        <Message icon className='w-full my-1' security='info' pt={{ text: { className: 'text-sm md:text-base' } }} text="Features and functionalities are subject to change as we continue to develop and improve the platform" />

      </div>

      <Steps />

    </Dialog>
  )
}


export default TribunalTutorialModal