import Button from "@/shared/components/Button";

const Home = () => {
  return (
    <main className="h-screen flex flex-col gap-8 justify-center items-center">
      <Button href="/with-virtuoso" color="blue-500">
        With React Virtuoso
      </Button>
      <Button href="/without-virtuoso" color="red-500">
        Without React Virtuoso
      </Button>
    </main>
  );
};

export default Home;
