import {Suspense} from "react";

import Spinner from "../components/spinner";
import useData from "../lib/use-data";
import ServerStory from "../components/story.server";

export default function NewsPage() {
  const storyIds = useData(`https://hacker-news.firebaseio.com/v0/topstories.json`);

  return (
    <>
      {storyIds.slice(0, 30).map((id) => {
        return (
          <Suspense key={id} fallback={<Spinner />}>
            <ServerStory id={id} />
          </Suspense>
        );
      })}
    </>
  );
}
