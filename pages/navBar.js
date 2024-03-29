import List from 'funuicss/ui/list/List';
import ListItem from 'funuicss/ui/list/Item';
import Div from 'funuicss/ui/div/Div';
import Icon from '../Funcss/Components/Icon';
import Card from '../Funcss/Components/Card';
import Avatar from '../Funcss/Components/Avatar';
import Section from 'funuicss/ui/specials/Section';
import Link from 'next/link';
import React, { PureComponent, useState ,useEffect} from 'react';
import Button from 'funuicss/ui/button/Button'
import AppBar from 'funuicss/ui/appbar/AppBar'
import Text from 'funuicss/ui/text/Text'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import Circle from 'funuicss/ui/specials/Circle'
export default function Navbar() {
  const [sidebar, setsidebar] = useState("")
  const HandlesideBar = ()=>{
    if(sidebar){
      setsidebar("")
    }else{
      setsidebar("-100%")
    }
  }
useEffect(() => {
  window.addEventListener("resize" , ()=>{
    if(screen.width > 993){
      setsidebar("")
    }
  })
}, [])

  return (
    <div className="">
   <div className=" padding">
    <AppBar
    funcss='card'
    left={<>
        <Text heading="h4" text="library catalogue" funcss="text-primary"/>
    </>}

    right={<>
      <Circle size={2} funcss='dark' raised>
                G
      </Circle>
    </>}
    sidebarTrigger={<>
          <i className='lni lni-menu hover-text-red pointer absolute top-20 right-20 h4' onClick={HandlesideBar}></i>
    
    </>}
    />
   
      </div>
        <div className="sideBar  white round-edge" style={{marginLeft:`${sidebar}`}}>
 
        <div className='sidebarContent'>
        <div className="text-center padding show-medium-down">
          <i className='lni lni-close hover-text-red pointer absolute top-20 right-20' onClick={HandlesideBar}></i>
          </div>
        <List gap={0.5}>

        <ListItem>
       <Link href="/dashboard">
        <a>
        <RowFlex justify="">
        <Div>
        <Div funcss='padding central dark900 roundEdgeSmall '>
        <Icon icon="icon-graph" color="indigo" />
        </Div>
        </Div>
        <Div funcss="padding">Dasboard</Div>
        </RowFlex>
        </a>
        </Link>
        </ListItem>
        <ListItem>
       <Link href="/books">
        <a>
        <RowFlex justify="">
        <Div>
        <Div funcss='padding central dark900 roundEdgeSmall '>
        <Icon icon="icon-notebook" color="indigo" />
        </Div>
        </Div>
        <Div funcss="padding">Books</Div>
        </RowFlex>
        </a>
        </Link>
        </ListItem>
        <ListItem>
       <Link href="/add/book">
        <a>
        <RowFlex justify="">
        <Div>
        <Div funcss='padding central dark900 roundEdgeSmall '>
        <Icon icon="icon-plus" color="indigo" />
        </Div>
        </Div>
        <Div funcss="padding">Add Book</Div>
        </RowFlex>
        </a>
        </Link>
        </ListItem>
      
        <ListItem>
       <Link href="/add/category">
        <a>
        <RowFlex justify="">
        <Div>
        <Div funcss='padding central dark900 roundEdgeSmall '>
        <Icon icon="icon-grid" color="indigo" />
        </Div>
        </Div>
        <Div funcss="padding">New Category</Div>
        </RowFlex>
        </a>
        </Link>
        </ListItem>

        </List>

        <Section gap={2}/>
        <Link href={"/"}>
        <Button text='LogOut' rounded raised bg='dark' bold fullWidth/>
        </Link>
              </div>
        </div>
    </div>
  )
}
