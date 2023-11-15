import NavBar from "@/components/Nav/NavigationBar";

export const metadata = {
  title: "Meni",
};

const MenuLayout = ({ children }) => {
  return (
    <section className="flex flex-col h-screen justify-start w-full z-10">
      {children}
      {/* <div className="z-50">
        <NavBar />
      </div> */}
    </section>
  );
};

export default MenuLayout;
