'use client'
import Lottie from "react-lottie";
import React from "react";
import * as animationData from "~/assets/weatherLottie.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
export default function LottieAnimation() {
  return <Lottie   options={defaultOptions} height={200} width={400} />;
}
