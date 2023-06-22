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
            <ol className="flex items-center mx-auto w-4/5 text-sm font-medium text-center text-gray-500 sm:text-base">
              <li className="flex md:w-full items-center text-blue-600 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 ">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 ">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Participantes{" "}
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                  <span className="mr-2">2</span>
                  Mensaje{" "}
                  <span className="hidden sm:inline-flex sm:ml-2">email</span>
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">3</span>
                Confirmación
              </li>
            </ol>
          </section>
        </div>
      </main>
    </RootLayout>
  );
}
