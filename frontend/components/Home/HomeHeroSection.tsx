"use client"
import EmblaCarousel from '@/utils/EmblaCarousel'
import React from 'react'

import { EmblaOptionsType } from 'embla-carousel'


const OPTIONS: EmblaOptionsType = {}
// const SLIDE_COUNT = 10
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const SliderData = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title: "Slide 1",
        description: "This is the first slide description.",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title: "Slide 2",
        description: "This is the second slide description.",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title: "Slide 3",
        description: "This is the third slide description.",
    },

]

const HomeHeroSection = () => {
  return (
    <div className='w-full h-auto'>

        <div className='container mx-auto h-auto'>
<EmblaCarousel slides={SliderData} options={OPTIONS}  />

hello
        </div>
        
    </div>
  )
}

export default HomeHeroSection