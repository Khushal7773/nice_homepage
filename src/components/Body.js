import React, {useState} from "react";
import AppStoreLogo from "../assets/Appstore_Logo.png";
import FiveStar from "../assets/Five-Star.png";
import LoremIpsum from "react-lorem-ipsum";
import Owl from "../assets/Owl.png";
import Tired from "../assets/tired.png";
import bgLeft from "../assets/bg-left.png";
import bgRight from "../assets/bg-right.png";
import bgLeft2 from "../assets/bg-left-2.png";
import Ahaed from "../assets/Ahead.png";
import Smiley from "../assets/smiling.png"; 
import SlidesComponent from "./Slides";

function Body() {

      const events = [
        {  title: 'Event 1', description: <p><LoremIpsum p={1} /></p> },
        {  title: 'Event 2', description: <p><LoremIpsum p={1} /></p> },
        {  title: 'Event 3', description: <p><LoremIpsum p={1} /></p> },
        {  title: 'Event 4', description: <p><LoremIpsum p={1} /></p> },
        {  title: 'Event 5', description: <p><LoremIpsum p={1} /></p> },
        
      ]

      const [activeEventIndex, setActiveEventIndex] = useState(0);

      const scrollToEvent = (index) => {
      setActiveEventIndex(index);
      const eventElement = document.getElementById(`event-${index}`);
      if (eventElement) {
      eventElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const tasks = [
    { title: 'Answer questions on your social skills' },
    { title: 'Let others anonymously answer the same questions about you' },
    { title: 'Find out where you and others see things the same way - and where not!' },
  ];

      return ( 
        <>
        <section className="bg-gray-200 py-16 m-6 h-[36rem] rounded-xl  flex justify-between">
          <div className="w-1/2 text-black text-start px-14">
            <p className="py-4">Ahead app</p>
            <p className='py-4 font-bold text-6xl'>Master your life by mastering your emotions</p>
            <span className="py-4 flex justify-normal">
              <img src={AppStoreLogo} alt='Download on the app store' className="rounded-md mr-4" />
              <span>
              <img src={FiveStar} alt="Five Star Rating" className="w-20 "/>
              <p className="text-xs mx-2">100+ AppStore reviews</p>
              </span>
            </span>
          
          </div>
        <div className="w-1/2"
        style={{
          backgroundImage: `url(${bgRight})` , 
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        >
        </div>
      </section>

      <section className='flex justify-between p-10'>
        <p className='text-black font-bold text-3xl w-1/3 mx-10 px-10'>EQ beats IQ</p>
        <p className=' text-xl w-1/3 mx-10 px-10'>People with high emotional intelligence(EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.</p>
        <p className='text-xl w-1/3 mx-10 px-10'>They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.</p>
      </section>

      <SlidesComponent />

    <section className="py-16">
        <div className="flex justify-between items-center  bg-pink-100 m-6 p-10 h-[36rem] rounded-xl"
        style={{
          backgroundImage: `url(${bgLeft2})` , 
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        
        >
            <span className="w-1/2 mx-6 px-4">
                <p>Built out of frustration</p>
                <p className="text-5xl font-bold">Meet the ahead app</p>
                <img src={Owl} alt="Owl" className="h-28 m-6" />

            </span>
            <span className="w-1/2 mx-6 px-16">
                <p className="p-4">A personalized pocket coach that provides bite-sized, science driven tools to boost emotional intelligence.</p>
                <p className="p-4">Think of it as a pocket cheerleader towards a better, more fulfilling.</p>
            </span>
        </div>

    </section>






    <section className="m-6 h-[36rem] rounded-xl px-8 py-16">
      <div className="mx-14">
        <p>Wrong with self-improvement & how we're fixing it.</p>
        <span className="flex justify-normal py-2" >
          <p className="text-5xl font-bold">Self-improvement.Ugh.</p>
          <img src={Tired} alt="Tired" className="h-10 mb-5" />
        </span>
      </div>
      <div className="border-l-4 border-blue-400 ml-[28rem] my-3 py-4 overflow-y-auto max-h-[25rem]">
        {events.map((event, index) => (
          <div
            className="relative mb-6"
            key={index}
            id={`event-${index}`}
            onClick={() => scrollToEvent(index)}
          >
            <div
              className={`absolute top-5 -left-3.5 bg-blue-500 h-6 w-6 rounded-full border-4 border-white ${index ===
              activeEventIndex ? 'active-dot' : ''}`}
            ></div>
            <h3 className="mx-8">{event.title}</h3>
            <p className="mx-8">{event.description}</p>
          </div>
        ))}
      </div>
    </section>

      <section className='flex justify-between p-10'>
        <p className='text-black font-bold text-3xl w-1/3 mx-10 px-10'>Be the best you with EQ</p>
        <p className=' text-xl w-1/3 mx-10 px-10'>Not having your own emotions under control might be holding you back.</p>
        <p className='text-xl w-1/3 mx-10 px-10'>Additionally, not understanding those of others stops you from being parent, friend you can be.</p>
      </section>

<section className="relative bg-blue-200 m-6 h-[36rem] rounded-xl px-8 py-16">
  <p className="text-center m-4">Let your friends, family, and co-workers (anonymously) rate your social skills.</p>
  <h1 className="text-center m-4 text-5xl font-bold">Ever wondered what others think of you?</h1>
  <div className="relative m-6 p-6 ">
    <div className="border-b-2 border-dashed border-orange-300 ml-40 mr-56"></div>
    <div className="flex justify-around">
      {tasks.map((task, index) => (
        <div className="relative text-sm py-6 px-20 text-center" key={index}>
          <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-blue-500 h-6 w-6 rounded-full border-4 border-white">
            {index + 1}
          </div>
          {task.title}
        </div>
      ))}
    </div>
  </div>
</section>


<section className="m-6 h-[36rem] rounded-xl px-8 py-16 text-center">
  <p className="text-xs m-2">We take privacy seriously</p>
  <h1 className="font-bold text-xl m-2">Before you get started</h1>
  <p className="text-sm m-2">"We won't share your answers with anyone (and won't ever tell you which friends said what about you)"</p>
  <p className="text-xs m-2">with love, Khushal</p>
  <button className="bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 m-2">Start a test</button>
  <p className="text-xs text-slate-500 m-2">Take only 5 minutes</p>
</section>



<section className="bg-gray-200 m-6 h-[36rem] rounded-xl px-8 py-16"
  style={{
  backgroundImage: `url(${bgLeft})` , 
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}}
>
  <div className="flex justify-between">
    <h1 className="text-5xl font-bold mx-14">Work with us</h1>
    <img src={Ahaed} alt="Ahead" className="mx-14" />
  </div>
  <div className="my-6 flex justify-between ">
    <div className="bg-white text-black rounded-xl mx-14 w-1/2 p-10">
      <img src={Smiley} alt="smily" className="h-10 mb-5"/>
      <h1 className="text-2xl font-bold mb-2">About</h1>
      <p className="mb-6">At ahead our goal is to make self-improvement fun and lasting. We know there is a way how to make it work. And that's what ahead is all about! </p>
      <h1 className="text-2xl font-bold mb-2">Product</h1>
      <p className="mb-2">Sure, you could spend ages reading books and sitting in seminars on how to become a better spouse, parent, or manager - like we did...</p>

    </div>
    <div className="bg-white text-black rounded-xl mx-14 w-1/2 p-10 overflow-y-auto max-h-[25rem]">
      {events.map((event, index) => (
        <div className="relative mb-6 border-black" key={index}>
          <h3 className="mx-8">{event.title}</h3>
          <p className="mx-8">{event.description}</p>
        </div>
      ))}
    </div>

  </div>
</section>




<section className=" m-6 h-[32rem] rounded-xl px-8 py-16 border-b border-slate-400 ">
  <h1 className="text-5xl font-bold mx-14">Open vacancies</h1>
  <div className="flex justify-between mt-6">
    <div className="bg-pink-50 mx-14 px-3 py-8 rounded-xl" >
      <h1 className="text-xl font-bold">Senior Full-Stack Engineer</h1>
      <li className="text-sm">Full time position</li>
      <li className="text-sm">Berlin or remote</li>
      <li className="text-sm">€65-85k, 0.5-1.50% equity share options</li>
    </div>
    <div className="bg-pink-50 mx-14 px-3 py-8 rounded-xl" >
      <h1 className="text-xl font-bold" >Senior Designer</h1>
      <li className="text-sm">Full time position</li>
      <li className="text-sm">Berlin or remote</li>
      <li className="text-sm">€40-55k, 0.25-0.50% equity share options</li>
    </div>
    <div className="bg-pink-50 mx-14 px-3 py-8 rounded-xl" >
      <h1 className="text-xl font-bold" >Superstar Intern</h1>
      <li className="text-sm" >Full time position</li>
      <li className="text-sm">Berlin or remote</li>
      <li className="text-sm">€20-24k, 0.5-1.50% equity share options</li>
    </div>
  </div>
</section>

</>
)

};

export default Body;