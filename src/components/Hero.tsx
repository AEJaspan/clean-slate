const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="animate-stagger animate-stagger-1">
          <p className="text-muted-foreground text-sm mb-2">Data Scientist & Researcher</p>
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight tracking-tight animate-stagger animate-stagger-2">
          Dr A. E. Jaspan
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl animate-stagger animate-stagger-3">
          Building intelligent systems at the intersection of machine learning, 
          Bayesian statistics, and large language models.
        </p>
      </div>
    </section>
  );
};

export default Hero;
