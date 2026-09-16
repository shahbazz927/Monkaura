const fs = require('fs');

const findPDiv = (dir) => {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      findPDiv(`${dir}/${file.name}`);
    } else if (file.name.endsWith('.tsx')) {
      const content = fs.readFileSync(`${dir}/${file.name}`, 'utf-8');
      const pTags = content.match(/<p(?:\s[^>]*|)>[\s\S]*?<\/p>/g);
      if (pTags) {
        for (const p of pTags) {
          if (p.includes('<div') || p.includes('<section') || p.includes('<ul')) {
            console.log(`Found nested block in ${dir}/${file.name}: \n${p.substring(0, 100)}...`);
          }
        }
      }
    }
  }
};
findPDiv('./src/components');
