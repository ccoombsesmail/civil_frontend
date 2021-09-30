import React from 'react'
import { Button } from '../CommonComponents/Button/Style'
import SelectIconForm from '../SelectIconForm/Index'
import UploadIconForm from './components/UploadIconForm/Index'
import { Container, UploadIcon, Label, UploadInput } from './Style'

const Dashboard = () => {

  return (
    <Container>
      <UploadIconForm />
      <SelectIconForm />
    </Container>
  )

}



export default Dashboard