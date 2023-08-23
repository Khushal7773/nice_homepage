import bgLeft from "../assets/bg-left.png";
import Ahaed from "../assets/Ahead.png";
import Smiley from "../assets/smiling.png";
import LoremIpsum from "react-lorem-ipsum";

const Component5 = () => {
    const events = [
        {  title: 'Event 1', description: <p><LoremIpsum p={1} /></p> },
        {  title: 'Event 2', description: <p><LoremIpsum p={1} /></p> },
        {  title: 'Event 3', description: <p><LoremIpsum p={1} /></p> },
        {  title: 'Event 4', description: <p><LoremIpsum p={1} /></p> },
        {  title: 'Event 5', description: <p><LoremIpsum p={1} /></p> },
        
    ]
    return( <>
        
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

export default Component5;