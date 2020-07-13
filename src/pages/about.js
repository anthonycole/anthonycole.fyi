import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Heading from 'components/heading';
import Box from 'components/box';
import ContentBox from 'components/content-box';
import Head from 'components/head';

const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <Box>
      <Heading as="h2" size="large">
        About Me
      </Heading>
    </Box>
    <Box>
      <Heading as="h3" size="medium" color="grey">
        <div
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.subheading.childMarkdownRemark.html,
        }}
      />
      </Heading>
    </Box>
    <ContentBox>
      <div
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
    </ContentBox>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      subheading {
        childMarkdownRemark {
          html
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
