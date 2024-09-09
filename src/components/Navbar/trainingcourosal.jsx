import React from 'react';
import Slider from 'react-slick';
import trainingimage1 from '../../assets/training1.jpeg';
import trainingimage2 from '../../assets/training2.jpeg';
import trainingimage3 from '../../assets/training3.jpeg';
import trainingimage4 from '../../assets/training4.jpeg';
import trainingimage5 from '../../assets/training5.jpeg';
import trainingimage6 from '../../assets/training6.jpeg';

function Training() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const testimonialdata = [
        {
            id: 1,
            
            text: 'Caregivers must assist clients with daily personal care tasks, including bathing, grooming, and dressing',
            img: trainingimage1
        },
        {
            id: 2,
            
            text: 'Practicing proper hygiene and infection control measures helps prevent the spread of illnesses in home care settings',
            img: trainingimage2
        },
        {
            id: 3,
           
            text: 'In case of an emergency, caregivers should be prepared to administer first aid and contact emergency services promptly',
            img: trainingimage3
        },
        {
            id: 4,
            
            text: 'Caregivers should be knowledgeable about managing chronic conditions such as diabetes and heart disease to provide effective support..',
            img: trainingimage4
        },
        {
            id: 5,
            
            text: 'Good quality materials have the quality in their clothes. Having a wonderful experience with Gancy.',
            img: trainingimage5
        },
        {
            id: 6,
            
            text: 'Techniques for supporting clients with dementia or Alzheimer’s include using simple language and maintaining a calm demeanor',
            img: trainingimage6
        }
    ];

    return (
        <div className='py-10 mb-10'>
            <div className='container'>
                <div>
                    {/* Header section */}
                    <div className='text-center max-w-[600px] mx-auto'>
                        <p className='text-sm text-primary'></p>
                        <h1 className='text-3xl mb-4 font-bold'>Training </h1>
                        <p className='text-[20px] text-gray-400  '>In the hands of skilled caregivers, every elderly person finds a world of compassion and understanding.</p>
                    </div>
                    <div>
                        {/* Testimonial card */}
                        <Slider {...settings}>
                            {testimonialdata.map((data) => (
                                <div key={data.id} className='flex flex-col shadow-lg py-8 px-6 mx-4 rounded-xl'>
                                    <div>
                                        <img src={data.img} className='rounded-xl w-full h-[300px]' alt={data.name} />
                                        <p className='text-xs text-gray-400 mt-4'>{data.text}</p>
                                        <h1 className='text-xl font-bold text-black/80 mt-2'>{data.name}</h1>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Training;
