import { getAllPostIds, getPostData } from "../../../lib/posts";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Date from "../../../components/date";

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Image
        priority
        src="/images/profile.jpg"
        className="profile-img"
        height={144}
        width={144}
        alt=""
      />
      <section className="profile mt-8">
        <h1 className="profile-name"></h1>
      </section>
      <div className="article-content">
        {postData.title}
        <br />
        {postData.id}
        <br />
        <Date dateString={postData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <br />
        <Link href="/">Back To Home</Link>
      </div>
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
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
