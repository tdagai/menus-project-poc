'use client'
import Image from "next/image";
import styled from "styled-components";
import VeganIcon from "@utils/veganIcon.png";
import VegetarianIcon from "@utils/vegetarianIcon.png";
import SpicyIcon from "@utils/spicyIcon.png";
import MildIcon from "@utils/mildIcon.png";
import GlutenFreeIcon from "@utils/glutenFreeIcon.png";

const HardcodedItemIcons = () => {
  return (
    <IconsContainer>
      <IconWrapper>
        <Image
          src={VeganIcon}
          alt=""
          width={24}
          height={24}
        />
        <p>Vegan</p>
      </IconWrapper>
      <IconWrapper>
        <Image
          src={VegetarianIcon}
          alt=""
          width={24}
          height={24}
        />
        <p>Vegetarian</p>
      </IconWrapper>
      <IconWrapper>
        <Image
          src={SpicyIcon}
          alt=""
          width={24}
          height={24}
        />
        <p>Spicy</p>
      </IconWrapper>
      <IconWrapper>
        <Image
          src={MildIcon}
          alt=""
          width={24}
          height={24}
        />
        <p>Mild</p>
      </IconWrapper>
      <IconWrapper>
        <Image
          src={GlutenFreeIcon}
          alt=""
          width={24}
          height={24}
        />
        <p>Gluten Free</p>
      </IconWrapper>
    </IconsContainer>
  )
}

const IconsContainer = styled.div`
  display: flex;
  gap: .5rem;
  margin-left: auto;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    margin-bottom: 0;
    font-size: .75rem;
  }
`;

export default HardcodedItemIcons;