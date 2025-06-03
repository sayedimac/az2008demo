# az2008demo

This repository contains both the original .NET 8 ASP.NET Core MVC application and a new Node.js Express equivalent.

## Node.js Express Application

The application has been converted to Node.js Express while maintaining identical functionality to the original .NET application.

### Features
- **Home Page**: Welcome page with introduction
- **Privacy Page**: Privacy policy information
- **Error Handling**: Error pages with request ID tracking
- **Static Assets**: Full Bootstrap styling and jQuery support
- **Responsive Design**: Same layout and navigation as original

### Prerequisites
- Node.js 20.0.0 or higher
- npm (comes with Node.js)

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the application:
```bash
npm start
```

3. For development with auto-restart:
```bash
npm run dev
```

The application will run on http://localhost:3000

### Available Routes
- `GET /` - Home page
- `GET /Home/Privacy` - Privacy policy page  
- `GET /Home/Error` - Error page (with request ID)

### Project Structure
```
├── server.js              # Express server configuration
├── package.json           # Node.js dependencies and scripts
├── views/                 # EJS templates
│   ├── home/
│   │   ├── index.ejs     # Home page template
│   │   └── privacy.ejs   # Privacy page template
│   └── shared/
│       └── error.ejs     # Error page template
├── wwwroot/               # Static assets (CSS, JS, Bootstrap, jQuery)
└── node_modules/          # Dependencies (created after npm install)
```

### Technologies Used
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **EJS**: Templating engine
- **Bootstrap**: CSS framework (served as static files)
- **jQuery**: JavaScript library (served as static files)

## Original .NET 8 Application

The original .NET 8 application is still available and can be run with:

```bash
dotnet build
dotnet run
```

The .NET application runs on http://localhost:5145

Both applications provide identical functionality and user experience.
