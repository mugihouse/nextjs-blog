import { getAllPostIds, getPostData } from "../../../lib/posts";
import Link from "next/link";
import Image from "next/image";

export default function Post({ postData }) {
  return (
    <>
      <Image
        priority
        src="/images/profile.jpg"
        className="profile-img"
        height={144}
        width={144}
        alt=""
      />
      <section className="profile">
        <h1 className="profile-name"></h1>
      </section>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <Link href="/">Back To Home</Link>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
