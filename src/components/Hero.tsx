const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-start gap-6 mb-6">
          <img
            src={import.meta.env.BASE_URL + "C848C707-CDD3-4879-94DF-9E87142D8E48.jpeg"}
            alt="Dr A. E. Jaspan"
            className="w-24 h-24 rounded-full object-cover animate-stagger animate-stagger-1"
          />
          <div>
            <div className="animate-stagger animate-stagger-1">
              <p className="text-muted-foreground text-sm mb-2">Machine Learning Engineer</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight tracking-tight animate-stagger animate-stagger-2">
              Dr A. E. Jaspan
            </h1>
          </div>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-stagger animate-stagger-3">
          Machine learning engineer with a background in particle physics research at CERN.
        </p>
      </div>
    </section>
  );
};

export default Hero;
