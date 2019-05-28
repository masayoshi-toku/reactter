import React, { FC } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Tweet } from './TweetList'

interface FormProps {
  post: (tweet: Tweet) => void
}

const TweetForm: FC<FormProps> = ({
  post = () => {},
}) => (
  <>
    <Form size='small'>
      {/* <Form.Field>
        <Form.Input type='file' label='画像' width={4} />
      </Form.Field> */}
      <Form.Field control='textarea' rows='3' label='テキスト' placeholder='いまなにしてる？' width={6} />
      <Button type='submit' onClick={() => post({id: 1, text: "TEXT"})}>投稿する</Button>
    </Form>
  </>
)

export default TweetForm
