import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';
import schemaGenerator from 'helpers/schemaGenerator';

const Head = ({
  siteTitle,
  siteDescription,
  siteUrl,
  pageTitle,
  pageTitleFull = pageTitle ? `${siteTitle}: ${pageTitle}` : siteTitle,
  themeColor,
  social,
  imageUrl,
  location,
  canonical = siteUrl + (location.pathname || ''),
}) => (
  <Helmet>
    <html lang="en" />

    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
    <meta
      content="width=device-width,initial-scale=1.0,user-scalable=yes"
      name="viewport"
    />

    <meta content={siteTitle} name="apple-mobile-web-app-title" />
    <meta content={pageTitleFull} property="og:title" />
    <meta content={pageTitleFull} name="twitter:title" />
    <title>{pageTitleFull}</title>

    <meta content={siteDescription} name="description" />
    <meta content={siteDescription} property="og:description" />
    <meta content={siteDescription} name="twitter:description" />

    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta
      content="black-translucent"
      name="apple-mobile-web-app-status-bar-style"
    />
    <meta content={themeColor} name="theme-color" />
    <meta content={siteTitle} name="application-name" />

    <meta content="website" property="og:type" />
    <meta content={siteTitle} property="og:site_name" />
    <meta content="summary_large_image" name="twitter:card" />
    <meta content={`@${social.twitter}`} name="twitter:site" />
    <meta content={`@${social.twitter}`} name="twitter:creator" />
    <meta content={pageTitleFull} name="twitter:text:title" />
    <meta content={canonical} property="og:url" />
    <meta content={canonical} name="twitter:url" />
    <link rel="canonical" href={canonical} />

    <meta content={imageUrl || `${siteUrl}/social.jpg`} property="og:image" />
    <meta content="1024" property="og:image:width" />
    <meta content="512" property="og:image:height" />
    <meta content={imageUrl || `${siteUrl}/social.jpg`} name="twitter:image" />
    <meta content="1024" name="twitter:image:width" />
    <meta content="512" name="twitter:image:height" />
    <meta content={imageUrl || `${siteUrl}/social.jpg`} property="og:image" />
    <meta content="1024" property="og:image:width" />
    <meta content="512" property="og:image:height" />

    <meta content={themeColor} name="msapplication-TileColor" />
    <script type="application/ld+json">
      {JSON.stringify(
        schemaGenerator({
          location,
          canonical,
          siteUrl,
          pageTitle,
          siteTitle,
          pageTitleFull,
        })
      )}
    </script>
  </Helmet>
);

Head.propTypes = {
  siteTitle: PropTypes.string,
  siteTitleShort: PropTypes.string,
  siteDescription: PropTypes.string,
  siteUrl: PropTypes.string,
  themeColor: PropTypes.string,
  social: PropTypes.objectOf(PropTypes.string),
  imageUrl: PropTypes.string,
  canonical: PropTypes.string,
  pageTitle: PropTypes.string,
  pageTitleFull: PropTypes.string,
  location: PropTypes.object.isRequired,
};

const HeadWithQuery = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteTitleShort
            siteDescription
            siteUrl
            themeColor
            social {
              twitter
            }
          }
        }
      }
    `}
    render={data => (
      <Location>
        {({ location }) => (
          <Head {...data.site.siteMetadata} {...props} location={location} />
        )}
      </Location>
    )}
  />
);

export default HeadWithQuery;
