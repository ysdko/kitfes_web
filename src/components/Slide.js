
import React from 'react';
import SmartSlider from 'react-smart-slider';
import kit1 from '../img/kit1.jpg';
import kit2 from '../img/kit2.jpg';
import kit3 from '../img/kit3.jpg';
import { withTheme } from '@material-ui/core';

const DummyCaption = ({ caption }) => (
  <div style={{
    position: 'absolute',
    right: 100,
    top: 300,
    fontSize: 38,
    padding: 55,
    color:'white'
  }}>
    {caption}
  </div>
)

const slidesArray = [
  {
    url: kit1,

    // (Optional) Set if you want to add any content on your slide
    childrenElem: <DummyCaption caption="Getting ready for KIT Festival" />
  },
  {
    url: kit2,
    // childrenElem: <DummyCaption caption="Caption 2" />
  },
  {
    url: kit3,
    // childrenElem: <DummyCaption caption="Caption 3" />
  },
];


const Slideshow = () => {
  return (
    <SmartSlider slides={slidesArray} autoSlide={true} autoSlideInterval={5000} />

  )
}
export default Slideshow;

// import React from 'react';
// import { Fade } from 'react-slideshow-image';
// import kit1 from '../img/kit1.jpg';
// import kit2 from '../img/kit2.jpg';
// import kit3 from '../img/kit3.jpg';
// // import style from './style.scss'

// const fadeImages = [
//   kit1,
//   kit2,
//   kit3
// ];

// const fadeProperties = {
// 	duration: 5000,
// 	transitionDuration: 500,
// 	infinite: true,
// 	indicators: true
// };

// // var style = {
// // 	width: 100 %
// // }

// const Slideshow = () => {
//   return (
//     <Fade {...fadeProperties} >
//       <div className="each-fade">
// 		<div className="image-container" >
//           <img src={fadeImages[0]} style={{ Width: '100%' }}  alt="ステージ" />
//         </div>
//         <h2>First Slide</h2>
//       </div>
//       <div className="each-fade">
//         <div className="image-container">
// 				  <img src={fadeImages[1]} style={{ width: '100%' }} alt="アニクラ"/>
//         </div>
//         <h2>Second Slide</h2>
//       </div>
//       <div className="each-fade">
//         <div className="image-container">
// 				  <img src={fadeImages[2]} style={{ width: '100%' }} alt=""/>
//         </div>
//         <h2>Third Slide</h2>
//       </div>
//     </Fade>
//   )
// }
// export default Slideshow;
