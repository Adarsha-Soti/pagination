import { Flex, Button, WrapItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const Counter = ({ showperpage, onpaginationchange, data }) => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const value = showperpage * counter;
    onpaginationchange(value - showperpage, value);
  }, [counter]);

  const onButtonclick = (type) => {
    if (type === "prev") {
      if (counter === 1) setCounter(1);
      else setCounter(counter - 1);
    } else if (type === "next") {
      if (Math.ceil(data / showperpage) === counter) setCounter(counter);
      else setCounter(counter + 1);
    }
  };
  return (
    <Flex justifyContent="space-between">
      <Button
        colorScheme="teal"
        size="md"
        onClick={() => onButtonclick("prev")}
      >
        pervious
      </Button>
      <Flex justifyContent="space-between">
        {new Array(Math.ceil(data / showperpage)).fill("").map((el, index) => (
          <WrapItem>
            <Button
              colorScheme="green"
              marginLeft={10}
              onClick={() => {
                setCounter(index + 1);
              }}
            >
              {index + 1}
            </Button>
          </WrapItem>
        ))}
      </Flex>
      <Button
        colorScheme="teal"
        size="md"
        onClick={() => onButtonclick("next")}
      >
        next
      </Button>
    </Flex>
  );
};
