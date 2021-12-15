import Head from "next/head";
import Image from "next/image";
import EventsActivity from "../components/events/EventsActivity";
import FeedComp from "../components/feed/FeedComp";
import Layout from "../components/layout/Layout";
import ListBar from "../components/list/ListBar";
import Profile from "../components/profile/Profile";
import StroyComp from "../components/stories/StroyComp";

export default function Home() {
  return (
    <Layout>
      <div className="mx-auto">
        <div className="grid grid-cols-1 mt-2 lg:grid-cols-3 lg:gap-0 px-2">
          <div className="py-4 px-4">
            <Profile />
            <ListBar />
          </div>
          <div className="py-4 px-4">
            <StroyComp />
            <FeedComp />
          </div>
          <div className="py-4 px-4">
            <EventsActivity />
          </div>
        </div>
      </div>
    </Layout>
  );
}
