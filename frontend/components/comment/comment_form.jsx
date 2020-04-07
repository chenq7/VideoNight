import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === 'Update') {
      this.setState({ showCreateButton: true });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleComment(this.state).then(() => {
      this.setState({ body: '' });
      if (this.props.formType === 'Update') this.props.toggleEditForm();
      });
  }

  update(body) {
    return e => {
      this.setState({ [body]: e.currentTarget.value });
    };
  }

  isLoggedIn() {
    if (!this.props.currentUser) {
      this.props.history.push('/login');
      return;
    }
    this.setState({ showCreateButton: true });
  }

  hideForm() {
    if (this.props.formType === 'Create') {
      this.setState({ showCreateButton: false, body: '' });
    }
    else {
      this.props.toggleEditForm();
    }
  }

  render() {
    const is_demo = this.props.currentUser && this.props.currentUser.username === "Demo user";
    return (
      <div className="comment-form-content">
        <form className="comment-form-container" onSubmit={this.handleSubmit}>
          <div className="comment-form-top-container">
            {this.props.formType === 'Create' ? (
              <img src={is_demo ? window.user_icon : window.user} className="comments-user-profile" />
            ) : null}
            <label className="comment-form-label">
              <textarea placeholder=" Add a public comment..." onChange={this.update('body')} onClick={this.isLoggedIn}
                value={this.state.body} className="comment-textarea" />
            </label>
          </div>
          {this.state.showCreateButton && (
            <div className="comment-form-btns">
              <button className="comment-form-cancel-btn" onClick={this.hideForm}>CANCEL</button>
              <button className="comment-form-submit-btn" type="submit">{this.props.formType === 'Create' ? "COMMENT" : "SAVE"}</button>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default withRouter(CommentForm);