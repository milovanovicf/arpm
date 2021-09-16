import React from "react";
import {
  Container,
  Headline,
  Paragraph,
  Headline2,
  KeyPoints,
  KeyPointsList,
  Math,
  Video,
  Examples,
  Headline3,
  ExternalLinkHeader,
  ExternalLinkDesc,
  ProgressBarContainer,
} from "./Pages.Elements";
import Table from "../components/Table";
import ProgressBar from "../components/ProgressBar";
import { Link } from "react-router-dom";
import Collapsable from "../components/Collapsable";

const linkStyle = {
  textDecoration: "none",
  color: "#043f72",
  textAlign: "right",
};

export const Cointegration = () => {
  return (
    <div className="home">
      <Container>
        <ProgressBarContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Headline3>Theory</Headline3>
            <ProgressBar done="70" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Headline3>Slides</Headline3>
            <ProgressBar done="50" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Headline3>Video Marathon</Headline3>
            <ProgressBar done="30" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Headline3>Video Bootcamp</Headline3>
            <ProgressBar done="100" />
          </div>
        </ProgressBarContainer>
        <Headline>2.8 Cointegration</Headline>
        <KeyPoints>
          <Headline2>Key Points</Headline2>
          <KeyPointsList>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quia
            repellendus tempora? Molestiae rem quam quia fugit aliquam.
          </KeyPointsList>
          <KeyPointsList>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quia
            repellendus tempora? Molestiae rem quam quia fugit aliquam.
          </KeyPointsList>
          <KeyPointsList>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quia
            repellendus tempora? Molestiae rem quam quia fugit aliquam.
            Distinctio vitae voluptatum, quasi corrupti commodi laborum
            accusamus facere aut reprehenderit ab.
          </KeyPointsList>
        </KeyPoints>
        <Link style={linkStyle} to={{ pathname: "/cointegration/modeling" }}>
          <Headline2>2.8.1 Modeling</Headline2>
        </Link>
        <Link style={linkStyle} to={{ pathname: "/cointegration/revenue" }}>
          <Headline2>2.8.1 Detection</Headline2>
        </Link>
      </Container>
    </div>
  );
};

export const Modeling = () => {
  return (
    <div className="modeling">
      <Container>
        <Headline2>2.8.1 Modeling</Headline2>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          temporibus repellendus assumenda ad cumque cupiditate ullam, veritatis
          quasi tempore dolor quo nemo. Qui illo tenetur fuga doloribus
          asperiores, odit ullam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Amet hic saepe optio eius doloribus minus culpa
          dicta numquam eligendi facere iure, aliquid odio, consectetur soluta,
          rem itaque temporibus quod laudantium.
        </Paragraph>
        <Math>*math goes here*</Math>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex
          nisi neque tenetur alias assumenda doloribus, quidem ipsam mollitia
          veniam velit itaque, earum eos ducimus nostrum cum minima voluptatum
          et!
        </Paragraph>
        <Math>*math goes here*</Math>
        <Link style={linkStyle} to={{ pathname: "/cointegration/" }}>
          <Headline2>2.8 Cointegration</Headline2>
        </Link>
        <Link style={linkStyle} to={{ pathname: "/cointegration/revenue" }}>
          <Headline2>2.8.1 Detection</Headline2>
        </Link>
      </Container>
    </div>
  );
};

