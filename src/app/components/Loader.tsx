import { Html } from "@react-three/drei";

export default function Loader({ progress }: { progress: number }) {
    return (
        <Html center>
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
                <div className="text-white text-xl font-bold">
                    {progress.toFixed(0)}%
                </div>
                <div className="w-48 h-3 bg-gray-800 rounded-full mt-2">
                    <div
                        className="h-full bg-white rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="text-white mt-4">Carregando...</p>
            </div>
        </Html>
    );
}