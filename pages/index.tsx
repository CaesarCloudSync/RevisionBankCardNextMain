import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
    <title>Google</title>
    <meta name="title" content="Google"></meta>
    <meta name="description" content="Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.">
    </meta>
    <meta property="og:type" content="website">
    </meta>
    <meta property="og:url" content="https://www.google.com/">
    </meta>
    <meta property="og:title" content="Google">
    </meta>
    <meta property="og:description" content="Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.">
    </meta>
    <meta property="og:image" content="https://www.businessinsider.in/thumb/msid-76111673,width-700,height-525,imgsize-308344/YouTube-is-15-years-old-Heres-a-timeline-of-how-YouTube-was-founded-its-rise-to-video-behemoth-and-its-biggest-controversies-along-way.jpg">
    </meta>

    <meta property="twitter:card" content="summary_large_image">
    </meta>
    <meta property="twitter:url" content="https://www.google.com/">
    </meta>
    <meta property="twitter:title" content="Google">
    </meta>
    <meta property="twitter:description" content="Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.">
    </meta>
    <meta property="twitter:image" content="https://www.businessinsider.in/thumb/msid-76111673,width-700,height-525,imgsize-308344/YouTube-is-15-years-old-Heres-a-timeline-of-how-YouTube-was-founded-its-rise-to-video-behemoth-and-its-biggest-controversies-along-way.jpg">
    </meta>


      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
        <iframe
	src="https://palondomus-revisionbankcardlink.hf.space"

	width="850"
	height="450"
  ></iframe>

      </main>
    </>
  )
}
