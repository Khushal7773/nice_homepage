import Tired from "../assets/tired.png";
import LoremIpsum from "react-lorem-ipsum";

const Component3 = () => {

    const events = [
        {  title: 'Event 1', description: <p><LoremIpsum p={1} /></p> },
        {  title: 'Event 2', description: <p><LoremIpsum p={1} /></p> },
        {  title: 'Event 3', description: <p><LoremIpsum p={1} /></p> },
        {  title: 'Event 4', description: <p><LoremIpsum p={1} /></p> },
        {  title: 'Event 5', description: <p><LoremIpsum p={1} /></p> },
        
    ]

    return (
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
                        >
                            <div
                                className={`absolute top-5 -left-3.5 bg-blue-500 h-6 w-6 rounded-full border-4 border-white `}
                            ></div>
                            <h3 className="mx-8">{event.title}</h3>
                            <p className="mx-8">{event.description}</p>
                        </div>
                ))}
            </div>
        </section>
    )
}

export default Component3;