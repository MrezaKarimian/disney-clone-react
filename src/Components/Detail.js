/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlayBtnSrc from "images/play-icon-black.png";
import TrailerBtnSrc from "images/play-icon-white.png";
import GroupIconSrc from "images/group-icon.png";
import db from "../firebase";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Detail() {
  const { id } = useParams();  
  const [ movie, setMovie] = useState();

    useEffect(() => {
      db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setMovie(doc.data());
            console.log(movie);
          } else {
          }
        });
    }, []);
  
  
  return (
    <Container>
      {movie && (
        <>
        <Background>
        <img src={movie.backgroundImg} alt="" />
      </Background>
      <ImageTitle>
        <img src={movie.titleImg} alt="" />
      </ImageTitle>
      <Controls>
        <PlayBtn>
          <img src={PlayBtnSrc} alt="" />
          <span>PLAY</span>
        </PlayBtn>
        <TrailerBtn>
          <img src={TrailerBtnSrc} alt="" />
          <span>TRAILER</span>
        </TrailerBtn>
        <AddBtn>
          <FontAwesomeIcon
            style={{ fontSize: "20px", color: `rgb(${249}, ${249}, ${249})` }}
            icon={faPlus}
          />
        </AddBtn>
        <GroupWatchBtn>
          <img src={GroupIconSrc} alt="" />
        </GroupWatchBtn>
      </Controls>
      <Subtitle>
        {movie.subTitle}
        </Subtitle>
      <Description>
        {movie.description}
      </Description>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayBtn = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb (249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerBtn = styled(PlayBtn)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    background: rgba(198, 198, 198, 0.2);
  }
`;
const AddBtn = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid rgb(249, 249, 249);
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover {
    background: rgba(198, 198, 198, 0.2);
  }
`;
const GroupWatchBtn = styled(AddBtn)`
  background-color: rgb(0, 0, 0);
  &:hover {
    background: rgba(198, 198, 198, 0.2);
  }
`;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 24px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 600px;
`;
