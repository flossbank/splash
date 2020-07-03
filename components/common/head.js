import Head from 'next/head'

const FBHead = ({ title, description }) => (
  <Head>
    <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
    <meta
      name='description'
      content={
        description ||
      'Flossbank provides a free and frictionless way to support Open Source maintainers across the entire dependency tree of your installed packages.'
      }
    />
    <title>{(title && title + ' – Flossbank') || 'Flossbank'}</title>

    <meta name='viewport' content='width=device-width, initial-scale=1' />
  </Head>
)

export default FBHead
