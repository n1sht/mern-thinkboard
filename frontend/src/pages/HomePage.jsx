import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import RateLimitedUI from "../Components/RateLimitedUI";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitedUI />}
    </div>
  );
};

export default HomePage;
// 2:10
