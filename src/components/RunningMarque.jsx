function RunningMarquee() {
    return (
        <div className="overflow-hidden w-full bg-[#fd9b40]">
            <marquee behavior="scroll" direction="left" loop="-1" className="text-lg flex justify-center items-center h-10 font-medium text-[#290c06]">
            🌟 Explore our latest products! || Stay informed with exclusive updates and be the first to know about our upcoming releases. Additionally, we offer a diverse range of extracts in various forms, spices, natural food colors, preservatives, and more || Enjoy the added satisfaction! 🎉
            </marquee>
        </div>
    );
}

export default RunningMarquee;
