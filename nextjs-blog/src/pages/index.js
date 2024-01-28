import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Date from "../../components/date";
import { getSortedPostsData } from "../../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
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
        <p>I'm sable</p>
        <p className="profile-description">
          This is a sample website - you’ll be building a site like this on{" "}
          <a href="/images/profile.jpg">our Next.js tutorial </a>.
        </p>
        <Link href="/posts/first-post" className="link-title">
          First Post
        </Link>
      </section>
      <section className="post-container">
        <h2 className="post-title">Blog</h2>
        <ul className="post-contents">
          {allPostsData.map(({ id, date, title }) => (
            <li className="post-content" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
