import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
`;

export const Headline = styled.h1`
  font-size: 35px;
  color: #043f72;
  text-align: left;
  padding: 20px 0;
`;

export const Headline2 = styled.h2`
  font-size: 23px;
  padding: 10px 0;
  color: #043f72;
`;

export const Headline3 = styled.h3`
  font-size: 15px;
  font-weight: bold;
  padding: 10px;
`;

export const Paragraph = styled.p`
  font-size: 17px;
  text-align: left;
`;

export const KeyPoints = styled.ul`
  padding: 25px 25px;
  margin: 20px 0;
  text-align: center;
  background: #e6ecf1;
`;

export const KeyPointsList = styled.li`
  font-size: 15px;
  padding: 2px 0;
  text-align: left;
  list-style: none;
  padding-left: 1em;
  text-indent: -0.7em;

  &:before {
    content: "• ";
    color: red;
    padding-right: 5px;
  }
`;

export const Math = styled.code`
  font-size: 15px;
  display: block;
  border: 1px solid lightgray;
  padding: 20px;
  margin: 10px 0;
  width: 100%;
  text-align: center;
`;

export const Examples = styled.div`
  margin: 10px 0;
  padding: 10px;
  background: #e6ecf1;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  font-weight: 500;
`;

export const Video = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 70%;
`;

export const TH = styled.th`
  text-align: center;
  padding: 8px;
  border-bottom: 2px solid #000;
`;

export const TD = styled.td`
  text-align: left;
  padding: 8px;
  background: #e6ecf1;
`;

export const TR = styled.tr`
  &:nth-last-child(1) {
    border-bottom: 2px solid #000;
  }
`;

export const ExternalLinkHeader = styled.h2`
  padding: 10px 0;
  font-size: 23px;
  color: #043f72;
  border-bottom: 2px solid #000;
`;

export const ExternalLinkDesc = styled.li`
  color: #47b4af;
  padding: 10px 0;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
