import useData from "../lib/use-data";

import Story from "./story.client";

export function parseStory(val) {
  return {
    id: val.id,
    url: val.url || "",
    user: val.by,
    // time is seconds since epoch, not ms
    date: new Date(val.time * 1000).getTime() || 0,
    // sometimes `kids` is `undefined`
    comments: val.kids || [],
    commentsCount: val.descendants || 0,
    score: val.score,
    title: val.title,
  };
}

export default function ServerStory({id}) {
  const data = useData(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, parseStory);

  return <Story {...data} />;
}
