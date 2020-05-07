const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = express();
const enforce = require('express-sslify');

dotenv.config({ path: './config/config.env' });

connectDB();

const auth = require('./routes/auth');
const user = require('./routes/user');
const staff = require('./routes/staff');
const student = require('./routes/student');
const class_ = require('./routes/class');
const payment = require('./routes/payment');
const report = require('./routes/report');

// Parse Middleware
app.use(express.json());
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// Register Routes
app.use('/api/auth', auth);
app.use('/api/user', user);
app.use('/api/staff', staff);
app.use('/api/student', student);
app.use('/api/class', class_);
app.use('/api/payment', payment);
app.use('/api/report', report);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set Static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

// // Service Worker
app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.solve(__dirname, 'client', 'build', 'service-worker.js'));
});
