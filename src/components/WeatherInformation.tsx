"use client"
import React, { useState } from "react";
import { WeatherApi } from "~/app/services/hooks/WeatherApi";

export default function WeatherInformation() {
  const [ city , setCity ] = useState('arak')
  const { data, isLoading } = WeatherApi({city : city } );
  return <div></div>;
}
