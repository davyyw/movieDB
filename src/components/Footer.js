import { getYear } from "../utilities/dates";

function Footer({ title, copyright, author }) {
  return (
    <footer>
      <p>
        &copy; {copyright} {title} by {author}
      </p>
    </footer>
  );
}

Footer.defaultProps = {
  copyright: getYear(),
};
export default Footer;