export const Revenue = () => {
  return (
    <div className="revenue">
      <Container>
        <Headline2>2.8.2 Detection</Headline2>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          nam aliquid repudiandae doloremque odit ea! Repellendus, mollitia
          labore? Unde optio dolore hic voluptatum magnam. Accusantium dolorum
          vitae illo aut numquam!
        </Paragraph>
        <Math>*math goes here*</Math>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nemo,
          ipsa rem necessitatibus ad, vitae praesentium nostrum quod placeat
          architecto, ipsam aperiam iusto cum velit! Explicabo dolorum dolorem
          error est! Consectetur sunt sequi omnis voluptas pariatur dolores
          inventore quam possimus quidem? Quos cupiditate illum cum, quia ut
          porro sequi voluptates odio explicabo quisquam dicta quibusdam soluta
          non voluptatem deserunt ipsa.
        </Paragraph>
        <Math>*math goes here*</Math>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nemo,
          ipsa rem necessitatibus ad, vitae praesentium nostrum quod placeat
          architecto, ipsam aperiam iusto cum velit! Explicabo dolorum dolorem
          error est! Consectetur sunt sequi omnis voluptas pariatur dolores
          inventore quam possimus quidem? Quos cupiditate illum cum, quia ut
          porro sequi voluptates odio explicabo quisquam dicta quibusdam soluta
          non voluptatem deserunt ipsa.
        </Paragraph>
        <Math>*math goes here*</Math>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio minus
          eveniet officiis recusandae quo error sequi doloremque obcaecati,
          quas, assumenda blanditiis exercitationem porro itaque culpa. Commodi
          animi quos assumenda veniam.
        </Paragraph>
        <Headline2>
          Example:{" "}
          <span style={{ fontWeight: "normal" }}>
            Cointegration and static arbitrage
          </span>
        </Headline2>
        <Collapsable label="Toggle">
          <Examples>
            <Video>
              <iframe
                width="90%"
                height="80%"
                src="https://www.youtube.com/embed/xPEGbCmrZM0"
              ></iframe>
            </Video>
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, aut vero. Quaerat voluptas numquam placeat
              consectetur, et tenetur iusto nulla veritatis eum ab quasi aut
              debitis tempora officiis quo distinctio. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Commodi, cum nobis aspernatur
              ipsum ipsa sed quam quasi doloremque rerum repellat alias est
              ratione quia officia repellendus, nesciunt magni suscipit neque.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              fuga culpa. Necessitatibus dicta sit excepturi mollitia minus non
              possimus cupiditate. Aliquam repellendus nam quidem? Optio libero
              reprehenderit illum iure laborum. <br />
              Quis voluptas porro nostrum id nam voluptatem, a architecto beatae
              qui numquam harum nulla modi sed nemo ex quaerat voluptatum
              maxime, magnam enim totam rem atque quisquam cupiditate. Quia, ad?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, aut vero. Quaerat voluptas numquam placeat
              consectetur, et tenetur iusto nulla veritatis eum ab quasi aut
              debitis tempora officiis quo distinctio. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Commodi, cum nobis aspernatur
              ipsum ipsa sed quam quasi doloremque rerum repellat alias est
              ratione quia officia repellendus, nesciunt magni suscipit neque.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              fuga culpa. Necessitatibus dicta sit excepturi mollitia minus non
              possimus cupiditate. Aliquam repellendus nam quidem? Optio libero
              reprehenderit illum iure laborum. Quis voluptas porro nostrum id
              nam voluptatem, a architecto beatae qui numquam harum nulla modi
              sed nemo ex quaerat voluptatum maxime, magnam enim totam rem atque
              quisquam cupiditate. Quia, ad? <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, aut vero. Quaerat voluptas numquam placeat
              consectetur, et tenetur iusto nulla veritatis eum ab quasi aut
              debitis tempora officiis quo distinctio. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Commodi, cum nobis aspernatur
              ipsum ipsa sed quam quasi doloremque rerum repellat alias est
              ratione quia officia repellendus, nesciunt magni suscipit neque.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              fuga culpa. Necessitatibus dicta sit excepturi mollitia minus non
              possimus cupiditate. <br />
              Aliquam repellendus nam quidem? Optio libero reprehenderit illum
              iure laborum. Quis voluptas porro nostrum id nam voluptatem, a
              architecto beatae qui numquam harum nulla modi sed nemo ex quaerat
              voluptatum maxime, magnam enim totam rem atque quisquam
              cupiditate. Quia, ad?
            </Paragraph>
          </Examples>
        </Collapsable>
        <Table></Table>
        <ExternalLinkHeader>External Links</ExternalLinkHeader>
        <ExternalLinkDesc
          to={{ pathname: "https://www.google.com/" }}
          target="_blank"
        >
          Statistical arbitrage
        </ExternalLinkDesc>
        <Collapsable label="Discussions">
          <ExternalLinkDesc
            to={{ pathname: "https://www.google.com/" }}
            target="_blank"
          >
            ExternalLinkDesc
          </ExternalLinkDesc>
          <ExternalLinkDesc
            to={{ pathname: "https://www.google.com/" }}
            target="_blank"
          >
            ExternalLinkDesc
          </ExternalLinkDesc>
          <ExternalLinkDesc
            to={{ pathname: "https://www.google.com/" }}
            target="_blank"
          >
            ExternalLinkDesc
          </ExternalLinkDesc>
          <ExternalLinkDesc
            to={{ pathname: "https://www.google.com/" }}
            target="_blank"
          >
            ExternalLinkDesc
          </ExternalLinkDesc>
          <ExternalLinkDesc
            to={{ pathname: "https://www.google.com/" }}
            target="_blank"
          >
            ExternalLinkDesc
          </ExternalLinkDesc>
          <ExternalLinkDesc
            to={{ pathname: "https://www.google.com/" }}
            target="_blank"
          >
            ExternalLinkDesc
          </ExternalLinkDesc>
        </Collapsable>
        <Link style={linkStyle} to={{ pathname: "/cointegration/modeling" }}>
          <Headline2>2.8.1 Modeling</Headline2>
        </Link>
        <Link style={linkStyle} to={{ pathname: "/cointegration/" }}>
          <Headline2>2.8 Cointegration</Headline2>
        </Link>
      </Container>
    </div>
  );
};
