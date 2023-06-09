import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/counter/movie/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Movie() {
  const movies = useSelector(selectMovies);
  console.log(movies);
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt="Movies" />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Movie;
const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 /80%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
  }
`;
