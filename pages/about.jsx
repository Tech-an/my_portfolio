import Section from "../components/section";
import Profile from "../components/About/profile";
import Carrer from "components/About/carrer";

export default function About() {
  return (
    <>
      <Section title="About me" section_name="about">
        <Profile />
      </Section>
      <Section title="Carrer" section_name="carrer">
        <Carrer />
      </Section>
    </>
  );
}
