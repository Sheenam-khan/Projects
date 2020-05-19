import React from "react";
import { Paper,Grid, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  console.log(video.id.videoId);
  console.log(video);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>

      <Paper elevation={2} style={{ height: "70%" }}>
          <Grid item xs={12}> <iframe
          frameBorder="0"
          width="100%"
          height="100%"
          title="Video Player"
          src={videoSrc}
        />
        </Grid>
      </Paper>
      <Paper elevation={2} style={{ padding: "15px" }}>
        <Typography variant="h6">
          {video.snippet.title}-{video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </div>
  );
};

export default VideoDetail;
