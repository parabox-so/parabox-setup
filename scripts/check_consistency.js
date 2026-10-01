#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

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
  console.error('👉 Example: pnpm check-product NAME=linear-escalator');
  process.exit(1);
}

const normalized = productName.toLowerCase().replace(/[^a-z0-9-]/g, '-');
const rootDir = path.resolve(__dirname, '..');
const targetDir = path.join(rootDir, 'products', normalized);

if (!fs.existsSync(targetDir)) {
  console.error(`❌ Error: Product folder products/${normalized} does not exist.`);
  process.exit(1);
}

console.log(`🔍 Checking 6 Documents and Evidence for: products/${normalized}...\n`);

const requiredDocs = [
  '01-prd.md',
  '02-trd.md',
  '03-app-flow.md',
  '04-design-brief.md',
  '05-backend-schema.md',
  '06-implementation-plan.md'
];

let allPassed = true;

for (const doc of requiredDocs) {
  const filePath = path.join(targetDir, doc);
  if (!fs.existsSync(filePath)) {
    console.log(`❌ Missing: ${doc}`);
    allPassed = false;
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  // Count unfilled bracket placeholders
  const placeholders = (content.match(/\[(.*?)\]/g) || []).filter(
    p => !p.startsWith('[x]') && !p.startsWith('[ ]') && !p.startsWith('[link') && !p.startsWith('[Product')
  );

  if (placeholders.length > 3) {
    console.log(`⚠️  ${doc}: Contains ${placeholders.length} unfilled placeholders e.g. ${placeholders.slice(0, 2).join(', ')}`);
  } else {
    console.log(`✅ ${doc}: Document present & structured`);
  }
}

// Check evidence directory
const evidenceDir = path.join(targetDir, 'evidence');
if (fs.existsSync(evidenceDir)) {
  console.log(`✅ evidence/: Directory present with interview and research subfolders`);
} else {
  console.log(`⚠️  evidence/: Evidence directory missing`);
}

if (allPassed) {
  console.log(`\n🎉 Consistency check complete! Ready to hand to AI Coding Agent.`);
} else {
  console.log(`\n⚠️  Please resolve missing documents before starting implementation.`);
  process.exit(1);
}
