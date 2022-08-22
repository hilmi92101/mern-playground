const app = require('./app');

const dotenv =  require('dotenv');
dotenv.config({ path: 'backend/config/config.env'})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port} in ${process.env.NODE_ENV} mode.`));