import { Reducer } from 'redux'
import { Tweet } from './components/Post'
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
      state.tweets.push(action.tweet)

      return state
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type;

      return state;
    }
  }
}

export default tweetReducer
