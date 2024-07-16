# XML to JSON Conversion

This script demonstrates how to convert an XML string to a JSON object using JavaScript. The provided XML string is a sample invoice in the NFe (Nota Fiscal Eletrônica) format commonly used in Brazil.

## Requirements

- JavaScript
- A web browser or Node.js environment

## Usage

1. **Parsing XML to DOM:**
   The `DOMParser` API is used to parse the XML string into a DOM object.

2. **Converting DOM to JSON:**
   The `xmlToJson` function recursively traverses the DOM and constructs a corresponding JSON object.

