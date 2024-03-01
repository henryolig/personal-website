import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Text, Divider, CardBody, Card, Image, Stack, Heading, ButtonGroup, CardFooter } from '@chakra-ui/react';
import VisaLogo from '../../images/logos/visa_logo_7.png'



const WorkBar = () => {
    return(
        <Card bgColor='#8398FF' borderRadius='lg'>
            <CardBody bgColor='#8398FF' borderRadius='lg'>
                <Image src={VisaLogo} width='8vw' borderRadius='lg'/>
                <Stack mt='6' spacing='3' bgColor='#8398FF'>
                    <Heading mb='1vh' size='md' color='#ebebeb'>Visa - Site Reliability Engineer Intern</Heading>
                    <Text color='#ebebeb' fontWeight='500'>
                        Upcoming...
                    </Text>
                    </Stack>
                </CardBody>
        </Card>
    );
}

export default WorkBar