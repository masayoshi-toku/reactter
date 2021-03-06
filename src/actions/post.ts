import { Tweet } from '../components/TweetList'

export enum TweetActionType {
  POST = 'POST'
}

export interface TweetAction {
  tweet: Tweet
  type: TweetActionType
}

export const post = (tweet: Tweet): TweetAction => ({
  tweet,
  type: TweetActionType.POST
})
