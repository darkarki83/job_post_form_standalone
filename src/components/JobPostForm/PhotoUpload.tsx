import { useRef } from 'react';
import { PhotoUploadProps } from '../../types';

const PhotoUpload = ({ photos, onPhotosChange, onRemovePhoto, maxPhotos = 5 }: PhotoUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-900 mb-2">
        Photos (optional, up to {maxPhotos})
      </label>

      <div className="flex items-center gap-3 flex-wrap">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={onPhotosChange}
          className="hidden"
        />
        <button
          type="button"
          onClick={handleClick}
          disabled={photos.length >= maxPhotos}
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:border-blue-600 hover:bg-blue-50/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Add photos
        </button>
        <span className="text-xs text-gray-500">JPG/PNG up to ~10MB each</span>
        {photos.length > 0 && (
          <span className="text-xs text-gray-500">
            {photos.length} / {maxPhotos}
          </span>
        )}
      </div>

      {photos.length > 0 && (
        <div className="grid grid-cols-5 gap-2 mt-3">
          {photos.map((file, idx) => (
            <div key={idx} className="relative aspect-square">
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="w-full h-full object-cover rounded-lg border border-gray-300"
              />
              <button
                type="button"
                onClick={() => onRemovePhoto(idx)}
                className="absolute top-1 right-1 bg-black/60 hover:bg-black/80 text-white rounded-md px-2 py-0.5 text-xs transition-colors"
                title="Remove"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
