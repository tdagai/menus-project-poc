'use client'
import styled from "styled-components";
import MenuItem from "./components/menuItem";

const Home = () => {
  return (
    <ItemsGrid className="p-3">
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </ItemsGrid>
  );
}

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(800px, 100%), 1fr));
  gap: 1rem;
  justify-items: center;
`;



export default Home;
