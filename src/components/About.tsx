const About = () => {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          About
        </h2>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>
            My PhD gave me a foundation in statistical modelling and large-scale data
            analysis, which I've since applied across various industries. Currently
            my work focuses on the responsible deployment of AI systems at scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
