import Head from 'next/head';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';

import React from 'react';
// import useSWR from 'swr';

// import checkLogin from '../../../src/utils/checkLogin';
// import storage from '../../../src/utils/storage';

export default function Header() {
    // const { data: currentUser } = useSWR("user", storage);
    // const isLoggedIn = checkLogin(currentUser);

    // const handleClick = React.useCallback(() => setPage(0), []);

    const bg = useColorModeValue('black', 'white');
    const { isOpen, onToggle } = useDisclosure();

    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Box>
                <Flex
                    // bg={useColorModeValue('#FDFAF3', 'gray.800')}
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    mt={'5px'}
                    px={{ base: 0 }}
                    borderBottom={1}
                    // borderStyle={'solid'}
                    // borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}
                >
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}
                        ml={'15px'}
                        mr={'40px'}
                    >
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? (
                                    <CloseIcon w={3} h={3} />
                                ) : (
                                    <HamburgerIcon w={5} h={5} />
                                )
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                    <Flex
                        flex={{ base: 1 }}
                        justify={{ base: 'center', md: 'start' }}
                    >
                        <Link
                            textAlign={useBreakpointValue({
                                base: 'center',
                                md: 'left',
                            })}
                            fontSize={'18px'}
                            fontFamily={'Inter'}
                            fontWeight={500}
                            color={useColorModeValue('#18191F', 'white')}
                            ml={'69px'}
                            mr={'66px'}
                            _hover={{
                                color: '#0070f3',
                            }}
                        >
                            MyProf
                        </Link>

                        <Flex display={{ base: 'none', md: 'flex' }} ml={0}>
                            <DesktopNav />
                        </Flex>
                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}
                        ml={14}
                        mr={69}
                    >
                        <Button
                            display={{ base: 'none', md: 'inline-flex' }}
                            // as={'a'}
                            fontSize={14}
                            fontWeight={500}
                            fontFamily={'Inter'}
                            // variant={'link'}
                            color={'white'}
                            bg={'black'}
                            href={'#'}
                            border={1}
                            borderStyle={'solid'}
                            borderColor={'black'}
                            _hover={{
                                bg: 'white',
                                color: 'black',
                            }}
                        >
                            Sign In
                        </Button>
                        {/* <Button
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={14}
                            fontWeight={500}
                            fontFamily={'Inter'}
                            color={'white'}
                            bg={'black'}
                            border={1}
                            borderStyle={'solid'}
                            borderColor={'black'}
                            href={'#'}
                            _hover={{
                                bg: '#2D3748',
                            }}
                        >
                            Sign Up
                        </Button> */}
                    </Stack>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <MobileNav />
                </Collapse>
            </Box>
        </>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('#18191F', 'gray.200');
    const linkHoverColor = useColorModeValue('#FDFAF3', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={'0'}>
            {/* {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}
                            >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav
                                            key={child.label}
                                            {...child}
                                        />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))} */}

            <Box key={'Myprof'}>
                {/* <Popover trigger={'hover'} placement={'bottom-start'}> */}
                {/* <PopoverTrigger> */}
                {/* <Link
                    marginRight={'66px'}
                    href="/"
                    fontSize={'18px'}
                    fontFamily={'Inter'}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                        color: '#0070f3',
                    }}
                >
                    MyProf
                </Link> */}
                <Link
                    marginRight={'66px'}
                    href="/"
                    fontSize={'18px'}
                    fontFamily={'Inter'}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                        color: '#0070f3',
                    }}
                >
                    About
                </Link>
                <Link
                    href="/"
                    fontSize={'18px'}
                    fontFamily={'Inter'}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                        color: '#0070f3',
                    }}
                >
                    Contact Us
                </Link>
                {/* </PopoverTrigger> */}
                {/* <PopoverContent
                        border={0}
                        boxShadow={'xl'}
                        bg={popoverContentBgColor}
                        p={4}
                        rounded={'xl'}
                        minW={'sm'}
                    >
                        <Stack>
                            <DesktopSubNav
                                label={'MyProf'}
                                href={'/'}
                                subLabel={'MyProf'}
                            />
                        </Stack>
                    </PopoverContent> */}
                {/* </Popover> */}
            </Box>
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
        >
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}
                    >
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{
                        opacity: '100%',
                        transform: 'translateX(0)',
                    }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}
                >
                    <Icon
                        color={'pink.400'}
                        w={5}
                        h={5}
                        as={ChevronRightIcon}
                    />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}
        >
            <MobileNavItem label={'MyProf'} href={'/'} />
        </Stack>
    );
};

const MobileNavItem = ({ label, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}
                >
                    {label}
                </Text>
                {/* {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )} */}
            </Flex>

            {/* <Collapse
                in={isOpen}
                animateOpacity
                style={{ marginTop: '0!important' }}
            >
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}
                >
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse> */}
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: 'MyProf',
        href: '#',
    },
    {
        label: 'About',
        href: '#',
    },
    {
        label: 'Contact Us',
        href: '#',
    },
];
