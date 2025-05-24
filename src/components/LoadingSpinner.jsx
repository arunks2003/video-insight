export function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center space-x-2">
            <div className="h-4 w-4 rounded-full bg-purple-600 animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-4 w-4 rounded-full bg-purple-600 animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-4 w-4 rounded-full bg-purple-600 animate-bounce"></div>
        </div>
    );
}