import React, { FC } from 'react'
import { Header, Item, Icon, Image } from 'semantic-ui-react'

export interface Tweet {
  text: string
  dataUrl: string
}

interface TweetListProps {
  tweets: Tweet[]
}

const TweetList: FC<TweetListProps> = ({ tweets = [] }) => (
  <>
    <Header as='h2'>投稿一覧</Header>
    <Item.Group>
      {tweets.map((t, index) => (
        <Item key={index}>
          <Icon name="user circle" size="huge" />
          <Item.Content>
            <Item.Header>テストユーザー</Item.Header>
            <Item.Meta>{t.text}</Item.Meta>
            <Item.Description>
              <Image width='200' src={t.dataUrl} />
            </Item.Description>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </>
)

export default TweetList
