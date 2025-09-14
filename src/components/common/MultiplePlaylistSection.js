import React, { useState } from 'react';
import { Accordion, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = `
@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`;

if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

const MultiplePlaylistSection = ({ playlistsData }) => {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (yearMonth) => {
        setExpandedSections(prev => ({
            ...prev,
            [yearMonth]: !prev[yearMonth]
        }));
    };

    const formatDuration = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    if (!playlistsData || Object.keys(playlistsData).length === 0) {
        return (
            <div className="container mt-4">
                <div className="text-center">
                    <p>No playlist data available</p>
                </div>
            </div>
        );
    }

    const sortedPlaylists = Object.entries(playlistsData).sort(([a], [b]) => b.localeCompare(a));

    return (
        <div className="container mt-4" style={{ maxWidth: '1200px' }}>
            <div className="mb-4">
                <p style={{
                    fontSize: '1.1rem',
                    color: '#666666',
                    marginBottom: '1rem',
                    lineHeight: '1.5',
                    fontStyle: 'italic'
                }}>
                    Built with React, FastAPI, and Spotify Web API - A full-stack music playlist management system to showcase my Spotify playlists in real time
                </p>
                <hr style={{
                    border: 'none',
                    borderTop: '5px solid #424242',
                    margin: '1.5rem 0 2rem 0'
                }} />
                <h2 className="mb-5" style={{ 
                    fontSize: '2.2rem', 
                    fontWeight: '600', 
                    color: '#1A4B7A',
                    textAlign: 'left',
                    marginBottom: '2rem'
                }}>My Spotify Playlist</h2>
            </div>
            
            {sortedPlaylists.map(([yearMonth, playlistData]) => {
                const tracks = playlistData?.data?.tracks || 
                              playlistData?.tracks || 
                              playlistData?.items || 
                              playlistData || [];
                const isExpanded = expandedSections[yearMonth] !== false;
                
                return (
                    <div key={yearMonth} className="mb-4">
                        {/* 月份標題區塊 */}
                        <div 
                            className="month-header"
                            style={{
                                background: 'linear-gradient(to right, #9BC4E8 0%, #E8F4FD 100%)',
                                padding: '20px 24px',
                                borderRadius: '8px 8px 0 0',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                border: '1px solid #E0E0E0',
                                borderBottom: '1px solid #E0E0E0',
                                transition: 'all 0.3s ease'
                            }}
                            onClick={() => toggleSection(yearMonth)}
                        >
                            <div>
                                <h3 className="mb-1" style={{ 
                                    fontSize: '1.4rem', 
                                    fontWeight: '500', 
                                    color: '#1A4B7A',
                                    margin: 0,
                                    fontFamily: 'sans-serif',
                                    lineHeight: '1.2'
                                }}>
                                    {yearMonth}
                                </h3>
                                <p className="mb-0" style={{ 
                                    color: '#666666', 
                                    fontSize: '0.9rem',
                                    fontWeight: '400',
                                    margin: '4px 0 0 0',
                                    fontFamily: 'sans-serif',
                                    lineHeight: '1.2'
                                }}>
                                    {tracks.length} songs
                                </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <span style={{ 
                                    fontSize: '1.2rem',
                                    color: '#666666',
                                    fontFamily: 'sans-serif'
                                }}>♪</span>
                                <span style={{ 
                                    fontSize: '1rem', 
                                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', 
                                    transition: 'transform 0.3s ease',
                                    color: '#1A4B7A',
                                    fontWeight: '400',
                                    fontFamily: 'sans-serif'
                                }}>
                                    ∧
                                </span>
                            </div>
                        </div>

                        {/* 播放清單內容 */}
                        <div 
                            className="playlist-content"
                            style={{
                                backgroundColor: 'white',
                                border: '1px solid #E0E0E0',
                                borderTop: 'none',
                                borderRadius: '0 0 8px 8px',
                                padding: isExpanded ? '24px' : '0',
                                maxHeight: isExpanded ? '1000px' : '0',
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                opacity: isExpanded ? 1 : 0
                            }}
                        >
                            {isExpanded && (
                                <>
                                    <div 
                                        className="mb-4"
                                        style={{
                                            animation: 'fadeIn 0.6s ease-out 0.2s both'
                                        }}
                                    >
                                        <h4 style={{ 
                                            margin: 0, 
                                            color: '#212121',
                                            fontSize: '1.3rem',
                                            fontWeight: '600'
                                        }}>Playlist</h4>
                                        <p style={{ 
                                            margin: '6px 0 0 0', 
                                            color: '#757575', 
                                            fontSize: '0.95rem',
                                            fontWeight: '400'
                                        }}>
                                            Total {tracks.length} songs
                                        </p>
                                    </div>

                                    {tracks.length > 0 ? (
                                        <div className="tracks-list">
                                            {tracks.map((track, index) => (
                                                <div 
                                                    key={track.id || index}
                                                    className="track-item"
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        padding: '16px 20px',
                                                        marginBottom: '12px',
                                                        backgroundColor: '#f5f5f5',
                                                        border: '1px solid #e0e0e0',
                                                        borderRadius: '8px',
                                                        transition: 'all 0.3s ease',
                                                        animation: `slideInUp 0.5s ease-out ${index * 0.1}s both`
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
                                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                    }}
                                                >
                                                    {/* 序號 */}
                                                    <div style={{ 
                                                        width: '40px', 
                                                        textAlign: 'center', 
                                                        color: '#64b5f6', 
                                                        fontSize: '1.1rem',
                                                        fontWeight: '600',
                                                        marginRight: '16px'
                                                    }}>
                                                        {index + 1}
                                                    </div>

                                                    {/* 專輯封面 */}
                                                    <div style={{ marginRight: '20px' }}>
                                                        <img 
                                                            src={track.album?.images?.[0]?.url || '/placeholder-album.png'} 
                                                            alt={track.album?.name || '專輯封面'}
                                                            style={{
                                                                width: '60px',
                                                                height: '60px',
                                                                borderRadius: '4px',
                                                                objectFit: 'cover'
                                                            }}
                                                        />
                                                    </div>

                                                    {/* 歌曲信息 */}
                                                    <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center' }}>
                                                        <div style={{ flex: 1 }}>
                                                            <div style={{ 
                                                                fontWeight: '700', 
                                                                color: '#424242', 
                                                                marginBottom: '6px',
                                                                fontSize: '1.1rem',
                                                                lineHeight: '1.3'
                                                            }}>
                                                                {track.name}
                                                            </div>
                                                            <div style={{ 
                                                                color: '#888888', 
                                                                fontSize: '0.9rem', 
                                                                marginBottom: '4px',
                                                                fontWeight: '400'
                                                            }}>
                                                                {track.artists?.map(artist => artist.name).join(', ')}
                                                            </div>
                                                            <div style={{ 
                                                                color: '#888888', 
                                                                fontSize: '0.9rem',
                                                                fontWeight: '400'
                                                            }}>
                                                                {track.album?.name} • {formatDate(track.album?.release_date)}
                                                            </div>
                                                        </div>

                                                        {/* 時長 */}
                                                        <div style={{ 
                                                            marginLeft: '5px',
                                                            marginRight: '100px', 
                                                            color: '#888888', 
                                                            fontSize: '0.9rem',
                                                            fontWeight: '400',
                                                            minWidth: '40px',
                                                            textAlign: 'right'
                                                        }}>
                                                            {formatDuration(track.duration_ms)}
                                                        </div>
                                                    </div>

                                                    {/* Spotify 圖標 */}
                                                    <div>
                                                        <a 
                                                            href={track.external_urls?.spotify} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            style={{ textDecoration: 'none' }}
                                                        >
                                                            <div 
                                                                style={{
                                                                    width: '24px',
                                                                    height: '24px',
                                                                    backgroundColor: '#1db954',
                                                                    borderRadius: '50%',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    transition: 'all 0.2s ease'
                                                                }}
                                                                onMouseEnter={(e) => {
                                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                                }}
                                                                onMouseLeave={(e) => {
                                                                    e.currentTarget.style.transform = 'scale(1)';
                                                                }}
                                                            >
                                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                                                                </svg>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-4" style={{ color: '#666' }}>
                                            <p>No songs this month</p>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MultiplePlaylistSection;
