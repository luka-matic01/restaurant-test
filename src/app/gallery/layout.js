export const metadata = {
  title: "Galerija",
};

const GalleryLayout = ({ children }) => {
  return (
    <section className="flex flex-col h-screen justify-start w-full">
      {children}
    </section>
  );
};

export default GalleryLayout;
