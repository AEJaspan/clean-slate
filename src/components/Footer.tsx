const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dr A. E. Jaspan
        </p>
        <p className="text-sm text-muted-foreground">
          Data Scientist
        </p>
      </div>
    </footer>
  );
};

export default Footer;
