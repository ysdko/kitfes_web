import React, { Component } from 'react';
import Menu from './Menu.js';
import Slideshow from './Slide.js';
import Grid from '@material-ui/core/Grid';
import FeaturedPost from './FeaturedPost';
import HeroText from './HeroText'
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Footer from './Footer'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { kit1 } from '../img/kit1.jpg'
// import { Container } from '@material-ui/core';
// import SimpleContainer from './Container'

// import FlipNumbers from 'react-flip-numbers';


const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
// {
//    title: 'Post title',
//   date: 'Nov 11',
//   description:
//   'This is a wider card with supporting text below as a natural lead-in to additional content.',
//   image: 'https://source.unsplash.com/random',
//   imageText: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   }
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  box1: {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
}))

const box1={
  title: 'Featured post',
  date: 'Nov 12',
  description:
  'This is a wider card with supporting text below as a natural lead-in to additional content.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text',
}
const box2 = {
  title: 'Featured post',
  date: 'Nov 12',
  description:
    'This is a wider card with supporting text below as a natural lead-in to additional content.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text',
}

const box3 = {
  title: 'Featured post',
  date: 'Nov 12',
  description:
    'This is a wider card with supporting text below as a natural lead-in to additional content.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text',
}

const box4 = {
  title: 'Featured post',
  date: 'Nov 12',
  description:
    'This is a wider card with supporting text below as a natural lead-in to additional content.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text',
}
export default function Demo() {
  // var data = new Date();
  //   var Hour = now.getHours();
  // var Min = now.getMinutes();
  // var Sec = now.getSeconds();
  // var now = new Date() 
  const classes = useStyles();
    
  return (

    <React.Fragment>
      <div style={{ display: 'flex' }}>
        <Menu />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} >
                <Paper style={{
                  backgroundImage: "url(/kit.jpg)", backgroundSize: "cover", 
                  width: '100%',
                  paddingTop: '35%'
                  // paddingTop: '75%'
                }}>
                  {/* <HeroText /> */}
                  <div style={{textAlign:'center'}} >
                   <HeroText />
                    </div>
                  <Footer /> 
                </Paper>
                <img style={{ display: 'none' }} src={kit1} />
                {/* <Slideshow /> */}
              </Grid>
              <Grid item xs={12} lg={12} >
                <h1 style={{textAlign: 'center'}}>Topics</h1>
              </Grid>
              {/* Recent Orders */}
              {/* <Grid item xs={12} lg={12} style={{ display: 'flex' }}> */}
                <Grid item xs={12} lg={6} >
                    <FeaturedPost post={box1} />
                </Grid>
              <Grid item xs={12} lg={6} >
                  <FeaturedPost post={box2} />
                </Grid>
              <Grid item xs={12} lg={6} >
                  <FeaturedPost post={box3} />
                </Grid>
              <Grid item xs={12} lg={6} >
                  <FeaturedPost post={box4} />
                </Grid>
              </Grid>
              {/* <FeaturedPost key={post.title} post={post} /> */}
            <Box pt={4}>
              <Footer />
            </Box>
          </Container>
        </main>
        {/* <ButtonAppBar />  */}
        {/* <SimpleContainer />  */}
        {/* <Slideshow /> */}

      </div>
      
        
    </React.Fragment>
  );
}