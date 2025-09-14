import { useState, useEffect } from 'react';

/**
 * 簡化版本的播放清單 Hook，用於調試
 */
export const useSimplePlaylists = (playlistIds, apiUrl) => {
  const [playlistsData, setPlaylistsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!playlistIds || Object.keys(playlistIds).length === 0) {
      setLoading(false);
      return;
    }

    if (!apiUrl) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const requests = Object.entries(playlistIds).map(async ([yearMonth, playlistId]) => {
          const requestUrl = `${apiUrl}/api/v1/spotify/playlists/${playlistId}/separated`;

          const response = await fetch(requestUrl, {
            method: 'GET',
            headers: {
              'Accept': 'application/json'
            },
            mode: 'cors'
          });

          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorText}`);
          }

          const data = await response.json();
          return { yearMonth, data };
        });

        const results = await Promise.all(requests);
        const playlistsMap = {};

        results.forEach(({ yearMonth, data }) => {
          playlistsMap[yearMonth] = data;
        });

        setPlaylistsData(playlistsMap);
      } catch (err) {
        console.error('Error fetching playlists:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [playlistIds, apiUrl]);

  const refetch = () => {
    setPlaylistsData({});
    setError(null);
    setLoading(true);
  };

  return { playlistsData, loading, error, refetch };
};
