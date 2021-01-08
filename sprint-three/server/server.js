const express = require("express");
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const cors = require("cors");
const videos = require("./videos.json");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded());

app.get("/", (req, res) => {
  res.status(200).send(videos[0]);
});

app.get("/videos", (req, res) => {
  res.status(200).send(videos);
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
    timestamp: 1545162149000,
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

  console.log(video);

  videos.push(video);

  res.status(201).send(video);
});

app.route("/videos/:id").get((req, res) => {
  requestedVideo = req.params.id;

  let requestedVideoData = videos.find((video) => video.id == requestedVideo);

  return res.status(200).send(requestedVideoData);
});

app.listen(port, () => {
  console.log("The server is running on port 8080");
});
