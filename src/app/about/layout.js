export const metadata = {
  title: "O nama",
};

const AboutLayout = ({ children }) => {
  return (
    <section className="flex flex-col h-screen justify-start w-full">
      {children}
    </section>
  );
};

export default AboutLayout;
