import React, { Component } from 'react';
import PersistentDrawerLeft from './Menu.js';
import Slideshow from './Slide.js';
import Grid from '@material-ui/core/Grid';
import FeaturedPost from './FeaturedPost';
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
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
{
   title: 'Post title',
  date: 'Nov 11',
  description:
  'This is a wider card with supporting text below as a natural lead-in to additional content.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text',
  }
]

class Demo extends Component {
  // var data = new Date();
  //   var Hour = now.getHours();
  // var Min = now.getMinutes();
  // var Sec = now.getSeconds();
  // var now = new Date() 
  render() {
    
    let inputhtml = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.399957535865!2d130.67103232208675!3d33.653558267277496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35417fd4f7759849%3A0xb3b26a2563cccd95!2z6Kqy5aSW5rS75YuV5pa96KitICjjgrXjg7zjgq_jg6vmo58p!5e0!3m2!1sja!2sjp!4v1584590584348!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
    return (

      <React.Fragment>
          < PersistentDrawerLeft /> 
          {/* <ButtonAppBar />  */}
         {/* <SimpleContainer />  */} 
        <Slideshow />
        <div dangerouslySetInnerHTML={{ __html: inputhtml }} />
        {/* <div><a href="https://twitter.com/kit_festival?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-lang="en" data-show-count="false">Follow @kit_festival</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div> */}
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.399957535865!2d130.67103232208675!3d33.653558267277496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35417fd4f7759849%3A0xb3b26a2563cccd95!2z6Kqy5aSW5rS75YuV5pa96KitICjjgrXjg7zjgq_jg6vmo58p!5e0!3m2!1sja!2sjp!4v1584590584348!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
        <Grid container spacing={4}>
          {featuredPosts.map(post => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid> 
      
        
      </React.Fragment>
    )
  }
}
export default Demo;