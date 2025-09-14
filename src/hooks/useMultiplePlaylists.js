import { useState, useEffect, useCallback } from 'react';

/**
 * Custom Hook for handling multiple playlist data
 * @param {object} playlistIds - Playlist ID object {year-month: ID}
 * @param {string} apiUrl - API base URL
 * @returns {object} { playlistsData, loading, error, refetch }
 */
export const useMultiplePlaylists = (playlistIds, apiUrl) => {
  const [playlistsData, setPlaylistsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasFetched, setHasFetched] = useState(false);

  const fetchPlaylists = useCallback(async () => {
    console.log("useMultiplePlaylists Hook executed");
    console.log("playlistIds:", playlistIds);
    console.log("apiUrl:", apiUrl);
    console.log("hasFetched:", hasFetched);
    
    if (!playlistIds || Object.keys(playlistIds).length === 0) {
      console.log("No playlist IDs, skipping API call");
      setLoading(false);
      return;
    }

    if (!apiUrl) {
      console.log("No API URL, skipping API call");
      setLoading(false);
      return;
    }

    if (hasFetched && Object.keys(playlistsData).length > 0) {
      console.log("Already fetched and have data, skipping API call");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const requests = Object.entries(playlistIds).map(async ([yearMonth, playlistId]) => {
        const requestUrl = `${apiUrl}/api/v1/spotify/playlists/${playlistId}/separated`;
        
        console.log(`Fetching playlist for ${yearMonth}:`, requestUrl);
        
        const response = await fetch(requestUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          },
          mode: 'cors'
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`HTTP error for ${yearMonth}:`, response.status, errorText);
          throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }
        
        const data = await response.json();
        console.log(`Successfully fetched data for ${yearMonth}:`, data);
        
        return { yearMonth, data: data };
      });

      const results = await Promise.all(requests);
      const playlistsMap = {};
      
      results.forEach(({ yearMonth, data }) => {
        playlistsMap[yearMonth] = data;
      });
      
      console.log("Final playlistsMap:", playlistsMap);
      setPlaylistsData(playlistsMap);
      setHasFetched(true);
    } catch (err) {
      setError(err);
      console.error('Error fetching playlists:', err);
    } finally {
      setLoading(false);
    }
  }, [playlistIds, apiUrl]);

  useEffect(() => {
    console.log("useEffect triggered, playlistIds:", playlistIds, "apiUrl:", apiUrl);
    if (playlistIds && Object.keys(playlistIds).length > 0 && apiUrl) {
      console.log("Calling fetchPlaylists from useEffect");
      fetchPlaylists();
    }
  }, [fetchPlaylists]);

  const refetch = () => {
    setHasFetched(false);
    fetchPlaylists();
  };

  return { playlistsData, loading, error, refetch };
}