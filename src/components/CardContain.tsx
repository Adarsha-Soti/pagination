import { Grid, HStack, Heading, Img } from "@chakra-ui/react";

function CardContain() {
  const data = [
    {
      id: 1,
      day: "Mon",
      img: "./assets/cloudy.svg",
      temp: 20,
    },
    {
      id: 2,
      day: "Tue",
      img: "./assets/sunny.svg",
      temp: 25,
    },
    {
      id: 3,
      day: "Wed",
      img: "./assets/rainny.svg",
      temp: 28,
    },
    {
      id: 4,
      day: "Thr",
      img: "./assets/cloudy_rainy.svg",
      temp: 20,
    },
    {
      id: 5,
      day: "Fri",
      img: "./assets/sunny.svg",
      temp: 20,
    },
    {
      id: 6,
      day: "Sat",
      img: "./assets/sunny.svg",
      temp: 20,
    },
    {
      id: 7,
      day: "sun",
      img: "./assets/sunny.svg",
      temp: 20,
    },
  ];
  return data.map((item) => {
    return (
      <HStack>
        <Grid
          marginBottom="20px"
          backgroundColor="white"
          placeItems="center"
          p={5}
          boxShadow="2xl "
          borderWidth="1px"
          borderRadius="md"
          minWidth="163px"
          maxWidth="160px"
          height="230px"
          _hover={{ bg: "#4299E1", color: "white" }}
        >
          <Heading fontSize="x-large">{item.day}</Heading>
          <Img src={item.img} width="75%" />
          <Heading mt={4} fontSize="x-large">
            {item.temp}°C
          </Heading>
        </Grid>
      </HStack>
    );
  });
}

export default CardContain;
