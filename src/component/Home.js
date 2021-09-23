// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

import ListPassenger from "./ListPassenger";
import Header from "./Header";
import PassengerInput from "./PassengerInput";

function Home() {
  return (
    <div>
      <Header />

      <ListPassenger />
      <PassengerInput />
    </div>
  );
}

export default Home;
