import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
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
        <p>
          This is a sample website - you’ll be building a site like this on{" "}
          <a href="/images/profile.jpg">our Next.js tutorial </a>.
        </p>
      </section>
    </>
  );
}
