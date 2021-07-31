/* eslint-disable array-callback-return */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectMovies } from "features/movie/movieSlice";
import { useSelector } from "react-redux";
import Slider from "react-slick";

function Movies() {
  const movies = useSelector(selectMovies)

  let settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
  };

  return (
    <Container>
      <h4>Recommended For You</h4>
      <Carousel {...settings}>
        {movies &&
          movies.map((movie) => (
            <Link key={movie.id} to={`/detail/${movie.id}`}>
              <Wrap>
                <img src={movie.cardImg} alt="" />
              </Wrap>
            </Link>
          ))}
      </Carousel>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  h4 {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgba(249, 249, 249, 0.8);
    overflow: hidden;
  }
`;

const Carousel = styled(Slider)`
  width: 100%;
  height: 100%;

  button {
    z-index: 1;
    opacity: 0.4;
  }
`;

// const Content = styled.div`
//   display: grid;
//   grid-gap: 25px;
//   grid-template-columns: repeat(4, minmax(0, 1fr));
// `;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 10px;
  cursor: pointer;
  border: 3px solid rgb(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
