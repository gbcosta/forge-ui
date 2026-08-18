import { Button } from "@/components/ui/Button";

function App() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="mb-8 text-3xl font-bold">Forge UI</h1>

      <div className="flex gap-4">
        <Button>Primary</Button>

        <Button variant="secondary">Secondary</Button>

        <Button variant="outline">Outline</Button>

        <Button variant="ghost">Ghost</Button>

        <Button variant="destructive">Delete</Button>
      </div>
    </main>
  );
}

export default App;
