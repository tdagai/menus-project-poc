'use client'
import Image from "next/image";
import styled from "styled-components";
import AllergenWarningIcon from "@utils/exclamation.png";

const MenuItem = () => {
  return (
    <MenuItemContainer>
      <ItemDetails>
        <div>
          <h3>Dish Name</h3>
          <HorizontalDivider />
        </div>
        <BelowDivider>
          <ItemDescription>Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.</ItemDescription>
          <IngredientList>Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.</IngredientList>
          <AllergenWarningContainer>
            <Image
              src={AllergenWarningIcon}
              alt=""
              height={16}
              width={16}
            />
            <AllergenWarning>Allergen Warning: Peanuts, Dairy, etc.</AllergenWarning>
          </AllergenWarningContainer>
        </BelowDivider>
      </ItemDetails>
    </MenuItemContainer>
  )
}

const MenuItemContainer = styled.div`
  width: 45rem;
  height: 16rem;
  border: 4px solid #000;
  border-radius: 20px;
  background-color: #f0fdff;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
`;

const HorizontalDivider = styled.hr`
  border-top-width: 2px;
  opacity: 50%;
  margin-top: 0;
`;

const BelowDivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const IngredientList = styled.p`
  font-size: .75rem;
  margin: 0;
  color: #535353;
`;

const AllergenWarningContainer = styled.div`
  display: flex;
  gap: .25rem;
`;

const AllergenWarning = styled.p`
  font-size: .75rem;
  margin: 0;
  color: #ff0000;
`;

export default MenuItem;