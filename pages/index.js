import CoverCrypto from "../components/CoverCrypto/CoverCrypto";
import Newsletter from "../components/Newsletter/Newsletter";
export default function Home() {
  return (
    <div className="container">
      <div className="col">
        <CoverCrypto />
        <Newsletter />
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const date = await axios
//     .get(
//       "https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=c879f93668msh38effe36525dc4dp181186jsn1653c4bf345f"
//     )
//     .then((response) => response.data);
//   return {
//     props: {
//       rs: date,
//     }, // will be passed to the page component as props
//   };
