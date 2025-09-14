# 播放清單功能設置指南

## 概述
這個功能允許你從 Spotify API 獲取播放清單數據並在網頁上展示，按照你提供的設計圖實現。

## 已實現的功能

### 1. MultiplePlaylistSection 組件
- 位置：`src/components/common/MultiplePlaylistSection.js`
- 功能：
  - 按月分組顯示播放清單
  - 可折疊的月份區塊
  - 顯示歌曲信息（專輯封面、歌名、藝術家、專輯、發行日期、時長）
  - Spotify 鏈接集成

### 2. useMultiplePlaylists Hook
- 位置：`src/hooks/useMultiplePlaylists.js`
- 功能：
  - 並行獲取多個播放清單數據
  - 錯誤處理和加載狀態管理
  - 支持重新獲取數據

### 3. 播放清單頁面
- 位置：`src/pages/Playlist/index.js`
- 路由：`/playlist`
- 功能：
  - 使用 useMultiplePlaylists hook 獲取數據
  - 顯示加載狀態和錯誤處理
  - 包含調試功能

## 配置

### 1. 環境變量
確保你的 `.env` 文件包含：
```
REACT_APP_WEBSERVER_API_ROOT=你的API服務器地址
```

### 2. 播放清單 ID 配置
在 `src/pages/Playlist/index.js` 中修改 `playlistIds` 對象：
```javascript
const playlistIds = {
    "2025-08": "你的播放清單ID1",
    "2025-09": "你的播放清單ID2"
};
```

### 3. API 端點
確保你的 API 服務器有以下端點：
```
GET /api/v1/spotify/playlists/{playlistId}/separated
```

## API 響應格式
組件支持多種 API 響應格式：
- `{ tracks: [...] }`
- `{ items: [...] }`
- `[...]` (直接數組)

## 使用方法

1. 啟動開發服務器：
```bash
npm start
```

2. 訪問播放清單頁面：
```
http://localhost:3000/playlist
```

3. 檢查瀏覽器控制台的調試信息以查看 API 響應格式

## 調試
- 組件包含詳細的控制台日誌
- 播放清單頁面包含 "Test API" 按鈕用於測試 API 連接
- 錯誤信息會顯示在頁面上

## 樣式
- 使用 Bootstrap 進行響應式設計
- 自定義樣式匹配你的設計圖
- 支持深色/淺色主題

## 下一步
1. 根據你的實際 API 響應格式調整數據處理邏輯
2. 添加更多播放清單
3. 實現播放功能（如果需要）
4. 添加搜索和過濾功能
