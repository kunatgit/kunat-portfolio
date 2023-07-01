import { motion } from 'framer-motion';
import { styles } from '../styles';
import { shaq, bwmap, worldmap } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [ data1, setData1 ] = useState('');
  const [ data2, setData2 ] = useState('');
  const [ data3, setData3 ] = useState('');
  const [ data4, setData4 ] = useState('');
  const [ data5, setData5 ] = useState('');
  const [ data6, setData6 ] = useState('');
  const [ youipaddress, setYouipaddress ] = useState('');

  useEffect(() => {
    getIP(function(ip) {
      console.log('User IP address:', ip);
      setYouipaddress(ip)
    });

    RandomText("Hi, I'm", setData1);
    RandomText('Jay.Kunat', setData2);
    RandomText('Programmer', setData3);
    RandomText('[Current]', setData4);
    RandomText('FullStack Developer', setData5);
    RandomText("Your ip address ", setData6);
    
    const interval = setInterval(() => {
      RandomText("Your ip address", setData6);
    }, 2200);
  
    return () => clearInterval(interval);
  }, []);

  
  const ABCchar = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

  function RandomText(text, setState, randomRound = 3, randomWaitTime = 10) {
    const len = text.length;
    const RandChar = () => {
        return ABCchar[Math.floor(Math.random() * ABCchar.length)];
    };
    let currentIndex = 0;
    let tempText = "";
    const ProcessText = () => {
      if (tempText.length < len) {
        let randCount = 0;
        const randCharInterval = setInterval(() => {
          if (randCount < randomRound) {
            setState(tempText + RandChar());
            randCount += 1;
          } else {
            tempText = tempText + text[currentIndex];
            setState(tempText);
            currentIndex += 1;
            clearInterval(randCharInterval);
            ProcessText();
          }
        }, randomWaitTime);
      }
    };
    ProcessText();
  }
  function getIP(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.ipify.org?format=json', true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      if (xhr.status === 200) {
        var ipAddress = xhr.response.ip;
        callback(ipAddress);
      }
    };
    xhr.send();
  }

  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              {data1}{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                {data2}
              </span>
            </h1>
            <p className={`text-eerieBlack text-[20px] max-w-3xl font-beckman leading-[25px]`}>
              {data3} <br className="sm:block hidden" />
              <span className={`text-eerieBlack text-[20px] max-w-3xl font-beckman leading-[25px]`} style={{color:"red"}}>
                {data4}
              </span> {data5}
              <br/><br/>
              {data6} <span className={`text-eerieBlack text-[20px] max-w-3xl font-beckman leading-[25px]`} style={{color:"lime"}}>
                {(data6 == "Your ip address") ? youipaddress : ""}
              </span>
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[74vw]
            h-[50vh] sm:h-[50vh] md:h-[55vh] xl:h-[70vh]"
            src={shaq}
            alt="kunat"
            style={{opacity:"0.6"}}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
