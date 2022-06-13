import { Flex, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const Counter = (showperpage, onpaginationchange) => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const value = showperpage * counter;
    // onpaginationchange(value - showperpage, value);
  }, [counter]);
  return (
    <Flex justifyContent="space-between">
      <Button
        colorScheme="teal"
        size="md"
        onClick={() => setCounter(counter - 1)}
      >
        pervious
      </Button>
      <Button
        colorScheme="teal"
        size="md"
        onClick={() => setCounter(counter + 1)}
      >
        next
      </Button>
    </Flex>
  );
};
