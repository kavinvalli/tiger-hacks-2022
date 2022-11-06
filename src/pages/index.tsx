import dynamic from "next/dynamic";

const Page = dynamic(() => import("../components/dashboard"), { ssr: false });

export default function Dashboard() {
  return <Page />;
}
