#!/usr/bin/env node
import app from '../../index.js'

const port = process.env.PORT || 3000 

app.listen(port, () => {
     console.log(`the server is running on port ${port}`)
});
