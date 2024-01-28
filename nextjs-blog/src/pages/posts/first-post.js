import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Post</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/" className="link-title">
        Back to home
      </Link>
    </>
  );
}
