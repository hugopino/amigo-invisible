import BaseModal from "./BaseModal";

export default function AddParticipantModal({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}) {
  return (
    <BaseModal
      showModal={showModal}
      setShowModal={setShowModal}
      title="Añadir participante"
    >
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
    </BaseModal>
  );
}
