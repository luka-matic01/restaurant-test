export const metadata = {
  title: "Meni",
};

const MenuLayout = ({ children }) => {
  return (
    <section className="flex flex-col h-screen justify-start w-full">
      {children}
    </section>
  );
};

export default MenuLayout;
