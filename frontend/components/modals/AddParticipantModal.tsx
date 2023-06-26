import { XMarkIcon } from "@heroicons/react/24/solid";

export default function AddParticipantModal({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}) {
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-full overflow-x-hidden overflow-y-auto md:inset-0 bg-black bg-opacity-70 flex items-center justify-center ${
          !showModal && "hidden"
        }`}
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={() => setShowModal(false)}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 text-center">
                Añadir participante
              </h3>
              <form
                className="space-y-1 flex flex-col w-3/4 items-center mx-auto gap-2"
                action="#"
              >
                <div className="w-full">
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    autoComplete="given-name"
                    placeholder="Nombre"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="ejemplo@gmail.com"
                    required
                  />
                </div>
                <div className="w-full flex justify-center pt-6 pb-2">
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Añadir
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
