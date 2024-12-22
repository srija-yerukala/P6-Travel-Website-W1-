import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl :weatherImg,
        title : 'Calculate Weather',
        desc: 'Todays Weather app is a web application which tell the users about the weather details.',
    },
    {
        imgUrl :guideImg,
        title : 'Best Tour Guide',
        desc : 'Iam still processing all the fascinating information you shared.',
    },
    {
        imgUrl :customizationImg,
        title : 'Customization',
        desc : 'We created a modified itinerary and Ketan was exceptional at listening to our goals and arranging the tour to achieve them.',
    },
]
const ServiceList = () => {
  return (
    <>
     {
        servicesData.map((item, index) => (
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))
     } 
    </>
  )
}

export default ServiceList
