import Footer from "@/components/Nav/Footer";

export const metadata = {
  title: "Kontakt",
};

const ContactLayout = ({ children }) => {
  return (
    <section className="flex flex-col justify-start w-full">
      {children}
      <Footer />
    </section>
  );
};

export default ContactLayout;
