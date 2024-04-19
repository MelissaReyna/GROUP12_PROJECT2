import React from "react";

import Logos from "../components/sections/Logos";
import HomeBanner from "../components/sections/HomeBanner";
import Program from "../components/sections/Program";
import Choose from "../components/sections/Choose";
import Pricing from "../components/sections/Pricing";
import Calculate from "../components/sections/Calculate";


class Home extends React.Component {
  render() {
    return (
      <main className="main">
        <HomeBanner />
        <Logos/>
        <Program />
        <Choose />
        <Pricing />
        <Calculate />
        
      </main>
    );
  }
}

export default Home;
