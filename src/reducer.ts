import { Reducer } from 'redux'
import { Tweet } from './components/TweetList'
import { TweetAction, TweetActionType } from './actions/post'

export interface TweetsState {
  tweets: Tweet[]
}

export const initialState: TweetsState = { tweets: [] }

const tweetReducer: Reducer<TweetsState, TweetAction> = (
  state: TweetsState = initialState,
  action: TweetAction,
): TweetsState => {
  switch(action.type) {
    case TweetActionType.POST:
      return { tweets: [...state.tweets, action.tweet] }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type

      return { tweets: state.tweets }
    }
  }
}

export default tweetReducer
