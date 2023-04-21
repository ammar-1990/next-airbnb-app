import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { el } from "date-fns/locale";
import SearchItem from "@/components/SearchItem";

const search = ({searchResults}) => {
  const router = useRouter();

  const { location, startDate, endDate, guestsNumber } = router.query;
  const formatedStartDate = format(new Date(startDate || Date.now()), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate || Date.now()), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header placeholder={`${location} | ${range} | ${guestsNumber} Guest(s)`} />
      <main className="flex-1 flex">
        <section className="p-4 flex-1 overflow-hidden">
          <p className="text-xs">
            300+ Stays -{range}- for {guestsNumber} guest(s)
          </p>
          <h1 className="text-2xl font-semibold mt-3 mb-6">
            Stays in {location}
          </h1>
          <div className="overflow-scroll myScroll ">
            <div className=" gap-2 flex max-w-fit p-3">
              <p className="tag capitalize ">tag</p>
              <p className="tag capitalize">new tag</p>
              <p className="tag capitalize">nice choice</p>
              <p className="tag capitalize">attraction</p>
              <p className="tag capitalize">tag</p>
              <p className="tag capitalize">new tag</p>
              <p className="tag capitalize">nice choice</p>
              <p className="tag capitalize">attraction</p>
              <p className="tag capitalize">tag</p>
              <p className="tag capitalize">new tag</p>
              <p className="tag capitalize">nice choice</p>
              <p className="tag capitalize">attraction</p>
              <p className="tag capitalize">tag</p>
              <p className="tag capitalize">new tag</p>
              <p className="tag capitalize">nice choice</p>
              <p className="tag capitalize">attraction</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-8 items-center md:items-stretch">
            {searchResults.map((el,i)=><SearchItem {...el} />)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default search;



export async function getServerSideProps(){
    const searchResults = require('../data.json')

    return {
        props:{
            searchResults
        }
    }
}