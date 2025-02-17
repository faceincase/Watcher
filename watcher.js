///////////////////////////////////////////////////////////
// WATCH FILE - ON UPDATE LOAD NEW
fs.watch('./messages.js', (eventType, filename) => {
    if (filename && eventType === 'change') {
        console.log(`Face Watcher │ ${filename} has changed. Attempting to reload...`);
        try {
            delete require.cache[require.resolve('./messages.js')];
            display = require('./messages.js');
            console.log(`Face Watcher │ ${filename} reloaded successfully.`);
        } catch (error) {
            console.error(`Face Watcher │ Error reloading ${filename}:`, error.message);
            console.log("Face Watcher │ Using previous version of messages.js.");
            
        }
    }
});
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
let display = require('./messages.js');  // Import the entire object
FaceDisplay("test")
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
function FaceDisplay(messageKey) {
    return display[messageKey] || "Message not found.";
}
///////////////////////////////////////////////////////////
