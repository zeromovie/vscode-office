const fs = require('fs');
let c = fs.readFileSync('resource/vditor/vditor.js', 'utf8');
c = c.replace('t+"/dist/js/mermaid/mermaid.min.js"', '"https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js"');
fs.writeFileSync('resource/vditor/vditor.js', c);
console.log('Patched vditor.js successfully');
