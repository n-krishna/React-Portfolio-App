import { Box, HStack } from "@chakra-ui/react";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const prevScrollY = useRef(0); 

  const handleClick = (anchor) => () => {
    const element = document.getElementById(`${anchor}-section`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `/#${anchor}`);
    }
  };

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (!headerRef.current) return; 

    if (currentScrollY > prevScrollY.current) {
      
      headerRef.current.style.transform = "translateY(-200px)";
    } else {
      
      headerRef.current.style.transform = "translateY(0)";
    }

    prevScrollY.current = currentScrollY; 
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
         <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>

           <nav>
            <HStack spacing={8}>
              <a href="/#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="/#contactme" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
