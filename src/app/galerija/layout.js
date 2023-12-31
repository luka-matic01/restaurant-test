import Footer from "@/components/Nav/Footer";

export const metadata = {
  title: "Galerija",
};

const GalleryLayout = ({ children }) => {
  return (
    <section className="flex flex-col  justify-start w-full">
      {children}
    </section>
  );
};

export default GalleryLayout;
