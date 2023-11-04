export const metadata = {
  title: "Kontakt",
};

const ContactLayout = ({ children }) => {
  return (
    <section className="flex flex-col h-screen justify-start w-full">
      {children}
    </section>
  );
};

export default ContactLayout;
