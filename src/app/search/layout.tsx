// app/layout.tsx
import AppBar from "@/components/Appbar";
import SearchBar from "@/components/SearchBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AppBar />
      <header className="bg-gray-bg sticky top-0 z-40 p-4 ">
        <SearchBar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
