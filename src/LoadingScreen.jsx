

const LoadingScreen = () => {
    return (
        <div className="text-green-500 w-screen h-screen bg-white/30 backdrop-blur-sm absolute top-0 right-0 left-0 bottom-0 grid place-items-center">
            <div className=" animate-spin">
                <i className="fa-solid fa-2xl fa-spinner"></i>
            </div>
        </div>
    );
};

export default LoadingScreen;