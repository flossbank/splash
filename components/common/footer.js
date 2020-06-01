import { Flex, List, ListItem, Text, Box } from "@chakra-ui/core";

import TextLink from "./textLink";

import styles from "./footer.module.scss";

const links = [
  {
    url: "/about",
    text: "About Us",
  },
  {
    url: "/login",
    text: "Log In",
  },
  {
    url: "/signup",
    text: "Sign Up",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      backgroundColor="boulder"
      flexDirection="column"
      justify="space-around"
      padding="5rem 3.75rem"
      color="white"
    >
      <Flex flexDirection="row" justify="space-around" marginBottom="1.5rem">
        <List className={styles.list}>
          {links.map((link, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span aria-hidden="true">&bull;</span>}
              <ListItem>
                <TextLink
                  url={link.url}
                  text={link.text}
                  colorVariant="white"
                />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Flex>
      <Text textAlign="center">
        &copy; {currentYear} Flossbank. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
