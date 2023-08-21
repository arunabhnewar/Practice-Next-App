"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Loader = () => {
  return (
    <>
      <ProgressBar
        height='4px'
        color='#53c38b'
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Loader;
