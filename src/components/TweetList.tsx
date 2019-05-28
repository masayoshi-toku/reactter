import React, { FC } from 'react'
import { Header, Item, Icon } from 'semantic-ui-react'

export interface Tweet {
  id: number
  text: string
}

interface TweetListProps {
  tweets: Tweet[]
}

const TweetList: FC<TweetListProps> = ({ tweets = [] }) => (
  <>
    <Header as='h2'>投稿一覧</Header>
    <Item.Group>
      {tweets.map(t => (
        <Item>
          <Icon name="user circle" size="huge" />
          <Item.Content>
            <Item.Header>テストユーザー</Item.Header>
            <Item.Meta>{t.text}</Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </>
)



// const TweetList: FC<TweetListProps> = ({
//   tweets = []
// }) => (
//   <>
//     <Header as='h2'>投稿一覧</Header>
//     <Item.Group>
//       {tweets.map(t => (
//         <Item>
//           <Icon name="user circle" size="huge" />
//           <Item.Content>
//             <Item.Header>テストユーザー</Item.Header>
//             <Item.Meta>{t.text}</Item.Meta>
//           </Item.Content>
//         </Item>
//       ))}
//     </Item.Group>
//   </>
// )

export default TweetList
