#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Extract product name from CLI arguments e.g. NAME=contract-guard
let productName = null;
for (const arg of process.argv.slice(2)) {
  if (arg.startsWith('NAME=')) {
    productName = arg.split('=')[1];
  } else if (arg.startsWith('--name=')) {
    productName = arg.split('=')[1];
  } else if (!arg.startsWith('-')) {
    productName = arg;
  }
}

if (!productName) {
  console.error('❌ Error: Please specify a product name.');
  console.error('👉 Example: pnpm new-product NAME=linear-escalator');
  process.exit(1);
}

const normalized = productName.toLowerCase().replace(/[^a-z0-9-]/g, '-');
const rootDir = path.resolve(__dirname, '..');
const targetDir = path.join(rootDir, 'products', normalized);
const templatesDir = path.join(rootDir, 'templates');

if (fs.existsSync(targetDir)) {
  console.error(`❌ Error: Product folder products/${normalized} already exists.`);
  process.exit(1);
}

console.log(`🚀 Scaffolding product specification in products/${normalized}...`);

// Create folder structure
fs.mkdirSync(path.join(targetDir, 'evidence', 'interviews'), { recursive: true });
fs.mkdirSync(path.join(targetDir, 'evidence', 'research'), { recursive: true });
fs.mkdirSync(path.join(targetDir, 'evidence', 'benchmarks'), { recursive: true });
fs.mkdirSync(path.join(targetDir, 'evidence', 'verifications'), { recursive: true });

// Copy 6 core documents
const coreDocs = [
  '01-prd.md',
  '02-trd.md',
  '03-app-flow.md',
  '04-design-brief.md',
  '05-backend-schema.md',
  '06-implementation-plan.md'
];

for (const doc of coreDocs) {
  const src = path.join(templatesDir, doc);
  const dest = path.join(targetDir, doc);
  if (fs.existsSync(src)) {
    let content = fs.readFileSync(src, 'utf8');
    content = content.replace(/\[Product Name\]/g, normalized);
    content = content.replace(/\[app_name\]/g, normalized);
    fs.writeFileSync(dest, content);
  }
}

// Copy evidence templates
const evidenceTemplates = [
  { src: 'evidence/interviews/TEMPLATE.md', dest: 'evidence/interviews/discovery_01.md' },
  { src: 'evidence/research/TEMPLATE.md', dest: 'evidence/research/competitor_analysis.md' },
  { src: 'evidence/benchmarks/TEMPLATE.md', dest: 'evidence/benchmarks/poc_benchmarks.md' },
  { src: 'evidence/verifications/TEMPLATE.md', dest: 'evidence/verifications/release_report.md' },
];

for (const item of evidenceTemplates) {
  const src = path.join(templatesDir, item.src);
  const dest = path.join(targetDir, item.dest);
  if (fs.existsSync(src)) {
    let content = fs.readFileSync(src, 'utf8');
    content = content.replace(/\[Product Name\]/g, normalized);
    fs.writeFileSync(dest, content);
  }
}

console.log(`\n✅ Product specification folder created at: products/${normalized}`);
console.log(`\n📄 Generated 6 Planning Documents:`);
coreDocs.forEach(d => console.log(`   ├── ${d}`));
console.log(`📂 Generated Evidence Structure:`);
console.log(`   └── evidence/ (interviews, research, benchmarks, verifications)`);
console.log(`\n👉 Next step: Fill out the 6 documents or ask an AI assistant to interview you.`);
console.log(`👉 Run 'pnpm check-product NAME=${normalized}' to verify before coding.`);
