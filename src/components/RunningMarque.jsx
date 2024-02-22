import React from 'react';

function RunningMarquee() {
  return (
    <div className="overflow-hidden w-full bg-[#1A392D]">
      <marquee behavior="scroll" direction="left" loop="-1" className="text-lg font-medium text-white">
        🌟 Discover our latest products || Stay informed with exclusive updates! Subscribe to our newsletter for exciting details and be the first to know about upcoming discounts. 🎉
      </marquee>
    </div>
  );
}

export default RunningMarquee;

