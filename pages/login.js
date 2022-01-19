import Head from 'next/head';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Flex, Text, Heading, Button } from '@chakra-ui/react';
import iitgLogo from '../public/IITG_logo.png';

export default function Login() {
    const [isDesktop, setDesktop] = useState(false);
    useEffect(() => {
        if (window.innerWidth > 1012) {
            setDesktop(true);
        } else {
            setDesktop(false);
        }

        const updateMedia = () => {
            if (window.innerWidth > 1012) {
                setDesktop(true);
            } else {
                setDesktop(false);
            }
        };
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Caveat:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className={styles.container}>
                <div className={styles.bgWrapLogin}>
                    <Flex
                        direction={'column'}
                        grow={1}
                        shrink={1}
                        basis={1}
                        align={'center'}
                        width={'fit-content'}
                        margin={'0 auto'}
                    >
                        <div className={styles.iitgTop}>
                            <Flex
                                minH={{ base: '47.44px', md: '47.44px' }}
                                align={'center'}
                                justifyContent={'center'}
                                gap={'37px'}
                            >
                                <Image
                                    src={iitgLogo}
                                    width={'47.44px'}
                                    height={'47.44px'}
                                ></Image>
                                {/* <Heading
                        textAlign={'center'}
                        fontFamily={'Inter'}
                        fontSize={'18px'}
                        fontWeight={500}
                        lineHeight={'20px'}
                        color={'#18191F'}
                    >
                        INDIAN INSTITUTE OF TECHNOLOGY GUWAHATI
                    </Heading> */}
                                {isDesktop ? (
                                    <Heading
                                        textAlign={'center'}
                                        fontFamily={'Inter'}
                                        fontSize={'18px'}
                                        fontWeight={500}
                                        lineHeight={'20px'}
                                        color={'#18191F'}
                                    >
                                        INDIAN INSTITUTE OF TECHNOLOGY GUWAHATI
                                    </Heading>
                                ) : (
                                    <Heading
                                        textAlign={'center'}
                                        fontFamily={'Inter'}
                                        fontSize={'18px'}
                                        fontWeight={500}
                                        lineHeight={'20px'}
                                        color={'#18191F'}
                                    >
                                        IIT GUWAHATI
                                    </Heading>
                                )}
                            </Flex>
                        </div>
                        <div className={styles.loginCardWrapper}>
                            <Flex direction={'column'}>
                                {/* Welcome Text */}
                                <Flex direction={'column'}>
                                    <Heading>Weclome !</Heading>
                                    <Heading>Sign in</Heading>
                                    <Text>to continue to myprof</Text>
                                </Flex>
                                {/* Outlook Button */}
                                {/* <Flex></Flex> */}
                                <Button>CONTINUE WITH OUTLOOK</Button>
                                {/*  */}
                            </Flex>
                        </div>
                    </Flex>
                </div>
            </div>
        </>
    );
}
