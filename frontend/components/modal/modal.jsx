import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import VideoPostForm from '../video/video_post_form_container';
import VideoEditForm from '../video/video_edit_form';

class Modal extends React.Component {

  componentDidUpdate() {
    if (this.props.modal) {
      document.body.style.overflow = 'hidden';
    } 
    else {
      document.body.style.overflow = 'unset';
    }
  }

  render () {

    const { modal, currentUser } = this.props;
    if (!modal || !currentUser) return null;
    let component;
    switch (modal.type) {
      case 'postVideo':
        component = <VideoPostForm />;
        break;
      case 'editVideo':
        component = <VideoEditForm />;
        break
      default:
        component = null;
        break;
    }

    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    modal: state.ui.modal,
    currentUser: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
