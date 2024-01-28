/**
 * imports
 */
var fs = require('fs');

/**
 * core vars
 */
var TemplateData = {
    trLibCode: null,
    trLibHTML: null
}

function ProcessHTML() {
    // copies all HTML content from .trLib to templateData
    fs.readFile('./index.trLib', (error, html) => {
        if(error) throw error;
        TemplateData.trLibHTML = html;
    });
}


/**
 * utility functions
 */
ProcessHTML();

/**
 * exports
 */
module.exports = { TemplateData: TemplateData };