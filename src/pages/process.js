import React, { Component,useRef,useEffect, useState } from "react";
import cv from "./opencv";

const Process = () => {
  const srcImg=useRef(null);
  const inputFile=useRef(null);
  const dstImg=useRef(null);
  const [src,setSrc]=useState('');
  // let srcImg = document.getElementById("srcImg");
  // let inputFile = document.getElementById("inputFile");
  // if (inputFile.current) {
  //   inputFile.current.addEventListener(
  //     "change",
  //     (e) => {
  //       srcImg.current.src = URL.createObjectURL(e.target.files[0]);
  //     },
  //     false
  //   );
  // }
  // <!-- 显示 -->

  useEffect(()=>{
    console.log(222222,srcImg.current);
    if (srcImg.current) {
      srcImg.current.onload = function () {
        let srcDst = cv.imread(srcImg.current);
        console.log('------',srcDst);
        cv.imshow(dstImg.current, srcDst);
        srcDst.delete();
      };
    }
  },[src])

 

  // <!--成功加载 opencv.js 后，status 标签会显示“opencv.js is ready.”-->
  function onOpenCvReady() {
    document.getElementById("status").innerHTML = "opencv.js is ready.";
  }

  function onTFGpuReady() {
    document.getElementById("status").innerHTML = "tfgpu.js is ready.";
  }

  return (
    <div>
      <p id="status">opencv.js is loading...</p>
      {/* 图片读入区域 */}
      <div className="InputOutput">
        <div className="caption">
          srcImg
          <input type="file" ref={inputFile} name="file" onChange={(e)=>{setSrc(URL.createObjectURL(e.target.files[0]))}}/>
        </div>
        <img src={src} alt="No Image" ref={srcImg}/>
      </div>

      {/* 结果展示区域 */}
      <div className="InputOutput">
        <div className="caption">dstImg</div>
        <canvas ref={dstImg}></canvas>
      </div>
    </div>
  );
};

export default Process;
