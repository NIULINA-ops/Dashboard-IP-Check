const express = require('express');
const app = express();
const port = 8888; // 你可以根据需要更改端口号

// 启动服务
app.listen(port, () => {
    console.log(`服务已启动，监听端口 ${port}`);
});