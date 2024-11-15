import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import featureJson from "../data/feature.json"; // Import the JSON data

const Home = () => {
  const featuresData = featureJson.features;

  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {featuresData.map((feature, index) => (
          <Features
            key={`feature-${index}`}
            paragraph={feature.paragraph}
            title={feature.title}
            image={feature.image}
            alt={feature.alt}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
