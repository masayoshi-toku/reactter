import React, { FC } from 'react'
import TweetForm from './containers/TweetForm'
import TweetList from './containers/TweetList'
import { Header, Icon } from 'semantic-ui-react'


const App: FC = () => (
  <>
    <header>
      <Header as='h2' className='ui center aligned icon header'>
        <div className='icons'>
          <Icon className='twitter react icon'></Icon>
          <Icon className='react icon'></Icon>
        </div>
        Reactter
      </Header>
    </header>
    <TweetList />
    <TweetForm />
  </>
)

export default App
