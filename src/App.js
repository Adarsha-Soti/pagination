import {
  Box,
  Grid,
  Text,
  HStack,
  Heading,
  Image,
  Divider,
  Center,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  let [showperpage, setShowperpage] = useState(3);

  let [pagination, setPagination] = useState({
    start: 0,
    end: showperpage,
  });
  // onpaginationchange = (start, end) => {
  //   setPagination({ start: start, end: end });
  // };

  return (
    <Center
      width="100%"
      height="100vh"
      bg="#edf2e9"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box marginTop={15}>
        <Text color="#102A42" fontSize="400%" fontWeight="bold">
          Pagination
        </Text>
        <Center>
          <Divider
            orientation="horizontal"
            borderColor={"blue"}
            width={"60%"}
          />
        </Center>
      </Box>
      <Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop={20}>
          {data.slice(pagination.start, pagination.end).map((item) => {
            return (
              <HStack id={item?.id}>
                <Box
                  placeItems="center"
                  boxShadow="2xl"
                  m="5"
                  p="6"
                  rounded="xl"
                  bg="white"
                  width="335px"
                  height="345px"
                  _hover={{ bg: "#cbd4f5", color: "white" }}
                >
                  <Center marginTop={5}>
                    <Image
                      borderRadius="full"
                      boxSize="150px"
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                    />
                  </Center>
                  <br />
                  <Center>
                    <Heading fontSize={20} color="#515975">
                      {item?.name}
                    </Heading>
                  </Center>
                  <br />
                  <Center>
                    <Button colorScheme="teal" size="md" borderRadius="20px">
                      VIEW PROFILE
                    </Button>
                  </Center>
                </Box>
              </HStack>
            );
          })}
        </Grid>
        <Box marginTop={10}>
          <Counter
            showperpage={showperpage}
            // onpaginationchange={onpaginationchange}
          />
        </Box>
      </Box>
    </Center>
  );
}

export default App;
