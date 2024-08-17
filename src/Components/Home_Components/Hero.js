// components/Hero.js
import Image from "next/image";

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-[#3ABEF9] to-[#1E90FF] py-12 px-4 text-white rounded-3xl min-h-[80vh] flex items-center mt-[10vh]">
            <div className="container flex flex-col items-center mx-auto text-center">

                <div className="relative top-0">
                    <h1 className="mt-0 mb-4 text-4xl font-bold">Welcome to Mr UNI</h1>
                    <p className="mb-6 text-lg">
                        This is a brief description of our website. We are glad to have you here!
                    </p>
                    <div>
                        <button className='p-3 border-2 border-white rounded-lg bg-[#1E90FF] text-[#FFFFFF] hover:bg-[#1E90FF] hover:text-black transition duration-300 ease-in-out hover:border-black'>
                            Explore More
                        </button>
                    </div>
                </div>

                <div className="relative bottom-[-110px]">
                    <Image src='/images/home/lap2.png' width={675} height={75} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
