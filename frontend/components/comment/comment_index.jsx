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
    let { video, comments, users, createCommentLike, deleteCommentLike, removeComment } = this.props;
    const currentUser = this.props.currentUser ? users[this.props.currentUser] : null;

    const commentForm = (
    <main className="create-comment-container">
      <header className="comment-form-header">
        {video.num_comments} Comment{video.num_comments > 1 ? "s" : null}
      </header>

      <CreateCommentContainer
        video={video}
      />
    </main>);

    const allComments = comments.map((comment) => (
      <CommentIndexItem key={comment.id} comment={comment} user={users[comment.user_id]} createCommentLike={createCommentLike} 
        deleteCommentLike={deleteCommentLike} currentUser={currentUser} removeComment={removeComment} />));

    return (
      <div className="video-comments-container">
        {commentForm}
        {allComments}
      </div>
    );
  }
}
export default withRouter(CommentIndex);