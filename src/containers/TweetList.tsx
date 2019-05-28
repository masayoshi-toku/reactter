import { connect } from 'react-redux';
import TweetList from '../components/TweetList'
import { TweetsState } from '../reducer'

const mapStateToProps = (state: TweetsState) => ({
  tweets: state.tweets
})

export default connect(mapStateToProps)(TweetList)
