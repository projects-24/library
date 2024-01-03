
import Link from 'next/link';
import dynamic from "next/dynamic"
import React, { PureComponent } from 'react';

import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Card from 'funuicss/ui/card/Card'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import {PiArrowDown, PiArrowUp, PiCursorClickDuotone,  PiUsersDuotone,  PiVoicemailDuotone} from 'react-icons/pi'
import Button from 'funuicss/ui/button/Button'


import Navbar from './navBar';





export default function Dashboard() {
    
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="dashboard">
   <Navbar />
        <div className="main ">

   <div className="padding">
   <Text text="Dashboard" heading="h2"  block/>
        <Text text="Check books analytics"  />

   </div>

             
                <div className="section">
                <Div funcss='padding'>
<Text
text='Last 30 days'
bold
/>
</Div>
<Grid>
   <Col sm={12} md={4} lg={4} funcss='padding'>
       <Card
       funcss=' round-edge hover-up'
       body={
           <RowFlex gap={1} funcss='padding-20'>
           <Button text={<PiUsersDuotone size={20} />} bg='primary' raised height="3rem" width='3rem' />
           <Div>
           <Text text='Total Books' size='small' color='dark400' block bold/>
           <RowFlex gap={0.5}>
           <Text heading='h3' text='20,000' color='dark200' />
           </RowFlex>
           </Div>
           </RowFlex>
       }

       />
   </Col>
   <Col sm={12} md={4} lg={4} funcss='padding'>
       <Card
       funcss=' round-edge hover-up'
       body={
           <RowFlex gap={1} funcss='padding-20'>
           <Button text={<PiVoicemailDuotone size={20} />} bg='primary' raised height="3rem" width='3rem' />
           <Div>
           <Text text='Total Students' size='small' color='dark400' block bold/>
           <RowFlex gap={0.5}>
           <Text heading='h3' text='60.77%' color='dark200' />
           </RowFlex>
           </Div>
           </RowFlex>
       }
 
       />
   </Col>
   <Col sm={12} md={4} lg={4} funcss='padding'>
       <Card
       funcss=' round-edge hover-up'
       body={
           <RowFlex gap={1} funcss='padding-20'>
           <Button text={<PiCursorClickDuotone size={20} />} bg='primary' raised height="3rem" width='3rem' />
           <Div>
           <Text text='Books Borrowed' size='small' color='dark400' block bold/>
           <RowFlex gap={0.5}>
           <Text heading='h3' text='20,000' color='dark200' />
           </RowFlex>
           </Div>
           </RowFlex>
       }
  
       />
   </Col>

</Grid>
                </div>

     

        </div>
    </div>
  )
}
