import React from 'react';
import { withRouter } from 'react-router-dom';
import EditCommentContainer from './edit_comment_container';
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
    const num_likes = comment.num_likes.true;
    const num_dislikes = comment.num_likes.false;

    const commentButtons = (currentUser && currentUser.id === comment.user_id ? (
      <div>
        <button className="comment-edit-buttons" onClick={() => this.setState({ showEditForm: true })}>Edit</button>
        <button className="comment-edit-buttons" onClick={this.handleDelete}>Delete</button>
      </div>
    ) : null);

    const is_demo = user && user.username === "Demo user";

    return (
      <div className="comment-item-container">
        <img src={is_demo ? window.user_icon : window.user} className="comments-user-profile" />
        {!this.state.showEditForm ? (
          <>
            <div className="comment-item-info">
              <div className="comment-item-info-header">
                <div className="comment-item-user-info">
                  <span className={(currentUser && currentUser.id === user.id ? "current-user-comment" : "comment-item-username")}>{user.username}</span>
                  <span className="comment-item-date">{getDate(comment.created_at)}</span>
                </div>
                {commentButtons}
              </div>
              <div className="comment-item-body">
                <p>{comment.body}</p>
              </div>
              <div className="comment-item-likes-container">
                <div className={`likes-container-div pointer ${this.checkLike(true, "like")}`} onClick={(e) => this.handleLike(e, true)}>
                  <img src={window.like} className={`like-icon2 ${comment.like && comment.like.is_liked ? "show-blue-image" : ""}`} />
                  <span>{num_likes ? num_likes : 0}</span>
                </div>
                <div className={`likes-container-div pointer ${this.checkLike(false, "like")}`} onClick={(e) => this.handleLike(e, false)}>
                  <img src={window.like} className={`like-icon2 rotated ${comment.like && !comment.like.is_liked ? "show-blue-image" : ""}`}  />
                  <span>{num_dislikes ? num_dislikes : 0}</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <EditCommentContainer comment={comment} toggleEditForm={this.toggleEditForm}/>
        )}
      </div>
    );
  }
};

export default withRouter(CommentIndexItem);