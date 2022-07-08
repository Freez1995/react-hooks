import { useEffect, useState } from 'react';

interface PizzaToppingsState {
  toppings: string[];
  toppingsPrice: number;
}

interface PizzaSizeState {
  size: string;
  sizePrice: number;
}

interface PizzaDiscountState {
  discountCode: string;
  discountValue: number;
}

interface InitialValues {
  toppingInitial: PizzaToppingsState;
  sizeInitial: PizzaSizeState;
  discountInitial: PizzaDiscountState;
}

const initialValue: InitialValues = {
  toppingInitial: { toppings: [], toppingsPrice: 0 },
  sizeInitial: { size: 'S', sizePrice: 10 },
  discountInitial: { discountCode: '', discountValue: 0 },
};
export function useCalculate(initialPrice: number) {
  const [finalPrice, setFinalPrice] = useState(initialPrice);
  const [selectedToppings, setSelectedTopping] = useState<PizzaToppingsState>(
    initialValue.toppingInitial
  );
  const [selectedSize, setSelectedSize] = useState<PizzaSizeState>(
    initialValue.sizeInitial
  );
  const [selectedDiscount, setselectedDiscount] = useState<PizzaDiscountState>(
    initialValue.discountInitial
  );

  const selectTopping = (topping: string, price: number) => {
    if (selectedToppings.toppings.includes(topping)) {
      selectedToppings.toppings.splice(
        selectedToppings.toppings.indexOf(topping),
        1
      );
      setSelectedTopping({
        toppings: [...selectedToppings.toppings],
        toppingsPrice: selectedToppings.toppingsPrice - price,
      });
      return;
    }
    setSelectedTopping({
      toppings: [...selectedToppings.toppings, topping],
      toppingsPrice: selectedToppings.toppingsPrice + price,
    });
  };

  const selectSize = (size: string, price: number) => {
    setSelectedSize({ size: size, sizePrice: price });
  };

  const selectDiscount = (discountCode: string, discountValue: number) => {
    selectedDiscount.discountCode === discountCode
      ? setselectedDiscount(initialValue.discountInitial)
      : setselectedDiscount({
          discountCode: discountCode,
          discountValue: discountValue,
        });
  };

  useEffect(() => {
    let totalPrice = selectedToppings.toppingsPrice + selectedSize.sizePrice;
    selectedDiscount.discountValue !== 0
      ? setFinalPrice(totalPrice - totalPrice * selectedDiscount.discountValue)
      : setFinalPrice(totalPrice);
  }, [selectedToppings, selectedSize, selectedDiscount]);

  return {
    finalPrice,
    selectedToppings,
    selectedSize,
    selectedDiscount,
    selectTopping,
    selectSize,
    selectDiscount,
  };
}
