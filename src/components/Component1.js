import AppStoreLogo from "../assets/Appstore_Logo.png";
import FiveStar from "../assets/Five-Star.png";
import bgRight from "../assets/bg-right.png";

const Component1 = () => {
  return (<>
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
          </>
  )
};

export default Component1;

