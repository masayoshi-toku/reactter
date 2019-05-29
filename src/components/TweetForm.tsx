import React, { FC, useState, ChangeEvent } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Tweet } from './TweetList'
import '../styles/tweetForm.css'

interface FormProps {
  post: (tweet: Tweet) => void
}

const TweetForm: FC<FormProps> = ({post = () => {}}) => {
  const [text, setText] = useState("")
  const [dataUrl, setDataUrl] = useState("")

  const extractDataUrl = (files: FileList | null) => {
    const reader = new FileReader()

    if (files) {
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        if (typeof reader.result == 'string') setDataUrl(reader.result)
      }
    }
  }

  return (
    <>
      <Form size='small'>
        <Form.Field width={6}>
          <label className='upload-button-label'>画像アップロード
            <input type='file' onChange={(e: ChangeEvent<HTMLInputElement>) => extractDataUrl(e.target.files)}></input>
          </label>
          <img src={dataUrl} alt='preview' width="200"></img>
        </Form.Field>
        <Form.Field control='textarea' rows='3' label='テキスト' value={text} onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value)} placeholder='いまなにしてる？' width={6} />
        <Button type='submit' onClick={() => {post({ text, dataUrl });setText("");setDataUrl("")}}>投稿する</Button>
      </Form>
    </>
  )
}

export default TweetForm
