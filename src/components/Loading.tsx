const Loading = () => {
  return (
    <div className="h-screen w-full z-50 flex flex-col items-center justify-center min-h-screen">
      {/* <img
        src="/logo.svg"
        alt="Logo"
        className="w-24 h-24 mb-4 animate-bounce"
      /> */}
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-full opacity-75 animate-ping"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-full opacity-75 animate-ping delay-200"></div>
      </div>
    </div>
  );
};

export default Loading;
