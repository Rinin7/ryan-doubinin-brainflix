const express = require("express");
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const cors = require("cors");
let videos = require("./videos.json");
const { v4: uuidv4 } = require("uuid");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send(videos[0]);
});

app.get("/videos", (req, res) => {
  res.status(200).send(videos);
});

app.get("/videos/:id/comments", (req, res) => {
  requestedVideo = req.params.id;

  let requestedVideoData = videos.find((video) => video.id == requestedVideo);

  res.status(200).send(requestedVideoData.comments);
});

app.post("/videos/:id/comments", (req, res) => {
  const { comment } = req.body;

  requestedVideo = req.params.id;

  let requestedVideoData = videos.find((video) => video.id == requestedVideo);

  let newComment = {
    id: uuidv4(),
    name: "Ryan",
    comment,
    likes: 0,
    timestamp: Date.now(),
  };

  requestedVideoData.comments.push(newComment);

  res.status(201).send(comment);
});

app.post("/videos", (req, res) => {
  const { title, description, image } = req.body;

  let video = {
    id: uuidv4(),
    title,
    channel: "Ry Doobs",
    image,
    description,
    views: "9,999,999",
    likes: "696,969",
    duration: "4:20",
    timestamp: Date.now(),
    comments: [
      {
        name: "Micheal Lyons",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        likes: 0,
        timestamp: 1545162149000,
      },
      {
        name: "Gary Wong",
        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
        likes: 0,
        timestamp: 1544595784046,
      },
      {
        name: "Theodore Duncan",
        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
        likes: 0,
        timestamp: 1542262984046,
      },
    ],
  };

  videos.push(video);

  res.status(201).send(video);
});

app.route("/videos/:id").get((req, res) => {
  requestedVideo = req.params.id;

  let requestedVideoData = videos.find((video) => video.id == requestedVideo);

  return res.status(200).send(requestedVideoData);
});

app.route("/videos/:videoId/likes").put((req, res) => {
  requestedVideo = req.params.videoId;

  // newLikes a variable to use to send the number of likes to the client
  let newLikes;

  videos = videos.map((video) => {
    if (video.id === requestedVideo) {
      // variable to turn likes data to a number in order to increment/decrease it by 1
      let likesAsNumber = parseInt(video.likes.replace(",", ""));
      // newLikes is increased or decreased based on liked boolean being true/false and then converted into a string to send back to the client side
      newLikes = (req.body.liked ? likesAsNumber + 1 : likesAsNumber - 1).toLocaleString();

      // return video object data and only update likes and liked data
      return {
        ...video,
        likes: newLikes,
        liked: req.body.liked,
      };
    } else {
      return video;
    }
  });

  if (newLikes === undefined) {
    return res.status(404).send({ Error: "Video ID not found." });
  }

  return res.status(200).send({ likes: newLikes, liked: req.body.liked });
});

app.listen(port, () => {
  console.log("The server is running on port 8080");
});
