import { Button } from "@yarn-monorepo-example/components";
import { Link } from "@/components";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      TEST
      <Button>Component Button</Button>
      <Link href="demo">To Demo</Link>
    </main>
  );
};

export default HomePage;
