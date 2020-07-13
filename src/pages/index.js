import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Heading from 'components/heading';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Heading as="h2" size="large">
        {data.homeJson.intro.childMarkdownRemark.rawMarkdownBody}
      </Heading>
    </Box>
    <Box>
      <Heading as="h3" size="medium" color="grey">
        <div
          dangerouslySetInnerHTML={{
            __html: data.homeJson.subtext.childMarkdownRemark.html,
          }}
        />
      </Heading>
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      intro {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      subtext {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
