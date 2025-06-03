const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from wwwroot directory
app.use(express.static(path.join(__dirname, 'wwwroot')));

// Home routes (equivalent to HomeController)
app.get('/', (req, res) => {
    res.render('home/index', { 
        title: 'Home Page'
    });
});

app.get('/Home/Privacy', (req, res) => {
    res.render('home/privacy', { 
        title: 'Privacy Policy'
    });
});

app.get('/Home/Error', (req, res) => {
    // Generate a request ID similar to .NET's trace identifier
    const requestId = uuidv4();
    res.render('shared/error', { 
        title: 'Error',
        requestId: requestId,
        showRequestId: true
    });
});

// Handle 404 errors
app.use((req, res) => {
    const requestId = uuidv4();
    res.status(404).render('shared/error', { 
        title: 'Error',
        requestId: requestId,
        showRequestId: true
    });
});

// Handle other errors
app.use((err, req, res, next) => {
    const requestId = uuidv4();
    res.status(500).render('shared/error', { 
        title: 'Error',
        requestId: requestId,
        showRequestId: true
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Environment:', process.env.NODE_ENV || 'development');
});