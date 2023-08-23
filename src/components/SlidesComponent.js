// import React from 'react';
import Slider from 'react-slick';
import LoremIpsum from 'react-lorem-ipsum';
import Angry from '../assets/angry.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlidesComponent = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    return(
        <section className="py-16 h-auto ">
        <div className="container mx-auto">
          <div className="flex justify-normal items-center py-10">
          <h3 className="text-5xl font-bold mb-8 px-14 text-start">Does this sound familiar...</h3>
          <img src={Angry} alt="Angry logo" className="h-10 mb-8" />
          </div>
          <Slider {...sliderSettings}>
          
            <div className="bg-slate-200 p-6 mx-10  rounded-lg shadow">
              <h4 className="text-lg font-bold mb-2">Feature 1</h4>
              <p className="text-gray-700"><LoremIpsum p={1}  avgWordsPerSentence={1} /></p>
            </div>
            <div className="bg-purple-200 p-6 mx-10 rounded-lg shadow">
              <h4 className="text-lg font-bold mb-2">Feature 2</h4>
              <p className="text-gray-700"><LoremIpsum p={1}  avgWordsPerSentence={1} /></p>
            </div>
            <div className="bg-gray-200 p-6 mx-10 rounded-lg shadow">
              <h4 className="text-lg font-bold mb-2">Feature 3</h4>
              <p className="text-gray-700"><LoremIpsum p={1}  avgWordsPerSentence={1} /></p>
            </div>
            <div className="bg-blue-200 p-6 mx-10 rounded-lg shadow">
              <h4 className="text-lg font-bold mb-2">Feature 4</h4>
              <p className="text-gray-700"> <LoremIpsum p={1}  avgWordsPerSentence={1} /></p>
            </div>
            <div className="bg-pink-200 p-6 mx-10 rounded-lg shadow">
              <h4 className="text-lg font-bold mb-2">Feature 5</h4>
              <p className="text-gray-700"><LoremIpsum p={1}  avgWordsPerSentence={1} /></p>
            </div>
            <div className="bg-gray-200 p-6 mx-10 rounded-lg shadow">
              <h4 className="text-lg font-bold mb-2">Feature 6</h4>
              <p className="text-gray-700"><LoremIpsum p={1}  avgWordsPerSentence={1} /></p>
            </div>
          
          </Slider>
        </div>
      </section>
    )

};

export default SlidesComponent;