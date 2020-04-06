import React from 'react';
import { withRouter } from 'react-router-dom';
import EditCommentContainer from './edit_comment_form_container';
import getDate from '../../util/date_util';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showEditForm: false };
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.createLike = this.createLike.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleEditForm() {
    this.setState({ showEditForm: false });
  }

  createLike(is_liked) {
    let like = {
      is_liked,
      likeable_id: this.props.comment.id,
      likeable_type: "Comment"
    };
    this.props.createCommentLike(like);
  }

  handleLike(e, is_liked) {
    e.preventDefault();
    const { comment, deleteCommentLike } = this.props;
    if (!this.props.currentUser) {
      this.props.history.push('/login');
      return;
    }
    if (comment.like) {
      if (is_liked === comment.like.is_liked) {
        deleteCommentLike(comment.id);
      } 
      else {
        deleteCommentLike(comment.id).then(() => this.createLike(is_liked));
      }
    } 
    else {
      this.createLike(is_liked);
    }
  }

  checkLike(is_liked) {
    if (!this.props.currentUser) return;
    if (this.props.comment.like && this.props.comment.like.is_liked === is_liked) {
      return `show-blue-image`;
    }
    return null;
  }

  handleDelete(e) {
    e.preventDefault();
    if (this.props.currentUser.id !== this.props.comment.user_id) return;
    this.props.removeComment(this.props.comment.id)
  }

  render() {
    const { comment, currentUser, user } = this.props;
    const num_likes = comment.like_counts.true;
    const num_dislikes = comment.like_counts.false;

    const commentButtons = (currentUser && currentUser.id === comment.user_id ? (
      <>
        <span className="comment-edit-buttons" onClick={() => this.setState({ showEditForm: true })}>Edit</span>
        <span className="comment-edit-buttons" onClick={this.handleDelete}>Delete</span>
      </>
    ) : null);

    return (
      <div className="comment-item-container">
        <img src={window.user} className="comments-user-profile" />
        {!this.state.showEditForm ? (
          <>
            <div className="comment-item-info">
              <div className="comment-item-user-info">
                <span className={(currentUser && currentUser.id === id ? "comment-item-currentuser" : "")}>{user.username}</span>
                <span>{getDate(comment.created_at)}</span>
              </div>
              <div className="comment-item-body">
                <p>{comment.body}</p>
              </div>
              <div className="comment-item-likes-container">
                <div
                  className={`pointer ${this.checkLike(true, "like")}`}
                  onClick={(e) => this.handleLike(e, true)}
                >
                  <img src={window.likesIcon} />
                  <span>{num_likes ? num_likes : 0}</span>
                </div>
                <div
                  className={`pointer ${this.checkLike(false, "like")}`}
                  onClick={(e) => this.handleLike(e, false)}
                >
                  <img src={window.dislikesIcon} />
                  <span>{num_dislikes ? num_dislikes : 0}</span>
                </div>
              </div>
            </div>
            {commentButtons}
          </>
        ) : (
          <EditCommentContainer comment={comment} toggleEditForm={this.toggleEditForm}/>
        )}
      </div>
    );
  }
};

export default withRouter(CommentIndexItem);