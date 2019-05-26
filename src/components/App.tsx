import React, { FC } from 'react'
import { Header, Icon, Button, Form } from 'semantic-ui-react'

const AppComponent: FC = () => {
  return (
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
      <Form size='small'>
        <Form.Field>
          <Form.Input type='file' label='画像' width={4} />
        </Form.Field>
        <Form.Field control='textarea' rows='3' label='テキスト' placeholder='いまなにしてる？' width={6} />
        <Button type='submit'>投稿する</Button>
      </Form>
    </>
  )
}

export default AppComponent
