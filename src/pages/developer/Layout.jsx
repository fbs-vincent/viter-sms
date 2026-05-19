// import Header from "../../partials/Header";
// import Navigation from "../../partials/Navigation";
// import ModalSuccess from "../../partials/modals/ModalSuccess";
// import { StoreContext } from "../../store/StoreContext";
import React from "react";
import Navigation from "../../partials/Navigation";
import { navList } from "./nav-function";
const Layout = ({ children, menu = "", submenu = "" }) => {
  //   const { store, dispatch } = React.useContext(StoreContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const isMobile = () => window.innerWidth < 1024;

  const setSidebar = (open) => {
    if (!isMobile()) return;
    setIsOpen(open);
  };

  // Reset sidebar on resize beyond 1024
  React.useEffect(() => {
    const handleResize = () => {
      if (!isMobile()) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* HEADER */}
      {/* <Header /> */}

      {/* NAVIGATION */}
      <section className="bg-gray-50 flex h-screen w-full relative overflow-hidden">
        {/* Overlay */}
        {isOpen && (
          <div
            id="sidebarOverlay"
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            onClick={() => setSidebar(false)}
          />
        )}
        <Navigation
          menu={menu}
          submenu={submenu}
          navigationList={navList}
          isOpen={isOpen}
          onClose={() => setSidebar(false)}
        />
        {/* <main className="flex-1 overflow-y-auto bg-gray-50">{children}</main> */}

        <main
          className={`flex-1 overflow-y-auto bg-gray-50 ${isOpen ? "overflow-hidden" : ""}`}
        >
          {/* Render children as function to pass onToggle to Header */}
          {typeof children === "function"
            ? children({ onToggle: () => setSidebar(true) })
            : children}
        </main>
      </section>

      {/* BODY */}

      {/* FOOTER */}

      {/* MODAL SUCCESS */}
      {/* {store.success && <ModalSuccess />} */}
    </>
  );
};

export default Layout;
