/**## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs = require('fs');

function removeExtraSpaces(filePath) {
    // Read the file
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace multiple spaces with a single space and trim
    let cleanedContent = content.split(/\s+/).join(' ').trim();
    
    // Write back to the file
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
}

const filePath = 'example.txt'; // Change this to your actual file path
removeExtraSpaces(filePath);
