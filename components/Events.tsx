'use client'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    "https://res.cloudinary.com/dgimnxsnb/image/upload/v1695580041/web/kynkyyacuimhzetqqgu4.jpg",
    "https://res.cloudinary.com/dgimnxsnb/image/upload/v1695580041/web/b3havstawehzl24xwvlh.jpg",
    "https://res.cloudinary.com/dgimnxsnb/image/upload/v1695580040/web/mh3dxjcd4z8wivbvf6xo.jpg",
    "https://res.cloudinary.com/dgimnxsnb/image/upload/v1695580040/web/lsdnayojujkrpiti9smn.jpg",
    "https://res.cloudinary.com/dgimnxsnb/image/upload/v1695580040/web/fs9uy7lhflnlh1qge3zj.jpg",
    "https://res.cloudinary.com/dgimnxsnb/image/upload/v1695580040/web/waxu1dpsvxpy3m83mkow.jpg",
    "https://res.cloudinary.com/dgimnxsnb/image/upload/v1695580041/web/b3havstawehzl24xwvlh.jpg",
    "https://res.cloudinary.com/dgimnxsnb/image/upload/v1695580041/web/qsnwuih88opzemizy74u.jpg",
    "https://res.cloudinary.com/dgimnxsnb/image/upload/v1695580040/web/atu8k5ariqmn9ecpwfgq.jpg",
    "https://res.cloudinary.com/dgimnxsnb/image/upload/v1695580042/web/cmlkm3vitmt7ivo6y0pp.jpg",
    "https://res.cloudinary.com/dgimnxsnb/image/upload/v1695580041/web/mzlrlqov8zgq3cd9njbz.jpg",
    "https://res.cloudinary.com/dgimnxsnb/image/upload/v1695580042/web/itatvaz0rshir9hwxcs6.jpg",
    "https://res.cloudinary.com/dgimnxsnb/image/upload/v1695580042/web/sgs2k2l7ggkthrupqo21.jpg",
    "https://res.cloudinary.com/dpsvuqvut/image/upload/v1695581840/web/bueykeqoi6typvowxo6a.jpg",
    "https://res.cloudinary.com/dpsvuqvut/image/upload/v1695581876/web/hlvotwhktp7ovffzzn7t.png ",
    "https://res.cloudinary.com/dpsvuqvut/image/upload/v1695581906/web/jibzo7yqmvd1ktriwzmy.jpg",
  ];

function Events() {
  return (
    <>
        <h1 className='flex justify-center py-20 text-2xl font-bold font-sans' id='Events'>Past Events</h1>
        <Carousel width={700} autoPlay={true} interval={1000} infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} showArrows={false}  className='flex flex-col items-center overflow-hidden relative' >
            {images.map((URL, index) => (
            <div>
                <img alt="sample_file" src={URL} key={index} />
            </div>
            ))}
        </Carousel>
    </>
  )
}

export default Events;