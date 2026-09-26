import React, { useState, useEffect } from "react";
import { QrCode, Loader2 } from "lucide-react";

interface QRCodeImageProps {
  grandTotal: number | string;
  upiId: string;
}

export const QRCodeImage: React.FC<QRCodeImageProps> = ({ grandTotal, upiId }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Construct UPI payload
  const upiUrl = `upi://pay?pa=${upiId}&pn=MentorBridge&am=${grandTotal}&cu=INR&tn=MentorBridge%20Booking`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiUrl)}`;

  useEffect(() => {
    setLoading(true);
    setError(false);
  }, [grandTotal, upiId]);

  return (
    <div className="w-48 h-48 sm:w-52 sm:h-52 border border-gray-100 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-md p-1 group relative overflow-hidden">
      {/* Dynamic QR Code Image */}
      {!error && (
        <img
          src={qrImageUrl}
          alt="Monkaura UPI QR Code"
          className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 ${loading ? "opacity-0 absolute" : "opacity-100"}`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          referrerPolicy="no-referrer"
        />
      )}

      {/* Loading State */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white gap-2">
          <Loader2 className="w-8 h-8 text-brand-green animate-spin" />
          <span className="text-[10px] text-gray-400 font-mono">Generating dynamic UPI QR...</span>
        </div>
      )}

      {/* Error Fallback */}
      {error && (
        <div className="flex flex-col items-center justify-center text-gray-500 p-4 text-center h-full select-none bg-gray-50 w-full">
          <QrCode size={48} className="text-brand-green mb-2" />
          <span className="text-xs font-bold text-gray-800 leading-tight">UPI Payment QR</span>
          <span className="text-[10px] text-gray-500 mt-1">₹{grandTotal}</span>
          <span className="text-[9px] text-brand-green bg-brand-green/10 px-1.5 py-0.5 rounded mt-2 font-mono truncate max-w-full">
            {upiId}
          </span>
        </div>
      )}
    </div>
  );
};
