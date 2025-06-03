# Chat Screenshot Generator

A web application that allows users to create customized chat screenshots in both WhatsApp and iMessage styles. Perfect for creating mock conversations for presentations, social media, or fun!

## Features

- Switch between WhatsApp and iMessage styles
- Customize receiver's name
- Customize chat bubble colors for both parties
- Send messages as either party
- Upload and include images in the chat
- Delete individual messages
- Download the entire chat as a screenshot
- Realistic chat interface design

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
```bash
npm run dev
```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## How to Use

1. Choose your chat style (WhatsApp or iMessage) from the dropdown
2. Enter the receiver's name
3. Customize bubble colors using the color pickers
4. Type messages and send them as either party using the respective buttons
5. Upload images using the image upload buttons
6. Hover over messages to reveal delete buttons
7. Click the "Download Screenshot" button to save your chat as an image

## Technologies Used

- Next.js 13+ with App Router
- TypeScript
- Tailwind CSS
- html-to-image for screenshot generation
- Heroicons for icons
- date-fns for date formatting

## License

MIT
