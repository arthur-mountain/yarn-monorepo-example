"use client";
import { Button } from "@yarn-monorepo-example/components";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      TEST
      <Button title="Hello React Native Web!" />
      <Link href="demo">To Demo</Link>
    </main>
  );
}
