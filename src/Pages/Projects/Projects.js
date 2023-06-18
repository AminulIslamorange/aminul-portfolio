import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Projects.css";
import Modal from "./Modal/Modal";

import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import RepairPluse1 from '../../images/RepairPlus1.png';
import Weapon1 from '../../images/Weapon1.png';
import banglatalk2 from '../../images/banglatalk2.png';
import smart1 from '../../images/smart1.png'




import edukite1 from '../../images/Edukite1.png'


const Projects = () => {
  const [details, setDetails] = useState({
    title: "",
    description: "",
    liveLink: "",
    clientSideCode: "",
    serverSideCode: "",
    imageOne: "",
    imageTwo: "",
    imageThree: "",
  });
  return (
    <div className="lg:h-screen h-auto py-20 lg:py-0 flex flex-col justify-center">
      <h2 className="text-5xl font-extrabold text-white text-center">
        MY <span className="text-secondary">PROJECTS</span>
      </h2>
      <Swiper
        effect={"coverflow"}
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        style={{
          "--swiper-pagination-color": "#fff",
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        className="h-[550px]"
        loop={true}
      >
        <SwiperSlide className="w-full">
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img src={RepairPluse1} alt="" />
            </figure>
            <div class="card-body">
              <div class="">
                <button class="mr-2 bg-[#FF1D4F] text-white px-4 py-1 rounded-full mb-2">
                  React
                </button>
                <button class="mr-2 bg-[#FF1D4F] text-white px-4 py-1 rounded-full mb-2">
                  React Router
                </button>
                <button class="mr-2 bg-[#FF1D4F] text-white px-4 py-1 rounded-full mb-2">
                  Firebase
                </button>
                <button class="mr-2 bg-[#FF1D4F] text-white px-4 py-1 rounded-full mb-2">
                  Tailwind
                </button>
                <button class="mr-2 bg-[#FF1D4F] text-white px-4 py-1 rounded-full mb-2">
                  Express js
                </button>
                <button class="mr-2 bg-[#FF1D4F] text-white px-4 py-1 rounded-full mb-2">
                  Vercel
                </button>
              </div>
              <h2 class="card-title my-2">RepairPlus Bangladesh</h2>
              <div class="card-actions">
                <label
                  for="my-modal"
                  class="btn modal-button btn-primary w-full text-white rounded-full"
                  onClick={() =>
                    setDetails({
                      title: "RepairPlus Bangladesh",
                      description: (
                        <>
                          <p>This website is for Mobile serviceing Shop</p>
                          <li>
                            Users can get a Mobile servicing And he/she can give reviews.
                          </li>
                          <li>Login system integration. </li>
                          <li>
                           Customer can give Reviews
                          </li>
                        </>
                      ),
                      liveLink: "https://mobail-clinic.web.app",
                      clientSideCode:
                        "https://github.com/AminulIslamorange/mobail-clinic",
                      serverSideCode:
                        "https://github.com/AminulIslamorange/mobile-clinic-server",


                      imageOne: "https://i.ibb.co/CnWQdkM/Repair-Plus1.png",
                      imageTwo: "https://i.ibb.co/m8hHWq8/Repair-Plus2.png",
                      imageThree: "https://i.ibb.co/gZZy1c4/Repair-Plus3.png",
                    })
                  }
                >
                  Details
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img src={Weapon1} alt="" />
            </figure>
            <div class="card-body">
              <div class="">
                <button class="mr-2 bg-indigo-600 text-white px-4 py-1 rounded-full mb-2">
                  React
                </button>
                <button class="mr-2 bg-indigo-600 text-white px-4 py-1 rounded-full mb-2">
                  React Router Dom
                </button>
                <button class="mr-2 bg-indigo-600 text-white px-4 py-1 rounded-full mb-2">
                  Firebase
                </button>
                <button class="mr-2 bg-indigo-600 text-white px-4 py-1 rounded-full mb-2">
                  Swiper Js
                </button>
                <button class="mr-2 bg-indigo-600 text-white px-4 py-1 rounded-full mb-2">
                  Stripe Payment Gateway
                </button>
                <button class="mr-2 bg-indigo-600 text-white px-4 py-1 rounded-full mb-2">
                  React Bootstrap
                </button>
              </div>
              <h2 class="card-title my-2">Weapon World</h2>
              <div class="card-actions">
                <label
                  for="my-modal"
                  class="btn modal-button btn-primary w-full text-white rounded-full"
                  onClick={() =>
                    setDetails({
                      title: "Weapon World",
                      description: (
                        <>
                          <p>
                            This is Weapon World web site about a reused Gun.
                          </p>
                          <li>
                            Admin can add items, delete items, or varify user.
                          </li>
                          <li>
                            If a user is not logged in, user can't buy or cell Gun.
                          </li>
                          <li>
                            admin can show advertize for any Gun.
                          </li>
                        </>
                      ),
                      liveLink: "https://weapon-world.web.app/",
                      clientSideCode:
                        "https://github.com/AminulIslamorange/weapon",
                      serverSideCode:
                        "https://github.com/AminulIslamorange/weapon-server",
                      imageOne: "https://i.ibb.co/c1nZB0c/Weapon1.png",
                      imageTwo: "https://i.ibb.co/7k9C5N6/weapon2.png",
                      imageThree: "https://i.ibb.co/r6z781b/Weapon3.png",
                    })
                  }
                >
                  Details
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img src={edukite1} alt="" />
            </figure>
            <div class="card-body">
              <div class="">
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                  React
                </button>
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                  React Router Dom
                </button>
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                  Tailwind Css
                </button>
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                firebase
                </button>
              </div>
              <h2 class="card-title my-2">Edukite</h2>
              <div class="card-actions">
                <label
                  for="my-modal"
                  class="btn modal-button btn-primary w-full text-white rounded-full"
                  onClick={() =>
                    setDetails({
                      title: "Edukite",
                      description: (
                        <>
                          <p>
                            This website is made for those who want learn Online
                            
                          </p>
                          <li>If users not logged in user can't checkout.</li>
                          <li>In this website has a blog page.</li>
                          <li>
                            If user is logged in user can log out by clicking
                            'Log Out' Button
                          </li>
                        </>
                      ),
                      liveLink: "https://edukite-363fa.web.app/",
                      clientSideCode: "https://github.com/AminulIslamorange/educite",
                      

                      imageOne: "https://i.ibb.co/Zg9wq6L/Edukite1.png",
                      imageTwo: "https://i.ibb.co/T2xqpD5/edukite2.png",
                      imageThree: "https://i.ibb.co/vwGLGP3/edukite3.png",
                    })
                  }
                >
                  Details
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img src={banglatalk2} alt="" />
            </figure>
            <div class="card-body">
              <div class="">
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                  React
                </button>
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                  React Router Dom
                </button>
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                  Tailwind Css
                </button>
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                firebase
                </button>
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                firebase firestore
                </button>
              </div>
              <h2 class="card-title my-2">Bangla Talk</h2>
              <div class="card-actions">
                <label
                  for="my-modal"
                  class="btn modal-button btn-primary w-full text-white rounded-full"
                  onClick={() =>
                    setDetails({
                      title: "Bangla Talk",
                      description: (
                        <>
                          <p>
                            This website is made for Social Communication.
                            
                          </p>
                          <li>If users not logged in user can't use.User can send sms & Image</li>
                          <li>In this website has Login & Register Page. Any User can search other user.</li>
                          <li>
                            If user is logged in user can log out by clicking
                            'Log Out' Button
                          </li>
                        </>
                      ),
                      liveLink: "https://bangla-talk.web.app",
                      clientSideCode: "https://github.com/AminulIslamorange/bangla-talk",
                      

                      imageOne: "https://i.ibb.co/7jrWvfm/banglatalk1.png",
                      imageTwo: "https://i.ibb.co/26CqXD1/banglatalk2.png",
                      imageThree: "https://i.ibb.co/vZrdbGk/banglatalk.png",
                    })
                  }
                >
                  Details
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img src={smart1} alt="" />
            </figure>
            <div class="card-body">
              <div class="">
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                  React
                </button>
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                  React Router Dom
                </button>
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                  Tailwind Css
                </button>
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                React Toast
                </button>
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                LocalStorage
                </button>
              </div>
              <h2 class="card-title my-2">Smart Home</h2>
              <div class="card-actions">
                <label
                  for="my-modal"
                  class="btn modal-button btn-primary w-full text-white rounded-full"
                  onClick={() =>
                    setDetails({
                      title: "Smart Home",
                      description: (
                        <>
                          <p>
                            This website is made for Smart Gadget
                            
                          </p>
                          <li>User can buy any Product from this site</li>
                          <li>In this website has Home section and Cart section.</li>
                          <li>
                            User can add & delete any product from cart.
                          </li>
                        </>
                      ),
                      liveLink: "https://magical-naiad-7a7090.netlify.app",
                      clientSideCode: "https://github.com/AminulIslamorange/smart-home",
                      
                      

                      imageOne: "https://i.ibb.co/zHx8HPy/smart3.png",
                      imageTwo: "https://i.ibb.co/ZzYp2Gd/smart1.png",
                      imageThree: "https://i.ibb.co/ydY0HGr/smart2.png",
                    })
                  }
                >
                  Details
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
      <Modal details={details}></Modal>
    </div>
  );
};

export default Projects;
