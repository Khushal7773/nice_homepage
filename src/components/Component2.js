import Owl from "../assets/Owl.png";
import bgLeft2 from "../assets/bg-left-2.png";

const Component2 = () => {
    return (
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
    )
}

export default Component2;