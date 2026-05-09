import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    if (!input.trim()) return;
    setQrCode(input);
    setInput('');
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleGenerateQrCode();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          QR Code Generator
        </h1>
        
        <div className="space-y-3">
          <input
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            name="qr-code"
            value={input}
            placeholder="Enter URL or text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
          <button
            disabled={!input.trim()}
            onClick={handleGenerateQrCode}
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 active:scale-95 transition"
          >
            Generate
          </button>
        </div>

        {qrCode && (
          <div className="flex justify-center pt-4 border-t border-gray-100">
            <div className="p-4 bg-white border-gray-200 rounded-xl">
              <QRCode 
                id="qr-code-value" 
                value={qrCode} 
                size={220} 
                bgColor="#ffffff" 
                fgColor="#000000"
              />
            </div>
          </div>
        )}
        
        {qrCode && (
          <p className="text-xs text-gray-500 text-center break-all">
            {qrCode}
          </p>
        )}
      </div>
    </div>
  );
}
