const layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100-50 flex p-10 gap-8">
            <div className='shadow-lg p-4'>
                <h2 className="text-2xl">Welcome to the users page!</h2>
            </div>

            {/* main content */}
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
};

export default layout;