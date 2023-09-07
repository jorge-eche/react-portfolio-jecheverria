import { HomePage, Title, TypedOut, ContactButton } from "./HomeStyledComp";

const Home = ({ routeChangeHandler }) => {
  return (
    <HomePage>
      <Title>
        Hello!
        <br /> My name is <span>Jorge Echeverría</span> <br />
        I'm a <TypedOut></TypedOut>
      </Title>
      <ContactButton onClick={() => routeChangeHandler("contact")}>
        Contact Me
      </ContactButton>
    </HomePage>
  );
};

export default Home;
