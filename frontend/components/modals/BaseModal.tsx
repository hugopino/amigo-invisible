import { XMarkIcon } from "@heroicons/react/24/solid";

export default function BaseModal({
  showModal,
  setShowModal,
  children,
  title,
}: {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  children: React.ReactNode;
  title: string;
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
                {title}
              </h3>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
