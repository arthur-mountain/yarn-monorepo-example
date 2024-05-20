import { Button } from "@yarn-monorepo-example/components";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      TEST
      <Button>1324</Button>
      <Link href="demo">To Demo</Link>
    </main>
  );
}
