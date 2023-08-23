const Component4 = () => {

    const tasks = [
        { title: 'Answer questions on your social skills' },
        { title: 'Let others anonymously answer the same questions about you' },
        { title: 'Find out where you and others see things the same way - and where not!' },
    ];
    
    return ( <>
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
                            <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-blue-500 h-6 w-6     rounded-full     border-4 border-white">
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

        </>)
}

export default Component4;