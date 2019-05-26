import { Reducer } from 'redux'
import { Content, TweetAction, TweetActionType } from './actions/post'

export interface ContentsState {
  contents: Content[]
}

const initialState: ContentsState = { contents: [] }

const tweetReducer: Reducer<ContentsState, TweetAction> = (
  state: ContentsState = initialState,
  action: TweetAction
): ContentsState => {
  switch(action.type) {
    case TweetActionType.POST:
      return state.push(action.content)
  }
}
