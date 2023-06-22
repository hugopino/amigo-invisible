import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <main className="h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-11/12 sm:w-3/4 md:w-2/3 xl:w-1/2 bg-white mx-auto h-4/5  border border-blue-500 rounded-xl shadow-xl">
          <section>
            <h1 className="text-4xl my-8 font-bold text-center">
              Amigo invisible
            </h1>
          </section>
        </div>
      </main>
    </RootLayout>
  );
}
