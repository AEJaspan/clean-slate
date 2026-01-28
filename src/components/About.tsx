const About = () => {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          About
        </h2>
        
        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>
            I'm a data scientist with a background in physics and a passion for 
            complex problem-solving. My work spans machine learning, Bayesian inference, 
            and generative AI—from production-quality code on cloud infrastructure to 
            high-impact proof-of-concept projects.
          </p>
          
          <p>
            A Bayesian mindset shapes how I approach problems. This perspective has 
            informed my recent publication on time series forecasting for stochastic, 
            non-stationary processes, and continues to guide my work across domains.
          </p>
          
          <p>
            Currently exploring the frontiers of large language models and their 
            applications across industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
