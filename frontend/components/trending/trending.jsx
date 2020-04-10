import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchItem from '../search/search_item';

class Trending extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrendingVideos();
  }

  render() {
    const { videos, users, history } = this.props;

    const trendingVideos = (videos.length > 0 ? (videos.sort((a, b) => b.view_count - a.view_count).map((video) => {
      return (<SearchItem video={video} user={users[video.author_id]} history={history} key={video.id} />)
    })).slice(0, -1) : (
        <main className="empty-search">
          <img src={window.no_result} className="no-result-img" />
          <h2>Sorry, no videos are trending at the moment</h2>
        </main>));

    return (
      <div className="main-search-container">
        <main className={`search-container ${this.props.sidebar.show ? "video-container-extend" : ""}`}>
          <div className="search-container2">
            <header>Trending</header>
            <section className="search-container3">
              {trendingVideos}
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Trending);