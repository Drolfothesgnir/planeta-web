export function createDispatcher(name, config = {
    prevent: false
}) {
    function dispatcher (event) {
        if (config.prevent) {
            event.preventDefault();
        }
        const customEvent = new CustomEvent(name, {
            bubbles: true
        });
        event.target.dispatchEvent(customEvent);
    }
    return dispatcher;
}