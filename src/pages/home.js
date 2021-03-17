import React, { Component } from "react";
import * as tf from "@tensorflow/tfjs";

//定义一个线性回归模型。

const home = () => {
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
  
    model.compile({ loss: "meanSquaredError", optimizer: "sgd" });
  
    tf.tensor2d([
      [1, 2],
      [3, 4],
    ]).print();
    console.log("hello,tf-gpu!");
  return (
    <div className="P-home">
      <h1>Home page</h1>
    </div>
  );
};

export default home;
