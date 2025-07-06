export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src="public/sky.jpg"
        alt="Winter sky"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-white drop-shadow-md">Ghar ❄️</h1>
      </div>
    </div>
  );
}

