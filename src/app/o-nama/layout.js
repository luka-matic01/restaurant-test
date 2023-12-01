import Footer from "@/components/Nav/Footer";

export const metadata = {
  title: "O nama",
};

const AboutLayout = ({ children }) => {
  return (
    <section className="flex flex-col  justify-start w-full">
      {children}
    </section>
  );
};

export default AboutLayout;
