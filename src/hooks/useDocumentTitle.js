import { useEffect } from 'react';

/**
 * 自定義 Hook 用於設定頁面標題
 * @param {string} title - 頁面標題
 */
export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
