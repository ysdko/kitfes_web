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
import ScrollToTop from './scrollToTop';


const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
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
}))

const box1={
  title: '工大祭とは',
  date: 'Nov 12',
  description:
  '工大祭についての情報を掲載しております',
  image: '/hanabi.jpg',
  imageText: 'Image Text',
  url:'/about'
}
const box2 = {
  title: '企画一覧',
  date: 'Nov 12',
  description:
    '企画の一覧を見ることができます',
  image: '/kikaku.jpg',
  imageText: 'Image Text',
  url:'project'
}

const box3 = {
  title: '企画募集',
  date: 'Nov 12',
  description:
    '外部企画と内部企画の募集を行っております',
  image: '/bosyu.jpg',
  imageText: 'Image Text',
  url:'offer'
}

const box4 = {
  title: 'ご協賛・広告',
  date: 'Nov 12',
  description:
    'ご協賛などについてのお問い合わせはこちらから',
  image: '/sponsor.jpg',
  imageText: 'Image Text',
  url:'sponsor'
}
const box5 = {
  title: 'アクセス',
  date: 'Nov 12',
  description:
    '大学までのアクセスはこちらから',
  image: '/access.jpg',
  imageText: 'Image Text',
  url: 'access'
}
const box6 = {
  title: 'お問い合わせ',
  date: 'Nov 12',
  description:
    '工大祭へのお問い合わせはこちらから',
  image: '/contact.jpg',
  imageText: 'Image Text',
  url:'contact'
}
export default function Demo() {
  const classes = useStyles();
    
  return (

    <React.Fragment>
      <ScrollToTop/>
      <div className={classes.root}>
        <header>
          <Menu />
        </header>
        <main className={classes.content} style={{paddingLeft:"50"}}>
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
                </Paper>
                {/* <Slideshow /> */}
              </Grid>
              <Grid item xs={12} lg={12} >
                <h1 style={{ textAlign: 'center', borderBottom: '2px solid red', fontSize: "3vw" }}>2020年11月21日(土)22日(日)開催！</h1>
                <h2 style={{ textAlign: 'center', fontSize: "3vw" }}>九州工業大学飯塚キャンパス</h2>
              </Grid>
              <Grid item xs={12} lg={12} >
                <h1 style={{textAlign: 'center'}}>Topics</h1>
              </Grid>
              {/* Recent Orders */}
              {/* <Grid item xs={12} lg={12} style={{ display: 'flex' }}> */}
              <Grid item xs={12} md={6} >
                    <FeaturedPost post={box1} />
                </Grid>
              <Grid item xs={12} md={6} >
                  <FeaturedPost post={box2} />
                </Grid>
              <Grid item xs={12} md={6} >
                  <FeaturedPost post={box3} />
                </Grid>
              <Grid item xs={12} md={6} >
                  <FeaturedPost post={box4} />
              </Grid>
              <Grid item xs={12} md={6} >
                <FeaturedPost post={box5} />
              </Grid>
              <Grid item xs={12} md={6} >
                <FeaturedPost post={box6} />
              </Grid>
              </Grid>
              {/* <FeaturedPost key={post.title} post={post} /> */}
            <Box pt={4}>
              <Footer />
            </Box>
          </Container>
        </main>
      </div>
      
        
    </React.Fragment>
  );
}