import React from "react";

const App = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/app-sahipe.apk"; // Make sure your APK is named this way
    link.download = "app-sahipe.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl text-amber-700 text-center mb-6">
        Download the Sahipe App
      </h1>

      <button
        onClick={handleDownload}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
      >
        Download APK
      </button>
    </div>
  );
};

export default App;
