import { FC } from "react";

interface ModalVideoProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const ModalVideo: FC<ModalVideoProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={onClose} // Fermer si clic à l'extérieur
    >
      <div
        className="relative w-full max-w-3xl p-4 bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture si clic à l'intérieur
      >
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={videoUrl}
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalVideo;
