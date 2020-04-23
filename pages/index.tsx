import { NextPage } from 'next';
import Head from 'next/head';
import {
  Flex,
  Box,
  Button,
  ButtonGroup,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Link
} from '@chakra-ui/core';

import Layout from '../components/Layout';

const Index: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{'JS.AX'} </title>
      </Head>
      <Flex
        alignItems="center"
        flexDirection="column"
        flex="1"
        width={'100%'}
        maxWidth="1440px"
        margin="auto"
      >
        <h1>JS.AX</h1>

        <ul>
          <li>
            <a href="https://forgetpad.com">
              To share notes between devices use forgetpad.com
            </a>
          </li>
          <li>
            <a href="https://youtube-loop.netlify.app">
              To loop through parts of youtube videos
            </a>
          </li>
        </ul>
      </Flex>
    </Layout>
  );
};

export default Index;
