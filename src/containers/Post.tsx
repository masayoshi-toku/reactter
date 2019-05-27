import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { post } from '../actions/post'
import { TweetsState } from '../reducer'
import Post, { Tweet } from '../components/Post'

interface TweetProps {
  tweets: Tweet[]
}

interface DispatchProps {
  post: (tweet: Tweet) => void
}

const mapStateToProps = (state: TweetsState): TweetProps => ({
  tweets: state.tweets
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  post: tweet => dispatch(post(tweet))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post)
