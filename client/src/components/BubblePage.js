import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "./utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [refetch, setRefetch] = useState(false)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[refetch])
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} setRefetch={setRefetch} refetch={refetch}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
