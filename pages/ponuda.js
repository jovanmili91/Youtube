import Layout from "../components/Layout";
import Naocare from "../components/Naocare";
import { client } from "../lib/client";

export default function Ponuda({ pizzas }) {
  return (
    <Layout>
      <Naocare pizzas={pizzas} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "pizza"]';
  const pizzas = await client.fetch(query);
  return {
    props: {
      pizzas,
    },
  };
};
