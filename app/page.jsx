'use client' // solo si estás en Next.js con App Router

import { useState } from 'react';
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';

export default function App() {
  const [uploadedUrls, setUploadedUrls] = useState([]);

  const handleUploadSuccess = (e) => {
    const entries = e.detail?.successEntries;
    if (!entries || entries.length === 0) return;

    const urls = entries.map((entry) => entry.cdnUrl);
    setUploadedUrls((prev) => [...prev, ...urls]);
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-4 py-10 text-center">
      <h1 className="text-3xl font-serif text-pink-700 mb-6">
        💍 Sube tu mejor foto de la boda 📸
      </h1>

      <div className="w-full max-w-md">
        <FileUploaderRegular
          sourceList="local, camera, facebook, gdrive"
          pubkey="8c231035f1041fc4db60"
          classNameUploader="uc-dark uc-gray"
          onCommonUploadSuccess={handleUploadSuccess}
        />
      </div>

      {uploadedUrls.length > 0 && (
        <div className="mt-10 space-y-6">
          <p className="text-green-700 font-medium">
            ¡Gracias por compartir tu foto con nosotros! 💕
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {uploadedUrls.map((url, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-2">
                <img src={url} alt={`Foto ${index + 1}`} className="w-full rounded-md" />
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 text-blue-600 underline text-sm"
                >
                  Ver imagen
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
