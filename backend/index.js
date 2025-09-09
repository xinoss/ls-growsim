const express = require('express');
const server = express();
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const connectDB = require('./config/db');
const equipmentRoutes = require('./routes/equipmentRouter');
const staticRoutes = require('./routes/staticRouter');
const costRoutes = require('./routes/costRouter');     
const cooldownRoutes = require('./routes/cooldownRouter');  
const adminAuthRoutes = require('./routes/adminAuthRouter');
const adminEquipmentRoutes = require('./routes/adminEquipmentsRouter');
const adminViewRoutes = require('./routes/adminViewRouter');

connectDB();
server.use(cors({ origin: process.env.SERVER_URI, credentials: true }));
server.use(express.json());
server.use(cookieParser());

server.use('/static', express.static(path.join(__dirname, 'static')));
server.use('/utils', express.static(path.join(__dirname, 'utils')));
server.use('/data', express.static(path.join(__dirname, 'data')));
server.use('/assets', express.static(path.join(__dirname, 'static', 'dist', 'assets')));
server.use('/login', express.static(path.join(__dirname, 'static', 'dist')));

server.use('/', staticRoutes);
server.use('/api/cost', costRoutes); 
server.use('/api/equipment', equipmentRoutes); 
server.use('/api/cooldown', cooldownRoutes);

server.use('/api/auth', adminAuthRoutes);
server.use('/api/adminequipment', adminEquipmentRoutes);
server.use(adminViewRoutes);

server.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'static', '404.html'));
});


const PORT = process.env.SERVER_PORT || 8080;
server.listen(PORT, () => {
    console.log(`✅ Express Server Started :: http://localhost:${PORT}`);
});
