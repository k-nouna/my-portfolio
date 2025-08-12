# CV Download Setup

## How to Add Your CV

1. **Replace the placeholder CV file:**
   - Navigate to `public/` folder
   - Replace `Lionel_Kambdetey_CV.pdf` with your actual CV file
   - Keep the same filename OR update the path in `src/data/portfolio.json`

2. **Update CV path (if needed):**
   - Open `src/data/portfolio.json`
   - Update the `cvPath` field with your CV filename:
   ```json
   "cvPath": "/YourName_CV.pdf"
   ```

3. **CV File Requirements:**
   - Format: PDF recommended
   - Size: Keep under 5MB for faster downloads
   - Name: Use professional naming (e.g., FirstName_LastName_CV.pdf)

## Current CV Download Features

- ✅ Download button in About Me section
- ✅ Download button in Contact section
- ✅ Download icon with animation
- ✅ Professional styling
- ✅ Mobile responsive

## Testing

After adding your CV file:
1. Run `npm start`
2. Click "Download Resume" button
3. Verify the correct file downloads

Note: The current file is a placeholder. Please replace with your actual CV.