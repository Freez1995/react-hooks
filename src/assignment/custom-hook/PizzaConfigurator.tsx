/** @jsxImportSource @emotion/react */
import React from 'react';
import { toppingData, pizzaSizeData, discountData } from './Data';
import {
  buttonInactive,
  sizeButtonInactive,
  buttonSelected,
} from './PizzaConfigurator.styles';
import { useCalculate } from './useCalculate';

export const PizzaConfigurator: React.FC = () => {
  const {
    selectedToppings,
    selectedSize,
    selectedDiscount,
    selectTopping,
    selectSize,
    selectDiscount,
    finalPrice,
  } = useCalculate(0);

  return (
    <div>
      <h2>Custom hook example</h2>
      <div>
        {toppingData.map((toppingData) => (
          <button
            key={toppingData.id}
            onClick={() => selectTopping(toppingData.name, toppingData.price)}
            css={
              selectedToppings.toppings.includes(toppingData.name)
                ? [buttonSelected]
                : [buttonInactive]
            }
          >
            {toppingData.name}
          </button>
        ))}
      </div>
      <div>
        {pizzaSizeData.map((pizzaSize) => (
          <button
            key={pizzaSize.id}
            onClick={() => selectSize(pizzaSize.size, pizzaSize.price)}
            css={
              selectedSize.size === pizzaSize.size
                ? buttonSelected
                : sizeButtonInactive
            }
          >
            {pizzaSize.size}
          </button>
        ))}
      </div>
      <div>
        {discountData.map((discount) => (
          <button
            key={discount.id}
            onClick={() =>
              selectDiscount(discount.discountCode, discount.discountValue)
            }
            css={
              selectedDiscount.discountCode === discount.discountCode
                ? buttonSelected
                : buttonInactive
            }
          >
            {discount.discountCode}
          </button>
        ))}
      </div>
      <h3>Final price is ${finalPrice}</h3>
    </div>
  );
};
