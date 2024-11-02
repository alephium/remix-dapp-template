import type { MetaFunction } from "@remix-run/node";
import Home from '../components/Home';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix dApp" },
    { name: "description", content: "Welcome to Alephium!" },
  ];
};

export default function Index() {
  return (
    <Home />
  );
}
