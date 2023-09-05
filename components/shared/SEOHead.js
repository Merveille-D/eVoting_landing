import Head from "next/head";

const SEOHead = ({
  title,
  description,
  keywords,
  url,
  ogTitle,
  ogDescription,
  ogImageUrl,
  twitterTitle,
  twitterDescription,
  twitterImageUrl,
}) => {
  const siteName = "E-voting";
  const defaultTitle = `${siteName} - Plateforme de vote en ligne sécurisée`;
  const defaultDescription =
    "Simplifiez vos élections et sondages en utilisant eVoting, la plateforme de vote en ligne sécurisée, pratique et facile à utiliser. Authentification à deux facteurs et chiffrement de bout en bout pour garantir la sécurité des données et prévenir les fraudes.";
  const defaultKeywords =
    "eVoting, vote en ligne, plateforme de vote, élections en ligne, sondages en ligne, sécurité des données, authentification à deux facteurs, chiffrement de bout en bout";
  const defaultUrl = process.env.NEXT_PUBLIC_URL;
  const defaultOgImageUrl = "/images/og-image.png";
  const defaultTwitterImageUrl = "/images/twitter-image.png";

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={url || defaultUrl} />
      <meta property="og:title" content={ogTitle || defaultTitle} />
      <meta
        property="og:description"
        content={ogDescription || defaultDescription}
      />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImageUrl || defaultOgImageUrl} />
      <meta name="twitter:title" content={twitterTitle || defaultTitle} />
      <meta
        name="twitter:description"
        content={twitterDescription || defaultDescription}
      />
      <meta name="twitter:url" content={url || defaultUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content={twitterImageUrl || defaultTwitterImageUrl}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEOHead;
