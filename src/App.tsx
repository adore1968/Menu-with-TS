import CategoryList from "./components/CategoryList";
import MenuList from "./components/MenuList";

function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      <main>
        <section className="px-6 pt-20 mb-6">
          <h1 className="text-center text-3xl sm:text-5xl mb-5 font-bold">
            Our Menu
          </h1>
          <CategoryList />
          <MenuList />
        </section>
      </main>
    </div>
  );
}

export default App;
