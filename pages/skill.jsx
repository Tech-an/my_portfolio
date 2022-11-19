import Section from "components/section";
import Certification from "components/Skill/certification";
import Product from "components/Skill/product";
import PrograSkill from "components/Skill/prograskill";

export default function Skill() {
  return (
    <>
      <Section title="Programming">
        <h2
          style={{
            fontSize: "calc(var(--small-heading3)*1.5)",
          }}
        >
          プログラミングスキルを主観で5段階評価しています
        </h2>
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
