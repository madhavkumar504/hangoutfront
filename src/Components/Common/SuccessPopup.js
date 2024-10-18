function SuccessPopup({ message, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-50 absolute inset-0"></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
        <div className="text-green-500 text-4xl text-center mb-4">🎉</div>
        <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
          Success!
        </h2>
        <p className="text-center text-gray-600 mb-4">{message}</p>
        <button
          className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SuccessPopup;
