/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unescaped-entities */
import React, { memo, useEffect, useState} from 'react'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Message } from 'primereact/message';

function ListTree() {
    const events = [
    { status: 'Thoughtful Discussions', icon: <img className='w-4rem h-4rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1162268130807128114/C00mbsie_agoras_town_circle_conversations_people_f226a9b0-3059-4b45-b91c-37ca4e3cd3f2.png?ex=653b518c&is=6528dc8c&hm=7baae1aadaad5c56ab18c75ccbb833c8470a17880cd19760b91be2d2d720754b&=&width=621&height=621" />, image: 'game-controller.jpg', content: 'A space dedicated to fostering intellectual growth and civil conversations in the digital epoch' },
    { status: 'Democractic', content: 'Witness the power of community-driven moderation. Here, your voice matters, and together, we decide what is or is not allowed on the platform, not just a select few', icon: <img className='w-4rem h-4rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1162266633000210472/C00mbsie_icon_intellecutal_white_background_minimalist_digital__62634bd6-b658-4689-a59f-519dc8d299e7.png?ex=653b5027&is=6528db27&hm=7e6f8e5718897645ad3f3f8912d5c9b789d370f64170e493d2fd6ad42a6e7c52&=&width=621&height=621" />, color: '#673AB7' },
    { status: 'Authentic & Transparent', content: 'In the age of AI, guaranteeing authenticity is harder and more important than ever before. Say goodbye to bots and shadowy algorithms. With advanced authentication and blockchain integration, what you see is genuine human discourse', icon: <img className='w-4rem h-4rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1151408813744848946/C00mbsie_login_icon_white_background_minimilist_register_32a706f6-d216-4db3-958a-e1fb602c263b.png?ex=6538ba05&is=65264505&hm=872c01da96dde0a25740f145616b57b8367ea504a96f173eb7464e24abe7e43e&=&width=621&height=621" />, color: '#FF9800' },
  ];

  const customizedMarker = (item) => {
    return (
        <span className="flex w-5rem h-5rem align-items-center justify-content-center text-white border-circle z-1 shadow-1 welcome-list-icon" >
            {item.icon}
        </span>
    );
  };

  const customizedContent = (item) => {
    return (
        <Card title={item.status} subTitle={item.date}>
            {/* { item.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} width={200} className="shadow-1" />} */}
            <p className='text-left'>{item.content}</p>
        </Card>
    );
  };
    
  return (
    <div className="card mt-2">
        <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
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
      <img className='w-4rem h-4rem mx-3' src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/olive2.png" alt="" />
      <h1>
        Welcome to <b className='text-primary underline mx-1'>Civil</b> - The Digital Agora!
      </h1>
      <img className='w-4rem h-4rem mx-3' src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/olive2.png" alt="" />

    </div>
  )

  return (
    <Dialog 
    className='w-7'
    header={headerTempalte} 
    footer={footerTemplate}
    visible={visible} onHide={() => setVisible(false)}>
      <div>
      <Message className='w-full my-1' severity='info' text="This is an Alpha version, and as such, it likely contains bugs and/or other issues" />
      <Message className='w-full my-1' security='info' text="Features and functionalities are subject to change as we continue to develop and improve the platform" />
      <Message className='w-full my-1' security='info' text="Your feedback during this phase is invaluable. Please share your thoughts, suggestions, and experiences to help us enhance Civil" />

      </div>

      <ListTree />
    
    </Dialog>
  )
}


export default WelcomeModal