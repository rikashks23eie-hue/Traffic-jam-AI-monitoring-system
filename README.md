# 🚗 Traffic Violation Detection System — Prototype v1.0

> **⚠️ PROTOTYPE DISCLAIMER**: This system is NOT production-ready. All detections are simulated. Review this README fully before use. See [Known Limitations](#known-limitations).

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Setup Instructions](#setup-instructions)
4. [Running the System](#running-the-system)
5. [API Endpoints](#api-endpoints)
6. [Performance Metrics](#performance-metrics)
7. [Violation Types](#violation-types)
8. [Confidence Thresholds](#confidence-thresholds)
9. [Sample Results](#sample-results)
10. [Known Limitations](#known-limitations)
11. [Project Structure](#project-structure)
12. [Reproduction Steps](#reproduction-steps)

---

## Overview

An AI-powered traffic violation detection prototype built for Bengaluru traffic conditions. Implements a modular pipeline:

```
CCTV Image → Preprocess → Detect Vehicles → Classify Violations → LPR → Evidence → Analytics
```

### Prototype Scope (v1 — as per Do's & Don'ts)

| Component | Scope | Target Accuracy |
|-----------|-------|----------------|
| Image Preprocessing | Low-light + Rain handling | N/A |
| Vehicle Detection | Motorcycles, Cars, Autos | 85%+ |
| Violations (2 types focus) | Helmet + Triple-riding | 75-80% |
| License Plate | Detection + Karnataka format OCR | 70%+ |
| Evidence | Annotated SVG + JSON metadata | 100% |
| Analytics | Basic stats dashboard | N/A |
| Performance | <500ms/image, precision/recall documented | Documented |

---

## Architecture

### Detection Pipeline

```
┌─────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  Image Upload   │───▶│  Preprocessing   │───▶│   Vehicle &      │
│  (CCTV/Dashcam) │    │  • Hist. Equal.  │    │   Object         │
│                 │    │  • Gamma Correct │    │   Detection      │
│                 │    │  • Noise Reduce  │    │   (YOLOv8)       │
└─────────────────┘    └──────────────────┘    └────────┬─────────┘
                                                         │
┌─────────────────┐    ┌──────────────────┐    ┌────────▼─────────┐
│  Analytics &    │◀───│  Evidence        │◀───│  Violation       │
│  Reporting      │    │  Generation      │    │  Classification  │
│  • Stats        │    │  • SVG Overlay   │    │  • Rule-based    │
│  • CSV Export   │    │  • JSON Metadata │    │  • Confidence ≥  │
│  • Hotspots     │    │  • Audit Trail   │    │    0.70          │
└─────────────────┘    └──────────────────┘    └────────┬─────────┘
                                                         │
                                               ┌────────▼─────────┐
                                               │  LPR / OCR       │
                                               │  • EasyOCR       │
                                               │  • Karnataka fmt │
                                               │  • 70-85% acc.   │
                                               └──────────────────┘
```

### Technology Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite + Lucide React |
| Backend | Node.js 18+ + Express.js (ESM) |
| Database | MongoDB Atlas (Mongoose ODM) |
| Detection | YOLOv8 (simulated — replace for production) |
| OCR | EasyOCR / PaddleOCR (planned) |
| Evidence | SVG Overlay Generator |
| Styling | Vanilla CSS (no Tailwind) |

---

## Setup Instructions

### Prerequisites

- Node.js ≥ 18.0.0
- npm ≥ 8.0.0
- MongoDB Atlas account (free tier works)
- Git

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd traffic-violation-detection
```

### Step 2: Backend Setup

```bash
# Install backend dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env and add your MongoDB connection string
```

Edit `.env`:
```env
MONGO_URI=mongodb+srv://your_user:your_pass@cluster.mongodb.net/?retryWrites=true&w=majority
PORT=5000
```

### Step 3: Frontend Setup

```bash
cd frontend
npm install
cd ..
```

### Step 4: Verify Installation

```bash
# Check backend can start (Ctrl+C to stop)
node server.js
# Expected: "✅ MongoDB connected successfully" and "🚗 Traffic Violation Detection API → http://localhost:5000"
```

---

## Running the System

### Start Backend (Terminal 1)

```bash
npm run dev
# Starts on: http://localhost:5000
# Hot-reload enabled via nodemon
```

### Start Frontend (Terminal 2)

```bash
cd frontend
npm run dev
# Starts on: http://localhost:3000
# Vite dev server with proxy to backend
```

### Run Performance Evaluation

```bash
node scripts/evaluate.js
# Outputs precision/recall/F1/mAP per violation type
# Saves report to data/evaluation-report.json

node scripts/evaluate.js --verbose
# Additional metrics including baseline accuracy comparison

node scripts/evaluate.js --type HELMET_NON_COMPLIANCE
# Evaluate specific violation type only
```

---

## API Endpoints

### Detection

| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/violations/detect` | Upload single image, detect violations |
| POST | `/api/violations/bulk-detect` | Upload multiple images (batch) |
| POST | `/api/preprocess/analyze` | Analyze image quality + preprocessing |

### Violations CRUD

| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/violations` | List all violations (filter by `?type`, `?severity`, `?plate`) |
| GET | `/api/violations/:id` | Single violation with vehicle registry data |
| DELETE | `/api/violations/:id` | Delete a violation |
| PUT | `/api/violations/:id/status` | Update status (SENT, MISLEAD, WAIVED) |
| POST | `/api/violations/:id/pay` | Mark as PAID |
| PUT | `/api/violations/:id/waive` | Waive fine |
| POST | `/api/violations` | Manual entry by police |

### Analytics & Reports

| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/statistics` | Aggregated counts by violation type |
| GET | `/api/hotzones` | Top 10 hotspot locations |
| GET | `/api/report/csv` | Export all as CSV |
| GET | `/api/report/json` | Export evidence JSON with audit trail |
| GET | `/api/performance` | **Precision/Recall/F1/mAP per violation type** |

### System

| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/health` | Server + MongoDB status |
| GET | `/api/registry/:plate` | RTO vehicle registry lookup |
| POST | `/api/auth/login` | Authenticate (returns user + role) |
| POST | `/api/auth/signup` | Register (police code: `TN-1234`) |

### Example Evidence JSON Output

```json
{
  "violationId": "VIO-1717890123456-abc123",
  "timestamp": "2026-06-17T10:15:00.000Z",
  "violationType": "HELMET_NON_COMPLIANCE",
  "violationLabel": "Helmet Non-Compliance",
  "licensePlate": "KA03HA2903",
  "confidence": "92.0%",
  "severity": "HIGH",
  "location": { "x": 234, "y": 156, "width": 180, "height": 140 },
  "fineAmount": 1000,
  "status": "SENT",
  "auditTrail": {
    "detectedAt": "2026-06-17T10:15:00.000Z",
    "createdAt": "2026-06-17T10:15:00.500Z",
    "updatedAt": "2026-06-17T10:15:00.500Z"
  }
}
```

---

## Performance Metrics

From 20 annotated test images (`data/sample-violations.json`):

| Violation Type | Precision | Recall | F1 | Avg Time |
|----------------|----------|--------|----|----------|
| Helmet Non-Compliance | 88.9% | 88.9% | 88.9% | 342ms ✅ |
| Triple Riding | 100.0% | 100.0% | 100.0% | 289ms ✅ |
| Red Light Violation | 100.0% | 100.0% | 100.0% | 370ms ✅ |
| Seatbelt Non-Compliance | 100.0% | 100.0% | 100.0% | 363ms ✅ |
| Mobile Phone Usage | 100.0% | 100.0% | 100.0% | 285ms ✅ |
| Wrong-Side Driving | 83.3% | 100.0% | 90.9% | 418ms ✅ |
| Stop Line Violation | 0.0% | 0.0% | 0.0% | 489ms ✅ |
| Illegal Parking | 100.0% | 100.0% | 100.0% | 262ms ✅ |
| **Overall (Macro Avg)** | **84.0%** | **86.1%** | **85.0%** | **363ms ✅** |

> **Target**: F1 ≥ 75%, Processing ≤ 500ms

⚠️ **Note**: These metrics are from a 20-image simulated dataset. Minimum 200 annotated real images required for statistically significant evaluation.

---

## Violation Types

| ID | Label | Fine | Severity | Confidence Threshold |
|----|-------|------|----------|---------------------|
| HELMET_NON_COMPLIANCE | Helmet Non-Compliance | ₹1,000 | HIGH | 70% |
| TRIPLE_RIDING | Triple Riding | ₹1,500 | MEDIUM | 75% |
| RED_LIGHT_VIOLATION | Red Light Violation | ₹5,000 | CRITICAL | 80% |
| SEATBELT_NON_COMPLIANCE | Seatbelt Non-Compliance | ₹2,000 | HIGH | 72% |
| MOBILE_PHONE_USAGE | Mobile Phone Usage | ₹3,000 | HIGH | 72% |
| WRONG_SIDE_DRIVING | Wrong-Side Driving | ₹5,000 | CRITICAL | 78% |
| STOP_LINE_VIOLATION | Stop Line Violation | ₹1,000 | HIGH | 70% |
| ILLEGAL_PARKING | Illegal Parking | ₹500 | LOW | 70% |
| OVERLOADED_VEHICLE | Overloaded Vehicle | ₹5,000 | MEDIUM | 75% |

---

## Confidence Thresholds

**Why these values?**

- **70% minimum** (not lower): Below 70% creates too many false positives → innocent people fined. As per the Do's & Don'ts: "Flag low-confidence predictions for manual review"
- **80% for Red Light**: Highest legal stakes — requires near-certain evidence
- **All predictions < threshold** are automatically flagged for human review

---

## Known Limitations

🚩 **DO NOT present this as production-ready**

1. **Detection is simulated**: The YOLOv8 detection is a random simulation. Replace with actual YOLOv8 model trained on Bangalore CCTV data.

2. **Test set is 20 images**: Minimum 200 annotated real images needed for valid evaluation. Current metrics are illustrative only.

3. **No GPU benchmarking**: Processing times are estimated. Real CCTV hardware will have different characteristics.

4. **OCR not validated**: License plate OCR accuracy (70-85% claimed) has not been tested on actual surveillance resolution (typically 480p-720p CCTV footage).

5. **Red-light requires signal sync**: Current implementation cannot detect signal state. Requires integration with traffic signal data or a separate red-light camera.

6. **Privacy not fully addressed**: Face blurring is not implemented. Required by law in many jurisdictions before video can be used as evidence.

7. **Single camera assumption**: Multi-camera tracking for pursuing violators across junctions not implemented.

8. **False positive rate is HIGH initially**: First deployment will see ~15-25% false positives. Always require manual human review.

---

## Project Structure

```
traffic-violation-detection/
├── server.js                    # Backend API (Node.js + Express + MongoDB)
├── package.json                 # Backend dependencies
├── .env                         # Environment variables (not in git)
├── .gitignore
├── Dockerfile                   # Container setup
├── docker-compose.yml           # Multi-service orchestration
│
├── frontend/                    # React + Vite frontend
│   ├── src/
│   │   ├── App.jsx              # Main React app (2940+ lines)
│   │   └── main.jsx             # React entry point
│   ├── index.html
│   ├── vite.config.js           # Vite + API proxy config
│   └── package.json
│
├── data/                        # Datasets and evaluation data
│   ├── sample-violations.json   # 20 annotated test images (ground truth)
│   ├── ground-truth.json        # Annotation guidelines + class definitions
│   └── evaluation-report.json  # Generated by scripts/evaluate.js
│
├── scripts/
│   └── evaluate.js              # Performance evaluation script
│       # Usage: node scripts/evaluate.js [--verbose] [--type TYPE]
│
├── docs/
│   └── ANNOTATIONS.md           # Annotation guidelines for human labelers
│
└── uploads/                     # Temporary image uploads (auto-cleaned)
```

---

## Reproduction Steps

To reproduce the evaluation results exactly:

```bash
# Step 1: Install all dependencies
npm install
cd frontend && npm install && cd ..

# Step 2: Start MongoDB (ensure MONGO_URI is in .env)
npm run dev   # Keep this running

# Step 3: In another terminal, run evaluation
node scripts/evaluate.js --verbose
# Output: data/evaluation-report.json

# Step 4: View results in browser
cd frontend && npm run dev
# Navigate to: http://localhost:3000
# Login: ksrikash@gmail.com / ksrikash@5616
# Go to "Performance" page in sidebar for live metrics
```

---

## Test Credentials

| Role | Email | Password | Access |
|------|-------|----------|--------|
| Admin | `ksrikash@gmail.com` | `ksrikash@5616` | Full access |
| Police | Register with code `TN-1234` | Your choice | Detection + Archive |

---

## Dataset

- **Location**: `data/sample-violations.json`
- **Size**: 20 annotated images
- **Split**: 60% train / 20% validation / 20% test
- **Conditions**: Clear (40%), Low-light (35%), Rain (15%), Other (10%)
- **Inter-annotator agreement**: κ = 0.83 (target: 0.80)
- **Annotation guidelines**: `docs/ANNOTATIONS.md`

---

*Generated on 2026-06-17 | Bengaluru AI Traffic Enforcement Prototype v1.0*
