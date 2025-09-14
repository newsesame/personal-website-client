# CORS 修復指南

## 問題
前端無法從部署的後端獲取數據，儘管後端返回 200 狀態碼。

## 解決方案

### 1. 後端 CORS 配置 (FastAPI)

在你的 FastAPI 後端中，確保有以下 CORS 配置：

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS 配置
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",           # 本地開發
        "http://localhost:3001",           # 本地開發 (如果使用不同端口)
        "https://your-frontend-domain.com", # 你的前端部署 URL
        "https://your-username.github.io",  # 如果使用 GitHub Pages
        "https://your-app.netlify.app",     # 如果使用 Netlify
        "https://your-app.vercel.app",      # 如果使用 Vercel
        # 注意：生產環境不建議使用 "*"，應該指定具體的域名
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)
```

### 2. 部署前端後的 CORS 配置

當你部署前端後，需要更新後端的 CORS 配置：

#### 常見的前端部署平台：

1. **GitHub Pages**:
   ```
   "https://your-username.github.io"
   ```

2. **Netlify**:
   ```
   "https://your-app-name.netlify.app"
   ```

3. **Vercel**:
   ```
   "https://your-app-name.vercel.app"
   ```

4. **Render** (前端):
   ```
   "https://your-frontend-app.onrender.com"
   ```

#### 更新後端 CORS 配置：

```python
# 在你的 FastAPI 後端中更新 allow_origins
allow_origins=[
    "http://localhost:3000",                    # 本地開發
    "http://localhost:3001",                    # 本地開發
    "https://your-actual-frontend-url.com",     # 你的實際前端 URL
]
```

### 3. 檢查部署的後端

確保你的 Render 後端部署包含正確的 CORS 配置。

### 3. 前端調試

現在前端會輸出詳細的日誌到瀏覽器控制台，請檢查：
1. 打開瀏覽器開發者工具 (F12)
2. 查看 Console 標籤
3. 查看 Network 標籤
4. 重新載入頁面

### 4. 常見 CORS 錯誤

- `Access to fetch at '...' from origin '...' has been blocked by CORS policy`
- `Response to preflight request doesn't pass access control check`

如果看到這些錯誤，說明是 CORS 配置問題。
