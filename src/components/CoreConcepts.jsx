import { CoreConcept } from "./CoreConcept";
function CoreConcepts({ CORE_CONCEPTS }) {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => {
          return <CoreConcept key={concept.title} {...concept} />;
        })}
      </ul>
    </section>
  );
}

export { CoreConcepts };
