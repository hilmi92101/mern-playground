const app = require('./app');
const connectDatabase = require('./config/database');

const dotenv =  require('dotenv');
dotenv.config({ path: 'backend/config/config.env'})

// CONNECTING TO DB
connectDatabase();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port} in ${process.env.NODE_ENV} mode.`));