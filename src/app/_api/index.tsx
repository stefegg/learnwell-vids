export async function getVideos() {
  const res = await fetch(
    `https://take-home-assessment-423502.uc.r.appspot.com/videos?user_id=stephen_egbert`
  );
  return res.json();
}

type PostVideoProps = {
  title: string;
  description: string;
  videoUrl: string;
};

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
    console.log(error);
  }
}
