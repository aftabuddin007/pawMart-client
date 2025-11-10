import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen">
      <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
        </div>
    );
};

export default Loading;