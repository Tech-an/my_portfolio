import Section from "components/section";
import Certification from "components/Skill/certification";
import Product from "components/Skill/product";
import PrograSkill from "components/Skill/prograskill";

export default function Skill() {
  return (
    <>
      <Section title="Programming">
        <PrograSkill />
      </Section>
      <Section title="certification">
        <Certification />
      </Section>
      <Section title="product">
        <Product />
      </Section>
    </>
  );
}
