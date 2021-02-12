import Link from 'next/link'
import styles from './first-post.module.scss';
import Head from 'next/head';
import Layout from '../../components/layout';

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1 className={styles.Component}>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home!</a>
                </Link>
            </h2>
        </Layout>
    )
}

export default FirstPost;