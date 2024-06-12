export async function getVideos() {
  const res = await fetch(
    `https://take-home-assessment-423502.uc.r.appspot.com/videos?user_id=stephen_egbert`
  );
  return res.json();
}

const data = {
  user_id: "stephen_egbert",
  title: "test",
  description: "test_video",
  video_url: "https://www.youtube.com/watch?v=wVSKMRhhaF0",
};

export async function postVideo() {
  try {
    const response = await fetch(
      `https://take-home-assessment-423502.uc.r.appspot.com/api/videos`,
      {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );
    console.log(JSON.stringify(response.body), "-------post");
  } catch (error) {
    console.log(error);
  }
}
