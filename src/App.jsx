import Result from "../components/Result.jsx";
import Summary from "../components/Summary.jsx";
import Footer from "../components/Footer.jsx";
import data from "../data.json";

function App() {
  return (
    <>
      <main className="flex rounded-[30px] bg-[#fff]">
        <Result />
        <Summary data={data} />
        <Footer />
      </main>
    </>
  );
}

export default App;
