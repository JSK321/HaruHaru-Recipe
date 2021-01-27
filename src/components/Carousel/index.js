import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

export default function CarouselComponent() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/jsk321/image/upload/v1611706500/ummas_cb/2014cody_ku5msz.jpg"
                    style={{ maxWidth: '450px', height: 'auto', margin: '0 auto' }}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/jsk321/image/upload/v1611706744/ummas_cb/HARUHARU_wz5f83.jpg"
                    style={{ maxWidth: '450px', height: 'auto', margin: '0 auto' }}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/jsk321/image/upload/v1611706500/ummas_cb/2014cody_ku5msz.jpg"
                    style={{ maxWidth: '450px', height: 'auto', margin: '0 auto' }}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
