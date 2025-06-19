import StartCard from "../organismes/StartCard";
import ChefChoiceCard from "../organismes/ChefChoiceCard";
import AboutUsCard from "../organismes/AboutUsCard";
import OptionCard from "../organismes/OptionCard";
import TopNav from "../organismes/TopNav";

const Homepage = () => {
  return (
    <>
      <TopNav></TopNav>
      <StartCard
        value="Rest Foods"
        src="https://vietnamdecouverte.com/pic/blog/76609d8c-ea8a-4076-b45b-f67d732011c5.jpg"
      ></StartCard>
      <AboutUsCard></AboutUsCard>
      <ChefChoiceCard></ChefChoiceCard>
      <OptionCard></OptionCard>
    </>
  );
};

export default Homepage;
