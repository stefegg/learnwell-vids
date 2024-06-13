type Video = {
  created_at: Date;
  video_url: string;
  user_id: string;
  description: string;
  title: string;
  num_comments: string;
  id: string;
};

type Comment = {
  created_at: Date;
  content: string;
  user_id: string;
  video_id: string;
  id: string;
};

type VideosReturn = {
  videos: Video[] | [];
};

type VideoReturn = {
  video: Video;
};

type CommentReturn = {
  comments: Comment[] | [];
};

type PostVideoProps = {
  title: string;
  description: string;
  videoUrl: string;
};

type ValidationError = {
  detail: [
    {
      loc: [string, 0];
      msg: string;
      type: string;
    }
  ];
};

// Call to get all videos
export async function getVideos(): Promise<VideosReturn> {
  try {
    const res = await fetch(
      `https://take-home-assessment-423502.uc.r.appspot.com/videos?user_id=stephen_egbert`
    );

    return res.json();
  } catch (error) {
    throw new Error(`${error}`);
  }
}

// Call to get single video by Id
export async function getVideo(id: string): Promise<VideoReturn> {
  try {
    const res = await fetch(
      `https://take-home-assessment-423502.uc.r.appspot.com/api/videos/single?video_id=${id}`
    );
    return res.json();
  } catch (error) {
    throw new Error(`${error}`);
  }
}

// Call to get single video's comments by video Id

export async function getVideoComments(id: string): Promise<CommentReturn[]> {
  try {
    const res = await fetch(
      `https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments?video_id=${id}`
    );
    return res.json();
  } catch (error) {
    throw new Error(`${error}`);
  }
}

// Call to post video
export async function postVideo(props: PostVideoProps) {
  const { title, description, videoUrl } = props;
  try {
    const response = await fetch(
      `https://take-home-assessment-423502.uc.r.appspot.com/api/videos`,
      {
        body: JSON.stringify({
          user_id: "stephen_egbert",
          title,
          description,
          video_url: videoUrl,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );
    return response.status;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
