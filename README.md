<div align="center">
  
  # Watcher.js
  made by fac.e
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


  <p>
    Real-time string loader and editor:
    <br>
    Loads strings from a file and allows live editing, instantly reflecting changes without reloading the main code. Error proof.
  </p>
</div>



> [!WARNING]  
> Uses **`require cache`** and **`fs (file system)`**

---

## Features  

- [x] Strings update instantly without needing to restart the program.  
- [x] If a string is not found, it returns `"Message not found"` instead of crashing.  
- [x] If an edit contains a syntax error, the system keeps the last valid version instead of loading the faulty one.

---
