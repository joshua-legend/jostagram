import Navigation from "./Navigation";
import Storyboard from "./StoryComponents/Storyboard";
import Topbar from "./Topbar";
import Feed from "./FeedComponents/Feed";

const Instargram = () => {
  const data = [
    {
      image: "story/story0.jpg",
      name: "Joshua",
      isPopular: false,
      city: "Tokyo",
      nation: "Japan",
      images: ["feeds/feed0.jpg", "feeds/feed1.jpg", "feeds/feed2.jpg"],
      likePeople: ["craig_love", "jinseal", "woo", "choi", "kim", "bae", "seo"],
      date: "September 19",
    },
    {
      image: "story/story1.jpg",
      name: "Jinseal",
      isPopular: false,
      city: "Seoul",
      nation: "Korea",
      images: ["feeds/feed3.jpg", "feeds/feed4.jpg", "feeds/feed5.jpg"],
      likePeople: ["craig_love", "abc", "biden", "kfc"],
      date: "September 21",
    },
    {
      image: "story/story2.jpg",
      name: "Biden",
      isPopular: true,
      city: "New York",
      nation: "USA",
      images: ["feeds/feed6.jpg", "feeds/feed7.jpg", "feeds/feed8.jpg"],
      likePeople: ["Trump", "harrison", "xijinping"],
      date: "September 25",
    },
  ];

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full max-w-sm m-auto">
        <Topbar />
        <Storyboard />
        {data.map((v) => (
          <Feed {...v} />
        ))}
        <Navigation />
      </div>
    </div>
  );
};

export default Instargram;
