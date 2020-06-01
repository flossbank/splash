import { Box, Flex } from "@chakra-ui/core";

import FBButton from "../common/button";
import FBLogo from "../common/logo";
import TextLink from "../common/textLink";
import useMedia from "../common/useMedia";

export default () => {
  const isWide = useMedia("(min-width: 800px");

  return (
    <>
      {isWide ? (
        <Flex justify="space-between" paddingLeft="80px" paddingRight="80px">
          <Flex alignItems="center" flexDirection="row">
            <FBLogo />
          </Flex>
          <Box margin="20px" className="flow-row">
            {/* TODO: convert to real nav and list / list items */}
            <TextLink text="About Us" color="boulder" url="/about" />
            <TextLink text="Log In" color="boulder" url="/login" />
            {/* TODO: create LinkBtn component and replace */}
            <FBButton
              borderColor="ocean"
              width="auto"
              margin="10px"
              color="ocean"
              variant="outline"
              _hover={{ backgroundColor: "ocean", color: "white" }}
            >
              Sign up
            </FBButton>
          </Box>
        </Flex>
      ) : (
        <Flex alignItems="center" flexDirection="column" margin="20px">
          <FBLogo />
        </Flex>
      )}
    </>
  );
};
