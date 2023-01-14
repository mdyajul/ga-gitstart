import { StarIcon } from '@chakra-ui/icons';
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex
  } from '@chakra-ui/react';
  import {AiOutlineFork } from "react-icons/ai";
 
  export default function Card({img, title,des, stars, fork}) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${img})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={img}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
               {des}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
               {title}
            </Heading>
            <Flex   gap="40px">
                <Flex alignItems="center" gap={2}>
                <Text color={"yellow.500"}  fontWeight={500} fontSize={'xl'}>
                <StarIcon />

                </Text>
                    <Text fontWeight={500} fontSize={'xl'}>
                  {stars}
              </Text> 
                </Flex>
             
              <Flex gap={2}  alignItems="center">
                <Text color={'blue.400'}  fontWeight={500} fontSize={'xl'}>
                <AiOutlineFork />

                </Text>
              <Text   fontWeight={500} fontSize={'xl'}>
                 {fork}  
              </Text>
              </Flex>
              
            </Flex>
          </Stack>
        </Box>
      </Center>
    );
  }