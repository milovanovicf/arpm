import React, { useState } from "react";
import styled from "styled-components";

export const Progress = styled.div`
  background-color: #d8d8d8;
  border-radius: 5px;
  position: relative;
  margin: 15px 0;
  height: 30px;
  width: 200px;
`;
export const ProgressDone = styled.div`
  background: #043f72;
  border-radius: 5px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
`;

const ProgressBar = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);
  return (
    <Progress>
      <ProgressDone style={style}>{done}%</ProgressDone>
    </Progress>
  );
};

export default ProgressBar;
