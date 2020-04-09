import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchItem from './search_item';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.props.location.search.slice(14).split("+").join(" ")
    };
  }

  componentDidMount() {
    this.props.fetchSearchedVideos(this.state.result);
  }

  render() {
    const { videos, users, history } = this.props;

    const searchedVideos = (videos.length > 0 ? (videos.map((video) => {
      return (<SearchItem video={video} user={users[video.author_id]} history={history} key={video.id}/>)
    })).slice(0,-1) : (
    <main className="empty-search">
      <img src={window.no_result} className="no-result-img"/>
      <h2>No results found</h2>
      <p>Try different keywords that matches the video you are looking for</p>
    </main>));

    return (
      <div className="main-search-container">
        <main className={`search-container ${this.props.sidebar.show ? "video-container-extend" : ""}`}>
          <div className="search-container2">
            <header>Filter</header>
            <section className="search-container3">
              {searchedVideos}
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Search);