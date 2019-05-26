import React, { FC, MouseEvent } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Content } from '../actions/post'

interface PostProps {
  contents: Content[]
  post: (content: Content) => void
}

const Post: FC<PostProps> = ({
  contents = [],
  post = () => {},
}) => (
  <>
    <Form size='small'>
      {/* <Form.Field>
        <Form.Input type='file' label='画像' width={4} />
      </Form.Field> */}
      <Form.Field control='textarea' rows='3' label='テキスト' placeholder='いまなにしてる？' width={6} />
      <Button type='submit' onClick={(e: MouseEvent<HTMLInputElement>) => post({id: 1, text: e.currentTarget.previousSibling.value})}>投稿する</Button>
    </Form>
  </>
)

export default Post
