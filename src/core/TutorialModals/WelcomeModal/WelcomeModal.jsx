/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState} from 'react'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { Carousel } from 'primereact/carousel';

import { Message } from 'primereact/message';

function Steps() {
  const items = [
    {
      title: 'From Tech Oligrachy, To Digital Democracy',
      icon: <img className='w-4rem h-4rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1162268130807128114/C00mbsie_agoras_town_circle_conversations_people_f226a9b0-3059-4b45-b91c-37ca4e3cd3f2.png?ex=653b518c&is=6528dc8c&hm=7baae1aadaad5c56ab18c75ccbb833c8470a17880cd19760b91be2d2d720754b&=&width=621&height=621" />,
      content: 'The Internet should be a public good. Too few companies and individuals make too many of the decisions regarding how we can use our Internet. On Civil, the community moderates the platform through a stuctured Tribunal system. This is just the first step towards shifting the power to the people who actually use and rely on the Internet'
    },

    { 
      title: 'Self Sovereign Identity (SSI)', 
      content: 'Currently, the internet is a collection of walled gardens. A few entities control vast amounts of data, and control your digital identity. Self-soverign identities are controlled by the user, and are not dependent on any specific app. Think of an SSI as your passport to the digital world', 
      icon: <img className='w-4rem h-4rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1151408813744848946/C00mbsie_login_icon_white_background_minimilist_register_32a706f6-d216-4db3-958a-e1fb602c263b.png?ex=6538ba05&is=65264505&hm=872c01da96dde0a25740f145616b57b8367ea504a96f173eb7464e24abe7e43e&=&width=621&height=621" />
      // <img className='w-4rem h-4rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1162266633000210472/C00mbsie_icon_intellecutal_white_background_minimalist_digital__62634bd6-b658-4689-a59f-519dc8d299e7.png?ex=653b5027&is=6528db27&hm=7e6f8e5718897645ad3f3f8912d5c9b789d370f64170e493d2fd6ad42a6e7c52&=&width=621&height=621" /> 
    },
    { 
      title: 'Combatting AI and Bots', 
      content: 'On many popular discussion platforms, a large amount of content is created by bots and AI. This is has only gotten more difficult to combat with the proliferation of LLMs like GPT4. On Civil, identity can be verified thanks to Civic, Identity Verification Software (IDV) which uses blockchain technology and varius methods like secure biometrics to identifiy bots and unique users (one person to one account)', 
      icon: <img className='w-6rem h-6rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1163370189736382504/C00mbsie_icon_AI_white_background_minimalist_134a7793-7477-4589-ab39-dd459d09950c.png?ex=653f53eb&is=652cdeeb&hm=cb73fd3bd3b95bbe04a7e44bd97316424cfae2796a6f3d721c2fd75efeb2f96c&=&width=621&height=621" />
    },
  ];


  const productTemplate = (item) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          {item.icon}
        </div>
        <h2>{item.title}</h2>
        <p className='text-lg'>
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


function WelcomeModal() {
  const [visible, setVisible] = useState(false)

  const hasVisited = JSON.parse(localStorage.getItem('hasVisited'))


  useEffect(() => {
    
    if (!hasVisited) {
      setVisible(true)
    }
  }, [hasVisited])

  const footerTemplate = (
    <>
      <Button label="Don't Show Again" onClick={() => {
        localStorage.setItem('hasVisited', true)
        setVisible(false)
        }} />
    </>
  )

  const headerTempalte = (
    <div className='w-10 m-auto flex justify-content-between align-items-center'>
      <img className='w-4rem h-4rem mx-3 hidden lg:block' src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/olive2.png" alt="" />
      <h1 className='text-base lg:text-2xl'>
        Welcome to <b className='text-primary underline mx-1'>Civil</b> - The Digital Agora!
      </h1>
      <img className='w-4rem h-4rem mx-3 hidden lg:block' src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/olive2.png" alt="" />

    </div>
  )

  return (
    <Dialog 
    className='w-full lg:w-7'
    header={headerTempalte} 
    footer={footerTemplate}
    pt={{
      content: {
        className: 'px-0'
      }
    }}
    visible={visible} onHide={() => setVisible(false)}>
      <div className='w-full'>
      <Message icon className='w-full my-1' pt={{text: { className: 'text-sm md:text-base text-left'}}} severity='info' text="This is an Alpha version, and as such, it likely contains bugs and/or other issues" />
      <Message icon className='w-full my-1' severity='info' pt={{text: { className: 'text-sm md:text-base'}}}  text="Features and functionalities are subject to change as we continue to develop and improve the platform" />
      <Message icon className='w-full my-1' severity='info' pt={{text: { className: 'text-sm md:text-base'}}}  text="Your feedback during this phase is invaluable. Please share your thoughts, suggestions, and experiences to help us enhance Civil" />
      <Message icon className='w-full my-1' severity='success' pt={{text: { className: 'text-sm md:text-base'}}}  text={
          <div>
          <h4>For Full Access, Please Download The Phantom Wallet</h4>
        <Button 
        className='wallet-adapter-button m-auto' 
        style={{backgroundColor: '#AB9FF2'}} 
        label="Phantom" 
        icon={<img className='w-3  lg:block' src='https://civil-dev.s3.us-west-1.amazonaws.com/assets/Phantom-Icon_App_60x60.png' />} 
        onClick={() => window.open("https://phantom.app/download", "_blank")}

        />
           </div>
        } />
     
      </div>

      <Steps />
    
    </Dialog>
  )
}


export default WelcomeModal