import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Content, post } from '../actions/post'
import Post from '../components/Post'

interface ContentProps {
  contents: Content[]
}

interface DispatchProps {
  post: (content: Content) => void
}

const mapStateToProps = (state: ContentProps): ContentProps => ({
  contents: state.contents,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  post: content => dispatch(post(content))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post)
