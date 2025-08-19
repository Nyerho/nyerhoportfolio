# Nyerho Portfolio - Data Analyst & Developer

A modern, responsive portfolio website showcasing my work as a Junior Data Analyst with a special focus on my GitHub contributions and projects.

## 🌟 Features

### ✨ **GitHub Integration**
- **Live GitHub Profile Showcase**: Displays your GitHub profile with real-time data
- **Repository Gallery**: Showcases your repositories with filtering options (All, Original, Forks, Archived)
- **GitHub Stats**: Shows followers, following, and repository count
- **Repository Details**: Language, stars, forks, topics, and last updated information
- **Direct GitHub Links**: Easy navigation to your GitHub profile and repositories

### 🎨 **Modern Design**
- **Dynamic Background Slideshow**: Beautiful zoom-in transitions between background images
- **Glassmorphism UI**: Modern backdrop blur effects and transparent cards
- **Smooth Animations**: Framer Motion powered animations throughout
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark Theme**: Professional dark color scheme with blue/purple accents

### 📊 **Portfolio Sections**
- **Hero Section**: Introduction with social links and call-to-action buttons
- **About**: Professional background and skills
- **Projects**: Featured projects with filtering and GitHub integration
- **GitHub Showcase**: Dedicated section highlighting your GitHub presence
- **Contact**: Contact form and information

### 🛠 **Technical Features**
- **TypeScript**: Full type safety and better development experience
- **React 18**: Latest React features and performance optimizations
- **Vite**: Fast development and build tooling
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Lucide Icons**: Beautiful, consistent iconography

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nyerho/nyerhoportfolio.git
   cd nyerhoportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
nyerhoportfolio/
├── public/                          # Static assets
│   ├── campaign-creators-pypeCEaJeZY-unsplash.jpg
│   ├── carlos-muza-hpjSkU2UYSU-unsplash.jpg
│   ├── luke-chesser-JKUTrJ4vK00-unsplash.jpg
│   └── deng-xiang--WXQm_NTK0U-unsplash (1).jpg
├── src/
│   ├── components/                  # React components
│   │   ├── ui/                     # Reusable UI components
│   │   ├── About.tsx
│   │   ├── BackgroundSlideshow.tsx # Dynamic background
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── GitHubShowcase.tsx      # GitHub integration
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── ScrollToTop.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx                     # Main app component
│   ├── index.css                   # Global styles
│   └── main.tsx                    # App entry point
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Key Components

### GitHubShowcase.tsx
The star component that fetches and displays your GitHub profile and repositories:

- **Profile Card**: Shows avatar, bio, stats, and location
- **Repository Grid**: Displays repositories with filtering
- **Real-time Data**: Fetches live data from GitHub API
- **Interactive Filters**: Filter by repository type
- **Responsive Design**: Adapts to all screen sizes

### BackgroundSlideshow.tsx
Creates the dynamic background experience:

- **Automatic Transitions**: Changes images every 5 seconds
- **Zoom Animation**: Smooth zoom-in/out effects
- **Manual Controls**: Click indicators to change images
- **Performance Optimized**: Efficient image loading

## 🎨 Customization

### Updating GitHub Username
In `src/components/GitHubShowcase.tsx` and `src/components/Projects.tsx`, replace `'Nyerho'` with your GitHub username:

```typescript
const profileResponse = await fetch('https://api.github.com/users/YOUR_USERNAME');
const reposResponse = await fetch('https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=12');
```

### Changing Background Images
Replace the images in the `public/` folder or update the image paths in `src/components/BackgroundSlideshow.tsx`:

```typescript
const images = [
  '/your-image-1.jpg',
  '/your-image-2.jpg',
  '/your-image-3.jpg',
  '/your-image-4.jpg'
];
```

### Styling
The project uses Tailwind CSS. You can customize colors, spacing, and other styles in `tailwind.config.js` and `src/index.css`.

## 🔧 Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/nyerhoportfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 About Me

**Esiso Oghenenyerhovwo** - Junior Data Analyst

- **GitHub**: [@Nyerho](https://github.com/Nyerho)
- **Skills**: Power BI, Python, Excel, Google Analytics, SQL, Data Visualization
- **Experience**: 2+ years in data analysis and business intelligence

## 🔗 Links

- **Live Portfolio**: [Your deployed URL]
- **GitHub Profile**: https://github.com/Nyerho
- **LinkedIn**: [Your LinkedIn URL]

---

⭐ **Star this repository if you found it helpful!**
