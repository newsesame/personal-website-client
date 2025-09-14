import React, { useMemo } from 'react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useSimplePlaylists } from '../../hooks/useSimplePlaylists';
import MultiplePlaylistSection from '../../components/common/MultiplePlaylistSection';
import 'bootstrap/dist/css/bootstrap.min.css';

const Playlist = () => {
    useDocumentTitle("Playlist — Josh Chau");
    
    const apiUrl = process.env.REACT_APP_WEBSERVER_API_ROOT || '';
    
    const playlistIds = useMemo(() => ({
        "2025-08": "047wk2XFLEh67mxqraEBPI",
        "2025-09": "4EZjmY2sYolhizgGEedVZS"
    }), []);
    
    
    const { playlistsData, loading, error, refetch } = useSimplePlaylists(playlistIds, apiUrl);

    if (loading) {
        return (
            <div className='Container-h text-center'>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading playlists...</p>
            </div>
        );
    }

    if (error) {
        console.error("Playlist loading error:", error);
        return (
            <div className='Container-h text-center'>
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Loading Failed</h4>
                    <p>Unable to load playlists, please try again later.</p>
                    <details className="mt-3">
                        <summary>Error Details</summary>
                        <pre className="text-start mt-2">
                            {error.message || JSON.stringify(error, null, 2)}
                        </pre>
                    </details>
                    <button 
                        className="btn btn-outline-danger mt-3" 
                        onClick={refetch}
                    >
                        Reload
                    </button>
                </div>
            </div>
        );
    }

    return (
        <MultiplePlaylistSection playlistsData={playlistsData} />
    );
};

export default Playlist;
