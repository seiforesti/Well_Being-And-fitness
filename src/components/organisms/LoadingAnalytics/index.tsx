import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { useLottie } from 'lottie-react';
import { useEffect } from 'react';
import { LORD_ICON } from '../../../assets/lordIcon';

export const LoadingAnalytics = () => {
  const optionsUploadFileIcon = {
    animationData: LORD_ICON.Analytics,
    loop: false,
    autoplay: true,
  };

  const { View, play, stop } = useLottie(optionsUploadFileIcon);

  useEffect(() => {
    const interval = setInterval(() => {
      play();
      setTimeout(() => {
        stop();
      }, 600);
    }, 700);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Flex h='100vh' w='100%' position='absolute' bg='#ffffff97'>
      <Center w='100%' flexDirection='column'>
        <Box w={16}>{View}</Box>
        <Heading fontSize='lg'>We are analyzing your workout</Heading>
        <Heading fontSize='sm'>may take a few minutes...</Heading>
      </Center>
    </Flex>
  );
};
