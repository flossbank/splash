import Head from 'next/head'

const FBHead = (props) => (
  <Head>
    <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
    <meta name='google-site-verification' content='' />
    <title>
      {(props.title && props.title + ' – Flossbank') || 'Flossbank'}
    </title>

    <meta name='viewport' content='width=device-width, initial-scale=1' />
  </Head>
)

export default FBHead
