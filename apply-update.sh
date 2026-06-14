#!/bin/bash
set -e

echo "==> Unzipping portfolio update..."
unzip -o portfolio-update.zip

echo "==> Copying updated component files..."
cp portfolio-update/portfolio.tsx components/portfolio.tsx
cp portfolio-update/testimonials.tsx components/testimonials.tsx

echo "==> Copying new images..."
cp portfolio-update/images/*.jpg public/

echo "==> Removing old Z Admission image..."
rm -f public/project-zadmission.jpg

echo "==> Staging changes..."
git add -A

echo "==> Committing..."
git commit -m "Update portfolio: Z-magic image carousel, Red Sea STEM photos, add PhysioConnect Coventry project"

echo "==> Pushing to origin main..."
git push origin main

echo "==> Cleaning up..."
rm -rf portfolio-update portfolio-update.zip

echo "==> Done! Vercel will auto-deploy in 1-2 minutes."
