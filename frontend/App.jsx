// Traffic Violation Detection System - Frontend React App
// Save as: App.jsx or index.jsx

import React, { useState, useRef, useEffect } from 'react';
import { Upload, BarChart3, AlertCircle, Download, Camera, TrendingUp } from 'lucide-react';

// ==================== STYLES ====================
const styles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #e2e8f0;
  min-height: 100vh;
}

.dashboard {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 2px solid #334155;
}

.header-content h1 {
  font-size: 32px;
  font-weight: 700;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.header-content p {
  color: #94a3b8;
  font-size: 14px;
}

.header-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid #22c55e;
  color: #86efac;
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 12px;
  font-weight: 600;
}

.main-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
}

@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
  }
}

.card {
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.3) 100%);
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: #475569;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.5) 100%);
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #f1f5f9;
}

.upload-zone {
  border: 2px dashed #475569;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(71, 85, 105, 0.05);
}

.upload-zone:hover {
  border-color: #60a5fa;
  background: rgba(96, 165, 250, 0.05);
}

.upload-zone.drag-active {
  border-color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
}

.upload-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  color: #60a5fa;
}

.upload-text {
  color: #cbd5e1;
  margin-bottom: 8px;
}

.upload-subtext {
  color: #64748b;
  font-size: 12px;
}

.hidden-input {
  display: none;
}

.button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
}

.button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
}

.button-secondary {
  background: rgba(71, 85, 105, 0.3);
  color: #cbd5e1;
  border: 1px solid #475569;
}

.button-secondary:hover {
  background: rgba(71, 85, 105, 0.5);
  border-color: #64748b;
}

.button-small {
  padding: 6px 12px;
  font-size: 12px;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px;
  color: #60a5fa;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #334155;
  border-top-color: #60a5fa;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.violations-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 400px;
  overflow-y: auto;
}

.violation-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: rgba(71, 85, 105, 0.1);
  border-left: 4px solid #ef4444;
  border-radius: 6px;
  font-size: 13px;
}

.violation-info {
  flex: 1;
}

.violation-label {
  font-weight: 600;
  color: #f1f5f9;
  margin-bottom: 4px;
}

.violation-details {
  color: #94a3b8;
  font-size: 12px;
}

.violation-confidence {
  background: rgba(239, 68, 68, 0.2);
  color: #fca5a5;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 12px;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
}

.stat-box {
  background: rgba(71, 85, 105, 0.1);
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

.stat-value {
  font-size: 28px;
  font-weight: 700;
  color: #60a5fa;
  margin-bottom: 4px;
}

.stat-label {
  color: #94a3b8;
  font-size: 12px;
}

.violation-type-stats {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.type-stat {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
}

.type-stat-label {
  color: #cbd5e1;
}

.type-stat-count {
  display: flex;
  align-items: center;
  gap: 8px;
}

.type-stat-bar {
  height: 4px;
  background: rgba(71, 85, 105, 0.3);
  border-radius: 2px;
  overflow: hidden;
  width: 100px;
}

.type-stat-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
}

.annotated-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid #334155;
  margin: 16px 0;
  display: block;
}

.image-not-available {
  text-align: center;
  padding: 40px 20px;
  color: #64748b;
  font-size: 14px;
}

.tabs {
  display: flex;
  gap: 0;
  border-bottom: 2px solid #334155;
  margin-bottom: 24px;
}

.tab-button {
  padding: 12px 20px;
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: all 0.3s ease;
}

.tab-button.active {
  color: #60a5fa;
  border-bottom-color: #60a5fa;
}

.tab-content {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.success-message {
  background: rgba(34, 197, 94, 0.1);
  border-left: 4px solid #22c55e;
  color: #86efac;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.error-message {
  background: rgba(239, 68, 68, 0.1);
  border-left: 4px solid #ef4444;
  color: #fca5a5;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: #64748b;
}

.empty-state-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  opacity: 0.5;
}

.empty-state-text {
  font-size: 14px;
  margin-bottom: 8px;
}

.empty-state-subtext {
  font-size: 12px;
  color: #475569;
}

