import React, { Component } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoDetail, VideoList } from "./components";

class App extends Component {
  state = {
    videos: [],
    selectedVideos: null,
  };
  
  componentDidMount() {
    this.handleSubmit("pdf generate with react");
  }

  handleSubmit = async (searchTerm) => {
    console.log(searchTerm);
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAk1BooHhGIaa7hum6rH44tkK7oLuzZJyI",
        q: searchTerm,
      },
    });
    console.log(response.data.items);

    this.setState({
      videos: response.data.items,
      selectedVideos: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideos: video,
    });
  };

  render() {
    const { selectedVideos, videos } = this.state;

    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideos} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
