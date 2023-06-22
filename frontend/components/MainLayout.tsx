export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-11/12 sm:w-3/4 md:w-2/3 xl:w-1/2 bg-white mx-auto h-4/5  border border-blue-500 rounded-xl shadow-xl">
        {children}
      </div>
    </main>
  );
}
