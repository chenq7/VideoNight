import React from 'react';
import { withRouter } from 'react-router-dom';
import CreateCommentContainer from './create_comment_container';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchAllComments(this.props.video.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
      this.props.fetchAllComments(this.props.video.id);
    }
  }

  render() {
    const { video, comments, users, createCommentLike, deleteCommentLike, currentUser, removeComment } = this.props;
    const currentUser = currentUser ? users[currentUser] : null;

    const commentForm = (
    <main className="create-comment-container">
      <header className="comment-form-header">
        {video.comment_count} Comment{video.comment_count > 1 ? "s" : null}
      </header>

      <CreateCommentContainer
        video={video}
      />
    </main>);

    const comments = comments.map((comment) => (
      <CommentIndexItem key={comment.id} comment={comment} user={users[comment.user_id]} createCommentLike={createCommentLike} 
        deleteCommentLike={deleteCommentLike} currentUser={currUser} removeComment={removeComment} />));

    return (
      <div className="video-comments-container">
        {commentForm}
        {comments}
      </div>
    );
  }
}
export default withRouter(CommentIndex);