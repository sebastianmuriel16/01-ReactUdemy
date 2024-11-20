import { TabButton } from "./TabButton";
import { Section } from "./Section";
import { Tabs } from "./Tabs";
import { useState } from "react";

function Examples({ examples }) {
  // react numca actualizara la UI por una variable, para eso existe el useState
  // let content = "pleasse select a concept";
  const [content, setContent] = useState(null);

  function handleSelect(selectedButton) {
    // Selected button => components, jsx, props, state
    setContent(selectedButton);
  }

  let tabContent = <p>Please select a concept</p>;
  if (content) {
    tabContent = (
      <div id="tab-content">
        <h3>{examples[content].title}</h3>
        <p>{examples[content].description}</p>
        <pre>
          <code>{examples[content].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              onSelect={() => handleSelect("components")}
              isSelected={content === "components"}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("jsx")}
              isSelected={content === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("props")}
              isSelected={content === "props"}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("state")}
              isSelected={content === "state"}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

export { Examples };
