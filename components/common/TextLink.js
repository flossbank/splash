import Link from "next/link";
import PropTypes from "prop-types";

import styles from "./TextLink.module.scss";

const TextLink = ({
  url,
  text,
  colorVariant = "ocean",
  fontWeightVariant = "bold",
}) => (
  <Link href={url}>
    <a
      className={`${styles.link} ${styles[colorVariant]} ${styles[fontWeightVariant]}`}
    >
      {text}
    </a>
  </Link>
);

TextLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  colorVariant: PropTypes.string,
  fontWeightVariant: PropTypes.string,
};

export default TextLink;
