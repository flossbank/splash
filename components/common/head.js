import Head from 'next/head'

// only put analytics on the page if we are in production and not a Next preview
const GOAT_COUNTER_ENABLE = !process.env.NEXT_PUBLIC_PREVIEW && process.env.GOAT_COUNTER_ENABLE

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
    {GOAT_COUNTER_ENABLE && (
      <script data-goatcounter="https://flossbank.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
    )}
    <meta name='viewport' content='width=device-width, initial-scale=1' />
  </Head>
)

export default FBHead