.action-buttons {
  display: flex;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.report-section {
  background: rgba(71, 85, 105, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
}

.report-title {
  font-weight: 600;
  margin-bottom: 12px;
  color: #f1f5f9;
}

.report-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
}

.report-stat {
  background: rgba(71, 85, 105, 0.2);
  padding: 12px;
  border-radius: 6px;
  text-align: center;
}

.report-stat-value {
  font-size: 20px;
  font-weight: 700;
  color: #60a5fa;
}

.report-stat-label {
  font-size: 11px;
  color: #94a3b8;
  margin-top: 4px;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(71, 85, 105, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(71, 85, 105, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(71, 85, 105, 0.5);
}
`;

// ==================== MAIN APP COMPONENT ====================

export default function TrafficViolationDashboard() {
  const [activeTab, setActiveTab] = useState('detection');
  const [selectedImage, setSelectedImage] = useState(null);
  const [violations, setViolations] = useState([]);
  const [annotatedImage, setAnnotatedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [allViolations, setAllViolations] = useState([]);
  const [statistics, setStatistics] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  // Mock API simulation (since we're in artifact, using mock data)
  const mockDetectViolations = (imageName) => {
    const violationTypes = [
      { type: 'HELMET_NON_COMPLIANCE', label: 'Helmet Non-Compliance' },
      { type: 'SEATBELT_NON_COMPLIANCE', label: 'Seatbelt Non-Compliance' },
      { type: 'TRIPLE_RIDING', label: 'Triple Riding' },
      { type: 'WRONG_SIDE_DRIVING', label: 'Wrong Side Driving' },
      { type: 'STOP_LINE_VIOLATION', label: 'Stop Line Violation' },
      { type: 'RED_LIGHT_VIOLATION', label: 'Red Light Violation' },
      { type: 'ILLEGAL_PARKING', label: 'Illegal Parking' }
    ];

    const numViolations = Math.floor(Math.random() * 3) + 1;
    const selected = violationTypes.sort(() => Math.random() - 0.5).slice(0, numViolations);

    return selected.map(v => ({
      type: v.type,
      label: v.label,
      confidence: (Math.random() * 10 + 85).toFixed(1),
      licensePlate: `TN${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}AB${Math.floor(Math.random() * 10000)}`,
      severity: Math.random() > 0.5 ? 'HIGH' : 'MEDIUM',
      timestamp: new Date().toISOString()
    }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleImageSelect(files[0]);
    }
  };

  const handleImageSelect = (file) => {
    if (!file.type.startsWith('image/')) {
      setMessage({ type: 'error', text: 'Please upload an image file' });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
      processImage(file.name, e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const processImage = (fileName, imageData) => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const detectedViolations = mockDetectViolations(fileName);
      
      setViolations(detectedViolations);
      setAllViolations([...allViolations, ...detectedViolations]);
      
      // Generate mock annotated image (add border effect)
      setAnnotatedImage(imageData);

      // Update statistics
      const stats = {
        total: allViolations.length + detectedViolations.length,
        byType: {}
      };

      [...allViolations, ...detectedViolations].forEach(v => {
        stats.byType[v.label] = (stats.byType[v.label] || 0) + 1;
      });

      setStatistics(stats);

      setLoading(false);
      setMessage({ 
        type: 'success', 
        text: `Detected ${detectedViolations.length} violation(s)` 
      });

      setTimeout(() => setMessage({ type: '', text: '' }), 5000);
    }, 2000);
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleImageSelect(e.target.files[0]);
    }
  };

  const downloadReport = () => {
    let csv = 'Violation Type,License Plate,Confidence,Severity,Timestamp\n';
    allViolations.forEach(v => {
      csv += `"${v.label}","${v.licensePlate}","${v.confidence}%","${v.severity}","${new Date(v.timestamp).toLocaleString()}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'violations-report.csv';
    a.click();
  };

  const clearHistory = () => {
    setAllViolations([]);
    setViolations([]);
    setAnnotatedImage(null);
    setSelectedImage(null);
    setStatistics(null);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="dashboard">
        {/* Header */}
        <div className="header">
          <div className="header-content">
            <h1>🚗 Traffic Violation Detection</h1>
            <p>AI-powered automated enforcement system</p>
          </div>
          <div className="header-badge">
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
            System Active
          </div>
        </div>

        {/* Message Display */}
        {message.text && (
          <div className={message.type === 'success' ? 'success-message' : 'error-message'}>
            <AlertCircle size={20} />
            {message.text}
          </div>
        )}

        {/* Tabs */}
        <div className="tabs">
          <button 
            className={`tab-button ${activeTab === 'detection' ? 'active' : ''}`}
            onClick={() => setActiveTab('detection')}
          >
            <Camera size={16} style={{ marginRight: '8px', display: 'inline' }} />
            Detection
          </button>
          <button 
            className={`tab-button ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <BarChart3 size={16} style={{ marginRight: '8px', display: 'inline' }} />
            Analytics
          </button>
          <button 
            className={`tab-button ${activeTab === 'violations' ? 'active' : ''}`}
            onClick={() => setActiveTab('violations')}
          >
            <AlertCircle size={16} style={{ marginRight: '8px', display: 'inline' }} />
            History ({allViolations.length})
          </button>
        </div>

        {/* Detection Tab */}
        {activeTab === 'detection' && (
          <div className="main-content">
            {/* Upload Card */}
            <div className="card">
              <div className="card-title">
                <Upload size={20} />
                Upload Traffic Image
              </div>

              <div 
                className={`upload-zone ${dragActive ? 'drag-active' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <Camera className="upload-icon" />
                <div className="upload-text">Click to upload or drag and drop</div>
                <div className="upload-subtext">JPG, PNG or GIF (Max 50MB)</div>
                <input 
                  ref={fileInputRef}
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileInput}
                  className="hidden-input"
                />
              </div>

              {selectedImage && (
                <div style={{ marginTop: '20px' }}>
                  <img src={selectedImage} alt="Selected" style={{ width: '100%', borderRadius: '8px', maxHeight: '300px', objectFit: 'cover' }} />
                </div>
              )}
            </div>

            {/* Results Card */}
            <div className="card">
              <div className="card-title">
                <AlertCircle size={20} />
                Detection Results
              </div>

              {loading ? (
                <div className="loading">
                  <div className="spinner"></div>
                  <span>Analyzing image...</span>
                </div>
              ) : violations.length > 0 ? (
                <>
                  <div className="violations-list">
                    {violations.map((v, i) => (
                      <div key={i} className="violation-item">
                        <div className="violation-info">
                          <div className="violation-label">{v.label}</div>
                          <div className="violation-details">
                            License: {v.licensePlate} | Severity: {v.severity}
                          </div>
                        </div>
                        <div className="violation-confidence">{v.confidence}%</div>
                      </div>
                    ))}
                  </div>

                  {annotatedImage && (
                    <div>
                      <div style={{ marginTop: '16px', color: '#94a3b8', fontSize: '12px', marginBottom: '8px' }}>
                        Annotated Evidence:
                      </div>
                      <img src={annotatedImage} alt="Annotated" className="annotated-image" />
                    </div>
                  )}

                  <div className="action-buttons">
                    <button className="button button-primary button-small" onClick={downloadReport}>
                      <Download size={16} />
                      Export Report
                    </button>
                    <button className="button button-secondary button-small" onClick={() => fileInputRef.current?.click()}>
                      <Upload size={16} />
                      Upload Another
                    </button>
                  </div>
                </>
              ) : (
                <div className="empty-state">
                  <Camera className="empty-state-icon" />
                  <div className="empty-state-text">No image uploaded yet</div>
                  <div className="empty-state-subtext">Upload an image to detect violations</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="card">
            <div className="card-title">
              <TrendingUp size={20} />
              Violation Statistics
            </div>

            {statistics && statistics.total > 0 ? (
              <>
                <div className="stats-grid">
                  <div className="stat-box">
                    <div className="stat-value">{statistics.total}</div>
                    <div className="stat-label">Total Violations</div>
                  </div>
                  <div className="stat-box" style={{ borderLeftColor: '#ef4444' }}>
                    <div className="stat-value" style={{ color: '#fca5a5' }}>
                      {Object.keys(statistics.byType).length}
                    </div>
                    <div className="stat-label">Violation Types</div>
                  </div>
                </div>

                <div className="report-section">
                  <div className="report-title">Violations by Type</div>
                  <div className="violation-type-stats">
                    {Object.entries(statistics.byType).map(([type, count]) => (
                      <div key={type} className="type-stat">
                        <span className="type-stat-label">{type}</span>
                        <div className="type-stat-count">
                          <div className="type-stat-bar">
                            <div 
                              className="type-stat-fill" 
                              style={{ width: `${(count / statistics.total) * 100}%` }}
                            ></div>
                          </div>
                          <span style={{ minWidth: '30px', textAlign: 'right' }}>{count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="action-buttons">
                  <button className="button button-primary button-small" onClick={downloadReport}>
                    <Download size={16} />
                    Download Full Report
                  </button>
                </div>
              </>
            ) : (
              <div className="empty-state">
                <BarChart3 className="empty-state-icon" />
                <div className="empty-state-text">No data yet</div>
                <div className="empty-state-subtext">Upload images to generate statistics</div>
              </div>
            )}
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'violations' && (
          <div className="card">
            <div className="card-title">
              <AlertCircle size={20} />
              Violation History
            </div>

            {allViolations.length > 0 ? (
              <>
                <div className="violations-list" style={{ maxHeight: 'none' }}>
                  {allViolations.map((v, i) => (
                    <div key={i} className="violation-item">
                      <div className="violation-info">
                        <div className="violation-label">{v.label}</div>
                        <div className="violation-details">
                          License: {v.licensePlate} | {new Date(v.timestamp).toLocaleTimeString()}
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <div className="violation-confidence">{v.confidence}%</div>
                        <span style={{ color: v.severity === 'HIGH' ? '#fca5a5' : '#fbbf24', fontSize: '12px', fontWeight: '600' }}>
                          {v.severity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="action-buttons">
                  <button className="button button-primary button-small" onClick={downloadReport}>
                    <Download size={16} />
                    Export CSV
                  </button>
                  <button className="button button-secondary button-small" onClick={clearHistory}>
                    Clear History
                  </button>
                </div>
              </>
            ) : (
              <div className="empty-state">
                <AlertCircle className="empty-state-icon" />
                <div className="empty-state-text">No violations recorded</div>
                <div className="empty-state-subtext">Uploaded images will appear here</div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default TrafficViolationDashboard;
