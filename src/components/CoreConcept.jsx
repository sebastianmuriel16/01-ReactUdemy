function CoreConcept({ description, image, title }) {
  return (
    <li>
      <img src={image} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export { CoreConcept };
