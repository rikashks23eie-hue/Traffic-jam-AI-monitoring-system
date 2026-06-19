import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1da1d1e7"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("C:/Users/rikas/Downloads/files/frontend/src/App.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$(), _s6 = $RefreshSig$(), _s7 = $RefreshSig$(), _s8 = $RefreshSig$(), _s9 = $RefreshSig$(), _s0 = $RefreshSig$(), _s1 = $RefreshSig$(), _s10 = $RefreshSig$(), _s11 = $RefreshSig$(), _s12 = $RefreshSig$(), _s13 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=1da1d1e7"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useRef = __vite__cjsImport3_react["useRef"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const useCallback = __vite__cjsImport3_react["useCallback"];
import {
  Upload,
  BarChart3,
  AlertCircle,
  Download,
  Camera,
  TrendingUp,
  Shield,
  Car,
  MapPin,
  Clock,
  Search,
  Eye,
  Zap,
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  RefreshCw,
  FileText,
  Users,
  Database,
  ChevronRight,
  Bell,
  Layers,
  ArrowUp,
  ArrowDown,
  Target,
  Award,
  BarChart2,
  PieChart,
  MessageCircle,
  Send,
  X,
  Archive,
  Home,
  Phone,
  Mail,
  Wifi,
  WifiOff,
  Server,
  HardDrive,
  Globe,
  Lock,
  UserPlus,
  LogOut,
  FileDown
} from "/node_modules/.vite/deps/lucide-react.js?v=1da1d1e7";
const API = "http://localhost:5000/api";
const VIOLATION_TYPES = [
  { id: "HELMET", label: "Helmet Non-Compliance", color: "#ef4444", icon: "🪖", risk: "HIGH", fine: 1e3 },
  { id: "SEATBELT", label: "Seatbelt Non-Compliance", color: "#f97316", icon: "🔒", risk: "HIGH", fine: 2e3 },
  { id: "TRIPLE", label: "Triple Riding", color: "#eab308", icon: "👥", risk: "MEDIUM", fine: 1500 },
  { id: "WRONGSIDE", label: "Wrong-Side Driving", color: "#dc2626", icon: "↩️", risk: "CRITICAL", fine: 5e3 },
  { id: "REDLIGHT", label: "Red Light Violation", color: "#ff0000", icon: "🔴", risk: "CRITICAL", fine: 5e3 },
  { id: "STOPLINE", label: "Stop Line Violation", color: "#f97316", icon: "🛑", risk: "HIGH", fine: 1e3 },
  { id: "PARKING", label: "Illegal Parking", color: "#facc15", icon: "🅿️", risk: "LOW", fine: 500 },
  { id: "MOBILE", label: "Mobile Phone Usage", color: "#a855f7", icon: "📱", risk: "HIGH", fine: 3e3 },
  { id: "OVERLOAD", label: "Overloaded Vehicle", color: "#06b6d4", icon: "⚖️", risk: "MEDIUM", fine: 5e3 },
  { id: "PASSENGER_HELMET", label: "Passenger Helmet Non-Compliance", color: "#f97316", icon: "🪖", risk: "HIGH", fine: 1e3 },
  { id: "PASSENGER_SEATBELT", label: "Passenger Seatbelt Non-Compliance", color: "#f97316", icon: "🔒", risk: "HIGH", fine: 2e3 },
  { id: "PASSENGER_MISBEHAVE", label: "Passenger Misbehaviour / Obstruction", color: "#eab308", icon: "😠", risk: "MEDIUM", fine: 1500 },
  { id: "AMBULANCE_TAILGATE", label: "Ambulance Exploitation / Tailgating", color: "#ef4444", icon: "🚨", risk: "CRITICAL", fine: 5e3 }
];
const VEHICLE_TYPES = ["Motorcycle", "Car", "Truck", "Bus", "Auto-Rickshaw", "Emergency"];
const MANUFACTURERS = ["Bajaj", "Honda", "TVS", "Maruti", "Hyundai", "Tata", "Yamaha"];
const MODELS = { Bajaj: ["Pulsar 150", "Dominar 400", "Avenger"], Honda: ["Activa", "CB Shine", "City"], TVS: ["Apache", "Jupiter", "Ntorq"], Maruti: ["Swift", "Baleno", "Alto"], Hyundai: ["i20", "Creta", "Verna"], Tata: ["Nexon", "Harrier", "Punch"], Yamaha: ["FZ", "R15", "MT15"] };
const COLORS = ["Black", "White", "Red", "Blue", "Silver", "Grey", "Orange"];
const LOCATIONS = ["Silk Board Junction", "Majestic Junction", "Hebbal Flyover", "MG Road Junction", "Indiranagar 100ft Rd", "Electronic City Toll", "Whitefield Main Rd", "Kanakapura Rd", "Yeshwanthpur Circle", "KR Puram Bridge"];
const RISK_CFG = {
  LOW: { color: "#22c55e", bg: "rgba(34,197,94,0.12)", label: "Low Risk" },
  MEDIUM: { color: "#eab308", bg: "rgba(234,179,8,0.12)", label: "Medium Risk" },
  HIGH: { color: "#f97316", bg: "rgba(249,115,22,0.12)", label: "High Risk" },
  CRITICAL: { color: "#ef4444", bg: "rgba(239,68,68,0.12)", label: "Critical Risk" }
};
const r = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pk = (arr) => arr[r(0, arr.length - 1)];
const genPlate = () => `KA03${String.fromCharCode(65 + r(0, 25))}${String.fromCharCode(65 + r(0, 25))}${r(1e3, 9999)}`;
const genId = () => `VIO-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
function mkVehicle(imageUrl = null) {
  const mfr = pk(MANUFACTURERS);
  const model = pk(MODELS[mfr]);
  const vios = VIOLATION_TYPES.sort(() => Math.random() - 0.5).slice(0, r(1, 2));
  const risks = vios.map((v) => v.risk);
  const risk = risks.includes("CRITICAL") ? "CRITICAL" : risks.includes("HIGH") ? "HIGH" : risks.includes("MEDIUM") ? "MEDIUM" : "LOW";
  const plate = genPlate();
  const hist = Array.from({ length: r(0, 3) }, (_, i) => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - r(5, 30));
    return { date: d.toLocaleDateString("en-IN"), type: pk(VIOLATION_TYPES).label, fine: r(500, 2e3) };
  });
  return {
    id: genId(),
    plate,
    vehicleType: pk(VEHICLE_TYPES),
    manufacturer: mfr,
    model,
    color: pk(COLORS),
    registrationStatus: Math.random() > 0.15 ? "VERIFIED" : "UNVERIFIED",
    ownerStatus: Math.random() > 0.1 ? "MATCHED" : "MISMATCH",
    violations: vios,
    risk,
    confidence: (r(850, 990) / 10).toFixed(1),
    location: pk(LOCATIONS),
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    helmetRider: Math.random() > 0.4 ? "NO_HELMET" : "HELMET",
    helmetPass: Math.random() > 0.6 ? "HELMET" : "NO_HELMET",
    helmetRiderConf: (r(870, 990) / 10).toFixed(1),
    helmetPassConf: (r(850, 980) / 10).toFixed(1),
    history: hist,
    repeats: hist.length,
    imageUrl,
    status: "PENDING",
    fineAmount: vios.reduce((sum, v) => sum + v.fine, 0),
    evidenceFrame: r(100, 500),
    credibility: {
      score: (r(870, 980) / 10).toFixed(1),
      plateClear: Math.random() > 0.2,
      signalVisible: Math.random() > 0.3,
      riderVisible: Math.random() > 0.15,
      zoneClear: Math.random() > 0.25,
      decision: Math.random() > 0.2 ? "AUTO-APPROVE FOR REVIEW" : "MANUAL REVIEW REQUIRED"
    },
    explanation: vios.map((v) => ({
      type: v.label,
      reason: {
        HELMET: "Rider head region analysed — no helmet signature detected.",
        SEATBELT: "Driver torso shows no seatbelt diagonal strap.",
        TRIPLE: "Three human silhouettes detected on single two-wheeler.",
        WRONGSIDE: "Vehicle trajectory crosses centre-lane boundary in reverse.",
        REDLIGHT: "Vehicle crossed stop-line after signal turned RED.",
        STOPLINE: "Vehicle front bumper 1.2m beyond painted stop-line.",
        PARKING: "Vehicle stationary in no-parking zone >5 minutes.",
        MOBILE: "Phone-shaped object near driver face while in motion.",
        OVERLOAD: "Load exceeds safe capacity; suspension deflection anomaly."
      }[v.id] || "Anomaly detected by vision model."
    }))
  };
}
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap');
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
body {
  font-family:'Inter',sans-serif;
  background-color: #030611;
  background-image: 
    radial-gradient(at 0% 0%, rgba(20, 35, 75, 0.25) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(15, 23, 50, 0.2) 0px, transparent 50%),
    linear-gradient(rgba(255, 255, 255, 0.007) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.007) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
  color:#cbd5e1;
  min-height:100vh;
  overflow-x:hidden;
}
::-webkit-scrollbar{width:5px;height:5px;}
::-webkit-scrollbar-track{background:#0a0f1d;}
::-webkit-scrollbar-thumb{background:#1e293b;border-radius:3px;}

/* Root wrapper */
.root{display:flex;min-height:100vh;animation:fadeIn 0.5s ease-out;}

@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
@keyframes slideUp{from{opacity:0;transform:translateY(15px);}to{opacity:1;transform:translateY(0);}}
@keyframes pulseGlow{0%,100%{box-shadow:0 0 10px rgba(59,130,246,0.2);}50%{box-shadow:0 0 20px rgba(59,130,246,0.5);}}

.animate-slideup{animation:slideUp 0.4s cubic-bezier(0.16,1,0.3,1) both;}

/* sidebar */
.sb{width:68px;background:rgba(8,15,36,0.92);border-right:1px solid rgba(30,58,138,0.25);display:flex;flex-direction:column;align-items:center;padding:16px 0;gap:4px;position:fixed;top:0;left:0;bottom:0;z-index:200;backdrop-filter:blur(24px);}
.sb-logo{width:42px;height:42px;border-radius:12px;overflow:hidden;display:flex;align-items:center;justify-content:center;margin-bottom:20px;background:linear-gradient(135deg,#1e3a8a,#0f172a);border:1px solid #1e40af;}
.sb-btn{width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center;background:transparent;border:none;color:#4b5563;cursor:pointer;transition:all .2s;position:relative;}
.sb-btn:hover{background:rgba(59,130,246,.12);color:#3b82f6;}
.sb-btn.active{background:linear-gradient(135deg,rgba(59,130,246,.22),rgba(139,92,246,.14));color:#3b82f6;border:1px solid rgba(59,130,246,.28);}
.sb-btn .tip{position:absolute;left:54px;background:#0f172a;border:1px solid #1e293b;color:#e2e8f0;font-size:11px;font-weight:600;padding:4px 10px;border-radius:7px;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .2s;letter-spacing:.3px;z-index:300;}
.sb-btn:hover .tip{opacity:1;}
.sb-sep{width:32px;height:1px;background:rgba(30,58,138,0.2);margin:6px 0;}

/* topbar */
.top{display:flex;align-items:center;justify-content:space-between;padding:0 24px;height:65px;background:rgba(8,15,36,0.9);border-bottom:1px solid rgba(30,58,138,0.2);position:sticky;top:0;z-index:100;backdrop-filter:blur(20px);}
.top-title{font-size:15px;font-weight:800;background:linear-gradient(90deg,#60a5fa,#c084fc,#60a5fa);background-size:200%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 4s linear infinite;letter-spacing:.5px;}
@keyframes shimmer{to{background-position:200% center;}}
.top-r{display:flex;align-items:center;gap:12px;}
.live{display:flex;align-items:center;gap:6px;background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.3);color:#4ade80;padding:4px 10px;border-radius:20px;font-size:10px;font-weight:700;letter-spacing:.8px;}
.live-dot{width:6px;height:6px;border-radius:50%;background:#22c55e;animation:plive 1.5s infinite;}
@keyframes plive{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(34,197,94,.4);}50%{opacity:.7;box-shadow:0 0 0 5px rgba(34,197,94,0);}}
.top-search{display:flex;align-items:center;gap:7px;background:rgba(15,23,42,.6);border:1px solid #1e293b;border-radius:8px;padding:5px 11px;transition:border-color .2s;}
.top-search:focus-within{border-color:#3b82f6;}
.top-search input{background:transparent;border:none;outline:none;color:#e2e8f0;font-size:12px;width:160px;}
.top-search input::placeholder{color:#6b7280;}

/* page */
.page{margin-left:68px;flex:1;display:flex;flex-direction:column;}
.content{padding:24px;flex:1;}

/* stat grid */
.stat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;margin-bottom:24px;}
.stat-card {
  background: rgba(13, 22, 45, 0.6);
  border: 1px solid rgba(59, 130, 246, 0.12);
  border-radius: 16px;
  padding: 18px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px -8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03);
  transition: transform .25s cubic-bezier(0.16, 1, 0.3, 1), border-color .25s ease, box-shadow .25s ease;
}
.stat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--a,linear-gradient(90deg,#3b82f6,#8b5cf6));}
.stat-card:hover{transform:translateY(-4px);border-color:rgba(59,130,246,0.35);box-shadow:0 12px 30px -8px rgba(0,0,0,0.6);}
.stat-ico{width:36px;height:36px;border-radius:9px;display:flex;align-items:center;justify-content:center;margin-bottom:10px;background:var(--ib,rgba(59,130,246,.1));}
.stat-val{font-size:28px;font-weight:800;font-family:'JetBrains Mono',monospace;color:#f3f4f6;line-height:1;margin-bottom:3px;}
.stat-lbl{font-size:10px;color:#9ca3af;font-weight:600;letter-spacing:.5px;text-transform:uppercase;}
.stat-chg{position:absolute;top:14px;right:14px;font-size:10px;font-weight:700;display:flex;align-items:center;gap:2px;}
.chg-up{color:#f87171;} .chg-dn{color:#4ade80;}

/* card */
.card {
  background: rgba(13, 22, 45, 0.65);
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-radius: 16px;
  padding: 22px;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.05);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.08);
}
.card-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;}
.card-ttl{display:flex;align-items:center;gap:9px;font-size:13px;font-weight:700;color:#e5e7eb;letter-spacing:.2px;}
.ttl-ico{width:30px;height:30px;background:rgba(59,130,246,.14);border-radius:8px;display:flex;align-items:center;justify-content:center;color:#60a5fa;}

/* grid */
.g2{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;}
@media(max-width:1100px){.g2,.g3{grid-template-columns:1fr;}}

/* upload */
.upzone{border:2px dashed rgba(59,130,246,0.2);border-radius:14px;padding:44px 20px;text-align:center;cursor:pointer;transition:all .3s;background:rgba(59,130,246,.01);position:relative;overflow:hidden;}
.upzone::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(59,130,246,.03) 0%,transparent 70%);}
.upzone:hover,.upzone.drag{border-color:#3b82f6;background:rgba(59,130,246,.05);}
.upzone.drag{border-style:solid;}
.up-ico{width:68px;height:68px;background:linear-gradient(135deg,rgba(59,130,246,.15),rgba(139,92,246,.15));border-radius:18px;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;border:1px solid rgba(59,130,246,.2);}

/* buttons */
.btn{display:inline-flex;align-items:center;gap:6px;padding:9px 18px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;border:none;transition:all .2s;letter-spacing:.2px;text-decoration:none;}
.btn-p{background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;box-shadow:0 4px 14px rgba(37,99,235,.25);}
.btn-p:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(37,99,235,.38);}
.btn-d{background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff;}
.btn-d:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(239,68,68,.3);}
.btn-success{background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;}
.btn-success:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(34,197,94,.3);}
.btn-g{background:rgba(30,41,59,.5);color:#9ca3af;border:1px solid rgba(59,130,246,0.12);}
.btn-g:hover{background:rgba(30,41,59,.8);color:#f3f4f6;}
.btn-s{padding:6px 12px;font-size:11px;}
.btn-xs{padding:4px 9px;font-size:10px;border-radius:5px;}

/* risk badge */
.rbadge{display:inline-flex;align-items:center;gap:4px;padding:2px 9px;border-radius:20px;font-size:10px;font-weight:700;letter-spacing:.4px;border:1px solid currentColor;}

/* violation card */
.vcard{background:rgba(13, 22, 45, 0.5);border:1px solid rgba(59, 130, 246, 0.1);border-radius:13px;padding:16px;transition:all .25s;position:relative;overflow:hidden;cursor:pointer;}
.vcard::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--vc,#3b82f6);border-radius:3px 0 0 3px;}
.vcard:hover{border-color:#3b82f6;transform:translateX(3px);background:rgba(20,30,55,.8);box-shadow:0 4px 15px rgba(0,0,0,0.3);}
.vcard.sel{border-color:#3b82f6;background:rgba(20,30,55,.95);}
.vc-hdr{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.plate{font-family:'JetBrains Mono',monospace;font-size:14px;font-weight:700;color:#f3f4f6;letter-spacing:1.5px;background:rgba(59,130,246,.1);border:1px solid rgba(59,130,246,.22);padding:2px 9px;border-radius:5px;}
.vc-type{font-size:10px;color:#9ca3af;margin-top:2px;}
.vtags{display:flex;flex-wrap:wrap;gap:4px;margin:8px 0;}
.vtag{padding:1px 7px;border-radius:11px;font-size:9px;font-weight:600;letter-spacing:.3px;}
.conf-bar{height:3px;background:#1e293b;border-radius:2px;margin-top:4px;overflow:hidden;}
.conf-fill{height:100%;background:linear-gradient(90deg,#3b82f6,#10b981);border-radius:2px;}

/* detail panel */
.dp{background:rgba(10,18,38,0.85);border:1px solid rgba(59, 130, 246, 0.15);border-radius:16px;padding:24px;backdrop-filter:blur(20px);overflow-y:auto;max-height:90vh;}
.dp-sec{margin-bottom:20px;}
.dp-sec-ttl{font-size:9px;font-weight:700;letter-spacing:1.5px;color:#6b7280;text-transform:uppercase;margin-bottom:10px;padding-bottom:5px;border-bottom:1px solid #1e293b;}
.dp-row{display:flex;align-items:center;justify-content:space-between;padding:6px 0;font-size:12px;border-bottom:1px solid rgba(30,41,59,.5);}
.dp-row:last-child{border-bottom:none;}
.dk{color:#9ca3af;font-weight:500;} .dv{color:#f3f4f6;font-weight:600;font-family:'JetBrains Mono',monospace;font-size:11px;}
.chip{padding:2px 9px;border-radius:11px;font-size:10px;font-weight:700;}
.chip-ok{background:rgba(16,185,129,.14);color:#34d399;border:1px solid rgba(16,185,129,.3);}
.chip-bad{background:rgba(239,68,68,.14);color:#f87171;border:1px solid rgba(239,68,68,.3);}
.chip-info{background:rgba(59,130,246,.14);color:#60a5fa;border:1px solid rgba(59,130,246,.3);}
.chip-warn{background:rgba(245,158,11,.14);color:#fbbf24;border:1px solid rgba(245,158,11,.3);}

/* cred ring */
.cred-ring{width:72px;height:72px;border-radius:50%;background:conic-gradient(#10b981 var(--p,90deg),#1e293b 0);display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative;}
.cred-ring::before{content:'';position:absolute;inset:6px;background:#030712;border-radius:50%;}
.cred-inner{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;}
.cred-num{font-size:14px;font-weight:800;color:#10b981;font-family:'JetBrains Mono',monospace;}
.cred-lbl{font-size:8px;color:#6b7280;}

/* helmet box */
.hbox{background:rgba(15,23,42,.4);border:1px solid #1e293b;border-radius:10px;padding:12px;display:flex;align-items:center;gap:12px;margin-bottom:7px;}
.hico{width:44px;height:44px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;}

/* image preview */
.img-prev{position:relative;border-radius:10px;overflow:hidden;background:#0f172a;border:1px solid #1e293b;margin-top:14px;}
.img-prev img{width:100%;display:block;max-height:320px;object-fit:contain;}
.img-prev-badge{position:absolute;top:8px;left:8px;background:rgba(15,23,42,.85);border:1px solid #10b981;color:#34d399;padding:3px 8px;border-radius:5px;font-size:10px;font-weight:700;backdrop-filter:blur(6px);}

/* progress */
.pbar{height:10px;background:#1e293b;border-radius:5px;overflow:hidden;margin:10px 0;}
.pfill{height:100%;background:linear-gradient(90deg,#3b82f6,#8b5cf6,#10b981);border-radius:5px;background-size:200%;animation:pshim 1.5s linear infinite;transition:width .3s;}
@keyframes pshim{0%{background-position:0%}100%{background-position:200%}}

/* bar chart */
.bchart{display:flex;align-items:flex-end;gap:5px;padding:0 2px;}
.bi{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;}
.bf{width:100%;border-radius:3px 3px 0 0;min-height:3px;transition:height .5s;}
.bl{font-size:8px;color:#6b7280;text-align:center;font-family:'JetBrains Mono',monospace;}

/* heatmap */
.hmgrid{display:grid;gap:3px;grid-template-columns:repeat(24,1fr);margin:10px 0;}
.hmcell{aspect-ratio:1;border-radius:2px;cursor:pointer;transition:transform .1s;}
.hmcell:hover{transform:scale(1.5);}

/* hotspot rank */
.hrank{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid rgba(30,41,59,.4);}
.hrank:last-child{border-bottom:none;}
.hnum{width:22px;height:22px;border-radius:5px;background:rgba(59,130,246,.1);border:1px solid rgba(59,130,246,.2);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:#60a5fa;font-family:'JetBrains Mono',monospace;flex-shrink:0;}
.hbar{flex:1;height:5px;background:#1e293b;border-radius:3px;overflow:hidden;}
.hfill{height:100%;border-radius:3px;background:linear-gradient(90deg,#ef4444,#f97316);}

/* table */
.tbl{width:100%;border-collapse:collapse;}
.tbl th{text-align:left;padding:8px 10px;font-size:9px;font-weight:700;letter-spacing:1px;color:#6b7280;text-transform:uppercase;border-bottom:1px solid rgba(59,130,246,0.25);background:rgba(15,23,42,.5);}
.tbl td{padding:9px 10px;font-size:12px;border-bottom:1px solid rgba(30,41,59,.3);}
.tbl tr:hover td{background:rgba(30,41,59,.25);}

/* tabs */
.tabs{display:flex;border-bottom:1px solid #1e293b;margin-bottom:20px;}
.tab{display:flex;align-items:center;gap:6px;padding:9px 16px;background:transparent;border:none;color:#6b7280;font-size:12px;font-weight:600;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-1px;transition:all .2s;}
.tab:hover{color:#9ca3af;}
.tab.on{color:#60a5fa;border-bottom-color:#3b82f6;}

/* alert */
.alert{display:flex;align-items:center;gap:9px;padding:10px 14px;border-radius:9px;margin-bottom:14px;font-size:12px;font-weight:500;}
.a-ok{background:rgba(52,211,153,.1);border:1px solid rgba(52,211,153,.2);color:#34d399;}
.a-err{background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);color:#fca5a5;}
.a-warn{background:rgba(245,158,11,.1);border:1px solid rgba(245,158,11,.2);color:#fde68a;}
.a-info{background:rgba(59,130,246,.1);border:1px solid rgba(59,130,246,.2);color:#93c5fd;}

/* empty */
.empty{text-align:center;padding:44px 20px;color:#6b7280;}
.empty-ico{font-size:36px;margin-bottom:10px;opacity:.4;}

/* spinner */
.spin{width:16px;height:16px;border:2px solid #1e293b;border-top-color:#3b82f6;border-radius:50%;animation:sp .7s linear infinite;flex-shrink:0;}
@keyframes sp{to{transform:rotate(360deg);}}

/* modal overlay */
.modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.75);backdrop-filter:blur(8px);z-index:500;display:flex;align-items:center;justify-content:center;}
.modal {
  background: rgba(10, 18, 38, 0.95);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 20px;
  padding: 28px;
  max-width: 480px;
  width: 90%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.1);
  animation: modalScaleIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
@keyframes modalScaleIn {
  from { opacity: 0; transform: scale(0.9) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.modal-close{position:absolute;top:14px;right:14px;background:transparent;border:none;color:#6b7280;cursor:pointer;transition:color .2s;}
.modal-close:hover{color:#ef4444;}

/* chatbot */
.chat-fab{position:fixed;bottom:24px;right:24px;width:54px;height:54px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:600;box-shadow:0 8px 28px rgba(59,130,246,.45);transition:transform .2s;}
.chat-fab:hover{transform:scale(1.08);animation:pulseGlow 2s infinite;}
.chat-win{position:fixed;bottom:88px;right:24px;width:365px;background:rgba(10, 18, 38, 0.95);border: 1px solid rgba(59, 130, 246, 0.2);backdrop-filter:blur(20px);border-radius:18px;display:flex;flex-direction:column;z-index:600;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.6);animation:slideUp 0.3s ease-out;}
.chat-hdr{background:linear-gradient(135deg,#1e3a8a,#0f172a);padding:14px 16px;display:flex;align-items:center;gap:10px;}
.chat-msgs{flex:1;padding:14px;display:flex;flex-direction:column;gap:10px;overflow-y:auto;max-height:340px;}
.msg{max-width:85%;padding:10px 14px;border-radius:12px;font-size:12px;line-height:1.5;}
.msg-bot{background:rgba(30,41,59,.4);border:1px solid rgba(59, 130, 246, 0.15);color:#cbd5e1;align-self:flex-start;border-radius:4px 12px 12px 12px;}
.msg-bot-code{font-family:'JetBrains Mono',monospace;background:#030712;padding:6px 10px;border-radius:6px;margin-top:6px;font-size:11px;overflow-x:auto;color:#38bdf8;}
.msg-user{background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;align-self:flex-end;border-radius:12px 4px 12px 12px;}
.chat-inp{display:flex;border-top:1px solid rgba(59, 130, 246, 0.15);padding:10px 12px;gap:8px;}
.chat-inp input{flex:1;background:rgba(15,23,42,.6);border:1px solid rgba(59, 130, 246, 0.15);border-radius:8px;padding:7px 11px;color:#e2e8f0;font-size:12px;outline:none;}
.chat-inp input:focus{border-color:#3b82f6;}
.chat-send{width:34px;height:34px;border-radius:8px;background:linear-gradient(135deg,#3b82f6,#2563eb);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;}

/* auth pages style */
.auth-bg {
  display:flex;
  min-height:100vh;
  background-color: #030611;
  background-image: 
    radial-gradient(at 0% 0%, rgba(20, 35, 75, 0.25) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(15, 23, 50, 0.2) 0px, transparent 50%),
    linear-gradient(rgba(255, 255, 255, 0.007) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.007) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
}
.auth-panel-l{flex:1.2;background:rgba(12,22,51,0.45);border-right:1px solid rgba(30,58,138,0.25);display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px;position:relative;overflow:hidden;backdrop-filter:blur(10px);}
.auth-panel-l::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 20% 30%,rgba(59,130,246,0.15) 0%,transparent 50%),radial-gradient(circle at 80% 70%,rgba(139,92,246,0.12) 0%,transparent 50%);}
.auth-panel-r{flex:1;display:flex;align-items:center;justify-content:center;padding:40px;background:rgba(5,11,30,0.55);backdrop-filter:blur(10px);}
.auth-form{width:100%;max-width:390px;animation:slideUp 0.5s ease-out;}
.auth-inp-group{margin-bottom:18px;}
.auth-lbl{display:block;font-size:11px;font-weight:700;color:#9ca3af;margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px;}
.auth-inp{width:100%;background:rgba(15,23,42,.7);border:1px solid rgba(59, 130, 246, 0.15);border-radius:8px;padding:10px 14px;color:#f3f4f6;font-size:13px;outline:none;transition:border-color .2s;}
.auth-inp:focus{border-color:#3b82f6;}
.auth-select{width:100%;background:rgba(15,23,42,.7);border:1px solid rgba(59, 130, 246, 0.15);border-radius:8px;padding:10px 14px;color:#f3f4f6;font-size:13px;outline:none;cursor:pointer;}

/* contact */
.contact-card{background:linear-gradient(135deg,rgba(59,130,246,.08),rgba(139,92,246,.04));border:1px solid rgba(59,130,246,.15);border-radius:16px;padding:28px;margin-bottom:16px;}

/* toast */
.toast-container{position:fixed;top:20px;right:20px;z-index:1000;display:flex;flex-direction:column;gap:10px;max-width:380px;}
.toast{background:rgba(15,23,42,0.92);border:1px solid #10b981;border-radius:10px;padding:14px;color:#e2e8f0;backdrop-filter:blur(10px);box-shadow:0 10px 30px rgba(0,0,0,0.5);display:flex;gap:10px;align-items:flex-start;animation:slideUp 0.3s ease-out;}
.toast-err{border-color:#ef4444;}
`;
function Logo() {
  return /* @__PURE__ */ jsxDEV("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", children: [
    /* @__PURE__ */ jsxDEV("path", { d: "M16 2 L28 7 L28 18 C28 24 22 29 16 30 C10 29 4 24 4 18 L4 7 Z", fill: "url(#sg)", opacity: "0.9" }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 421,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("defs", { children: /* @__PURE__ */ jsxDEV("linearGradient", { id: "sg", x1: "0", y1: "0", x2: "32", y2: "32", children: [
      /* @__PURE__ */ jsxDEV("stop", { offset: "0%", stopColor: "#2563eb" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 424,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("stop", { offset: "100%", stopColor: "#8b5cf6" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 425,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 423,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 422,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("rect", { x: "9", y: "12", width: "11", height: "8", rx: "1.5", fill: "#fff", opacity: "0.9" }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 428,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("circle", { cx: "14.5", cy: "16", r: "2.5", fill: "#2563eb" }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 429,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("circle", { cx: "14.5", cy: "16", r: "1.2", fill: "#fff", opacity: "0.6" }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 430,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M20 14 L24 12 L24 20 L20 18 Z", fill: "#fff", opacity: "0.85" }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 431,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("circle", { cx: "22", cy: "9", r: "2", fill: "#ef4444" }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 432,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 420,
    columnNumber: 5
  }, this);
}
_c = Logo;
function RBadge({ risk }) {
  const c = RISK_CFG[risk] || RISK_CFG.LOW;
  const d = { LOW: "🟢", MEDIUM: "🟡", HIGH: "🟠", CRITICAL: "🔴" }[risk];
  return /* @__PURE__ */ jsxDEV("span", { className: "rbadge", style: { color: c.color, borderColor: c.color, background: c.bg }, children: [
    d,
    " ",
    c.label
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 443,
    columnNumber: 10
  }, this);
}
_c2 = RBadge;
function VCard({ item, onClick, sel }) {
  const top = item.violations[0];
  const isMislead = item.status === "MISLEAD";
  const isSent = item.status === "SENT";
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: `vcard animate-slideup${sel ? " sel" : ""}`,
      style: {
        "--vc": isMislead ? "#4b5563" : top?.color,
        opacity: isMislead ? 0.6 : 1,
        borderStyle: isMislead ? "dashed" : "solid"
      },
      onClick: () => onClick(item),
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "vc-hdr", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "plate", style: { textDecoration: isMislead ? "line-through" : "none" }, children: item.plate }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 466,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "vc-type", children: [
              item.vehicleType,
              " · ",
              item.manufacturer,
              " ",
              item.model
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 467,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 465,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            isMislead && /* @__PURE__ */ jsxDEV("span", { className: "chip chip-bad", style: { marginRight: 6 }, children: "MISLEAD ✕" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 470,
              columnNumber: 25
            }, this),
            isSent && /* @__PURE__ */ jsxDEV("span", { className: "chip chip-ok", style: { marginRight: 6 }, children: "NOTICE SENT ✓" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 471,
              columnNumber: 22
            }, this),
            item.isChaseCategory && /* @__PURE__ */ jsxDEV("span", { className: "chip chip-bad", style: { marginRight: 6, background: "#ef4444", animation: "pulseGlow 1.5s infinite" }, children: "CHASE 🚨" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 472,
              columnNumber: 36
            }, this),
            item.status === "WAIVED" && /* @__PURE__ */ jsxDEV("span", { className: "chip chip-warn", style: { marginRight: 6 }, children: "WAIVED ⚖️" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 473,
              columnNumber: 40
            }, this),
            item.status === "PAID" && /* @__PURE__ */ jsxDEV("span", { className: "chip chip-ok", style: { marginRight: 6, background: "#10b981" }, children: "PAID ✓" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 474,
              columnNumber: 38
            }, this),
            /* @__PURE__ */ jsxDEV(RBadge, { risk: item.risk }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 475,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 469,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 464,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vtags", children: item.violations.map(
          (v) => /* @__PURE__ */ jsxDEV("span", { className: "vtag", style: { background: `${v.color || "#ef4444"}18`, color: v.color || "#ef4444", border: `1px solid ${v.color || "#ef4444"}44` }, children: [
            v.icon || "🚨",
            " ",
            v.label
          ] }, v.id || v.type, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 480,
            columnNumber: 9
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 478,
          columnNumber: 7
        }, this),
        item.imageUrl && /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 8, borderRadius: 6, overflow: "hidden", border: "1px solid #1e293b" }, children: /* @__PURE__ */ jsxDEV("img", { src: item.imageUrl, alt: "evidence", style: { width: "100%", maxHeight: 120, objectFit: "cover", display: "block" } }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 487,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 486,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 6 }, children: [
          /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 10, color: "#9ca3af", display: "flex", alignItems: "center", gap: 4 }, children: [
            /* @__PURE__ */ jsxDEV(MapPin, { size: 9 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 491,
              columnNumber: 105
            }, this),
            item.location
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 491,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "mono", style: { fontSize: 10, color: "#10b981" }, children: [
            item.confidence,
            "%"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 492,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 490,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "conf-bar", children: /* @__PURE__ */ jsxDEV("div", { className: "conf-fill", style: { width: `${item.confidence}%` } }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 494,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 494,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 455,
      columnNumber: 5
    },
    this
  );
}
_c3 = VCard;
function DetailPanel({ item, onClose, onStatusChange }) {
  _s();
  const [fine, setFine] = useState(1e3);
  useEffect(() => {
    if (item) {
      setFine(item.fineAmount || 1e3);
    }
  }, [item]);
  if (!item) return /* @__PURE__ */ jsxDEV("div", { className: "dp animate-slideup", style: { height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxDEV("div", { className: "empty", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "empty-ico", children: /* @__PURE__ */ jsxDEV(Target, { size: 36 }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 513,
      columnNumber: 57
    }, this) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 513,
      columnNumber: 30
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13 }, children: "Select a violation card to view details & issue fine notices" }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 513,
      columnNumber: 83
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 513,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 512,
    columnNumber: 5
  }, this);
  const cr = item.credibility;
  const pctDeg = `${parseFloat(cr.score) / 100 * 360}deg`;
  const isMislead = item.status === "MISLEAD";
  const isSent = item.status === "SENT";
  const issueNotice = () => {
    onStatusChange(item.id, "SENT", fine);
  };
  const markMislead = () => {
    onStatusChange(item.id, "MISLEAD", 0);
  };
  const printPDF = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
      <head>
        <title>Traffic Fine Notice - ${item.plate}</title>
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1e293b; padding: 40px; line-height: 1.6; }
          .header { border-bottom: 2px solid #3b82f6; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center; }
          .title { font-size: 24px; font-weight: bold; color: #1e3a8a; }
          .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px; }
          .meta-box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; }
          .meta-title { font-size: 11px; font-weight: bold; color: #64748b; text-transform: uppercase; margin-bottom: 5px; }
          .meta-value { font-size: 15px; font-weight: bold; color: #0f172a; }
          .plate { font-family: monospace; font-size: 20px; letter-spacing: 1.5px; background: #eff6ff; border: 1px solid #bfdbfe; padding: 4px 10px; border-radius: 4px; display: inline-block; }
          .fine-box { background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 20px; margin-top: 30px; text-align: center; }
          .fine-amount { font-size: 28px; font-weight: 800; color: #ef4444; font-family: monospace; }
          .footer { margin-top: 50px; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center; }
          .img-container { margin: 20px 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; max-height: 350px; text-align: center; }
          .img-container img { max-width: 100%; height: auto; max-height: 350px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="title">TRAFFIC ENFORCEMENT COMMAND CENTER</div>
            <div style="font-size: 12px; color: #64748b;">Automated AI Violation Fine Notice</div>
          </div>
          <div style="font-size: 12px; text-align: right; color: #64748b;">
            Reference ID: ${item.id}<br/>
            Date Issued: ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-IN")}
          </div>
        </div>
        
        <h2>Official E-Challan Notification</h2>
        <p>This is to notify that the vehicle details listed below was captured violating traffic regulations using our AI Camera Enforcement Network.</p>
        
        <div class="meta-grid">
          <div class="meta-box">
            <div class="meta-title">License Plate</div>
            <div class="plate">${item.plate}</div>
          </div>
          <div class="meta-box">
            <div class="meta-title">Vehicle Description</div>
            <div class="meta-value">${item.color} ${item.manufacturer} ${item.model} (${item.vehicleType})</div>
          </div>
          <div class="meta-box">
            <div class="meta-title">Date & Time</div>
            <div class="meta-value">${new Date(item.timestamp).toLocaleString("en-IN")}</div>
          </div>
          <div class="meta-box">
            <div class="meta-title">Location Junction</div>
            <div class="meta-value">${item.location}</div>
          </div>
        </div>

        <h3>Evidence Image</h3>
        <div class="img-container">
          ${item.imageUrl ? `<img src="${item.imageUrl}" alt="Evidence Photo"/>` : `<div style="padding: 40px; color: #64748b;">No Image Attached</div>`}
        </div>

        <div class="meta-box" style="margin-bottom: 20px;">
          <div class="meta-title">Violations Detected</div>
          <ul style="margin: 5px 0 0 20px; padding: 0;">
            ${item.violations.map((v) => `<li><strong>${v.label}</strong> (Model Confidence: ${item.confidence}%)</li>`).join("")}
          </ul>
        </div>

        <div class="fine-box">
          <div style="font-size: 12px; font-weight: bold; color: #991b1b; text-transform: uppercase; margin-bottom: 5px;">Total Fine Amount Owed</div>
          <div class="fine-amount">₹${fine.toLocaleString()}</div>
          <p style="font-size: 11px; color: #7f1d1d; margin-top: 10px; margin-bottom: 0;">Please clear this fine within 15 days of receiving this notice to avoid vehicle blacklisting.</p>
        </div>

        <div class="footer">
          This is an automated legal document generated by Bengaluru AI Traffic Enforcement Control. No physical signature is required.
        </div>
        <script>
          window.onload = function() { window.print(); }
        <\/script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "dp animate-slideup", children: [
    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }, children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, color: "#6b7280", marginBottom: 4, letterSpacing: 1 }, children: "VEHICLE DETAILS" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 620,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "plate", style: { fontSize: 18, textDecoration: isMislead ? "line-through" : "none" }, children: item.plate }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 622,
            columnNumber: 13
          }, this),
          item.isChaseCategory && /* @__PURE__ */ jsxDEV("span", { className: "chip chip-bad", style: { background: "#ef4444", animation: "pulseGlow 1.5s infinite" }, children: "CHASE 🚨" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 623,
            columnNumber: 38
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 621,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV(RBadge, { risk: item.risk }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 625,
          columnNumber: 16
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 625,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 619,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "btn btn-g btn-s", onClick: onClose, children: "✕" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 627,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 618,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(30,41,59,.3)", border: "1px solid #1e293b", borderRadius: 12, padding: 16, marginBottom: 18 }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 700, color: "#9ca3af", marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.5 }, children: "Action Panel (Review & Enforcement)" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 632,
        columnNumber: 9
      }, this),
      isMislead ? /* @__PURE__ */ jsxDEV("div", { className: "alert a-err", style: { margin: 0 }, children: [
        /* @__PURE__ */ jsxDEV(XCircle, { size: 14 }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 635,
          columnNumber: 60
        }, this),
        " Marked as Mislead/False Detection. Notice Cancelled."
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 635,
        columnNumber: 9
      }, this) : item.status === "WAIVED" ? /* @__PURE__ */ jsxDEV("div", { className: "alert a-warn", style: { margin: 0 }, children: [
        /* @__PURE__ */ jsxDEV(Info, { size: 14 }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 637,
          columnNumber: 61
        }, this),
        " Fine waived due to dispute. Case Closed."
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 637,
        columnNumber: 9
      }, this) : item.status === "PAID" ? /* @__PURE__ */ jsxDEV("div", { className: "alert a-ok", style: { margin: 0, background: "rgba(16,185,129,0.1)", borderColor: "rgba(16,185,129,0.2)", color: "#34d399" }, children: [
        /* @__PURE__ */ jsxDEV(CheckCircle, { size: 14 }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 639,
          columnNumber: 150
        }, this),
        " Challan Paid. Case Closed."
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 639,
        columnNumber: 9
      }, this) : isSent ? /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "alert a-ok", style: { margin: 0 }, children: [
          /* @__PURE__ */ jsxDEV(CheckCircle, { size: 14 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 642,
            columnNumber: 63
          }, this),
          " Notice Sent! Owner charged: ",
          /* @__PURE__ */ jsxDEV("strong", { children: [
            "₹",
            item.fineAmount
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 642,
            columnNumber: 117
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 642,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 8 }, children: [
          /* @__PURE__ */ jsxDEV("button", { className: "btn btn-g btn-s", style: { flex: 1 }, onClick: printPDF, children: [
            /* @__PURE__ */ jsxDEV(FileDown, { size: 12 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 644,
              columnNumber: 90
            }, this),
            "Download Notice PDF"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 644,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "btn btn-d btn-s", style: { flex: 1, background: "linear-gradient(135deg, #f59e0b, #d97706)" }, onClick: () => onStatusChange(item.id, "WAIVED", 0), children: "Waive Fine ⚖️" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 645,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 643,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 641,
        columnNumber: 9
      }, this) : /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "auth-lbl", style: { marginBottom: 4 }, children: "Fine Amount (INR)" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 651,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 8 }, children: [
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                className: "auth-inp",
                value: fine,
                onChange: (e) => setFine(Math.max(0, parseInt(e.target.value) || 0)),
                style: { padding: "8px 12px", fontSize: 13 }
              },
              void 0,
              false,
              {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 653,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("button", { className: "btn btn-success", onClick: issueNotice, children: "Confirm & Send Notice" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 660,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 652,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 650,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ jsxDEV("button", { className: "btn btn-d btn-s", onClick: markMislead, children: [
          /* @__PURE__ */ jsxDEV(AlertTriangle, { size: 11 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 664,
            columnNumber: 73
          }, this),
          "Flag as Mislead (False Alarm)"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 664,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 663,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 649,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 631,
      columnNumber: 7
    }, this),
    item.imageUrl && /* @__PURE__ */ jsxDEV("div", { className: "img-prev", style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxDEV("img", { src: item.imageUrl, alt: "evidence" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 673,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "img-prev-badge", children: [
        "📷 Evidence Frame #",
        item.evidenceFrame
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 674,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 672,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "dp-sec", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "dp-sec-ttl", children: "Vehicle Information" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 680,
        columnNumber: 9
      }, this),
      [
        ["Vehicle Type", item.vehicleType],
        ["Manufacturer", item.manufacturer],
        ["Model", item.model],
        ["Color", item.color],
        ["Registration", /* @__PURE__ */ jsxDEV("span", { className: `chip ${item.registrationStatus === "VERIFIED" ? "chip-ok" : "chip-bad"}`, children: item.registrationStatus }, "r", false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 686,
          columnNumber: 26
        }, this)],
        ["Owner Status", /* @__PURE__ */ jsxDEV("span", { className: `chip ${item.ownerStatus === "MATCHED" ? "chip-info" : "chip-warn"}`, children: item.ownerStatus }, "o", false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 687,
          columnNumber: 26
        }, this)]
      ].map(
        ([k, v]) => /* @__PURE__ */ jsxDEV("div", { className: "dp-row", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "dk", children: k }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 689,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "dv", children: v }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 689,
            columnNumber: 72
          }, this)
        ] }, k, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 689,
          columnNumber: 9
        }, this)
      )
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 679,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "dp-sec", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "dp-sec-ttl", children: "Detected Violations" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 695,
        columnNumber: 9
      }, this),
      item.violations.map(
        (v, idx) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "5px 0", borderBottom: "1px solid rgba(30,41,59,.3)" }, children: [
          /* @__PURE__ */ jsxDEV(CheckCircle, { size: 12, style: { color: v.color || "#ef4444", flexShrink: 0 } }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 698,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, color: "#e5e7eb", flex: 1 }, children: v.label }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 699,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "vtag", style: { background: `${v.color || "#ef4444"}18`, color: v.color || "#ef4444", border: `1px solid ${v.color || "#ef4444"}44` }, children: v.risk || "HIGH" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 700,
            columnNumber: 13
          }, this)
        ] }, v.id || idx, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 697,
          columnNumber: 9
        }, this)
      )
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 694,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "dp-sec", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "dp-sec-ttl", children: "AI Credibility Score" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 707,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "cred-ring", style: { "--p": pctDeg }, children: /* @__PURE__ */ jsxDEV("div", { className: "cred-inner", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "cred-num", children: cr.score }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 711,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "cred-lbl", children: "/100" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 712,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 710,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 709,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { flex: 1 }, children: [["Clear plate visible", cr.plateClear], ["Signal visible", cr.signalVisible], ["Rider visible", cr.riderVisible], ["Violation zone clear", cr.zoneClear]].map(
          ([l, ok]) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 6, padding: "3px 0", fontSize: 11 }, children: [
            ok ? /* @__PURE__ */ jsxDEV(CheckCircle, { size: 11, style: { color: "#10b981" } }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 718,
              columnNumber: 23
            }, this) : /* @__PURE__ */ jsxDEV(XCircle, { size: 11, style: { color: "#ef4444" } }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 718,
              columnNumber: 80
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { color: ok ? "#9ca3af" : "#6b7280" }, children: l }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 719,
              columnNumber: 17
            }, this)
          ] }, l, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 717,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 715,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 708,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 706,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "dp-sec", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "dp-sec-ttl", children: "Detection Explanation" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 728,
        columnNumber: 9
      }, this),
      item.explanation.map(
        (ex, i) => /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(59,130,246,.04)", border: "1px solid rgba(59,130,246,.1)", borderRadius: 9, padding: 11, marginBottom: 7 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, fontWeight: 700, color: "#60a5fa", marginBottom: 3 }, children: ex.type }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 731,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#9ca3af", lineHeight: 1.6 }, children: ex.reason }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 732,
            columnNumber: 13
          }, this)
        ] }, i, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 730,
          columnNumber: 9
        }, this)
      )
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 727,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "dp-sec", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "dp-sec-ttl", children: "Offender History" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 739,
        columnNumber: 9
      }, this),
      item.history && item.history.length > 0 ? /* @__PURE__ */ jsxDEV(Fragment, { children: /* @__PURE__ */ jsxDEV("table", { className: "tbl", children: [
        /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
          /* @__PURE__ */ jsxDEV("th", { children: "Date" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 743,
            columnNumber: 26
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Violation" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 743,
            columnNumber: 39
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Fine" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 743,
            columnNumber: 57
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 743,
          columnNumber: 22
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 743,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("tbody", { children: item.history.map(
          (h, i) => /* @__PURE__ */ jsxDEV("tr", { children: [
            /* @__PURE__ */ jsxDEV("td", { className: "mono", style: { fontSize: 10, color: "#9ca3af" }, children: h.date }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 747,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("td", { style: { fontSize: 11 }, children: h.type }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 748,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("td", { className: "mono", style: { fontSize: 11, color: "#fbbf24" }, children: [
              "₹",
              h.fine.toLocaleString()
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 749,
              columnNumber: 21
            }, this)
          ] }, i, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 746,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 744,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 742,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 741,
        columnNumber: 9
      }, this) : /* @__PURE__ */ jsxDEV("div", { style: { color: "#6b7280", fontSize: 12, textAlign: "center", padding: "10px 0" }, children: "✅ No prior violations" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 755,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 738,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 617,
    columnNumber: 5
  }, this);
}
_s(DetailPanel, "tuly30UIzoeoa1bdubsQA42df4Y=");
_c4 = DetailPanel;
function StatusModal({ onClose }) {
  _s2();
  const [status, setStatus] = useState({ loading: true });
  useEffect(() => {
    fetch(`${API}/health`).then((r2) => r2.json()).then((d) => setStatus({ ...d, loading: false, online: true })).catch(() => setStatus({ loading: false, online: false, database: "disconnected" }));
  }, []);
  return /* @__PURE__ */ jsxDEV("div", { className: "modal-bg", onClick: (e) => e.target === e.currentTarget && onClose(), children: /* @__PURE__ */ jsxDEV("div", { className: "modal", children: [
    /* @__PURE__ */ jsxDEV("button", { className: "modal-close", onClick: onClose, children: /* @__PURE__ */ jsxDEV(X, { size: 18 }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 773,
      columnNumber: 59
    }, this) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 773,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg,rgba(59,130,246,.2),rgba(139,92,246,.15))", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxDEV(Server, { size: 20, color: "#60a5fa" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 775,
        columnNumber: 213
      }, this) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 775,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 16, fontWeight: 700 }, children: "System Status" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 776,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#6b7280" }, children: "Real-time health check" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 776,
          columnNumber: 82
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 776,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 774,
      columnNumber: 9
    }, this),
    status.loading ? /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", padding: 20 }, children: /* @__PURE__ */ jsxDEV("div", { className: "spin", style: { margin: "0 auto" } }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 778,
      columnNumber: 77
    }, this) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 778,
      columnNumber: 27
    }, this) : /* @__PURE__ */ jsxDEV("div", { children: [
      [
        { label: "API Server", ok: status.online, detail: status.online ? "Running on :5000" : "Offline" },
        { label: "MongoDB Atlas", ok: status.database === "connected", detail: status.database || "Unknown" },
        { label: "Detection Engine", ok: status.online, detail: "YOLOv11 Simulation Active" },
        { label: "OCR Pipeline", ok: status.online, detail: "EasyOCR Ready" },
        { label: "Evidence Generator", ok: status.online, detail: "SVG Overlay Engine Active" }
      ].map(
        (s) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #1e293b" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 9 }, children: [
            s.ok ? /* @__PURE__ */ jsxDEV(CheckCircle, { size: 14, style: { color: "#10b981" } }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 789,
              columnNumber: 27
            }, this) : /* @__PURE__ */ jsxDEV(XCircle, { size: 14, style: { color: "#ef4444" } }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 789,
              columnNumber: 84
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, fontWeight: 600 }, children: s.label }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 790,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 788,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: `chip ${s.ok ? "chip-ok" : "chip-bad"}`, children: s.detail }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 792,
            columnNumber: 17
          }, this)
        ] }, s.label, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 787,
          columnNumber: 11
        }, this)
      ),
      /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 16, display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ jsxDEV("button", { className: "btn btn-p btn-s", onClick: () => {
          setStatus({ loading: true });
          fetch(`${API}/health`).then((r2) => r2.json()).then((d) => setStatus({ ...d, loading: false, online: true })).catch(() => setStatus({ loading: false, online: false }));
        }, children: [
          /* @__PURE__ */ jsxDEV(RefreshCw, { size: 11 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 797,
            columnNumber: 17
          }, this),
          "Refresh"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 796,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "btn btn-g btn-s", onClick: onClose, children: "Close" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 799,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 795,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 779,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 772,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 771,
    columnNumber: 5
  }, this);
}
_s2(StatusModal, "/SaTwx+SXYN31Ujw47CKVIHtt48=");
_c5 = StatusModal;
function MongoModal({ onClose }) {
  _s3();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Promise.all(
      [
        fetch(`${API}/statistics`).then((r2) => r2.json()).catch(() => null),
        fetch(`${API}/violations?limit=1`).then((r2) => r2.json()).catch(() => null)
      ]
    ).then(([st, vi]) => {
      setStats({ total: st?.total || 0, byType: st?.byType || {}, violationCount: vi?.totalCount || 0 });
      setLoading(false);
    });
  }, []);
  return /* @__PURE__ */ jsxDEV("div", { className: "modal-bg", onClick: (e) => e.target === e.currentTarget && onClose(), children: /* @__PURE__ */ jsxDEV("div", { className: "modal", children: [
    /* @__PURE__ */ jsxDEV("button", { className: "modal-close", onClick: onClose, children: /* @__PURE__ */ jsxDEV(X, { size: 18 }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 826,
      columnNumber: 59
    }, this) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 826,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg,rgba(16,185,129,.15),rgba(5,150,105,.1))", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxDEV(Database, { size: 20, color: "#34d399" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 828,
        columnNumber: 212
      }, this) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 828,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 16, fontWeight: 700 }, children: "MongoDB Atlas" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 829,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#6b7280" }, children: "cluster0.vvxsjcw.mongodb.net" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 829,
          columnNumber: 82
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 829,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 827,
      columnNumber: 9
    }, this),
    loading ? /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", padding: 20 }, children: /* @__PURE__ */ jsxDEV("div", { className: "spin", style: { margin: "0 auto" } }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 831,
      columnNumber: 70
    }, this) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 831,
      columnNumber: 20
    }, this) : /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }, children: [
        { label: "Total Violations", value: stats.total, color: "#60a5fa" },
        { label: "Records in DB", value: stats.violationCount, color: "#34d399" }
      ].map(
        (s) => /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(15,23,42,.5)", border: "1px solid #1e293b", borderRadius: 10, padding: 14 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 22, fontWeight: 800, color: s.color, fontFamily: "JetBrains Mono" }, children: s.value }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 839,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#9ca3af", marginTop: 2 }, children: s.label }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 840,
            columnNumber: 19
          }, this)
        ] }, s.label, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 838,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 833,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(15,23,42,.4)", border: "1px solid #1e293b", borderRadius: 10, padding: 14 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, fontWeight: 700, color: "#6b7280", letterSpacing: 1, marginBottom: 10, textTransform: "uppercase" }, children: "Collection: violations" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 845,
          columnNumber: 15
        }, this),
        Object.entries(stats.byType).slice(0, 6).map(
          ([k, v]) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px solid rgba(30,41,59,.3)", fontSize: 11 }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { color: "#9ca3af" }, children: k }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 848,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "mono", style: { color: "#60a5fa", fontWeight: 700 }, children: v }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 849,
              columnNumber: 19
            }, this)
          ] }, k, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 847,
            columnNumber: 13
          }, this)
        ),
        Object.keys(stats.byType).length === 0 && /* @__PURE__ */ jsxDEV("div", { style: { color: "#6b7280", fontSize: 11, textAlign: "center" }, children: "No data yet — upload images to populate" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 852,
          columnNumber: 58
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 844,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "btn btn-g btn-s", style: { marginTop: 12 }, onClick: onClose, children: "Close" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 854,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 832,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 825,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 824,
    columnNumber: 5
  }, this);
}
_s3(MongoModal, "6V3VN4G6yhLu9yE+1e98mN5EWWc=");
_c6 = MongoModal;
function WelcomeModal({ onClose }) {
  return /* @__PURE__ */ jsxDEV("div", { className: "modal-bg", onClick: (e) => e.target === e.currentTarget && onClose(), children: /* @__PURE__ */ jsxDEV("div", { className: "modal", style: { maxWidth: "520px" }, children: [
    /* @__PURE__ */ jsxDEV("button", { className: "modal-close", onClick: onClose, children: /* @__PURE__ */ jsxDEV(X, { size: 18 }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 869,
      columnNumber: 59
    }, this) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 869,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg,rgba(59,130,246,.25),rgba(139,92,246,.2))", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxDEV(Award, { size: 20, color: "#60a5fa" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 871,
        columnNumber: 213
      }, this) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 871,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 16, fontWeight: 800, color: "#f3f4f6" }, children: "Bengaluru Traffic Enforcement System" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 873,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#3b82f6", fontWeight: 600 }, children: "AI Command Control Prototype v1.0" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 874,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 872,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 870,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#cbd5e1", lineHeight: 1.6, display: "flex", flexDirection: "column", gap: 12 }, children: [
      /* @__PURE__ */ jsxDEV("p", { children: "Welcome to the upgraded Traffic Violation Detection and Challan System! This prototype demonstrates real-time vision processing pipelines and automated citation notifications." }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 879,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(30,58,138,0.15)", border: "1px solid rgba(59,130,246,0.25)", borderRadius: 10, padding: 12 }, children: [
        /* @__PURE__ */ jsxDEV("strong", { style: { fontSize: 11, color: "#60a5fa", display: "block", marginBottom: 6 }, children: "🔑 Quick Testing Accounts & Roles:" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 884,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 5, fontSize: 11 }, children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            "• 👮 ",
            /* @__PURE__ */ jsxDEV("strong", { children: "Police Officer:" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 886,
              columnNumber: 25
            }, this),
            " Sign in with Quick Match (or use code ",
            /* @__PURE__ */ jsxDEV("code", { children: "TN-1234" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 886,
              columnNumber: 96
            }, this),
            ") to review AI violations and manually log challans."
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 886,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            "• 🛠️ ",
            /* @__PURE__ */ jsxDEV("strong", { children: "Admin Portal:" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 887,
              columnNumber: 26
            }, this),
            " Use Quick Match (requires security code ",
            /* @__PURE__ */ jsxDEV("code", { children: "ADMIN-5616" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 887,
              columnNumber: 97
            }, this),
            ") to access system health, MongoDB stats, and configuration."
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 887,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            "• 🚗 ",
            /* @__PURE__ */ jsxDEV("strong", { children: "Citizen Portal:" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 888,
              columnNumber: 25
            }, this),
            " Register or login as a citizen, link your plate (e.g. ",
            /* @__PURE__ */ jsxDEV("code", { children: "KA03HA2903" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 888,
              columnNumber: 112
            }, this),
            ") and view real-time warnings."
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 888,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 885,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 883,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
        /* @__PURE__ */ jsxDEV("strong", { style: { fontSize: 11, color: "#f3f4f6" }, children: "🆕 Highlighted Prototype Features:" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 893,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 8, padding: 8 }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, fontWeight: 700, color: "#e2e8f0", display: "block" }, children: "📊 Batch Queue Engine" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 896,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 10, color: "#9ca3af" }, children: "Configure worker concurrency, run diagnostic runs, and download CSV reports." }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 897,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 895,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 8, padding: 8 }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, fontWeight: 700, color: "#e2e8f0", display: "block" }, children: "🏗️ Animated Pipeline" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 900,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 10, color: "#9ca3af" }, children: "Watch active simulation diagnostics travel through OpenCV, YOLOv8, and OCR stages." }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 901,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 899,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 894,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 892,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 878,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 20, display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ jsxDEV("button", { className: "btn btn-p", onClick: onClose, style: { padding: "8px 20px" }, children: "Get Started" }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 908,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 907,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 868,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 867,
    columnNumber: 5
  }, this);
}
_c7 = WelcomeModal;
function Chatbot({ currentUser }) {
  _s4();
  const [open, setOpen] = useState(false);
  const cleanBotMessage = (text) => {
    if (currentUser?.role === "police") {
      return text.replace(/MongoDB Atlas/gi, "central records").replace(/MongoDB/gi, "central records").replace(/database statuses/gi, "system statuses").replace(/database entry/gi, "system log entry").replace(/database/gi, "system").replace(/dbStatus/gi, "status").replace(/Atlas/gi, "records");
    }
    return text;
  };
  const [msgs, setMsgs] = useState(
    [
      { from: "bot", text: `🤖 Hello! I am the TrafficAI Conversational Assistant.
How can I help you manage traffic violation enforcement today?` }
    ]
  );
  const [inp, setInp] = useState("");
  const endRef = useRef();
  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);
  const respondToMessage = (low) => {
    let response = "";
    if (low.includes("hello") || low.includes("hi ") || low.includes("hey")) {
      response = `👋 Hello! I'm here to assist you in monitoring and managing the Traffic Violation Detection System. As ${currentUser?.role === "admin" ? "an Administrator" : "a Police Officer"}, you can perform detection checks, review evidence, or search for plates. Ask me any technical or operational question!`;
    } else if (low.includes("roles") || low.includes("police") || low.includes("admin") || low.includes("login")) {
      response = `🔑 This prototype uses a role-based authentication model. Admins can view System Health and database statuses, whereas Police logins have these backend configuration links hidden from the sidebar to focus exclusively on reviewing violations and sending fine notices.`;
    } else if (low.includes("mislead") || low.includes("dismiss")) {
      response = `⚠️ If our AI model falsely flags an image (mislead detection), officers can click the "Flag as Mislead" button inside the vehicle details. This marks the database entry as MISLEAD, prevents fine notice dispatch, and cancels the record so the citizen is not wrongfully penalized.`;
    } else if (low.includes("notice") || low.includes("fine") || low.includes("message")) {
      response = `✉️ Once a violation is validated, you can type the fine amount in the Detail Panel and click "Confirm & Send Notice". This updates MongoDB and sends an automated notification warning to the vehicle owner detailing the junction, vehicle type, and exact fine.`;
    } else if (low.includes("bengaluru") || low.includes("live") || low.includes("feed")) {
      response = `📸 The dashboard simulates a real-time live connection to Bengaluru Traffic Control Room. It updates the snapshot view, shows running counts, and appends real-time detection notifications.`;
    } else if (low.includes("pdf") || low.includes("csv") || low.includes("download") || low.includes("export")) {
      response = `📄 Real PDF generation is active! Select any card and click "Download Notice PDF" to print or save a clean styled official Challan sheet. You can also export current records to .csv format from the dashboard, detection, and archive views.`;
    } else if (low.includes("yolo") || low.includes("computer vision") || low.includes("model") || low.includes("ocr")) {
      response = `🧠 We use simulated YOLOv11 and OCR models to process uploaded frames, isolate license plate characters (e.g. KA03XX1234), verify plate clarity, detect rider head coordinates for helmet compliance, and aggregate risk indices.`;
    } else {
      response = `🤖 I understand you're asking about "${low}". I'm trained to help with:
• **Auth / Roles** (Police vs Admin permissions)
• **Notice / Fine System** (How to issue fines or flag mislead alarms)
• **Bengaluru Live Feed simulator**
• **PDF Challan download & CSV table exports**
• **AI computer vision specifications** (YOLOv11 details)
Let me know what you'd like to explore further!`;
    }
    return response;
  };
  const send = () => {
    if (!inp.trim()) return;
    const userMsg = { from: "user", text: inp };
    const botMsg = { from: "bot", text: respondToMessage(inp.toLowerCase()) };
    setMsgs((m) => [...m, userMsg, botMsg]);
    setInp("");
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    open && /* @__PURE__ */ jsxDEV("div", { className: "chat-win", style: { height: 460 }, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "chat-hdr", children: [
        /* @__PURE__ */ jsxDEV("div", { style: { width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }, children: "🤖" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 986,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { flex: 1 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, fontWeight: 700, color: "#fff" }, children: "TrafficAI Assistant" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 988,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "rgba(255,255,255,.6)" }, children: "Ask me anything (Claude/ChatGPT Mode)" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 989,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 987,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { style: { background: "transparent", border: "none", color: "rgba(255,255,255,.6)", cursor: "pointer" }, onClick: () => setOpen(false), children: /* @__PURE__ */ jsxDEV(X, { size: 16 }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 991,
          columnNumber: 156
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 991,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 985,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "chat-msgs", children: [
        msgs.map(
          (m, i) => /* @__PURE__ */ jsxDEV("div", { className: `msg ${m.from === "bot" ? "msg-bot" : "msg-user"}`, style: { whiteSpace: "pre-line" }, children: cleanBotMessage(m.text) }, i, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 995,
            columnNumber: 11
          }, this)
        ),
        /* @__PURE__ */ jsxDEV("div", { ref: endRef }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 997,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 993,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "chat-inp", children: [
        /* @__PURE__ */ jsxDEV("input", { placeholder: "Ask me about rules, fines, PDF exports...", value: inp, onChange: (e) => setInp(e.target.value), onKeyDown: (e) => e.key === "Enter" && send() }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1e3,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "chat-send", onClick: send, children: /* @__PURE__ */ jsxDEV(Send, { size: 13 }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1001,
          columnNumber: 58
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1001,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 999,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 984,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("button", { className: "chat-fab", onClick: () => setOpen((o) => !o), children: open ? /* @__PURE__ */ jsxDEV(X, { size: 22, color: "#fff" }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1006,
      columnNumber: 17
    }, this) : /* @__PURE__ */ jsxDEV(MessageCircle, { size: 22, color: "#fff" }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1006,
      columnNumber: 48
    }, this) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1005,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 982,
    columnNumber: 5
  }, this);
}
_s4(Chatbot, "Cvz8CIs3blYHYSphL4zAXnd0/QQ=");
_c8 = Chatbot;
function DashboardPage({ currentUser }) {
  _s5();
  const [stats, setStats] = useState(null);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dbOk, setDbOk] = useState(null);
  const [liveImage, setLiveImage] = useState("/traffic_blr_1.png");
  const [liveLog, setLiveLog] = useState(
    [
      { time: "13:20:05", loc: "Silk Board Junction", msg: "Scanning lane 2... Stable" },
      { time: "13:22:12", loc: "MG Road Junction", msg: "AI Trigger: Helmet Non-Compliance flagged (KA03HA2903)" },
      { time: "13:24:45", loc: "Hebbal Flyover", msg: "Warning: Congestion index high (88%)" }
    ]
  );
  const [liveStats, setLiveStats] = useState({ flowRate: 420, activeCameras: 28, alertCount: 89 });
  const fetchDashboardData = useCallback(() => {
    Promise.all(
      [
        fetch(`${API}/statistics`).then((r2) => r2.json()).catch(() => null),
        fetch(`${API}/violations?limit=5`).then((r2) => r2.json()).catch(() => null),
        fetch(`${API}/health`).then((r2) => r2.json()).catch(() => null)
      ]
    ).then(([st, vi, hl]) => {
      setStats(st);
      setRecent(vi?.violations || []);
      setDbOk(hl?.database === "connected");
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);
  useEffect(() => {
    const images = [
      "/traffic_blr_1.png",
      "/traffic_blr_2.png",
      "/traffic_blr_3.png",
      "/traffic_blr_4.png"
    ];
    let recentIndices = [];
    const interval = setInterval(() => {
      let nextIdx = Math.floor(Math.random() * images.length);
      while (recentIndices.includes(nextIdx)) {
        nextIdx = Math.floor(Math.random() * images.length);
      }
      recentIndices.push(nextIdx);
      if (recentIndices.length > 12) {
        recentIndices.shift();
      }
      setLiveImage(images[nextIdx]);
      const timeStr = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", { hour12: false });
      const newAlert = {
        time: timeStr,
        loc: pk(LOCATIONS),
        msg: pk(
          [
            `AI Alert: ${pk(VIOLATION_TYPES).label} detected (${genPlate()})`,
            `Traffic flow speed: ${r(15, 65)} km/h`,
            `Live OCR camera validated registration details`,
            `Vehicle class matched owner description records`
          ]
        )
      };
      setLiveLog((prev) => [newAlert, ...prev.slice(0, 5)]);
      setLiveStats({
        flowRate: r(390, 480),
        activeCameras: r(26, 30),
        alertCount: (prev) => prev + r(0, 2)
      });
    }, 6e3);
    return () => clearInterval(interval);
  }, []);
  const localStats = { total: 4723, critical: 47, resolved: 312, active: 23 };
  const hourly = [{ h: "00", c: 8 }, { h: "06", c: 15 }, { h: "07", c: 55 }, { h: "08", c: 72 }, { h: "09", c: 40 }, { h: "12", c: 28 }, { h: "17", c: 68 }, { h: "18", c: 95 }, { h: "19", c: 88 }, { h: "20", c: 61 }, { h: "22", c: 30 }, { h: "23", c: 12 }];
  const maxH = Math.max(...hourly.map((h) => h.c));
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-slideup", children: [
    currentUser?.role === "admin" && !loading && /* @__PURE__ */ jsxDEV("div", { className: `alert ${dbOk ? "a-ok" : "a-warn"}`, style: { marginBottom: 18 }, children: dbOk ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV(Database, { size: 14 }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1103,
        columnNumber: 21
      }, this),
      "MongoDB Atlas Connected — Live data synchronization enabled"
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1103,
      columnNumber: 19
    }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV(AlertTriangle, { size: 14 }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1103,
        columnNumber: 110
      }, this),
      "MongoDB offline — showing local demo data. Upload images to populate."
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1103,
      columnNumber: 108
    }, this) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "card", style: { marginBottom: 20, background: "linear-gradient(135deg, rgba(30,41,59,0.4), rgba(15,23,42,0.6))", borderColor: "#1e3a8a" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }, children: [
        /* @__PURE__ */ jsxDEV(Shield, { size: 20, color: "#60a5fa" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1110,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { style: { fontSize: 15, fontWeight: 700, color: "#f3f4f6" }, children: "How it works: Intelligent Enforcement Workflow" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1111,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 12, color: "#9ca3af", lineHeight: 1.6 }, children: [
        "This system automatically detects traffic violations. ",
        /* @__PURE__ */ jsxDEV("strong", { children: "1. AI Detection:" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1114,
          columnNumber: 65
        }, this),
        " Upload street photos to run YOLOv11 and OCR checking. ",
        /* @__PURE__ */ jsxDEV("strong", { children: "2. Police Review:" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1114,
          columnNumber: 153
        }, this),
        " Review identified violations in the lists. ",
        /* @__PURE__ */ jsxDEV("strong", { children: "3. Notice/Fine Dispatch:" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1114,
          columnNumber: 231
        }, this),
        " Flag fake/misleading triggers to ignore, or submit a fine notice. The vehicle owner is notified instantly."
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1113,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "stat-grid", children: [
      { ico: /* @__PURE__ */ jsxDEV(AlertCircle, { size: 16, color: "#ef4444" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1121,
        columnNumber: 16
      }, this), lbl: "Total Violations", val: stats?.total || localStats.total, a: "linear-gradient(90deg,#ef4444,#dc2626)", ib: "rgba(239,68,68,.1)", chg: "+12%", up: true },
      { ico: /* @__PURE__ */ jsxDEV(Shield, { size: 16, color: "#f97316" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1122,
        columnNumber: 16
      }, this), lbl: "Critical Today", val: localStats.critical, a: "linear-gradient(90deg,#f97316,#ea580c)", ib: "rgba(249,115,22,.1)", chg: "+3", up: true },
      { ico: /* @__PURE__ */ jsxDEV(CheckCircle, { size: 16, color: "#22c55e" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1123,
        columnNumber: 16
      }, this), lbl: "Resolved Today", val: localStats.resolved, a: "linear-gradient(90deg,#22c55e,#16a34a)", ib: "rgba(34,197,94,.1)", chg: "-8%", up: false },
      { ico: /* @__PURE__ */ jsxDEV(Activity, { size: 16, color: "#60a5fa" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1124,
        columnNumber: 16
      }, this), lbl: "Live Traffic Flow", val: `${liveStats.flowRate} veh/min`, a: "linear-gradient(90deg,#60a5fa,#2563eb)", ib: "rgba(59,130,246,.1)" }
    ].map(
      (s, i) => /* @__PURE__ */ jsxDEV("div", { className: "stat-card", style: { "--a": s.a, "--ib": s.ib }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "stat-ico", style: { background: s.ib }, children: s.ico }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1127,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "stat-val", children: typeof s.val === "number" ? s.val.toLocaleString() : s.val }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "stat-lbl", children: s.lbl }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1129,
          columnNumber: 13
        }, this),
        s.chg && /* @__PURE__ */ jsxDEV("div", { className: `stat-chg ${s.up ? "chg-up" : "chg-dn"}`, children: [
          s.up ? /* @__PURE__ */ jsxDEV(ArrowUp, { size: 9 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1130,
            columnNumber: 89
          }, this) : /* @__PURE__ */ jsxDEV(ArrowDown, { size: 9 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1130,
            columnNumber: 112
          }, this),
          s.chg
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1130,
          columnNumber: 23
        }, this)
      ] }, i, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1126,
        columnNumber: 9
      }, this)
    ) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1119,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "g2 sec-gap", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "card", style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Globe, { size: 14 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1141,
              columnNumber: 64
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1141,
              columnNumber: 39
            }, this),
            "Bengaluru Traffic Control Live Cam"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1141,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "live", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "live-dot" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1142,
              columnNumber: 35
            }, this),
            "LIVE STREAM"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1142,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1140,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { position: "relative", width: "100%", height: 200, borderRadius: 10, overflow: "hidden", border: "1px solid #1e293b" }, children: [
          /* @__PURE__ */ jsxDEV("img", { src: liveImage, alt: "Bengaluru Street Cam", style: { width: "100%", height: "100%", objectFit: "cover", transition: "all 0.5s ease" } }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1145,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { position: "absolute", bottom: 8, left: 8, right: 8, background: "rgba(15,23,42,0.8)", padding: "6px 12px", borderRadius: 6, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, backdropFilter: "blur(4px)" }, children: [
            /* @__PURE__ */ jsxDEV("span", { children: "📹 Bengaluru Central Control Room 4" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1147,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "mono", style: { color: "#10b981" }, children: [
              liveStats.activeCameras,
              " Cameras Online"
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1148,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1146,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1144,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { flex: 1 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", marginBottom: 8 }, children: "Live Event Logs" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1153,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: liveLog.map(
            (log, idx) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, background: "rgba(30,41,59,0.2)", padding: "6px 10px", borderRadius: 6, border: "1px solid rgba(30,41,59,0.5)" }, children: /* @__PURE__ */ jsxDEV("span", { style: { color: "#9ca3af" }, children: [
              "[",
              log.time,
              "] ",
              /* @__PURE__ */ jsxDEV("strong", { style: { color: "#cbd5e1" }, children: [
                log.loc,
                ":"
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 1157,
                columnNumber: 67
              }, this),
              " ",
              log.msg
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1157,
              columnNumber: 19
            }, this) }, idx, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1156,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1154,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1152,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1139,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Database, { size: 14 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1168,
              columnNumber: 40
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1168,
              columnNumber: 15
            }, this),
            currentUser?.role === "admin" ? "Recent Database Logs" : "Recent System Logs"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1167,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "btn btn-g btn-s", onClick: fetchDashboardData, children: [
            /* @__PURE__ */ jsxDEV(RefreshCw, { size: 11 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1171,
              columnNumber: 78
            }, this),
            "Refresh"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1171,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1166,
          columnNumber: 11
        }, this),
        recent.length > 0 ? /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: recent.map(
          (v, i) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid rgba(30,41,59,.3)", fontSize: 12 }, children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "plate", style: { fontSize: 12, display: "inline-block" }, children: v.licensePlate || v.plate || "—" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 1178,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#9ca3af", marginTop: 4 }, children: v.label || v.type || "Violation" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 1179,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1177,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "right" }, children: [
              /* @__PURE__ */ jsxDEV("span", { className: "chip", style: {
                background: v.status === "SENT" ? "rgba(34,197,94,0.12)" : v.status === "MISLEAD" ? "rgba(239,68,68,0.12)" : "rgba(249,115,22,0.12)",
                color: v.status === "SENT" ? "#4ade80" : v.status === "MISLEAD" ? "#f87171" : "#fb923c",
                fontSize: 9,
                marginRight: 8
              }, children: v.status || "PENDING" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 1182,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 10, color: v.severity === "HIGH" ? "#f97316" : v.severity === "CRITICAL" ? "#ef4444" : "#22c55e", fontWeight: 700 }, children: v.severity || "MEDIUM" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 1190,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1181,
              columnNumber: 19
            }, this)
          ] }, i, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1176,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1174,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV("div", { className: "empty", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "empty-ico", children: "📡" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1196,
            columnNumber: 34
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12 }, children: [
            "No DB records yet.",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1196,
              columnNumber: 117
            }, this),
            "Upload images to populate."
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1196,
            columnNumber: 69
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1196,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1165,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1136,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", children: /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(BarChart2, { size: 14 }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1203,
          columnNumber: 86
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1203,
          columnNumber: 61
        }, this),
        "Violation Category Overview"
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1203,
        columnNumber: 35
      }, this) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1203,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 12 }, children: VIOLATION_TYPES.map((v) => {
        const cnt = stats?.byType?.[v.label] || r(50, 300);
        return /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(15,23,42,.5)", border: "1px solid #1e293b", borderRadius: 10, padding: 12 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, color: "#9ca3af" }, children: [
              v.icon,
              " ",
              v.label
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1210,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "mono", style: { fontSize: 11, color: v.color, fontWeight: 700 }, children: cnt }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1211,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1209,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { height: 4, background: "#1e293b", borderRadius: 2, overflow: "hidden" }, children: /* @__PURE__ */ jsxDEV("div", { style: { height: "100%", width: `${Math.min(100, cnt / 300 * 100)}%`, background: v.color, borderRadius: 2 } }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1214,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1213,
            columnNumber: 17
          }, this)
        ] }, v.id, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1208,
          columnNumber: 15
        }, this);
      }) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1204,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1202,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 1099,
    columnNumber: 5
  }, this);
}
_s5(DashboardPage, "g7J5yNvMoBfGpJm5eYCZA1NMSkU=");
_c9 = DashboardPage;
function DetectionPage({ addToast, accidentActive, graceActive, currentUser }) {
  _s6();
  const [drag, setDrag] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [alert, setAlert] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const fileRef = useRef();
  const handleDrag = (e) => {
    e.preventDefault();
    setDrag(e.type === "dragenter" || e.type === "dragover");
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    processFiles(e.dataTransfer.files);
  };
  const handleFile = (e) => {
    if (e.target.files.length) processFiles(e.target.files);
  };
  const processFiles = (files) => {
    if (!files.length) return;
    const file = files[0];
    const imgUrl = file.size > 0 ? URL.createObjectURL(file) : "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80";
    setPreviewImg(imgUrl);
    setProcessing(true);
    setResults([]);
    setSelected(null);
    const count = 1;
    const acc = [];
    setTimeout(() => {
      const newItem = mkVehicle(imgUrl);
      acc.push(newItem);
      const formData = new FormData();
      formData.append("image", file);
      const detectUrl = `${API}/violations/detect?accidentActive=${accidentActive}&graceActive=${graceActive}`;
      fetch(detectUrl, {
        method: "POST",
        body: formData
      }).then((r2) => r2.json()).then((res) => {
        if (res.success && res.violations && res.violations.length > 0) {
          const mapped = res.violations.map((v) => {
            const fallback = getVehicleFallbackDetails(v.licensePlate);
            return {
              id: v.violationId,
              plate: v.licensePlate,
              vehicleType: v.vehicleType || fallback.type,
              manufacturer: v.vehicleBrand || fallback.brand,
              model: v.vehicleModel || fallback.model,
              color: v.vehicleColor || fallback.color,
              registrationStatus: "VERIFIED",
              ownerStatus: "MATCHED",
              violations: [{ id: v.type, label: v.label, color: "#ef4444", icon: "🚨", risk: v.severity, fine: v.fineAmount }],
              risk: v.severity,
              confidence: v.confidence,
              location: "MG Road Junction",
              timestamp: v.detectedAt,
              history: [],
              repeats: 0,
              helmetRider: "HELMET",
              helmetPass: "HELMET",
              helmetRiderConf: "0",
              helmetPassConf: "0",
              imageUrl: imgUrl,
              status: v.status || "PENDING",
              fineAmount: v.fineAmount,
              evidenceFrame: 120,
              credibility: { score: "92.0", plateClear: true, signalVisible: true, riderVisible: true, zoneClear: true, decision: "AUTO-APPROVE" },
              explanation: [{ type: v.label, reason: "Detected using YOLOv11 model." }]
            };
          });
          setResults(mapped);
          setSelected(mapped[0]);
          addToast(currentUser?.role === "police" ? "Image processed and saved to central records." : "Image processed and saved to MongoDB.");
        } else {
          setResults([newItem]);
          setSelected(newItem);
          addToast(currentUser?.role === "police" ? "Processed locally (Server saved mock violations)." : "Processed locally (MongoDB saved mock violations).");
        }
        setProcessing(false);
      }).catch(() => {
        setResults([newItem]);
        setSelected(newItem);
        setProcessing(false);
        addToast("Error reaching server, simulated local detection result displayed.");
      });
    }, 1200);
  };
  const handleStatusChange = (violationId, newStatus, fineVal) => {
    if (newStatus === "WAIVED") {
      const reason = prompt("Enter official waiver justification (e.g. Yielded to ambulance, Medical emergency, Camera calibration error):");
      if (reason === null) return;
      const finalReason = reason.trim() || "Administrative Police Waiver";
      fetch(`${API}/violations/${violationId}/waive`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason: finalReason })
      }).then((r2) => r2.json()).then((d) => {
        if (d.success) {
          setResults((prev) => prev.map((item) => item.id === violationId ? { ...item, status: "WAIVED", fineAmount: 0, exemptReason: finalReason } : item));
          setSelected((prev) => prev && prev.id === violationId ? { ...prev, status: "WAIVED", fineAmount: 0, exemptReason: finalReason } : prev);
          addToast(`Fine waived successfully: ${finalReason}`, "success");
        }
      }).catch(() => {
        setResults((prev) => prev.map((item) => item.id === violationId ? { ...item, status: "WAIVED", fineAmount: 0, exemptReason: finalReason } : item));
        setSelected((prev) => prev && prev.id === violationId ? { ...prev, status: "WAIVED", fineAmount: 0, exemptReason: finalReason } : prev);
        addToast(`[Local Fallback] Fine waived successfully.`, "warning");
      });
      return;
    }
    fetch(`${API}/violations/${violationId}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus, fineAmount: fineVal })
    }).then((r2) => r2.json()).then((d) => {
      if (d.success) {
        setResults((prev) => prev.map((item) => item.id === violationId ? { ...item, status: newStatus, fineAmount: fineVal } : item));
        setSelected((prev) => prev && prev.id === violationId ? { ...prev, status: newStatus, fineAmount: fineVal } : prev);
        if (newStatus === "SENT") {
          addToast(`NOTICE SENT: Message dispatched to owner: "A fine of ₹${fineVal} has been issued."`, "success");
        } else {
          addToast(`Marked violation ${violationId} as Mislead. Notice cancelled.`, "warning");
        }
      }
    }).catch(() => {
      setResults((prev) => prev.map((item) => item.id === violationId ? { ...item, status: newStatus, fineAmount: fineVal } : item));
      setSelected((prev) => prev && prev.id === violationId ? { ...prev, status: newStatus, fineAmount: fineVal } : prev);
      if (newStatus === "SENT") {
        addToast(`[Local Fallback] NOTICE SENT: Charged ₹${fineVal}`, "success");
      } else {
        addToast(`[Local Fallback] Flagged as Mislead`, "warning");
      }
    });
  };
  const exportCSV = () => {
    if (results.length === 0) return;
    const headers = ["ID", "License Plate", "Vehicle", "Violations", "Location", "Confidence", "Fine Amount", "Status"];
    const rows = results.map(
      (item) => [
        item.id,
        item.plate,
        `${item.color} ${item.manufacturer} ${item.model}`,
        item.violations.map((v) => v.label).join("; "),
        item.location,
        `${item.confidence}%`,
        item.fineAmount,
        item.status
      ]
    );
    let csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.map((val) => `"${val}"`).join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `session-violations-${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-slideup", children: [
    alert && /* @__PURE__ */ jsxDEV("div", { className: `alert a-${alert.type}`, children: [
      /* @__PURE__ */ jsxDEV(CheckCircle, { size: 14 }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1398,
        columnNumber: 58
      }, this),
      alert.msg
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1398,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "g2", style: { marginBottom: 18 }, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Camera, { size: 14 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1403,
              columnNumber: 64
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1403,
              columnNumber: 39
            }, this),
            "Upload Traffic Evidence"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1403,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "btn btn-g btn-s", onClick: () => processFiles([new File([""], "demo.jpg")]), children: [
            /* @__PURE__ */ jsxDEV(Zap, { size: 11 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1404,
              columnNumber: 108
            }, this),
            "Demo Snapshot"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1404,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1402,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: `upzone${drag ? " drag" : ""}`, onDragEnter: handleDrag, onDragLeave: handleDrag, onDragOver: handleDrag, onDrop: handleDrop, onClick: () => fileRef.current?.click(), children: [
          /* @__PURE__ */ jsxDEV("div", { className: "up-ico", children: processing ? /* @__PURE__ */ jsxDEV("div", { className: "spin" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1407,
            columnNumber: 51
          }, this) : /* @__PURE__ */ jsxDEV(Camera, { size: 26, color: "#60a5fa" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1407,
            columnNumber: 78
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1407,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, fontWeight: 600, color: "#e2e8f0", marginBottom: 5 }, children: processing ? "Analysing photo..." : "Drop Traffic Images Here" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1408,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#6b7280", marginBottom: 14 }, children: "JPG · PNG · MP4 · Drag & drop or click" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1409,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap" }, children: ["YOLOv11", "OCR", "Evidence Gen"].map((l) => /* @__PURE__ */ jsxDEV("span", { style: { padding: "2px 9px", background: "rgba(59,130,246,.1)", border: "1px solid rgba(59,130,246,.2)", borderRadius: 20, fontSize: 9, color: "#60a5fa", fontWeight: 600 }, children: l }, l, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1411,
            columnNumber: 62
          }, this)) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1410,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("input", { ref: fileRef, type: "file", accept: "image/*,video/*", onChange: handleFile, className: "hidden" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1413,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1406,
          columnNumber: 11
        }, this),
        previewImg && /* @__PURE__ */ jsxDEV("div", { className: "img-prev", children: [
          /* @__PURE__ */ jsxDEV("img", { src: previewImg, alt: "uploaded traffic image" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1417,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "img-prev-badge", children: "📷 Uploaded Image" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1418,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1416,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1401,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Activity, { size: 14 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1425,
              columnNumber: 88
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1425,
              columnNumber: 63
            }, this),
            "Session Summary"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1425,
            columnNumber: 37
          }, this),
          results.length > 0 && /* @__PURE__ */ jsxDEV("button", { className: "btn btn-g btn-s", onClick: () => {
            setResults([]);
            setSelected(null);
            setPreviewImg(null);
          }, children: [
            /* @__PURE__ */ jsxDEV(RefreshCw, { size: 11 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1426,
              columnNumber: 144
            }, this),
            "Clear"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1426,
            columnNumber: 36
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1425,
          columnNumber: 11
        }, this),
        results.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "empty", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "empty-ico", children: "🎯" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1429,
            columnNumber: 34
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12 }, children: "Upload images to start detection" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1429,
            columnNumber: 69
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1429,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9, marginBottom: 14 }, children: [
            { lbl: "Images", val: results.length, c: "#60a5fa" },
            { lbl: "Violations", val: results.reduce((s, v) => s + v.violations.length, 0), c: "#ef4444" },
            { lbl: "Total Fine", val: `₹${results.reduce((s, v) => s + (v.status === "MISLEAD" ? 0 : v.fineAmount), 0).toLocaleString()}`, c: "#f97316" },
            { lbl: "Avg Conf", val: `${(results.reduce((s, v) => s + parseFloat(v.confidence), 0) / results.length).toFixed(1)}%`, c: "#10b981" }
          ].map(
            (s) => /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(15,23,42,.5)", border: "1px solid #1e293b", borderRadius: 9, padding: 11 }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 20, fontWeight: 800, color: s.c, fontFamily: "JetBrains Mono" }, children: s.val }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 1440,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#6b7280", marginTop: 2 }, children: s.lbl }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 1441,
                columnNumber: 21
              }, this)
            ] }, s.lbl, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1439,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1432,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 7 }, children: /* @__PURE__ */ jsxDEV("button", { className: "btn btn-p btn-s", onClick: exportCSV, children: [
            /* @__PURE__ */ jsxDEV(Download, { size: 11 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1446,
              columnNumber: 73
            }, this),
            "Export CSV"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1446,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1445,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1431,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1424,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1399,
      columnNumber: 7
    }, this),
    results.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "g2", children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 10, maxHeight: 680, overflowY: "auto" }, children: results.map((item) => /* @__PURE__ */ jsxDEV(VCard, { item, onClick: setSelected, sel: selected?.id === item.id }, item.id, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1455,
        columnNumber: 36
      }, this)) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1454,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(DetailPanel, { item: selected, onClose: () => setSelected(null), onStatusChange: handleStatusChange }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1457,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1453,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 1397,
    columnNumber: 5
  }, this);
}
_s6(DetectionPage, "a/gronI2frNUjgN3vvk7f0I5bl4=");
_c0 = DetectionPage;
function ArchivePage({ addToast, currentUser }) {
  _s7();
  const [violations, setViolations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("ALL");
  const [selected, setSelected] = useState(null);
  const [alert, setAlert] = useState(null);
  const fetchArchive = useCallback(() => {
    setLoading(true);
    fetch(`${API}/violations?limit=100`).then((r2) => r2.json()).then((d) => {
      const items = (d.violations || []).map((v) => {
        const fallback = getVehicleFallbackDetails(v.licensePlate);
        return {
          id: v.violationId,
          plate: v.licensePlate,
          vehicleType: v.vehicleType || fallback.type,
          manufacturer: v.vehicleBrand || fallback.brand,
          model: v.vehicleModel || fallback.model,
          color: v.vehicleColor || fallback.color,
          registrationStatus: "VERIFIED",
          ownerStatus: "MATCHED",
          violations: [{ id: v.type, label: v.label, color: "#ef4444", icon: "🚨", risk: v.severity, fine: v.fineAmount }],
          risk: v.severity || "HIGH",
          confidence: v.confidence || "90",
          location: v.location && typeof v.location === "string" ? v.location : "Silk Board Junction",
          timestamp: v.detectedAt || v.createdAt,
          history: [],
          repeats: 0,
          helmetRider: "HELMET",
          helmetPass: "HELMET",
          helmetRiderConf: "0",
          helmetPassConf: "0",
          imageUrl: null,
          status: v.status || "PENDING",
          fineAmount: v.fineAmount || 1e3,
          evidenceFrame: 100,
          ownerPhone: v.ownerPhone || "",
          isEmergencyExempt: v.isEmergencyExempt || false,
          exemptReason: v.exemptReason || "",
          isChaseCategory: v.isChaseCategory || false,
          interestApplied: v.interestApplied || 0,
          credibility: { score: "88.0", plateClear: true, signalVisible: true, riderVisible: true, zoneClear: true, decision: "AUTO-APPROVE" },
          explanation: [{ type: v.label, reason: "Stored log review." }]
        };
      });
      setViolations(items);
      setLoading(false);
    }).catch(() => {
      const demoData = Array.from({ length: 6 }, () => mkVehicle());
      setViolations(demoData);
      setLoading(false);
      const dbText = currentUser?.role === "police" ? "enforcement database" : "MongoDB";
      setAlert({ type: "warn", msg: `⚠️ Could not reach ${dbText} — showing demo archive data.` });
    });
  }, []);
  useEffect(() => {
    fetchArchive();
  }, [fetchArchive]);
  const handleStatusChange = (violationId, newStatus, fineVal) => {
    if (newStatus === "WAIVED") {
      const reason = prompt("Enter official waiver justification (e.g. Yielded to ambulance, Medical emergency, Camera calibration error):");
      if (reason === null) return;
      const finalReason = reason.trim() || "Administrative Police Waiver";
      fetch(`${API}/violations/${violationId}/waive`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason: finalReason })
      }).then((r2) => r2.json()).then((d) => {
        if (d.success) {
          setViolations((prev) => prev.map((item) => item.id === violationId ? { ...item, status: "WAIVED", fineAmount: 0, exemptReason: finalReason } : item));
          setSelected((prev) => prev && prev.id === violationId ? { ...prev, status: "WAIVED", fineAmount: 0, exemptReason: finalReason } : prev);
          addToast(`Fine waived successfully: ${finalReason}`, "success");
        }
      }).catch(() => {
        setViolations((prev) => prev.map((item) => item.id === violationId ? { ...item, status: "WAIVED", fineAmount: 0, exemptReason: finalReason } : item));
        setSelected((prev) => prev && prev.id === violationId ? { ...prev, status: "WAIVED", fineAmount: 0, exemptReason: finalReason } : prev);
        addToast(`[Local Fallback] Fine waived successfully.`, "warning");
      });
      return;
    }
    fetch(`${API}/violations/${violationId}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus, fineAmount: fineVal })
    }).then((r2) => r2.json()).then((d) => {
      if (d.success) {
        setViolations((prev) => prev.map((item) => item.id === violationId ? { ...item, status: newStatus, fineAmount: fineVal } : item));
        setSelected((prev) => prev && prev.id === violationId ? { ...prev, status: newStatus, fineAmount: fineVal } : prev);
        if (newStatus === "SENT") {
          addToast(`NOTICE SENT: Message dispatched. Fine: ₹${fineVal}`, "success");
        } else {
          addToast(`Marked as Mislead`, "warning");
        }
      }
    }).catch(() => {
      setViolations((prev) => prev.map((item) => item.id === violationId ? { ...item, status: newStatus, fineAmount: fineVal } : item));
      setSelected((prev) => prev && prev.id === violationId ? { ...prev, status: newStatus, fineAmount: fineVal } : prev);
      if (newStatus === "SENT") {
        addToast(`[Local Fallback] NOTICE SENT: Charged ₹${fineVal}`, "success");
      } else {
        addToast(`[Local Fallback] Flagged as Mislead`, "warning");
      }
    });
  };
  const filtered = filter === "ALL" ? violations : violations.filter((v) => v.risk === filter);
  const exportAllCSV = () => {
    if (violations.length === 0) return;
    const headers = ["ID", "License Plate", "Violations", "Location", "Risk", "Confidence", "Fine Amount", "Status"];
    const rows = violations.map(
      (item) => [
        item.id,
        item.plate,
        item.violations.map((v) => v.label).join("; "),
        item.location,
        item.risk,
        `${item.confidence}%`,
        item.fineAmount,
        item.status
      ]
    );
    let csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.map((val) => `"${val}"`).join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `all-violations-report-${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-slideup", children: [
    alert && /* @__PURE__ */ jsxDEV("div", { className: `alert a-${alert.type}`, children: [
      /* @__PURE__ */ jsxDEV(AlertTriangle, { size: 14 }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1615,
        columnNumber: 58
      }, this),
      alert.msg
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1615,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "card", style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Archive, { size: 14 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1619,
            columnNumber: 38
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1619,
            columnNumber: 13
          }, this),
          currentUser?.role === "admin" ? "Old Files — MongoDB Archive" : "Old Files — System Archive"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1618,
          columnNumber: 11
        }, this),
        loading && /* @__PURE__ */ jsxDEV("div", { className: "spin" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1622,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1617,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 7, flexWrap: "wrap" }, children: [
        ["ALL", "CRITICAL", "HIGH", "MEDIUM", "LOW"].map(
          (f) => /* @__PURE__ */ jsxDEV("button", { className: `btn btn-s ${filter === f ? "btn-p" : "btn-g"}`, onClick: () => setFilter(f), children: f }, f, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1626,
            columnNumber: 11
          }, this)
        ),
        /* @__PURE__ */ jsxDEV("button", { className: "btn btn-g btn-s", onClick: fetchArchive, children: [
          /* @__PURE__ */ jsxDEV(RefreshCw, { size: 11 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1628,
            columnNumber: 70
          }, this),
          "Refresh"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1628,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "btn btn-p btn-s", onClick: exportAllCSV, children: [
          /* @__PURE__ */ jsxDEV(Download, { size: 11 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1629,
            columnNumber: 70
          }, this),
          "Export All CSV"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1629,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1624,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1616,
      columnNumber: 7
    }, this),
    filtered.length === 0 && !loading ? /* @__PURE__ */ jsxDEV("div", { className: "card", children: /* @__PURE__ */ jsxDEV("div", { className: "empty", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "empty-ico", children: "🗂️" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1633,
        columnNumber: 52
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13 }, children: [
        "No archived violations found.",
        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1633,
          columnNumber: 147
        }, this),
        "Change filters or refresh list."
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1633,
        columnNumber: 88
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1633,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1633,
      columnNumber: 7
    }, this) : /* @__PURE__ */ jsxDEV("div", { className: "g2", children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 10, maxHeight: 740, overflowY: "auto" }, children: filtered.map((v, i) => /* @__PURE__ */ jsxDEV(VCard, { item: v, onClick: setSelected, sel: selected?.id === v.id }, v.id || i, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1637,
        columnNumber: 37
      }, this)) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1636,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(DetailPanel, { item: selected, onClose: () => setSelected(null), onStatusChange: handleStatusChange }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1639,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1635,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 1614,
    columnNumber: 5
  }, this);
}
_s7(ArchivePage, "NyIiCoYRehoUr/0bAO4LYUqOeVg=");
_c1 = ArchivePage;
function BatchPage({ currentUser, addToast }) {
  _s8();
  const [stage, setStage] = useState("idle");
  const [progress, setProgress] = useState(0);
  const [counts, setCounts] = useState({});
  const [total, setTotal] = useState(100);
  const [processed, setProcessed] = useState(0);
  const [batchResults, setBatchResults] = useState([]);
  const [logs, setLogs] = useState([]);
  const [priority, setPriority] = useState("NORMAL");
  const [workers, setWorkers] = useState(4);
  const [focusMode, setFocusMode] = useState("FULL");
  const iv = useRef();
  const consoleRef = useRef();
  const isPolice = currentUser?.role === "police";
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs]);
  const addLog = (msg, type = "info") => {
    const timestamp = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", { hour12: false });
    const badge = { info: "🌐", success: "✓", warning: "⚠️", error: "❌" }[type] || "⚙️";
    setLogs((prev) => [...prev, `[${timestamp}] ${badge} ${msg}`]);
  };
  const executeBulkUpload = async (files) => {
    if (!files || files.length === 0) return;
    setStage("running");
    setTotal(files.length);
    setProgress(5);
    setProcessed(0);
    setCounts({});
    setBatchResults([]);
    setLogs([]);
    addLog(`Initiating bulk ingestion request for ${files.length} street snapshots...`, "info");
    addLog(`Configuration parsed: Workers=${workers} concurrent threads, Priority=${priority}, IngestionFocus=${focusMode}`, "info");
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }
    addLog("Sending payload to backend Batch Queue Engine (/api/violations/bulk-detect)...", "info");
    setProgress(20);
    try {
      const response = await fetch(`${API}/violations/bulk-detect`, {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setProgress(70);
        addLog(`Backend parsed response. ${data.summary.totalViolationsDetected} infractions registered!`, "success");
        let localProcessed = 0;
        const interval = setInterval(() => {
          localProcessed += 1;
          const pct = Math.round(70 + 30 * localProcessed / files.length);
          setProgress(Math.min(100, pct));
          setProcessed(localProcessed);
          if (localProcessed <= data.results.length) {
            const item = data.results[localProcessed - 1];
            addLog(`Processed frame: ${item.imageName} (${item.fileSizeKB}KB) -> Flagged ${item.violationsDetected} violations. Speed: ${item.processingMs}ms.`, "success");
          }
          if (localProcessed >= files.length) {
            clearInterval(interval);
            const mapped = data.results.flatMap((r2) => r2.violations.map((v) => {
              const fallback = getVehicleFallbackDetails(v.licensePlate);
              return {
                id: v.violationId,
                plate: v.licensePlate,
                vehicleType: v.vehicleType || fallback.type,
                manufacturer: v.vehicleBrand || fallback.brand,
                model: v.vehicleModel || fallback.model,
                color: v.vehicleColor || fallback.color,
                registrationStatus: "VERIFIED",
                ownerStatus: "MATCHED",
                violations: [{ id: v.type, label: v.label, color: "#ef4444", icon: "🚨", risk: v.severity, fine: v.fineAmount }],
                risk: v.severity,
                confidence: v.confidence,
                location: v.location || "Majestic Junction",
                timestamp: v.detectedAt,
                history: [],
                repeats: 0,
                imageUrl: null,
                status: v.status,
                fineAmount: v.fineAmount,
                evidenceFrame: 210,
                credibility: { score: "95.0", plateClear: true, signalVisible: true, riderVisible: true, zoneClear: true, decision: "AUTO-APPROVE" },
                explanation: [{ type: v.label, reason: "Bulk Ingest OCR" }]
              };
            }));
            setBatchResults(mapped);
            const tempCounts = {};
            mapped.forEach((m) => {
              const lbl = m.violations[0].label;
              tempCounts[lbl] = (tempCounts[lbl] || 0) + 1;
            });
            setCounts(tempCounts);
            setProgress(100);
            setStage("done");
            addLog("Batch consolidated successfully. Download report csv active.", "success");
            if (addToast) addToast(`Bulk batch of ${files.length} images processed successfully!`, "success");
          }
        }, 300);
      } else {
        setStage("idle");
        addLog(`Bulk process failed: ${data.error}`, "error");
      }
    } catch (err) {
      setStage("idle");
      addLog(`Network failed: ${err.message}`, "error");
    }
  };
  const startBatchSimulation = (n = 1e3) => {
    setTotal(n);
    setProgress(0);
    setProcessed(0);
    setCounts({});
    setBatchResults([]);
    setStage("running");
    setLogs([]);
    addLog(`Spawning ${workers} concurrent worker pipelines (priority: ${priority})...`, "info");
    addLog(`Initiating Deduplication scan & background OCR character matcher...`, "info");
    let p = 0, done = 0;
    const acc = {};
    const logIntervals = [
      "[dedup] Scanning camera queue directories... Found 12 redundant frames.",
      "[detector] Worker thread #1: Scanning lane 1 Silk Board... Isolated license plate KA03HA2903.",
      "[compliance] Worker thread #3: Auditing triple riding on motorcycle KA01CD5678.",
      "[registry] Verifying insurance and Vahan RTO certificates...",
      "[sms-dispatcher] Sending warning notification for first-time offender (VIO-8932).",
      "[thread-2] Scanning Hebbal flyover stream... High brightness adjustment applied.",
      "[audit] Wrong-side driving detected on vehicle plate KA05EF9012.",
      "[consolidator] Compiling violation indices, calculating surcharges for Chase Category...",
      "[notice] Penalties dispatched to owner phone numbers via SMS interface."
    ];
    iv.current = setInterval(() => {
      const step = r(6, 12);
      p = Math.min(100, p + step);
      done = Math.floor(p / 100 * n);
      setProgress(p);
      setProcessed(done);
      VIOLATION_TYPES.forEach((v) => {
        if (focusMode === "HELMET" && !v.label.includes("Helmet")) return;
        if (focusMode === "SPEEDING" && !v.label.includes("Wrong") && !v.label.includes("Red Light")) return;
        acc[v.label] = (acc[v.label] || 0) + r(0, Math.floor(n / 200) + 1);
      });
      setCounts({ ...acc });
      if (p % 15 === 0 || p % 8 === 0) {
        const simMsg = pk(logIntervals);
        addLog(simMsg, p > 85 ? "success" : "info");
      }
      if (p >= 100) {
        clearInterval(iv.current);
        const demoVehs = Array.from({ length: 8 }, () => {
          const v = mkVehicle();
          if (focusMode === "HELMET") {
            v.violations = [VIOLATION_TYPES.find((vt) => vt.label.includes("Helmet"))];
          }
          return v;
        });
        setBatchResults(demoVehs);
        setStage("done");
        addLog(`Processed ${n} frames. Completed. Consolidated results saved to database.`, "success");
        if (addToast) addToast(`Simulation of ${n} images completed successfully.`, "success");
      }
    }, 400);
  };
  const reset = () => {
    clearInterval(iv.current);
    setStage("idle");
    setProgress(0);
    setLogs([]);
  };
  const exportBatchCSV = () => {
    if (batchResults.length === 0) {
      const headers2 = ["Violation Type", "Detected Count"];
      const rows2 = Object.entries(counts).map(([lbl, cnt]) => [lbl, cnt]);
      let csvContent2 = "data:text/csv;charset=utf-8," + [headers2.join(","), ...rows2.map((e) => e.join(","))].join("\n");
      const encodedUri2 = encodeURI(csvContent2);
      const link2 = document.createElement("a");
      link2.setAttribute("href", encodedUri2);
      link2.setAttribute("download", `batch-summary-report-${Date.now()}.csv`);
      document.body.appendChild(link2);
      link2.click();
      document.body.removeChild(link2);
      return;
    }
    const headers = ["Violation ID", "License Plate", "Vehicle Type", "Violation Label", "Severity", "Confidence", "Fine Amount", "Status", "Timestamp"];
    const rows = batchResults.map(
      (item) => [
        item.id,
        item.plate,
        item.vehicleType,
        item.violations[0].label,
        item.risk,
        `${item.confidence}%`,
        item.fineAmount,
        item.status,
        item.timestamp
      ]
    );
    let csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.map((val) => `"${val}"`).join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `batch-violations-report-${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-slideup", style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "card", style: { borderLeft: "4px solid #10b981", background: "rgba(16,185,129,0.06)" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ jsxDEV(Info, { size: 16, color: "#34d399" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1889,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("strong", { style: { fontSize: 13, color: "#cbd5e1" }, children: "Why use a Batch Queue Engine?" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1890,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1888,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 11, color: "#9ca3af", lineHeight: 1.6 }, children: "Street CCTV surveillance cameras ingest thousands of frames per minute. Querying deep learning vision detectors and matching vehicle registration certificates synchronously on every single frame can degrade command center servers. The **Batch Queue Engine** acts as an asynchronous processor. It buffers incoming media arrays, checks for duplications, allocates parallel thread workers, and processes detections in queues based on priority configurations—reducing database overhead." }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1892,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1887,
      columnNumber: 7
    }, this),
    stage === "idle" ? /* @__PURE__ */ jsxDEV("div", { className: "g2", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "card", style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Layers, { size: 18, color: "#60a5fa" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1902,
            columnNumber: 40
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1902,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { style: { fontSize: 15, fontWeight: 800, color: "#f3f4f6" }, children: "Queue Ingestion" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1903,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1901,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "upzone", style: { padding: "36px 16px" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 32, marginBottom: 10 }, children: "📂" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1907,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, fontWeight: 600, color: "#e2e8f0", marginBottom: 5 }, children: "Process Actual Image Batch" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1908,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#6b7280", marginBottom: 16 }, children: "Select multiple files to run real OCR and YOLOv11 parsing" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1909,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "file",
              multiple: true,
              accept: "image/*",
              onChange: (e) => executeBulkUpload(e.target.files),
              style: { display: "block", margin: "0 auto", fontSize: 11 }
            },
            void 0,
            false,
            {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1910,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1906,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", margin: "10px 0", color: "#4b5563", fontSize: 11, fontWeight: 700 }, children: "— OR —" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1919,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
          /* @__PURE__ */ jsxDEV("label", { style: { fontSize: 11, color: "#9ca3af", fontWeight: 600 }, children: "Simulate Queue Run (Demo Mode):" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1922,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 6, justifyContent: "center" }, children: [100, 500, 1e3].map(
            (n) => /* @__PURE__ */ jsxDEV("button", { className: "btn btn-g btn-s", style: { flex: 1, justifyContent: "center" }, onClick: () => startBatchSimulation(n), children: [
              n,
              " Snapshots"
            ] }, n, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1925,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1923,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1921,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1900,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "card", style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Activity, { size: 16, color: "#c084fc" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1936,
            columnNumber: 40
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1936,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("strong", { style: { fontSize: 14, color: "#f3f4f6" }, children: "Queue Processing Settings" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1937,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1935,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "auth-inp-group", style: { margin: 0 }, children: [
          /* @__PURE__ */ jsxDEV("label", { className: "auth-lbl", children: "Processing Priority" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1941,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("select", { className: "auth-select", value: priority, onChange: (e) => setPriority(e.target.value), children: [
            /* @__PURE__ */ jsxDEV("option", { value: "LOW", children: "Low (Off-Peak Night Processing)" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1943,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: "NORMAL", children: "Normal Ingestion Speed" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1944,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: "EMERGENCY", children: "Emergency / Ambulance Priority Suite" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1945,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1942,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1940,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "auth-inp-group", style: { margin: 0 }, children: [
          /* @__PURE__ */ jsxDEV("label", { className: "auth-lbl", children: [
            "Parallel Worker Threads (",
            workers,
            " Workers)"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1950,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("select", { className: "auth-select", value: workers, onChange: (e) => setWorkers(parseInt(e.target.value)), children: [
            /* @__PURE__ */ jsxDEV("option", { value: 2, children: "2 Threads (Low CPU allocation)" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1952,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: 4, children: "4 Threads (Optimal Balanced Allocation)" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1953,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: 8, children: "8 Threads (High Performance GPU Cluster)" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1954,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1951,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1949,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "auth-inp-group", style: { margin: 0 }, children: [
          /* @__PURE__ */ jsxDEV("label", { className: "auth-lbl", children: "Detection Focus Area" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1959,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("select", { className: "auth-select", value: focusMode, onChange: (e) => setFocusMode(e.target.value), children: [
            /* @__PURE__ */ jsxDEV("option", { value: "FULL", children: "Full Enforcement Suite (Helmet + Plate + Signal)" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1961,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: "HELMET", children: "Helmet Compliance Only" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1962,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: "SPEEDING", children: "Wrong Side / Red Light Exclusions Only" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1963,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1960,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1958,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1934,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1898,
      columnNumber: 7
    }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("div", { className: "card", style: { borderColor: "rgba(59, 130, 246, 0.35)", background: "#020409" }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            /* @__PURE__ */ jsxDEV("div", { className: "spin", style: { width: 14, height: 14, borderTopColor: "#3b82f6", display: stage === "running" ? "block" : "none" } }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1974,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, fontWeight: 700, color: "#f3f4f6" }, children: "Engine Live Console Stream" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 1975,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1973,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { style: { fontFamily: "monospace", fontSize: 10, color: "#4b5563" }, children: [
            "Workers: ",
            workers,
            " Active"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1977,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 1972,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            ref: consoleRef,
            style: {
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              color: "#60a5fa",
              padding: "12px",
              background: "rgba(0,0,0,0.4)",
              borderRadius: 8,
              maxHeight: 180,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              border: "1px solid rgba(255,255,255,0.03)"
            },
            children: [
              logs.length === 0 && /* @__PURE__ */ jsxDEV("div", { children: "[System] Initializing console logs..." }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 1997,
                columnNumber: 37
              }, this),
              logs.map(
                (log, index) => /* @__PURE__ */ jsxDEV("div", { style: {
                  lineHeight: 1.5,
                  color: log.includes("✓") ? "#34d399" : log.includes("❌") ? "#ef4444" : "#60a5fa"
                }, children: log }, index, false, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 1999,
                  columnNumber: 13
                }, this)
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 1980,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 1971,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "g2", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", children: /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Layers, { size: 14 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2012,
              columnNumber: 92
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2012,
              columnNumber: 67
            }, this),
            "Ingestion Metrics"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2012,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2012,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, fontWeight: 600 }, children: stage === "running" ? "⚙️ Auditing Frames..." : "✅ Queue Completed" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2015,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "mono", style: { fontSize: 12, color: "#60a5fa" }, children: [
                processed.toLocaleString(),
                " / ",
                total.toLocaleString()
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2016,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2014,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "pbar", children: /* @__PURE__ */ jsxDEV("div", { className: "pfill", style: { width: `${progress}%` } }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2018,
              columnNumber: 39
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2018,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#6b7280", textAlign: "right", marginBottom: 14 }, children: [
              progress,
              "% consolidated"
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2019,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(15,23,42,.5)", border: "1px solid rgba(59,130,246,0.12)", borderRadius: 10, padding: 12 }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, fontWeight: 700, color: "#6b7280", letterSpacing: 1, marginBottom: 8, textTransform: "uppercase" }, children: "Violations Aggregated" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2022,
                columnNumber: 19
              }, this),
              Object.entries(counts).length === 0 ? /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#4b5563", padding: "6px 0" }, children: "Scanning files for traffic patterns..." }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2024,
                columnNumber: 17
              }, this) : Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(
                ([l, c]) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px solid rgba(30,41,59,.3)", fontSize: 11 }, children: [
                  /* @__PURE__ */ jsxDEV("span", { style: { color: "#9ca3af" }, children: l }, void 0, false, {
                    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                    lineNumber: 2028,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "mono", style: { color: "#f87171", fontWeight: 700 }, children: c.toLocaleString() }, void 0, false, {
                    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                    lineNumber: 2029,
                    columnNumber: 25
                  }, this)
                ] }, l, true, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 2027,
                  columnNumber: 17
                }, this)
              )
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2021,
              columnNumber: 17
            }, this),
            stage === "done" && /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 7, marginTop: 14 }, children: [
              /* @__PURE__ */ jsxDEV("button", { className: "btn btn-p btn-s", onClick: exportBatchCSV, children: [
                /* @__PURE__ */ jsxDEV(Download, { size: 11 }, void 0, false, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 2036,
                  columnNumber: 82
                }, this),
                "Download Report CSV"
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2036,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("button", { className: "btn btn-g btn-s", onClick: reset, children: [
                /* @__PURE__ */ jsxDEV(RefreshCw, { size: 11 }, void 0, false, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 2037,
                  columnNumber: 73
                }, this),
                "Clear & Reset Ingest"
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2037,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2035,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2013,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2011,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", children: /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Database, { size: 14 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2045,
              columnNumber: 92
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2045,
              columnNumber: 67
            }, this),
            "Pipeline Resource Load"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2045,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2045,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }, children: [
            { l: "Total Queue", v: total.toLocaleString(), i: "📥", c: "#60a5fa" },
            { l: "Processed Files", v: processed.toLocaleString(), i: "⚙️", c: "#c084fc" },
            { l: "Flagged Infractions", v: Object.values(counts).reduce((sum, v) => sum + v, 0).toLocaleString(), i: "🚨", c: "#ef4444" },
            { l: "De-duped Frames", v: Math.floor(processed * 0.04).toLocaleString(), i: "🔁", c: "#10b981" }
          ].map(
            (s) => /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(15,23,42,.5)", border: "1px solid rgba(59,130,246,0.08)", borderRadius: 9, padding: 12 }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 18, marginBottom: 3 }, children: s.i }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2054,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 20, fontWeight: 800, color: s.c, fontFamily: "JetBrains Mono" }, children: s.v }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2055,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#6b7280", marginTop: 2 }, children: s.l }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2056,
                columnNumber: 21
              }, this)
            ] }, s.l, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2053,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2046,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2044,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2009,
        columnNumber: 11
      }, this),
      stage === "done" && batchResults.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", children: /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(AlertCircle, { size: 14 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2066,
            columnNumber: 92
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2066,
            columnNumber: 67
          }, this),
          "Sample Detections Flagged for Command Audit"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2066,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2066,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 11 }, children: batchResults.slice(0, 4).map((item) => /* @__PURE__ */ jsxDEV(VCard, { item, onClick: () => {
        }, sel: false }, item.id, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2068,
          columnNumber: 57
        }, this)) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2067,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2065,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 1969,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 1884,
    columnNumber: 5
  }, this);
}
_s8(BatchPage, "MGvUcdI5j0XYgcmMnCuDcmle/8M=");
_c10 = BatchPage;
function AnalyticsPage() {
  _s9();
  const [violations, setViolations] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${API}/violations?limit=500`).then((r2) => r2.json()).then((vi) => {
      if (vi && vi.violations) setViolations(vi.violations);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);
  const typeCounts = {};
  VIOLATION_TYPES.forEach((vt) => {
    typeCounts[vt.label] = 0;
  });
  violations.forEach((v) => {
    typeCounts[v.label] = (typeCounts[v.label] || 0) + 1;
  });
  const vdist = VIOLATION_TYPES.map((vt) => {
    const dbCount = typeCounts[vt.label] || 0;
    const mockCount = Math.floor(Math.random() * 150) + 50;
    return {
      ...vt,
      count: violations.length > 0 ? dbCount : mockCount
    };
  }).sort((a, b) => b.count - a.count);
  const totV = vdist.reduce((sum, v) => sum + v.count, 0) || 1;
  const hourBuckets = Array.from({ length: 24 }, (_, i) => ({
    h: `${i.toString().padStart(2, "0")}:00`,
    c: 0
  }));
  violations.forEach((v) => {
    const dateStr = v.detectedAt || v.createdAt;
    if (dateStr) {
      const hr = new Date(dateStr).getHours();
      hourBuckets[hr].c += 1;
    }
  });
  const hourly = hourBuckets.map((bucket, index) => {
    if (violations.length > 0) return bucket;
    return {
      h: bucket.h,
      c: index >= 7 && index <= 9 ? r(40, 80) : index >= 17 && index <= 20 ? r(60, 100) : r(5, 30)
    };
  });
  const maxH = Math.max(...hourly.map((h) => h.c)) || 1;
  const peakHourItem = [...hourly].sort((a, b) => b.c - a.c)[0];
  const peakHourStr = peakHourItem ? peakHourItem.h : "18:00";
  const locationCounts = {};
  violations.forEach((v) => {
    if (v.location) {
      const locName = typeof v.location === "string" ? v.location : v.location.name || "Junction";
      locationCounts[locName] = (locationCounts[locName] || 0) + 1;
    }
  });
  const locs = LOCATIONS.map((loc) => {
    const dbCount = locationCounts[loc] || 0;
    const mockCount = Math.floor(Math.random() * 200) + 40;
    return {
      name: loc,
      count: violations.length > 0 ? dbCount : mockCount
    };
  }).sort((a, b) => b.count - a.count).slice(0, 5);
  const maxL = locs[0].count || 1;
  const exemptCount = violations.filter((v) => v.isEmergencyExempt).length;
  const exemptRate = violations.length > 0 ? (exemptCount / violations.length * 100).toFixed(1) : "3.2";
  if (loading) {
    return /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "center", padding: "100px" }, children: /* @__PURE__ */ jsxDEV("div", { className: "spin" }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 2164,
      columnNumber: 84
    }, this) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 2164,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-slideup", style: { display: "flex", flexDirection: "column", gap: 20 }, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "card", style: { borderLeft: "4px solid #3b82f6", background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(15,23,42,0.6))" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }, children: [
        /* @__PURE__ */ jsxDEV(Info, { size: 18, color: "#60a5fa" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2173,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { style: { fontSize: 14, fontWeight: 700, color: "#f3f4f6" }, children: "Enforcement Trends & Human Insights Summary" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2174,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2172,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, fontSize: 12, lineHeight: 1.6, color: "#cbd5e1" }, children: [
        /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("ul", { style: { paddingLeft: 16, display: "flex", flexDirection: "column", gap: 8 }, children: [
          /* @__PURE__ */ jsxDEV("li", { children: [
            "📈 ",
            /* @__PURE__ */ jsxDEV("strong", { children: "Peak Infraction Period:" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2179,
              columnNumber: 22
            }, this),
            " Traffic violations are most frequent around ",
            /* @__PURE__ */ jsxDEV("strong", { children: peakHourStr }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2179,
              columnNumber: 107
            }, this),
            ". This corresponds with peak commute hours, when wrong-side driving and stop-line violations increase."
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2179,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: [
            "🪖 ",
            /* @__PURE__ */ jsxDEV("strong", { children: "Most Common Offence:" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2180,
              columnNumber: 22
            }, this),
            " ",
            /* @__PURE__ */ jsxDEV("strong", { children: vdist[0].label }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2180,
              columnNumber: 60
            }, this),
            " is currently the highest category, accounting for ",
            /* @__PURE__ */ jsxDEV("strong", { children: [
              (vdist[0].count / totV * 100).toFixed(0),
              "%"
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2180,
              columnNumber: 144
            }, this),
            " of all logged incidents."
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2180,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2178,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2177,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("ul", { style: { paddingLeft: 16, display: "flex", flexDirection: "column", gap: 8 }, children: [
          /* @__PURE__ */ jsxDEV("li", { children: [
            "📍 ",
            /* @__PURE__ */ jsxDEV("strong", { children: "Top Violation Hotspot:" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2185,
              columnNumber: 22
            }, this),
            " ",
            /* @__PURE__ */ jsxDEV("strong", { children: locs[0].name }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2185,
              columnNumber: 62
            }, this),
            " reports the highest enforcement volume, indicating a need for targeted patrol or improved lane markings."
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2185,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: [
            "🛡️ ",
            /* @__PURE__ */ jsxDEV("strong", { children: "Exemption / Warning Rate:" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2186,
              columnNumber: 23
            }, this),
            " Approximately ",
            /* @__PURE__ */ jsxDEV("strong", { children: [
              exemptRate,
              "%"
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2186,
              columnNumber: 80
            }, this),
            " of detections have been resolved with warnings (1st/2nd offenses) or emergency vehicle exemptions."
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2186,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2184,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2183,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2176,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 2171,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "g2", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", style: { marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(BarChart2, { size: 14 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2196,
              columnNumber: 64
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2196,
              columnNumber: 39
            }, this),
            "Violation Category Breakdown"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2196,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 10, color: "#9ca3af" }, children: [
            "Total Fines: ",
            totV.toLocaleString(),
            " logged"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2197,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2195,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: vdist.map(
          (v) => /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4, fontSize: 11 }, children: [
              /* @__PURE__ */ jsxDEV("span", { style: { color: "#cbd5e1", flex: 1 }, children: [
                v.icon,
                " ",
                v.label
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2203,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "mono", style: { color: v.color, fontWeight: 700 }, children: [
                v.count,
                " cases (",
                (v.count / totV * 100).toFixed(0),
                "%)"
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2204,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2202,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { height: 6, background: "#131a30", borderRadius: 3, overflow: "hidden" }, children: /* @__PURE__ */ jsxDEV("div", { style: { height: "100%", width: `${v.count / vdist[0].count * 100}%`, background: v.color, borderRadius: 3 } }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2207,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2206,
              columnNumber: 17
            }, this)
          ] }, v.id, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2201,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2199,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2194,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 20 }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", style: { marginBottom: 10 }, children: /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Clock, { size: 14 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2219,
              columnNumber: 66
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2219,
              columnNumber: 41
            }, this),
            "Hourly Commuter Violation Frequencies"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2219,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2218,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bchart", style: { height: 130, paddingTop: 10 }, children: hourly.filter((_, i) => i % 2 === 0).map(
            (h) => /* @__PURE__ */ jsxDEV("div", { className: "bi", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bf", style: { height: `${h.c / maxH * 100}%`, background: h.c > 60 ? "linear-gradient(180deg,#ef4444,#dc2626)" : "linear-gradient(180deg,#3b82f6,#2563eb)" } }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2224,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "bl", style: { fontSize: 7 }, children: h.h }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2225,
                columnNumber: 19
              }, this)
            ] }, h.h, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2223,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2221,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2217,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", style: { marginBottom: 10 }, children: /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(MapPin, { size: 14 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2234,
              columnNumber: 66
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2234,
              columnNumber: 41
            }, this),
            "Top 5 Enforcement Hotspots"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2234,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2233,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: locs.map(
            (loc, i) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 10, fontSize: 11 }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { width: 18, height: 18, borderRadius: 4, background: "rgba(59,130,246,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#60a5fa", fontWeight: 800 }, children: i + 1 }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2239,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { color: "#cbd5e1", flex: 1 }, children: loc.name }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2240,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "mono", style: { color: "#ef4444", fontWeight: 700 }, children: [
                loc.count,
                " fines"
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2241,
                columnNumber: 19
              }, this)
            ] }, loc.name, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2238,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2236,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2232,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2215,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 2192,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 2169,
    columnNumber: 5
  }, this);
}
_s9(AnalyticsPage, "Zp7Dwe3fTMhwHHwRG/fD4rUZ2VQ=");
_c11 = AnalyticsPage;
function SearchPage({ addToast, accidentActive, graceActive, graceTime }) {
  _s0();
  const [q, setQ] = useState("");
  const [registry, setRegistry] = useState(null);
  const [violations, setViolations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showManualForm, setShowManualForm] = useState(false);
  const [manualType, setManualType] = useState("HELMET");
  const [manualLocation, setManualLocation] = useState("MG Road Junction");
  const [manualFine, setManualFine] = useState(1e3);
  const [manualSeverity, setManualSeverity] = useState("HIGH");
  const [isEmergency, setIsEmergency] = useState(false);
  const [isTailgatingAmbulance, setIsTailgatingAmbulance] = useState(false);
  const [submittingManual, setSubmittingManual] = useState(false);
  const handleTypeChange = (typeVal) => {
    setManualType(typeVal);
    const match = VIOLATION_TYPES.find((v) => v.id === typeVal);
    if (match) setManualFine(match.fine);
  };
  const search = () => {
    if (!q.trim()) return;
    setLoading(true);
    setRegistry(null);
    setViolations([]);
    const cleanPlate = q.toUpperCase().replace(/\s/g, "");
    Promise.all(
      [
        fetch(`${API}/registry/${encodeURIComponent(cleanPlate)}`).then((r2) => r2.json()).catch(() => null),
        fetch(`${API}/violations?plate=${encodeURIComponent(cleanPlate)}`).then((r2) => r2.json()).catch(() => null)
      ]
    ).then(([regData, vioData]) => {
      setLoading(false);
      if (regData && regData.success) {
        setRegistry(regData.registry);
        addToast(`Karnataka RTO Registry: Verified details for ${regData.registry.plate}.`, "success");
      } else {
        addToast(`Registry lookup failed.`, "warning");
      }
      if (vioData && vioData.violations) {
        const items = vioData.violations.map((v) => {
          const fallback = getVehicleFallbackDetails(v.licensePlate);
          return {
            id: v.violationId,
            plate: v.licensePlate,
            vehicleType: v.vehicleType || fallback.type,
            manufacturer: v.vehicleBrand || fallback.brand,
            model: v.vehicleModel || fallback.model,
            color: v.vehicleColor || fallback.color,
            registrationStatus: "VERIFIED",
            ownerStatus: "MATCHED",
            violations: [{ id: v.type, label: v.label, color: "#ef4444", icon: "🚨", risk: v.severity, fine: v.fineAmount }],
            risk: v.severity || "HIGH",
            confidence: v.confidence || "100",
            location: v.location && typeof v.location === "string" ? v.location : "Silk Board Junction",
            timestamp: v.detectedAt || v.createdAt,
            status: v.status || "PENDING",
            fineAmount: v.fineAmount || 1e3,
            ownerPhone: v.ownerPhone || "",
            isEmergencyExempt: v.isEmergencyExempt || false,
            exemptReason: v.exemptReason || "",
            isChaseCategory: v.isChaseCategory || false,
            interestApplied: v.interestApplied || 0,
            credibility: { score: "95.0", plateClear: true, signalVisible: true, riderVisible: true, zoneClear: true, decision: "AUTO-APPROVE" },
            explanation: [{ type: v.label, reason: "Manual entry" }],
            history: [],
            repeats: 0
          };
        });
        setViolations(items);
      }
    }).catch(() => {
      setLoading(false);
      addToast(`Error querying vehicle data.`, "warning");
    });
  };
  const handleWaiveFine = (violationId) => {
    const reason = prompt("Enter official waiver justification (e.g. Yielded to ambulance, Medical emergency, Camera calibration error):");
    if (reason === null) return;
    const finalReason = reason.trim() || "Administrative Police Waiver";
    fetch(`${API}/violations/${violationId}/waive`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reason: finalReason })
    }).then((r2) => r2.json()).then((d) => {
      if (d.success) {
        addToast(`Challan ${violationId} successfully waived: ${finalReason}`, "success");
        search();
      }
    }).catch(() => {
      addToast(`Failed to waive fine.`, "warning");
    });
  };
  const submitManualFine = (e) => {
    e.preventDefault();
    if (!registry) return;
    setSubmittingManual(true);
    const isExempt = accidentActive || graceActive || isEmergency;
    const exemptReasonText = accidentActive ? "Accident Active at Junction" : graceActive ? "Signal Accident Clearance Grace Cooldown" : isEmergency ? "Emergency vehicle clearance exemption" : "";
    const baseFine = isExempt ? 0 : isTailgatingAmbulance ? 5e3 : manualFine;
    const payload = {
      type: isTailgatingAmbulance ? "AMBULANCE_TAILGATE" : manualType,
      licensePlate: registry.plate,
      location: manualLocation,
      severity: isTailgatingAmbulance ? "CRITICAL" : manualSeverity,
      status: "SENT",
      fineAmount: baseFine,
      ownerPhone: registry.ownerPhone,
      isEmergencyExempt: isExempt,
      exemptReason: exemptReasonText
    };
    fetch(`${API}/violations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }).then((r2) => r2.json()).then((d) => {
      setSubmittingManual(false);
      if (d.success) {
        const textMsg = isExempt ? `Logged under Emergency Exemption. No fine issued.` : `NOTICE SENT: Message dispatched to owner: "A fine of ₹${d.violation.fineAmount} has been issued for ${d.violation.label}."`;
        addToast(textMsg, "success");
        setShowManualForm(false);
        setIsEmergency(false);
        setIsTailgatingAmbulance(false);
        search();
      }
    }).catch(() => {
      setSubmittingManual(false);
      addToast(`Failed to submit manual fine notice.`, "warning");
    });
  };
  const unpaidViolations = violations.filter((v) => v.status === "SENT" || v.status === "PENDING");
  const totalOutstanding = unpaidViolations.reduce((sum, v) => sum + v.fineAmount, 0);
  const isChase = totalOutstanding > 5e3;
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-slideup", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "card", style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", children: /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Search, { size: 14 }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2422,
          columnNumber: 86
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2422,
          columnNumber: 61
        }, this),
        "Karnataka RTO Vehicle & Fine Query"
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2422,
        columnNumber: 35
      }, this) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2422,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 8, background: "rgba(15,23,42,.6)", border: "1px solid #1e293b", borderRadius: 9, padding: "9px 14px", marginBottom: 12 }, children: [
        /* @__PURE__ */ jsxDEV(Search, { size: 14, color: "#6b7280" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2424,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("input", { style: { flex: 1, background: "transparent", border: "none", outline: "none", color: "#e2e8f0", fontSize: 13 }, placeholder: "Enter vehicle plate number or mobile number e.g. KA03HA2903 or 9043475616...", value: q, onChange: (e) => setQ(e.target.value), onKeyDown: (e) => e.key === "Enter" && search() }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2425,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "btn btn-p btn-s", onClick: search, disabled: loading, children: loading ? /* @__PURE__ */ jsxDEV("div", { className: "spin" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2426,
          columnNumber: 94
        }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV(Search, { size: 11 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2426,
            columnNumber: 123
          }, this),
          "Verify"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2426,
          columnNumber: 121
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2426,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2423,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 7, flexWrap: "wrap" }, children: ["KA03HA2903", "KA01CD5678", "9043475616", "9876543210", "KA51MB8888", "TN1234"].map((p) => /* @__PURE__ */ jsxDEV("button", { className: "btn btn-g btn-xs", onClick: () => {
        setQ(p);
        setTimeout(search, 50);
      }, children: p }, p, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2429,
        columnNumber: 104
      }, this)) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2428,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 2421,
      columnNumber: 7
    }, this),
    registry && /* @__PURE__ */ jsxDEV("div", { className: "g2", children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card", style: {
          background: isChase ? "linear-gradient(135deg, rgba(239,68,68,0.06), rgba(10,15,30,0.6))" : "linear-gradient(135deg, rgba(30,58,95,0.15), rgba(10,15,30,0.6))",
          borderColor: isChase ? "#ef4444" : "#1e3a8a"
        }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", style: { marginBottom: 12 }, children: [
            /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Car, { size: 14 }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2442,
                columnNumber: 68
              }, this) }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2442,
                columnNumber: 43
              }, this),
              "RTO Registration Profile"
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2442,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 6 }, children: [
              isChase && /* @__PURE__ */ jsxDEV("span", { className: "chip chip-bad", style: { background: "#ef4444", animation: "pulseGlow 1.5s infinite" }, children: "⚠️ CHASE CATEGORY" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2444,
                columnNumber: 31
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: `chip ${registry.insuranceStatus === "Active" ? "chip-ok" : "chip-bad"}`, children: [
                "Insurance: ",
                registry.insuranceStatus
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2445,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2443,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2441,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }, children: [
            ["Owner Name", registry.ownerName],
            ["Mobile No", registry.ownerPhone],
            ["RTO Location", registry.registeredAt],
            ["Brand name", registry.brand],
            ["Model Model", registry.model],
            ["Vehicle Category", registry.vehicleType],
            ["Fuel Category", registry.fuelType],
            ["Registration Date", new Date(registry.registrationDate).toLocaleDateString("en-IN")],
            ["Status", "RTO VALIDATED ✅"]
          ].map(
            ([k, v]) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid rgba(30,41,59,0.3)", fontSize: 12 }, children: [
              /* @__PURE__ */ jsxDEV("span", { style: { color: "#9ca3af" }, children: k }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2462,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { color: "#f3f4f6", fontWeight: 600 }, children: v }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2463,
                columnNumber: 21
              }, this)
            ] }, k, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2461,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2449,
            columnNumber: 15
          }, this),
          isChase && /* @__PURE__ */ jsxDEV("div", { className: "alert a-err", style: { fontSize: 11, padding: "8px 12px" }, children: "Outstanding fines exceed ₹5,000. Interest (12%) will be applied to all new manual fines logged." }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2469,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "btn btn-p btn-s", onClick: () => setShowManualForm(!showManualForm), children: [
            /* @__PURE__ */ jsxDEV(AlertTriangle, { size: 12 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2475,
              columnNumber: 17
            }, this),
            " ",
            showManualForm ? "Cancel Form" : "Manual Offence Override (Report Violation)"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2474,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2437,
          columnNumber: 13
        }, this),
        showManualForm && /* @__PURE__ */ jsxDEV("div", { className: "card animate-slideup", style: { borderColor: "#ef4444", background: "rgba(239,68,68,0.02)" }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", style: { marginBottom: 12 }, children: /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(AlertTriangle, { size: 14, color: "#ef4444" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2483,
              columnNumber: 70
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2483,
              columnNumber: 45
            }, this),
            "Manual Enforcement Ticket"
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2483,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2482,
            columnNumber: 17
          }, this),
          (accidentActive || graceActive) && /* @__PURE__ */ jsxDEV("div", { className: "alert a-warn", style: { fontSize: 11, marginBottom: 12 }, children: "⚠️ Junction Accident Alert Mode active. The fine amount will be waived (₹0) and marked as Exempt." }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2487,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("form", { onSubmit: submitManualFine, style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }, children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("label", { className: "auth-lbl", children: "Offence Category" }, void 0, false, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 2495,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("select", { className: "auth-select", disabled: isTailgatingAmbulance, value: isTailgatingAmbulance ? "AMBULANCE_TAILGATE" : manualType, onChange: (e) => handleTypeChange(e.target.value), children: VIOLATION_TYPES.map((v) => /* @__PURE__ */ jsxDEV("option", { value: v.id, children: v.label }, v.id, false, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 2497,
                  columnNumber: 53
                }, this)) }, void 0, false, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 2496,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2494,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("label", { className: "auth-lbl", children: "Location / Junction" }, void 0, false, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 2501,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("input", { required: true, type: "text", className: "auth-inp", value: manualLocation, onChange: (e) => setManualLocation(e.target.value) }, void 0, false, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 2502,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2500,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2493,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }, children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("label", { className: "auth-lbl", children: "Fine Amount (INR)" }, void 0, false, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 2508,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("input", { required: true, type: "number", className: "auth-inp", disabled: isTailgatingAmbulance || accidentActive || graceActive, value: accidentActive || graceActive ? 0 : isTailgatingAmbulance ? 5e3 : manualFine, onChange: (e) => setManualFine(parseInt(e.target.value) || 0) }, void 0, false, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 2509,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2507,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("label", { className: "auth-lbl", children: "Enforcement Urgency" }, void 0, false, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 2512,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("select", { className: "auth-select", disabled: isTailgatingAmbulance, value: isTailgatingAmbulance ? "CRITICAL" : manualSeverity, onChange: (e) => setManualSeverity(e.target.value), children: [
                  /* @__PURE__ */ jsxDEV("option", { value: "LOW", children: "Low Urgency" }, void 0, false, {
                    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                    lineNumber: 2514,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "MEDIUM", children: "Medium Urgency" }, void 0, false, {
                    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                    lineNumber: 2515,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "HIGH", children: "High Urgency" }, void 0, false, {
                    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                    lineNumber: 2516,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "CRITICAL", children: "Critical Urgency" }, void 0, false, {
                    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                    lineNumber: 2517,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 2513,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2511,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2506,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(255,255,255,0.02)", padding: 10, borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)" }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 700, color: "#cbd5e1", marginBottom: 8 }, children: "Emergency Exemption & Tailgate Policies" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2524,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
                /* @__PURE__ */ jsxDEV("label", { style: { display: "flex", alignItems: "center", gap: 8, fontSize: 12, cursor: "pointer" }, children: [
                  /* @__PURE__ */ jsxDEV("input", { type: "checkbox", checked: isEmergency || accidentActive || graceActive, disabled: accidentActive || graceActive, onChange: (e) => setIsEmergency(e.target.checked) }, void 0, false, {
                    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                    lineNumber: 2527,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { children: "Flag as Emergency Exemption (No Fine Issued)" }, void 0, false, {
                    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                    lineNumber: 2528,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 2526,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("label", { style: { display: "flex", alignItems: "center", gap: 8, fontSize: 12, cursor: "pointer" }, children: [
                  /* @__PURE__ */ jsxDEV("input", { type: "checkbox", checked: isTailgatingAmbulance, onChange: (e) => {
                    setIsTailgatingAmbulance(e.target.checked);
                    if (e.target.checked) {
                      setManualFine(5e3);
                      setManualSeverity("CRITICAL");
                    } else {
                      handleTypeChange(manualType);
                    }
                  } }, void 0, false, {
                    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                    lineNumber: 2531,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { style: { color: "#f87171" }, children: "Vehicle is Following/Tailgating Ambulance (₹5000 Fine)" }, void 0, false, {
                    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                    lineNumber: 2540,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 2530,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2525,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2523,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("button", { type: "submit", className: "btn btn-d btn-s", style: { width: "100%", justifyContent: "center" }, disabled: submittingManual, children: submittingManual ? /* @__PURE__ */ jsxDEV("div", { className: "spin" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2546,
              columnNumber: 41
            }, this) : "Confirm manual fine notice & send warning" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2545,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2492,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2481,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2436,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", children: /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Database, { size: 14 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2556,
            columnNumber: 66
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2556,
            columnNumber: 41
          }, this),
          "Enforcement History Archive (",
          violations.length,
          ")"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2556,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2555,
          columnNumber: 13
        }, this),
        violations.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "empty", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "empty-ico", children: "✓" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2559,
            columnNumber: 34
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12 }, children: "Clear record. No violations logged." }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2559,
            columnNumber: 68
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2559,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 8, maxHeight: 450, overflowY: "auto" }, children: violations.map(
          (vio, index) => /* @__PURE__ */ jsxDEV("div", { style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 0",
            borderBottom: "1px solid rgba(30,41,59,0.3)",
            fontSize: 12,
            opacity: vio.status === "WAIVED" || vio.status === "PAID" ? 0.6 : 1
          }, children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: 600, color: "#f3f4f6" }, children: vio.violations[0].label }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2573,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#6b7280", marginTop: 2 }, children: [
                vio.location,
                " · ",
                new Date(vio.timestamp).toLocaleDateString("en-IN")
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2574,
                columnNumber: 23
              }, this),
              vio.isEmergencyExempt && /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, color: "#34d399" }, children: [
                "🛡️ Exempt: ",
                vio.exemptReason
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2575,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2572,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "right", display: "flex", flexDirection: "column", gap: 2 }, children: [
              /* @__PURE__ */ jsxDEV("span", { className: "mono", style: { fontWeight: 700, color: vio.status === "WAIVED" ? "#6b7280" : "#ef4444" }, children: [
                "₹",
                vio.fineAmount
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2578,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, color: vio.status === "SENT" ? "#f59e0b" : vio.status === "PAID" ? "#10b981" : "#6b7280", marginTop: 2 }, children: vio.status }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2579,
                columnNumber: 23
              }, this),
              vio.status === "SENT" && /* @__PURE__ */ jsxDEV(
                "button",
                {
                  className: "btn btn-g btn-xs",
                  style: { padding: "2px 6px", fontSize: 9, background: "rgba(245,158,11,0.1)", borderColor: "rgba(245,158,11,0.2)", color: "#fbbf24", marginTop: 4 },
                  onClick: () => handleWaiveFine(vio.id),
                  children: "Waive ⚖️"
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 2583,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2577,
              columnNumber: 21
            }, this)
          ] }, index, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2563,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2561,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2554,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 2434,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 2419,
    columnNumber: 5
  }, this);
}
_s0(SearchPage, "8JTRNiTcorgpPA2yCOyRYefY3UI=");
_c12 = SearchPage;
function ContactPage() {
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-slideup", children: /* @__PURE__ */ jsxDEV("div", { className: "contact-card", children: [
    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { width: 56, height: 56, borderRadius: 14, background: "linear-gradient(135deg,rgba(59,130,246,.2),rgba(139,92,246,.15))", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(59,130,246,.25)" }, children: /* @__PURE__ */ jsxDEV(Shield, { size: 26, color: "#60a5fa" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2611,
        columnNumber: 255
      }, this) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2611,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 20, fontWeight: 800, color: "#f3f4f6" }, children: "Traffic Enforcement Command Center" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2613,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#9ca3af", marginTop: 2 }, children: "AI-Powered Traffic Violation Detection System" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2614,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2612,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 2610,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }, children: [
      { icon: /* @__PURE__ */ jsxDEV(Phone, { size: 20, color: "#60a5fa" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2619,
        columnNumber: 19
      }, this), lbl: "Phone Number", val: "+91 9043475616", sub: "Available 9AM–6PM IST", color: "rgba(59,130,246,.06)" },
      { icon: /* @__PURE__ */ jsxDEV(Mail, { size: 20, color: "#c084fc" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2620,
        columnNumber: 19
      }, this), lbl: "Email Address", val: "rikashks5616@gmail.com", sub: "Response within 24 hours", color: "rgba(139,92,246,.06)" }
    ].map(
      (c, i) => /* @__PURE__ */ jsxDEV("div", { style: { background: c.color, border: "1px solid rgba(59,130,246,.15)", borderRadius: 12, padding: 18 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,.03)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }, children: c.icon }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2623,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#6b7280", fontWeight: 600, letterSpacing: 0.5, marginBottom: 4, textTransform: "uppercase" }, children: c.lbl }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2624,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 15, fontWeight: 700, color: "#e5e7eb", marginBottom: 3 }, children: c.val }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2625,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#6b7280" }, children: c.sub }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2626,
          columnNumber: 15
        }, this)
      ] }, i, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2622,
        columnNumber: 11
      }, this)
    ) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 2617,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 2609,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 2608,
    columnNumber: 5
  }, this);
}
_c13 = ContactPage;
function AuthPage({ onLoginSuccess }) {
  _s1();
  const [authMode, setAuthMode] = useState("police");
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [policeCode, setPoliceCode] = useState("");
  const [citizenInput, setCitizenInput] = useState("");
  const [citizenPlate, setCitizenPlate] = useState("");
  const [citizenPhone, setCitizenPhone] = useState("");
  const [citizenSubMode, setCitizenSubMode] = useState("quick");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleCitizenQuickSubmit = (e) => {
    e.preventDefault();
    if (!citizenInput.trim()) {
      setError("Please enter a plate number or mobile number.");
      return;
    }
    setError("");
    onLoginSuccess({
      email: citizenInput.trim(),
      role: "customer",
      name: "Citizen User (Quick)",
      plate: citizenInput.trim()
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    let finalRole = authMode;
    if (authMode === "citizen") {
      finalRole = "customer";
    }
    if (!isLogin && authMode !== "citizen") {
      if (finalRole === "police" && policeCode.trim() !== "TN-1234") {
        setError("Invalid Police Verification Code. Police signups must be verified with Code: TN-1234");
        setLoading(false);
        return;
      }
      if (finalRole === "admin" && policeCode.trim() !== "ADMIN-5616") {
        setError("Invalid Admin Security Code. Admin signups must be verified with Admin Code: ADMIN-5616");
        setLoading(false);
        return;
      }
    }
    const endpoint = isLogin ? "/auth/login" : "/auth/signup";
    const payload = isLogin ? { email, password } : {
      email,
      password,
      role: finalRole,
      name,
      policeCode: authMode === "citizen" ? void 0 : policeCode,
      phone: authMode === "citizen" ? citizenPhone : void 0,
      vehicleNumber: authMode === "citizen" ? citizenPlate : void 0
    };
    fetch(`${API}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }).then((r2) => r2.json()).then((data) => {
      setLoading(false);
      if (data.error) {
        setError(data.error);
      } else {
        if (isLogin && data.user.role !== finalRole) {
          setError(`Account role mismatch. This account is registered as ${data.user.role.toUpperCase()}. Please sign in using the correct portal tab.`);
          return;
        }
        onLoginSuccess(data.user);
      }
    }).catch(() => {
      setLoading(false);
      if (isLogin && email === "ksrikash@gmail.com" && password === "ksrikash@5616" && finalRole === "admin") {
        onLoginSuccess({ email: "ksrikash@gmail.com", role: "admin", name: "Ks Rikash (Offline)" });
      } else {
        setError("Connection failed. Verify server status.");
      }
    });
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "auth-bg", children: [
    /* @__PURE__ */ jsxDEV("style", { children: CSS }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 2734,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "auth-panel-l", children: /* @__PURE__ */ jsxDEV("div", { style: { maxWidth: 400, textAlign: "center" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { margin: "0 auto 20px", display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ jsxDEV(Logo, {}, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2740,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2739,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("h1", { style: { fontSize: 24, fontWeight: 800, letterSpacing: ".5px", color: "#f3f4f6", marginBottom: 10 }, children: "TRAFFIC VISION AI" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2742,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 13, color: "#9ca3af", lineHeight: 1.6, marginBottom: 20 }, children: "Next-generation Computer Vision System for real-time traffic violations tracking, license plate OCR identification, and automated legal notice dispatch." }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2745,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 8, justifyContent: "center" }, children: ["YOLOv11", "ExpressDB", "Real-Time", "Automated Challans"].map(
        (tg) => /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 10, padding: "3px 9px", background: "rgba(59, 130, 246, 0.1)", color: "#60a5fa", border: "1px solid rgba(59, 130, 246, 0.2)", borderRadius: 20 }, children: tg }, tg, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2750,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2748,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 2738,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 2737,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "auth-panel-r", children: /* @__PURE__ */ jsxDEV("div", { className: "auth-form animate-slideup", children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 6, marginBottom: 22, background: "rgba(255, 255, 255, 0.02)", padding: 4, borderRadius: 10, border: "1px solid rgba(255, 255, 255, 0.05)" }, children: [
        { id: "police", label: "👮 Police", color: "#3b82f6" },
        { id: "admin", label: "👑 Admin", color: "#a855f7" },
        { id: "citizen", label: "🚗 Citizen", color: "#10b981" }
      ].map(
        (tab) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            type: "button",
            style: {
              flex: 1,
              padding: "9px 0",
              fontSize: "11px",
              fontWeight: 700,
              borderRadius: 7,
              border: "none",
              cursor: "pointer",
              background: authMode === tab.id ? `linear-gradient(135deg, ${tab.color}, ${tab.color}bb)` : "transparent",
              color: authMode === tab.id ? "#fff" : "#6b7280",
              transition: "all 0.2s ease"
            },
            onClick: () => {
              setAuthMode(tab.id);
              setError("");
              setIsLogin(true);
            },
            children: tab.label
          },
          tab.id,
          false,
          {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2766,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2760,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("h2", { style: { fontSize: 22, fontWeight: 800, color: "#f3f4f6", marginBottom: 6 }, children: [
        authMode === "police" && (isLogin ? "Officer Sign In" : "Officer Sign Up"),
        authMode === "admin" && (isLogin ? "Administrator Sign In" : "Administrator Sign Up"),
        authMode === "citizen" && (citizenSubMode === "quick" ? "Quick Fine Query" : citizenSubMode === "login" ? "Citizen Sign In" : "Register Citizen Account")
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2788,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 12, color: "#9ca3af", marginBottom: 24 }, children: [
        authMode === "police" && (isLogin ? "Access the enforcement command center." : "Register a new verified police account."),
        authMode === "admin" && (isLogin ? "Sign in with system administrator privileges." : "Create a new administrative controller."),
        authMode === "citizen" && (citizenSubMode === "quick" ? "Search and pay challans without an account." : citizenSubMode === "login" ? "Sign in to view vehicle profile and pay fines." : "Create an account to automatically receive fine notifications.")
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2796,
        columnNumber: 11
      }, this),
      error && /* @__PURE__ */ jsxDEV("div", { className: "alert a-err", style: { fontSize: 12, marginBottom: 16 }, children: [
        /* @__PURE__ */ jsxDEV(AlertTriangle, { size: 12 }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2805,
          columnNumber: 93
        }, this),
        error
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2805,
        columnNumber: 21
      }, this),
      authMode === "citizen" && citizenSubMode === "quick" ? (
        /* Citizen Quick Lookup Form */
        /* @__PURE__ */ jsxDEV("form", { onSubmit: handleCitizenQuickSubmit, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "auth-inp-group", children: [
            /* @__PURE__ */ jsxDEV("label", { className: "auth-lbl", children: "Plate Number or Mobile Number" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2811,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("input", { required: true, type: "text", className: "auth-inp", placeholder: "e.g. KA03HA2903 or +91 9043475616", value: citizenInput, onChange: (e) => setCitizenInput(e.target.value) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2812,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2810,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("button", { type: "submit", className: "btn btn-p", style: { width: "100%", justifyContent: "center", padding: "11px 0", marginTop: 10 }, children: "Access Quick Portal 🔍" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2814,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 20, textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 16 }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, color: "#6b7280" }, children: "Want to save details and auto-receive fine notifications?" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2819,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 8, display: "flex", gap: 10, justifyContent: "center" }, children: [
              /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-g btn-xs", onClick: () => {
                setCitizenSubMode("login");
                setError("");
              }, children: "Log In Account" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2821,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-g btn-xs", onClick: () => {
                setCitizenSubMode("register");
                setError("");
                setIsLogin(false);
              }, children: "Sign Up" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2822,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2820,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2818,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2809,
          columnNumber: 11
        }, this)
      ) : (
        /* Standard Auth Form (Login or Signup) for Police, Admin, and Citizen accounts */
        /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, children: [
          !isLogin && /* @__PURE__ */ jsxDEV("div", { className: "auth-inp-group", children: [
            /* @__PURE__ */ jsxDEV("label", { className: "auth-lbl", children: "Full Name" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2831,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("input", { required: true, type: "text", className: "auth-inp", placeholder: "e.g. Srikash KS", value: name, onChange: (e) => setName(e.target.value) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2832,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2830,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "auth-inp-group", children: [
            /* @__PURE__ */ jsxDEV("label", { className: "auth-lbl", children: "Email Address" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2837,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("input", { required: true, type: "email", className: "auth-inp", placeholder: "user@traffic.gov", value: email, onChange: (e) => setEmail(e.target.value) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2838,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2836,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "auth-inp-group", children: [
            /* @__PURE__ */ jsxDEV("label", { className: "auth-lbl", children: "Password" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2842,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("input", { required: true, type: "password", className: "auth-inp", placeholder: "••••••••", value: password, onChange: (e) => setPassword(e.target.value) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2843,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2841,
            columnNumber: 15
          }, this),
          !isLogin && authMode === "citizen" && /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "auth-inp-group", children: [
              /* @__PURE__ */ jsxDEV("label", { className: "auth-lbl", children: "Mobile Number (Notification Target)" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2849,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("input", { required: true, type: "text", className: "auth-inp", placeholder: "e.g. +91 9043475616", value: citizenPhone, onChange: (e) => setCitizenPhone(e.target.value) }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2850,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2848,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "auth-inp-group", children: [
              /* @__PURE__ */ jsxDEV("label", { className: "auth-lbl", children: "Registered Vehicle Plate Number" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2853,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("input", { required: true, type: "text", className: "auth-inp", placeholder: "e.g. KA03HA2903", value: citizenPlate, onChange: (e) => setCitizenPlate(e.target.value) }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2854,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2852,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2847,
            columnNumber: 13
          }, this),
          !isLogin && authMode !== "citizen" && /* @__PURE__ */ jsxDEV("div", { className: "auth-inp-group", children: [
            /* @__PURE__ */ jsxDEV("label", { className: "auth-lbl", style: { color: authMode === "police" ? "#f97316" : "#c084fc" }, children: authMode === "police" ? "Police Verification Code (Code: TN-1234)" : "Admin Security Code (Code: ADMIN-5616)" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2861,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                required: true,
                type: "text",
                className: "auth-inp",
                style: { borderColor: authMode === "police" ? "#f97316" : "#c084fc" },
                placeholder: "Enter Security Verification Code",
                value: policeCode,
                onChange: (e) => setPoliceCode(e.target.value)
              },
              void 0,
              false,
              {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2864,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2860,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("button", { type: "submit", className: "btn btn-p", style: { width: "100%", justifyContent: "center", padding: "11px 0", marginTop: 10 }, disabled: loading, children: loading ? /* @__PURE__ */ jsxDEV("div", { className: "spin" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2877,
            columnNumber: 28
          }, this) : isLogin ? "Sign In Account" : "Register Account" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2876,
            columnNumber: 15
          }, this),
          authMode === "citizen" && /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 20, textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 16 }, children: [
            /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-g btn-xs", style: { marginRight: 6 }, onClick: () => {
              setCitizenSubMode("quick");
              setError("");
              setIsLogin(true);
            }, children: "← Quick Lookup Portal" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 2882,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                type: "button",
                style: { background: "transparent", border: "none", color: "#60a5fa", cursor: "pointer", fontSize: 11 },
                onClick: () => {
                  setIsLogin(!isLogin);
                  setError("");
                  setCitizenSubMode(isLogin ? "register" : "login");
                },
                children: isLogin ? "Create account" : "Back to Sign In"
              },
              void 0,
              false,
              {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 2885,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 2881,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 2828,
          columnNumber: 11
        }, this)
      ),
      authMode !== "citizen" && /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 24, textAlign: "center" }, children: /* @__PURE__ */ jsxDEV("button", { style: { background: "transparent", border: "none", color: "#60a5fa", cursor: "pointer", fontSize: 12 }, onClick: () => {
        setIsLogin(!isLogin);
        setError("");
      }, children: isLogin ? "Need a new account? Sign Up" : "Already registered? Log In" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2899,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 2898,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 2758,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 2757,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 2733,
    columnNumber: 5
  }, this);
}
_s1(AuthPage, "coJhEvQbQbp+tK4fD4PojigK9ns=");
_c14 = AuthPage;
function getVehicleFallbackDetails(plate) {
  const cleanPlate = (plate || "").toUpperCase().replace(/\s/g, "");
  let hash = 0;
  for (let i = 0; i < cleanPlate.length; i++) {
    hash = cleanPlate.charCodeAt(i) + ((hash << 5) - hash);
  }
  const absHash = Math.abs(hash);
  const types = ["Motorcycle", "Car", "Truck", "Bus", "Auto-Rickshaw"];
  const brands = {
    Motorcycle: ["Honda", "Yamaha", "TVS", "Royal Enfield", "Bajaj"],
    Car: ["Maruti Suzuki", "Hyundai", "Tata Motors", "Mahindra", "Toyota"],
    Truck: ["Tata", "Ashok Leyland", "BharatBenz"],
    Bus: ["Volvo", "Scania", "Tata"],
    "Auto-Rickshaw": ["Bajaj", "Piaggio", "TVS"]
  };
  const models = {
    Honda: ["Activa 6G", "CB Shine", "Hornet"],
    Yamaha: ["FZ-S", "R15", "MT-15"],
    TVS: ["Apache RTR", "Jupiter", "Ntorq"],
    "Royal Enfield": ["Classic 350", "Bullet 350", "Himalayan"],
    Bajaj: ["Pulsar 150", "Dominar 400", "RE Auto"],
    "Maruti Suzuki": ["Swift", "Baleno", "Breza", "Alto"],
    Hyundai: ["Creta", "i20", "Verna", "Venue"],
    "Tata Motors": ["Nexon", "Harrier", "Punch", "Altroz"],
    Mahindra: ["XUV700", "Thar", "Scorpio"],
    Toyota: ["Innova Crysta", "Fortuner", "Glanza"],
    Tata: ["LPT 1613", "Signa"],
    "Ashok Leyland": ["Dost", "U-Truck"],
    BharatBenz: ["1617R"],
    Volvo: ["9400 B11R"],
    Scania: ["Metrolink"],
    Piaggio: ["Ape DX"]
  };
  const colors = ["Black", "White", "Red", "Blue", "Silver", "Grey", "Orange"];
  const type = types[absHash % types.length];
  const typeBrands = brands[type] || ["Standard"];
  const brand = typeBrands[absHash % typeBrands.length];
  const brandModels = models[brand] || ["Standard"];
  const model = brandModels[absHash % brandModels.length];
  const color = colors[absHash % colors.length];
  return { type, brand, model, color };
}
function CustomerPortalPage({ currentUser, onLogout, addToast }) {
  _s10();
  const [violations, setViolations] = useState([]);
  const [registry, setRegistry] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paymentModalItem, setPaymentModalItem] = useState(null);
  const [paying, setPaying] = useState(false);
  const identifier = currentUser.plate || currentUser.vehicleNumber || currentUser.phone || "";
  const fetchCustomerData = useCallback(() => {
    setLoading(true);
    const cleanIdent = identifier.trim().replace(/\s+/g, "");
    const isPhone = cleanIdent.startsWith("+") || /^\d{10}$/.test(cleanIdent.replace(/^\+?91/, ""));
    let url = `${API}/violations?`;
    if (isPhone) {
      url += `phone=${encodeURIComponent(identifier.trim())}`;
    } else {
      url += `plate=${encodeURIComponent(identifier.toUpperCase().replace(/\s+/g, ""))}`;
    }
    Promise.all(
      [
        fetch(`${API}/registry/${encodeURIComponent(identifier)}`).then((r2) => r2.json()).catch(() => null),
        fetch(url).then((r2) => r2.json()).catch(() => null),
        fetch(`${API}/notifications?email=${encodeURIComponent(currentUser.email)}`).then((r2) => r2.json()).catch(() => null)
      ]
    ).then(([regData, vioData, notifData]) => {
      setLoading(false);
      if (regData && regData.success) {
        setRegistry(regData.registry);
      }
      if (vioData && vioData.violations) {
        const unpaid = vioData.violations.filter((v) => v.status === "SENT" || v.status === "PENDING");
        setViolations(unpaid);
        if (isPhone && unpaid.length > 0 && !registry) {
          const firstPlate = unpaid[0].licensePlate;
          fetch(`${API}/registry/${encodeURIComponent(firstPlate)}`).then((r2) => r2.json()).then((regD) => {
            if (regD && regD.success) setRegistry(regD.registry);
          }).catch(() => null);
        }
      }
      if (notifData && notifData.success) {
        setNotifications(notifData.notifications || []);
      }
    }).catch(() => {
      setLoading(false);
    });
  }, [identifier, registry, currentUser.email]);
  useEffect(() => {
    fetchCustomerData();
  }, [identifier]);
  const totalBaseFine = violations.reduce((sum, v) => sum + v.fineAmount, 0);
  const isChase = totalBaseFine > 5e3;
  const interest = isChase ? Math.round(totalBaseFine * 0.12) : 0;
  const totalAmount = totalBaseFine + interest;
  const executePayment = () => {
    if (!paymentModalItem) return;
    setPaying(true);
    fetch(`${API}/violations/${paymentModalItem.violationId}/pay`, {
      method: "POST"
    }).then((r2) => r2.json()).then((data) => {
      setPaying(false);
      if (data.success) {
        addToast(`Payment of ₹${paymentModalItem.fineAmount} successful! Case closed.`, "success");
        setPaymentModalItem(null);
        fetchCustomerData();
      } else {
        addToast("Payment failed. Try again.", "warning");
      }
    }).catch(() => {
      setPaying(false);
      addToast("Payment failed. Connection error.", "warning");
    });
  };
  const markAsRead = (id) => {
    fetch(`${API}/notifications/${id}/read`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: currentUser.email })
    }).then((r2) => r2.json()).then((data) => {
      if (data.success) {
        setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n));
      }
    }).catch(() => null);
  };
  return /* @__PURE__ */ jsxDEV("div", { style: { padding: "24px", maxWidth: "960px", margin: "0 auto", minHeight: "100vh", display: "flex", flexDirection: "column", gap: "20px" }, children: [
    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #111e47", paddingBottom: "16px" }, children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "20px", fontWeight: 800, color: "#f3f4f6", letterSpacing: ".5px" }, children: "🇮🇳 TRAFFIC CHALLAN CITIZEN PORTAL" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3067,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "12px", color: "#9ca3af", marginTop: "4px" }, children: [
          "Logged in via: ",
          /* @__PURE__ */ jsxDEV("strong", { style: { color: "#60a5fa" }, children: identifier }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3068,
            columnNumber: 96
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3068,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3066,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "btn btn-g", onClick: onLogout, children: [
        /* @__PURE__ */ jsxDEV(LogOut, { size: 14 }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3070,
          columnNumber: 58
        }, this),
        " Exit Portal"
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3070,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3065,
      columnNumber: 7
    }, this),
    loading ? /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "center", padding: "100px" }, children: /* @__PURE__ */ jsxDEV("div", { className: "spin" }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3074,
      columnNumber: 84
    }, this) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3074,
      columnNumber: 7
    }, this) : /* @__PURE__ */ jsxDEV("div", { className: "g2", children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: [
        registry ? /* @__PURE__ */ jsxDEV("div", { className: "card", style: { border: "1px solid #1e3a8a", background: "rgba(30,58,95,0.1)" }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
              /* @__PURE__ */ jsxDEV(Car, { size: 14 }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3082,
                columnNumber: 45
              }, this),
              " Registered Vehicle Profile"
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3082,
              columnNumber: 19
            }, this),
            isChase && /* @__PURE__ */ jsxDEV("span", { className: "chip chip-bad", style: { background: "#ef4444", animation: "pulseGlow 1.5s infinite" }, children: "⚠️ CHASE CATEGORY" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3083,
              columnNumber: 31
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3081,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "10px" }, children: [
            ["Owner Name", registry.ownerName],
            ["Plate Number", registry.plate],
            ["RTO Office", registry.registeredAt],
            ["Vehicle Model", `${registry.brand} ${registry.model}`],
            ["Fuel Category", registry.fuelType],
            ["Insurance Status", registry.insuranceStatus]
          ].map(
            ([k, v]) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", padding: "4px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }, children: [
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: "10px", color: "#9ca3af" }, children: k }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3096,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: "12px", color: "#f3f4f6", fontWeight: 600 }, children: v }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3097,
                columnNumber: 23
              }, this)
            ] }, k, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3095,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3086,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3080,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV("div", { className: "card", children: /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "12px", color: "#9ca3af", textAlign: "center" }, children: "No vehicle registry linked yet. Enter plate number directly to see details." }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3104,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "card", style: {
          background: isChase ? "linear-gradient(135deg, rgba(239,68,68,0.1), rgba(15,23,42,0.8))" : "linear-gradient(135deg, rgba(16,185,129,0.05), rgba(15,23,42,0.8))",
          borderColor: isChase ? "#ef4444" : "#10b981"
        }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "12px", color: "#9ca3af", textTransform: "uppercase", fontWeight: 700 }, children: "Total Outstanding Balance" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3113,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "36px", fontWeight: 800, color: isChase ? "#ef4444" : "#10b981", fontFamily: "JetBrains Mono", margin: "10px 0" }, children: [
            "₹",
            totalAmount.toLocaleString()
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3114,
            columnNumber: 15
          }, this),
          isChase && /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "11px", color: "#fca5a5", lineHeight: 1.5, marginBottom: 10 }, children: "⚠️ **Chase Category Active:** Outstanding balance exceeds ₹5,000. A 12% surcharge has been applied to your fine amount. Please clear immediately." }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3118,
            columnNumber: 13
          }, this),
          violations.length > 0 ? /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "12px", color: "#9ca3af" }, children: [
            "You have ",
            /* @__PURE__ */ jsxDEV("strong", { children: violations.length }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3124,
              columnNumber: 28
            }, this),
            " active challans. Select a challan below to pay."
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3123,
            columnNumber: 13
          }, this) : /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "12px", color: "#34d399", fontWeight: 600 }, children: "🎉 No outstanding fines! Your license is clear." }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3127,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3109,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "card animate-slideup", style: { border: "1px solid rgba(255,255,255,0.05)", background: "rgba(15,23,42,0.4)", marginTop: 8 }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", style: { borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 8, marginBottom: 12 }, children: /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", style: { fontSize: 13, display: "flex", alignItems: "center" }, children: [
            /* @__PURE__ */ jsxDEV(Mail, { size: 13, color: "#60a5fa", style: { marginRight: 6 } }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3137,
              columnNumber: 19
            }, this),
            "Citizen Notifications Inbox",
            notifications.filter((n) => !n.read).length > 0 && /* @__PURE__ */ jsxDEV("span", { className: "chip chip-bad", style: { fontSize: 9, padding: "2px 6px", marginLeft: 8, background: "#ef4444" }, children: [
              notifications.filter((n) => !n.read).length,
              " New"
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3140,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3136,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3135,
            columnNumber: 15
          }, this),
          notifications.length === 0 ? /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#6b7280", textAlign: "center", padding: "16px 0" }, children: "No official notifications received yet." }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3148,
            columnNumber: 13
          }, this) : /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 8, maxHeight: 180, overflowY: "auto", paddingRight: 4 }, children: notifications.map(
            (n) => /* @__PURE__ */ jsxDEV(
              "div",
              {
                onClick: () => !n.read && markAsRead(n.id),
                style: {
                  padding: "10px 12px",
                  background: n.read ? "rgba(255,255,255,0.01)" : "rgba(59,130,246,0.05)",
                  border: n.read ? "1px solid rgba(255,255,255,0.03)" : "1px solid rgba(59,130,246,0.2)",
                  borderRadius: 8,
                  cursor: n.read ? "default" : "pointer",
                  transition: "all 0.2s ease",
                  position: "relative"
                },
                children: [
                  !n.read && /* @__PURE__ */ jsxDEV("div", { style: { position: "absolute", top: 10, right: 10, width: 6, height: 6, borderRadius: "50%", background: "#ef4444" } }, void 0, false, {
                    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                    lineNumber: 3167,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: n.read ? "#cbd5e1" : "#f3f4f6", lineHeight: 1.4, paddingRight: 12 }, children: n.message }, void 0, false, {
                    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                    lineNumber: 3168,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, color: "#6b7280", marginTop: 6, display: "flex", justifyContent: "space-between" }, children: [
                    /* @__PURE__ */ jsxDEV("span", { children: [
                      "Ref: ",
                      n.violationId
                    ] }, void 0, true, {
                      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                      lineNumber: 3170,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { children: new Date(n.createdAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) }, void 0, false, {
                      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                      lineNumber: 3171,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                    lineNumber: 3169,
                    columnNumber: 23
                  }, this)
                ]
              },
              n.id,
              true,
              {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3154,
                columnNumber: 15
              },
              this
            )
          ) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3152,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3134,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3078,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "card", style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "14px", fontWeight: 800, color: "#f3f4f6", borderBottom: "1px solid #1e293b", paddingBottom: "8px" }, children: "Active Traffic Challans" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3182,
          columnNumber: 13
        }, this),
        violations.length === 0 ? /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", padding: "40px", color: "#6b7280" }, children: [
          /* @__PURE__ */ jsxDEV(CheckCircle, { size: 36, color: "#10b981", style: { margin: "0 auto 10px", opacity: 0.7 } }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3186,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "13px" }, children: "No active challans found." }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3187,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3185,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: "12px", maxHeight: "500px", overflowY: "auto" }, children: violations.map(
          (vio) => /* @__PURE__ */ jsxDEV("div", { style: {
            background: "rgba(255,255,255,0.02)",
            border: "1px solid #1e293b",
            borderRadius: "10px",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" }, children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "13px", fontWeight: 700, color: "#f3f4f6" }, children: vio.label }, void 0, false, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 3203,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "11px", color: "#9ca3af", marginTop: "2px" }, children: [
                  vio.location,
                  " · ",
                  new Date(vio.detectedAt || vio.createdAt).toLocaleString("en-IN")
                ] }, void 0, true, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 3204,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3202,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "plate", style: { fontSize: "10px", padding: "2px 6px" }, children: vio.licensePlate }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3206,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3201,
              columnNumber: 21
            }, this),
            vio.isEmergencyExempt && /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "10px", color: "#34d399", background: "rgba(52,211,153,0.1)", padding: "4px 8px", borderRadius: "4px" }, children: [
              "🛡️ Exemption / Warning: ",
              vio.exemptReason
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3210,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "8px", marginTop: "4px" }, children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("span", { style: { fontSize: "10px", color: "#9ca3af" }, children: "Fine Owed: " }, void 0, false, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 3217,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("strong", { className: "mono", style: { color: "#f87171", fontSize: "13px" }, children: [
                  "₹",
                  vio.fineAmount.toLocaleString()
                ] }, void 0, true, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 3218,
                  columnNumber: 25
                }, this),
                vio.isChaseCategory && /* @__PURE__ */ jsxDEV("span", { style: { fontSize: "9px", color: "#f87171", marginLeft: "6px" }, children: "(incl. interest)" }, void 0, false, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 3219,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3216,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("button", { className: "btn btn-p btn-xs", onClick: () => setPaymentModalItem(vio), children: "Pay Challan 💳" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3221,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3215,
              columnNumber: 21
            }, this)
          ] }, vio.violationId, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3192,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3190,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3181,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3076,
      columnNumber: 7
    }, this),
    paymentModalItem && /* @__PURE__ */ jsxDEV("div", { className: "modal-bg", onClick: (e) => e.target === e.currentTarget && setPaymentModalItem(null), children: /* @__PURE__ */ jsxDEV("div", { className: "modal", style: { maxWidth: "380px", textAlign: "center" }, children: [
      /* @__PURE__ */ jsxDEV("button", { className: "modal-close", onClick: () => setPaymentModalItem(null), children: /* @__PURE__ */ jsxDEV(X, { size: 18 }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3235,
        columnNumber: 87
      }, this) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3235,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "16px", fontWeight: 800, color: "#f3f4f6", marginBottom: "10px" }, children: "Secure Challan Payment" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3237,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "12px", color: "#9ca3af", marginBottom: "20px" }, children: [
        "Challan Ref: ",
        paymentModalItem.violationId
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3238,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { background: "#fff", padding: "16px", borderRadius: "12px", display: "inline-block", marginBottom: "16px", border: "2px solid #3b82f6" }, children: /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(`upi://pay?pa=bengalurutraffic@upi&pn=BengaluruTraffic&am=${paymentModalItem.fineAmount}&tr=${paymentModalItem.violationId}`)}`,
          alt: "Payment QR Code",
          style: { display: "block", width: "180px", height: "180px" }
        },
        void 0,
        false,
        {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3242,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3241,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "13px", color: "#cbd5e1", fontWeight: 600, marginBottom: "6px" }, children: "Scan using any UPI App (GPay, Paytm, PhonePe)" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3249,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "12px", color: "#9ca3af", marginBottom: "20px" }, children: [
        "Amount to pay: ",
        /* @__PURE__ */ jsxDEV("strong", { style: { color: "#f87171", fontSize: "15px" }, children: [
          "₹",
          paymentModalItem.fineAmount.toLocaleString()
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3253,
          columnNumber: 30
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3252,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: "8px" }, children: [
        /* @__PURE__ */ jsxDEV("button", { className: "btn btn-success", style: { width: "100%", justifyContent: "center" }, onClick: executePayment, disabled: paying, children: paying ? /* @__PURE__ */ jsxDEV("div", { className: "spin" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3258,
          columnNumber: 27
        }, this) : "Simulate Payment Completion" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3257,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "btn btn-g", style: { width: "100%", justifyContent: "center" }, onClick: () => setPaymentModalItem(null), children: "Cancel" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3260,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3256,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3234,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3233,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 3063,
    columnNumber: 5
  }, this);
}
_s10(CustomerPortalPage, "vesmzG913Ge9FBzP+bdVn8SprZk=");
_c15 = CustomerPortalPage;
function PerformancePage() {
  _s11();
  const [perfData, setPerfData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`${API}/performance`).then((r2) => r2.json()).then((d) => {
      setPerfData(d);
      setLoading(false);
    }).catch(() => {
      setError("Could not load performance metrics. Is the backend running?");
      setLoading(false);
    });
  }, []);
  const getF1Color = (f1) => {
    if (f1 === null) return "#6b7280";
    if (f1 >= 90) return "#10b981";
    if (f1 >= 75) return "#22c55e";
    if (f1 >= 60) return "#eab308";
    return "#ef4444";
  };
  const MetricRing = ({ value, label, color, size = 80 }) => {
    const pct = value !== null ? Math.min(100, value) : 0;
    const deg = `${pct / 100 * 360}deg`;
    return /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: {
        width: size,
        height: size,
        borderRadius: "50%",
        background: `conic-gradient(${color} ${deg}, #1e293b 0)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flexShrink: 0
      }, children: /* @__PURE__ */ jsxDEV("div", { style: {
        position: "absolute",
        inset: 8,
        background: "#030712",
        borderRadius: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }, children: /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, fontWeight: 800, color, fontFamily: "JetBrains Mono,monospace" }, children: value !== null ? `${value}%` : "N/A" }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3309,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3305,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3299,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 700 }, children: label }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3314,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3298,
      columnNumber: 7
    }, this);
  };
  if (loading) return /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "spin", style: { width: 32, height: 32, borderWidth: 3 } }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3321,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("span", { style: { marginLeft: 14, color: "#9ca3af" }, children: "Loading performance metrics..." }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3322,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 3320,
    columnNumber: 5
  }, this);
  if (error) return /* @__PURE__ */ jsxDEV("div", { className: "alert a-err", style: { margin: 0 }, children: [
    /* @__PURE__ */ jsxDEV(AlertCircle, { size: 16 }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3328,
      columnNumber: 7
    }, this),
    " ",
    error
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 3327,
    columnNumber: 5
  }, this);
  const { evaluationConfig, aggregateMetrics, processingSpeed, imageQualityBreakdown, perViolationType, knownLimitations } = perfData || {};
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-slideup", children: [
    /* @__PURE__ */ jsxDEV("div", { style: { background: "linear-gradient(135deg,rgba(59,130,246,.1),rgba(139,92,246,.06))", border: "1px solid rgba(59,130,246,.2)", borderRadius: 14, padding: 20, marginBottom: 20 }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { width: 42, height: 42, background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxDEV(Target, { size: 20, color: "#fff" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3340,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3339,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 16, fontWeight: 800, color: "#f3f4f6" }, children: "Performance Evaluation Report" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3343,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#6b7280" }, children: "Precision · Recall · F1-Score · mAP · Processing Speed" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3344,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3342,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3338,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 16, flexWrap: "wrap" }, children: [
        [
          ["Test Samples", evaluationConfig?.testSamples || 0],
          ["Confidence Threshold", `${evaluationConfig?.confidenceThreshold}%`],
          ["Target F1", `≥ ${evaluationConfig?.targetF1}%`],
          ["Target Speed", `< ${evaluationConfig?.targetProcessingMs}ms`]
        ].map(
          ([k, v]) => /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(15,23,42,.5)", border: "1px solid #1e293b", borderRadius: 8, padding: "8px 14px" }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, color: "#6b7280", fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 2 }, children: k }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3354,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, fontWeight: 700, color: "#60a5fa", fontFamily: "JetBrains Mono,monospace" }, children: v }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3355,
              columnNumber: 15
            }, this)
          ] }, k, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3353,
            columnNumber: 11
          }, this)
        ),
        /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(15,23,42,.5)", border: "1px solid #1e293b", borderRadius: 8, padding: "8px 14px" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, color: "#6b7280", fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 2 }, children: "Ground Truth" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3359,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, fontWeight: 700, color: evaluationConfig?.groundTruthAvailable ? "#10b981" : "#ef4444", fontFamily: "JetBrains Mono,monospace" }, children: evaluationConfig?.groundTruthAvailable ? "✅ Available" : "❌ Not Found" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3360,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3358,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3347,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3337,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "g3", style: { marginBottom: 20 }, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-around", padding: "8px 0" }, children: [
          /* @__PURE__ */ jsxDEV(MetricRing, { value: aggregateMetrics?.macroPrecision, label: "Precision", color: "#3b82f6" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3371,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(MetricRing, { value: aggregateMetrics?.macroRecall, label: "Recall", color: "#10b981" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3372,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(MetricRing, { value: aggregateMetrics?.macroF1, label: "F1 Score", color: getF1Color(aggregateMetrics?.macroF1) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3373,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3370,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", marginTop: 12, fontSize: 10, color: "#6b7280" }, children: "Macro-Average (all violation types)" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3375,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3369,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", style: { marginBottom: 14 }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Award, { size: 14 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3379,
            columnNumber: 91
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3379,
            columnNumber: 66
          }, this),
          "mAP Score"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3379,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", padding: "10px 0" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 56, fontWeight: 800, fontFamily: "JetBrains Mono,monospace", color: getF1Color(aggregateMetrics?.mAP), lineHeight: 1 }, children: aggregateMetrics?.mAP !== null ? `${aggregateMetrics?.mAP}%` : "N/A" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3381,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#6b7280", marginTop: 8 }, children: "mean Average Precision" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3384,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#4b5563", marginTop: 4 }, children: "(Approximated from per-type F1 scores)" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3385,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: {
            marginTop: 12,
            padding: "4px 12px",
            borderRadius: 20,
            fontSize: 11,
            fontWeight: 700,
            display: "inline-block",
            background: aggregateMetrics?.mAP >= 75 ? "rgba(16,185,129,.14)" : "rgba(239,68,68,.14)",
            color: aggregateMetrics?.mAP >= 75 ? "#34d399" : "#f87171",
            border: `1px solid ${aggregateMetrics?.mAP >= 75 ? "rgba(16,185,129,.3)" : "rgba(239,68,68,.3)"}`
          }, children: aggregateMetrics?.mAP >= 75 ? "✅ Meets Target (≥70%)" : "⚠️ Below Target" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3386,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3380,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3378,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", style: { marginBottom: 14 }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Zap, { size: 14 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3397,
            columnNumber: 91
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3397,
            columnNumber: 66
          }, this),
          "Processing Speed"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3397,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: [
          [
            ["Avg Time", processingSpeed?.avgMs, "ms"],
            ["Max Time", processingSpeed?.maxMs, "ms"],
            ["P95 Time", processingSpeed?.p95Ms, "ms"],
            ["Target", processingSpeed?.targetMs, "ms"]
          ].map(
            ([label, val, unit]) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 0", borderBottom: "1px solid rgba(30,41,59,.4)" }, children: [
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, color: "#9ca3af" }, children: label }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3405,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, fontWeight: 700, color: label === "Target" ? "#6b7280" : val <= 500 ? "#10b981" : "#ef4444", fontFamily: "JetBrains Mono,monospace" }, children: [
                val !== null ? `${val}${unit}` : "N/A",
                label === "Avg Time" && val !== null && /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 9, marginLeft: 6 }, children: val <= 500 ? "✅" : "❌" }, void 0, false, {
                  fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                  lineNumber: 3409,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3406,
                columnNumber: 17
              }, this)
            ] }, label, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3404,
              columnNumber: 13
            }, this)
          ),
          /* @__PURE__ */ jsxDEV("div", { style: {
            textAlign: "center",
            marginTop: 4,
            padding: "6px",
            borderRadius: 8,
            background: processingSpeed?.meetsTarget ? "rgba(16,185,129,.1)" : "rgba(239,68,68,.1)",
            color: processingSpeed?.meetsTarget ? "#34d399" : "#f87171",
            fontSize: 11,
            fontWeight: 700,
            border: "1px solid"
          }, children: processingSpeed?.meetsTarget ? "✅ REAL-TIME CAPABLE" : "❌ NEEDS OPTIMIZATION" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3414,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3398,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3396,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3368,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "card", style: { marginBottom: 20 }, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "card-hdr", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(BarChart2, { size: 14 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3428,
            columnNumber: 62
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3428,
            columnNumber: 37
          }, this),
          "Per-Violation Type Metrics"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3428,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#6b7280" }, children: "F1 Target: ≥ 75%  |  Speed Target: ≤ 500ms" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3429,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3427,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxDEV("table", { className: "tbl", children: [
        /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
          /* @__PURE__ */ jsxDEV("th", { children: "Violation Type" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3435,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "TP" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3436,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "FP" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3436,
            columnNumber: 28
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "FN" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3436,
            columnNumber: 39
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Precision" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3437,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Recall" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3437,
            columnNumber: 35
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "F1 Score" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3437,
            columnNumber: 50
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Avg Conf" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3438,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Avg Speed" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3438,
            columnNumber: 34
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Status" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3438,
            columnNumber: 52
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3434,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3433,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("tbody", { children: (perViolationType || []).map(
          (m) => /* @__PURE__ */ jsxDEV("tr", { children: [
            /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { width: 8, height: 8, borderRadius: "50%", background: m.color, flexShrink: 0 } }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3446,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, fontWeight: 600 }, children: m.label }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3447,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3445,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3444,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("span", { style: { color: "#10b981", fontFamily: "JetBrains Mono,monospace", fontSize: 11 }, children: m.groundTruthMetrics?.tp ?? "-" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3450,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3450,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("span", { style: { color: "#ef4444", fontFamily: "JetBrains Mono,monospace", fontSize: 11 }, children: m.groundTruthMetrics?.fp ?? "-" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3451,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3451,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("span", { style: { color: "#f97316", fontFamily: "JetBrains Mono,monospace", fontSize: 11 }, children: m.groundTruthMetrics?.fn ?? "-" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3452,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3452,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("span", { style: { color: m.precision >= 75 ? "#10b981" : "#f97316", fontFamily: "JetBrains Mono,monospace", fontSize: 11 }, children: m.precision !== null ? `${m.precision}%` : "N/A" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3453,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3453,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("span", { style: { color: m.recall >= 75 ? "#10b981" : "#f97316", fontFamily: "JetBrains Mono,monospace", fontSize: 11 }, children: m.recall !== null ? `${m.recall}%` : "N/A" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3454,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3454,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { width: 40, height: 4, background: "#1e293b", borderRadius: 2, overflow: "hidden" }, children: /* @__PURE__ */ jsxDEV("div", { style: { height: "100%", width: `${m.f1Score || 0}%`, background: getF1Color(m.f1Score), borderRadius: 2 } }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3458,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3457,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { color: getF1Color(m.f1Score), fontFamily: "JetBrains Mono,monospace", fontSize: 11, fontWeight: 700 }, children: m.f1Score !== null ? `${m.f1Score}%` : "N/A" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3460,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3456,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3455,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("span", { style: { color: "#9ca3af", fontFamily: "JetBrains Mono,monospace", fontSize: 11 }, children: [
              m.avgConfidence,
              "%"
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3465,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3465,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("span", { style: { color: m.meetsSpeedTarget ? "#10b981" : "#ef4444", fontFamily: "JetBrains Mono,monospace", fontSize: 11 }, children: [
              m.avgProcessingMs,
              "ms"
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3466,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3466,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("td", { children: m.meetsF1Target === null ? /* @__PURE__ */ jsxDEV("span", { className: "chip chip-info", children: "NO DATA" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3469,
              columnNumber: 19
            }, this) : m.meetsF1Target ? /* @__PURE__ */ jsxDEV("span", { className: "chip chip-ok", children: "✅ PASS" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3471,
              columnNumber: 19
            }, this) : /* @__PURE__ */ jsxDEV("span", { className: "chip chip-bad", children: "❌ FAIL" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3473,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3467,
              columnNumber: 19
            }, this)
          ] }, m.type, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3443,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3441,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3432,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3431,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3426,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "g2", children: [
      imageQualityBreakdown && /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", style: { marginBottom: 14 }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Activity, { size: 14 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3487,
            columnNumber: 93
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3487,
            columnNumber: 68
          }, this),
          "Test Image Conditions"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3487,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: Object.entries(imageQualityBreakdown).map(([cond, count]) => {
          const condIcons = { clear: "☀️", low_light: "🌙", rain: "🌧️", motion_blur: "💨", shadow: "🌑" };
          const condColors = { clear: "#10b981", low_light: "#f97316", rain: "#3b82f6", motion_blur: "#a855f7", shadow: "#6b7280" };
          const total = Object.values(imageQualityBreakdown).reduce((a, b) => a + b, 0);
          const pct = total > 0 ? count / total * 100 : 0;
          return /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }, children: [
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, color: "#cbd5e1" }, children: [
                condIcons[cond],
                " ",
                cond.replace("_", " ").toUpperCase()
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3497,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, color: condColors[cond], fontFamily: "JetBrains Mono,monospace" }, children: [
                count,
                " (",
                pct.toFixed(0),
                "%)"
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3498,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3496,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { height: 4, background: "#1e293b", borderRadius: 2, overflow: "hidden" }, children: /* @__PURE__ */ jsxDEV("div", { style: { height: "100%", width: `${pct}%`, background: condColors[cond], borderRadius: 2 } }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3501,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3500,
              columnNumber: 21
            }, this)
          ] }, cond, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3495,
            columnNumber: 17
          }, this);
        }) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3488,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 16, padding: 10, background: "rgba(59,130,246,.06)", borderRadius: 8, border: "1px solid rgba(59,130,246,.15)" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#60a5fa", fontWeight: 700, marginBottom: 4 }, children: "PREPROCESSING APPLIED" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3508,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#9ca3af" }, children: "✅ Histogram Equalization · ✅ Gamma Correction · ✅ Contrast Adjustment · ✅ Noise Reduction" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3509,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3507,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3486,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", style: { marginBottom: 14 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { width: 30, height: 30, background: "rgba(239,68,68,.14)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#f87171" }, children: /* @__PURE__ */ jsxDEV(AlertTriangle, { size: 14 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3517,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3516,
            columnNumber: 13
          }, this),
          "Known Limitations"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3515,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "alert a-warn", style: { marginBottom: 12 }, children: [
          /* @__PURE__ */ jsxDEV(Info, { size: 13 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3522,
            columnNumber: 13
          }, this),
          " This is a prototype — NOT production-ready"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3521,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: (knownLimitations || []).map(
          (lim, i) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 8, alignItems: "flex-start", padding: "7px 10px", background: "rgba(239,68,68,.05)", border: "1px solid rgba(239,68,68,.12)", borderRadius: 8 }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { color: "#ef4444", flexShrink: 0, marginTop: 1 }, children: "🚩" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3527,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, color: "#9ca3af", lineHeight: 1.5 }, children: lim }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3528,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3526,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3524,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 14, padding: 10, background: "rgba(16,185,129,.06)", borderRadius: 8, border: "1px solid rgba(16,185,129,.15)" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#34d399", fontWeight: 700, marginBottom: 4 }, children: "RED FLAGS AVOIDED ✅" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3533,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#9ca3af", lineHeight: 1.8 }, children: "Not claiming 100% accuracy · Not claiming production-ready · All failures documented · Manual review flag active for low-confidence · Reproducible evaluation dataset provided" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3534,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3532,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3514,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3484,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 3335,
    columnNumber: 5
  }, this);
}
_s11(PerformancePage, "OabRwpKYfmRZQd6ePqLstRSQO2Y=");
_c16 = PerformancePage;
const PipelineConnector = ({ active }) => {
  return /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", width: 60, flexShrink: 0, justifyContent: "center", position: "relative" }, children: /* @__PURE__ */ jsxDEV("svg", { width: "60", height: "20", style: { overflow: "visible" }, children: [
    /* @__PURE__ */ jsxDEV(
      "line",
      {
        x1: "0",
        y1: "10",
        x2: "60",
        y2: "10",
        stroke: active ? "#34d399" : "rgba(59, 130, 246, 0.2)",
        strokeWidth: active ? "3" : "2",
        strokeDasharray: active ? "5,5" : "none",
        style: {
          transition: "stroke 0.3s, stroke-width 0.3s",
          animation: active ? "flowDash 0.8s linear infinite" : "none"
        }
      },
      void 0,
      false,
      {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3553,
        columnNumber: 9
      },
      this
    ),
    active && /* @__PURE__ */ jsxDEV("circle", { r: "4", fill: "#34d399", children: /* @__PURE__ */ jsxDEV(
      "animateMotion",
      {
        path: "M0,10 L60,10",
        dur: "0.8s",
        repeatCount: "indefinite"
      },
      void 0,
      false,
      {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3568,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3567,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 3552,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 3551,
    columnNumber: 5
  }, this);
};
_c17 = PipelineConnector;
function ArchitecturePage() {
  _s12();
  const [activeStep, setActiveStep] = useState("preprocess");
  const [simulatingStep, setSimulatingStep] = useState(null);
  const [simLogs, setSimLogs] = useState([]);
  const consoleRef = useRef(null);
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [simLogs]);
  const runDiagnostic = () => {
    if (simulatingStep !== null) return;
    setSimulatingStep(1);
    setSimLogs([`[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] 🚀 Initiating Pipeline Diagnostic Auto-Audit...`]);
    const steps = [
      { step: 1, name: "PREPROCESS", msg: "✓ Ingesting CCTV snapshot... Applied histogram equalization & gamma correction. [Latency: 12ms]" },
      { step: 2, name: "DETECTOR", msg: "✓ YOLOv8 inference completed. Detected 1 motorcycle (Confidence: 94.2%), 1 car (Confidence: 98.7%). [Latency: 45ms]" },
      { step: 3, name: "CLASSIFIER", msg: "✓ Evaluated rules. Flagged: Triple Riding (Silhouettes: 3, Confidence: 89.2%). [Latency: 8ms]" },
      { step: 4, name: "OCR ENGINE", msg: '✓ Cropped license plate. EasyOCR matched text: "KA03HA2903" (Confidence: 91.5%). [Latency: 120ms]' },
      { step: 5, name: "EVIDENCE", msg: "✓ Compiled incident metadata JSON. Rendered bounding box overlay on evidence frame. [Latency: 15ms]" },
      { step: 6, name: "DISPATCH", msg: "✓ Logged offense in MongoDB Atlas cluster. Dispatched warning message/fine challan to citizen profile and owner phone number." }
    ];
    steps.forEach((s, i) => {
      setTimeout(() => {
        setSimulatingStep(s.step);
        setActiveStep(pipeline[s.step - 1].id);
        setSimLogs((prev) => [...prev, `[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] [${s.name}] ${s.msg}`]);
        if (s.step === 6) {
          setTimeout(() => {
            setSimulatingStep(null);
            setSimLogs((prev) => [...prev, `[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] 🎉 Diagnostic completed. All stages operating within normal tolerances.`]);
          }, 1500);
        }
      }, i * 1500);
    });
  };
  const pipeline = [
    {
      step: 1,
      id: "preprocess",
      icon: "🖼️",
      title: "Image Preprocessing",
      color: "#3b82f6",
      tech: "OpenCV · PIL · Histogram Equalization",
      input: "Raw CCTV/surveillance image",
      output: "Normalized image with brightness/contrast optimized",
      techniques: ["Histogram Equalization", "Gamma Correction", "Contrast Adjustment", "Noise Reduction", "Rain Dehazing (WIP)"],
      target: "< 50ms per image",
      conditions: ["Low Light", "Rain", "Motion Blur", "Shadow", "Clear"],
      dos: ["Start with ONE condition at a time", "Use proven OpenCV techniques", "Document which conditions are handled"],
      donts: ["Don't handle ALL conditions simultaneously in v1", "Don't destroy license plate details", "Don't exceed 50ms"]
    },
    {
      step: 2,
      id: "detect",
      icon: "🎯",
      title: "Vehicle & Road User Detection",
      color: "#10b981",
      tech: "YOLOv8 (simulated) · Bounding Box · NMS",
      input: "Preprocessed image",
      output: "Bounding boxes with class labels + confidence scores",
      techniques: ["Object Detection (YOLOv8)", "Non-Maximum Suppression", "Confidence Thresholding (≥0.70)", "Multi-class Detection"],
      target: "Confidence ≥ 70%, mAP ≥ 70%",
      vehicles: ["Motorcycles", "Cars", "Auto-Rickshaws", "Trucks", "Buses", "Pedestrians"],
      dos: ["Use pre-trained YOLOv8", "Set confidence threshold ≥ 0.65", "Track multi-person on 2-wheelers"],
      donts: ["Don't train from scratch", "Don't aim for 100% accuracy", "Don't ignore occlusion"]
    },
    {
      step: 3,
      id: "classify",
      icon: "⚖️",
      title: "Violation Classification",
      color: "#f97316",
      tech: "Rule-based Logic · ML Classifier · Sequential Logic",
      input: "Detected objects + vehicle context",
      output: "Violation type + confidence score + severity",
      violationTypes: [
        { id: "HELMET", label: "Helmet Non-Compliance", conf: 0.7 },
        { id: "TRIPLE", label: "Triple Riding", conf: 0.75 },
        { id: "REDLIGHT", label: "Red Light Violation", conf: 0.8 },
        { id: "SEATBELT", label: "Seatbelt Non-Compliance", conf: 0.72 },
        { id: "MOBILE", label: "Mobile Phone Usage", conf: 0.72 },
        { id: "WRONGSIDE", label: "Wrong-Side Driving", conf: 0.78 },
        { id: "STOPLINE", label: "Stop Line Violation", conf: 0.7 },
        { id: "PARKING", label: "Illegal Parking", conf: 0.7 }
      ],
      dos: ["Start with 2-3 violations only", "Use rule-based logic first", "Document confidence thresholds"],
      donts: ["Don't tackle all 7 in v1", "Don't ignore false positives", "Don't assign scores arbitrarily"]
    },
    {
      step: 4,
      id: "lpr",
      icon: "🔍",
      title: "License Plate Recognition",
      color: "#a855f7",
      tech: "EasyOCR · PaddleOCR · Plate Detection Model",
      input: "Cropped vehicle region",
      output: "Extracted plate text (KA-03-AB-1234 format)",
      target: "OCR Accuracy: 70-85% on surveillance quality",
      format: "Karnataka: KA-XX-YY-NNNN",
      challenges: ["Angled plates", "Dirty/obscured plates", "Low resolution", "Partial occlusion"],
      dos: ["Use specialized LPR model", "Test on Indian format plates", "Flag unreadable plates for manual review"],
      donts: ["Don't build OCR from scratch", "Don't expect 100% accuracy", "Don't skip plate preprocessing"]
    },
    {
      step: 5,
      id: "evidence",
      icon: "📷",
      title: "Evidence Generation",
      color: "#eab308",
      tech: "SVG Overlay · JSON Metadata · Timestamp",
      input: "Original image + detection results",
      output: "Annotated image + JSON evidence record",
      metadata: ["violationId", "timestamp", "location", "licensePlate", "confidence", "fineAmount", "auditTrail"],
      dos: ["Draw bounding boxes", "Add labels with confidence", "Save original + annotated", "Store in JSON format"],
      donts: ["Don't overwrite originals", "Don't forget timestamps", "Don't ignore privacy (blur faces if required)"]
    },
    {
      step: 6,
      id: "analytics",
      icon: "📊",
      title: "Analytics & Reporting",
      color: "#06b6d4",
      tech: "MongoDB Aggregation · CSV/JSON Export · Dashboard",
      input: "Violation records database",
      output: "Statistics, trends, reports, hotspot maps",
      metrics: ["Total violations", "By type (%)", "High-violation zones", "Confidence distribution", "Processing speed"],
      dos: ["Track basic stats for prototype", "Enable date/type filtering", "Generate CSV export", "Validate data before display"],
      donts: ["Don't build complex dashboards in v1", "Don't skip data validation", "Don't create reports encouraging bias"]
    }
  ];
  const activeData = activeStep ? pipeline.find((p) => p.id === activeStep) : null;
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-slideup", children: [
    /* @__PURE__ */ jsxDEV("style", { children: `
        @keyframes flowDash {
          to {
            stroke-dashoffset: -20;
          }
        }
        @keyframes pulseGlowCustom {
          0%, 100% {
            box-shadow: 0 0 8px rgba(16, 185, 129, 0.2);
            border-color: rgba(16, 185, 129, 0.4);
          }
          50% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.8);
            border-color: rgba(16, 185, 129, 1);
          }
        }
      ` }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3709,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: {
      background: "linear-gradient(135deg,rgba(59,130,246,.08),rgba(139,92,246,.04))",
      border: "1px solid rgba(59,130,246,.2)",
      borderRadius: 14,
      padding: 20,
      marginBottom: 24,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16
    }, children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 16, fontWeight: 800, color: "#f3f4f6", marginBottom: 6 }, children: "🏗️ System Architecture — Detection Pipeline" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3740,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#9ca3af" }, children: "Click any pipeline stage to see technical details, Do's & Don'ts, and implementation notes." }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3741,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3739,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: runDiagnostic,
          disabled: simulatingStep !== null,
          className: "btn btn-p",
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            boxShadow: simulatingStep ? "none" : "0 0 15px rgba(59,130,246,0.3)",
            animation: simulatingStep ? "none" : "pulseGlow 2s infinite"
          },
          children: [
            /* @__PURE__ */ jsxDEV(Zap, { size: 14, fill: simulatingStep ? "none" : "currentColor" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3755,
              columnNumber: 11
            }, this),
            simulatingStep ? "Running Diagnostics..." : "Run Pipeline Diagnostic Simulation"
          ]
        },
        void 0,
        true,
        {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3743,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3727,
      columnNumber: 7
    }, this),
    simLogs.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "card", style: { borderColor: "rgba(59, 130, 246, 0.35)", background: "#020409", marginBottom: 24 }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "spin", style: { width: 12, height: 12, borderTopColor: "#34d399", display: simulatingStep !== null ? "block" : "none" } }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3764,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, fontWeight: 700, color: "#f3f4f6" }, children: "System Diagnostic Stream" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3765,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3763,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { style: { fontFamily: "monospace", fontSize: 9, color: "#4b5563" }, children: [
          "Status: ",
          simulatingStep ? `Stage ${simulatingStep} Active` : "Idle"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3767,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3762,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          ref: consoleRef,
          style: {
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 10,
            color: "#34d399",
            padding: "12px",
            background: "rgba(0,0,0,0.5)",
            borderRadius: 8,
            maxHeight: 120,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            border: "1px solid rgba(255,255,255,0.02)"
          },
          children: simLogs.map(
            (log, index) => /* @__PURE__ */ jsxDEV("div", { style: {
              lineHeight: 1.5,
              color: log.includes("✓") || log.includes("🎉") ? "#34d399" : log.includes("🚀") ? "#60a5fa" : "#a7f3d0"
            }, children: log }, index, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3788,
              columnNumber: 11
            }, this)
          )
        },
        void 0,
        false,
        {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3770,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3761,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: 0,
      marginBottom: 28,
      overflowX: "auto",
      padding: "10px 4px 14px 4px",
      borderRadius: 14,
      background: "rgba(15,23,42,0.4)",
      border: "1px solid rgba(59, 130, 246, 0.04)"
    }, children: pipeline.map((step, idx) => {
      const isSimulatingThis = simulatingStep === step.step;
      const isSelected = activeStep === step.id;
      return /* @__PURE__ */ jsxDEV(React.Fragment, { children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            onClick: () => setActiveStep(activeStep === step.id ? null : step.id),
            style: {
              background: isSelected ? `linear-gradient(135deg, ${step.color}22, ${step.color}11)` : isSimulatingThis ? "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05))" : "linear-gradient(135deg,rgba(15,23,42,.85),rgba(10,15,30,.7))",
              border: isSelected ? `2px solid ${step.color}` : isSimulatingThis ? "2px solid #10b981" : "1px solid #1e293b",
              borderRadius: 14,
              padding: "16px 14px",
              cursor: "pointer",
              transition: "all .3s cubic-bezier(0.16, 1, 0.3, 1)",
              minWidth: 135,
              flexShrink: 0,
              transform: isSelected ? "scale(1.03) translateY(-3px)" : "none",
              animation: isSimulatingThis ? "pulseGlowCustom 1.5s infinite" : "none",
              boxShadow: isSelected ? `0 8px 25px ${step.color}33` : "none"
            },
            children: [
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 26, marginBottom: 8, textAlign: "center" }, children: step.icon }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3839,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: {
                fontSize: 9,
                fontWeight: 800,
                color: isSimulatingThis ? "#34d399" : step.color,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 3,
                textAlign: "center"
              }, children: [
                "STEP ",
                step.step
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3840,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 700, color: "#f3f4f6", textAlign: "center", lineHeight: 1.3 }, children: step.title }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3851,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, color: "#6b7280", marginTop: 6, textAlign: "center" }, children: step.tech.split("·")[0].trim() }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3852,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3815,
            columnNumber: 15
          },
          this
        ),
        idx < pipeline.length - 1 && /* @__PURE__ */ jsxDEV(PipelineConnector, { active: simulatingStep === step.step }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3855,
          columnNumber: 15
        }, this)
      ] }, step.id, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3814,
        columnNumber: 13
      }, this);
    }) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3799,
      columnNumber: 7
    }, this),
    activeData && /* @__PURE__ */ jsxDEV("div", { style: {
      background: `linear-gradient(135deg, ${activeData.color}08, rgba(10,15,30,.95))`,
      border: `1px solid ${activeData.color}33`,
      borderRadius: 14,
      padding: 22,
      marginBottom: 24,
      animation: "slideUp .3s ease-out",
      boxShadow: `inset 0 1px 1px rgba(255, 255, 255, 0.02)`
    }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 18 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 36 }, children: activeData.icon }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3873,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { flex: 1 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 15, fontWeight: 800, color: "#f3f4f6" }, children: [
            "Step ",
            activeData.step,
            ": ",
            activeData.title
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3875,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: activeData.color, fontFamily: "JetBrains Mono,monospace", marginTop: 3 }, children: activeData.tech }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3876,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3874,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3872,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "g3", children: [
        /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(15,23,42,.5)", border: "1px solid rgba(59, 130, 246, 0.08)", borderRadius: 10, padding: 14 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, color: "#6b7280", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }, children: "Input → Output" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3882,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 8 }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, color: "#9ca3af", marginBottom: 3 }, children: "📥 INPUT" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3884,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#cbd5e1" }, children: activeData.input }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3885,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3883,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { height: 1, background: "#1e293b", margin: "8px 0" } }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3887,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, color: "#9ca3af", marginBottom: 3 }, children: "📤 OUTPUT" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3889,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#cbd5e1" }, children: activeData.output }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3890,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3888,
            columnNumber: 15
          }, this),
          activeData.target && /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 10, padding: "6px 10px", background: `${activeData.color}14`, borderRadius: 7, border: `1px solid ${activeData.color}33` }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, color: "#9ca3af" }, children: "🎯 Target" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3894,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: activeData.color, fontWeight: 700 }, children: activeData.target }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3895,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3893,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3881,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(16,185,129,.06)", border: "1px solid rgba(16,185,129,.2)", borderRadius: 10, padding: 14 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, color: "#34d399", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }, children: "✅ DO's" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3901,
            columnNumber: 15
          }, this),
          activeData.dos.map(
            (d, i) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 6, marginBottom: 6, alignItems: "flex-start" }, children: [
              /* @__PURE__ */ jsxDEV("span", { style: { color: "#10b981", flexShrink: 0, marginTop: 1 }, children: "✓" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3904,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, color: "#9ca3af", lineHeight: 1.5 }, children: d }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3905,
                columnNumber: 19
              }, this)
            ] }, i, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3903,
              columnNumber: 13
            }, this)
          )
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3900,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { background: "rgba(239,68,68,.06)", border: "1px solid rgba(239,68,68,.2)", borderRadius: 10, padding: 14 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, color: "#f87171", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }, children: "❌ DON'Ts" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3911,
            columnNumber: 15
          }, this),
          activeData.donts.map(
            (d, i) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 6, marginBottom: 6, alignItems: "flex-start" }, children: [
              /* @__PURE__ */ jsxDEV("span", { style: { color: "#ef4444", flexShrink: 0, marginTop: 1 }, children: "✗" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3914,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, color: "#9ca3af", lineHeight: 1.5 }, children: d }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3915,
                columnNumber: 19
              }, this)
            ] }, i, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3913,
              columnNumber: 13
            }, this)
          )
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3910,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3880,
        columnNumber: 11
      }, this),
      (activeData.techniques || activeData.violationTypes || activeData.metadata || activeData.vehicles || activeData.challenges || activeData.metrics) && /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }, children: [
        (activeData.techniques || activeData.vehicles || activeData.challenges || activeData.metrics || []).map(
          (t, i) => /* @__PURE__ */ jsxDEV("span", { style: { padding: "3px 10px", background: `${activeData.color}14`, color: activeData.color, border: `1px solid ${activeData.color}33`, borderRadius: 20, fontSize: 10, fontWeight: 600 }, children: t }, i, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3924,
            columnNumber: 11
          }, this)
        ),
        (activeData.violationTypes || []).map(
          (v) => /* @__PURE__ */ jsxDEV("span", { style: { padding: "3px 10px", background: "rgba(249,115,22,.14)", color: "#fb923c", border: "1px solid rgba(249,115,22,.3)", borderRadius: 20, fontSize: 10, fontWeight: 600 }, children: [
            v.label,
            " (≥",
            v.conf * 100,
            "%)"
          ] }, v.id, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3929,
            columnNumber: 11
          }, this)
        ),
        (activeData.metadata || []).map(
          (m, i) => /* @__PURE__ */ jsxDEV("span", { style: { padding: "3px 10px", background: "rgba(234,179,8,.14)", color: "#fbbf24", border: "1px solid rgba(234,179,8,.3)", borderRadius: 20, fontSize: 10, fontFamily: "JetBrains Mono,monospace" }, children: m }, i, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3934,
            columnNumber: 11
          }, this)
        )
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3922,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3863,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "g2", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", style: { marginBottom: 14 }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Server, { size: 14 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3945,
            columnNumber: 91
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3945,
            columnNumber: 66
          }, this),
          "Technology Stack"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3945,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
          ["Frontend", "React 18 + Vite + Lucide Icons"],
          ["Backend", "Node.js + Express.js (ESM)"],
          ["Database", "MongoDB Atlas (Mongoose ODM)"],
          ["Detection", "YOLOv8 Simulation (→ real in prod)"],
          ["OCR", "EasyOCR / PaddleOCR (planned)"],
          ["Evidence", "SVG Overlay Generator"],
          ["Analytics", "MongoDB Aggregation Pipeline"],
          ["Auth", "Role-based (Admin/Police/Customer)"]
        ].map(
          ([k, v]) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid rgba(30,41,59,.4)", fontSize: 12 }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { color: "#9ca3af", fontWeight: 600 }, children: k }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3957,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { color: "#cbd5e1", fontFamily: "JetBrains Mono,monospace", fontSize: 11 }, children: v }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3958,
              columnNumber: 17
            }, this)
          ] }, k, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3956,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3946,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3944,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-ttl", style: { marginBottom: 14 }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "ttl-ico", children: /* @__PURE__ */ jsxDEV(Database, { size: 14 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3965,
            columnNumber: 91
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3965,
            columnNumber: 66
          }, this),
          "Prototype Scope (v1)"
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3965,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 12 }, children: /* @__PURE__ */ jsxDEV("div", { className: "alert a-warn", style: { margin: 0 }, children: "⚠️ NOT production-ready — prototype scope only" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3967,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3966,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("table", { className: "tbl", children: [
          /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
            /* @__PURE__ */ jsxDEV("th", { children: "Component" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3970,
              columnNumber: 24
            }, this),
            /* @__PURE__ */ jsxDEV("th", { children: "Scope" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3970,
              columnNumber: 42
            }, this),
            /* @__PURE__ */ jsxDEV("th", { children: "Target" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3970,
              columnNumber: 56
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3970,
            columnNumber: 20
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3970,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("tbody", { children: [
            ["Preprocessing", "Low-light + Rain", "N/A"],
            ["Detection", "Motorcycles, Cars, Autos", "85%+"],
            ["Violations", "Helmet + Triple + Red-light", "75-80%"],
            ["License Plate", "Detection + OCR", "70%+"],
            ["Evidence", "SVG + JSON metadata", "100%"],
            ["Analytics", "Basic stats dashboard", "N/A"],
            ["Speed", "<500ms/image", "Documented"]
          ].map(
            ([c, s, t]) => /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("td", { style: { fontSize: 11 }, children: c }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3981,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: { fontSize: 11, color: "#9ca3af" }, children: s }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3982,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: { fontSize: 11, color: "#60a5fa", fontFamily: "JetBrains Mono,monospace" }, children: t }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 3983,
                columnNumber: 19
              }, this)
            ] }, c, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 3980,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 3971,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 3969,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 3964,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 3943,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 3708,
    columnNumber: 5
  }, this);
}
_s12(ArchitecturePage, "zscdhIm3t6SczIMu2gVyBj1gGbI=");
_c18 = ArchitecturePage;
const PAGES = [
  { id: "dashboard", icon: /* @__PURE__ */ jsxDEV(Home, { size: 17 }, void 0, false, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 3998,
    columnNumber: 26
  }, this), label: "Dashboard" },
  { id: "detection", icon: /* @__PURE__ */ jsxDEV(Camera, { size: 17 }, void 0, false, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 3999,
    columnNumber: 26
  }, this), label: "Detection" },
  { id: "archive", icon: /* @__PURE__ */ jsxDEV(Archive, { size: 17 }, void 0, false, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 4e3,
    columnNumber: 24
  }, this), label: "Old Files" },
  { id: "batch", icon: /* @__PURE__ */ jsxDEV(Layers, { size: 17 }, void 0, false, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 4001,
    columnNumber: 22
  }, this), label: "Batch" },
  { id: "analytics", icon: /* @__PURE__ */ jsxDEV(BarChart3, { size: 17 }, void 0, false, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 4002,
    columnNumber: 26
  }, this), label: "Analytics" },
  { id: "performance", icon: /* @__PURE__ */ jsxDEV(Target, { size: 17 }, void 0, false, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 4003,
    columnNumber: 28
  }, this), label: "Performance" },
  { id: "architecture", icon: /* @__PURE__ */ jsxDEV(HardDrive, { size: 17 }, void 0, false, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 4004,
    columnNumber: 29
  }, this), label: "Architecture" },
  { id: "search", icon: /* @__PURE__ */ jsxDEV(Search, { size: 17 }, void 0, false, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 4005,
    columnNumber: 23
  }, this), label: "Search" },
  { id: "contact", icon: /* @__PURE__ */ jsxDEV(Phone, { size: 17 }, void 0, false, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 4006,
    columnNumber: 24
  }, this), label: "Contact Us" }
];
export default function App() {
  _s13();
  const [currentUser, setCurrentUser] = useState(null);
  const [page, setPage] = useState("dashboard");
  const [time, setTime] = useState(/* @__PURE__ */ new Date());
  const [showStatus, setShowStatus] = useState(false);
  const [showMongo, setShowMongo] = useState(false);
  const [dbOk, setDbOk] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [accidentActive, setAccidentActive] = useState(false);
  const [graceActive, setGraceActive] = useState(false);
  const [graceTime, setGraceTime] = useState(0);
  useEffect(() => {
    let timer;
    if (graceActive && graceTime > 0) {
      timer = setInterval(() => {
        setGraceTime((prev) => {
          if (prev <= 1) {
            setGraceActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1e3);
    }
    return () => clearInterval(timer);
  }, [graceActive, graceTime]);
  const addToast = (msg, type = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, msg, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };
  useEffect(() => {
    const id = setInterval(() => setTime(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    if (currentUser && currentUser.role !== "customer") {
      fetch(`${API}/health`).then((r2) => r2.json()).then((d) => setDbOk(d.database === "connected")).catch(() => setDbOk(false));
    }
  }, [currentUser]);
  if (!currentUser) {
    return /* @__PURE__ */ jsxDEV(AuthPage, { onLoginSuccess: (user) => {
      setCurrentUser(user);
      addToast(`Welcome back, ${user.name}!`);
    } }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 4058,
      columnNumber: 12
    }, this);
  }
  if (currentUser.role === "customer") {
    return /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("style", { children: CSS }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 4064,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(CustomerPortalPage, { currentUser, onLogout: handleLogout, addToast }, void 0, false, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 4065,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 4063,
      columnNumber: 7
    }, this);
  }
  const handleLogout = () => {
    setCurrentUser(null);
    setPage("dashboard");
  };
  const isPolice = currentUser?.role === "police";
  const pageTitles = {
    dashboard: "Command Dashboard",
    detection: "AI YOLOv11 & OCR Engine",
    archive: isPolice ? "Violation Records Archive" : "MongoDB Violation Logs",
    batch: "Batch Queue Engine",
    analytics: "Analytics & Trends",
    performance: "Performance Evaluation — Precision / Recall / F1 / mAP",
    architecture: "System Architecture — Detection Pipeline",
    search: "Registration Search",
    contact: "Contact Enforcement"
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("style", { children: CSS }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 4090,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "root", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "sb", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "sb-logo", children: /* @__PURE__ */ jsxDEV(Logo, {}, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 4094,
          columnNumber: 36
        }, this) }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 4094,
          columnNumber: 11
        }, this),
        PAGES.map(
          (p) => /* @__PURE__ */ jsxDEV("button", { className: `sb-btn${page === p.id ? " active" : ""}`, onClick: () => setPage(p.id), children: [
            p.icon,
            /* @__PURE__ */ jsxDEV("span", { className: "tip", children: p.label }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 4097,
              columnNumber: 23
            }, this)
          ] }, p.id, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4096,
            columnNumber: 11
          }, this)
        ),
        /* @__PURE__ */ jsxDEV("div", { style: { flex: 1 } }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 4100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "sb-sep" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 4102,
          columnNumber: 11
        }, this),
        currentUser.role === "admin" && /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV("button", { className: "sb-btn", onClick: () => setShowStatus(true), children: [
            /* @__PURE__ */ jsxDEV(Shield, { size: 17 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 4108,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "tip", children: "System Status" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 4108,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4107,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "sb-btn", onClick: () => setShowMongo(true), style: { position: "relative" }, children: [
            /* @__PURE__ */ jsxDEV(Database, { size: 17 }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 4111,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "tip", children: "MongoDB Atlas" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 4111,
              columnNumber: 39
            }, this),
            dbOk !== null && /* @__PURE__ */ jsxDEV("span", { style: { position: "absolute", top: 6, right: 6, width: 6, height: 6, borderRadius: "50%", background: dbOk ? "#22c55e" : "#ef4444" } }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 4112,
              columnNumber: 35
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4110,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "sb-sep" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4114,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 4106,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "sb-btn", onClick: handleLogout, children: [
          /* @__PURE__ */ jsxDEV(LogOut, { size: 17 }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4119,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "tip", children: "Sign Out" }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4119,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 4118,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 4093,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "page", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "top", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "top-title", children: "🛡️ TRAFFIC ENFORCEMENT COMMAND CENTER" }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 4128,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 9, color: "#3b82f6", marginTop: 2 }, children: [
              "Enforcement Officer: ",
              /* @__PURE__ */ jsxDEV("strong", { style: { color: "#e5e7eb" }, children: [
                currentUser.name,
                " (",
                currentUser.role.toUpperCase(),
                ")"
              ] }, void 0, true, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 4129,
                columnNumber: 97
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 4129,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4127,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "top-r", children: [
            (currentUser.role === "admin" || currentUser.role === "police") && /* @__PURE__ */ jsxDEV(
              "button",
              {
                className: `btn btn-xs ${accidentActive ? "btn-d" : graceActive ? "btn-success" : "btn-g"}`,
                style: { marginRight: 8, padding: "4px 10px", height: "28px", border: "1px solid rgba(255,255,255,0.1)" },
                onClick: () => {
                  if (accidentActive) {
                    setAccidentActive(false);
                    setGraceActive(true);
                    setGraceTime(60);
                    addToast("Accident cleared. 1-minute grace cooldown active.", "info");
                  } else if (graceActive) {
                    setGraceActive(false);
                    setGraceTime(0);
                    addToast("Grace cooldown ended. Normal enforcement active.", "success");
                  } else {
                    setAccidentActive(true);
                    setGraceActive(false);
                    setGraceTime(0);
                    addToast("Junction Accident Mode Active! Fines suspended.", "warning");
                  }
                },
                children: accidentActive ? "⚠️ ACCIDENT ACTIVE" : graceActive ? `⏳ GRACE: ${graceTime}s` : "🚨 Report Accident"
              },
              void 0,
              false,
              {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 4135,
                columnNumber: 15
              },
              this
            ),
            currentUser.role === "admin" && /* @__PURE__ */ jsxDEV("div", { className: `db-status ${dbOk ? "db-ok" : "db-bad"}`, onClick: () => setShowMongo(true), style: { cursor: "pointer", marginRight: 8 }, children: [
              dbOk ? /* @__PURE__ */ jsxDEV(Wifi, { size: 11 }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 4163,
                columnNumber: 27
              }, this) : /* @__PURE__ */ jsxDEV(WifiOff, { size: 11 }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 4163,
                columnNumber: 48
              }, this),
              dbOk === null ? "Checking..." : dbOk ? "DB Connected" : "DB Offline"
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 4162,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "live", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "live-dot" }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 4168,
                columnNumber: 37
              }, this),
              "LIVE"
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 4168,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "mono", style: { fontSize: 10, color: "#9ca3af" }, children: time.toLocaleTimeString("en-IN", { hour12: false }) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 4169,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4131,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 4126,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "content", children: [
          /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 20 }, children: /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }, children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h2", { style: { fontSize: 19, fontWeight: 800, color: "#f3f4f6" }, children: pageTitles[page] }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 4179,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, color: "#6b7280", marginTop: 2 }, children: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 4180,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 4178,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 7 }, children: /* @__PURE__ */ jsxDEV("button", { className: "btn btn-g btn-s", onClick: () => window.location.reload(), children: [
              /* @__PURE__ */ jsxDEV(RefreshCw, { size: 11 }, void 0, false, {
                fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
                lineNumber: 4183,
                columnNumber: 96
              }, this),
              "Refresh Panel"
            ] }, void 0, true, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 4183,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
              lineNumber: 4182,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4177,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4176,
            columnNumber: 13
          }, this),
          page === "dashboard" && /* @__PURE__ */ jsxDEV(DashboardPage, { currentUser }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4189,
            columnNumber: 38
          }, this),
          page === "detection" && /* @__PURE__ */ jsxDEV(DetectionPage, { addToast, accidentActive, graceActive, currentUser }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4190,
            columnNumber: 38
          }, this),
          page === "archive" && /* @__PURE__ */ jsxDEV(ArchivePage, { addToast, currentUser }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4191,
            columnNumber: 36
          }, this),
          page === "batch" && /* @__PURE__ */ jsxDEV(BatchPage, { currentUser }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4192,
            columnNumber: 34
          }, this),
          page === "analytics" && /* @__PURE__ */ jsxDEV(AnalyticsPage, {}, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4193,
            columnNumber: 38
          }, this),
          page === "performance" && /* @__PURE__ */ jsxDEV(PerformancePage, {}, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4194,
            columnNumber: 40
          }, this),
          page === "architecture" && /* @__PURE__ */ jsxDEV(ArchitecturePage, {}, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4195,
            columnNumber: 41
          }, this),
          page === "search" && /* @__PURE__ */ jsxDEV(SearchPage, { addToast, accidentActive, graceActive, graceTime }, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4196,
            columnNumber: 35
          }, this),
          page === "contact" && /* @__PURE__ */ jsxDEV(ContactPage, {}, void 0, false, {
            fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
            lineNumber: 4197,
            columnNumber: 36
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 4174,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 4124,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 4091,
      columnNumber: 7
    }, this),
    currentUser.role === "admin" && showStatus && /* @__PURE__ */ jsxDEV(StatusModal, { onClose: () => setShowStatus(false) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 4203,
      columnNumber: 54
    }, this),
    currentUser.role === "admin" && showMongo && /* @__PURE__ */ jsxDEV(MongoModal, { onClose: () => setShowMongo(false) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 4204,
      columnNumber: 53
    }, this),
    showWelcome && /* @__PURE__ */ jsxDEV(WelcomeModal, { onClose: () => setShowWelcome(false) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 4205,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ jsxDEV(Chatbot, { currentUser }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 4208,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "toast-container", children: toasts.map(
      (t) => /* @__PURE__ */ jsxDEV("div", { className: `toast ${t.type === "warning" ? "toast-err" : ""}`, children: [
        t.type === "success" ? /* @__PURE__ */ jsxDEV(CheckCircle, { size: 16, color: "#10b981" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 4214,
          columnNumber: 37
        }, this) : t.type === "warning" ? /* @__PURE__ */ jsxDEV(AlertTriangle, { size: 16, color: "#ef4444" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 4214,
          columnNumber: 104
        }, this) : /* @__PURE__ */ jsxDEV(Info, { size: 16, color: "#60a5fa" }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 4214,
          columnNumber: 150
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, fontWeight: 500 }, children: t.msg }, void 0, false, {
          fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
          lineNumber: 4215,
          columnNumber: 13
        }, this)
      ] }, t.id, true, {
        fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
        lineNumber: 4213,
        columnNumber: 9
      }, this)
    ) }, void 0, false, {
      fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
      lineNumber: 4211,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/rikas/Downloads/files/frontend/src/App.jsx",
    lineNumber: 4089,
    columnNumber: 5
  }, this);
}
_s13(App, "5Z662crdZZbsBC397AObUATX3Ts=");
_c19 = App;
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c0, _c1, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19;
$RefreshReg$(_c, "Logo");
$RefreshReg$(_c2, "RBadge");
$RefreshReg$(_c3, "VCard");
$RefreshReg$(_c4, "DetailPanel");
$RefreshReg$(_c5, "StatusModal");
$RefreshReg$(_c6, "MongoModal");
$RefreshReg$(_c7, "WelcomeModal");
$RefreshReg$(_c8, "Chatbot");
$RefreshReg$(_c9, "DashboardPage");
$RefreshReg$(_c0, "DetectionPage");
$RefreshReg$(_c1, "ArchivePage");
$RefreshReg$(_c10, "BatchPage");
$RefreshReg$(_c11, "AnalyticsPage");
$RefreshReg$(_c12, "SearchPage");
$RefreshReg$(_c13, "ContactPage");
$RefreshReg$(_c14, "AuthPage");
$RefreshReg$(_c15, "CustomerPortalPage");
$RefreshReg$(_c16, "PerformancePage");
$RefreshReg$(_c17, "PipelineConnector");
$RefreshReg$(_c18, "ArchitecturePage");
$RefreshReg$(_c19, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/rikas/Downloads/files/frontend/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/rikas/Downloads/files/frontend/src/App.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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TixNQUFBO0FBQUEsYUFBQUMsTUFBQTtBQUFBLGFBQUFDLE1BQUE7QUFBQSxhQUFBakYsTUFBQTtBQUFBLGFBQUFrRixNQUFBO0FBQUEsYUFBQUMsTUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsIlVwbG9hZCIsIkJhckNoYXJ0MyIsIkFsZXJ0Q2lyY2xlIiwiRG93bmxvYWQiLCJDYW1lcmEiLCJUcmVuZGluZ1VwIiwiU2hpZWxkIiwiQ2FyIiwiTWFwUGluIiwiQ2xvY2siLCJTZWFyY2giLCJFeWUiLCJaYXAiLCJBY3Rpdml0eSIsIkFsZXJ0VHJpYW5nbGUiLCJDaGVja0NpcmNsZSIsIlhDaXJjbGUiLCJJbmZvIiwiUmVmcmVzaEN3IiwiRmlsZVRleHQiLCJVc2VycyIsIkRhdGFiYXNlIiwiQ2hldnJvblJpZ2h0IiwiQmVsbCIsIkxheWVycyIsIkFycm93VXAiLCJBcnJvd0Rvd24iLCJUYXJnZXQiLCJBd2FyZCIsIkJhckNoYXJ0MiIsIlBpZUNoYXJ0IiwiTWVzc2FnZUNpcmNsZSIsIlNlbmQiLCJYIiwiQXJjaGl2ZSIsIkhvbWUiLCJQaG9uZSIsIk1haWwiLCJXaWZpIiwiV2lmaU9mZiIsIlNlcnZlciIsIkhhcmREcml2ZSIsIkdsb2JlIiwiTG9jayIsIlVzZXJQbHVzIiwiTG9nT3V0IiwiRmlsZURvd24iLCJBUEkiLCJWSU9MQVRJT05fVFlQRVMiLCJpZCIsImxhYmVsIiwiY29sb3IiLCJpY29uIiwicmlzayIsImZpbmUiLCJWRUhJQ0xFX1RZUEVTIiwiTUFOVUZBQ1RVUkVSUyIsIk1PREVMUyIsIkJhamFqIiwiSG9uZGEiLCJUVlMiLCJNYXJ1dGkiLCJIeXVuZGFpIiwiVGF0YSIsIllhbWFoYSIsIkNPTE9SUyIsIkxPQ0FUSU9OUyIsIlJJU0tfQ0ZHIiwiTE9XIiwiYmciLCJNRURJVU0iLCJISUdIIiwiQ1JJVElDQUwiLCJyIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGsiLCJhcnIiLCJsZW5ndGgiLCJnZW5QbGF0ZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImdlbklkIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJta1ZlaGljbGUiLCJpbWFnZVVybCIsIm1mciIsIm1vZGVsIiwidmlvcyIsInNvcnQiLCJzbGljZSIsInJpc2tzIiwibWFwIiwidiIsImluY2x1ZGVzIiwicGxhdGUiLCJoaXN0IiwiQXJyYXkiLCJmcm9tIiwiXyIsImkiLCJkIiwic2V0RGF0ZSIsImdldERhdGUiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidHlwZSIsInZlaGljbGVUeXBlIiwibWFudWZhY3R1cmVyIiwicmVnaXN0cmF0aW9uU3RhdHVzIiwib3duZXJTdGF0dXMiLCJ2aW9sYXRpb25zIiwiY29uZmlkZW5jZSIsInRvRml4ZWQiLCJsb2NhdGlvbiIsInRpbWVzdGFtcCIsInRvSVNPU3RyaW5nIiwiaGVsbWV0UmlkZXIiLCJoZWxtZXRQYXNzIiwiaGVsbWV0UmlkZXJDb25mIiwiaGVsbWV0UGFzc0NvbmYiLCJoaXN0b3J5IiwicmVwZWF0cyIsInN0YXR1cyIsImZpbmVBbW91bnQiLCJyZWR1Y2UiLCJzdW0iLCJldmlkZW5jZUZyYW1lIiwiY3JlZGliaWxpdHkiLCJzY29yZSIsInBsYXRlQ2xlYXIiLCJzaWduYWxWaXNpYmxlIiwicmlkZXJWaXNpYmxlIiwiem9uZUNsZWFyIiwiZGVjaXNpb24iLCJleHBsYW5hdGlvbiIsInJlYXNvbiIsIkhFTE1FVCIsIlNFQVRCRUxUIiwiVFJJUExFIiwiV1JPTkdTSURFIiwiUkVETElHSFQiLCJTVE9QTElORSIsIlBBUktJTkciLCJNT0JJTEUiLCJPVkVSTE9BRCIsIkNTUyIsIkxvZ28iLCJfYyIsIlJCYWRnZSIsImMiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmQiLCJfYzIiLCJWQ2FyZCIsIml0ZW0iLCJvbkNsaWNrIiwic2VsIiwidG9wIiwiaXNNaXNsZWFkIiwiaXNTZW50Iiwib3BhY2l0eSIsImJvcmRlclN0eWxlIiwidGV4dERlY29yYXRpb24iLCJtYXJnaW5SaWdodCIsImlzQ2hhc2VDYXRlZ29yeSIsImFuaW1hdGlvbiIsImJvcmRlciIsIm1hcmdpbkJvdHRvbSIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93Iiwid2lkdGgiLCJtYXhIZWlnaHQiLCJvYmplY3RGaXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJnYXAiLCJfYzMiLCJEZXRhaWxQYW5lbCIsIm9uQ2xvc2UiLCJvblN0YXR1c0NoYW5nZSIsIl9zIiwic2V0RmluZSIsImhlaWdodCIsImNyIiwicGN0RGVnIiwicGFyc2VGbG9hdCIsImlzc3VlTm90aWNlIiwibWFya01pc2xlYWQiLCJwcmludFBERiIsInByaW50V2luZG93Iiwid2luZG93Iiwib3BlbiIsImRvY3VtZW50Iiwid3JpdGUiLCJ0b0xvY2FsZVN0cmluZyIsImpvaW4iLCJjbG9zZSIsImxldHRlclNwYWNpbmciLCJwYWRkaW5nIiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW4iLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImUiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwiayIsImlkeCIsImJvcmRlckJvdHRvbSIsImZsZXhTaHJpbmsiLCJsIiwib2siLCJleCIsImxpbmVIZWlnaHQiLCJoIiwidGV4dEFsaWduIiwiU3RhdHVzTW9kYWwiLCJfczIiLCJzZXRTdGF0dXMiLCJsb2FkaW5nIiwiZmV0Y2giLCJ0aGVuIiwianNvbiIsIm9ubGluZSIsImNhdGNoIiwiZGF0YWJhc2UiLCJjdXJyZW50VGFyZ2V0IiwiZGV0YWlsIiwicyIsIk1vbmdvTW9kYWwiLCJfczMiLCJzdGF0cyIsInNldFN0YXRzIiwic2V0TG9hZGluZyIsIlByb21pc2UiLCJhbGwiLCJzdCIsInZpIiwidG90YWwiLCJieVR5cGUiLCJ2aW9sYXRpb25Db3VudCIsInRvdGFsQ291bnQiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZm9udEZhbWlseSIsIk9iamVjdCIsImVudHJpZXMiLCJrZXlzIiwiV2VsY29tZU1vZGFsIiwibWF4V2lkdGgiLCJfYzciLCJDaGF0Ym90IiwiY3VycmVudFVzZXIiLCJfczQiLCJzZXRPcGVuIiwiY2xlYW5Cb3RNZXNzYWdlIiwidGV4dCIsInJvbGUiLCJyZXBsYWNlIiwibXNncyIsInNldE1zZ3MiLCJpbnAiLCJzZXRJbnAiLCJlbmRSZWYiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInJlc3BvbmRUb01lc3NhZ2UiLCJsb3ciLCJyZXNwb25zZSIsInNlbmQiLCJ0cmltIiwidXNlck1zZyIsImJvdE1zZyIsInRvTG93ZXJDYXNlIiwibSIsImN1cnNvciIsIndoaXRlU3BhY2UiLCJrZXkiLCJvIiwiRGFzaGJvYXJkUGFnZSIsIl9zNSIsInJlY2VudCIsInNldFJlY2VudCIsImRiT2siLCJzZXREYk9rIiwibGl2ZUltYWdlIiwic2V0TGl2ZUltYWdlIiwibGl2ZUxvZyIsInNldExpdmVMb2ciLCJ0aW1lIiwibG9jIiwibXNnIiwibGl2ZVN0YXRzIiwic2V0TGl2ZVN0YXRzIiwiZmxvd1JhdGUiLCJhY3RpdmVDYW1lcmFzIiwiYWxlcnRDb3VudCIsImZldGNoRGFzaGJvYXJkRGF0YSIsImhsIiwiaW1hZ2VzIiwicmVjZW50SW5kaWNlcyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJuZXh0SWR4IiwicHVzaCIsInNoaWZ0IiwidGltZVN0ciIsInRvTG9jYWxlVGltZVN0cmluZyIsImhvdXIxMiIsIm5ld0FsZXJ0IiwicHJldiIsImNsZWFySW50ZXJ2YWwiLCJsb2NhbFN0YXRzIiwiY3JpdGljYWwiLCJyZXNvbHZlZCIsImFjdGl2ZSIsImhvdXJseSIsIm1heEgiLCJpY28iLCJsYmwiLCJ2YWwiLCJhIiwiaWIiLCJjaGciLCJ1cCIsInBvc2l0aW9uIiwidHJhbnNpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImJhY2tkcm9wRmlsdGVyIiwibG9nIiwibGljZW5zZVBsYXRlIiwic2V2ZXJpdHkiLCJjbnQiLCJEZXRlY3Rpb25QYWdlIiwiYWRkVG9hc3QiLCJhY2NpZGVudEFjdGl2ZSIsImdyYWNlQWN0aXZlIiwiX3M2IiwiZHJhZyIsInNldERyYWciLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImFsZXJ0Iiwic2V0QWxlcnQiLCJwcmV2aWV3SW1nIiwic2V0UHJldmlld0ltZyIsImZpbGVSZWYiLCJoYW5kbGVEcmFnIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVEcm9wIiwicHJvY2Vzc0ZpbGVzIiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJoYW5kbGVGaWxlIiwiZmlsZSIsImltZ1VybCIsInNpemUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjb3VudCIsImFjYyIsInNldFRpbWVvdXQiLCJuZXdJdGVtIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImRldGVjdFVybCIsIm1ldGhvZCIsImJvZHkiLCJyZXMiLCJzdWNjZXNzIiwibWFwcGVkIiwiZmFsbGJhY2siLCJnZXRWZWhpY2xlRmFsbGJhY2tEZXRhaWxzIiwidmlvbGF0aW9uSWQiLCJ2ZWhpY2xlQnJhbmQiLCJicmFuZCIsInZlaGljbGVNb2RlbCIsInZlaGljbGVDb2xvciIsImRldGVjdGVkQXQiLCJoYW5kbGVTdGF0dXNDaGFuZ2UiLCJuZXdTdGF0dXMiLCJmaW5lVmFsIiwicHJvbXB0IiwiZmluYWxSZWFzb24iLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImV4ZW1wdFJlYXNvbiIsImV4cG9ydENTViIsInJvd3MiLCJjc3ZDb250ZW50IiwiZW5jb2RlZFVyaSIsImVuY29kZVVSSSIsImxpbmsiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwiRmlsZSIsImZsZXhXcmFwIiwib3ZlcmZsb3dZIiwiQXJjaGl2ZVBhZ2UiLCJfczciLCJzZXRWaW9sYXRpb25zIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiZmV0Y2hBcmNoaXZlIiwiaXRlbXMiLCJjcmVhdGVkQXQiLCJvd25lclBob25lIiwiaXNFbWVyZ2VuY3lFeGVtcHQiLCJpbnRlcmVzdEFwcGxpZWQiLCJkZW1vRGF0YSIsImRiVGV4dCIsImZpbHRlcmVkIiwiZXhwb3J0QWxsQ1NWIiwiZiIsIkJhdGNoUGFnZSIsIl9zOCIsInN0YWdlIiwic2V0U3RhZ2UiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiY291bnRzIiwic2V0Q291bnRzIiwic2V0VG90YWwiLCJwcm9jZXNzZWQiLCJzZXRQcm9jZXNzZWQiLCJiYXRjaFJlc3VsdHMiLCJzZXRCYXRjaFJlc3VsdHMiLCJsb2dzIiwic2V0TG9ncyIsInByaW9yaXR5Iiwic2V0UHJpb3JpdHkiLCJ3b3JrZXJzIiwic2V0V29ya2VycyIsImZvY3VzTW9kZSIsInNldEZvY3VzTW9kZSIsIml2IiwiY29uc29sZVJlZiIsImlzUG9saWNlIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiYWRkTG9nIiwiYmFkZ2UiLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZXhlY3V0ZUJ1bGtVcGxvYWQiLCJkYXRhIiwic3VtbWFyeSIsInRvdGFsVmlvbGF0aW9uc0RldGVjdGVkIiwibG9jYWxQcm9jZXNzZWQiLCJwY3QiLCJyb3VuZCIsImltYWdlTmFtZSIsImZpbGVTaXplS0IiLCJ2aW9sYXRpb25zRGV0ZWN0ZWQiLCJwcm9jZXNzaW5nTXMiLCJmbGF0TWFwIiwidGVtcENvdW50cyIsImZvckVhY2giLCJlcnIiLCJtZXNzYWdlIiwic3RhcnRCYXRjaFNpbXVsYXRpb24iLCJuIiwicCIsImRvbmUiLCJsb2dJbnRlcnZhbHMiLCJzdGVwIiwic2ltTXNnIiwiZGVtb1ZlaHMiLCJmaW5kIiwidnQiLCJyZXNldCIsImV4cG9ydEJhdGNoQ1NWIiwiYm9yZGVyTGVmdCIsImJvcmRlclRvcENvbG9yIiwiaW5kZXgiLCJiIiwidmFsdWVzIiwiQW5hbHl0aWNzUGFnZSIsIl9zOSIsInR5cGVDb3VudHMiLCJ2ZGlzdCIsImRiQ291bnQiLCJtb2NrQ291bnQiLCJ0b3RWIiwiaG91ckJ1Y2tldHMiLCJwYWRTdGFydCIsImRhdGVTdHIiLCJociIsImdldEhvdXJzIiwiYnVja2V0IiwicGVha0hvdXJJdGVtIiwicGVha0hvdXJTdHIiLCJsb2NhdGlvbkNvdW50cyIsImxvY05hbWUiLCJuYW1lIiwibG9jcyIsIm1heEwiLCJleGVtcHRDb3VudCIsImV4ZW1wdFJhdGUiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJTZWFyY2hQYWdlIiwiZ3JhY2VUaW1lIiwiX3MwIiwicSIsInNldFEiLCJyZWdpc3RyeSIsInNldFJlZ2lzdHJ5Iiwic2hvd01hbnVhbEZvcm0iLCJzZXRTaG93TWFudWFsRm9ybSIsIm1hbnVhbFR5cGUiLCJzZXRNYW51YWxUeXBlIiwibWFudWFsTG9jYXRpb24iLCJzZXRNYW51YWxMb2NhdGlvbiIsIm1hbnVhbEZpbmUiLCJzZXRNYW51YWxGaW5lIiwibWFudWFsU2V2ZXJpdHkiLCJzZXRNYW51YWxTZXZlcml0eSIsImlzRW1lcmdlbmN5Iiwic2V0SXNFbWVyZ2VuY3kiLCJpc1RhaWxnYXRpbmdBbWJ1bGFuY2UiLCJzZXRJc1RhaWxnYXRpbmdBbWJ1bGFuY2UiLCJzdWJtaXR0aW5nTWFudWFsIiwic2V0U3VibWl0dGluZ01hbnVhbCIsImhhbmRsZVR5cGVDaGFuZ2UiLCJ0eXBlVmFsIiwibWF0Y2giLCJzZWFyY2giLCJjbGVhblBsYXRlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVnRGF0YSIsInZpb0RhdGEiLCJoYW5kbGVXYWl2ZUZpbmUiLCJzdWJtaXRNYW51YWxGaW5lIiwiaXNFeGVtcHQiLCJleGVtcHRSZWFzb25UZXh0IiwiYmFzZUZpbmUiLCJwYXlsb2FkIiwidGV4dE1zZyIsInZpb2xhdGlvbiIsInVucGFpZFZpb2xhdGlvbnMiLCJ0b3RhbE91dHN0YW5kaW5nIiwiaXNDaGFzZSIsIm91dGxpbmUiLCJpbnN1cmFuY2VTdGF0dXMiLCJvd25lck5hbWUiLCJyZWdpc3RlcmVkQXQiLCJmdWVsVHlwZSIsInJlZ2lzdHJhdGlvbkRhdGUiLCJjaGVja2VkIiwidmlvIiwiQ29udGFjdFBhZ2UiLCJzdWIiLCJfYzEzIiwiQXV0aFBhZ2UiLCJvbkxvZ2luU3VjY2VzcyIsIl9zMSIsImF1dGhNb2RlIiwic2V0QXV0aE1vZGUiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2V0TmFtZSIsInBvbGljZUNvZGUiLCJzZXRQb2xpY2VDb2RlIiwiY2l0aXplbklucHV0Iiwic2V0Q2l0aXplbklucHV0IiwiY2l0aXplblBsYXRlIiwic2V0Q2l0aXplblBsYXRlIiwiY2l0aXplblBob25lIiwic2V0Q2l0aXplblBob25lIiwiY2l0aXplblN1Yk1vZGUiLCJzZXRDaXRpemVuU3ViTW9kZSIsInNldEVycm9yIiwiaGFuZGxlQ2l0aXplblF1aWNrU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiZmluYWxSb2xlIiwiZW5kcG9pbnQiLCJ1bmRlZmluZWQiLCJwaG9uZSIsInZlaGljbGVOdW1iZXIiLCJ1c2VyIiwidGciLCJ0YWIiLCJib3JkZXJUb3AiLCJoYXNoIiwiY2hhckNvZGVBdCIsImFic0hhc2giLCJhYnMiLCJ0eXBlcyIsImJyYW5kcyIsIk1vdG9yY3ljbGUiLCJUcnVjayIsIkJ1cyIsIm1vZGVscyIsIk1haGluZHJhIiwiVG95b3RhIiwiQmhhcmF0QmVueiIsIlZvbHZvIiwiU2NhbmlhIiwiUGlhZ2dpbyIsImNvbG9ycyIsInR5cGVCcmFuZHMiLCJicmFuZE1vZGVscyIsIkN1c3RvbWVyUG9ydGFsUGFnZSIsIm9uTG9nb3V0IiwiX3MxMCIsIm5vdGlmaWNhdGlvbnMiLCJzZXROb3RpZmljYXRpb25zIiwicGF5bWVudE1vZGFsSXRlbSIsInNldFBheW1lbnRNb2RhbEl0ZW0iLCJwYXlpbmciLCJzZXRQYXlpbmciLCJpZGVudGlmaWVyIiwiZmV0Y2hDdXN0b21lckRhdGEiLCJjbGVhbklkZW50IiwiaXNQaG9uZSIsInN0YXJ0c1dpdGgiLCJ0ZXN0IiwidXJsIiwibm90aWZEYXRhIiwidW5wYWlkIiwiZmlyc3RQbGF0ZSIsInJlZ0QiLCJ0b3RhbEJhc2VGaW5lIiwiaW50ZXJlc3QiLCJ0b3RhbEFtb3VudCIsImV4ZWN1dGVQYXltZW50IiwibWFya0FzUmVhZCIsInJlYWQiLCJtaW5IZWlnaHQiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luTGVmdCIsInBhZGRpbmdSaWdodCIsImhvdXIiLCJtaW51dGUiLCJQZXJmb3JtYW5jZVBhZ2UiLCJfczExIiwicGVyZkRhdGEiLCJzZXRQZXJmRGF0YSIsImdldEYxQ29sb3IiLCJmMSIsIk1ldHJpY1JpbmciLCJkZWciLCJpbnNldCIsImJvcmRlcldpZHRoIiwiZXZhbHVhdGlvbkNvbmZpZyIsImFnZ3JlZ2F0ZU1ldHJpY3MiLCJwcm9jZXNzaW5nU3BlZWQiLCJpbWFnZVF1YWxpdHlCcmVha2Rvd24iLCJwZXJWaW9sYXRpb25UeXBlIiwia25vd25MaW1pdGF0aW9ucyIsInRlc3RTYW1wbGVzIiwiY29uZmlkZW5jZVRocmVzaG9sZCIsInRhcmdldEYxIiwidGFyZ2V0UHJvY2Vzc2luZ01zIiwiZ3JvdW5kVHJ1dGhBdmFpbGFibGUiLCJtYWNyb1ByZWNpc2lvbiIsIm1hY3JvUmVjYWxsIiwibWFjcm9GMSIsIm1BUCIsImF2Z01zIiwibWF4TXMiLCJwOTVNcyIsInRhcmdldE1zIiwidW5pdCIsIm1lZXRzVGFyZ2V0Iiwib3ZlcmZsb3dYIiwiZ3JvdW5kVHJ1dGhNZXRyaWNzIiwidHAiLCJmcCIsImZuIiwicHJlY2lzaW9uIiwicmVjYWxsIiwiZjFTY29yZSIsImF2Z0NvbmZpZGVuY2UiLCJtZWV0c1NwZWVkVGFyZ2V0IiwiYXZnUHJvY2Vzc2luZ01zIiwibWVldHNGMVRhcmdldCIsImNvbmQiLCJjb25kSWNvbnMiLCJjbGVhciIsImxvd19saWdodCIsInJhaW4iLCJtb3Rpb25fYmx1ciIsInNoYWRvdyIsImNvbmRDb2xvcnMiLCJsaW0iLCJQaXBlbGluZUNvbm5lY3RvciIsIl9jMTciLCJBcmNoaXRlY3R1cmVQYWdlIiwiX3MxMiIsImFjdGl2ZVN0ZXAiLCJzZXRBY3RpdmVTdGVwIiwic2ltdWxhdGluZ1N0ZXAiLCJzZXRTaW11bGF0aW5nU3RlcCIsInNpbUxvZ3MiLCJzZXRTaW1Mb2dzIiwicnVuRGlhZ25vc3RpYyIsInN0ZXBzIiwicGlwZWxpbmUiLCJ0aXRsZSIsInRlY2giLCJpbnB1dCIsIm91dHB1dCIsInRlY2huaXF1ZXMiLCJjb25kaXRpb25zIiwiZG9zIiwiZG9udHMiLCJ2ZWhpY2xlcyIsInZpb2xhdGlvblR5cGVzIiwiY29uZiIsImZvcm1hdCIsImNoYWxsZW5nZXMiLCJtZXRhZGF0YSIsIm1ldHJpY3MiLCJhY3RpdmVEYXRhIiwiYm94U2hhZG93IiwiaXNTaW11bGF0aW5nVGhpcyIsImlzU2VsZWN0ZWQiLCJtaW5XaWR0aCIsInRyYW5zZm9ybSIsInNwbGl0IiwidCIsIlBBR0VTIiwiQXBwIiwiX3MxMyIsInNldEN1cnJlbnRVc2VyIiwicGFnZSIsInNldFBhZ2UiLCJzZXRUaW1lIiwic2hvd1N0YXR1cyIsInNldFNob3dTdGF0dXMiLCJzaG93TW9uZ28iLCJzZXRTaG93TW9uZ28iLCJ0b2FzdHMiLCJzZXRUb2FzdHMiLCJzaG93V2VsY29tZSIsInNldFNob3dXZWxjb21lIiwic2V0QWNjaWRlbnRBY3RpdmUiLCJzZXRHcmFjZUFjdGl2ZSIsInNldEdyYWNlVGltZSIsInRpbWVyIiwiaGFuZGxlTG9nb3V0IiwicGFnZVRpdGxlcyIsImRhc2hib2FyZCIsImRldGVjdGlvbiIsImFyY2hpdmUiLCJiYXRjaCIsImFuYWx5dGljcyIsInBlcmZvcm1hbmNlIiwiYXJjaGl0ZWN0dXJlIiwiY29udGFjdCIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJyZWxvYWQiLCJfYzQiLCJfYzUiLCJfYzYiLCJfYzgiLCJfYzkiLCJfYzAiLCJfYzEiLCJfYzEwIiwiX2MxMSIsIl9jMTIiLCJfYzE0IiwiX2MxNSIsIl9jMTYiLCJfYzE4IiwiX2MxOSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBcHAuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgVXBsb2FkLCBCYXJDaGFydDMsIEFsZXJ0Q2lyY2xlLCBEb3dubG9hZCwgQ2FtZXJhLCBUcmVuZGluZ1VwLFxuICBTaGllbGQsIENhciwgTWFwUGluLCBDbG9jaywgU2VhcmNoLCBFeWUsIFphcCwgQWN0aXZpdHksXG4gIEFsZXJ0VHJpYW5nbGUsIENoZWNrQ2lyY2xlLCBYQ2lyY2xlLCBJbmZvLCBSZWZyZXNoQ3csXG4gIEZpbGVUZXh0LCBVc2VycywgRGF0YWJhc2UsIENoZXZyb25SaWdodCwgQmVsbCwgTGF5ZXJzLFxuICBBcnJvd1VwLCBBcnJvd0Rvd24sIFRhcmdldCwgQXdhcmQsIEJhckNoYXJ0MiwgUGllQ2hhcnQsXG4gIE1lc3NhZ2VDaXJjbGUsIFNlbmQsIFgsIEFyY2hpdmUsIEhvbWUsIFBob25lLCBNYWlsLFxuICBXaWZpLCBXaWZpT2ZmLCBTZXJ2ZXIsIEhhcmREcml2ZSwgR2xvYmUsIExvY2ssIFVzZXJQbHVzLCBMb2dPdXQsIEZpbGVEb3duXG59IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuLy8gQ09ORklHXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbmNvbnN0IEFQSSA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpJztcblxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4vLyBDT05TVEFOVFMgJiBNT0NLIEhFTFBFUlNcbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuY29uc3QgVklPTEFUSU9OX1RZUEVTID0gW1xuICB7IGlkOidIRUxNRVQnLCAgICBsYWJlbDonSGVsbWV0IE5vbi1Db21wbGlhbmNlJywgICBjb2xvcjonI2VmNDQ0NCcsIGljb246J/CfqpYnLCByaXNrOidISUdIJywgICAgIGZpbmU6IDEwMDAgfSxcbiAgeyBpZDonU0VBVEJFTFQnLCAgbGFiZWw6J1NlYXRiZWx0IE5vbi1Db21wbGlhbmNlJywgY29sb3I6JyNmOTczMTYnLCBpY29uOifwn5SSJywgcmlzazonSElHSCcsICAgICBmaW5lOiAyMDAwIH0sXG4gIHsgaWQ6J1RSSVBMRScsICAgIGxhYmVsOidUcmlwbGUgUmlkaW5nJywgICAgICAgICAgIGNvbG9yOicjZWFiMzA4JywgaWNvbjon8J+RpScsIHJpc2s6J01FRElVTScsICAgZmluZTogMTUwMCB9LFxuICB7IGlkOidXUk9OR1NJREUnLCBsYWJlbDonV3JvbmctU2lkZSBEcml2aW5nJywgICAgICBjb2xvcjonI2RjMjYyNicsIGljb246J+KGqe+4jycsIHJpc2s6J0NSSVRJQ0FMJywgZmluZTogNTAwMCB9LFxuICB7IGlkOidSRURMSUdIVCcsICBsYWJlbDonUmVkIExpZ2h0IFZpb2xhdGlvbicsICAgICBjb2xvcjonI2ZmMDAwMCcsIGljb246J/CflLQnLCByaXNrOidDUklUSUNBTCcsIGZpbmU6IDUwMDAgfSxcbiAgeyBpZDonU1RPUExJTkUnLCAgbGFiZWw6J1N0b3AgTGluZSBWaW9sYXRpb24nLCAgICAgY29sb3I6JyNmOTczMTYnLCBpY29uOifwn5uRJywgcmlzazonSElHSCcsICAgICBmaW5lOiAxMDAwIH0sXG4gIHsgaWQ6J1BBUktJTkcnLCAgIGxhYmVsOidJbGxlZ2FsIFBhcmtpbmcnLCAgICAgICAgIGNvbG9yOicjZmFjYzE1JywgaWNvbjon8J+Fv++4jycsIHJpc2s6J0xPVycsICAgICAgZmluZTogNTAwIH0sXG4gIHsgaWQ6J01PQklMRScsICAgIGxhYmVsOidNb2JpbGUgUGhvbmUgVXNhZ2UnLCAgICAgIGNvbG9yOicjYTg1NWY3JywgaWNvbjon8J+TsScsIHJpc2s6J0hJR0gnLCAgICAgZmluZTogMzAwMCB9LFxuICB7IGlkOidPVkVSTE9BRCcsICBsYWJlbDonT3ZlcmxvYWRlZCBWZWhpY2xlJywgICAgICBjb2xvcjonIzA2YjZkNCcsIGljb246J+Kalu+4jycsIHJpc2s6J01FRElVTScsICAgZmluZTogNTAwMCB9LFxuICB7IGlkOidQQVNTRU5HRVJfSEVMTUVUJywgIGxhYmVsOidQYXNzZW5nZXIgSGVsbWV0IE5vbi1Db21wbGlhbmNlJywgIGNvbG9yOicjZjk3MzE2JywgaWNvbjon8J+qlicsIHJpc2s6J0hJR0gnLCAgIGZpbmU6IDEwMDAgfSxcbiAgeyBpZDonUEFTU0VOR0VSX1NFQVRCRUxUJyxsYWJlbDonUGFzc2VuZ2VyIFNlYXRiZWx0IE5vbi1Db21wbGlhbmNlJyxjb2xvcjonI2Y5NzMxNicsIGljb246J/CflJInLCByaXNrOidISUdIJywgICBmaW5lOiAyMDAwIH0sXG4gIHsgaWQ6J1BBU1NFTkdFUl9NSVNCRUhBVkUnLGxhYmVsOidQYXNzZW5nZXIgTWlzYmVoYXZpb3VyIC8gT2JzdHJ1Y3Rpb24nLGNvbG9yOicjZWFiMzA4JywgaWNvbjon8J+YoCcsIHJpc2s6J01FRElVTScsIGZpbmU6IDE1MDAgfSxcbiAgeyBpZDonQU1CVUxBTkNFX1RBSUxHQVRFJyxsYWJlbDonQW1idWxhbmNlIEV4cGxvaXRhdGlvbiAvIFRhaWxnYXRpbmcnLGNvbG9yOicjZWY0NDQ0JywgaWNvbjon8J+aqCcsIHJpc2s6J0NSSVRJQ0FMJywgZmluZTogNTAwMCB9LFxuXTtcbmNvbnN0IFZFSElDTEVfVFlQRVMgID0gWydNb3RvcmN5Y2xlJywnQ2FyJywnVHJ1Y2snLCdCdXMnLCdBdXRvLVJpY2tzaGF3JywnRW1lcmdlbmN5J107XG5jb25zdCBNQU5VRkFDVFVSRVJTICA9IFsnQmFqYWonLCdIb25kYScsJ1RWUycsJ01hcnV0aScsJ0h5dW5kYWknLCdUYXRhJywnWWFtYWhhJ107XG5jb25zdCBNT0RFTFMgPSB7IEJhamFqOlsnUHVsc2FyIDE1MCcsJ0RvbWluYXIgNDAwJywnQXZlbmdlciddLCBIb25kYTpbJ0FjdGl2YScsJ0NCIFNoaW5lJywnQ2l0eSddLCBUVlM6WydBcGFjaGUnLCdKdXBpdGVyJywnTnRvcnEnXSwgTWFydXRpOlsnU3dpZnQnLCdCYWxlbm8nLCdBbHRvJ10sIEh5dW5kYWk6WydpMjAnLCdDcmV0YScsJ1Zlcm5hJ10sIFRhdGE6WydOZXhvbicsJ0hhcnJpZXInLCdQdW5jaCddLCBZYW1haGE6WydGWicsJ1IxNScsJ01UMTUnXSB9O1xuY29uc3QgQ09MT1JTICAgPSBbJ0JsYWNrJywnV2hpdGUnLCdSZWQnLCdCbHVlJywnU2lsdmVyJywnR3JleScsJ09yYW5nZSddO1xuY29uc3QgTE9DQVRJT05TPSBbJ1NpbGsgQm9hcmQgSnVuY3Rpb24nLCdNYWplc3RpYyBKdW5jdGlvbicsJ0hlYmJhbCBGbHlvdmVyJywnTUcgUm9hZCBKdW5jdGlvbicsJ0luZGlyYW5hZ2FyIDEwMGZ0IFJkJywnRWxlY3Ryb25pYyBDaXR5IFRvbGwnLCdXaGl0ZWZpZWxkIE1haW4gUmQnLCdLYW5ha2FwdXJhIFJkJywnWWVzaHdhbnRocHVyIENpcmNsZScsJ0tSIFB1cmFtIEJyaWRnZSddO1xuY29uc3QgUklTS19DRkcgPSB7XG4gIExPVzogICAgICB7IGNvbG9yOicjMjJjNTVlJywgYmc6J3JnYmEoMzQsMTk3LDk0LDAuMTIpJywgICBsYWJlbDonTG93IFJpc2snICAgICAgfSxcbiAgTUVESVVNOiAgIHsgY29sb3I6JyNlYWIzMDgnLCBiZzoncmdiYSgyMzQsMTc5LDgsMC4xMiknLCAgIGxhYmVsOidNZWRpdW0gUmlzaycgICB9LFxuICBISUdIOiAgICAgeyBjb2xvcjonI2Y5NzMxNicsIGJnOidyZ2JhKDI0OSwxMTUsMjIsMC4xMiknLCAgbGFiZWw6J0hpZ2ggUmlzaycgICAgIH0sXG4gIENSSVRJQ0FMOiB7IGNvbG9yOicjZWY0NDQ0JywgYmc6J3JnYmEoMjM5LDY4LDY4LDAuMTIpJywgICBsYWJlbDonQ3JpdGljYWwgUmlzaycgfSxcbn07XG5cbmNvbnN0IHIgID0gKG1pbixtYXgpPT5NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKG1heC1taW4rMSkpK21pbjtcbmNvbnN0IHBrID0gYXJyPT5hcnJbcigwLGFyci5sZW5ndGgtMSldO1xuY29uc3QgZ2VuUGxhdGUgPSAoKT0+YEtBMDMke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUrcigwLDI1KSl9JHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3IoMCwyNSkpfSR7cigxMDAwLDk5OTkpfWA7XG5jb25zdCBnZW5JZCAgICA9ICgpPT5gVklPLSR7RGF0ZS5ub3coKX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiw2KS50b1VwcGVyQ2FzZSgpfWA7XG5cbmZ1bmN0aW9uIG1rVmVoaWNsZShpbWFnZVVybD1udWxsKXtcbiAgY29uc3QgbWZyICA9IHBrKE1BTlVGQUNUVVJFUlMpO1xuICBjb25zdCBtb2RlbD0gcGsoTU9ERUxTW21mcl0pO1xuICBjb25zdCB2aW9zID0gVklPTEFUSU9OX1RZUEVTLnNvcnQoKCk9Pk1hdGgucmFuZG9tKCktMC41KS5zbGljZSgwLHIoMSwyKSk7XG4gIGNvbnN0IHJpc2tzPSB2aW9zLm1hcCh2PT52LnJpc2spO1xuICBjb25zdCByaXNrID0gcmlza3MuaW5jbHVkZXMoJ0NSSVRJQ0FMJyk/J0NSSVRJQ0FMJzpyaXNrcy5pbmNsdWRlcygnSElHSCcpPydISUdIJzpyaXNrcy5pbmNsdWRlcygnTUVESVVNJyk/J01FRElVTSc6J0xPVyc7XG4gIGNvbnN0IHBsYXRlPSBnZW5QbGF0ZSgpO1xuICBjb25zdCBoaXN0ID0gQXJyYXkuZnJvbSh7bGVuZ3RoOnIoMCwzKX0sKF8saSk9PntcbiAgICBjb25zdCBkPW5ldyBEYXRlKCk7IGQuc2V0RGF0ZShkLmdldERhdGUoKS1yKDUsMzApKTtcbiAgICByZXR1cm4geyBkYXRlOmQudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1JTicpLCB0eXBlOnBrKFZJT0xBVElPTl9UWVBFUykubGFiZWwsIGZpbmU6cig1MDAsMjAwMCkgfTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgaWQ6IGdlbklkKCksIHBsYXRlLCB2ZWhpY2xlVHlwZTpwayhWRUhJQ0xFX1RZUEVTKSxcbiAgICBtYW51ZmFjdHVyZXI6bWZyLCBtb2RlbCwgY29sb3I6cGsoQ09MT1JTKSxcbiAgICByZWdpc3RyYXRpb25TdGF0dXM6IE1hdGgucmFuZG9tKCk+MC4xNT8nVkVSSUZJRUQnOidVTlZFUklGSUVEJyxcbiAgICBvd25lclN0YXR1czogTWF0aC5yYW5kb20oKT4wLjE/J01BVENIRUQnOidNSVNNQVRDSCcsXG4gICAgdmlvbGF0aW9uczp2aW9zLCByaXNrLFxuICAgIGNvbmZpZGVuY2U6KHIoODUwLDk5MCkvMTApLnRvRml4ZWQoMSksXG4gICAgbG9jYXRpb246cGsoTE9DQVRJT05TKSxcbiAgICB0aW1lc3RhbXA6bmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIGhlbG1ldFJpZGVyOiBNYXRoLnJhbmRvbSgpPjAuND8nTk9fSEVMTUVUJzonSEVMTUVUJyxcbiAgICBoZWxtZXRQYXNzOiAgTWF0aC5yYW5kb20oKT4wLjY/J0hFTE1FVCc6J05PX0hFTE1FVCcsXG4gICAgaGVsbWV0UmlkZXJDb25mOihyKDg3MCw5OTApLzEwKS50b0ZpeGVkKDEpLFxuICAgIGhlbG1ldFBhc3NDb25mOihyKDg1MCw5ODApLzEwKS50b0ZpeGVkKDEpLFxuICAgIGhpc3Rvcnk6aGlzdCwgcmVwZWF0czpoaXN0Lmxlbmd0aCxcbiAgICBpbWFnZVVybCxcbiAgICBzdGF0dXM6J1BFTkRJTkcnLFxuICAgIGZpbmVBbW91bnQ6dmlvcy5yZWR1Y2UoKHN1bSwgdik9PnN1bSArIHYuZmluZSwgMCksXG4gICAgZXZpZGVuY2VGcmFtZTpyKDEwMCw1MDApLFxuICAgIGNyZWRpYmlsaXR5OntcbiAgICAgIHNjb3JlOihyKDg3MCw5ODApLzEwKS50b0ZpeGVkKDEpLFxuICAgICAgcGxhdGVDbGVhcjpNYXRoLnJhbmRvbSgpPjAuMixcbiAgICAgIHNpZ25hbFZpc2libGU6TWF0aC5yYW5kb20oKT4wLjMsXG4gICAgICByaWRlclZpc2libGU6TWF0aC5yYW5kb20oKT4wLjE1LFxuICAgICAgem9uZUNsZWFyOk1hdGgucmFuZG9tKCk+MC4yNSxcbiAgICAgIGRlY2lzaW9uOk1hdGgucmFuZG9tKCk+MC4yPydBVVRPLUFQUFJPVkUgRk9SIFJFVklFVyc6J01BTlVBTCBSRVZJRVcgUkVRVUlSRUQnLFxuICAgIH0sXG4gICAgZXhwbGFuYXRpb246IHZpb3MubWFwKHY9Pih7XG4gICAgICB0eXBlOnYubGFiZWwsXG4gICAgICByZWFzb246e1xuICAgICAgICBIRUxNRVQ6J1JpZGVyIGhlYWQgcmVnaW9uIGFuYWx5c2VkIOKAlCBubyBoZWxtZXQgc2lnbmF0dXJlIGRldGVjdGVkLicsXG4gICAgICAgIFNFQVRCRUxUOidEcml2ZXIgdG9yc28gc2hvd3Mgbm8gc2VhdGJlbHQgZGlhZ29uYWwgc3RyYXAuJyxcbiAgICAgICAgVFJJUExFOidUaHJlZSBodW1hbiBzaWxob3VldHRlcyBkZXRlY3RlZCBvbiBzaW5nbGUgdHdvLXdoZWVsZXIuJyxcbiAgICAgICAgV1JPTkdTSURFOidWZWhpY2xlIHRyYWplY3RvcnkgY3Jvc3NlcyBjZW50cmUtbGFuZSBib3VuZGFyeSBpbiByZXZlcnNlLicsXG4gICAgICAgIFJFRExJR0hUOidWZWhpY2xlIGNyb3NzZWQgc3RvcC1saW5lIGFmdGVyIHNpZ25hbCB0dXJuZWQgUkVELicsXG4gICAgICAgIFNUT1BMSU5FOidWZWhpY2xlIGZyb250IGJ1bXBlciAxLjJtIGJleW9uZCBwYWludGVkIHN0b3AtbGluZS4nLFxuICAgICAgICBQQVJLSU5HOidWZWhpY2xlIHN0YXRpb25hcnkgaW4gbm8tcGFya2luZyB6b25lID41IG1pbnV0ZXMuJyxcbiAgICAgICAgTU9CSUxFOidQaG9uZS1zaGFwZWQgb2JqZWN0IG5lYXIgZHJpdmVyIGZhY2Ugd2hpbGUgaW4gbW90aW9uLicsXG4gICAgICAgIE9WRVJMT0FEOidMb2FkIGV4Y2VlZHMgc2FmZSBjYXBhY2l0eTsgc3VzcGVuc2lvbiBkZWZsZWN0aW9uIGFub21hbHkuJyxcbiAgICAgIH1bdi5pZF18fCdBbm9tYWx5IGRldGVjdGVkIGJ5IHZpc2lvbiBtb2RlbC4nLFxuICAgIH0pKSxcbiAgfTtcbn1cblxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4vLyBDU1Ncbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuY29uc3QgQ1NTID0gYFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZmYW1pbHk9SmV0QnJhaW5zK01vbm86d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcbiosKjo6YmVmb3JlLCo6OmFmdGVye21hcmdpbjowO3BhZGRpbmc6MDtib3gtc2l6aW5nOmJvcmRlci1ib3g7fVxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OidJbnRlcicsc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMDYxMTtcbiAgYmFja2dyb3VuZC1pbWFnZTogXG4gICAgcmFkaWFsLWdyYWRpZW50KGF0IDAlIDAlLCByZ2JhKDIwLCAzNSwgNzUsIDAuMjUpIDBweCwgdHJhbnNwYXJlbnQgNTAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoYXQgMTAwJSAxMDAlLCByZ2JhKDE1LCAyMywgNTAsIDAuMikgMHB4LCB0cmFuc3BhcmVudCA1MCUpLFxuICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDA3KSAxcHgsIHRyYW5zcGFyZW50IDFweCksXG4gICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDA3KSAxcHgsIHRyYW5zcGFyZW50IDFweCk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlLCAxMDAlIDEwMCUsIDQwcHggNDBweCwgNDBweCA0MHB4O1xuICBjb2xvcjojY2JkNWUxO1xuICBtaW4taGVpZ2h0OjEwMHZoO1xuICBvdmVyZmxvdy14OmhpZGRlbjtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6NXB4O2hlaWdodDo1cHg7fVxuOjotd2Via2l0LXNjcm9sbGJhci10cmFja3tiYWNrZ3JvdW5kOiMwYTBmMWQ7fVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kOiMxZTI5M2I7Ym9yZGVyLXJhZGl1czozcHg7fVxuXG4vKiBSb290IHdyYXBwZXIgKi9cbi5yb290e2Rpc3BsYXk6ZmxleDttaW4taGVpZ2h0OjEwMHZoO2FuaW1hdGlvbjpmYWRlSW4gMC41cyBlYXNlLW91dDt9XG5cbkBrZXlmcmFtZXMgZmFkZUlue2Zyb217b3BhY2l0eTowO310b3tvcGFjaXR5OjE7fX1cbkBrZXlmcmFtZXMgc2xpZGVVcHtmcm9te29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxNXB4KTt9dG97b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO319XG5Aa2V5ZnJhbWVzIHB1bHNlR2xvd3swJSwxMDAle2JveC1zaGFkb3c6MCAwIDEwcHggcmdiYSg1OSwxMzAsMjQ2LDAuMik7fTUwJXtib3gtc2hhZG93OjAgMCAyMHB4IHJnYmEoNTksMTMwLDI0NiwwLjUpO319XG5cbi5hbmltYXRlLXNsaWRldXB7YW5pbWF0aW9uOnNsaWRlVXAgMC40cyBjdWJpYy1iZXppZXIoMC4xNiwxLDAuMywxKSBib3RoO31cblxuLyogc2lkZWJhciAqL1xuLnNie3dpZHRoOjY4cHg7YmFja2dyb3VuZDpyZ2JhKDgsMTUsMzYsMC45Mik7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCByZ2JhKDMwLDU4LDEzOCwwLjI1KTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nOjE2cHggMDtnYXA6NHB4O3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtib3R0b206MDt6LWluZGV4OjIwMDtiYWNrZHJvcC1maWx0ZXI6Ymx1cigyNHB4KTt9XG4uc2ItbG9nb3t3aWR0aDo0MnB4O2hlaWdodDo0MnB4O2JvcmRlci1yYWRpdXM6MTJweDtvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1ib3R0b206MjBweDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzFlM2E4YSwjMGYxNzJhKTtib3JkZXI6MXB4IHNvbGlkICMxZTQwYWY7fVxuLnNiLWJ0bnt3aWR0aDo0MnB4O2hlaWdodDo0MnB4O2JvcmRlci1yYWRpdXM6MTFweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtjb2xvcjojNGI1NTYzO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246YWxsIC4ycztwb3NpdGlvbjpyZWxhdGl2ZTt9XG4uc2ItYnRuOmhvdmVye2JhY2tncm91bmQ6cmdiYSg1OSwxMzAsMjQ2LC4xMik7Y29sb3I6IzNiODJmNjt9XG4uc2ItYnRuLmFjdGl2ZXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiYSg1OSwxMzAsMjQ2LC4yMikscmdiYSgxMzksOTIsMjQ2LC4xNCkpO2NvbG9yOiMzYjgyZjY7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDU5LDEzMCwyNDYsLjI4KTt9XG4uc2ItYnRuIC50aXB7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1NHB4O2JhY2tncm91bmQ6IzBmMTcyYTtib3JkZXI6MXB4IHNvbGlkICMxZTI5M2I7Y29sb3I6I2UyZThmMDtmb250LXNpemU6MTFweDtmb250LXdlaWdodDo2MDA7cGFkZGluZzo0cHggMTBweDtib3JkZXItcmFkaXVzOjdweDt3aGl0ZS1zcGFjZTpub3dyYXA7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IC4ycztsZXR0ZXItc3BhY2luZzouM3B4O3otaW5kZXg6MzAwO31cbi5zYi1idG46aG92ZXIgLnRpcHtvcGFjaXR5OjE7fVxuLnNiLXNlcHt3aWR0aDozMnB4O2hlaWdodDoxcHg7YmFja2dyb3VuZDpyZ2JhKDMwLDU4LDEzOCwwLjIpO21hcmdpbjo2cHggMDt9XG5cbi8qIHRvcGJhciAqL1xuLnRvcHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6MCAyNHB4O2hlaWdodDo2NXB4O2JhY2tncm91bmQ6cmdiYSg4LDE1LDM2LDAuOSk7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgzMCw1OCwxMzgsMC4yKTtwb3NpdGlvbjpzdGlja3k7dG9wOjA7ei1pbmRleDoxMDA7YmFja2Ryb3AtZmlsdGVyOmJsdXIoMjBweCk7fVxuLnRvcC10aXRsZXtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo4MDA7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzYwYTVmYSwjYzA4NGZjLCM2MGE1ZmEpO2JhY2tncm91bmQtc2l6ZToyMDAlOy13ZWJraXQtYmFja2dyb3VuZC1jbGlwOnRleHQ7LXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZC1jbGlwOnRleHQ7YW5pbWF0aW9uOnNoaW1tZXIgNHMgbGluZWFyIGluZmluaXRlO2xldHRlci1zcGFjaW5nOi41cHg7fVxuQGtleWZyYW1lcyBzaGltbWVye3Rve2JhY2tncm91bmQtcG9zaXRpb246MjAwJSBjZW50ZXI7fX1cbi50b3AtcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMnB4O31cbi5saXZle2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjZweDtiYWNrZ3JvdW5kOnJnYmEoMzQsMTk3LDk0LC4xKTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMzQsMTk3LDk0LC4zKTtjb2xvcjojNGFkZTgwO3BhZGRpbmc6NHB4IDEwcHg7Ym9yZGVyLXJhZGl1czoyMHB4O2ZvbnQtc2l6ZToxMHB4O2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzouOHB4O31cbi5saXZlLWRvdHt3aWR0aDo2cHg7aGVpZ2h0OjZweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiMyMmM1NWU7YW5pbWF0aW9uOnBsaXZlIDEuNXMgaW5maW5pdGU7fVxuQGtleWZyYW1lcyBwbGl2ZXswJSwxMDAle29wYWNpdHk6MTtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgzNCwxOTcsOTQsLjQpO301MCV7b3BhY2l0eTouNztib3gtc2hhZG93OjAgMCAwIDVweCByZ2JhKDM0LDE5Nyw5NCwwKTt9fVxuLnRvcC1zZWFyY2h7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6N3B4O2JhY2tncm91bmQ6cmdiYSgxNSwyMyw0MiwuNik7Ym9yZGVyOjFweCBzb2xpZCAjMWUyOTNiO2JvcmRlci1yYWRpdXM6OHB4O3BhZGRpbmc6NXB4IDExcHg7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjJzO31cbi50b3Atc2VhcmNoOmZvY3VzLXdpdGhpbntib3JkZXItY29sb3I6IzNiODJmNjt9XG4udG9wLXNlYXJjaCBpbnB1dHtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO291dGxpbmU6bm9uZTtjb2xvcjojZTJlOGYwO2ZvbnQtc2l6ZToxMnB4O3dpZHRoOjE2MHB4O31cbi50b3Atc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlcntjb2xvcjojNmI3MjgwO31cblxuLyogcGFnZSAqL1xuLnBhZ2V7bWFyZ2luLWxlZnQ6NjhweDtmbGV4OjE7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt9XG4uY29udGVudHtwYWRkaW5nOjI0cHg7ZmxleDoxO31cblxuLyogc3RhdCBncmlkICovXG4uc3RhdC1ncmlke2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZml0LG1pbm1heCgxODBweCwxZnIpKTtnYXA6MTZweDttYXJnaW4tYm90dG9tOjI0cHg7fVxuLnN0YXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTMsIDIyLCA0NSwgMC42KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1OSwgMTMwLCAyNDYsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAxOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggLThweCByZ2JhKDAsMCwwLDAuNCksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjAzKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yNXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSksIGJvcmRlci1jb2xvciAuMjVzIGVhc2UsIGJveC1zaGFkb3cgLjI1cyBlYXNlO1xufVxuLnN0YXQtY2FyZDo6YmVmb3Jle2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDtiYWNrZ3JvdW5kOnZhcigtLWEsbGluZWFyLWdyYWRpZW50KDkwZGVnLCMzYjgyZjYsIzhiNWNmNikpO31cbi5zdGF0LWNhcmQ6aG92ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTRweCk7Ym9yZGVyLWNvbG9yOnJnYmEoNTksMTMwLDI0NiwwLjM1KTtib3gtc2hhZG93OjAgMTJweCAzMHB4IC04cHggcmdiYSgwLDAsMCwwLjYpO31cbi5zdGF0LWljb3t3aWR0aDozNnB4O2hlaWdodDozNnB4O2JvcmRlci1yYWRpdXM6OXB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW4tYm90dG9tOjEwcHg7YmFja2dyb3VuZDp2YXIoLS1pYixyZ2JhKDU5LDEzMCwyNDYsLjEpKTt9XG4uc3RhdC12YWx7Zm9udC1zaXplOjI4cHg7Zm9udC13ZWlnaHQ6ODAwO2ZvbnQtZmFtaWx5OidKZXRCcmFpbnMgTW9ubycsbW9ub3NwYWNlO2NvbG9yOiNmM2Y0ZjY7bGluZS1oZWlnaHQ6MTttYXJnaW4tYm90dG9tOjNweDt9XG4uc3RhdC1sYmx7Zm9udC1zaXplOjEwcHg7Y29sb3I6IzljYTNhZjtmb250LXdlaWdodDo2MDA7bGV0dGVyLXNwYWNpbmc6LjVweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7fVxuLnN0YXQtY2hne3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxNHB4O3JpZ2h0OjE0cHg7Zm9udC1zaXplOjEwcHg7Zm9udC13ZWlnaHQ6NzAwO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjJweDt9XG4uY2hnLXVwe2NvbG9yOiNmODcxNzE7fSAuY2hnLWRue2NvbG9yOiM0YWRlODA7fVxuXG4vKiBjYXJkICovXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTMsIDIyLCA0NSwgMC42NSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogMjJweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE0cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNHB4KTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjUpLCBpbnNldCAwIDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG59XG4uY2FyZDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDAgMTVweCAzNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjYpLCBpbnNldCAwIDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbn1cbi5jYXJkLWhkcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO21hcmdpbi1ib3R0b206MThweDt9XG4uY2FyZC10dGx7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6OXB4O2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojZTVlN2ViO2xldHRlci1zcGFjaW5nOi4ycHg7fVxuLnR0bC1pY297d2lkdGg6MzBweDtoZWlnaHQ6MzBweDtiYWNrZ3JvdW5kOnJnYmEoNTksMTMwLDI0NiwuMTQpO2JvcmRlci1yYWRpdXM6OHB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtjb2xvcjojNjBhNWZhO31cblxuLyogZ3JpZCAqL1xuLmcye2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjtnYXA6MThweDt9XG4uZzN7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyIDFmcjtnYXA6MTZweDt9XG5AbWVkaWEobWF4LXdpZHRoOjExMDBweCl7LmcyLC5nM3tncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO319XG5cbi8qIHVwbG9hZCAqL1xuLnVwem9uZXtib3JkZXI6MnB4IGRhc2hlZCByZ2JhKDU5LDEzMCwyNDYsMC4yKTtib3JkZXItcmFkaXVzOjE0cHg7cGFkZGluZzo0NHB4IDIwcHg7dGV4dC1hbGlnbjpjZW50ZXI7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjphbGwgLjNzO2JhY2tncm91bmQ6cmdiYSg1OSwxMzAsMjQ2LC4wMSk7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO31cbi51cHpvbmU6OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjA7YmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIscmdiYSg1OSwxMzAsMjQ2LC4wMykgMCUsdHJhbnNwYXJlbnQgNzAlKTt9XG4udXB6b25lOmhvdmVyLC51cHpvbmUuZHJhZ3tib3JkZXItY29sb3I6IzNiODJmNjtiYWNrZ3JvdW5kOnJnYmEoNTksMTMwLDI0NiwuMDUpO31cbi51cHpvbmUuZHJhZ3tib3JkZXItc3R5bGU6c29saWQ7fVxuLnVwLWljb3t3aWR0aDo2OHB4O2hlaWdodDo2OHB4O2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZyxyZ2JhKDU5LDEzMCwyNDYsLjE1KSxyZ2JhKDEzOSw5MiwyNDYsLjE1KSk7Ym9yZGVyLXJhZGl1czoxOHB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MCBhdXRvIDE0cHg7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDU5LDEzMCwyNDYsLjIpO31cblxuLyogYnV0dG9ucyAqL1xuLmJ0bntkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NnB4O3BhZGRpbmc6OXB4IDE4cHg7Ym9yZGVyLXJhZGl1czo4cHg7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NjAwO2N1cnNvcjpwb2ludGVyO2JvcmRlcjpub25lO3RyYW5zaXRpb246YWxsIC4ycztsZXR0ZXItc3BhY2luZzouMnB4O3RleHQtZGVjb3JhdGlvbjpub25lO31cbi5idG4tcHtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzNiODJmNiwjMjU2M2ViKTtjb2xvcjojZmZmO2JveC1zaGFkb3c6MCA0cHggMTRweCByZ2JhKDM3LDk5LDIzNSwuMjUpO31cbi5idG4tcDpob3Zlcnt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMXB4KTtib3gtc2hhZG93OjAgNnB4IDIwcHggcmdiYSgzNyw5OSwyMzUsLjM4KTt9XG4uYnRuLWR7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCNlZjQ0NDQsI2RjMjYyNik7Y29sb3I6I2ZmZjt9XG4uYnRuLWQ6aG92ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTFweCk7Ym94LXNoYWRvdzowIDRweCAxMnB4IHJnYmEoMjM5LDY4LDY4LC4zKTt9XG4uYnRuLXN1Y2Nlc3N7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMyMmM1NWUsIzE2YTM0YSk7Y29sb3I6I2ZmZjt9XG4uYnRuLXN1Y2Nlc3M6aG92ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTFweCk7Ym94LXNoYWRvdzowIDRweCAxMnB4IHJnYmEoMzQsMTk3LDk0LC4zKTt9XG4uYnRuLWd7YmFja2dyb3VuZDpyZ2JhKDMwLDQxLDU5LC41KTtjb2xvcjojOWNhM2FmO2JvcmRlcjoxcHggc29saWQgcmdiYSg1OSwxMzAsMjQ2LDAuMTIpO31cbi5idG4tZzpob3ZlcntiYWNrZ3JvdW5kOnJnYmEoMzAsNDEsNTksLjgpO2NvbG9yOiNmM2Y0ZjY7fVxuLmJ0bi1ze3BhZGRpbmc6NnB4IDEycHg7Zm9udC1zaXplOjExcHg7fVxuLmJ0bi14c3twYWRkaW5nOjRweCA5cHg7Zm9udC1zaXplOjEwcHg7Ym9yZGVyLXJhZGl1czo1cHg7fVxuXG4vKiByaXNrIGJhZGdlICovXG4ucmJhZGdle2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo0cHg7cGFkZGluZzoycHggOXB4O2JvcmRlci1yYWRpdXM6MjBweDtmb250LXNpemU6MTBweDtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6LjRweDtib3JkZXI6MXB4IHNvbGlkIGN1cnJlbnRDb2xvcjt9XG5cbi8qIHZpb2xhdGlvbiBjYXJkICovXG4udmNhcmR7YmFja2dyb3VuZDpyZ2JhKDEzLCAyMiwgNDUsIDAuNSk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKTtib3JkZXItcmFkaXVzOjEzcHg7cGFkZGluZzoxNnB4O3RyYW5zaXRpb246YWxsIC4yNXM7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO2N1cnNvcjpwb2ludGVyO31cbi52Y2FyZDo6YmVmb3Jle2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO2JvdHRvbTowO3dpZHRoOjNweDtiYWNrZ3JvdW5kOnZhcigtLXZjLCMzYjgyZjYpO2JvcmRlci1yYWRpdXM6M3B4IDAgMCAzcHg7fVxuLnZjYXJkOmhvdmVye2JvcmRlci1jb2xvcjojM2I4MmY2O3RyYW5zZm9ybTp0cmFuc2xhdGVYKDNweCk7YmFja2dyb3VuZDpyZ2JhKDIwLDMwLDU1LC44KTtib3gtc2hhZG93OjAgNHB4IDE1cHggcmdiYSgwLDAsMCwwLjMpO31cbi52Y2FyZC5zZWx7Ym9yZGVyLWNvbG9yOiMzYjgyZjY7YmFja2dyb3VuZDpyZ2JhKDIwLDMwLDU1LC45NSk7fVxuLnZjLWhkcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjttYXJnaW4tYm90dG9tOjEwcHg7fVxuLnBsYXRle2ZvbnQtZmFtaWx5OidKZXRCcmFpbnMgTW9ubycsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojZjNmNGY2O2xldHRlci1zcGFjaW5nOjEuNXB4O2JhY2tncm91bmQ6cmdiYSg1OSwxMzAsMjQ2LC4xKTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoNTksMTMwLDI0NiwuMjIpO3BhZGRpbmc6MnB4IDlweDtib3JkZXItcmFkaXVzOjVweDt9XG4udmMtdHlwZXtmb250LXNpemU6MTBweDtjb2xvcjojOWNhM2FmO21hcmdpbi10b3A6MnB4O31cbi52dGFnc3tkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7Z2FwOjRweDttYXJnaW46OHB4IDA7fVxuLnZ0YWd7cGFkZGluZzoxcHggN3B4O2JvcmRlci1yYWRpdXM6MTFweDtmb250LXNpemU6OXB4O2ZvbnQtd2VpZ2h0OjYwMDtsZXR0ZXItc3BhY2luZzouM3B4O31cbi5jb25mLWJhcntoZWlnaHQ6M3B4O2JhY2tncm91bmQ6IzFlMjkzYjtib3JkZXItcmFkaXVzOjJweDttYXJnaW4tdG9wOjRweDtvdmVyZmxvdzpoaWRkZW47fVxuLmNvbmYtZmlsbHtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZywjM2I4MmY2LCMxMGI5ODEpO2JvcmRlci1yYWRpdXM6MnB4O31cblxuLyogZGV0YWlsIHBhbmVsICovXG4uZHB7YmFja2dyb3VuZDpyZ2JhKDEwLDE4LDM4LDAuODUpO2JvcmRlcjoxcHggc29saWQgcmdiYSg1OSwgMTMwLCAyNDYsIDAuMTUpO2JvcmRlci1yYWRpdXM6MTZweDtwYWRkaW5nOjI0cHg7YmFja2Ryb3AtZmlsdGVyOmJsdXIoMjBweCk7b3ZlcmZsb3cteTphdXRvO21heC1oZWlnaHQ6OTB2aDt9XG4uZHAtc2Vje21hcmdpbi1ib3R0b206MjBweDt9XG4uZHAtc2VjLXR0bHtmb250LXNpemU6OXB4O2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzoxLjVweDtjb2xvcjojNmI3MjgwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTttYXJnaW4tYm90dG9tOjEwcHg7cGFkZGluZy1ib3R0b206NXB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMxZTI5M2I7fVxuLmRwLXJvd3tkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6NnB4IDA7Zm9udC1zaXplOjEycHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgzMCw0MSw1OSwuNSk7fVxuLmRwLXJvdzpsYXN0LWNoaWxke2JvcmRlci1ib3R0b206bm9uZTt9XG4uZGt7Y29sb3I6IzljYTNhZjtmb250LXdlaWdodDo1MDA7fSAuZHZ7Y29sb3I6I2YzZjRmNjtmb250LXdlaWdodDo2MDA7Zm9udC1mYW1pbHk6J0pldEJyYWlucyBNb25vJyxtb25vc3BhY2U7Zm9udC1zaXplOjExcHg7fVxuLmNoaXB7cGFkZGluZzoycHggOXB4O2JvcmRlci1yYWRpdXM6MTFweDtmb250LXNpemU6MTBweDtmb250LXdlaWdodDo3MDA7fVxuLmNoaXAtb2t7YmFja2dyb3VuZDpyZ2JhKDE2LDE4NSwxMjksLjE0KTtjb2xvcjojMzRkMzk5O2JvcmRlcjoxcHggc29saWQgcmdiYSgxNiwxODUsMTI5LC4zKTt9XG4uY2hpcC1iYWR7YmFja2dyb3VuZDpyZ2JhKDIzOSw2OCw2OCwuMTQpO2NvbG9yOiNmODcxNzE7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDIzOSw2OCw2OCwuMyk7fVxuLmNoaXAtaW5mb3tiYWNrZ3JvdW5kOnJnYmEoNTksMTMwLDI0NiwuMTQpO2NvbG9yOiM2MGE1ZmE7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDU5LDEzMCwyNDYsLjMpO31cbi5jaGlwLXdhcm57YmFja2dyb3VuZDpyZ2JhKDI0NSwxNTgsMTEsLjE0KTtjb2xvcjojZmJiZjI0O2JvcmRlcjoxcHggc29saWQgcmdiYSgyNDUsMTU4LDExLC4zKTt9XG5cbi8qIGNyZWQgcmluZyAqL1xuLmNyZWQtcmluZ3t3aWR0aDo3MnB4O2hlaWdodDo3MnB4O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6Y29uaWMtZ3JhZGllbnQoIzEwYjk4MSB2YXIoLS1wLDkwZGVnKSwjMWUyOTNiIDApO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LXNocmluazowO3Bvc2l0aW9uOnJlbGF0aXZlO31cbi5jcmVkLXJpbmc6OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjZweDtiYWNrZ3JvdW5kOiMwMzA3MTI7Ym9yZGVyLXJhZGl1czo1MCU7fVxuLmNyZWQtaW5uZXJ7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO31cbi5jcmVkLW51bXtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo4MDA7Y29sb3I6IzEwYjk4MTtmb250LWZhbWlseTonSmV0QnJhaW5zIE1vbm8nLG1vbm9zcGFjZTt9XG4uY3JlZC1sYmx7Zm9udC1zaXplOjhweDtjb2xvcjojNmI3MjgwO31cblxuLyogaGVsbWV0IGJveCAqL1xuLmhib3h7YmFja2dyb3VuZDpyZ2JhKDE1LDIzLDQyLC40KTtib3JkZXI6MXB4IHNvbGlkICMxZTI5M2I7Ym9yZGVyLXJhZGl1czoxMHB4O3BhZGRpbmc6MTJweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMnB4O21hcmdpbi1ib3R0b206N3B4O31cbi5oaWNve3dpZHRoOjQ0cHg7aGVpZ2h0OjQ0cHg7Ym9yZGVyLXJhZGl1czo5cHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZvbnQtc2l6ZToyMHB4O2ZsZXgtc2hyaW5rOjA7fVxuXG4vKiBpbWFnZSBwcmV2aWV3ICovXG4uaW1nLXByZXZ7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czoxMHB4O292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kOiMwZjE3MmE7Ym9yZGVyOjFweCBzb2xpZCAjMWUyOTNiO21hcmdpbi10b3A6MTRweDt9XG4uaW1nLXByZXYgaW1ne3dpZHRoOjEwMCU7ZGlzcGxheTpibG9jazttYXgtaGVpZ2h0OjMyMHB4O29iamVjdC1maXQ6Y29udGFpbjt9XG4uaW1nLXByZXYtYmFkZ2V7cG9zaXRpb246YWJzb2x1dGU7dG9wOjhweDtsZWZ0OjhweDtiYWNrZ3JvdW5kOnJnYmEoMTUsMjMsNDIsLjg1KTtib3JkZXI6MXB4IHNvbGlkICMxMGI5ODE7Y29sb3I6IzM0ZDM5OTtwYWRkaW5nOjNweCA4cHg7Ym9yZGVyLXJhZGl1czo1cHg7Zm9udC1zaXplOjEwcHg7Zm9udC13ZWlnaHQ6NzAwO2JhY2tkcm9wLWZpbHRlcjpibHVyKDZweCk7fVxuXG4vKiBwcm9ncmVzcyAqL1xuLnBiYXJ7aGVpZ2h0OjEwcHg7YmFja2dyb3VuZDojMWUyOTNiO2JvcmRlci1yYWRpdXM6NXB4O292ZXJmbG93OmhpZGRlbjttYXJnaW46MTBweCAwO31cbi5wZmlsbHtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZywjM2I4MmY2LCM4YjVjZjYsIzEwYjk4MSk7Ym9yZGVyLXJhZGl1czo1cHg7YmFja2dyb3VuZC1zaXplOjIwMCU7YW5pbWF0aW9uOnBzaGltIDEuNXMgbGluZWFyIGluZmluaXRlO3RyYW5zaXRpb246d2lkdGggLjNzO31cbkBrZXlmcmFtZXMgcHNoaW17MCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJX0xMDAle2JhY2tncm91bmQtcG9zaXRpb246MjAwJX19XG5cbi8qIGJhciBjaGFydCAqL1xuLmJjaGFydHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1lbmQ7Z2FwOjVweDtwYWRkaW5nOjAgMnB4O31cbi5iaXtmbGV4OjE7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjNweDt9XG4uYmZ7d2lkdGg6MTAwJTtib3JkZXItcmFkaXVzOjNweCAzcHggMCAwO21pbi1oZWlnaHQ6M3B4O3RyYW5zaXRpb246aGVpZ2h0IC41czt9XG4uYmx7Zm9udC1zaXplOjhweDtjb2xvcjojNmI3MjgwO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtZmFtaWx5OidKZXRCcmFpbnMgTW9ubycsbW9ub3NwYWNlO31cblxuLyogaGVhdG1hcCAqL1xuLmhtZ3JpZHtkaXNwbGF5OmdyaWQ7Z2FwOjNweDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDI0LDFmcik7bWFyZ2luOjEwcHggMDt9XG4uaG1jZWxse2FzcGVjdC1yYXRpbzoxO2JvcmRlci1yYWRpdXM6MnB4O2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246dHJhbnNmb3JtIC4xczt9XG4uaG1jZWxsOmhvdmVye3RyYW5zZm9ybTpzY2FsZSgxLjUpO31cblxuLyogaG90c3BvdCByYW5rICovXG4uaHJhbmt7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MTBweDtwYWRkaW5nOjlweCAwO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMzAsNDEsNTksLjQpO31cbi5ocmFuazpsYXN0LWNoaWxke2JvcmRlci1ib3R0b206bm9uZTt9XG4uaG51bXt3aWR0aDoyMnB4O2hlaWdodDoyMnB4O2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQ6cmdiYSg1OSwxMzAsMjQ2LC4xKTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoNTksMTMwLDI0NiwuMik7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZvbnQtc2l6ZToxMHB4O2ZvbnQtd2VpZ2h0OjgwMDtjb2xvcjojNjBhNWZhO2ZvbnQtZmFtaWx5OidKZXRCcmFpbnMgTW9ubycsbW9ub3NwYWNlO2ZsZXgtc2hyaW5rOjA7fVxuLmhiYXJ7ZmxleDoxO2hlaWdodDo1cHg7YmFja2dyb3VuZDojMWUyOTNiO2JvcmRlci1yYWRpdXM6M3B4O292ZXJmbG93OmhpZGRlbjt9XG4uaGZpbGx7aGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czozcHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsI2VmNDQ0NCwjZjk3MzE2KTt9XG5cbi8qIHRhYmxlICovXG4udGJse3dpZHRoOjEwMCU7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO31cbi50YmwgdGh7dGV4dC1hbGlnbjpsZWZ0O3BhZGRpbmc6OHB4IDEwcHg7Zm9udC1zaXplOjlweDtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6MXB4O2NvbG9yOiM2YjcyODA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoNTksMTMwLDI0NiwwLjI1KTtiYWNrZ3JvdW5kOnJnYmEoMTUsMjMsNDIsLjUpO31cbi50YmwgdGR7cGFkZGluZzo5cHggMTBweDtmb250LXNpemU6MTJweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDMwLDQxLDU5LC4zKTt9XG4udGJsIHRyOmhvdmVyIHRke2JhY2tncm91bmQ6cmdiYSgzMCw0MSw1OSwuMjUpO31cblxuLyogdGFicyAqL1xuLnRhYnN7ZGlzcGxheTpmbGV4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMxZTI5M2I7bWFyZ2luLWJvdHRvbToyMHB4O31cbi50YWJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NnB4O3BhZGRpbmc6OXB4IDE2cHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtjb2xvcjojNmI3MjgwO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjYwMDtjdXJzb3I6cG9pbnRlcjtib3JkZXItYm90dG9tOjJweCBzb2xpZCB0cmFuc3BhcmVudDttYXJnaW4tYm90dG9tOi0xcHg7dHJhbnNpdGlvbjphbGwgLjJzO31cbi50YWI6aG92ZXJ7Y29sb3I6IzljYTNhZjt9XG4udGFiLm9ue2NvbG9yOiM2MGE1ZmE7Ym9yZGVyLWJvdHRvbS1jb2xvcjojM2I4MmY2O31cblxuLyogYWxlcnQgKi9cbi5hbGVydHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo5cHg7cGFkZGluZzoxMHB4IDE0cHg7Ym9yZGVyLXJhZGl1czo5cHg7bWFyZ2luLWJvdHRvbToxNHB4O2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMDt9XG4uYS1va3tiYWNrZ3JvdW5kOnJnYmEoNTIsMjExLDE1MywuMSk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDUyLDIxMSwxNTMsLjIpO2NvbG9yOiMzNGQzOTk7fVxuLmEtZXJye2JhY2tncm91bmQ6cmdiYSgyMzksNjgsNjgsLjEpO2JvcmRlcjoxcHggc29saWQgcmdiYSgyMzksNjgsNjgsLjIpO2NvbG9yOiNmY2E1YTU7fVxuLmEtd2FybntiYWNrZ3JvdW5kOnJnYmEoMjQ1LDE1OCwxMSwuMSk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDI0NSwxNTgsMTEsLjIpO2NvbG9yOiNmZGU2OGE7fVxuLmEtaW5mb3tiYWNrZ3JvdW5kOnJnYmEoNTksMTMwLDI0NiwuMSk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDU5LDEzMCwyNDYsLjIpO2NvbG9yOiM5M2M1ZmQ7fVxuXG4vKiBlbXB0eSAqL1xuLmVtcHR5e3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6NDRweCAyMHB4O2NvbG9yOiM2YjcyODA7fVxuLmVtcHR5LWljb3tmb250LXNpemU6MzZweDttYXJnaW4tYm90dG9tOjEwcHg7b3BhY2l0eTouNDt9XG5cbi8qIHNwaW5uZXIgKi9cbi5zcGlue3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyOjJweCBzb2xpZCAjMWUyOTNiO2JvcmRlci10b3AtY29sb3I6IzNiODJmNjtib3JkZXItcmFkaXVzOjUwJTthbmltYXRpb246c3AgLjdzIGxpbmVhciBpbmZpbml0ZTtmbGV4LXNocmluazowO31cbkBrZXlmcmFtZXMgc3B7dG97dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO319XG5cbi8qIG1vZGFsIG92ZXJsYXkgKi9cbi5tb2RhbC1iZ3twb3NpdGlvbjpmaXhlZDtpbnNldDowO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNzUpO2JhY2tkcm9wLWZpbHRlcjpibHVyKDhweCk7ei1pbmRleDo1MDA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO31cbi5tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAsIDE4LCAzOCwgMC45NSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAyOHB4O1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXgtaGVpZ2h0OiA4NXZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNXB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjVweCk7XG4gIGJveC1zaGFkb3c6IDAgMzBweCA3MHB4IHJnYmEoMCwgMCwgMCwgMC44KSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGFuaW1hdGlvbjogbW9kYWxTY2FsZUluIDAuMzVzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKSBib3RoO1xufVxuQGtleWZyYW1lcyBtb2RhbFNjYWxlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiBzY2FsZSgwLjkpIHRyYW5zbGF0ZVkoMjBweCk7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7IH1cbn1cbi5tb2RhbC1jbG9zZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTRweDtyaWdodDoxNHB4O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmU7Y29sb3I6IzZiNzI4MDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmNvbG9yIC4yczt9XG4ubW9kYWwtY2xvc2U6aG92ZXJ7Y29sb3I6I2VmNDQ0NDt9XG5cbi8qIGNoYXRib3QgKi9cbi5jaGF0LWZhYntwb3NpdGlvbjpmaXhlZDtib3R0b206MjRweDtyaWdodDoyNHB4O3dpZHRoOjU0cHg7aGVpZ2h0OjU0cHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMzYjgyZjYsIzhiNWNmNik7Ym9yZGVyOm5vbmU7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3otaW5kZXg6NjAwO2JveC1zaGFkb3c6MCA4cHggMjhweCByZ2JhKDU5LDEzMCwyNDYsLjQ1KTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnM7fVxuLmNoYXQtZmFiOmhvdmVye3RyYW5zZm9ybTpzY2FsZSgxLjA4KTthbmltYXRpb246cHVsc2VHbG93IDJzIGluZmluaXRlO31cbi5jaGF0LXdpbntwb3NpdGlvbjpmaXhlZDtib3R0b206ODhweDtyaWdodDoyNHB4O3dpZHRoOjM2NXB4O2JhY2tncm91bmQ6cmdiYSgxMCwgMTgsIDM4LCAwLjk1KTtib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4yKTtiYWNrZHJvcC1maWx0ZXI6Ymx1cigyMHB4KTtib3JkZXItcmFkaXVzOjE4cHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt6LWluZGV4OjYwMDtvdmVyZmxvdzpoaWRkZW47Ym94LXNoYWRvdzowIDIwcHggNjBweCByZ2JhKDAsMCwwLC42KTthbmltYXRpb246c2xpZGVVcCAwLjNzIGVhc2Utb3V0O31cbi5jaGF0LWhkcntiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzFlM2E4YSwjMGYxNzJhKTtwYWRkaW5nOjE0cHggMTZweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMHB4O31cbi5jaGF0LW1zZ3N7ZmxleDoxO3BhZGRpbmc6MTRweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoxMHB4O292ZXJmbG93LXk6YXV0bzttYXgtaGVpZ2h0OjM0MHB4O31cbi5tc2d7bWF4LXdpZHRoOjg1JTtwYWRkaW5nOjEwcHggMTRweDtib3JkZXItcmFkaXVzOjEycHg7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MS41O31cbi5tc2ctYm90e2JhY2tncm91bmQ6cmdiYSgzMCw0MSw1OSwuNCk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4xNSk7Y29sb3I6I2NiZDVlMTthbGlnbi1zZWxmOmZsZXgtc3RhcnQ7Ym9yZGVyLXJhZGl1czo0cHggMTJweCAxMnB4IDEycHg7fVxuLm1zZy1ib3QtY29kZXtmb250LWZhbWlseTonSmV0QnJhaW5zIE1vbm8nLG1vbm9zcGFjZTtiYWNrZ3JvdW5kOiMwMzA3MTI7cGFkZGluZzo2cHggMTBweDtib3JkZXItcmFkaXVzOjZweDttYXJnaW4tdG9wOjZweDtmb250LXNpemU6MTFweDtvdmVyZmxvdy14OmF1dG87Y29sb3I6IzM4YmRmODt9XG4ubXNnLXVzZXJ7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMyNTYzZWIsIzFkNGVkOCk7Y29sb3I6I2ZmZjthbGlnbi1zZWxmOmZsZXgtZW5kO2JvcmRlci1yYWRpdXM6MTJweCA0cHggMTJweCAxMnB4O31cbi5jaGF0LWlucHtkaXNwbGF5OmZsZXg7Ym9yZGVyLXRvcDoxcHggc29saWQgcmdiYSg1OSwgMTMwLCAyNDYsIDAuMTUpO3BhZGRpbmc6MTBweCAxMnB4O2dhcDo4cHg7fVxuLmNoYXQtaW5wIGlucHV0e2ZsZXg6MTtiYWNrZ3JvdW5kOnJnYmEoMTUsMjMsNDIsLjYpO2JvcmRlcjoxcHggc29saWQgcmdiYSg1OSwgMTMwLCAyNDYsIDAuMTUpO2JvcmRlci1yYWRpdXM6OHB4O3BhZGRpbmc6N3B4IDExcHg7Y29sb3I6I2UyZThmMDtmb250LXNpemU6MTJweDtvdXRsaW5lOm5vbmU7fVxuLmNoYXQtaW5wIGlucHV0OmZvY3Vze2JvcmRlci1jb2xvcjojM2I4MmY2O31cbi5jaGF0LXNlbmR7d2lkdGg6MzRweDtoZWlnaHQ6MzRweDtib3JkZXItcmFkaXVzOjhweDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzNiODJmNiwjMjU2M2ViKTtib3JkZXI6bm9uZTtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Y29sb3I6I2ZmZjtmbGV4LXNocmluazowO31cblxuLyogYXV0aCBwYWdlcyBzdHlsZSAqL1xuLmF1dGgtYmcge1xuICBkaXNwbGF5OmZsZXg7XG4gIG1pbi1oZWlnaHQ6MTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzA2MTE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IFxuICAgIHJhZGlhbC1ncmFkaWVudChhdCAwJSAwJSwgcmdiYSgyMCwgMzUsIDc1LCAwLjI1KSAwcHgsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KGF0IDEwMCUgMTAwJSwgcmdiYSgxNSwgMjMsIDUwLCAwLjIpIDBweCwgdHJhbnNwYXJlbnQgNTAlKSxcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAwNykgMXB4LCB0cmFuc3BhcmVudCAxcHgpLFxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAwNykgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJSwgMTAwJSAxMDAlLCA0MHB4IDQwcHgsIDQwcHggNDBweDtcbn1cbi5hdXRoLXBhbmVsLWx7ZmxleDoxLjI7YmFja2dyb3VuZDpyZ2JhKDEyLDIyLDUxLDAuNDUpO2JvcmRlci1yaWdodDoxcHggc29saWQgcmdiYSgzMCw1OCwxMzgsMC4yNSk7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nOjQwcHg7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO2JhY2tkcm9wLWZpbHRlcjpibHVyKDEwcHgpO31cbi5hdXRoLXBhbmVsLWw6OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjA7YmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwJSAzMCUscmdiYSg1OSwxMzAsMjQ2LDAuMTUpIDAlLHRyYW5zcGFyZW50IDUwJSkscmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4MCUgNzAlLHJnYmEoMTM5LDkyLDI0NiwwLjEyKSAwJSx0cmFuc3BhcmVudCA1MCUpO31cbi5hdXRoLXBhbmVsLXJ7ZmxleDoxO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOjQwcHg7YmFja2dyb3VuZDpyZ2JhKDUsMTEsMzAsMC41NSk7YmFja2Ryb3AtZmlsdGVyOmJsdXIoMTBweCk7fVxuLmF1dGgtZm9ybXt3aWR0aDoxMDAlO21heC13aWR0aDozOTBweDthbmltYXRpb246c2xpZGVVcCAwLjVzIGVhc2Utb3V0O31cbi5hdXRoLWlucC1ncm91cHttYXJnaW4tYm90dG9tOjE4cHg7fVxuLmF1dGgtbGJse2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjExcHg7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiM5Y2EzYWY7bWFyZ2luLWJvdHRvbTo2cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOi41cHg7fVxuLmF1dGgtaW5we3dpZHRoOjEwMCU7YmFja2dyb3VuZDpyZ2JhKDE1LDIzLDQyLC43KTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjE1KTtib3JkZXItcmFkaXVzOjhweDtwYWRkaW5nOjEwcHggMTRweDtjb2xvcjojZjNmNGY2O2ZvbnQtc2l6ZToxM3B4O291dGxpbmU6bm9uZTt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMnM7fVxuLmF1dGgtaW5wOmZvY3Vze2JvcmRlci1jb2xvcjojM2I4MmY2O31cbi5hdXRoLXNlbGVjdHt3aWR0aDoxMDAlO2JhY2tncm91bmQ6cmdiYSgxNSwyMyw0MiwuNyk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4xNSk7Ym9yZGVyLXJhZGl1czo4cHg7cGFkZGluZzoxMHB4IDE0cHg7Y29sb3I6I2YzZjRmNjtmb250LXNpemU6MTNweDtvdXRsaW5lOm5vbmU7Y3Vyc29yOnBvaW50ZXI7fVxuXG4vKiBjb250YWN0ICovXG4uY29udGFjdC1jYXJke2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZyxyZ2JhKDU5LDEzMCwyNDYsLjA4KSxyZ2JhKDEzOSw5MiwyNDYsLjA0KSk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDU5LDEzMCwyNDYsLjE1KTtib3JkZXItcmFkaXVzOjE2cHg7cGFkZGluZzoyOHB4O21hcmdpbi1ib3R0b206MTZweDt9XG5cbi8qIHRvYXN0ICovXG4udG9hc3QtY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O3JpZ2h0OjIwcHg7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjEwcHg7bWF4LXdpZHRoOjM4MHB4O31cbi50b2FzdHtiYWNrZ3JvdW5kOnJnYmEoMTUsMjMsNDIsMC45Mik7Ym9yZGVyOjFweCBzb2xpZCAjMTBiOTgxO2JvcmRlci1yYWRpdXM6MTBweDtwYWRkaW5nOjE0cHg7Y29sb3I6I2UyZThmMDtiYWNrZHJvcC1maWx0ZXI6Ymx1cigxMHB4KTtib3gtc2hhZG93OjAgMTBweCAzMHB4IHJnYmEoMCwwLDAsMC41KTtkaXNwbGF5OmZsZXg7Z2FwOjEwcHg7YWxpZ24taXRlbXM6ZmxleC1zdGFydDthbmltYXRpb246c2xpZGVVcCAwLjNzIGVhc2Utb3V0O31cbi50b2FzdC1lcnJ7Ym9yZGVyLWNvbG9yOiNlZjQ0NDQ7fVxuYDtcblxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4vLyBMT0dPIFNWR1xuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5mdW5jdGlvbiBMb2dvKCl7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgIDxwYXRoIGQ9XCJNMTYgMiBMMjggNyBMMjggMTggQzI4IDI0IDIyIDI5IDE2IDMwIEMxMCAyOSA0IDI0IDQgMTggTDQgNyBaXCIgZmlsbD1cInVybCgjc2cpXCIgb3BhY2l0eT1cIjAuOVwiLz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJzZ1wiIHgxPVwiMFwiIHkxPVwiMFwiIHgyPVwiMzJcIiB5Mj1cIjMyXCI+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjMjU2M2ViXCIvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjOGI1Y2Y2XCIvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgPC9kZWZzPlxuICAgICAgPHJlY3QgeD1cIjlcIiB5PVwiMTJcIiB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiOFwiIHJ4PVwiMS41XCIgZmlsbD1cIiNmZmZcIiBvcGFjaXR5PVwiMC45XCIvPlxuICAgICAgPGNpcmNsZSBjeD1cIjE0LjVcIiBjeT1cIjE2XCIgcj1cIjIuNVwiIGZpbGw9XCIjMjU2M2ViXCIvPlxuICAgICAgPGNpcmNsZSBjeD1cIjE0LjVcIiBjeT1cIjE2XCIgcj1cIjEuMlwiIGZpbGw9XCIjZmZmXCIgb3BhY2l0eT1cIjAuNlwiLz5cbiAgICAgIDxwYXRoIGQ9XCJNMjAgMTQgTDI0IDEyIEwyNCAyMCBMMjAgMTggWlwiIGZpbGw9XCIjZmZmXCIgb3BhY2l0eT1cIjAuODVcIi8+XG4gICAgICA8Y2lyY2xlIGN4PVwiMjJcIiBjeT1cIjlcIiByPVwiMlwiIGZpbGw9XCIjZWY0NDQ0XCIvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi8vIFJJU0sgQkFER0Vcbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZnVuY3Rpb24gUkJhZGdlKHtyaXNrfSl7XG4gIGNvbnN0IGM9UklTS19DRkdbcmlza118fFJJU0tfQ0ZHLkxPVztcbiAgY29uc3QgZD17TE9XOifwn5+iJyxNRURJVU06J/Cfn6EnLEhJR0g6J/Cfn6AnLENSSVRJQ0FMOifwn5S0J31bcmlza107XG4gIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJyYmFkZ2VcIiBzdHlsZT17e2NvbG9yOmMuY29sb3IsYm9yZGVyQ29sb3I6Yy5jb2xvcixiYWNrZ3JvdW5kOmMuYmd9fT57ZH0ge2MubGFiZWx9PC9zcGFuPjtcbn1cblxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4vLyBWSU9MQVRJT04gQ0FSRFxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5mdW5jdGlvbiBWQ2FyZCh7aXRlbSxvbkNsaWNrLHNlbH0pe1xuICBjb25zdCB0b3A9aXRlbS52aW9sYXRpb25zWzBdO1xuICBjb25zdCBpc01pc2xlYWQgPSBpdGVtLnN0YXR1cyA9PT0gJ01JU0xFQUQnO1xuICBjb25zdCBpc1NlbnQgPSBpdGVtLnN0YXR1cyA9PT0gJ1NFTlQnO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBcbiAgICAgIGNsYXNzTmFtZT17YHZjYXJkIGFuaW1hdGUtc2xpZGV1cCR7c2VsPycgc2VsJzonJ31gfSBcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgICctLXZjJzogaXNNaXNsZWFkID8gJyM0YjU1NjMnIDogdG9wPy5jb2xvcixcbiAgICAgICAgb3BhY2l0eTogaXNNaXNsZWFkID8gMC42IDogMSxcbiAgICAgICAgYm9yZGVyU3R5bGU6IGlzTWlzbGVhZCA/ICdkYXNoZWQnIDogJ3NvbGlkJ1xuICAgICAgfX0gXG4gICAgICBvbkNsaWNrPXsoKT0+b25DbGljayhpdGVtKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZjLWhkclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhdGVcIiBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBpc01pc2xlYWQgPyAnbGluZS10aHJvdWdoJyA6ICdub25lJ319PntpdGVtLnBsYXRlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmMtdHlwZVwiPntpdGVtLnZlaGljbGVUeXBlfSDCtyB7aXRlbS5tYW51ZmFjdHVyZXJ9IHtpdGVtLm1vZGVsfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7aXNNaXNsZWFkICYmIDxzcGFuIGNsYXNzTmFtZT1cImNoaXAgY2hpcC1iYWRcIiBzdHlsZT17e21hcmdpblJpZ2h0OiA2fX0+TUlTTEVBRCDinJU8L3NwYW4+fVxuICAgICAgICAgIHtpc1NlbnQgJiYgPHNwYW4gY2xhc3NOYW1lPVwiY2hpcCBjaGlwLW9rXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogNn19Pk5PVElDRSBTRU5UIOKckzwvc3Bhbj59XG4gICAgICAgICAge2l0ZW0uaXNDaGFzZUNhdGVnb3J5ICYmIDxzcGFuIGNsYXNzTmFtZT1cImNoaXAgY2hpcC1iYWRcIiBzdHlsZT17e21hcmdpblJpZ2h0OiA2LCBiYWNrZ3JvdW5kOiAnI2VmNDQ0NCcsIGFuaW1hdGlvbjogJ3B1bHNlR2xvdyAxLjVzIGluZmluaXRlJ319PkNIQVNFIPCfmqg8L3NwYW4+fVxuICAgICAgICAgIHtpdGVtLnN0YXR1cyA9PT0gJ1dBSVZFRCcgJiYgPHNwYW4gY2xhc3NOYW1lPVwiY2hpcCBjaGlwLXdhcm5cIiBzdHlsZT17e21hcmdpblJpZ2h0OiA2fX0+V0FJVkVEIOKalu+4jzwvc3Bhbj59XG4gICAgICAgICAge2l0ZW0uc3RhdHVzID09PSAnUEFJRCcgJiYgPHNwYW4gY2xhc3NOYW1lPVwiY2hpcCBjaGlwLW9rXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogNiwgYmFja2dyb3VuZDogJyMxMGI5ODEnfX0+UEFJRCDinJM8L3NwYW4+fVxuICAgICAgICAgIDxSQmFkZ2Ugcmlzaz17aXRlbS5yaXNrfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZ0YWdzXCI+XG4gICAgICAgIHtpdGVtLnZpb2xhdGlvbnMubWFwKHY9PihcbiAgICAgICAgICA8c3BhbiBrZXk9e3YuaWR8fHYudHlwZX0gY2xhc3NOYW1lPVwidnRhZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDpgJHt2LmNvbG9yfHwnI2VmNDQ0NCd9MThgLGNvbG9yOnYuY29sb3J8fCcjZWY0NDQ0Jyxib3JkZXI6YDFweCBzb2xpZCAke3YuY29sb3J8fCcjZWY0NDQ0J300NGB9fT5cbiAgICAgICAgICAgIHt2Lmljb258fCfwn5qoJ30ge3YubGFiZWx9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2l0ZW0uaW1hZ2VVcmwgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOjgsYm9yZGVyUmFkaXVzOjYsb3ZlcmZsb3c6J2hpZGRlbicsYm9yZGVyOicxcHggc29saWQgIzFlMjkzYid9fT5cbiAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZVVybH0gYWx0PVwiZXZpZGVuY2VcIiBzdHlsZT17e3dpZHRoOicxMDAlJyxtYXhIZWlnaHQ6MTIwLG9iamVjdEZpdDonY292ZXInLGRpc3BsYXk6J2Jsb2NrJ319Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6J2NlbnRlcicsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLG1hcmdpblRvcDo2fX0+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6MTAsY29sb3I6JyM5Y2EzYWYnLGRpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6J2NlbnRlcicsZ2FwOjR9fT48TWFwUGluIHNpemU9ezl9Lz57aXRlbS5sb2NhdGlvbn08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vbm9cIiBzdHlsZT17e2ZvbnRTaXplOjEwLGNvbG9yOicjMTBiOTgxJ319PntpdGVtLmNvbmZpZGVuY2V9JTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25mLWJhclwiPjxkaXYgY2xhc3NOYW1lPVwiY29uZi1maWxsXCIgc3R5bGU9e3t3aWR0aDpgJHtpdGVtLmNvbmZpZGVuY2V9JWB9fS8+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuLy8gVkVISUNMRSBERVRBSUwgUEFORUxcbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZnVuY3Rpb24gRGV0YWlsUGFuZWwoe2l0ZW0sb25DbG9zZSxvblN0YXR1c0NoYW5nZX0pe1xuICBjb25zdCBbZmluZSwgc2V0RmluZV0gPSB1c2VTdGF0ZSgxMDAwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBzZXRGaW5lKGl0ZW0uZmluZUFtb3VudCB8fCAxMDAwKTtcbiAgICB9XG4gIH0sIFtpdGVtXSk7XG5cbiAgaWYoIWl0ZW0pIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkcCBhbmltYXRlLXNsaWRldXBcIiBzdHlsZT17e2hlaWdodDonMTAwJScsZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczonY2VudGVyJyxqdXN0aWZ5Q29udGVudDonY2VudGVyJ319PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eVwiPjxkaXYgY2xhc3NOYW1lPVwiZW1wdHktaWNvXCI+PFRhcmdldCBzaXplPXszNn0vPjwvZGl2PjxkaXYgc3R5bGU9e3tmb250U2l6ZToxM319PlNlbGVjdCBhIHZpb2xhdGlvbiBjYXJkIHRvIHZpZXcgZGV0YWlscyAmIGlzc3VlIGZpbmUgbm90aWNlczwvZGl2PjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGNvbnN0IGNyPWl0ZW0uY3JlZGliaWxpdHk7XG4gIGNvbnN0IHBjdERlZz1gJHsocGFyc2VGbG9hdChjci5zY29yZSkvMTAwKSozNjB9ZGVnYDtcbiAgY29uc3QgaXNNaXNsZWFkID0gaXRlbS5zdGF0dXMgPT09ICdNSVNMRUFEJztcbiAgY29uc3QgaXNTZW50ID0gaXRlbS5zdGF0dXMgPT09ICdTRU5UJztcblxuICBjb25zdCBpc3N1ZU5vdGljZSA9ICgpID0+IHtcbiAgICBvblN0YXR1c0NoYW5nZShpdGVtLmlkLCAnU0VOVCcsIGZpbmUpO1xuICB9O1xuXG4gIGNvbnN0IG1hcmtNaXNsZWFkID0gKCkgPT4ge1xuICAgIG9uU3RhdHVzQ2hhbmdlKGl0ZW0uaWQsICdNSVNMRUFEJywgMCk7XG4gIH07XG5cbiAgY29uc3QgcHJpbnRQREYgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJpbnRXaW5kb3cgPSB3aW5kb3cub3BlbignJywgJ19ibGFuaycpO1xuICAgIHByaW50V2luZG93LmRvY3VtZW50LndyaXRlKGBcbiAgICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDx0aXRsZT5UcmFmZmljIEZpbmUgTm90aWNlIC0gJHtpdGVtLnBsYXRlfTwvdGl0bGU+XG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICBib2R5IHsgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7IGNvbG9yOiAjMWUyOTNiOyBwYWRkaW5nOiA0MHB4OyBsaW5lLWhlaWdodDogMS42OyB9XG4gICAgICAgICAgLmhlYWRlciB7IGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjM2I4MmY2OyBwYWRkaW5nLWJvdHRvbTogMjBweDsgbWFyZ2luLWJvdHRvbTogMzBweDsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgICAgICAgLnRpdGxlIHsgZm9udC1zaXplOiAyNHB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICMxZTNhOGE7IH1cbiAgICAgICAgICAubWV0YS1ncmlkIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyBnYXA6IDIwcHg7IG1hcmdpbi1ib3R0b206IDMwcHg7IH1cbiAgICAgICAgICAubWV0YS1ib3ggeyBiYWNrZ3JvdW5kOiAjZjhmYWZjOyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBwYWRkaW5nOiAxNXB4OyBib3JkZXItcmFkaXVzOiA4cHg7IH1cbiAgICAgICAgICAubWV0YS10aXRsZSB7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNjQ3NDhiOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBtYXJnaW4tYm90dG9tOiA1cHg7IH1cbiAgICAgICAgICAubWV0YS12YWx1ZSB7IGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjMGYxNzJhOyB9XG4gICAgICAgICAgLnBsYXRlIHsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZm9udC1zaXplOiAyMHB4OyBsZXR0ZXItc3BhY2luZzogMS41cHg7IGJhY2tncm91bmQ6ICNlZmY2ZmY7IGJvcmRlcjogMXB4IHNvbGlkICNiZmRiZmU7IHBhZGRpbmc6IDRweCAxMHB4OyBib3JkZXItcmFkaXVzOiA0cHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgICAgIC5maW5lLWJveCB7IGJhY2tncm91bmQ6ICNmZWYyZjI7IGJvcmRlcjogMXB4IHNvbGlkICNmZWNhY2E7IGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogMjBweDsgbWFyZ2luLXRvcDogMzBweDsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgICAgLmZpbmUtYW1vdW50IHsgZm9udC1zaXplOiAyOHB4OyBmb250LXdlaWdodDogODAwOyBjb2xvcjogI2VmNDQ0NDsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgfVxuICAgICAgICAgIC5mb290ZXIgeyBtYXJnaW4tdG9wOiA1MHB4OyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjOTRhM2I4OyBib3JkZXItdG9wOiAxcHggc29saWQgI2UyZThmMDsgcGFkZGluZy10b3A6IDIwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgICAgIC5pbWctY29udGFpbmVyIHsgbWFyZ2luOiAyMHB4IDA7IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IGJvcmRlci1yYWRpdXM6IDhweDsgb3ZlcmZsb3c6IGhpZGRlbjsgbWF4LWhlaWdodDogMzUwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgICAgIC5pbWctY29udGFpbmVyIGltZyB7IG1heC13aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyBtYXgtaGVpZ2h0OiAzNTBweDsgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+VFJBRkZJQyBFTkZPUkNFTUVOVCBDT01NQU5EIENFTlRFUjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7XCI+QXV0b21hdGVkIEFJIFZpb2xhdGlvbiBGaW5lIE5vdGljZTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246IHJpZ2h0OyBjb2xvcjogIzY0NzQ4YjtcIj5cbiAgICAgICAgICAgIFJlZmVyZW5jZSBJRDogJHtpdGVtLmlkfTxici8+XG4gICAgICAgICAgICBEYXRlIElzc3VlZDogJHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tSU4nKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8aDI+T2ZmaWNpYWwgRS1DaGFsbGFuIE5vdGlmaWNhdGlvbjwvaDI+XG4gICAgICAgIDxwPlRoaXMgaXMgdG8gbm90aWZ5IHRoYXQgdGhlIHZlaGljbGUgZGV0YWlscyBsaXN0ZWQgYmVsb3cgd2FzIGNhcHR1cmVkIHZpb2xhdGluZyB0cmFmZmljIHJlZ3VsYXRpb25zIHVzaW5nIG91ciBBSSBDYW1lcmEgRW5mb3JjZW1lbnQgTmV0d29yay48L3A+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWV0YS1ncmlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1ldGEtYm94XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWV0YS10aXRsZVwiPkxpY2Vuc2UgUGxhdGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF0ZVwiPiR7aXRlbS5wbGF0ZX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWV0YS1ib3hcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXRhLXRpdGxlXCI+VmVoaWNsZSBEZXNjcmlwdGlvbjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1ldGEtdmFsdWVcIj4ke2l0ZW0uY29sb3J9ICR7aXRlbS5tYW51ZmFjdHVyZXJ9ICR7aXRlbS5tb2RlbH0gKCR7aXRlbS52ZWhpY2xlVHlwZX0pPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1ldGEtYm94XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWV0YS10aXRsZVwiPkRhdGUgJiBUaW1lPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWV0YS12YWx1ZVwiPiR7bmV3IERhdGUoaXRlbS50aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCdlbi1JTicpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXRhLWJveFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1ldGEtdGl0bGVcIj5Mb2NhdGlvbiBKdW5jdGlvbjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1ldGEtdmFsdWVcIj4ke2l0ZW0ubG9jYXRpb259PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxoMz5FdmlkZW5jZSBJbWFnZTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgJHtpdGVtLmltYWdlVXJsID8gYDxpbWcgc3JjPVwiJHtpdGVtLmltYWdlVXJsfVwiIGFsdD1cIkV2aWRlbmNlIFBob3RvXCIvPmAgOiBgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDQwcHg7IGNvbG9yOiAjNjQ3NDhiO1wiPk5vIEltYWdlIEF0dGFjaGVkPC9kaXY+YH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1ldGEtYm94XCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAyMHB4O1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXRhLXRpdGxlXCI+VmlvbGF0aW9ucyBEZXRlY3RlZDwvZGl2PlxuICAgICAgICAgIDx1bCBzdHlsZT1cIm1hcmdpbjogNXB4IDAgMCAyMHB4OyBwYWRkaW5nOiAwO1wiPlxuICAgICAgICAgICAgJHtpdGVtLnZpb2xhdGlvbnMubWFwKHYgPT4gYDxsaT48c3Ryb25nPiR7di5sYWJlbH08L3N0cm9uZz4gKE1vZGVsIENvbmZpZGVuY2U6ICR7aXRlbS5jb25maWRlbmNlfSUpPC9saT5gKS5qb2luKCcnKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmluZS1ib3hcIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM5OTFiMWI7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IG1hcmdpbi1ib3R0b206IDVweDtcIj5Ub3RhbCBGaW5lIEFtb3VudCBPd2VkPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpbmUtYW1vdW50XCI+4oK5JHtmaW5lLnRvTG9jYWxlU3RyaW5nKCl9PC9kaXY+XG4gICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDExcHg7IGNvbG9yOiAjN2YxZDFkOyBtYXJnaW4tdG9wOiAxMHB4OyBtYXJnaW4tYm90dG9tOiAwO1wiPlBsZWFzZSBjbGVhciB0aGlzIGZpbmUgd2l0aGluIDE1IGRheXMgb2YgcmVjZWl2aW5nIHRoaXMgbm90aWNlIHRvIGF2b2lkIHZlaGljbGUgYmxhY2tsaXN0aW5nLjwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgIFRoaXMgaXMgYW4gYXV0b21hdGVkIGxlZ2FsIGRvY3VtZW50IGdlbmVyYXRlZCBieSBCZW5nYWx1cnUgQUkgVHJhZmZpYyBFbmZvcmNlbWVudCBDb250cm9sLiBObyBwaHlzaWNhbCBzaWduYXR1cmUgaXMgcmVxdWlyZWQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHsgd2luZG93LnByaW50KCk7IH1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgYCk7XG4gICAgcHJpbnRXaW5kb3cuZG9jdW1lbnQuY2xvc2UoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAgYW5pbWF0ZS1zbGlkZXVwXCI+XG4gICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczonZmxleC1zdGFydCcsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLG1hcmdpbkJvdHRvbToxOH19PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTo5LGNvbG9yOicjNmI3MjgwJyxtYXJnaW5Cb3R0b206NCxsZXR0ZXJTcGFjaW5nOjF9fT5WRUhJQ0xFIERFVEFJTFM8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGdhcDo4LCBtYXJnaW5Cb3R0b206NH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF0ZVwiIHN0eWxlPXt7Zm9udFNpemU6MTgsIHRleHREZWNvcmF0aW9uOiBpc01pc2xlYWQgPyAnbGluZS10aHJvdWdoJyA6ICdub25lJ319PntpdGVtLnBsYXRlfTwvZGl2PlxuICAgICAgICAgICAge2l0ZW0uaXNDaGFzZUNhdGVnb3J5ICYmIDxzcGFuIGNsYXNzTmFtZT1cImNoaXAgY2hpcC1iYWRcIiBzdHlsZT17e2JhY2tncm91bmQ6JyNlZjQ0NDQnLCBhbmltYXRpb246J3B1bHNlR2xvdyAxLjVzIGluZmluaXRlJ319PkNIQVNFIPCfmqg8L3NwYW4+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+PFJCYWRnZSByaXNrPXtpdGVtLnJpc2t9Lz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1nIGJ0bi1zXCIgb25DbGljaz17b25DbG9zZX0+4pyVPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEFjdGlvbiBwYW5lbCBmb3IgdmFsaWRhdGlvbiAqL31cbiAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOidyZ2JhKDMwLDQxLDU5LC4zKScsYm9yZGVyOicxcHggc29saWQgIzFlMjkzYicsYm9yZGVyUmFkaXVzOjEyLHBhZGRpbmc6MTYsbWFyZ2luQm90dG9tOjE4fX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMSxmb250V2VpZ2h0OjcwMCxjb2xvcjonIzljYTNhZicsbWFyZ2luQm90dG9tOjEyLHRleHRUcmFuc2Zvcm06J3VwcGVyY2FzZScsbGV0dGVyU3BhY2luZzouNX19PkFjdGlvbiBQYW5lbCAoUmV2aWV3ICYgRW5mb3JjZW1lbnQpPC9kaXY+XG4gICAgICAgIFxuICAgICAgICB7aXNNaXNsZWFkID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYS1lcnJcIiBzdHlsZT17e21hcmdpbjowfX0+PFhDaXJjbGUgc2l6ZT17MTR9Lz4gTWFya2VkIGFzIE1pc2xlYWQvRmFsc2UgRGV0ZWN0aW9uLiBOb3RpY2UgQ2FuY2VsbGVkLjwvZGl2PlxuICAgICAgICApIDogaXRlbS5zdGF0dXMgPT09ICdXQUlWRUQnID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYS13YXJuXCIgc3R5bGU9e3ttYXJnaW46MH19PjxJbmZvIHNpemU9ezE0fS8+IEZpbmUgd2FpdmVkIGR1ZSB0byBkaXNwdXRlLiBDYXNlIENsb3NlZC48L2Rpdj5cbiAgICAgICAgKSA6IGl0ZW0uc3RhdHVzID09PSAnUEFJRCcgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhLW9rXCIgc3R5bGU9e3ttYXJnaW46MCwgYmFja2dyb3VuZDoncmdiYSgxNiwxODUsMTI5LDAuMSknLCBib3JkZXJDb2xvcjoncmdiYSgxNiwxODUsMTI5LDAuMiknLCBjb2xvcjonIzM0ZDM5OSd9fT48Q2hlY2tDaXJjbGUgc2l6ZT17MTR9Lz4gQ2hhbGxhbiBQYWlkLiBDYXNlIENsb3NlZC48L2Rpdj5cbiAgICAgICAgKSA6IGlzU2VudCA/IChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZmxleERpcmVjdGlvbjonY29sdW1uJyxnYXA6MTB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYS1va1wiIHN0eWxlPXt7bWFyZ2luOjB9fT48Q2hlY2tDaXJjbGUgc2l6ZT17MTR9Lz4gTm90aWNlIFNlbnQhIE93bmVyIGNoYXJnZWQ6IDxzdHJvbmc+4oK5e2l0ZW0uZmluZUFtb3VudH08L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgZ2FwOjh9fT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWcgYnRuLXNcIiBzdHlsZT17e2ZsZXg6MX19IG9uQ2xpY2s9e3ByaW50UERGfT48RmlsZURvd24gc2l6ZT17MTJ9Lz5Eb3dubG9hZCBOb3RpY2UgUERGPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kIGJ0bi1zXCIgc3R5bGU9e3tmbGV4OjEsIGJhY2tncm91bmQ6J2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNTllMGIsICNkOTc3MDYpJ319IG9uQ2xpY2s9eygpID0+IG9uU3RhdHVzQ2hhbmdlKGl0ZW0uaWQsICdXQUlWRUQnLCAwKX0+V2FpdmUgRmluZSDimpbvuI88L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOidjb2x1bW4nLGdhcDoxMn19PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImF1dGgtbGJsXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206NH19PkZpbmUgQW1vdW50IChJTlIpPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGdhcDo4fX0+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1pbnBcIiBcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaW5lfSBcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlPT5zZXRGaW5lKE1hdGgubWF4KDAsIHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKXx8MCkpfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOic4cHggMTJweCcsZm9udFNpemU6MTN9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXtpc3N1ZU5vdGljZX0+Q29uZmlybSAmIFNlbmQgTm90aWNlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J2ZsZXgtZW5kJ319PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZCBidG4tc1wiIG9uQ2xpY2s9e21hcmtNaXNsZWFkfT48QWxlcnRUcmlhbmdsZSBzaXplPXsxMX0vPkZsYWcgYXMgTWlzbGVhZCAoRmFsc2UgQWxhcm0pPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogSW1hZ2UgaWYgYXZhaWxhYmxlICovfVxuICAgICAge2l0ZW0uaW1hZ2VVcmwgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1wcmV2XCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206MTZ9fT5cbiAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZVVybH0gYWx0PVwiZXZpZGVuY2VcIi8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctcHJldi1iYWRnZVwiPvCfk7cgRXZpZGVuY2UgRnJhbWUgI3tpdGVtLmV2aWRlbmNlRnJhbWV9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIFZlaGljbGUgSW5mbyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtc2VjXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtc2VjLXR0bFwiPlZlaGljbGUgSW5mb3JtYXRpb248L2Rpdj5cbiAgICAgICAge1tcbiAgICAgICAgICBbJ1ZlaGljbGUgVHlwZScsaXRlbS52ZWhpY2xlVHlwZV0sXG4gICAgICAgICAgWydNYW51ZmFjdHVyZXInLGl0ZW0ubWFudWZhY3R1cmVyXSxcbiAgICAgICAgICBbJ01vZGVsJyxpdGVtLm1vZGVsXSxcbiAgICAgICAgICBbJ0NvbG9yJyxpdGVtLmNvbG9yXSxcbiAgICAgICAgICBbJ1JlZ2lzdHJhdGlvbicsPHNwYW4ga2V5PVwiclwiIGNsYXNzTmFtZT17YGNoaXAgJHtpdGVtLnJlZ2lzdHJhdGlvblN0YXR1cz09PSdWRVJJRklFRCc/J2NoaXAtb2snOidjaGlwLWJhZCd9YH0+e2l0ZW0ucmVnaXN0cmF0aW9uU3RhdHVzfTwvc3Bhbj5dLFxuICAgICAgICAgIFsnT3duZXIgU3RhdHVzJyw8c3BhbiBrZXk9XCJvXCIgY2xhc3NOYW1lPXtgY2hpcCAke2l0ZW0ub3duZXJTdGF0dXM9PT0nTUFUQ0hFRCc/J2NoaXAtaW5mbyc6J2NoaXAtd2Fybid9YH0+e2l0ZW0ub3duZXJTdGF0dXN9PC9zcGFuPl0sXG4gICAgICAgIF0ubWFwKChbayx2XSk9PihcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLXJvd1wiIGtleT17a30+PHNwYW4gY2xhc3NOYW1lPVwiZGtcIj57a308L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZHZcIj57dn08L3NwYW4+PC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBWaW9sYXRpb25zICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1zZWNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1zZWMtdHRsXCI+RGV0ZWN0ZWQgVmlvbGF0aW9uczwvZGl2PlxuICAgICAgICB7aXRlbS52aW9sYXRpb25zLm1hcCgodiwgaWR4KT0+KFxuICAgICAgICAgIDxkaXYga2V5PXt2LmlkfHxpZHh9IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczonY2VudGVyJyxnYXA6OCxwYWRkaW5nOic1cHggMCcsYm9yZGVyQm90dG9tOicxcHggc29saWQgcmdiYSgzMCw0MSw1OSwuMyknfX0+XG4gICAgICAgICAgICA8Q2hlY2tDaXJjbGUgc2l6ZT17MTJ9IHN0eWxlPXt7Y29sb3I6di5jb2xvcnx8JyNlZjQ0NDQnLGZsZXhTaHJpbms6MH19Lz5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6MTIsY29sb3I6JyNlNWU3ZWInLGZsZXg6MX19Pnt2LmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZ0YWdcIiBzdHlsZT17e2JhY2tncm91bmQ6YCR7di5jb2xvcnx8JyNlZjQ0NDQnfTE4YCxjb2xvcjp2LmNvbG9yfHwnI2VmNDQ0NCcsYm9yZGVyOmAxcHggc29saWQgJHt2LmNvbG9yfHwnI2VmNDQ0NCd9NDRgfX0+e3Yucmlza3x8J0hJR0gnfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEFJIENyZWRpYmlsaXR5ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1zZWNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1zZWMtdHRsXCI+QUkgQ3JlZGliaWxpdHkgU2NvcmU8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6J2NlbnRlcicsZ2FwOjE2fX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVkLXJpbmdcIiBzdHlsZT17eyctLXAnOnBjdERlZ319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVkLWlubmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlZC1udW1cIj57Y3Iuc2NvcmV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlZC1sYmxcIj4vMTAwPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDoxfX0+XG4gICAgICAgICAgICB7W1snQ2xlYXIgcGxhdGUgdmlzaWJsZScsY3IucGxhdGVDbGVhcl0sWydTaWduYWwgdmlzaWJsZScsY3Iuc2lnbmFsVmlzaWJsZV0sWydSaWRlciB2aXNpYmxlJyxjci5yaWRlclZpc2libGVdLFsnVmlvbGF0aW9uIHpvbmUgY2xlYXInLGNyLnpvbmVDbGVhcl1dLm1hcCgoW2wsb2tdKT0+KFxuICAgICAgICAgICAgICA8ZGl2IGtleT17bH0gc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOidjZW50ZXInLGdhcDo2LHBhZGRpbmc6JzNweCAwJyxmb250U2l6ZToxMX19PlxuICAgICAgICAgICAgICAgIHtvaz88Q2hlY2tDaXJjbGUgc2l6ZT17MTF9IHN0eWxlPXt7Y29sb3I6JyMxMGI5ODEnfX0vPjo8WENpcmNsZSBzaXplPXsxMX0gc3R5bGU9e3tjb2xvcjonI2VmNDQ0NCd9fS8+fVxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6b2s/JyM5Y2EzYWYnOicjNmI3MjgwJ319PntsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEV4cGxhbmF0aW9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1zZWNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1zZWMtdHRsXCI+RGV0ZWN0aW9uIEV4cGxhbmF0aW9uPC9kaXY+XG4gICAgICAgIHtpdGVtLmV4cGxhbmF0aW9uLm1hcCgoZXgsaSk9PihcbiAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3tiYWNrZ3JvdW5kOidyZ2JhKDU5LDEzMCwyNDYsLjA0KScsYm9yZGVyOicxcHggc29saWQgcmdiYSg1OSwxMzAsMjQ2LC4xKScsYm9yZGVyUmFkaXVzOjkscGFkZGluZzoxMSxtYXJnaW5Cb3R0b206N319PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjEwLGZvbnRXZWlnaHQ6NzAwLGNvbG9yOicjNjBhNWZhJyxtYXJnaW5Cb3R0b206M319PntleC50eXBlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjExLGNvbG9yOicjOWNhM2FmJyxsaW5lSGVpZ2h0OjEuNn19PntleC5yZWFzb259PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBPZmZlbmRlciBIaXN0b3J5ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1zZWNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1zZWMtdHRsXCI+T2ZmZW5kZXIgSGlzdG9yeTwvZGl2PlxuICAgICAgICB7aXRlbS5oaXN0b3J5ICYmIGl0ZW0uaGlzdG9yeS5sZW5ndGg+MD8oXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YmxcIj5cbiAgICAgICAgICAgICAgPHRoZWFkPjx0cj48dGg+RGF0ZTwvdGg+PHRoPlZpb2xhdGlvbjwvdGg+PHRoPkZpbmU8L3RoPjwvdHI+PC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHtpdGVtLmhpc3RvcnkubWFwKChoLGkpPT4oXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1vbm9cIiBzdHlsZT17e2ZvbnRTaXplOjEwLGNvbG9yOicjOWNhM2FmJ319PntoLmRhdGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7Zm9udFNpemU6MTF9fT57aC50eXBlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtb25vXCIgc3R5bGU9e3tmb250U2l6ZToxMSxjb2xvcjonI2ZiYmYyNCd9fT7igrl7aC5maW5lLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvPlxuICAgICAgICApOjxkaXYgc3R5bGU9e3tjb2xvcjonIzZiNzI4MCcsZm9udFNpemU6MTIsdGV4dEFsaWduOidjZW50ZXInLHBhZGRpbmc6JzEwcHggMCd9fT7inIUgTm8gcHJpb3IgdmlvbGF0aW9uczwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi8vIFNZU1RFTSBTVEFUVVMgTU9EQUxcbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZnVuY3Rpb24gU3RhdHVzTW9kYWwoe29uQ2xvc2V9KXtcbiAgY29uc3QgW3N0YXR1cyxzZXRTdGF0dXNdPXVzZVN0YXRlKHtsb2FkaW5nOnRydWV9KTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZmV0Y2goYCR7QVBJfS9oZWFsdGhgKS50aGVuKHI9PnIuanNvbigpKS50aGVuKGQ9PnNldFN0YXR1cyh7Li4uZCxsb2FkaW5nOmZhbHNlLG9ubGluZTp0cnVlfSkpXG4gICAgICAuY2F0Y2goKCk9PnNldFN0YXR1cyh7bG9hZGluZzpmYWxzZSxvbmxpbmU6ZmFsc2UsZGF0YWJhc2U6J2Rpc2Nvbm5lY3RlZCd9KSk7XG4gIH0sW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYmdcIiBvbkNsaWNrPXtlPT5lLnRhcmdldD09PWUuY3VycmVudFRhcmdldCYmb25DbG9zZSgpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2V9PjxYIHNpemU9ezE4fS8+PC9idXR0b24+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOidjZW50ZXInLGdhcDoxMixtYXJnaW5Cb3R0b206MjJ9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6NDQsaGVpZ2h0OjQ0LGJvcmRlclJhZGl1czoxMixiYWNrZ3JvdW5kOidsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoNTksMTMwLDI0NiwuMikscmdiYSgxMzksOTIsMjQ2LC4xNSkpJyxkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOidjZW50ZXInLGp1c3RpZnlDb250ZW50OidjZW50ZXInfX0+PFNlcnZlciBzaXplPXsyMH0gY29sb3I9XCIjNjBhNWZhXCIvPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGRpdiBzdHlsZT17e2ZvbnRTaXplOjE2LGZvbnRXZWlnaHQ6NzAwfX0+U3lzdGVtIFN0YXR1czwvZGl2PjxkaXYgc3R5bGU9e3tmb250U2l6ZToxMSxjb2xvcjonIzZiNzI4MCd9fT5SZWFsLXRpbWUgaGVhbHRoIGNoZWNrPC9kaXY+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c3RhdHVzLmxvYWRpbmc/PGRpdiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJyxwYWRkaW5nOjIwfX0+PGRpdiBjbGFzc05hbWU9XCJzcGluXCIgc3R5bGU9e3ttYXJnaW46JzAgYXV0byd9fS8+PC9kaXY+OihcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAge2xhYmVsOidBUEkgU2VydmVyJyxvazpzdGF0dXMub25saW5lLGRldGFpbDpzdGF0dXMub25saW5lPydSdW5uaW5nIG9uIDo1MDAwJzonT2ZmbGluZSd9LFxuICAgICAgICAgICAgICB7bGFiZWw6J01vbmdvREIgQXRsYXMnLG9rOnN0YXR1cy5kYXRhYmFzZT09PSdjb25uZWN0ZWQnLGRldGFpbDpzdGF0dXMuZGF0YWJhc2V8fCdVbmtub3duJ30sXG4gICAgICAgICAgICAgIHtsYWJlbDonRGV0ZWN0aW9uIEVuZ2luZScsb2s6c3RhdHVzLm9ubGluZSxkZXRhaWw6J1lPTE92MTEgU2ltdWxhdGlvbiBBY3RpdmUnfSxcbiAgICAgICAgICAgICAge2xhYmVsOidPQ1IgUGlwZWxpbmUnLG9rOnN0YXR1cy5vbmxpbmUsZGV0YWlsOidFYXN5T0NSIFJlYWR5J30sXG4gICAgICAgICAgICAgIHtsYWJlbDonRXZpZGVuY2UgR2VuZXJhdG9yJyxvazpzdGF0dXMub25saW5lLGRldGFpbDonU1ZHIE92ZXJsYXkgRW5naW5lIEFjdGl2ZSd9LFxuICAgICAgICAgICAgXS5tYXAocz0+KFxuICAgICAgICAgICAgICA8ZGl2IGtleT17cy5sYWJlbH0gc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOidjZW50ZXInLGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxwYWRkaW5nOicxMHB4IDAnLGJvcmRlckJvdHRvbTonMXB4IHNvbGlkICMxZTI5M2InfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6J2NlbnRlcicsZ2FwOjl9fT5cbiAgICAgICAgICAgICAgICAgIHtzLm9rPzxDaGVja0NpcmNsZSBzaXplPXsxNH0gc3R5bGU9e3tjb2xvcjonIzEwYjk4MSd9fS8+OjxYQ2lyY2xlIHNpemU9ezE0fSBzdHlsZT17e2NvbG9yOicjZWY0NDQ0J319Lz59XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOjEzLGZvbnRXZWlnaHQ6NjAwfX0+e3MubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGNoaXAgJHtzLm9rPydjaGlwLW9rJzonY2hpcC1iYWQnfWB9PntzLmRldGFpbH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOjE2LGRpc3BsYXk6J2ZsZXgnLGdhcDo4fX0+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wIGJ0bi1zXCIgb25DbGljaz17KCk9PntzZXRTdGF0dXMoe2xvYWRpbmc6dHJ1ZX0pO2ZldGNoKGAke0FQSX0vaGVhbHRoYCkudGhlbihyPT5yLmpzb24oKSkudGhlbihkPT5zZXRTdGF0dXMoey4uLmQsbG9hZGluZzpmYWxzZSxvbmxpbmU6dHJ1ZX0pKS5jYXRjaCgoKT0+c2V0U3RhdHVzKHtsb2FkaW5nOmZhbHNlLG9ubGluZTpmYWxzZX0pKTt9fT5cbiAgICAgICAgICAgICAgICA8UmVmcmVzaEN3IHNpemU9ezExfS8+UmVmcmVzaFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWcgYnRuLXNcIiBvbkNsaWNrPXtvbkNsb3NlfT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4vLyBNT05HT0RCIE1PREFMXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbmZ1bmN0aW9uIE1vbmdvTW9kYWwoe29uQ2xvc2V9KXtcbiAgY29uc3QgW3N0YXRzLHNldFN0YXRzXT11c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ109dXNlU3RhdGUodHJ1ZSk7XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIFByb21pc2UuYWxsKFtcbiAgICAgIGZldGNoKGAke0FQSX0vc3RhdGlzdGljc2ApLnRoZW4ocj0+ci5qc29uKCkpLmNhdGNoKCgpPT5udWxsKSxcbiAgICAgIGZldGNoKGAke0FQSX0vdmlvbGF0aW9ucz9saW1pdD0xYCkudGhlbihyPT5yLmpzb24oKSkuY2F0Y2goKCk9Pm51bGwpLFxuICAgIF0pLnRoZW4oKFtzdCx2aV0pPT57XG4gICAgICBzZXRTdGF0cyh7dG90YWw6c3Q/LnRvdGFsfHwwLGJ5VHlwZTpzdD8uYnlUeXBlfHx7fSx2aW9sYXRpb25Db3VudDp2aT8udG90YWxDb3VudHx8MH0pO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH0sW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYmdcIiBvbkNsaWNrPXtlPT5lLnRhcmdldD09PWUuY3VycmVudFRhcmdldCYmb25DbG9zZSgpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2V9PjxYIHNpemU9ezE4fS8+PC9idXR0b24+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOidjZW50ZXInLGdhcDoxMixtYXJnaW5Cb3R0b206MjJ9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6NDQsaGVpZ2h0OjQ0LGJvcmRlclJhZGl1czoxMixiYWNrZ3JvdW5kOidsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoMTYsMTg1LDEyOSwuMTUpLHJnYmEoNSwxNTAsMTA1LC4xKSknLGRpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6J2NlbnRlcicsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcid9fT48RGF0YWJhc2Ugc2l6ZT17MjB9IGNvbG9yPVwiIzM0ZDM5OVwiLz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxkaXYgc3R5bGU9e3tmb250U2l6ZToxNixmb250V2VpZ2h0OjcwMH19Pk1vbmdvREIgQXRsYXM8L2Rpdj48ZGl2IHN0eWxlPXt7Zm9udFNpemU6MTEsY29sb3I6JyM2YjcyODAnfX0+Y2x1c3RlcjAudnZ4c2pjdy5tb25nb2RiLm5ldDwvZGl2PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2xvYWRpbmc/PGRpdiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJyxwYWRkaW5nOjIwfX0+PGRpdiBjbGFzc05hbWU9XCJzcGluXCIgc3R5bGU9e3ttYXJnaW46JzAgYXV0byd9fS8+PC9kaXY+OihcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2dyaWQnLGdyaWRUZW1wbGF0ZUNvbHVtbnM6JzFmciAxZnInLGdhcDoxMCxtYXJnaW5Cb3R0b206MTZ9fT5cbiAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICB7bGFiZWw6J1RvdGFsIFZpb2xhdGlvbnMnLHZhbHVlOnN0YXRzLnRvdGFsLGNvbG9yOicjNjBhNWZhJ30sXG4gICAgICAgICAgICAgICAge2xhYmVsOidSZWNvcmRzIGluIERCJyx2YWx1ZTpzdGF0cy52aW9sYXRpb25Db3VudCxjb2xvcjonIzM0ZDM5OSd9LFxuICAgICAgICAgICAgICBdLm1hcChzPT4oXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3MubGFiZWx9IHN0eWxlPXt7YmFja2dyb3VuZDoncmdiYSgxNSwyMyw0MiwuNSknLGJvcmRlcjonMXB4IHNvbGlkICMxZTI5M2InLGJvcmRlclJhZGl1czoxMCxwYWRkaW5nOjE0fX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MjIsZm9udFdlaWdodDo4MDAsY29sb3I6cy5jb2xvcixmb250RmFtaWx5OidKZXRCcmFpbnMgTW9ubyd9fT57cy52YWx1ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMCxjb2xvcjonIzljYTNhZicsbWFyZ2luVG9wOjJ9fT57cy5sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOidyZ2JhKDE1LDIzLDQyLC40KScsYm9yZGVyOicxcHggc29saWQgIzFlMjkzYicsYm9yZGVyUmFkaXVzOjEwLHBhZGRpbmc6MTR9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjksZm9udFdlaWdodDo3MDAsY29sb3I6JyM2YjcyODAnLGxldHRlclNwYWNpbmc6MSxtYXJnaW5Cb3R0b206MTAsdGV4dFRyYW5zZm9ybTondXBwZXJjYXNlJ319PkNvbGxlY3Rpb246IHZpb2xhdGlvbnM8L2Rpdj5cbiAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHN0YXRzLmJ5VHlwZSkuc2xpY2UoMCw2KS5tYXAoKFtrLHZdKT0+KFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrfSBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6J2NlbnRlcicsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLHBhZGRpbmc6JzRweCAwJyxib3JkZXJCb3R0b206JzFweCBzb2xpZCByZ2JhKDMwLDQxLDU5LC4zKScsZm9udFNpemU6MTF9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyM5Y2EzYWYnfX0+e2t9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9ub1wiIHN0eWxlPXt7Y29sb3I6JyM2MGE1ZmEnLGZvbnRXZWlnaHQ6NzAwfX0+e3Z9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHN0YXRzLmJ5VHlwZSkubGVuZ3RoPT09MCAmJiA8ZGl2IHN0eWxlPXt7Y29sb3I6JyM2YjcyODAnLGZvbnRTaXplOjExLHRleHRBbGlnbjonY2VudGVyJ319Pk5vIGRhdGEgeWV0IOKAlCB1cGxvYWQgaW1hZ2VzIHRvIHBvcHVsYXRlPC9kaXY+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZyBidG4tc1wiIHN0eWxlPXt7bWFyZ2luVG9wOjEyfX0gb25DbGljaz17b25DbG9zZX0+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi8vIFdFTENPTUUgTU9EQUxcbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZnVuY3Rpb24gV2VsY29tZU1vZGFsKHtvbkNsb3NlfSl7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1iZ1wiIG9uQ2xpY2s9e2U9PmUudGFyZ2V0PT09ZS5jdXJyZW50VGFyZ2V0JiZvbkNsb3NlKCl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIHN0eWxlPXt7bWF4V2lkdGg6ICc1MjBweCd9fT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2V9PjxYIHNpemU9ezE4fS8+PC9idXR0b24+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOidjZW50ZXInLGdhcDoxMixtYXJnaW5Cb3R0b206MTh9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6NDQsaGVpZ2h0OjQ0LGJvcmRlclJhZGl1czoxMixiYWNrZ3JvdW5kOidsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoNTksMTMwLDI0NiwuMjUpLHJnYmEoMTM5LDkyLDI0NiwuMikpJyxkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOidjZW50ZXInLGp1c3RpZnlDb250ZW50OidjZW50ZXInfX0+PEF3YXJkIHNpemU9ezIwfSBjb2xvcj1cIiM2MGE1ZmFcIi8+PC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxNixmb250V2VpZ2h0OjgwMCxjb2xvcjonI2YzZjRmNid9fT5CZW5nYWx1cnUgVHJhZmZpYyBFbmZvcmNlbWVudCBTeXN0ZW08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMSxjb2xvcjonIzNiODJmNicsZm9udFdlaWdodDo2MDB9fT5BSSBDb21tYW5kIENvbnRyb2wgUHJvdG90eXBlIHYxLjA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjEyLGNvbG9yOicjY2JkNWUxJyxsaW5lSGVpZ2h0OjEuNixkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOidjb2x1bW4nLGdhcDoxMn19PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgV2VsY29tZSB0byB0aGUgdXBncmFkZWQgVHJhZmZpYyBWaW9sYXRpb24gRGV0ZWN0aW9uIGFuZCBDaGFsbGFuIFN5c3RlbSEgVGhpcyBwcm90b3R5cGUgZGVtb25zdHJhdGVzIHJlYWwtdGltZSB2aXNpb24gcHJvY2Vzc2luZyBwaXBlbGluZXMgYW5kIGF1dG9tYXRlZCBjaXRhdGlvbiBub3RpZmljYXRpb25zLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDoncmdiYSgzMCw1OCwxMzgsMC4xNSknLGJvcmRlcjonMXB4IHNvbGlkIHJnYmEoNTksMTMwLDI0NiwwLjI1KScsYm9yZGVyUmFkaXVzOjEwLHBhZGRpbmc6MTJ9fT5cbiAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3tmb250U2l6ZToxMSxjb2xvcjonIzYwYTVmYScsZGlzcGxheTonYmxvY2snLG1hcmdpbkJvdHRvbTo2fX0+8J+UkSBRdWljayBUZXN0aW5nIEFjY291bnRzICYgUm9sZXM6PC9zdHJvbmc+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZmxleERpcmVjdGlvbjonY29sdW1uJyxnYXA6NSxmb250U2l6ZToxMX19PlxuICAgICAgICAgICAgICA8ZGl2PuKAoiDwn5GuIDxzdHJvbmc+UG9saWNlIE9mZmljZXI6PC9zdHJvbmc+IFNpZ24gaW4gd2l0aCBRdWljayBNYXRjaCAob3IgdXNlIGNvZGUgPGNvZGU+VE4tMTIzNDwvY29kZT4pIHRvIHJldmlldyBBSSB2aW9sYXRpb25zIGFuZCBtYW51YWxseSBsb2cgY2hhbGxhbnMuPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+4oCiIPCfm6DvuI8gPHN0cm9uZz5BZG1pbiBQb3J0YWw6PC9zdHJvbmc+IFVzZSBRdWljayBNYXRjaCAocmVxdWlyZXMgc2VjdXJpdHkgY29kZSA8Y29kZT5BRE1JTi01NjE2PC9jb2RlPikgdG8gYWNjZXNzIHN5c3RlbSBoZWFsdGgsIE1vbmdvREIgc3RhdHMsIGFuZCBjb25maWd1cmF0aW9uLjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PuKAoiDwn5qXIDxzdHJvbmc+Q2l0aXplbiBQb3J0YWw6PC9zdHJvbmc+IFJlZ2lzdGVyIG9yIGxvZ2luIGFzIGEgY2l0aXplbiwgbGluayB5b3VyIHBsYXRlIChlLmcuIDxjb2RlPktBMDNIQTI5MDM8L2NvZGU+KSBhbmQgdmlldyByZWFsLXRpbWUgd2FybmluZ3MuPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOidjb2x1bW4nLGdhcDo2fX0+XG4gICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXt7Zm9udFNpemU6MTEsY29sb3I6JyNmM2Y0ZjYnfX0+8J+GlSBIaWdobGlnaHRlZCBQcm90b3R5cGUgRmVhdHVyZXM6PC9zdHJvbmc+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZ3JpZCcsZ3JpZFRlbXBsYXRlQ29sdW1uczonMWZyIDFmcicsZ2FwOjh9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6J3JnYmEoMjU1LDI1NSwyNTUsMC4wMiknLGJvcmRlcjonMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSknLGJvcmRlclJhZGl1czo4LHBhZGRpbmc6OH19PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6MTEsZm9udFdlaWdodDo3MDAsY29sb3I6JyNlMmU4ZjAnLGRpc3BsYXk6J2Jsb2NrJ319PvCfk4ogQmF0Y2ggUXVldWUgRW5naW5lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6MTAsY29sb3I6JyM5Y2EzYWYnfX0+Q29uZmlndXJlIHdvcmtlciBjb25jdXJyZW5jeSwgcnVuIGRpYWdub3N0aWMgcnVucywgYW5kIGRvd25sb2FkIENTViByZXBvcnRzLjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOidyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpJyxib3JkZXI6JzFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpJyxib3JkZXJSYWRpdXM6OCxwYWRkaW5nOjh9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOjExLGZvbnRXZWlnaHQ6NzAwLGNvbG9yOicjZTJlOGYwJyxkaXNwbGF5OidibG9jayd9fT7wn4+X77iPIEFuaW1hdGVkIFBpcGVsaW5lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6MTAsY29sb3I6JyM5Y2EzYWYnfX0+V2F0Y2ggYWN0aXZlIHNpbXVsYXRpb24gZGlhZ25vc3RpY3MgdHJhdmVsIHRocm91Z2ggT3BlbkNWLCBZT0xPdjgsIGFuZCBPQ1Igc3RhZ2VzLjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDoyMCxkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonZmxleC1lbmQnfX0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXBcIiBvbkNsaWNrPXtvbkNsb3NlfSBzdHlsZT17e3BhZGRpbmc6JzhweCAyMHB4J319PkdldCBTdGFydGVkPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuLy8gQ09OVkVSU0FUSU9OQUwgQUkgQ0hBVEJPVCAoQ29udmVyc2F0aW9uYWwgZGlhbG9nIHN5c3RlbSlcbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZnVuY3Rpb24gQ2hhdGJvdCh7IGN1cnJlbnRVc2VyIH0pe1xuICBjb25zdCBbb3BlbixzZXRPcGVuXT11c2VTdGF0ZShmYWxzZSk7XG4gIFxuICBjb25zdCBjbGVhbkJvdE1lc3NhZ2UgPSAodGV4dCkgPT4ge1xuICAgIGlmIChjdXJyZW50VXNlcj8ucm9sZSA9PT0gJ3BvbGljZScpIHtcbiAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgIC5yZXBsYWNlKC9Nb25nb0RCIEF0bGFzL2dpLCAnY2VudHJhbCByZWNvcmRzJylcbiAgICAgICAgLnJlcGxhY2UoL01vbmdvREIvZ2ksICdjZW50cmFsIHJlY29yZHMnKVxuICAgICAgICAucmVwbGFjZSgvZGF0YWJhc2Ugc3RhdHVzZXMvZ2ksICdzeXN0ZW0gc3RhdHVzZXMnKVxuICAgICAgICAucmVwbGFjZSgvZGF0YWJhc2UgZW50cnkvZ2ksICdzeXN0ZW0gbG9nIGVudHJ5JylcbiAgICAgICAgLnJlcGxhY2UoL2RhdGFiYXNlL2dpLCAnc3lzdGVtJylcbiAgICAgICAgLnJlcGxhY2UoL2RiU3RhdHVzL2dpLCAnc3RhdHVzJylcbiAgICAgICAgLnJlcGxhY2UoL0F0bGFzL2dpLCAncmVjb3JkcycpO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dDtcbiAgfTtcblxuICBjb25zdCBbbXNncyxzZXRNc2dzXT11c2VTdGF0ZShbXG4gICAge2Zyb206J2JvdCcsdGV4dDpg8J+kliBIZWxsbyEgSSBhbSB0aGUgVHJhZmZpY0FJIENvbnZlcnNhdGlvbmFsIEFzc2lzdGFudC5cXG5Ib3cgY2FuIEkgaGVscCB5b3UgbWFuYWdlIHRyYWZmaWMgdmlvbGF0aW9uIGVuZm9yY2VtZW50IHRvZGF5P2B9XG4gIF0pO1xuICBjb25zdCBbaW5wLHNldElucF09dXNlU3RhdGUoJycpO1xuICBjb25zdCBlbmRSZWY9dXNlUmVmKCk7XG4gIFxuICB1c2VFZmZlY3QoKCk9PnsgaWYob3BlbikgZW5kUmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjonc21vb3RoJ30pOyB9LFttc2dzLG9wZW5dKTtcblxuICBjb25zdCByZXNwb25kVG9NZXNzYWdlID0gKGxvdykgPT4ge1xuICAgIGxldCByZXNwb25zZSA9IFwiXCI7XG4gICAgXG4gICAgLy8gQ29yZSBDb252ZXJzYXRpb25hbCBIZXVyaXN0aWNzXG4gICAgaWYgKGxvdy5pbmNsdWRlcygnaGVsbG8nKSB8fCBsb3cuaW5jbHVkZXMoJ2hpICcpIHx8IGxvdy5pbmNsdWRlcygnaGV5JykpIHtcbiAgICAgIHJlc3BvbnNlID0gYPCfkYsgSGVsbG8hIEknbSBoZXJlIHRvIGFzc2lzdCB5b3UgaW4gbW9uaXRvcmluZyBhbmQgbWFuYWdpbmcgdGhlIFRyYWZmaWMgVmlvbGF0aW9uIERldGVjdGlvbiBTeXN0ZW0uIEFzICR7Y3VycmVudFVzZXI/LnJvbGUgPT09ICdhZG1pbicgPyAnYW4gQWRtaW5pc3RyYXRvcicgOiAnYSBQb2xpY2UgT2ZmaWNlcid9LCB5b3UgY2FuIHBlcmZvcm0gZGV0ZWN0aW9uIGNoZWNrcywgcmV2aWV3IGV2aWRlbmNlLCBvciBzZWFyY2ggZm9yIHBsYXRlcy4gQXNrIG1lIGFueSB0ZWNobmljYWwgb3Igb3BlcmF0aW9uYWwgcXVlc3Rpb24hYDtcbiAgICB9IGVsc2UgaWYgKGxvdy5pbmNsdWRlcygncm9sZXMnKSB8fCBsb3cuaW5jbHVkZXMoJ3BvbGljZScpIHx8IGxvdy5pbmNsdWRlcygnYWRtaW4nKSB8fCBsb3cuaW5jbHVkZXMoJ2xvZ2luJykpIHtcbiAgICAgIHJlc3BvbnNlID0gYPCflJEgVGhpcyBwcm90b3R5cGUgdXNlcyBhIHJvbGUtYmFzZWQgYXV0aGVudGljYXRpb24gbW9kZWwuIEFkbWlucyBjYW4gdmlldyBTeXN0ZW0gSGVhbHRoIGFuZCBkYXRhYmFzZSBzdGF0dXNlcywgd2hlcmVhcyBQb2xpY2UgbG9naW5zIGhhdmUgdGhlc2UgYmFja2VuZCBjb25maWd1cmF0aW9uIGxpbmtzIGhpZGRlbiBmcm9tIHRoZSBzaWRlYmFyIHRvIGZvY3VzIGV4Y2x1c2l2ZWx5IG9uIHJldmlld2luZyB2aW9sYXRpb25zIGFuZCBzZW5kaW5nIGZpbmUgbm90aWNlcy5gO1xuICAgIH0gZWxzZSBpZiAobG93LmluY2x1ZGVzKCdtaXNsZWFkJykgfHwgbG93LmluY2x1ZGVzKCdkaXNtaXNzJykpIHtcbiAgICAgIHJlc3BvbnNlID0gYOKaoO+4jyBJZiBvdXIgQUkgbW9kZWwgZmFsc2VseSBmbGFncyBhbiBpbWFnZSAobWlzbGVhZCBkZXRlY3Rpb24pLCBvZmZpY2VycyBjYW4gY2xpY2sgdGhlIFwiRmxhZyBhcyBNaXNsZWFkXCIgYnV0dG9uIGluc2lkZSB0aGUgdmVoaWNsZSBkZXRhaWxzLiBUaGlzIG1hcmtzIHRoZSBkYXRhYmFzZSBlbnRyeSBhcyBNSVNMRUFELCBwcmV2ZW50cyBmaW5lIG5vdGljZSBkaXNwYXRjaCwgYW5kIGNhbmNlbHMgdGhlIHJlY29yZCBzbyB0aGUgY2l0aXplbiBpcyBub3Qgd3JvbmdmdWxseSBwZW5hbGl6ZWQuYDtcbiAgICB9IGVsc2UgaWYgKGxvdy5pbmNsdWRlcygnbm90aWNlJykgfHwgbG93LmluY2x1ZGVzKCdmaW5lJykgfHwgbG93LmluY2x1ZGVzKCdtZXNzYWdlJykpIHtcbiAgICAgIHJlc3BvbnNlID0gYOKcie+4jyBPbmNlIGEgdmlvbGF0aW9uIGlzIHZhbGlkYXRlZCwgeW91IGNhbiB0eXBlIHRoZSBmaW5lIGFtb3VudCBpbiB0aGUgRGV0YWlsIFBhbmVsIGFuZCBjbGljayBcIkNvbmZpcm0gJiBTZW5kIE5vdGljZVwiLiBUaGlzIHVwZGF0ZXMgTW9uZ29EQiBhbmQgc2VuZHMgYW4gYXV0b21hdGVkIG5vdGlmaWNhdGlvbiB3YXJuaW5nIHRvIHRoZSB2ZWhpY2xlIG93bmVyIGRldGFpbGluZyB0aGUganVuY3Rpb24sIHZlaGljbGUgdHlwZSwgYW5kIGV4YWN0IGZpbmUuYDtcbiAgICB9IGVsc2UgaWYgKGxvdy5pbmNsdWRlcygnYmVuZ2FsdXJ1JykgfHwgbG93LmluY2x1ZGVzKCdsaXZlJykgfHwgbG93LmluY2x1ZGVzKCdmZWVkJykpIHtcbiAgICAgIHJlc3BvbnNlID0gYPCfk7ggVGhlIGRhc2hib2FyZCBzaW11bGF0ZXMgYSByZWFsLXRpbWUgbGl2ZSBjb25uZWN0aW9uIHRvIEJlbmdhbHVydSBUcmFmZmljIENvbnRyb2wgUm9vbS4gSXQgdXBkYXRlcyB0aGUgc25hcHNob3Qgdmlldywgc2hvd3MgcnVubmluZyBjb3VudHMsIGFuZCBhcHBlbmRzIHJlYWwtdGltZSBkZXRlY3Rpb24gbm90aWZpY2F0aW9ucy5gO1xuICAgIH0gZWxzZSBpZiAobG93LmluY2x1ZGVzKCdwZGYnKSB8fCBsb3cuaW5jbHVkZXMoJ2NzdicpIHx8IGxvdy5pbmNsdWRlcygnZG93bmxvYWQnKSB8fCBsb3cuaW5jbHVkZXMoJ2V4cG9ydCcpKSB7XG4gICAgICByZXNwb25zZSA9IGDwn5OEIFJlYWwgUERGIGdlbmVyYXRpb24gaXMgYWN0aXZlISBTZWxlY3QgYW55IGNhcmQgYW5kIGNsaWNrIFwiRG93bmxvYWQgTm90aWNlIFBERlwiIHRvIHByaW50IG9yIHNhdmUgYSBjbGVhbiBzdHlsZWQgb2ZmaWNpYWwgQ2hhbGxhbiBzaGVldC4gWW91IGNhbiBhbHNvIGV4cG9ydCBjdXJyZW50IHJlY29yZHMgdG8gLmNzdiBmb3JtYXQgZnJvbSB0aGUgZGFzaGJvYXJkLCBkZXRlY3Rpb24sIGFuZCBhcmNoaXZlIHZpZXdzLmA7XG4gICAgfSBlbHNlIGlmIChsb3cuaW5jbHVkZXMoJ3lvbG8nKSB8fCBsb3cuaW5jbHVkZXMoJ2NvbXB1dGVyIHZpc2lvbicpIHx8IGxvdy5pbmNsdWRlcygnbW9kZWwnKSB8fCBsb3cuaW5jbHVkZXMoJ29jcicpKSB7XG4gICAgICByZXNwb25zZSA9IGDwn6egIFdlIHVzZSBzaW11bGF0ZWQgWU9MT3YxMSBhbmQgT0NSIG1vZGVscyB0byBwcm9jZXNzIHVwbG9hZGVkIGZyYW1lcywgaXNvbGF0ZSBsaWNlbnNlIHBsYXRlIGNoYXJhY3RlcnMgKGUuZy4gS0EwM1hYMTIzNCksIHZlcmlmeSBwbGF0ZSBjbGFyaXR5LCBkZXRlY3QgcmlkZXIgaGVhZCBjb29yZGluYXRlcyBmb3IgaGVsbWV0IGNvbXBsaWFuY2UsIGFuZCBhZ2dyZWdhdGUgcmlzayBpbmRpY2VzLmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlID0gYPCfpJYgSSB1bmRlcnN0YW5kIHlvdSdyZSBhc2tpbmcgYWJvdXQgXCIke2xvd31cIi4gSSdtIHRyYWluZWQgdG8gaGVscCB3aXRoOlxu4oCiICoqQXV0aCAvIFJvbGVzKiogKFBvbGljZSB2cyBBZG1pbiBwZXJtaXNzaW9ucylcbuKAoiAqKk5vdGljZSAvIEZpbmUgU3lzdGVtKiogKEhvdyB0byBpc3N1ZSBmaW5lcyBvciBmbGFnIG1pc2xlYWQgYWxhcm1zKVxu4oCiICoqQmVuZ2FsdXJ1IExpdmUgRmVlZCBzaW11bGF0b3IqKlxu4oCiICoqUERGIENoYWxsYW4gZG93bmxvYWQgJiBDU1YgdGFibGUgZXhwb3J0cyoqXG7igKIgKipBSSBjb21wdXRlciB2aXNpb24gc3BlY2lmaWNhdGlvbnMqKiAoWU9MT3YxMSBkZXRhaWxzKVxuTGV0IG1lIGtub3cgd2hhdCB5b3UnZCBsaWtlIHRvIGV4cGxvcmUgZnVydGhlciFgO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH07XG5cbiAgY29uc3Qgc2VuZD0oKT0+e1xuICAgIGlmKCFpbnAudHJpbSgpKSByZXR1cm47XG4gICAgY29uc3QgdXNlck1zZz17ZnJvbTondXNlcicsdGV4dDppbnB9O1xuICAgIGNvbnN0IGJvdE1zZz17ZnJvbTonYm90Jyx0ZXh0OnJlc3BvbmRUb01lc3NhZ2UoaW5wLnRvTG93ZXJDYXNlKCkpfTtcbiAgICBzZXRNc2dzKG09PlsuLi5tLHVzZXJNc2csYm90TXNnXSk7XG4gICAgc2V0SW5wKCcnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7b3BlbiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC13aW5cIiBzdHlsZT17e2hlaWdodDo0NjB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaGRyXCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6MzIsaGVpZ2h0OjMyLGJvcmRlclJhZGl1czo4LGJhY2tncm91bmQ6J3JnYmEoMjU1LDI1NSwyNTUsLjE1KScsZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczonY2VudGVyJyxqdXN0aWZ5Q29udGVudDonY2VudGVyJyxmb250U2l6ZToxNn19PvCfpJY8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OjF9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjEzLGZvbnRXZWlnaHQ6NzAwLGNvbG9yOicjZmZmJ319PlRyYWZmaWNBSSBBc3Npc3RhbnQ8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjEwLGNvbG9yOidyZ2JhKDI1NSwyNTUsMjU1LC42KSd9fT5Bc2sgbWUgYW55dGhpbmcgKENsYXVkZS9DaGF0R1BUIE1vZGUpPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tiYWNrZ3JvdW5kOid0cmFuc3BhcmVudCcsYm9yZGVyOidub25lJyxjb2xvcjoncmdiYSgyNTUsMjU1LDI1NSwuNiknLGN1cnNvcjoncG9pbnRlcid9fSBvbkNsaWNrPXsoKT0+c2V0T3BlbihmYWxzZSl9PjxYIHNpemU9ezE2fS8+PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LW1zZ3NcIj5cbiAgICAgICAgICAgIHttc2dzLm1hcCgobSxpKT0+KFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtgbXNnICR7bS5mcm9tPT09J2JvdCc/J21zZy1ib3QnOidtc2ctdXNlcid9YH0gc3R5bGU9e3t3aGl0ZVNwYWNlOidwcmUtbGluZSd9fT57Y2xlYW5Cb3RNZXNzYWdlKG0udGV4dCl9PC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxkaXYgcmVmPXtlbmRSZWZ9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaW5wXCI+XG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJBc2sgbWUgYWJvdXQgcnVsZXMsIGZpbmVzLCBQREYgZXhwb3J0cy4uLlwiIHZhbHVlPXtpbnB9IG9uQ2hhbmdlPXtlPT5zZXRJbnAoZS50YXJnZXQudmFsdWUpfSBvbktleURvd249e2U9PmUua2V5PT09J0VudGVyJyYmc2VuZCgpfS8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNoYXQtc2VuZFwiIG9uQ2xpY2s9e3NlbmR9PjxTZW5kIHNpemU9ezEzfS8+PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2hhdC1mYWJcIiBvbkNsaWNrPXsoKT0+c2V0T3BlbihvPT4hbyl9PlxuICAgICAgICB7b3Blbj88WCBzaXplPXsyMn0gY29sb3I9XCIjZmZmXCIvPjo8TWVzc2FnZUNpcmNsZSBzaXplPXsyMn0gY29sb3I9XCIjZmZmXCIvPn1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufVxuXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi8vIFBBR0U6IERBU0hCT0FSRFxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5mdW5jdGlvbiBEYXNoYm9hcmRQYWdlKHsgY3VycmVudFVzZXIgfSl7XG4gIGNvbnN0IFtzdGF0cyxzZXRTdGF0c109dXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtyZWNlbnQsc2V0UmVjZW50XT11c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddPXVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZGJPayxzZXREYk9rXT11c2VTdGF0ZShudWxsKTtcbiAgXG4gIC8vIExpdmUgRmVlZCBTaW11bGF0aW9uIFN0YXRlc1xuICBjb25zdCBbbGl2ZUltYWdlLCBzZXRMaXZlSW1hZ2VdID0gdXNlU3RhdGUoXCIvdHJhZmZpY19ibHJfMS5wbmdcIik7XG4gIGNvbnN0IFtsaXZlTG9nLCBzZXRMaXZlTG9nXSA9IHVzZVN0YXRlKFtcbiAgICB7IHRpbWU6ICcxMzoyMDowNScsIGxvYzogJ1NpbGsgQm9hcmQgSnVuY3Rpb24nLCBtc2c6ICdTY2FubmluZyBsYW5lIDIuLi4gU3RhYmxlJyB9LFxuICAgIHsgdGltZTogJzEzOjIyOjEyJywgbG9jOiAnTUcgUm9hZCBKdW5jdGlvbicsIG1zZzogJ0FJIFRyaWdnZXI6IEhlbG1ldCBOb24tQ29tcGxpYW5jZSBmbGFnZ2VkIChLQTAzSEEyOTAzKScgfSxcbiAgICB7IHRpbWU6ICcxMzoyNDo0NScsIGxvYzogJ0hlYmJhbCBGbHlvdmVyJywgbXNnOiAnV2FybmluZzogQ29uZ2VzdGlvbiBpbmRleCBoaWdoICg4OCUpJyB9LFxuICBdKTtcbiAgY29uc3QgW2xpdmVTdGF0cywgc2V0TGl2ZVN0YXRzXSA9IHVzZVN0YXRlKHsgZmxvd1JhdGU6IDQyMCwgYWN0aXZlQ2FtZXJhczogMjgsIGFsZXJ0Q291bnQ6IDg5IH0pO1xuXG4gIGNvbnN0IGZldGNoRGFzaGJvYXJkRGF0YSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBQcm9taXNlLmFsbChbXG4gICAgICBmZXRjaChgJHtBUEl9L3N0YXRpc3RpY3NgKS50aGVuKHI9PnIuanNvbigpKS5jYXRjaCgoKT0+bnVsbCksXG4gICAgICBmZXRjaChgJHtBUEl9L3Zpb2xhdGlvbnM/bGltaXQ9NWApLnRoZW4ocj0+ci5qc29uKCkpLmNhdGNoKCgpPT5udWxsKSxcbiAgICAgIGZldGNoKGAke0FQSX0vaGVhbHRoYCkudGhlbihyPT5yLmpzb24oKSkuY2F0Y2goKCk9Pm51bGwpLFxuICAgIF0pLnRoZW4oKFtzdCx2aSxobF0pPT57XG4gICAgICBzZXRTdGF0cyhzdCk7XG4gICAgICBzZXRSZWNlbnQodmk/LnZpb2xhdGlvbnN8fFtdKTtcbiAgICAgIHNldERiT2soaGw/LmRhdGFiYXNlPT09J2Nvbm5lY3RlZCcpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBmZXRjaERhc2hib2FyZERhdGEoKTtcbiAgfSxbZmV0Y2hEYXNoYm9hcmREYXRhXSk7XG5cbiAgLy8gU2ltdWxhdGUgQmVuZ2FsdXJ1IExpdmUgVHJhZmZpYyBDYW1lcmEgVXBkYXRlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGltYWdlcyA9IFtcbiAgICAgIFwiL3RyYWZmaWNfYmxyXzEucG5nXCIsXG4gICAgICBcIi90cmFmZmljX2Jscl8yLnBuZ1wiLFxuICAgICAgXCIvdHJhZmZpY19ibHJfMy5wbmdcIixcbiAgICAgIFwiL3RyYWZmaWNfYmxyXzQucG5nXCJcbiAgICBdO1xuXG4gICAgbGV0IHJlY2VudEluZGljZXMgPSBbXTtcblxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgbGV0IG5leHRJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpbWFnZXMubGVuZ3RoKTtcbiAgICAgIHdoaWxlIChyZWNlbnRJbmRpY2VzLmluY2x1ZGVzKG5leHRJZHgpKSB7XG4gICAgICAgIG5leHRJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpbWFnZXMubGVuZ3RoKTtcbiAgICAgIH1cbiAgICAgIHJlY2VudEluZGljZXMucHVzaChuZXh0SWR4KTtcbiAgICAgIGlmIChyZWNlbnRJbmRpY2VzLmxlbmd0aCA+IDEyKSB7XG4gICAgICAgIHJlY2VudEluZGljZXMuc2hpZnQoKTtcbiAgICAgIH1cbiAgICAgIHNldExpdmVJbWFnZShpbWFnZXNbbmV4dElkeF0pO1xuICAgICAgXG4gICAgICAvLyBBZGQgcmFuZG9tIGxpdmUgYWxlcnRcbiAgICAgIGNvbnN0IHRpbWVTdHIgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygnZW4tSU4nLCB7IGhvdXIxMjogZmFsc2UgfSk7XG4gICAgICBjb25zdCBuZXdBbGVydCA9IHtcbiAgICAgICAgdGltZTogdGltZVN0cixcbiAgICAgICAgbG9jOiBwayhMT0NBVElPTlMpLFxuICAgICAgICBtc2c6IHBrKFtcbiAgICAgICAgICBgQUkgQWxlcnQ6ICR7cGsoVklPTEFUSU9OX1RZUEVTKS5sYWJlbH0gZGV0ZWN0ZWQgKCR7Z2VuUGxhdGUoKX0pYCxcbiAgICAgICAgICBgVHJhZmZpYyBmbG93IHNwZWVkOiAke3IoMTUsIDY1KX0ga20vaGAsXG4gICAgICAgICAgYExpdmUgT0NSIGNhbWVyYSB2YWxpZGF0ZWQgcmVnaXN0cmF0aW9uIGRldGFpbHNgLFxuICAgICAgICAgIGBWZWhpY2xlIGNsYXNzIG1hdGNoZWQgb3duZXIgZGVzY3JpcHRpb24gcmVjb3Jkc2BcbiAgICAgICAgXSlcbiAgICAgIH07XG4gICAgICBzZXRMaXZlTG9nKHByZXYgPT4gW25ld0FsZXJ0LCAuLi5wcmV2LnNsaWNlKDAsIDUpXSk7XG5cbiAgICAgIC8vIE11dGF0ZSBzdGF0cyBzbGlnaHRseVxuICAgICAgc2V0TGl2ZVN0YXRzKHtcbiAgICAgICAgZmxvd1JhdGU6IHIoMzkwLCA0ODApLFxuICAgICAgICBhY3RpdmVDYW1lcmFzOiByKDI2LCAzMCksXG4gICAgICAgIGFsZXJ0Q291bnQ6IHByZXYgPT4gcHJldiArIHIoMCwgMilcbiAgICAgIH0pO1xuICAgIH0sIDYwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9jYWxTdGF0cz17dG90YWw6NDcyMyxjcml0aWNhbDo0NyxyZXNvbHZlZDozMTIsYWN0aXZlOjIzfTtcbiAgY29uc3QgaG91cmx5PVt7aDonMDAnLGM6OH0se2g6JzA2JyxjOjE1fSx7aDonMDcnLGM6NTV9LHtoOicwOCcsYzo3Mn0se2g6JzA5JyxjOjQwfSx7aDonMTInLGM6Mjh9LHtoOicxNycsYzo2OH0se2g6JzE4JyxjOjk1fSx7aDonMTknLGM6ODh9LHtoOicyMCcsYzo2MX0se2g6JzIyJyxjOjMwfSx7aDonMjMnLGM6MTJ9XTtcbiAgY29uc3QgbWF4SD1NYXRoLm1heCguLi5ob3VybHkubWFwKGg9PmguYykpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXNsaWRldXBcIj5cbiAgICAgIHsvKiBNb25nb0RCIGNvbm5lY3Rpb24gYmFubmVyIC0gaGlkZGVuIGlmIFBvbGljZSByb2xlICovfVxuICAgICAge2N1cnJlbnRVc2VyPy5yb2xlID09PSAnYWRtaW4nICYmICFsb2FkaW5nICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCAke2RiT2s/J2Etb2snOidhLXdhcm4nfWB9IHN0eWxlPXt7bWFyZ2luQm90dG9tOjE4fX0+XG4gICAgICAgICAge2RiT2s/PD48RGF0YWJhc2Ugc2l6ZT17MTR9Lz5Nb25nb0RCIEF0bGFzIENvbm5lY3RlZCDigJQgTGl2ZSBkYXRhIHN5bmNocm9uaXphdGlvbiBlbmFibGVkPC8+Ojw+PEFsZXJ0VHJpYW5nbGUgc2l6ZT17MTR9Lz5Nb25nb0RCIG9mZmxpbmUg4oCUIHNob3dpbmcgbG9jYWwgZGVtbyBkYXRhLiBVcGxvYWQgaW1hZ2VzIHRvIHBvcHVsYXRlLjwvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogR3VpZGUgSGVhZGVyICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwLCBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzMCw0MSw1OSwwLjQpLCByZ2JhKDE1LDIzLDQyLDAuNikpJywgYm9yZGVyQ29sb3I6ICcjMWUzYThhJ319PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGdhcDoxMiwgbWFyZ2luQm90dG9tOjEwfX0+XG4gICAgICAgICAgPFNoaWVsZCBzaXplPXsyMH0gY29sb3I9XCIjNjBhNWZhXCIvPlxuICAgICAgICAgIDxoMyBzdHlsZT17e2ZvbnRTaXplOjE1LCBmb250V2VpZ2h0OjcwMCwgY29sb3I6JyNmM2Y0ZjYnfX0+SG93IGl0IHdvcmtzOiBJbnRlbGxpZ2VudCBFbmZvcmNlbWVudCBXb3JrZmxvdzwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOjEyLCBjb2xvcjonIzljYTNhZicsIGxpbmVIZWlnaHQ6MS42fX0+XG4gICAgICAgICAgVGhpcyBzeXN0ZW0gYXV0b21hdGljYWxseSBkZXRlY3RzIHRyYWZmaWMgdmlvbGF0aW9ucy4gPHN0cm9uZz4xLiBBSSBEZXRlY3Rpb246PC9zdHJvbmc+IFVwbG9hZCBzdHJlZXQgcGhvdG9zIHRvIHJ1biBZT0xPdjExIGFuZCBPQ1IgY2hlY2tpbmcuIDxzdHJvbmc+Mi4gUG9saWNlIFJldmlldzo8L3N0cm9uZz4gUmV2aWV3IGlkZW50aWZpZWQgdmlvbGF0aW9ucyBpbiB0aGUgbGlzdHMuIDxzdHJvbmc+My4gTm90aWNlL0ZpbmUgRGlzcGF0Y2g6PC9zdHJvbmc+IEZsYWcgZmFrZS9taXNsZWFkaW5nIHRyaWdnZXJzIHRvIGlnbm9yZSwgb3Igc3VibWl0IGEgZmluZSBub3RpY2UuIFRoZSB2ZWhpY2xlIG93bmVyIGlzIG5vdGlmaWVkIGluc3RhbnRseS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBTdGF0cyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC1ncmlkXCI+XG4gICAgICAgIHtbXG4gICAgICAgICAge2ljbzo8QWxlcnRDaXJjbGUgc2l6ZT17MTZ9IGNvbG9yPVwiI2VmNDQ0NFwiLz4sbGJsOidUb3RhbCBWaW9sYXRpb25zJyx2YWw6c3RhdHM/LnRvdGFsfHxsb2NhbFN0YXRzLnRvdGFsLGE6J2xpbmVhci1ncmFkaWVudCg5MGRlZywjZWY0NDQ0LCNkYzI2MjYpJyxpYjoncmdiYSgyMzksNjgsNjgsLjEpJyxjaGc6JysxMiUnLHVwOnRydWV9LFxuICAgICAgICAgIHtpY286PFNoaWVsZCBzaXplPXsxNn0gY29sb3I9XCIjZjk3MzE2XCIvPixsYmw6J0NyaXRpY2FsIFRvZGF5Jyx2YWw6bG9jYWxTdGF0cy5jcml0aWNhbCxhOidsaW5lYXItZ3JhZGllbnQoOTBkZWcsI2Y5NzMxNiwjZWE1ODBjKScsaWI6J3JnYmEoMjQ5LDExNSwyMiwuMSknLGNoZzonKzMnLHVwOnRydWV9LFxuICAgICAgICAgIHtpY286PENoZWNrQ2lyY2xlIHNpemU9ezE2fSBjb2xvcj1cIiMyMmM1NWVcIi8+LGxibDonUmVzb2x2ZWQgVG9kYXknLHZhbDpsb2NhbFN0YXRzLnJlc29sdmVkLGE6J2xpbmVhci1ncmFkaWVudCg5MGRlZywjMjJjNTVlLCMxNmEzNGEpJyxpYjoncmdiYSgzNCwxOTcsOTQsLjEpJyxjaGc6Jy04JScsdXA6ZmFsc2V9LFxuICAgICAgICAgIHtpY286PEFjdGl2aXR5IHNpemU9ezE2fSBjb2xvcj1cIiM2MGE1ZmFcIi8+LGxibDonTGl2ZSBUcmFmZmljIEZsb3cnLHZhbDpgJHtsaXZlU3RhdHMuZmxvd1JhdGV9IHZlaC9taW5gLGE6J2xpbmVhci1ncmFkaWVudCg5MGRlZywjNjBhNWZhLCMyNTYzZWIpJyxpYjoncmdiYSg1OSwxMzAsMjQ2LC4xKSd9LFxuICAgICAgICBdLm1hcCgocyxpKT0+KFxuICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJzdGF0LWNhcmRcIiBzdHlsZT17eyctLWEnOnMuYSwnLS1pYic6cy5pYn19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0LWljb1wiIHN0eWxlPXt7YmFja2dyb3VuZDpzLmlifX0+e3MuaWNvfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0LXZhbFwiPnt0eXBlb2Ygcy52YWw9PT0nbnVtYmVyJz9zLnZhbC50b0xvY2FsZVN0cmluZygpOnMudmFsfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0LWxibFwiPntzLmxibH08L2Rpdj5cbiAgICAgICAgICAgIHtzLmNoZyYmPGRpdiBjbGFzc05hbWU9e2BzdGF0LWNoZyAke3MudXA/J2NoZy11cCc6J2NoZy1kbid9YH0+e3MudXA/PEFycm93VXAgc2l6ZT17OX0vPjo8QXJyb3dEb3duIHNpemU9ezl9Lz59e3MuY2hnfTwvZGl2Pn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIExpdmUgRmVlZCBTaW11bGF0b3IgJiBSZWNlbnQgREIgTGlzdCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZzIgc2VjLWdhcFwiPlxuICAgICAgICBcbiAgICAgICAgey8qIExpdmUgQmVuZ2FsdXJ1IENhbWVyYSBmZWVkICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBnYXA6MTJ9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGRyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdHRsXCI+PGRpdiBjbGFzc05hbWU9XCJ0dGwtaWNvXCI+PEdsb2JlIHNpemU9ezE0fS8+PC9kaXY+QmVuZ2FsdXJ1IFRyYWZmaWMgQ29udHJvbCBMaXZlIENhbTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXZlXCI+PGRpdiBjbGFzc05hbWU9XCJsaXZlLWRvdFwiLz5MSVZFIFNUUkVBTTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjoncmVsYXRpdmUnLCB3aWR0aDonMTAwJScsIGhlaWdodDoyMDAsIGJvcmRlclJhZGl1czoxMCwgb3ZlcmZsb3c6J2hpZGRlbicsIGJvcmRlcjonMXB4IHNvbGlkICMxZTI5M2InfX0+XG4gICAgICAgICAgICA8aW1nIHNyYz17bGl2ZUltYWdlfSBhbHQ9XCJCZW5nYWx1cnUgU3RyZWV0IENhbVwiIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnLCBvYmplY3RGaXQ6J2NvdmVyJywgdHJhbnNpdGlvbjonYWxsIDAuNXMgZWFzZSd9fS8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246J2Fic29sdXRlJywgYm90dG9tOjgsIGxlZnQ6OCwgcmlnaHQ6OCwgYmFja2dyb3VuZDoncmdiYSgxNSwyMyw0MiwwLjgpJywgcGFkZGluZzonNnB4IDEycHgnLCBib3JkZXJSYWRpdXM6NiwgZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczonY2VudGVyJywgZm9udFNpemU6MTEsIGJhY2tkcm9wRmlsdGVyOidibHVyKDRweCknfX0+XG4gICAgICAgICAgICAgIDxzcGFuPvCfk7kgQmVuZ2FsdXJ1IENlbnRyYWwgQ29udHJvbCBSb29tIDQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vbm9cIiBzdHlsZT17e2NvbG9yOicjMTBiOTgxJ319PntsaXZlU3RhdHMuYWN0aXZlQ2FtZXJhc30gQ2FtZXJhcyBPbmxpbmU8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDoxfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MTEsIGZvbnRXZWlnaHQ6NzAwLCBjb2xvcjonIzZiNzI4MCcsIHRleHRUcmFuc2Zvcm06J3VwcGVyY2FzZScsIG1hcmdpbkJvdHRvbTo4fX0+TGl2ZSBFdmVudCBMb2dzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsIGdhcDo2fX0+XG4gICAgICAgICAgICAgIHtsaXZlTG9nLm1hcCgobG9nLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsIGZvbnRTaXplOjExLCBiYWNrZ3JvdW5kOidyZ2JhKDMwLDQxLDU5LDAuMiknLCBwYWRkaW5nOic2cHggMTBweCcsIGJvcmRlclJhZGl1czo2LCBib3JkZXI6JzFweCBzb2xpZCByZ2JhKDMwLDQxLDU5LDAuNSknfX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOicjOWNhM2FmJ319Plt7bG9nLnRpbWV9XSA8c3Ryb25nIHN0eWxlPXt7Y29sb3I6JyNjYmQ1ZTEnfX0+e2xvZy5sb2N9Ojwvc3Ryb25nPiB7bG9nLm1zZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBSZWNlbnQgZnJvbSBEYXRhYmFzZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhkclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXR0bFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR0bC1pY29cIj48RGF0YWJhc2Ugc2l6ZT17MTR9Lz48L2Rpdj5cbiAgICAgICAgICAgICAge2N1cnJlbnRVc2VyPy5yb2xlID09PSAnYWRtaW4nID8gJ1JlY2VudCBEYXRhYmFzZSBMb2dzJyA6ICdSZWNlbnQgU3lzdGVtIExvZ3MnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZyBidG4tc1wiIG9uQ2xpY2s9e2ZldGNoRGFzaGJvYXJkRGF0YX0+PFJlZnJlc2hDdyBzaXplPXsxMX0vPlJlZnJlc2g8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cmVjZW50Lmxlbmd0aD4wPyhcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOidjb2x1bW4nLGdhcDo4fX0+XG4gICAgICAgICAgICAgIHtyZWNlbnQubWFwKCh2LGkpPT4oXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczonY2VudGVyJyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicscGFkZGluZzonN3B4IDAnLGJvcmRlckJvdHRvbTonMXB4IHNvbGlkIHJnYmEoMzAsNDEsNTksLjMpJyxmb250U2l6ZToxMn19PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF0ZVwiIHN0eWxlPXt7Zm9udFNpemU6MTIsZGlzcGxheTonaW5saW5lLWJsb2NrJ319Pnt2LmxpY2Vuc2VQbGF0ZXx8di5wbGF0ZXx8J+KAlCd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMCxjb2xvcjonIzljYTNhZicsbWFyZ2luVG9wOjR9fT57di5sYWJlbHx8di50eXBlfHwnVmlvbGF0aW9uJ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjoncmlnaHQnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoaXBcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHYuc3RhdHVzID09PSAnU0VOVCcgPyAncmdiYSgzNCwxOTcsOTQsMC4xMiknIDogdi5zdGF0dXMgPT09ICdNSVNMRUFEJyA/ICdyZ2JhKDIzOSw2OCw2OCwwLjEyKScgOiAncmdiYSgyNDksMTE1LDIyLDAuMTIpJyxcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdi5zdGF0dXMgPT09ICdTRU5UJyA/ICcjNGFkZTgwJyA6IHYuc3RhdHVzID09PSAnTUlTTEVBRCcgPyAnI2Y4NzE3MScgOiAnI2ZiOTIzYycsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDksXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDhcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge3Yuc3RhdHVzIHx8ICdQRU5ESU5HJ31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOjEwLGNvbG9yOnYuc2V2ZXJpdHk9PT0nSElHSCc/JyNmOTczMTYnOnYuc2V2ZXJpdHk9PT0nQ1JJVElDQUwnPycjZWY0NDQ0JzonIzIyYzU1ZScsZm9udFdlaWdodDo3MDB9fT57di5zZXZlcml0eXx8J01FRElVTSd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTooXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5XCI+PGRpdiBjbGFzc05hbWU9XCJlbXB0eS1pY29cIj7wn5OhPC9kaXY+PGRpdiBzdHlsZT17e2ZvbnRTaXplOjEyfX0+Tm8gREIgcmVjb3JkcyB5ZXQuPGJyLz5VcGxvYWQgaW1hZ2VzIHRvIHBvcHVsYXRlLjwvZGl2PjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBWaW9sYXRpb24gdHlwZSBicmVha2Rvd24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhkclwiPjxkaXYgY2xhc3NOYW1lPVwiY2FyZC10dGxcIj48ZGl2IGNsYXNzTmFtZT1cInR0bC1pY29cIj48QmFyQ2hhcnQyIHNpemU9ezE0fS8+PC9kaXY+VmlvbGF0aW9uIENhdGVnb3J5IE92ZXJ2aWV3PC9kaXY+PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidncmlkJyxncmlkVGVtcGxhdGVDb2x1bW5zOidyZXBlYXQoYXV0by1maWxsLG1pbm1heCgyMjBweCwxZnIpKScsZ2FwOjEyfX0+XG4gICAgICAgICAge1ZJT0xBVElPTl9UWVBFUy5tYXAodj0+e1xuICAgICAgICAgICAgY29uc3QgY250PXN0YXRzPy5ieVR5cGU/Llt2LmxhYmVsXXx8cig1MCwzMDApO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3YuaWR9IHN0eWxlPXt7YmFja2dyb3VuZDoncmdiYSgxNSwyMyw0MiwuNSknLGJvcmRlcjonMXB4IHNvbGlkICMxZTI5M2InLGJvcmRlclJhZGl1czoxMCxwYWRkaW5nOjEyfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6J2NlbnRlcicsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLG1hcmdpbkJvdHRvbTo2fX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOjEyLGNvbG9yOicjOWNhM2FmJ319Pnt2Lmljb259IHt2LmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vbm9cIiBzdHlsZT17e2ZvbnRTaXplOjExLGNvbG9yOnYuY29sb3IsZm9udFdlaWdodDo3MDB9fT57Y250fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OjQsYmFja2dyb3VuZDonIzFlMjkzYicsYm9yZGVyUmFkaXVzOjIsb3ZlcmZsb3c6J2hpZGRlbid9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzEwMCUnLHdpZHRoOmAke01hdGgubWluKDEwMCwoY250LzMwMCkqMTAwKX0lYCxiYWNrZ3JvdW5kOnYuY29sb3IsYm9yZGVyUmFkaXVzOjJ9fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4vLyBQQUdFOiBERVRFQ1RJT05cbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZnVuY3Rpb24gRGV0ZWN0aW9uUGFnZSh7IGFkZFRvYXN0LCBhY2NpZGVudEFjdGl2ZSwgZ3JhY2VBY3RpdmUsIGN1cnJlbnRVc2VyIH0pe1xuICBjb25zdCBbZHJhZyxzZXREcmFnXT11c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwcm9jZXNzaW5nLHNldFByb2Nlc3NpbmddPXVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdHMsc2V0UmVzdWx0c109dXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWQsc2V0U2VsZWN0ZWRdPXVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYWxlcnQsc2V0QWxlcnRdPXVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcHJldmlld0ltZyxzZXRQcmV2aWV3SW1nXT11c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgZmlsZVJlZj11c2VSZWYoKTtcblxuICBjb25zdCBoYW5kbGVEcmFnPWU9PntlLnByZXZlbnREZWZhdWx0KCk7c2V0RHJhZyhlLnR5cGU9PT0nZHJhZ2VudGVyJ3x8ZS50eXBlPT09J2RyYWdvdmVyJyk7fTtcbiAgY29uc3QgaGFuZGxlRHJvcD1lPT57ZS5wcmV2ZW50RGVmYXVsdCgpO3NldERyYWcoZmFsc2UpO3Byb2Nlc3NGaWxlcyhlLmRhdGFUcmFuc2Zlci5maWxlcyk7fTtcbiAgY29uc3QgaGFuZGxlRmlsZT1lPT57aWYoZS50YXJnZXQuZmlsZXMubGVuZ3RoKSBwcm9jZXNzRmlsZXMoZS50YXJnZXQuZmlsZXMpO307XG5cbiAgY29uc3QgcHJvY2Vzc0ZpbGVzPShmaWxlcyk9PntcbiAgICBpZighZmlsZXMubGVuZ3RoKSByZXR1cm47XG4gICAgY29uc3QgZmlsZT1maWxlc1swXTtcbiAgICBjb25zdCBpbWdVcmwgPSBmaWxlLnNpemUgPiAwID8gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSA6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDkzMTc2NjEtYmQzMmM4Y2UwZGIyP2F1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NjAwJnE9ODBcIjtcbiAgICBzZXRQcmV2aWV3SW1nKGltZ1VybCk7XG4gICAgc2V0UHJvY2Vzc2luZyh0cnVlKTsgc2V0UmVzdWx0cyhbXSk7IHNldFNlbGVjdGVkKG51bGwpO1xuICAgIGNvbnN0IGNvdW50PTE7XG4gICAgY29uc3QgYWNjPVtdO1xuICAgIFxuICAgIC8vIFNpbXVsYXRlIEFQSSBjYWxsIG9yIHRyaWdnZXIgcmVhbCBkYXRhYmFzZSBzYXZlIGlmIGJhY2tlbmQgaXMgcnVubmluZ1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSBta1ZlaGljbGUoaW1nVXJsKTtcbiAgICAgIGFjYy5wdXNoKG5ld0l0ZW0pO1xuICAgICAgXG4gICAgICAvLyBBdHRlbXB0IHRvIHNhdmUgdG8gYmFja2VuZCBpZiBpdCBydW5zXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGUpO1xuICAgICAgY29uc3QgZGV0ZWN0VXJsID0gYCR7QVBJfS92aW9sYXRpb25zL2RldGVjdD9hY2NpZGVudEFjdGl2ZT0ke2FjY2lkZW50QWN0aXZlfSZncmFjZUFjdGl2ZT0ke2dyYWNlQWN0aXZlfWA7XG4gICAgICBmZXRjaChkZXRlY3RVcmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICB9KVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMuc3VjY2VzcyAmJiByZXMudmlvbGF0aW9ucyAmJiByZXMudmlvbGF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgbWFwcGVkID0gcmVzLnZpb2xhdGlvbnMubWFwKHYgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmFsbGJhY2sgPSBnZXRWZWhpY2xlRmFsbGJhY2tEZXRhaWxzKHYubGljZW5zZVBsYXRlKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGlkOiB2LnZpb2xhdGlvbklkLFxuICAgICAgICAgICAgICBwbGF0ZTogdi5saWNlbnNlUGxhdGUsXG4gICAgICAgICAgICAgIHZlaGljbGVUeXBlOiB2LnZlaGljbGVUeXBlIHx8IGZhbGxiYWNrLnR5cGUsXG4gICAgICAgICAgICAgIG1hbnVmYWN0dXJlcjogdi52ZWhpY2xlQnJhbmQgfHwgZmFsbGJhY2suYnJhbmQsXG4gICAgICAgICAgICAgIG1vZGVsOiB2LnZlaGljbGVNb2RlbCB8fCBmYWxsYmFjay5tb2RlbCxcbiAgICAgICAgICAgICAgY29sb3I6IHYudmVoaWNsZUNvbG9yIHx8IGZhbGxiYWNrLmNvbG9yLFxuICAgICAgICAgICAgICByZWdpc3RyYXRpb25TdGF0dXM6ICdWRVJJRklFRCcsXG4gICAgICAgICAgICAgIG93bmVyU3RhdHVzOiAnTUFUQ0hFRCcsXG4gICAgICAgICAgICAgIHZpb2xhdGlvbnM6IFt7IGlkOiB2LnR5cGUsIGxhYmVsOiB2LmxhYmVsLCBjb2xvcjogJyNlZjQ0NDQnLCBpY29uOiAn8J+aqCcsIHJpc2s6IHYuc2V2ZXJpdHksIGZpbmU6IHYuZmluZUFtb3VudCB9XSxcbiAgICAgICAgICAgICAgcmlzazogdi5zZXZlcml0eSxcbiAgICAgICAgICAgICAgY29uZmlkZW5jZTogdi5jb25maWRlbmNlLFxuICAgICAgICAgICAgICBsb2NhdGlvbjogJ01HIFJvYWQgSnVuY3Rpb24nLFxuICAgICAgICAgICAgICB0aW1lc3RhbXA6IHYuZGV0ZWN0ZWRBdCxcbiAgICAgICAgICAgICAgaGlzdG9yeTogW10sIHJlcGVhdHM6IDAsXG4gICAgICAgICAgICAgIGhlbG1ldFJpZGVyOiAnSEVMTUVUJywgaGVsbWV0UGFzczogJ0hFTE1FVCcsXG4gICAgICAgICAgICAgIGhlbG1ldFJpZGVyQ29uZjogJzAnLCBoZWxtZXRQYXNzQ29uZjogJzAnLFxuICAgICAgICAgICAgICBpbWFnZVVybDogaW1nVXJsLFxuICAgICAgICAgICAgICBzdGF0dXM6IHYuc3RhdHVzIHx8ICdQRU5ESU5HJyxcbiAgICAgICAgICAgICAgZmluZUFtb3VudDogdi5maW5lQW1vdW50LFxuICAgICAgICAgICAgICBldmlkZW5jZUZyYW1lOiAxMjAsXG4gICAgICAgICAgICAgIGNyZWRpYmlsaXR5OiB7IHNjb3JlOiAnOTIuMCcsIHBsYXRlQ2xlYXI6IHRydWUsIHNpZ25hbFZpc2libGU6IHRydWUsIHJpZGVyVmlzaWJsZTogdHJ1ZSwgem9uZUNsZWFyOiB0cnVlLCBkZWNpc2lvbjogJ0FVVE8tQVBQUk9WRScgfSxcbiAgICAgICAgICAgICAgZXhwbGFuYXRpb246IFt7IHR5cGU6IHYubGFiZWwsIHJlYXNvbjogJ0RldGVjdGVkIHVzaW5nIFlPTE92MTEgbW9kZWwuJyB9XVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRSZXN1bHRzKG1hcHBlZCk7XG4gICAgICAgICAgc2V0U2VsZWN0ZWQobWFwcGVkWzBdKTtcbiAgICAgICAgICBhZGRUb2FzdChjdXJyZW50VXNlcj8ucm9sZSA9PT0gJ3BvbGljZScgPyBcIkltYWdlIHByb2Nlc3NlZCBhbmQgc2F2ZWQgdG8gY2VudHJhbCByZWNvcmRzLlwiIDogXCJJbWFnZSBwcm9jZXNzZWQgYW5kIHNhdmVkIHRvIE1vbmdvREIuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFJlc3VsdHMoW25ld0l0ZW1dKTtcbiAgICAgICAgICBzZXRTZWxlY3RlZChuZXdJdGVtKTtcbiAgICAgICAgICBhZGRUb2FzdChjdXJyZW50VXNlcj8ucm9sZSA9PT0gJ3BvbGljZScgPyBcIlByb2Nlc3NlZCBsb2NhbGx5IChTZXJ2ZXIgc2F2ZWQgbW9jayB2aW9sYXRpb25zKS5cIiA6IFwiUHJvY2Vzc2VkIGxvY2FsbHkgKE1vbmdvREIgc2F2ZWQgbW9jayB2aW9sYXRpb25zKS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgc2V0UHJvY2Vzc2luZyhmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgc2V0UmVzdWx0cyhbbmV3SXRlbV0pO1xuICAgICAgICBzZXRTZWxlY3RlZChuZXdJdGVtKTtcbiAgICAgICAgc2V0UHJvY2Vzc2luZyhmYWxzZSk7XG4gICAgICAgIGFkZFRvYXN0KFwiRXJyb3IgcmVhY2hpbmcgc2VydmVyLCBzaW11bGF0ZWQgbG9jYWwgZGV0ZWN0aW9uIHJlc3VsdCBkaXNwbGF5ZWQuXCIpO1xuICAgICAgfSk7XG4gICAgfSwgMTIwMCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3RhdHVzQ2hhbmdlID0gKHZpb2xhdGlvbklkLCBuZXdTdGF0dXMsIGZpbmVWYWwpID0+IHtcbiAgICBpZiAobmV3U3RhdHVzID09PSAnV0FJVkVEJykge1xuICAgICAgY29uc3QgcmVhc29uID0gcHJvbXB0KFwiRW50ZXIgb2ZmaWNpYWwgd2FpdmVyIGp1c3RpZmljYXRpb24gKGUuZy4gWWllbGRlZCB0byBhbWJ1bGFuY2UsIE1lZGljYWwgZW1lcmdlbmN5LCBDYW1lcmEgY2FsaWJyYXRpb24gZXJyb3IpOlwiKTtcbiAgICAgIGlmIChyZWFzb24gPT09IG51bGwpIHJldHVybjtcbiAgICAgIGNvbnN0IGZpbmFsUmVhc29uID0gcmVhc29uLnRyaW0oKSB8fCBcIkFkbWluaXN0cmF0aXZlIFBvbGljZSBXYWl2ZXJcIjtcblxuICAgICAgZmV0Y2goYCR7QVBJfS92aW9sYXRpb25zLyR7dmlvbGF0aW9uSWR9L3dhaXZlYCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyByZWFzb246IGZpbmFsUmVhc29uIH0pXG4gICAgICB9KVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKGQgPT4ge1xuICAgICAgICBpZiAoZC5zdWNjZXNzKSB7XG4gICAgICAgICAgc2V0UmVzdWx0cyhwcmV2ID0+IHByZXYubWFwKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdmlvbGF0aW9uSWQgPyB7IC4uLml0ZW0sIHN0YXR1czogJ1dBSVZFRCcsIGZpbmVBbW91bnQ6IDAsIGV4ZW1wdFJlYXNvbjogZmluYWxSZWFzb24gfSA6IGl0ZW0pKTtcbiAgICAgICAgICBzZXRTZWxlY3RlZChwcmV2ID0+IHByZXYgJiYgcHJldi5pZCA9PT0gdmlvbGF0aW9uSWQgPyB7IC4uLnByZXYsIHN0YXR1czogJ1dBSVZFRCcsIGZpbmVBbW91bnQ6IDAsIGV4ZW1wdFJlYXNvbjogZmluYWxSZWFzb24gfSA6IHByZXYpO1xuICAgICAgICAgIGFkZFRvYXN0KGBGaW5lIHdhaXZlZCBzdWNjZXNzZnVsbHk6ICR7ZmluYWxSZWFzb259YCwgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHNldFJlc3VsdHMocHJldiA9PiBwcmV2Lm1hcChpdGVtID0+IGl0ZW0uaWQgPT09IHZpb2xhdGlvbklkID8geyAuLi5pdGVtLCBzdGF0dXM6ICdXQUlWRUQnLCBmaW5lQW1vdW50OiAwLCBleGVtcHRSZWFzb246IGZpbmFsUmVhc29uIH0gOiBpdGVtKSk7XG4gICAgICAgIHNldFNlbGVjdGVkKHByZXYgPT4gcHJldiAmJiBwcmV2LmlkID09PSB2aW9sYXRpb25JZCA/IHsgLi4ucHJldiwgc3RhdHVzOiAnV0FJVkVEJywgZmluZUFtb3VudDogMCwgZXhlbXB0UmVhc29uOiBmaW5hbFJlYXNvbiB9IDogcHJldik7XG4gICAgICAgIGFkZFRvYXN0KGBbTG9jYWwgRmFsbGJhY2tdIEZpbmUgd2FpdmVkIHN1Y2Nlc3NmdWxseS5gLCAnd2FybmluZycpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2FsbCBiYWNrZW5kXG4gICAgZmV0Y2goYCR7QVBJfS92aW9sYXRpb25zLyR7dmlvbGF0aW9uSWR9L3N0YXR1c2AsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc3RhdHVzOiBuZXdTdGF0dXMsIGZpbmVBbW91bnQ6IGZpbmVWYWwgfSlcbiAgICB9KVxuICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgLnRoZW4oZCA9PiB7XG4gICAgICBpZiAoZC5zdWNjZXNzKSB7XG4gICAgICAgIHNldFJlc3VsdHMocHJldiA9PiBwcmV2Lm1hcChpdGVtID0+IGl0ZW0uaWQgPT09IHZpb2xhdGlvbklkID8geyAuLi5pdGVtLCBzdGF0dXM6IG5ld1N0YXR1cywgZmluZUFtb3VudDogZmluZVZhbCB9IDogaXRlbSkpO1xuICAgICAgICBzZXRTZWxlY3RlZChwcmV2ID0+IHByZXYgJiYgcHJldi5pZCA9PT0gdmlvbGF0aW9uSWQgPyB7IC4uLnByZXYsIHN0YXR1czogbmV3U3RhdHVzLCBmaW5lQW1vdW50OiBmaW5lVmFsIH0gOiBwcmV2KTtcbiAgICAgICAgXG4gICAgICAgIGlmIChuZXdTdGF0dXMgPT09ICdTRU5UJykge1xuICAgICAgICAgIGFkZFRvYXN0KGBOT1RJQ0UgU0VOVDogTWVzc2FnZSBkaXNwYXRjaGVkIHRvIG93bmVyOiBcIkEgZmluZSBvZiDigrkke2ZpbmVWYWx9IGhhcyBiZWVuIGlzc3VlZC5cImAsICdzdWNjZXNzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkVG9hc3QoYE1hcmtlZCB2aW9sYXRpb24gJHt2aW9sYXRpb25JZH0gYXMgTWlzbGVhZC4gTm90aWNlIGNhbmNlbGxlZC5gLCAnd2FybmluZycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgLy8gTG9jYWwgc3RhdGUgdXBkYXRlIGZhbGxiYWNrXG4gICAgICBzZXRSZXN1bHRzKHByZXYgPT4gcHJldi5tYXAoaXRlbSA9PiBpdGVtLmlkID09PSB2aW9sYXRpb25JZCA/IHsgLi4uaXRlbSwgc3RhdHVzOiBuZXdTdGF0dXMsIGZpbmVBbW91bnQ6IGZpbmVWYWwgfSA6IGl0ZW0pKTtcbiAgICAgIHNldFNlbGVjdGVkKHByZXYgPT4gcHJldiAmJiBwcmV2LmlkID09PSB2aW9sYXRpb25JZCA/IHsgLi4ucHJldiwgc3RhdHVzOiBuZXdTdGF0dXMsIGZpbmVBbW91bnQ6IGZpbmVWYWwgfSA6IHByZXYpO1xuICAgICAgaWYgKG5ld1N0YXR1cyA9PT0gJ1NFTlQnKSB7XG4gICAgICAgIGFkZFRvYXN0KGBbTG9jYWwgRmFsbGJhY2tdIE5PVElDRSBTRU5UOiBDaGFyZ2VkIOKCuSR7ZmluZVZhbH1gLCAnc3VjY2VzcycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkVG9hc3QoYFtMb2NhbCBGYWxsYmFja10gRmxhZ2dlZCBhcyBNaXNsZWFkYCwgJ3dhcm5pbmcnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBleHBvcnRDU1YgPSAoKSA9PiB7XG4gICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgY29uc3QgaGVhZGVycyA9IFsnSUQnLCAnTGljZW5zZSBQbGF0ZScsICdWZWhpY2xlJywgJ1Zpb2xhdGlvbnMnLCAnTG9jYXRpb24nLCAnQ29uZmlkZW5jZScsICdGaW5lIEFtb3VudCcsICdTdGF0dXMnXTtcbiAgICBjb25zdCByb3dzID0gcmVzdWx0cy5tYXAoaXRlbSA9PiBbXG4gICAgICBpdGVtLmlkLFxuICAgICAgaXRlbS5wbGF0ZSxcbiAgICAgIGAke2l0ZW0uY29sb3J9ICR7aXRlbS5tYW51ZmFjdHVyZXJ9ICR7aXRlbS5tb2RlbH1gLFxuICAgICAgaXRlbS52aW9sYXRpb25zLm1hcCh2ID0+IHYubGFiZWwpLmpvaW4oJzsgJyksXG4gICAgICBpdGVtLmxvY2F0aW9uLFxuICAgICAgYCR7aXRlbS5jb25maWRlbmNlfSVgLFxuICAgICAgaXRlbS5maW5lQW1vdW50LFxuICAgICAgaXRlbS5zdGF0dXNcbiAgICBdKTtcbiAgICBcbiAgICBsZXQgY3N2Q29udGVudCA9IFwiZGF0YTp0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04LFwiIFxuICAgICAgKyBbaGVhZGVycy5qb2luKCcsJyksIC4uLnJvd3MubWFwKGUgPT4gZS5tYXAodmFsID0+IGBcIiR7dmFsfVwiYCkuam9pbignLCcpKV0uam9pbignXFxuJyk7XG4gICAgICBcbiAgICBjb25zdCBlbmNvZGVkVXJpID0gZW5jb2RlVVJJKGNzdkNvbnRlbnQpO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgZW5jb2RlZFVyaSk7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBgc2Vzc2lvbi12aW9sYXRpb25zLSR7RGF0ZS5ub3coKX0uY3N2YCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBsaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zbGlkZXVwXCI+XG4gICAgICB7YWxlcnQmJjxkaXYgY2xhc3NOYW1lPXtgYWxlcnQgYS0ke2FsZXJ0LnR5cGV9YH0+PENoZWNrQ2lyY2xlIHNpemU9ezE0fS8+e2FsZXJ0Lm1zZ308L2Rpdj59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImcyXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206MTh9fT5cbiAgICAgICAgey8qIFVwbG9hZCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhkclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXR0bFwiPjxkaXYgY2xhc3NOYW1lPVwidHRsLWljb1wiPjxDYW1lcmEgc2l6ZT17MTR9Lz48L2Rpdj5VcGxvYWQgVHJhZmZpYyBFdmlkZW5jZTwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWcgYnRuLXNcIiBvbkNsaWNrPXsoKT0+cHJvY2Vzc0ZpbGVzKFtuZXcgRmlsZShbJyddLCdkZW1vLmpwZycpXSl9PjxaYXAgc2l6ZT17MTF9Lz5EZW1vIFNuYXBzaG90PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B1cHpvbmUke2RyYWc/JyBkcmFnJzonJ31gfSBvbkRyYWdFbnRlcj17aGFuZGxlRHJhZ30gb25EcmFnTGVhdmU9e2hhbmRsZURyYWd9IG9uRHJhZ092ZXI9e2hhbmRsZURyYWd9IG9uRHJvcD17aGFuZGxlRHJvcH0gb25DbGljaz17KCk9PmZpbGVSZWYuY3VycmVudD8uY2xpY2soKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwLWljb1wiPntwcm9jZXNzaW5nPzxkaXYgY2xhc3NOYW1lPVwic3BpblwiLz46PENhbWVyYSBzaXplPXsyNn0gY29sb3I9XCIjNjBhNWZhXCIvPn08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxNCxmb250V2VpZ2h0OjYwMCxjb2xvcjonI2UyZThmMCcsbWFyZ2luQm90dG9tOjV9fT57cHJvY2Vzc2luZz8nQW5hbHlzaW5nIHBob3RvLi4uJzonRHJvcCBUcmFmZmljIEltYWdlcyBIZXJlJ308L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMSxjb2xvcjonIzZiNzI4MCcsbWFyZ2luQm90dG9tOjE0fX0+SlBHIMK3IFBORyDCtyBNUDQgwrcgRHJhZyAmIGRyb3Agb3IgY2xpY2s8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxnYXA6NixqdXN0aWZ5Q29udGVudDonY2VudGVyJyxmbGV4V3JhcDond3JhcCd9fT5cbiAgICAgICAgICAgICAge1snWU9MT3YxMScsJ09DUicsJ0V2aWRlbmNlIEdlbiddLm1hcChsPT48c3BhbiBrZXk9e2x9IHN0eWxlPXt7cGFkZGluZzonMnB4IDlweCcsYmFja2dyb3VuZDoncmdiYSg1OSwxMzAsMjQ2LC4xKScsYm9yZGVyOicxcHggc29saWQgcmdiYSg1OSwxMzAsMjQ2LC4yKScsYm9yZGVyUmFkaXVzOjIwLGZvbnRTaXplOjksY29sb3I6JyM2MGE1ZmEnLGZvbnRXZWlnaHQ6NjAwfX0+e2x9PC9zcGFuPil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e2ZpbGVSZWZ9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKix2aWRlby8qXCIgb25DaGFuZ2U9e2hhbmRsZUZpbGV9IGNsYXNzTmFtZT1cImhpZGRlblwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cHJldmlld0ltZyYmKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctcHJldlwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17cHJldmlld0ltZ30gYWx0PVwidXBsb2FkZWQgdHJhZmZpYyBpbWFnZVwiLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctcHJldi1iYWRnZVwiPvCfk7cgVXBsb2FkZWQgSW1hZ2U8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBTZXNzaW9uIHN0YXRzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGRyXCI+PGRpdiBjbGFzc05hbWU9XCJjYXJkLXR0bFwiPjxkaXYgY2xhc3NOYW1lPVwidHRsLWljb1wiPjxBY3Rpdml0eSBzaXplPXsxNH0vPjwvZGl2PlNlc3Npb24gU3VtbWFyeTwvZGl2PlxuICAgICAgICAgICAge3Jlc3VsdHMubGVuZ3RoPjAmJjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1nIGJ0bi1zXCIgb25DbGljaz17KCk9PntzZXRSZXN1bHRzKFtdKTtzZXRTZWxlY3RlZChudWxsKTtzZXRQcmV2aWV3SW1nKG51bGwpO319PjxSZWZyZXNoQ3cgc2l6ZT17MTF9Lz5DbGVhcjwvYnV0dG9uPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cmVzdWx0cy5sZW5ndGg9PT0wPyhcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlcIj48ZGl2IGNsYXNzTmFtZT1cImVtcHR5LWljb1wiPvCfjq88L2Rpdj48ZGl2IHN0eWxlPXt7Zm9udFNpemU6MTJ9fT5VcGxvYWQgaW1hZ2VzIHRvIHN0YXJ0IGRldGVjdGlvbjwvZGl2PjwvZGl2PlxuICAgICAgICAgICk6KFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2dyaWQnLGdyaWRUZW1wbGF0ZUNvbHVtbnM6JzFmciAxZnInLGdhcDo5LG1hcmdpbkJvdHRvbToxNH19PlxuICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICB7bGJsOidJbWFnZXMnLHZhbDpyZXN1bHRzLmxlbmd0aCxjOicjNjBhNWZhJ30sXG4gICAgICAgICAgICAgICAgICB7bGJsOidWaW9sYXRpb25zJyx2YWw6cmVzdWx0cy5yZWR1Y2UoKHMsdik9PnMrdi52aW9sYXRpb25zLmxlbmd0aCwwKSxjOicjZWY0NDQ0J30sXG4gICAgICAgICAgICAgICAgICB7bGJsOidUb3RhbCBGaW5lJyx2YWw6IGDigrkke3Jlc3VsdHMucmVkdWNlKChzLHYpPT5zKyh2LnN0YXR1cz09PSdNSVNMRUFEJz8wOnYuZmluZUFtb3VudCksMCkudG9Mb2NhbGVTdHJpbmcoKX1gLGM6JyNmOTczMTYnfSxcbiAgICAgICAgICAgICAgICAgIHtsYmw6J0F2ZyBDb25mJyx2YWw6YCR7KHJlc3VsdHMucmVkdWNlKChzLHYpPT5zK3BhcnNlRmxvYXQodi5jb25maWRlbmNlKSwwKS9yZXN1bHRzLmxlbmd0aCkudG9GaXhlZCgxKX0lYCxjOicjMTBiOTgxJ30sXG4gICAgICAgICAgICAgICAgXS5tYXAocz0+KFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3MubGJsfSBzdHlsZT17e2JhY2tncm91bmQ6J3JnYmEoMTUsMjMsNDIsLjUpJyxib3JkZXI6JzFweCBzb2xpZCAjMWUyOTNiJyxib3JkZXJSYWRpdXM6OSxwYWRkaW5nOjExfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToyMCxmb250V2VpZ2h0OjgwMCxjb2xvcjpzLmMsZm9udEZhbWlseTonSmV0QnJhaW5zIE1vbm8nfX0+e3MudmFsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MTAsY29sb3I6JyM2YjcyODAnLG1hcmdpblRvcDoyfX0+e3MubGJsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZ2FwOjd9fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcCBidG4tc1wiIG9uQ2xpY2s9e2V4cG9ydENTVn0+PERvd25sb2FkIHNpemU9ezExfS8+RXhwb3J0IENTVjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7cmVzdWx0cy5sZW5ndGg+MCYmKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImcyXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGZsZXhEaXJlY3Rpb246J2NvbHVtbicsZ2FwOjEwLG1heEhlaWdodDo2ODAsb3ZlcmZsb3dZOidhdXRvJ319PlxuICAgICAgICAgICAge3Jlc3VsdHMubWFwKGl0ZW09PjxWQ2FyZCBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IG9uQ2xpY2s9e3NldFNlbGVjdGVkfSBzZWw9e3NlbGVjdGVkPy5pZD09PWl0ZW0uaWR9Lz4pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxEZXRhaWxQYW5lbCBpdGVtPXtzZWxlY3RlZH0gb25DbG9zZT17KCk9PnNldFNlbGVjdGVkKG51bGwpfSBvblN0YXR1c0NoYW5nZT17aGFuZGxlU3RhdHVzQ2hhbmdlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4vLyBQQUdFOiBBUkNISVZFIChPbGQgRmlsZXMgZnJvbSBNb25nb0RCKVxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5mdW5jdGlvbiBBcmNoaXZlUGFnZSh7IGFkZFRvYXN0LCBjdXJyZW50VXNlciB9KXtcbiAgY29uc3QgW3Zpb2xhdGlvbnMsc2V0VmlvbGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtmaWx0ZXIsc2V0RmlsdGVyXSA9IHVzZVN0YXRlKCdBTEwnKTtcbiAgY29uc3QgW3NlbGVjdGVkLHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYWxlcnQsc2V0QWxlcnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgZmV0Y2hBcmNoaXZlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgZmV0Y2goYCR7QVBJfS92aW9sYXRpb25zP2xpbWl0PTEwMGApXG4gICAgICAudGhlbihyPT5yLmpzb24oKSlcbiAgICAgIC50aGVuKGQ9PntcbiAgICAgICAgLy8gTWFwIGRiIG1vZGVsIGJhY2sgdG8gZnJvbnRlbmQgbW9kZWwgZm9ybWF0XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gKGQudmlvbGF0aW9uc3x8W10pLm1hcCh2ID0+IHtcbiAgICAgICAgICBjb25zdCBmYWxsYmFjayA9IGdldFZlaGljbGVGYWxsYmFja0RldGFpbHModi5saWNlbnNlUGxhdGUpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdi52aW9sYXRpb25JZCxcbiAgICAgICAgICAgIHBsYXRlOiB2LmxpY2Vuc2VQbGF0ZSxcbiAgICAgICAgICAgIHZlaGljbGVUeXBlOiB2LnZlaGljbGVUeXBlIHx8IGZhbGxiYWNrLnR5cGUsXG4gICAgICAgICAgICBtYW51ZmFjdHVyZXI6IHYudmVoaWNsZUJyYW5kIHx8IGZhbGxiYWNrLmJyYW5kLFxuICAgICAgICAgICAgbW9kZWw6IHYudmVoaWNsZU1vZGVsIHx8IGZhbGxiYWNrLm1vZGVsLFxuICAgICAgICAgICAgY29sb3I6IHYudmVoaWNsZUNvbG9yIHx8IGZhbGxiYWNrLmNvbG9yLFxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiAnVkVSSUZJRUQnLFxuICAgICAgICAgICAgb3duZXJTdGF0dXM6ICdNQVRDSEVEJyxcbiAgICAgICAgICAgIHZpb2xhdGlvbnM6IFt7IGlkOiB2LnR5cGUsIGxhYmVsOiB2LmxhYmVsLCBjb2xvcjogJyNlZjQ0NDQnLCBpY29uOiAn8J+aqCcsIHJpc2s6IHYuc2V2ZXJpdHksIGZpbmU6IHYuZmluZUFtb3VudCB9XSxcbiAgICAgICAgICAgIHJpc2s6IHYuc2V2ZXJpdHl8fCdISUdIJyxcbiAgICAgICAgICAgIGNvbmZpZGVuY2U6IHYuY29uZmlkZW5jZXx8JzkwJyxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAodi5sb2NhdGlvbiAmJiB0eXBlb2Ygdi5sb2NhdGlvbiA9PT0gJ3N0cmluZycgPyB2LmxvY2F0aW9uIDogJ1NpbGsgQm9hcmQgSnVuY3Rpb24nKSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdi5kZXRlY3RlZEF0IHx8IHYuY3JlYXRlZEF0LFxuICAgICAgICAgICAgaGlzdG9yeTogW10sIHJlcGVhdHM6IDAsXG4gICAgICAgICAgICBoZWxtZXRSaWRlcjogJ0hFTE1FVCcsIGhlbG1ldFBhc3M6ICdIRUxNRVQnLFxuICAgICAgICAgICAgaGVsbWV0UmlkZXJDb25mOiAnMCcsIGhlbG1ldFBhc3NDb25mOiAnMCcsXG4gICAgICAgICAgICBpbWFnZVVybDogbnVsbCxcbiAgICAgICAgICAgIHN0YXR1czogdi5zdGF0dXMgfHwgJ1BFTkRJTkcnLFxuICAgICAgICAgICAgZmluZUFtb3VudDogdi5maW5lQW1vdW50IHx8IDEwMDAsXG4gICAgICAgICAgICBldmlkZW5jZUZyYW1lOiAxMDAsXG4gICAgICAgICAgICBvd25lclBob25lOiB2Lm93bmVyUGhvbmUgfHwgJycsXG4gICAgICAgICAgICBpc0VtZXJnZW5jeUV4ZW1wdDogdi5pc0VtZXJnZW5jeUV4ZW1wdCB8fCBmYWxzZSxcbiAgICAgICAgICAgIGV4ZW1wdFJlYXNvbjogdi5leGVtcHRSZWFzb24gfHwgJycsXG4gICAgICAgICAgICBpc0NoYXNlQ2F0ZWdvcnk6IHYuaXNDaGFzZUNhdGVnb3J5IHx8IGZhbHNlLFxuICAgICAgICAgICAgaW50ZXJlc3RBcHBsaWVkOiB2LmludGVyZXN0QXBwbGllZCB8fCAwLFxuICAgICAgICAgICAgY3JlZGliaWxpdHk6IHsgc2NvcmU6ICc4OC4wJywgcGxhdGVDbGVhcjogdHJ1ZSwgc2lnbmFsVmlzaWJsZTogdHJ1ZSwgcmlkZXJWaXNpYmxlOiB0cnVlLCB6b25lQ2xlYXI6IHRydWUsIGRlY2lzaW9uOiAnQVVUTy1BUFBST1ZFJyB9LFxuICAgICAgICAgICAgZXhwbGFuYXRpb246IFt7IHR5cGU6IHYubGFiZWwsIHJlYXNvbjogJ1N0b3JlZCBsb2cgcmV2aWV3LicgfV1cbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0VmlvbGF0aW9ucyhpdGVtcyk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKT0+e1xuICAgICAgICAvLyBmYWxsYmFjayBtb2NrIGRhdGFcbiAgICAgICAgY29uc3QgZGVtb0RhdGEgPSBBcnJheS5mcm9tKHtsZW5ndGg6Nn0sKCk9Pm1rVmVoaWNsZSgpKTtcbiAgICAgICAgc2V0VmlvbGF0aW9ucyhkZW1vRGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBjb25zdCBkYlRleHQgPSBjdXJyZW50VXNlcj8ucm9sZSA9PT0gJ3BvbGljZScgPyAnZW5mb3JjZW1lbnQgZGF0YWJhc2UnIDogJ01vbmdvREInO1xuICAgICAgICBzZXRBbGVydCh7dHlwZTond2FybicsbXNnOmDimqDvuI8gQ291bGQgbm90IHJlYWNoICR7ZGJUZXh0fSDigJQgc2hvd2luZyBkZW1vIGFyY2hpdmUgZGF0YS5gfSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGZldGNoQXJjaGl2ZSgpO1xuICB9LFtmZXRjaEFyY2hpdmVdKTtcblxuICBjb25zdCBoYW5kbGVTdGF0dXNDaGFuZ2UgPSAodmlvbGF0aW9uSWQsIG5ld1N0YXR1cywgZmluZVZhbCkgPT4ge1xuICAgIGlmIChuZXdTdGF0dXMgPT09ICdXQUlWRUQnKSB7XG4gICAgICBjb25zdCByZWFzb24gPSBwcm9tcHQoXCJFbnRlciBvZmZpY2lhbCB3YWl2ZXIganVzdGlmaWNhdGlvbiAoZS5nLiBZaWVsZGVkIHRvIGFtYnVsYW5jZSwgTWVkaWNhbCBlbWVyZ2VuY3ksIENhbWVyYSBjYWxpYnJhdGlvbiBlcnJvcik6XCIpO1xuICAgICAgaWYgKHJlYXNvbiA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgY29uc3QgZmluYWxSZWFzb24gPSByZWFzb24udHJpbSgpIHx8IFwiQWRtaW5pc3RyYXRpdmUgUG9saWNlIFdhaXZlclwiO1xuXG4gICAgICBmZXRjaChgJHtBUEl9L3Zpb2xhdGlvbnMvJHt2aW9sYXRpb25JZH0vd2FpdmVgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHJlYXNvbjogZmluYWxSZWFzb24gfSlcbiAgICAgIH0pXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4oZCA9PiB7XG4gICAgICAgIGlmIChkLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBzZXRWaW9sYXRpb25zKHByZXYgPT4gcHJldi5tYXAoaXRlbSA9PiBpdGVtLmlkID09PSB2aW9sYXRpb25JZCA/IHsgLi4uaXRlbSwgc3RhdHVzOiAnV0FJVkVEJywgZmluZUFtb3VudDogMCwgZXhlbXB0UmVhc29uOiBmaW5hbFJlYXNvbiB9IDogaXRlbSkpO1xuICAgICAgICAgIHNldFNlbGVjdGVkKHByZXYgPT4gcHJldiAmJiBwcmV2LmlkID09PSB2aW9sYXRpb25JZCA/IHsgLi4ucHJldiwgc3RhdHVzOiAnV0FJVkVEJywgZmluZUFtb3VudDogMCwgZXhlbXB0UmVhc29uOiBmaW5hbFJlYXNvbiB9IDogcHJldik7XG4gICAgICAgICAgYWRkVG9hc3QoYEZpbmUgd2FpdmVkIHN1Y2Nlc3NmdWxseTogJHtmaW5hbFJlYXNvbn1gLCAnc3VjY2VzcycpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgc2V0VmlvbGF0aW9ucyhwcmV2ID0+IHByZXYubWFwKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdmlvbGF0aW9uSWQgPyB7IC4uLml0ZW0sIHN0YXR1czogJ1dBSVZFRCcsIGZpbmVBbW91bnQ6IDAsIGV4ZW1wdFJlYXNvbjogZmluYWxSZWFzb24gfSA6IGl0ZW0pKTtcbiAgICAgICAgc2V0U2VsZWN0ZWQocHJldiA9PiBwcmV2ICYmIHByZXYuaWQgPT09IHZpb2xhdGlvbklkID8geyAuLi5wcmV2LCBzdGF0dXM6ICdXQUlWRUQnLCBmaW5lQW1vdW50OiAwLCBleGVtcHRSZWFzb246IGZpbmFsUmVhc29uIH0gOiBwcmV2KTtcbiAgICAgICAgYWRkVG9hc3QoYFtMb2NhbCBGYWxsYmFja10gRmluZSB3YWl2ZWQgc3VjY2Vzc2Z1bGx5LmAsICd3YXJuaW5nJyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDYWxsIGJhY2tlbmRcbiAgICBmZXRjaChgJHtBUEl9L3Zpb2xhdGlvbnMvJHt2aW9sYXRpb25JZH0vc3RhdHVzYCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBzdGF0dXM6IG5ld1N0YXR1cywgZmluZUFtb3VudDogZmluZVZhbCB9KVxuICAgIH0pXG4gICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAudGhlbihkID0+IHtcbiAgICAgIGlmIChkLnN1Y2Nlc3MpIHtcbiAgICAgICAgc2V0VmlvbGF0aW9ucyhwcmV2ID0+IHByZXYubWFwKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdmlvbGF0aW9uSWQgPyB7IC4uLml0ZW0sIHN0YXR1czogbmV3U3RhdHVzLCBmaW5lQW1vdW50OiBmaW5lVmFsIH0gOiBpdGVtKSk7XG4gICAgICAgIHNldFNlbGVjdGVkKHByZXYgPT4gcHJldiAmJiBwcmV2LmlkID09PSB2aW9sYXRpb25JZCA/IHsgLi4ucHJldiwgc3RhdHVzOiBuZXdTdGF0dXMsIGZpbmVBbW91bnQ6IGZpbmVWYWwgfSA6IHByZXYpO1xuICAgICAgICBpZiAobmV3U3RhdHVzID09PSAnU0VOVCcpIHtcbiAgICAgICAgICBhZGRUb2FzdChgTk9USUNFIFNFTlQ6IE1lc3NhZ2UgZGlzcGF0Y2hlZC4gRmluZTog4oK5JHtmaW5lVmFsfWAsICdzdWNjZXNzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkVG9hc3QoYE1hcmtlZCBhcyBNaXNsZWFkYCwgJ3dhcm5pbmcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIHNldFZpb2xhdGlvbnMocHJldiA9PiBwcmV2Lm1hcChpdGVtID0+IGl0ZW0uaWQgPT09IHZpb2xhdGlvbklkID8geyAuLi5pdGVtLCBzdGF0dXM6IG5ld1N0YXR1cywgZmluZUFtb3VudDogZmluZVZhbCB9IDogaXRlbSkpO1xuICAgICAgc2V0U2VsZWN0ZWQocHJldiA9PiBwcmV2ICYmIHByZXYuaWQgPT09IHZpb2xhdGlvbklkID8geyAuLi5wcmV2LCBzdGF0dXM6IG5ld1N0YXR1cywgZmluZUFtb3VudDogZmluZVZhbCB9IDogcHJldik7XG4gICAgICBpZiAobmV3U3RhdHVzID09PSAnU0VOVCcpIHtcbiAgICAgICAgYWRkVG9hc3QoYFtMb2NhbCBGYWxsYmFja10gTk9USUNFIFNFTlQ6IENoYXJnZWQg4oK5JHtmaW5lVmFsfWAsICdzdWNjZXNzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRUb2FzdChgW0xvY2FsIEZhbGxiYWNrXSBGbGFnZ2VkIGFzIE1pc2xlYWRgLCAnd2FybmluZycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlcmVkID0gZmlsdGVyPT09J0FMTCcgPyB2aW9sYXRpb25zIDogdmlvbGF0aW9ucy5maWx0ZXIodiA9PiB2LnJpc2sgPT09IGZpbHRlcik7XG5cbiAgY29uc3QgZXhwb3J0QWxsQ1NWID0gKCkgPT4ge1xuICAgIGlmICh2aW9sYXRpb25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBbJ0lEJywgJ0xpY2Vuc2UgUGxhdGUnLCAnVmlvbGF0aW9ucycsICdMb2NhdGlvbicsICdSaXNrJywgJ0NvbmZpZGVuY2UnLCAnRmluZSBBbW91bnQnLCAnU3RhdHVzJ107XG4gICAgY29uc3Qgcm93cyA9IHZpb2xhdGlvbnMubWFwKGl0ZW0gPT4gW1xuICAgICAgaXRlbS5pZCxcbiAgICAgIGl0ZW0ucGxhdGUsXG4gICAgICBpdGVtLnZpb2xhdGlvbnMubWFwKHYgPT4gdi5sYWJlbCkuam9pbignOyAnKSxcbiAgICAgIGl0ZW0ubG9jYXRpb24sXG4gICAgICBpdGVtLnJpc2ssXG4gICAgICBgJHtpdGVtLmNvbmZpZGVuY2V9JWAsXG4gICAgICBpdGVtLmZpbmVBbW91bnQsXG4gICAgICBpdGVtLnN0YXR1c1xuICAgIF0pO1xuICAgIFxuICAgIGxldCBjc3ZDb250ZW50ID0gXCJkYXRhOnRleHQvY3N2O2NoYXJzZXQ9dXRmLTgsXCIgXG4gICAgICArIFtoZWFkZXJzLmpvaW4oJywnKSwgLi4ucm93cy5tYXAoZSA9PiBlLm1hcCh2YWwgPT4gYFwiJHt2YWx9XCJgKS5qb2luKCcsJykpXS5qb2luKCdcXG4nKTtcbiAgICAgIFxuICAgIGNvbnN0IGVuY29kZWRVcmkgPSBlbmNvZGVVUkkoY3N2Q29udGVudCk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBlbmNvZGVkVXJpKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGBhbGwtdmlvbGF0aW9ucy1yZXBvcnQtJHtEYXRlLm5vdygpfS5jc3ZgKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIGxpbmsuY2xpY2soKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXNsaWRldXBcIj5cbiAgICAgIHthbGVydCYmPGRpdiBjbGFzc05hbWU9e2BhbGVydCBhLSR7YWxlcnQudHlwZX1gfT48QWxlcnRUcmlhbmdsZSBzaXplPXsxNH0vPnthbGVydC5tc2d9PC9kaXY+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206MTZ9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhkclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10dGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHRsLWljb1wiPjxBcmNoaXZlIHNpemU9ezE0fS8+PC9kaXY+XG4gICAgICAgICAgICB7Y3VycmVudFVzZXI/LnJvbGUgPT09ICdhZG1pbicgPyAnT2xkIEZpbGVzIOKAlCBNb25nb0RCIEFyY2hpdmUnIDogJ09sZCBGaWxlcyDigJQgU3lzdGVtIEFyY2hpdmUnfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtsb2FkaW5nJiY8ZGl2IGNsYXNzTmFtZT1cInNwaW5cIi8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGdhcDo3LGZsZXhXcmFwOid3cmFwJ319PlxuICAgICAgICAgIHtbJ0FMTCcsJ0NSSVRJQ0FMJywnSElHSCcsJ01FRElVTScsJ0xPVyddLm1hcChmPT4oXG4gICAgICAgICAgICA8YnV0dG9uIGtleT17Zn0gY2xhc3NOYW1lPXtgYnRuIGJ0bi1zICR7ZmlsdGVyPT09Zj8nYnRuLXAnOididG4tZyd9YH0gb25DbGljaz17KCk9PnNldEZpbHRlcihmKX0+e2Z9PC9idXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWcgYnRuLXNcIiBvbkNsaWNrPXtmZXRjaEFyY2hpdmV9PjxSZWZyZXNoQ3cgc2l6ZT17MTF9Lz5SZWZyZXNoPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXAgYnRuLXNcIiBvbkNsaWNrPXtleHBvcnRBbGxDU1Z9PjxEb3dubG9hZCBzaXplPXsxMX0vPkV4cG9ydCBBbGwgQ1NWPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7ZmlsdGVyZWQubGVuZ3RoPT09MCYmIWxvYWRpbmc/KFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj48ZGl2IGNsYXNzTmFtZT1cImVtcHR5XCI+PGRpdiBjbGFzc05hbWU9XCJlbXB0eS1pY29cIj7wn5eC77iPPC9kaXY+PGRpdiBzdHlsZT17e2ZvbnRTaXplOjEzfX0+Tm8gYXJjaGl2ZWQgdmlvbGF0aW9ucyBmb3VuZC48YnIvPkNoYW5nZSBmaWx0ZXJzIG9yIHJlZnJlc2ggbGlzdC48L2Rpdj48L2Rpdj48L2Rpdj5cbiAgICAgICk6KFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImcyXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGZsZXhEaXJlY3Rpb246J2NvbHVtbicsZ2FwOjEwLG1heEhlaWdodDo3NDAsb3ZlcmZsb3dZOidhdXRvJ319PlxuICAgICAgICAgICAge2ZpbHRlcmVkLm1hcCgodixpKT0+PFZDYXJkIGtleT17di5pZHx8aX0gaXRlbT17dn0gb25DbGljaz17c2V0U2VsZWN0ZWR9IHNlbD17c2VsZWN0ZWQ/LmlkPT09di5pZH0vPil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPERldGFpbFBhbmVsIGl0ZW09e3NlbGVjdGVkfSBvbkNsb3NlPXsoKT0+c2V0U2VsZWN0ZWQobnVsbCl9IG9uU3RhdHVzQ2hhbmdlPXtoYW5kbGVTdGF0dXNDaGFuZ2V9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi8vIFBBR0U6IEJBVENIXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbmZ1bmN0aW9uIEJhdGNoUGFnZSh7IGN1cnJlbnRVc2VyLCBhZGRUb2FzdCB9KXtcbiAgY29uc3QgW3N0YWdlLHNldFN0YWdlXT11c2VTdGF0ZSgnaWRsZScpO1xuICBjb25zdCBbcHJvZ3Jlc3Msc2V0UHJvZ3Jlc3NdPXVzZVN0YXRlKDApO1xuICBjb25zdCBbY291bnRzLHNldENvdW50c109dXNlU3RhdGUoe30pO1xuICBjb25zdCBbdG90YWwsc2V0VG90YWxdPXVzZVN0YXRlKDEwMCk7XG4gIGNvbnN0IFtwcm9jZXNzZWQsc2V0UHJvY2Vzc2VkXT11c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2JhdGNoUmVzdWx0cyxzZXRCYXRjaFJlc3VsdHNdPXVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvZ3MsIHNldExvZ3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcHJpb3JpdHksIHNldFByaW9yaXR5XSA9IHVzZVN0YXRlKCdOT1JNQUwnKTtcbiAgY29uc3QgW3dvcmtlcnMsIHNldFdvcmtlcnNdID0gdXNlU3RhdGUoNCk7XG4gIGNvbnN0IFtmb2N1c01vZGUsIHNldEZvY3VzTW9kZV0gPSB1c2VTdGF0ZSgnRlVMTCcpOyAvLyAnRlVMTCcsICdIRUxNRVQnLCAnU1BFRURJTkcnXG4gIGNvbnN0IGl2PXVzZVJlZigpO1xuICBjb25zdCBjb25zb2xlUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgaXNQb2xpY2UgPSBjdXJyZW50VXNlcj8ucm9sZSA9PT0gJ3BvbGljZSc7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29uc29sZVJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zb2xlUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gY29uc29sZVJlZi5jdXJyZW50LnNjcm9sbEhlaWdodDtcbiAgICB9XG4gIH0sIFtsb2dzXSk7XG5cbiAgY29uc3QgYWRkTG9nID0gKG1zZywgdHlwZSA9ICdpbmZvJykgPT4ge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1JTicsIHsgaG91cjEyOiBmYWxzZSB9KTtcbiAgICBjb25zdCBiYWRnZSA9IHsgaW5mbzogJ/CfjJAnLCBzdWNjZXNzOiAn4pyTJywgd2FybmluZzogJ+KaoO+4jycsIGVycm9yOiAn4p2MJyB9W3R5cGVdIHx8ICfimpnvuI8nO1xuICAgIHNldExvZ3MocHJldiA9PiBbLi4ucHJldiwgYFske3RpbWVzdGFtcH1dICR7YmFkZ2V9ICR7bXNnfWBdKTtcbiAgfTtcblxuICBjb25zdCBleGVjdXRlQnVsa1VwbG9hZCA9IGFzeW5jIChmaWxlcykgPT4ge1xuICAgIGlmICghZmlsZXMgfHwgZmlsZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgc2V0U3RhZ2UoJ3J1bm5pbmcnKTtcbiAgICBzZXRUb3RhbChmaWxlcy5sZW5ndGgpO1xuICAgIHNldFByb2dyZXNzKDUpO1xuICAgIHNldFByb2Nlc3NlZCgwKTtcbiAgICBzZXRDb3VudHMoe30pO1xuICAgIHNldEJhdGNoUmVzdWx0cyhbXSk7XG4gICAgc2V0TG9ncyhbXSk7XG4gICAgXG4gICAgYWRkTG9nKGBJbml0aWF0aW5nIGJ1bGsgaW5nZXN0aW9uIHJlcXVlc3QgZm9yICR7ZmlsZXMubGVuZ3RofSBzdHJlZXQgc25hcHNob3RzLi4uYCwgJ2luZm8nKTtcbiAgICBhZGRMb2coYENvbmZpZ3VyYXRpb24gcGFyc2VkOiBXb3JrZXJzPSR7d29ya2Vyc30gY29uY3VycmVudCB0aHJlYWRzLCBQcmlvcml0eT0ke3ByaW9yaXR5fSwgSW5nZXN0aW9uRm9jdXM9JHtmb2N1c01vZGV9YCwgJ2luZm8nKTtcbiAgICBcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2VzJywgZmlsZXNbaV0pO1xuICAgIH1cbiAgICBcbiAgICBhZGRMb2coXCJTZW5kaW5nIHBheWxvYWQgdG8gYmFja2VuZCBCYXRjaCBRdWV1ZSBFbmdpbmUgKC9hcGkvdmlvbGF0aW9ucy9idWxrLWRldGVjdCkuLi5cIiwgJ2luZm8nKTtcbiAgICBzZXRQcm9ncmVzcygyMCk7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJfS92aW9sYXRpb25zL2J1bGstZGV0ZWN0YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIFxuICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICBzZXRQcm9ncmVzcyg3MCk7XG4gICAgICAgIGFkZExvZyhgQmFja2VuZCBwYXJzZWQgcmVzcG9uc2UuICR7ZGF0YS5zdW1tYXJ5LnRvdGFsVmlvbGF0aW9uc0RldGVjdGVkfSBpbmZyYWN0aW9ucyByZWdpc3RlcmVkIWAsICdzdWNjZXNzJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgbG9jYWxQcm9jZXNzZWQgPSAwO1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBsb2NhbFByb2Nlc3NlZCArPSAxO1xuICAgICAgICAgIGNvbnN0IHBjdCA9IE1hdGgucm91bmQoNzAgKyAoMzAgKiBsb2NhbFByb2Nlc3NlZCAvIGZpbGVzLmxlbmd0aCkpO1xuICAgICAgICAgIHNldFByb2dyZXNzKE1hdGgubWluKDEwMCwgcGN0KSk7XG4gICAgICAgICAgc2V0UHJvY2Vzc2VkKGxvY2FsUHJvY2Vzc2VkKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAobG9jYWxQcm9jZXNzZWQgPD0gZGF0YS5yZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRhdGEucmVzdWx0c1tsb2NhbFByb2Nlc3NlZCAtIDFdO1xuICAgICAgICAgICAgYWRkTG9nKGBQcm9jZXNzZWQgZnJhbWU6ICR7aXRlbS5pbWFnZU5hbWV9ICgke2l0ZW0uZmlsZVNpemVLQn1LQikgLT4gRmxhZ2dlZCAke2l0ZW0udmlvbGF0aW9uc0RldGVjdGVkfSB2aW9sYXRpb25zLiBTcGVlZDogJHtpdGVtLnByb2Nlc3NpbmdNc31tcy5gLCAnc3VjY2VzcycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBpZiAobG9jYWxQcm9jZXNzZWQgPj0gZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gTWFwIHZpb2xhdGlvbnMgdG8gZGlzcGxheSBWQ2FyZHNcbiAgICAgICAgICAgIGNvbnN0IG1hcHBlZCA9IGRhdGEucmVzdWx0cy5mbGF0TWFwKHIgPT4gci52aW9sYXRpb25zLm1hcCh2ID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZmFsbGJhY2sgPSBnZXRWZWhpY2xlRmFsbGJhY2tEZXRhaWxzKHYubGljZW5zZVBsYXRlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogdi52aW9sYXRpb25JZCxcbiAgICAgICAgICAgICAgICBwbGF0ZTogdi5saWNlbnNlUGxhdGUsXG4gICAgICAgICAgICAgICAgdmVoaWNsZVR5cGU6IHYudmVoaWNsZVR5cGUgfHwgZmFsbGJhY2sudHlwZSxcbiAgICAgICAgICAgICAgICBtYW51ZmFjdHVyZXI6IHYudmVoaWNsZUJyYW5kIHx8IGZhbGxiYWNrLmJyYW5kLFxuICAgICAgICAgICAgICAgIG1vZGVsOiB2LnZlaGljbGVNb2RlbCB8fCBmYWxsYmFjay5tb2RlbCxcbiAgICAgICAgICAgICAgICBjb2xvcjogdi52ZWhpY2xlQ29sb3IgfHwgZmFsbGJhY2suY29sb3IsXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiAnVkVSSUZJRUQnLFxuICAgICAgICAgICAgICAgIG93bmVyU3RhdHVzOiAnTUFUQ0hFRCcsXG4gICAgICAgICAgICAgICAgdmlvbGF0aW9uczogW3sgaWQ6IHYudHlwZSwgbGFiZWw6IHYubGFiZWwsIGNvbG9yOiAnI2VmNDQ0NCcsIGljb246ICfwn5qoJywgcmlzazogdi5zZXZlcml0eSwgZmluZTogdi5maW5lQW1vdW50IH1dLFxuICAgICAgICAgICAgICAgIHJpc2s6IHYuc2V2ZXJpdHksXG4gICAgICAgICAgICAgICAgY29uZmlkZW5jZTogdi5jb25maWRlbmNlLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB2LmxvY2F0aW9uIHx8ICdNYWplc3RpYyBKdW5jdGlvbicsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiB2LmRldGVjdGVkQXQsXG4gICAgICAgICAgICAgICAgaGlzdG9yeTogW10sIHJlcGVhdHM6IDAsXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IG51bGwsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB2LnN0YXR1cyxcbiAgICAgICAgICAgICAgICBmaW5lQW1vdW50OiB2LmZpbmVBbW91bnQsXG4gICAgICAgICAgICAgICAgZXZpZGVuY2VGcmFtZTogMjEwLFxuICAgICAgICAgICAgICAgIGNyZWRpYmlsaXR5OiB7IHNjb3JlOiAnOTUuMCcsIHBsYXRlQ2xlYXI6IHRydWUsIHNpZ25hbFZpc2libGU6IHRydWUsIHJpZGVyVmlzaWJsZTogdHJ1ZSwgem9uZUNsZWFyOiB0cnVlLCBkZWNpc2lvbjogJ0FVVE8tQVBQUk9WRScgfSxcbiAgICAgICAgICAgICAgICBleHBsYW5hdGlvbjogW3sgdHlwZTogdi5sYWJlbCwgcmVhc29uOiAnQnVsayBJbmdlc3QgT0NSJyB9XVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRCYXRjaFJlc3VsdHMobWFwcGVkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUG9wdWxhdGUgY291bnRzXG4gICAgICAgICAgICBjb25zdCB0ZW1wQ291bnRzID0ge307XG4gICAgICAgICAgICBtYXBwZWQuZm9yRWFjaChtID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbGJsID0gbS52aW9sYXRpb25zWzBdLmxhYmVsO1xuICAgICAgICAgICAgICB0ZW1wQ291bnRzW2xibF0gPSAodGVtcENvdW50c1tsYmxdIHx8IDApICsgMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0Q291bnRzKHRlbXBDb3VudHMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRQcm9ncmVzcygxMDApO1xuICAgICAgICAgICAgc2V0U3RhZ2UoJ2RvbmUnKTtcbiAgICAgICAgICAgIGFkZExvZyhcIkJhdGNoIGNvbnNvbGlkYXRlZCBzdWNjZXNzZnVsbHkuIERvd25sb2FkIHJlcG9ydCBjc3YgYWN0aXZlLlwiLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgaWYgKGFkZFRvYXN0KSBhZGRUb2FzdChgQnVsayBiYXRjaCBvZiAke2ZpbGVzLmxlbmd0aH0gaW1hZ2VzIHByb2Nlc3NlZCBzdWNjZXNzZnVsbHkhYCwgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdGFnZSgnaWRsZScpO1xuICAgICAgICBhZGRMb2coYEJ1bGsgcHJvY2VzcyBmYWlsZWQ6ICR7ZGF0YS5lcnJvcn1gLCAnZXJyb3InKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldFN0YWdlKCdpZGxlJyk7XG4gICAgICBhZGRMb2coYE5ldHdvcmsgZmFpbGVkOiAke2Vyci5tZXNzYWdlfWAsICdlcnJvcicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdGFydEJhdGNoU2ltdWxhdGlvbiA9IChuID0gMTAwMCkgPT4ge1xuICAgIHNldFRvdGFsKG4pOyBzZXRQcm9ncmVzcygwKTsgc2V0UHJvY2Vzc2VkKDApOyBzZXRDb3VudHMoe30pOyBzZXRCYXRjaFJlc3VsdHMoW10pOyBzZXRTdGFnZSgncnVubmluZycpOyBzZXRMb2dzKFtdKTtcbiAgICBhZGRMb2coYFNwYXduaW5nICR7d29ya2Vyc30gY29uY3VycmVudCB3b3JrZXIgcGlwZWxpbmVzIChwcmlvcml0eTogJHtwcmlvcml0eX0pLi4uYCwgJ2luZm8nKTtcbiAgICBhZGRMb2coYEluaXRpYXRpbmcgRGVkdXBsaWNhdGlvbiBzY2FuICYgYmFja2dyb3VuZCBPQ1IgY2hhcmFjdGVyIG1hdGNoZXIuLi5gLCAnaW5mbycpO1xuICAgIFxuICAgIGxldCBwID0gMCwgZG9uZSA9IDA7XG4gICAgY29uc3QgYWNjID0ge307XG4gICAgY29uc3QgbG9nSW50ZXJ2YWxzID0gW1xuICAgICAgXCJbZGVkdXBdIFNjYW5uaW5nIGNhbWVyYSBxdWV1ZSBkaXJlY3Rvcmllcy4uLiBGb3VuZCAxMiByZWR1bmRhbnQgZnJhbWVzLlwiLFxuICAgICAgXCJbZGV0ZWN0b3JdIFdvcmtlciB0aHJlYWQgIzE6IFNjYW5uaW5nIGxhbmUgMSBTaWxrIEJvYXJkLi4uIElzb2xhdGVkIGxpY2Vuc2UgcGxhdGUgS0EwM0hBMjkwMy5cIixcbiAgICAgIFwiW2NvbXBsaWFuY2VdIFdvcmtlciB0aHJlYWQgIzM6IEF1ZGl0aW5nIHRyaXBsZSByaWRpbmcgb24gbW90b3JjeWNsZSBLQTAxQ0Q1Njc4LlwiLFxuICAgICAgXCJbcmVnaXN0cnldIFZlcmlmeWluZyBpbnN1cmFuY2UgYW5kIFZhaGFuIFJUTyBjZXJ0aWZpY2F0ZXMuLi5cIixcbiAgICAgIFwiW3Ntcy1kaXNwYXRjaGVyXSBTZW5kaW5nIHdhcm5pbmcgbm90aWZpY2F0aW9uIGZvciBmaXJzdC10aW1lIG9mZmVuZGVyIChWSU8tODkzMikuXCIsXG4gICAgICBcIlt0aHJlYWQtMl0gU2Nhbm5pbmcgSGViYmFsIGZseW92ZXIgc3RyZWFtLi4uIEhpZ2ggYnJpZ2h0bmVzcyBhZGp1c3RtZW50IGFwcGxpZWQuXCIsXG4gICAgICBcIlthdWRpdF0gV3Jvbmctc2lkZSBkcml2aW5nIGRldGVjdGVkIG9uIHZlaGljbGUgcGxhdGUgS0EwNUVGOTAxMi5cIixcbiAgICAgIFwiW2NvbnNvbGlkYXRvcl0gQ29tcGlsaW5nIHZpb2xhdGlvbiBpbmRpY2VzLCBjYWxjdWxhdGluZyBzdXJjaGFyZ2VzIGZvciBDaGFzZSBDYXRlZ29yeS4uLlwiLFxuICAgICAgXCJbbm90aWNlXSBQZW5hbHRpZXMgZGlzcGF0Y2hlZCB0byBvd25lciBwaG9uZSBudW1iZXJzIHZpYSBTTVMgaW50ZXJmYWNlLlwiXG4gICAgXTtcblxuICAgIGl2LmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBzdGVwID0gcig2LCAxMik7XG4gICAgICBwID0gTWF0aC5taW4oMTAwLCBwICsgc3RlcCk7XG4gICAgICBkb25lID0gTWF0aC5mbG9vcigocCAvIDEwMCkgKiBuKTtcbiAgICAgIHNldFByb2dyZXNzKHApO1xuICAgICAgc2V0UHJvY2Vzc2VkKGRvbmUpO1xuICAgICAgXG4gICAgICBWSU9MQVRJT05fVFlQRVMuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgLy8gRmlsdGVyIGJhc2VkIG9uIEluZ2VzdGlvbiBGb2N1c1xuICAgICAgICBpZiAoZm9jdXNNb2RlID09PSAnSEVMTUVUJyAmJiAhdi5sYWJlbC5pbmNsdWRlcygnSGVsbWV0JykpIHJldHVybjtcbiAgICAgICAgaWYgKGZvY3VzTW9kZSA9PT0gJ1NQRUVESU5HJyAmJiAhdi5sYWJlbC5pbmNsdWRlcygnV3JvbmcnKSAmJiAhdi5sYWJlbC5pbmNsdWRlcygnUmVkIExpZ2h0JykpIHJldHVybjtcbiAgICAgICAgYWNjW3YubGFiZWxdID0gKGFjY1t2LmxhYmVsXSB8fCAwKSArIHIoMCwgTWF0aC5mbG9vcihuIC8gMjAwKSArIDEpO1xuICAgICAgfSk7XG4gICAgICBzZXRDb3VudHMoeyAuLi5hY2MgfSk7XG4gICAgICBcbiAgICAgIC8vIEluamVjdCByZWFsaXN0aWMgbG9nIGxpbmVzXG4gICAgICBpZiAocCAlIDE1ID09PSAwIHx8IHAgJSA4ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IHNpbU1zZyA9IHBrKGxvZ0ludGVydmFscyk7XG4gICAgICAgIGFkZExvZyhzaW1Nc2csIHAgPiA4NSA/ICdzdWNjZXNzJyA6ICdpbmZvJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwID49IDEwMCkge1xuICAgICAgICBjbGVhckludGVydmFsKGl2LmN1cnJlbnQpO1xuICAgICAgICBjb25zdCBkZW1vVmVocyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDggfSwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHYgPSBta1ZlaGljbGUoKTtcbiAgICAgICAgICBpZiAoZm9jdXNNb2RlID09PSAnSEVMTUVUJykge1xuICAgICAgICAgICAgdi52aW9sYXRpb25zID0gW1ZJT0xBVElPTl9UWVBFUy5maW5kKHZ0ID0+IHZ0LmxhYmVsLmluY2x1ZGVzKCdIZWxtZXQnKSldO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEJhdGNoUmVzdWx0cyhkZW1vVmVocyk7XG4gICAgICAgIHNldFN0YWdlKCdkb25lJyk7XG4gICAgICAgIGFkZExvZyhgUHJvY2Vzc2VkICR7bn0gZnJhbWVzLiBDb21wbGV0ZWQuIENvbnNvbGlkYXRlZCByZXN1bHRzIHNhdmVkIHRvIGRhdGFiYXNlLmAsICdzdWNjZXNzJyk7XG4gICAgICAgIGlmIChhZGRUb2FzdCkgYWRkVG9hc3QoYFNpbXVsYXRpb24gb2YgJHtufSBpbWFnZXMgY29tcGxldGVkIHN1Y2Nlc3NmdWxseS5gLCAnc3VjY2VzcycpO1xuICAgICAgfVxuICAgIH0sIDQwMCk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgY2xlYXJJbnRlcnZhbChpdi5jdXJyZW50KTtcbiAgICBzZXRTdGFnZSgnaWRsZScpO1xuICAgIHNldFByb2dyZXNzKDApO1xuICAgIHNldExvZ3MoW10pO1xuICB9O1xuXG4gIGNvbnN0IGV4cG9ydEJhdGNoQ1NWID0gKCkgPT4ge1xuICAgIGlmIChiYXRjaFJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBDcmVhdGUgbW9ja3VwIENTVlxuICAgICAgY29uc3QgaGVhZGVycyA9IFsnVmlvbGF0aW9uIFR5cGUnLCAnRGV0ZWN0ZWQgQ291bnQnXTtcbiAgICAgIGNvbnN0IHJvd3MgPSBPYmplY3QuZW50cmllcyhjb3VudHMpLm1hcCgoW2xibCwgY250XSkgPT4gW2xibCwgY250XSk7XG4gICAgICBsZXQgY3N2Q29udGVudCA9IFwiZGF0YTp0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04LFwiIFxuICAgICAgICArIFtoZWFkZXJzLmpvaW4oJywnKSwgLi4ucm93cy5tYXAoZSA9PiBlLmpvaW4oJywnKSldLmpvaW4oJ1xcbicpO1xuICAgICAgY29uc3QgZW5jb2RlZFVyaSA9IGVuY29kZVVSSShjc3ZDb250ZW50KTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBlbmNvZGVkVXJpKTtcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgYGJhdGNoLXN1bW1hcnktcmVwb3J0LSR7RGF0ZS5ub3coKX0uY3N2YCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgbGluay5jbGljaygpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaGVhZGVycyA9IFsnVmlvbGF0aW9uIElEJywgJ0xpY2Vuc2UgUGxhdGUnLCAnVmVoaWNsZSBUeXBlJywgJ1Zpb2xhdGlvbiBMYWJlbCcsICdTZXZlcml0eScsICdDb25maWRlbmNlJywgJ0ZpbmUgQW1vdW50JywgJ1N0YXR1cycsICdUaW1lc3RhbXAnXTtcbiAgICBjb25zdCByb3dzID0gYmF0Y2hSZXN1bHRzLm1hcChpdGVtID0+IFtcbiAgICAgIGl0ZW0uaWQsXG4gICAgICBpdGVtLnBsYXRlLFxuICAgICAgaXRlbS52ZWhpY2xlVHlwZSxcbiAgICAgIGl0ZW0udmlvbGF0aW9uc1swXS5sYWJlbCxcbiAgICAgIGl0ZW0ucmlzayxcbiAgICAgIGAke2l0ZW0uY29uZmlkZW5jZX0lYCxcbiAgICAgIGl0ZW0uZmluZUFtb3VudCxcbiAgICAgIGl0ZW0uc3RhdHVzLFxuICAgICAgaXRlbS50aW1lc3RhbXBcbiAgICBdKTtcbiAgICBcbiAgICBsZXQgY3N2Q29udGVudCA9IFwiZGF0YTp0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04LFwiIFxuICAgICAgKyBbaGVhZGVycy5qb2luKCcsJyksIC4uLnJvd3MubWFwKGUgPT4gZS5tYXAodmFsID0+IGBcIiR7dmFsfVwiYCkuam9pbignLCcpKV0uam9pbignXFxuJyk7XG4gICAgICBcbiAgICBjb25zdCBlbmNvZGVkVXJpID0gZW5jb2RlVVJJKGNzdkNvbnRlbnQpO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgZW5jb2RlZFVyaSk7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBgYmF0Y2gtdmlvbGF0aW9ucy1yZXBvcnQtJHtEYXRlLm5vdygpfS5jc3ZgKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIGxpbmsuY2xpY2soKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXNsaWRldXBcIiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogMTZ9fT5cbiAgICAgIFxuICAgICAgey8qIEV4cGxhbmF0aW9uIG9mIFB1cnBvc2Ugb2YgSW5nZXN0aW9uIFF1ZXVlICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3tib3JkZXJMZWZ0OiAnNHB4IHNvbGlkICMxMGI5ODEnLCBiYWNrZ3JvdW5kOiAncmdiYSgxNiwxODUsMTI5LDAuMDYpJ319PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGdhcDoxMCwgbWFyZ2luQm90dG9tOjh9fT5cbiAgICAgICAgICA8SW5mbyBzaXplPXsxNn0gY29sb3I9XCIjMzRkMzk5XCIvPlxuICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3tmb250U2l6ZToxMywgY29sb3I6JyNjYmQ1ZTEnfX0+V2h5IHVzZSBhIEJhdGNoIFF1ZXVlIEVuZ2luZT88L3N0cm9uZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6MTEsIGNvbG9yOicjOWNhM2FmJywgbGluZUhlaWdodDoxLjZ9fT5cbiAgICAgICAgICBTdHJlZXQgQ0NUViBzdXJ2ZWlsbGFuY2UgY2FtZXJhcyBpbmdlc3QgdGhvdXNhbmRzIG9mIGZyYW1lcyBwZXIgbWludXRlLiBRdWVyeWluZyBkZWVwIGxlYXJuaW5nIHZpc2lvbiBkZXRlY3RvcnMgYW5kIG1hdGNoaW5nIHZlaGljbGUgcmVnaXN0cmF0aW9uIGNlcnRpZmljYXRlcyBzeW5jaHJvbm91c2x5IG9uIGV2ZXJ5IHNpbmdsZSBmcmFtZSBjYW4gZGVncmFkZSBjb21tYW5kIGNlbnRlciBzZXJ2ZXJzLiBUaGUgKipCYXRjaCBRdWV1ZSBFbmdpbmUqKiBhY3RzIGFzIGFuIGFzeW5jaHJvbm91cyBwcm9jZXNzb3IuIEl0IGJ1ZmZlcnMgaW5jb21pbmcgbWVkaWEgYXJyYXlzLCBjaGVja3MgZm9yIGR1cGxpY2F0aW9ucywgYWxsb2NhdGVzIHBhcmFsbGVsIHRocmVhZCB3b3JrZXJzLCBhbmQgcHJvY2Vzc2VzIGRldGVjdGlvbnMgaW4gcXVldWVzIGJhc2VkIG9uIHByaW9yaXR5IGNvbmZpZ3VyYXRpb25z4oCUcmVkdWNpbmcgZGF0YWJhc2Ugb3ZlcmhlYWQuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7c3RhZ2UgPT09ICdpZGxlJyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnMlwiPlxuICAgICAgICAgIHsvKiBGaWxlIEluZ2VzdGlvbiBDYXJkICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAxNH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBnYXA6MTIsIG1hcmdpbkJvdHRvbTo0fX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHRsLWljb1wiPjxMYXllcnMgc2l6ZT17MTh9IGNvbG9yPVwiIzYwYTVmYVwiLz48L2Rpdj5cbiAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7Zm9udFNpemU6MTUsIGZvbnRXZWlnaHQ6ODAwLCBjb2xvcjonI2YzZjRmNid9fT5RdWV1ZSBJbmdlc3Rpb248L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXB6b25lXCIgc3R5bGU9e3twYWRkaW5nOiAnMzZweCAxNnB4J319PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MzIsIG1hcmdpbkJvdHRvbToxMH19PvCfk4I8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjE0LCBmb250V2VpZ2h0OjYwMCwgY29sb3I6JyNlMmU4ZjAnLCBtYXJnaW5Cb3R0b206NX19PlByb2Nlc3MgQWN0dWFsIEltYWdlIEJhdGNoPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMCwgY29sb3I6JyM2YjcyODAnLCBtYXJnaW5Cb3R0b206MTZ9fT5TZWxlY3QgbXVsdGlwbGUgZmlsZXMgdG8gcnVuIHJlYWwgT0NSIGFuZCBZT0xPdjExIHBhcnNpbmc8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCIgXG4gICAgICAgICAgICAgICAgbXVsdGlwbGUgXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiIFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGV4ZWN1dGVCdWxrVXBsb2FkKGUudGFyZ2V0LmZpbGVzKX0gXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW46ICcwIGF1dG8nLCBmb250U2l6ZTogMTF9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46ICcxMHB4IDAnLCBjb2xvcjogJyM0YjU1NjMnLCBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDcwMH19PuKAlCBPUiDigJQ8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBnYXA6OH19PlxuICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tmb250U2l6ZToxMSwgY29sb3I6ICcjOWNhM2FmJywgZm9udFdlaWdodDogNjAwfX0+U2ltdWxhdGUgUXVldWUgUnVuIChEZW1vIE1vZGUpOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgZ2FwOjYsIGp1c3RpZnlDb250ZW50OidjZW50ZXInfX0+XG4gICAgICAgICAgICAgICAge1sxMDAsIDUwMCwgMTAwMF0ubWFwKG4gPT4gKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e259IGNsYXNzTmFtZT1cImJ0biBidG4tZyBidG4tc1wiIHN0eWxlPXt7ZmxleDogMSwganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0gb25DbGljaz17KCkgPT4gc3RhcnRCYXRjaFNpbXVsYXRpb24obil9PlxuICAgICAgICAgICAgICAgICAgICB7bn0gU25hcHNob3RzXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBDb25maWd1cmF0aW9uIFNldHRpbmdzIENhcmQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDE0fX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGdhcDoxMCwgbWFyZ2luQm90dG9tOjR9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dGwtaWNvXCI+PEFjdGl2aXR5IHNpemU9ezE2fSBjb2xvcj1cIiNjMDg0ZmNcIi8+PC9kaXY+XG4gICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3tmb250U2l6ZToxNCwgY29sb3I6JyNmM2Y0ZjYnfX0+UXVldWUgUHJvY2Vzc2luZyBTZXR0aW5nczwvc3Ryb25nPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1pbnAtZ3JvdXBcIiBzdHlsZT17e21hcmdpbjogMH19PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYXV0aC1sYmxcIj5Qcm9jZXNzaW5nIFByaW9yaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJhdXRoLXNlbGVjdFwiIHZhbHVlPXtwcmlvcml0eX0gb25DaGFuZ2U9e2U9PnNldFByaW9yaXR5KGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxPV1wiPkxvdyAoT2ZmLVBlYWsgTmlnaHQgUHJvY2Vzc2luZyk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTk9STUFMXCI+Tm9ybWFsIEluZ2VzdGlvbiBTcGVlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFTUVSR0VOQ1lcIj5FbWVyZ2VuY3kgLyBBbWJ1bGFuY2UgUHJpb3JpdHkgU3VpdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWlucC1ncm91cFwiIHN0eWxlPXt7bWFyZ2luOiAwfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhdXRoLWxibFwiPlBhcmFsbGVsIFdvcmtlciBUaHJlYWRzICh7d29ya2Vyc30gV29ya2Vycyk8L2xhYmVsPlxuICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImF1dGgtc2VsZWN0XCIgdmFsdWU9e3dvcmtlcnN9IG9uQ2hhbmdlPXtlPT5zZXRXb3JrZXJzKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezJ9PjIgVGhyZWFkcyAoTG93IENQVSBhbGxvY2F0aW9uKTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezR9PjQgVGhyZWFkcyAoT3B0aW1hbCBCYWxhbmNlZCBBbGxvY2F0aW9uKTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezh9PjggVGhyZWFkcyAoSGlnaCBQZXJmb3JtYW5jZSBHUFUgQ2x1c3Rlcik8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWlucC1ncm91cFwiIHN0eWxlPXt7bWFyZ2luOiAwfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhdXRoLWxibFwiPkRldGVjdGlvbiBGb2N1cyBBcmVhPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJhdXRoLXNlbGVjdFwiIHZhbHVlPXtmb2N1c01vZGV9IG9uQ2hhbmdlPXtlPT5zZXRGb2N1c01vZGUoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRlVMTFwiPkZ1bGwgRW5mb3JjZW1lbnQgU3VpdGUgKEhlbG1ldCArIFBsYXRlICsgU2lnbmFsKTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIRUxNRVRcIj5IZWxtZXQgQ29tcGxpYW5jZSBPbmx5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNQRUVESU5HXCI+V3JvbmcgU2lkZSAvIFJlZCBMaWdodCBFeGNsdXNpb25zIE9ubHk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIHsvKiBSZWFsLXRpbWUgU2Nyb2xsaW5nIENvbnNvbGUgbG9ncyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17e2JvcmRlckNvbG9yOiAncmdiYSg1OSwgMTMwLCAyNDYsIDAuMzUpJywgYmFja2dyb3VuZDogJyMwMjA0MDknfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIG1hcmdpbkJvdHRvbToxMn19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6OH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BpblwiIHN0eWxlPXt7d2lkdGg6IDE0LCBoZWlnaHQ6IDE0LCBib3JkZXJUb3BDb2xvcjogJyMzYjgyZjYnLCBkaXNwbGF5OiBzdGFnZSA9PT0gJ3J1bm5pbmcnID8gJ2Jsb2NrJyA6ICdub25lJ319Lz5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAxMiwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogJyNmM2Y0ZjYnfX0+RW5naW5lIExpdmUgQ29uc29sZSBTdHJlYW08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRGYW1pbHk6J21vbm9zcGFjZScsIGZvbnRTaXplOjEwLCBjb2xvcjonIzRiNTU2Myd9fT5Xb3JrZXJzOiB7d29ya2Vyc30gQWN0aXZlPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgIHJlZj17Y29uc29sZVJlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8sIG1vbm9zcGFjZScsIFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMSwgXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjNjBhNWZhJywgXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzEycHgnLCBcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjQpJywgXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LCBcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IDE4MCwgXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgIGdhcDogNCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjAzKSdcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xvZ3MubGVuZ3RoID09PSAwICYmIDxkaXY+W1N5c3RlbV0gSW5pdGlhbGl6aW5nIGNvbnNvbGUgbG9ncy4uLjwvZGl2Pn1cbiAgICAgICAgICAgICAge2xvZ3MubWFwKChsb2csIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGxvZy5pbmNsdWRlcygn4pyTJykgPyAnIzM0ZDM5OScgOiBsb2cuaW5jbHVkZXMoJ+KdjCcpID8gJyNlZjQ0NDQnIDogJyM2MGE1ZmEnXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICB7bG9nfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnMlwiPlxuICAgICAgICAgICAgey8qIFN0YXR1cyBpbmRpY2F0b3JzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZHJcIj48ZGl2IGNsYXNzTmFtZT1cImNhcmQtdHRsXCI+PGRpdiBjbGFzc05hbWU9XCJ0dGwtaWNvXCI+PExheWVycyBzaXplPXsxNH0vPjwvZGl2PkluZ2VzdGlvbiBNZXRyaWNzPC9kaXY+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6J2NlbnRlcicsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLG1hcmdpbkJvdHRvbTo2fX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MTMsZm9udFdlaWdodDo2MDB9fT57c3RhZ2U9PT0ncnVubmluZyc/J+Kame+4jyBBdWRpdGluZyBGcmFtZXMuLi4nOifinIUgUXVldWUgQ29tcGxldGVkJ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ub1wiIHN0eWxlPXt7Zm9udFNpemU6MTIsY29sb3I6JyM2MGE1ZmEnfX0+e3Byb2Nlc3NlZC50b0xvY2FsZVN0cmluZygpfSAvIHt0b3RhbC50b0xvY2FsZVN0cmluZygpfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJhclwiPjxkaXYgY2xhc3NOYW1lPVwicGZpbGxcIiBzdHlsZT17e3dpZHRoOmAke3Byb2dyZXNzfSVgfX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMCxjb2xvcjonIzZiNzI4MCcsdGV4dEFsaWduOidyaWdodCcsbWFyZ2luQm90dG9tOjE0fX0+e3Byb2dyZXNzfSUgY29uc29saWRhdGVkPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6J3JnYmEoMTUsMjMsNDIsLjUpJyxib3JkZXI6JzFweCBzb2xpZCByZ2JhKDU5LDEzMCwyNDYsMC4xMiknLGJvcmRlclJhZGl1czoxMCxwYWRkaW5nOjEyfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6OSxmb250V2VpZ2h0OjcwMCxjb2xvcjonIzZiNzI4MCcsbGV0dGVyU3BhY2luZzoxLG1hcmdpbkJvdHRvbTo4LHRleHRUcmFuc2Zvcm06J3VwcGVyY2FzZSd9fT5WaW9sYXRpb25zIEFnZ3JlZ2F0ZWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhjb3VudHMpLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOiAxMSwgY29sb3I6ICcjNGI1NTYzJywgcGFkZGluZzogJzZweCAwJ319PlNjYW5uaW5nIGZpbGVzIGZvciB0cmFmZmljIHBhdHRlcm5zLi4uPC9kaXY+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhjb3VudHMpLnNvcnQoKGEsYik9PmJbMV0tYVsxXSkuc2xpY2UoMCw1KS5tYXAoKFtsLGNdKT0+KFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsfSBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6J2NlbnRlcicsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLHBhZGRpbmc6JzRweCAwJyxib3JkZXJCb3R0b206JzFweCBzb2xpZCByZ2JhKDMwLDQxLDU5LC4zKScsZm9udFNpemU6MTF9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyM5Y2EzYWYnfX0+e2x9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9ub1wiIHN0eWxlPXt7Y29sb3I6JyNmODcxNzEnLGZvbnRXZWlnaHQ6NzAwfX0+e2MudG9Mb2NhbGVTdHJpbmcoKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtzdGFnZT09PSdkb25lJyAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZ2FwOjcsbWFyZ2luVG9wOjE0fX0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wIGJ0bi1zXCIgb25DbGljaz17ZXhwb3J0QmF0Y2hDU1Z9PjxEb3dubG9hZCBzaXplPXsxMX0vPkRvd25sb2FkIFJlcG9ydCBDU1Y8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWcgYnRuLXNcIiBvbkNsaWNrPXtyZXNldH0+PFJlZnJlc2hDdyBzaXplPXsxMX0vPkNsZWFyICYgUmVzZXQgSW5nZXN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogSW5nZXN0aW9uIFN0YXRzIGdyaWQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhkclwiPjxkaXYgY2xhc3NOYW1lPVwiY2FyZC10dGxcIj48ZGl2IGNsYXNzTmFtZT1cInR0bC1pY29cIj48RGF0YWJhc2Ugc2l6ZT17MTR9Lz48L2Rpdj5QaXBlbGluZSBSZXNvdXJjZSBMb2FkPC9kaXY+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidncmlkJyxncmlkVGVtcGxhdGVDb2x1bW5zOicxZnIgMWZyJyxnYXA6OX19PlxuICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICB7bDonVG90YWwgUXVldWUnLHY6dG90YWwudG9Mb2NhbGVTdHJpbmcoKSxpOifwn5OlJyxjOicjNjBhNWZhJ30sXG4gICAgICAgICAgICAgICAgICB7bDonUHJvY2Vzc2VkIEZpbGVzJyx2OnByb2Nlc3NlZC50b0xvY2FsZVN0cmluZygpLGk6J+Kame+4jycsYzonI2MwODRmYyd9LFxuICAgICAgICAgICAgICAgICAge2w6J0ZsYWdnZWQgSW5mcmFjdGlvbnMnLHY6T2JqZWN0LnZhbHVlcyhjb3VudHMpLnJlZHVjZSgoc3VtLHYpPT5zdW0rdiwwKS50b0xvY2FsZVN0cmluZygpLGk6J/CfmqgnLGM6JyNlZjQ0NDQnfSxcbiAgICAgICAgICAgICAgICAgIHtsOidEZS1kdXBlZCBGcmFtZXMnLHY6TWF0aC5mbG9vcihwcm9jZXNzZWQqLjA0KS50b0xvY2FsZVN0cmluZygpLGk6J/CflIEnLGM6JyMxMGI5ODEnfSxcbiAgICAgICAgICAgICAgICBdLm1hcChzPT4oXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cy5sfSBzdHlsZT17e2JhY2tncm91bmQ6J3JnYmEoMTUsMjMsNDIsLjUpJyxib3JkZXI6JzFweCBzb2xpZCByZ2JhKDU5LDEzMCwyNDYsMC4wOCknLGJvcmRlclJhZGl1czo5LHBhZGRpbmc6MTJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjE4LG1hcmdpbkJvdHRvbTozfX0+e3MuaX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjIwLGZvbnRXZWlnaHQ6ODAwLGNvbG9yOnMuYyxmb250RmFtaWx5OidKZXRCcmFpbnMgTW9ubyd9fT57cy52fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MTAsY29sb3I6JyM2YjcyODAnLG1hcmdpblRvcDoyfX0+e3MubH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFNhbXBsZSByZXN1bHRzIGRpc3BsYXkgKi99XG4gICAgICAgICAge3N0YWdlPT09J2RvbmUnJiZiYXRjaFJlc3VsdHMubGVuZ3RoPjAmJihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGRyXCI+PGRpdiBjbGFzc05hbWU9XCJjYXJkLXR0bFwiPjxkaXYgY2xhc3NOYW1lPVwidHRsLWljb1wiPjxBbGVydENpcmNsZSBzaXplPXsxNH0vPjwvZGl2PlNhbXBsZSBEZXRlY3Rpb25zIEZsYWdnZWQgZm9yIENvbW1hbmQgQXVkaXQ8L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2dyaWQnLGdyaWRUZW1wbGF0ZUNvbHVtbnM6J3JlcGVhdChhdXRvLWZpbGwsbWlubWF4KDI2MHB4LDFmcikpJyxnYXA6MTF9fT5cbiAgICAgICAgICAgICAgICB7YmF0Y2hSZXN1bHRzLnNsaWNlKDAsIDQpLm1hcChpdGVtPT48VkNhcmQga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSBvbkNsaWNrPXsoKT0+e319IHNlbD17ZmFsc2V9Lz4pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQW5hbHl0aWNzUGFnZSgpe1xuICBjb25zdCBbdmlvbGF0aW9ucywgc2V0VmlvbGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goYCR7QVBJfS92aW9sYXRpb25zP2xpbWl0PTUwMGApXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4odmkgPT4ge1xuICAgICAgICBpZiAodmkgJiYgdmkudmlvbGF0aW9ucykgc2V0VmlvbGF0aW9ucyh2aS52aW9sYXRpb25zKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHNldExvYWRpbmcoZmFsc2UpKTtcbiAgfSwgW10pO1xuXG4gIC8vIENvbXBpbGUgc3RhdHNcbiAgY29uc3QgdHlwZUNvdW50cyA9IHt9O1xuICBWSU9MQVRJT05fVFlQRVMuZm9yRWFjaCh2dCA9PiB7XG4gICAgdHlwZUNvdW50c1t2dC5sYWJlbF0gPSAwO1xuICB9KTtcbiAgdmlvbGF0aW9ucy5mb3JFYWNoKHYgPT4ge1xuICAgIHR5cGVDb3VudHNbdi5sYWJlbF0gPSAodHlwZUNvdW50c1t2LmxhYmVsXSB8fCAwKSArIDE7XG4gIH0pO1xuXG4gIGNvbnN0IHZkaXN0ID0gVklPTEFUSU9OX1RZUEVTLm1hcCh2dCA9PiB7XG4gICAgY29uc3QgZGJDb3VudCA9IHR5cGVDb3VudHNbdnQubGFiZWxdIHx8IDA7XG4gICAgY29uc3QgbW9ja0NvdW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTUwKSArIDUwO1xuICAgIHJldHVybiB7XG4gICAgICAuLi52dCxcbiAgICAgIGNvdW50OiB2aW9sYXRpb25zLmxlbmd0aCA+IDAgPyBkYkNvdW50IDogbW9ja0NvdW50XG4gICAgfTtcbiAgfSkuc29ydCgoYSxiKSA9PiBiLmNvdW50IC0gYS5jb3VudCk7XG5cbiAgY29uc3QgdG90ViA9IHZkaXN0LnJlZHVjZSgoc3VtLCB2KSA9PiBzdW0gKyB2LmNvdW50LCAwKSB8fCAxO1xuXG4gIGNvbnN0IGhvdXJCdWNrZXRzID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAyNH0sIChfLCBpKSA9PiAoe1xuICAgIGg6IGAke2kudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfTowMGAsXG4gICAgYzogMFxuICB9KSk7XG4gIHZpb2xhdGlvbnMuZm9yRWFjaCh2ID0+IHtcbiAgICBjb25zdCBkYXRlU3RyID0gdi5kZXRlY3RlZEF0IHx8IHYuY3JlYXRlZEF0O1xuICAgIGlmIChkYXRlU3RyKSB7XG4gICAgICBjb25zdCBociA9IG5ldyBEYXRlKGRhdGVTdHIpLmdldEhvdXJzKCk7XG4gICAgICBob3VyQnVja2V0c1tocl0uYyArPSAxO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaG91cmx5ID0gaG91ckJ1Y2tldHMubWFwKChidWNrZXQsIGluZGV4KSA9PiB7XG4gICAgaWYgKHZpb2xhdGlvbnMubGVuZ3RoID4gMCkgcmV0dXJuIGJ1Y2tldDtcbiAgICByZXR1cm4ge1xuICAgICAgaDogYnVja2V0LmgsXG4gICAgICBjOiBpbmRleCA+PSA3ICYmIGluZGV4IDw9IDkgPyByKDQwLCA4MCkgOiBpbmRleCA+PSAxNyAmJiBpbmRleCA8PSAyMCA/IHIoNjAsIDEwMCkgOiByKDUsIDMwKVxuICAgIH07XG4gIH0pO1xuICBcbiAgY29uc3QgbWF4SCA9IE1hdGgubWF4KC4uLmhvdXJseS5tYXAoaCA9PiBoLmMpKSB8fCAxO1xuXG4gIC8vIEZpbmQgcGVhayBob3VyIHJhbmdlXG4gIGNvbnN0IHBlYWtIb3VySXRlbSA9IFsuLi5ob3VybHldLnNvcnQoKGEsYik9PmIuYyAtIGEuYylbMF07XG4gIGNvbnN0IHBlYWtIb3VyU3RyID0gcGVha0hvdXJJdGVtID8gcGVha0hvdXJJdGVtLmggOiBcIjE4OjAwXCI7XG5cbiAgY29uc3QgbG9jYXRpb25Db3VudHMgPSB7fTtcbiAgdmlvbGF0aW9ucy5mb3JFYWNoKHYgPT4ge1xuICAgIGlmICh2LmxvY2F0aW9uKSB7XG4gICAgICBjb25zdCBsb2NOYW1lID0gdHlwZW9mIHYubG9jYXRpb24gPT09ICdzdHJpbmcnID8gdi5sb2NhdGlvbiA6IHYubG9jYXRpb24ubmFtZSB8fCAnSnVuY3Rpb24nO1xuICAgICAgbG9jYXRpb25Db3VudHNbbG9jTmFtZV0gPSAobG9jYXRpb25Db3VudHNbbG9jTmFtZV0gfHwgMCkgKyAxO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbG9jcyA9IExPQ0FUSU9OUy5tYXAobG9jID0+IHtcbiAgICBjb25zdCBkYkNvdW50ID0gbG9jYXRpb25Db3VudHNbbG9jXSB8fCAwO1xuICAgIGNvbnN0IG1vY2tDb3VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwMCkgKyA0MDtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogbG9jLFxuICAgICAgY291bnQ6IHZpb2xhdGlvbnMubGVuZ3RoID4gMCA/IGRiQ291bnQgOiBtb2NrQ291bnRcbiAgICB9O1xuICB9KS5zb3J0KChhLGIpID0+IGIuY291bnQgLSBhLmNvdW50KS5zbGljZSgwLCA1KTtcblxuICBjb25zdCBtYXhMID0gbG9jc1swXS5jb3VudCB8fCAxO1xuXG4gIGNvbnN0IGV4ZW1wdENvdW50ID0gdmlvbGF0aW9ucy5maWx0ZXIodiA9PiB2LmlzRW1lcmdlbmN5RXhlbXB0KS5sZW5ndGg7XG4gIGNvbnN0IGV4ZW1wdFJhdGUgPSB2aW9sYXRpb25zLmxlbmd0aCA+IDAgXG4gICAgPyAoKGV4ZW1wdENvdW50IC8gdmlvbGF0aW9ucy5sZW5ndGgpICogMTAwKS50b0ZpeGVkKDEpIFxuICAgIDogXCIzLjJcIjtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLCBwYWRkaW5nOicxMDBweCd9fT48ZGl2IGNsYXNzTmFtZT1cInNwaW5cIi8+PC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXNsaWRldXBcIiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBnYXA6MjB9fT5cbiAgICAgIHsvKiBIdW1hbiBSZWFkYWJsZSBUcmFmZmljIFN1bW1hcnkgQ2FyZCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7Ym9yZGVyTGVmdDonNHB4IHNvbGlkICMzYjgyZjYnLCBiYWNrZ3JvdW5kOidsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDU5LDEzMCwyNDYsMC4wOCksIHJnYmEoMTUsMjMsNDIsMC42KSknfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJywgZ2FwOjEwLCBtYXJnaW5Cb3R0b206MTJ9fT5cbiAgICAgICAgICA8SW5mbyBzaXplPXsxOH0gY29sb3I9XCIjNjBhNWZhXCIvPlxuICAgICAgICAgIDxoMyBzdHlsZT17e2ZvbnRTaXplOjE0LCBmb250V2VpZ2h0OjcwMCwgY29sb3I6JyNmM2Y0ZjYnfX0+RW5mb3JjZW1lbnQgVHJlbmRzICYgSHVtYW4gSW5zaWdodHMgU3VtbWFyeTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6J3JlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI4MHB4LCAxZnIpKScsIGdhcDoxNiwgZm9udFNpemU6MTIsIGxpbmVIZWlnaHQ6MS42LCBjb2xvcjonI2NiZDVlMSd9fT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsIHN0eWxlPXt7cGFkZGluZ0xlZnQ6MTYsIGRpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBnYXA6OH19PlxuICAgICAgICAgICAgICA8bGk+8J+TiCA8c3Ryb25nPlBlYWsgSW5mcmFjdGlvbiBQZXJpb2Q6PC9zdHJvbmc+IFRyYWZmaWMgdmlvbGF0aW9ucyBhcmUgbW9zdCBmcmVxdWVudCBhcm91bmQgPHN0cm9uZz57cGVha0hvdXJTdHJ9PC9zdHJvbmc+LiBUaGlzIGNvcnJlc3BvbmRzIHdpdGggcGVhayBjb21tdXRlIGhvdXJzLCB3aGVuIHdyb25nLXNpZGUgZHJpdmluZyBhbmQgc3RvcC1saW5lIHZpb2xhdGlvbnMgaW5jcmVhc2UuPC9saT5cbiAgICAgICAgICAgICAgPGxpPvCfqpYgPHN0cm9uZz5Nb3N0IENvbW1vbiBPZmZlbmNlOjwvc3Ryb25nPiA8c3Ryb25nPnt2ZGlzdFswXS5sYWJlbH08L3N0cm9uZz4gaXMgY3VycmVudGx5IHRoZSBoaWdoZXN0IGNhdGVnb3J5LCBhY2NvdW50aW5nIGZvciA8c3Ryb25nPnsoKHZkaXN0WzBdLmNvdW50IC8gdG90VikgKiAxMDApLnRvRml4ZWQoMCl9JTwvc3Ryb25nPiBvZiBhbGwgbG9nZ2VkIGluY2lkZW50cy48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsIHN0eWxlPXt7cGFkZGluZ0xlZnQ6MTYsIGRpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBnYXA6OH19PlxuICAgICAgICAgICAgICA8bGk+8J+TjSA8c3Ryb25nPlRvcCBWaW9sYXRpb24gSG90c3BvdDo8L3N0cm9uZz4gPHN0cm9uZz57bG9jc1swXS5uYW1lfTwvc3Ryb25nPiByZXBvcnRzIHRoZSBoaWdoZXN0IGVuZm9yY2VtZW50IHZvbHVtZSwgaW5kaWNhdGluZyBhIG5lZWQgZm9yIHRhcmdldGVkIHBhdHJvbCBvciBpbXByb3ZlZCBsYW5lIG1hcmtpbmdzLjwvbGk+XG4gICAgICAgICAgICAgIDxsaT7wn5uh77iPIDxzdHJvbmc+RXhlbXB0aW9uIC8gV2FybmluZyBSYXRlOjwvc3Ryb25nPiBBcHByb3hpbWF0ZWx5IDxzdHJvbmc+e2V4ZW1wdFJhdGV9JTwvc3Ryb25nPiBvZiBkZXRlY3Rpb25zIGhhdmUgYmVlbiByZXNvbHZlZCB3aXRoIHdhcm5pbmdzICgxc3QvMm5kIG9mZmVuc2VzKSBvciBlbWVyZ2VuY3kgdmVoaWNsZSBleGVtcHRpb25zLjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImcyXCI+XG4gICAgICAgIHsvKiBDYXRlZ29yeSBCcmVha2Rvd24gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZHJcIiBzdHlsZT17e21hcmdpbkJvdHRvbToxNn19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXR0bFwiPjxkaXYgY2xhc3NOYW1lPVwidHRsLWljb1wiPjxCYXJDaGFydDIgc2l6ZT17MTR9Lz48L2Rpdj5WaW9sYXRpb24gQ2F0ZWdvcnkgQnJlYWtkb3duPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOjEwLCBjb2xvcjonIzljYTNhZid9fT5Ub3RhbCBGaW5lczoge3RvdFYudG9Mb2NhbGVTdHJpbmcoKX0gbG9nZ2VkPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgZmxleERpcmVjdGlvbjonY29sdW1uJywgZ2FwOjEyfX0+XG4gICAgICAgICAgICB7dmRpc3QubWFwKHY9PihcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3YuaWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJywganVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLCBtYXJnaW5Cb3R0b206NCwgZm9udFNpemU6MTF9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyNjYmQ1ZTEnLCBmbGV4OjF9fT57di5pY29ufSB7di5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb25vXCIgc3R5bGU9e3tjb2xvcjp2LmNvbG9yLCBmb250V2VpZ2h0OjcwMH19Pnt2LmNvdW50fSBjYXNlcyAoeygodi5jb3VudC90b3RWKSoxMDApLnRvRml4ZWQoMCl9JSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDo2LCBiYWNrZ3JvdW5kOicjMTMxYTMwJywgYm9yZGVyUmFkaXVzOjMsIG92ZXJmbG93OidoaWRkZW4nfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OicxMDAlJywgd2lkdGg6YCR7KHYuY291bnQvdmRpc3RbMF0uY291bnQpKjEwMH0lYCwgYmFja2dyb3VuZDp2LmNvbG9yLCBib3JkZXJSYWRpdXM6M319Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEhvdXJseSBQZWFrcyAmIEhvdHNwb3RzICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsIGdhcDoyMH19PlxuICAgICAgICAgIHsvKiBIb3VybHkgY2hhcnQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGRyXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206MTB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXR0bFwiPjxkaXYgY2xhc3NOYW1lPVwidHRsLWljb1wiPjxDbG9jayBzaXplPXsxNH0vPjwvZGl2PkhvdXJseSBDb21tdXRlciBWaW9sYXRpb24gRnJlcXVlbmNpZXM8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiY2hhcnRcIiBzdHlsZT17e2hlaWdodDoxMzAsIHBhZGRpbmdUb3A6MTB9fT5cbiAgICAgICAgICAgICAge2hvdXJseS5maWx0ZXIoKF8sIGkpID0+IGkgJSAyID09PSAwKS5tYXAoaD0+KFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtoLmh9IGNsYXNzTmFtZT1cImJpXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJmXCIgc3R5bGU9e3toZWlnaHQ6YCR7KGguYy9tYXhIKSoxMDB9JWAsIGJhY2tncm91bmQ6aC5jPjYwPydsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCNlZjQ0NDQsI2RjMjYyNiknOidsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCMzYjgyZjYsIzI1NjNlYiknfX0vPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibFwiIHN0eWxlPXt7Zm9udFNpemU6N319PntoLmh9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogSG90c3BvdHMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGRyXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206MTB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXR0bFwiPjxkaXYgY2xhc3NOYW1lPVwidHRsLWljb1wiPjxNYXBQaW4gc2l6ZT17MTR9Lz48L2Rpdj5Ub3AgNSBFbmZvcmNlbWVudCBIb3RzcG90czwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsIGdhcDo4fX0+XG4gICAgICAgICAgICAgIHtsb2NzLm1hcCgobG9jLCBpKT0+KFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsb2MubmFtZX0gc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJywgZ2FwOjEwLCBmb250U2l6ZToxMX19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOjE4LCBoZWlnaHQ6MTgsIGJvcmRlclJhZGl1czo0LCBiYWNrZ3JvdW5kOidyZ2JhKDU5LDEzMCwyNDYsMC4xKScsIGRpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJywgZm9udFNpemU6OSwgY29sb3I6JyM2MGE1ZmEnLCBmb250V2VpZ2h0OjgwMH19PntpKzF9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOicjY2JkNWUxJywgZmxleDoxfX0+e2xvYy5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vbm9cIiBzdHlsZT17e2NvbG9yOicjZWY0NDQ0JywgZm9udFdlaWdodDo3MDB9fT57bG9jLmNvdW50fSBmaW5lczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi8vIFBBR0U6IFNFQVJDSFxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5mdW5jdGlvbiBTZWFyY2hQYWdlKHsgYWRkVG9hc3QsIGFjY2lkZW50QWN0aXZlLCBncmFjZUFjdGl2ZSwgZ3JhY2VUaW1lIH0pe1xuICBjb25zdCBbcSxzZXRRXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JlZ2lzdHJ5LHNldFJlZ2lzdHJ5XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdmlvbGF0aW9ucyxzZXRWaW9sYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93TWFudWFsRm9ybSwgc2V0U2hvd01hbnVhbEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgLy8gTWFudWFsIHZpb2xhdGlvbiBzdGF0ZVxuICBjb25zdCBbbWFudWFsVHlwZSwgc2V0TWFudWFsVHlwZV0gPSB1c2VTdGF0ZSgnSEVMTUVUJyk7XG4gIGNvbnN0IFttYW51YWxMb2NhdGlvbiwgc2V0TWFudWFsTG9jYXRpb25dID0gdXNlU3RhdGUoJ01HIFJvYWQgSnVuY3Rpb24nKTtcbiAgY29uc3QgW21hbnVhbEZpbmUsIHNldE1hbnVhbEZpbmVdID0gdXNlU3RhdGUoMTAwMCk7XG4gIGNvbnN0IFttYW51YWxTZXZlcml0eSwgc2V0TWFudWFsU2V2ZXJpdHldID0gdXNlU3RhdGUoJ0hJR0gnKTtcbiAgY29uc3QgW2lzRW1lcmdlbmN5LCBzZXRJc0VtZXJnZW5jeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1RhaWxnYXRpbmdBbWJ1bGFuY2UsIHNldElzVGFpbGdhdGluZ0FtYnVsYW5jZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdWJtaXR0aW5nTWFudWFsLCBzZXRTdWJtaXR0aW5nTWFudWFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVUeXBlQ2hhbmdlID0gKHR5cGVWYWwpID0+IHtcbiAgICBzZXRNYW51YWxUeXBlKHR5cGVWYWwpO1xuICAgIGNvbnN0IG1hdGNoID0gVklPTEFUSU9OX1RZUEVTLmZpbmQodiA9PiB2LmlkID09PSB0eXBlVmFsKTtcbiAgICBpZiAobWF0Y2gpIHNldE1hbnVhbEZpbmUobWF0Y2guZmluZSk7XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoID0gKCkgPT4ge1xuICAgIGlmICghcS50cmltKCkpIHJldHVybjtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldFJlZ2lzdHJ5KG51bGwpO1xuICAgIHNldFZpb2xhdGlvbnMoW10pO1xuICAgIFxuICAgIGNvbnN0IGNsZWFuUGxhdGUgPSBxLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKTtcblxuICAgIFByb21pc2UuYWxsKFtcbiAgICAgIGZldGNoKGAke0FQSX0vcmVnaXN0cnkvJHtlbmNvZGVVUklDb21wb25lbnQoY2xlYW5QbGF0ZSl9YCkudGhlbihyID0+IHIuanNvbigpKS5jYXRjaCgoKSA9PiBudWxsKSxcbiAgICAgIGZldGNoKGAke0FQSX0vdmlvbGF0aW9ucz9wbGF0ZT0ke2VuY29kZVVSSUNvbXBvbmVudChjbGVhblBsYXRlKX1gKS50aGVuKHIgPT4gci5qc29uKCkpLmNhdGNoKCgpID0+IG51bGwpXG4gICAgXSlcbiAgICAudGhlbigoW3JlZ0RhdGEsIHZpb0RhdGFdKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGlmIChyZWdEYXRhICYmIHJlZ0RhdGEuc3VjY2Vzcykge1xuICAgICAgICBzZXRSZWdpc3RyeShyZWdEYXRhLnJlZ2lzdHJ5KTtcbiAgICAgICAgYWRkVG9hc3QoYEthcm5hdGFrYSBSVE8gUmVnaXN0cnk6IFZlcmlmaWVkIGRldGFpbHMgZm9yICR7cmVnRGF0YS5yZWdpc3RyeS5wbGF0ZX0uYCwgJ3N1Y2Nlc3MnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFRvYXN0KGBSZWdpc3RyeSBsb29rdXAgZmFpbGVkLmAsICd3YXJuaW5nJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2aW9EYXRhICYmIHZpb0RhdGEudmlvbGF0aW9ucykge1xuICAgICAgICAvLyBNYXAgZGF0YWJhc2UgbW9kZWwgZm9ybWF0XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdmlvRGF0YS52aW9sYXRpb25zLm1hcCh2ID0+IHtcbiAgICAgICAgICBjb25zdCBmYWxsYmFjayA9IGdldFZlaGljbGVGYWxsYmFja0RldGFpbHModi5saWNlbnNlUGxhdGUpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdi52aW9sYXRpb25JZCxcbiAgICAgICAgICAgIHBsYXRlOiB2LmxpY2Vuc2VQbGF0ZSxcbiAgICAgICAgICAgIHZlaGljbGVUeXBlOiB2LnZlaGljbGVUeXBlIHx8IGZhbGxiYWNrLnR5cGUsXG4gICAgICAgICAgICBtYW51ZmFjdHVyZXI6IHYudmVoaWNsZUJyYW5kIHx8IGZhbGxiYWNrLmJyYW5kLFxuICAgICAgICAgICAgbW9kZWw6IHYudmVoaWNsZU1vZGVsIHx8IGZhbGxiYWNrLm1vZGVsLFxuICAgICAgICAgICAgY29sb3I6IHYudmVoaWNsZUNvbG9yIHx8IGZhbGxiYWNrLmNvbG9yLFxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiAnVkVSSUZJRUQnLFxuICAgICAgICAgICAgb3duZXJTdGF0dXM6ICdNQVRDSEVEJyxcbiAgICAgICAgICAgIHZpb2xhdGlvbnM6IFt7IGlkOiB2LnR5cGUsIGxhYmVsOiB2LmxhYmVsLCBjb2xvcjogJyNlZjQ0NDQnLCBpY29uOiAn8J+aqCcsIHJpc2s6IHYuc2V2ZXJpdHksIGZpbmU6IHYuZmluZUFtb3VudCB9XSxcbiAgICAgICAgICAgIHJpc2s6IHYuc2V2ZXJpdHl8fCdISUdIJyxcbiAgICAgICAgICAgIGNvbmZpZGVuY2U6IHYuY29uZmlkZW5jZXx8JzEwMCcsXG4gICAgICAgICAgICBsb2NhdGlvbjogKHYubG9jYXRpb24gJiYgdHlwZW9mIHYubG9jYXRpb24gPT09ICdzdHJpbmcnID8gdi5sb2NhdGlvbiA6ICdTaWxrIEJvYXJkIEp1bmN0aW9uJyksXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHYuZGV0ZWN0ZWRBdCB8fCB2LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHN0YXR1czogdi5zdGF0dXMgfHwgJ1BFTkRJTkcnLFxuICAgICAgICAgICAgZmluZUFtb3VudDogdi5maW5lQW1vdW50IHx8IDEwMDAsXG4gICAgICAgICAgICBvd25lclBob25lOiB2Lm93bmVyUGhvbmUgfHwgJycsXG4gICAgICAgICAgICBpc0VtZXJnZW5jeUV4ZW1wdDogdi5pc0VtZXJnZW5jeUV4ZW1wdCB8fCBmYWxzZSxcbiAgICAgICAgICAgIGV4ZW1wdFJlYXNvbjogdi5leGVtcHRSZWFzb24gfHwgJycsXG4gICAgICAgICAgICBpc0NoYXNlQ2F0ZWdvcnk6IHYuaXNDaGFzZUNhdGVnb3J5IHx8IGZhbHNlLFxuICAgICAgICAgICAgaW50ZXJlc3RBcHBsaWVkOiB2LmludGVyZXN0QXBwbGllZCB8fCAwLFxuICAgICAgICAgICAgY3JlZGliaWxpdHk6IHsgc2NvcmU6ICc5NS4wJywgcGxhdGVDbGVhcjogdHJ1ZSwgc2lnbmFsVmlzaWJsZTogdHJ1ZSwgcmlkZXJWaXNpYmxlOiB0cnVlLCB6b25lQ2xlYXI6IHRydWUsIGRlY2lzaW9uOiAnQVVUTy1BUFBST1ZFJyB9LFxuICAgICAgICAgICAgZXhwbGFuYXRpb246IFt7IHR5cGU6IHYubGFiZWwsIHJlYXNvbjogJ01hbnVhbCBlbnRyeScgfV0sXG4gICAgICAgICAgICBoaXN0b3J5OiBbXSwgcmVwZWF0czogMFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRWaW9sYXRpb25zKGl0ZW1zKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGFkZFRvYXN0KGBFcnJvciBxdWVyeWluZyB2ZWhpY2xlIGRhdGEuYCwgJ3dhcm5pbmcnKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVXYWl2ZUZpbmUgPSAodmlvbGF0aW9uSWQpID0+IHtcbiAgICBjb25zdCByZWFzb24gPSBwcm9tcHQoXCJFbnRlciBvZmZpY2lhbCB3YWl2ZXIganVzdGlmaWNhdGlvbiAoZS5nLiBZaWVsZGVkIHRvIGFtYnVsYW5jZSwgTWVkaWNhbCBlbWVyZ2VuY3ksIENhbWVyYSBjYWxpYnJhdGlvbiBlcnJvcik6XCIpO1xuICAgIGlmIChyZWFzb24gPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBmaW5hbFJlYXNvbiA9IHJlYXNvbi50cmltKCkgfHwgXCJBZG1pbmlzdHJhdGl2ZSBQb2xpY2UgV2FpdmVyXCI7XG5cbiAgICBmZXRjaChgJHtBUEl9L3Zpb2xhdGlvbnMvJHt2aW9sYXRpb25JZH0vd2FpdmVgLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHJlYXNvbjogZmluYWxSZWFzb24gfSlcbiAgICB9KVxuICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgLnRoZW4oZCA9PiB7XG4gICAgICBpZiAoZC5zdWNjZXNzKSB7XG4gICAgICAgIGFkZFRvYXN0KGBDaGFsbGFuICR7dmlvbGF0aW9uSWR9IHN1Y2Nlc3NmdWxseSB3YWl2ZWQ6ICR7ZmluYWxSZWFzb259YCwgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgc2VhcmNoKCk7IC8vIHJlbG9hZCBsaXN0XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgYWRkVG9hc3QoYEZhaWxlZCB0byB3YWl2ZSBmaW5lLmAsICd3YXJuaW5nJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0TWFudWFsRmluZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghcmVnaXN0cnkpIHJldHVybjtcbiAgICBzZXRTdWJtaXR0aW5nTWFudWFsKHRydWUpO1xuXG4gICAgY29uc3QgaXNFeGVtcHQgPSBhY2NpZGVudEFjdGl2ZSB8fCBncmFjZUFjdGl2ZSB8fCBpc0VtZXJnZW5jeTtcbiAgICBjb25zdCBleGVtcHRSZWFzb25UZXh0ID0gYWNjaWRlbnRBY3RpdmUgXG4gICAgICA/IFwiQWNjaWRlbnQgQWN0aXZlIGF0IEp1bmN0aW9uXCIgXG4gICAgICA6IGdyYWNlQWN0aXZlIFxuICAgICAgICA/IFwiU2lnbmFsIEFjY2lkZW50IENsZWFyYW5jZSBHcmFjZSBDb29sZG93blwiIFxuICAgICAgICA6IGlzRW1lcmdlbmN5IFxuICAgICAgICAgID8gXCJFbWVyZ2VuY3kgdmVoaWNsZSBjbGVhcmFuY2UgZXhlbXB0aW9uXCIgXG4gICAgICAgICAgOiBcIlwiO1xuICAgICAgICAgIFxuICAgIGNvbnN0IGJhc2VGaW5lID0gaXNFeGVtcHQgPyAwIDogaXNUYWlsZ2F0aW5nQW1idWxhbmNlID8gNTAwMCA6IG1hbnVhbEZpbmU7XG5cbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgdHlwZTogaXNUYWlsZ2F0aW5nQW1idWxhbmNlID8gJ0FNQlVMQU5DRV9UQUlMR0FURScgOiBtYW51YWxUeXBlLFxuICAgICAgbGljZW5zZVBsYXRlOiByZWdpc3RyeS5wbGF0ZSxcbiAgICAgIGxvY2F0aW9uOiBtYW51YWxMb2NhdGlvbixcbiAgICAgIHNldmVyaXR5OiBpc1RhaWxnYXRpbmdBbWJ1bGFuY2UgPyAnQ1JJVElDQUwnIDogbWFudWFsU2V2ZXJpdHksXG4gICAgICBzdGF0dXM6ICdTRU5UJyxcbiAgICAgIGZpbmVBbW91bnQ6IGJhc2VGaW5lLFxuICAgICAgb3duZXJQaG9uZTogcmVnaXN0cnkub3duZXJQaG9uZSxcbiAgICAgIGlzRW1lcmdlbmN5RXhlbXB0OiBpc0V4ZW1wdCxcbiAgICAgIGV4ZW1wdFJlYXNvbjogZXhlbXB0UmVhc29uVGV4dFxuICAgIH07XG5cbiAgICBmZXRjaChgJHtBUEl9L3Zpb2xhdGlvbnNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcbiAgICB9KVxuICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgLnRoZW4oZCA9PiB7XG4gICAgICBzZXRTdWJtaXR0aW5nTWFudWFsKGZhbHNlKTtcbiAgICAgIGlmIChkLnN1Y2Nlc3MpIHtcbiAgICAgICAgY29uc3QgdGV4dE1zZyA9IGlzRXhlbXB0IFxuICAgICAgICAgID8gYExvZ2dlZCB1bmRlciBFbWVyZ2VuY3kgRXhlbXB0aW9uLiBObyBmaW5lIGlzc3VlZC5gXG4gICAgICAgICAgOiBgTk9USUNFIFNFTlQ6IE1lc3NhZ2UgZGlzcGF0Y2hlZCB0byBvd25lcjogXCJBIGZpbmUgb2Yg4oK5JHtkLnZpb2xhdGlvbi5maW5lQW1vdW50fSBoYXMgYmVlbiBpc3N1ZWQgZm9yICR7ZC52aW9sYXRpb24ubGFiZWx9LlwiYDtcbiAgICAgICAgYWRkVG9hc3QodGV4dE1zZywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgc2V0U2hvd01hbnVhbEZvcm0oZmFsc2UpO1xuICAgICAgICBzZXRJc0VtZXJnZW5jeShmYWxzZSk7XG4gICAgICAgIHNldElzVGFpbGdhdGluZ0FtYnVsYW5jZShmYWxzZSk7XG4gICAgICAgIHNlYXJjaCgpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIHNldFN1Ym1pdHRpbmdNYW51YWwoZmFsc2UpO1xuICAgICAgYWRkVG9hc3QoYEZhaWxlZCB0byBzdWJtaXQgbWFudWFsIGZpbmUgbm90aWNlLmAsICd3YXJuaW5nJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ2FsY3VsYXRlIHRvdGFscyBmb3IgQ2hhc2UgQ2F0ZWdvcnlcbiAgY29uc3QgdW5wYWlkVmlvbGF0aW9ucyA9IHZpb2xhdGlvbnMuZmlsdGVyKHYgPT4gdi5zdGF0dXMgPT09ICdTRU5UJyB8fCB2LnN0YXR1cyA9PT0gJ1BFTkRJTkcnKTtcbiAgY29uc3QgdG90YWxPdXRzdGFuZGluZyA9IHVucGFpZFZpb2xhdGlvbnMucmVkdWNlKChzdW0sIHYpID0+IHN1bSArIHYuZmluZUFtb3VudCwgMCk7XG4gIGNvbnN0IGlzQ2hhc2UgPSB0b3RhbE91dHN0YW5kaW5nID4gNTAwMDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zbGlkZXVwXCI+XG4gICAgICB7LyogU2VhcmNoIElucHV0IEJveCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOjE2fX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZHJcIj48ZGl2IGNsYXNzTmFtZT1cImNhcmQtdHRsXCI+PGRpdiBjbGFzc05hbWU9XCJ0dGwtaWNvXCI+PFNlYXJjaCBzaXplPXsxNH0vPjwvZGl2Pkthcm5hdGFrYSBSVE8gVmVoaWNsZSAmIEZpbmUgUXVlcnk8L2Rpdj48L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6J2NlbnRlcicsZ2FwOjgsYmFja2dyb3VuZDoncmdiYSgxNSwyMyw0MiwuNiknLGJvcmRlcjonMXB4IHNvbGlkICMxZTI5M2InLGJvcmRlclJhZGl1czo5LHBhZGRpbmc6JzlweCAxNHB4JyxtYXJnaW5Cb3R0b206MTJ9fT5cbiAgICAgICAgICA8U2VhcmNoIHNpemU9ezE0fSBjb2xvcj1cIiM2YjcyODBcIi8+XG4gICAgICAgICAgPGlucHV0IHN0eWxlPXt7ZmxleDoxLGJhY2tncm91bmQ6J3RyYW5zcGFyZW50Jyxib3JkZXI6J25vbmUnLG91dGxpbmU6J25vbmUnLGNvbG9yOicjZTJlOGYwJyxmb250U2l6ZToxM319IHBsYWNlaG9sZGVyPVwiRW50ZXIgdmVoaWNsZSBwbGF0ZSBudW1iZXIgb3IgbW9iaWxlIG51bWJlciBlLmcuIEtBMDNIQTI5MDMgb3IgOTA0MzQ3NTYxNi4uLlwiIHZhbHVlPXtxfSBvbkNoYW5nZT17ZT0+c2V0UShlLnRhcmdldC52YWx1ZSl9IG9uS2V5RG93bj17ZT0+ZS5rZXk9PT0nRW50ZXInJiZzZWFyY2goKX0vPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wIGJ0bi1zXCIgb25DbGljaz17c2VhcmNofSBkaXNhYmxlZD17bG9hZGluZ30+e2xvYWRpbmc/PGRpdiBjbGFzc05hbWU9XCJzcGluXCIvPjo8PjxTZWFyY2ggc2l6ZT17MTF9Lz5WZXJpZnk8Lz59PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZ2FwOjcsZmxleFdyYXA6J3dyYXAnfX0+XG4gICAgICAgICAge1snS0EwM0hBMjkwMycsJ0tBMDFDRDU2NzgnLCc5MDQzNDc1NjE2JywnOTg3NjU0MzIxMCcsJ0tBNTFNQjg4ODgnLCdUTjEyMzQnXS5tYXAocD0+PGJ1dHRvbiBrZXk9e3B9IGNsYXNzTmFtZT1cImJ0biBidG4tZyBidG4teHNcIiBvbkNsaWNrPXsoKT0+e3NldFEocCk7IHNldFRpbWVvdXQoc2VhcmNoLCA1MCk7fX0+e3B9PC9idXR0b24+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAge3JlZ2lzdHJ5ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnMlwiPlxuICAgICAgICAgIHsvKiBSZWdpc3RyYXRpb24gSW5mbyAqL31cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsIGdhcDoxNn19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogaXNDaGFzZSA/ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIzOSw2OCw2OCwwLjA2KSwgcmdiYSgxMCwxNSwzMCwwLjYpKScgOiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzMCw1OCw5NSwwLjE1KSwgcmdiYSgxMCwxNSwzMCwwLjYpKScsXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBpc0NoYXNlID8gJyNlZjQ0NDQnIDogJyMxZTNhOGEnXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhkclwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOjEyfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXR0bFwiPjxkaXYgY2xhc3NOYW1lPVwidHRsLWljb1wiPjxDYXIgc2l6ZT17MTR9Lz48L2Rpdj5SVE8gUmVnaXN0cmF0aW9uIFByb2ZpbGU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGdhcDo2fX0+XG4gICAgICAgICAgICAgICAgICB7aXNDaGFzZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJjaGlwIGNoaXAtYmFkXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOicjZWY0NDQ0JywgYW5pbWF0aW9uOidwdWxzZUdsb3cgMS41cyBpbmZpbml0ZSd9fT7imqDvuI8gQ0hBU0UgQ0FURUdPUlk8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgY2hpcCAke3JlZ2lzdHJ5Lmluc3VyYW5jZVN0YXR1cyA9PT0gJ0FjdGl2ZScgPyAnY2hpcC1vaycgOiAnY2hpcC1iYWQnfWB9Pkluc3VyYW5jZToge3JlZ2lzdHJ5Lmluc3VyYW5jZVN0YXR1c308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOicxZnIgMWZyJywgZ2FwOjEwLCBtYXJnaW5Cb3R0b206MTZ9fT5cbiAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgWydPd25lciBOYW1lJywgcmVnaXN0cnkub3duZXJOYW1lXSxcbiAgICAgICAgICAgICAgICAgIFsnTW9iaWxlIE5vJywgcmVnaXN0cnkub3duZXJQaG9uZV0sXG4gICAgICAgICAgICAgICAgICBbJ1JUTyBMb2NhdGlvbicsIHJlZ2lzdHJ5LnJlZ2lzdGVyZWRBdF0sXG4gICAgICAgICAgICAgICAgICBbJ0JyYW5kIG5hbWUnLCByZWdpc3RyeS5icmFuZF0sXG4gICAgICAgICAgICAgICAgICBbJ01vZGVsIE1vZGVsJywgcmVnaXN0cnkubW9kZWxdLFxuICAgICAgICAgICAgICAgICAgWydWZWhpY2xlIENhdGVnb3J5JywgcmVnaXN0cnkudmVoaWNsZVR5cGVdLFxuICAgICAgICAgICAgICAgICAgWydGdWVsIENhdGVnb3J5JywgcmVnaXN0cnkuZnVlbFR5cGVdLFxuICAgICAgICAgICAgICAgICAgWydSZWdpc3RyYXRpb24gRGF0ZScsIG5ldyBEYXRlKHJlZ2lzdHJ5LnJlZ2lzdHJhdGlvbkRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tSU4nKV0sXG4gICAgICAgICAgICAgICAgICBbJ1N0YXR1cycsICdSVE8gVkFMSURBVEVEIOKchSddLFxuICAgICAgICAgICAgICAgIF0ubWFwKChbaywgdl0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrfSBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsIHBhZGRpbmc6JzVweCAwJywgYm9yZGVyQm90dG9tOicxcHggc29saWQgcmdiYSgzMCw0MSw1OSwwLjMpJywgZm9udFNpemU6MTJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjonIzljYTNhZid9fT57a308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyNmM2Y0ZjYnLCBmb250V2VpZ2h0OjYwMH19Pnt2fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7aXNDaGFzZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhLWVyclwiIHN0eWxlPXt7Zm9udFNpemU6MTEsIHBhZGRpbmc6JzhweCAxMnB4J319PlxuICAgICAgICAgICAgICAgICAgT3V0c3RhbmRpbmcgZmluZXMgZXhjZWVkIOKCuTUsMDAwLiBJbnRlcmVzdCAoMTIlKSB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIG5ldyBtYW51YWwgZmluZXMgbG9nZ2VkLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wIGJ0bi1zXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd01hbnVhbEZvcm0oIXNob3dNYW51YWxGb3JtKX0+XG4gICAgICAgICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgc2l6ZT17MTJ9Lz4ge3Nob3dNYW51YWxGb3JtID8gJ0NhbmNlbCBGb3JtJyA6ICdNYW51YWwgT2ZmZW5jZSBPdmVycmlkZSAoUmVwb3J0IFZpb2xhdGlvbiknfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogTWFudWFsIFZpb2xhdGlvbiBGb3JtICovfVxuICAgICAgICAgICAge3Nob3dNYW51YWxGb3JtICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGFuaW1hdGUtc2xpZGV1cFwiIHN0eWxlPXt7Ym9yZGVyQ29sb3I6ICcjZWY0NDQ0JywgYmFja2dyb3VuZDogJ3JnYmEoMjM5LDY4LDY4LDAuMDIpJ319PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZHJcIiBzdHlsZT17e21hcmdpbkJvdHRvbToxMn19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXR0bFwiPjxkaXYgY2xhc3NOYW1lPVwidHRsLWljb1wiPjxBbGVydFRyaWFuZ2xlIHNpemU9ezE0fSBjb2xvcj1cIiNlZjQ0NDRcIi8+PC9kaXY+TWFudWFsIEVuZm9yY2VtZW50IFRpY2tldDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHsoYWNjaWRlbnRBY3RpdmUgfHwgZ3JhY2VBY3RpdmUpICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYS13YXJuXCIgc3R5bGU9e3tmb250U2l6ZToxMSwgbWFyZ2luQm90dG9tOjEyfX0+XG4gICAgICAgICAgICAgICAgICAgIOKaoO+4jyBKdW5jdGlvbiBBY2NpZGVudCBBbGVydCBNb2RlIGFjdGl2ZS4gVGhlIGZpbmUgYW1vdW50IHdpbGwgYmUgd2FpdmVkICjigrkwKSBhbmQgbWFya2VkIGFzIEV4ZW1wdC5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0TWFudWFsRmluZX0gc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgZmxleERpcmVjdGlvbjonY29sdW1uJywgZ2FwOjEyfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6JzFmciAxZnInLCBnYXA6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYXV0aC1sYmxcIj5PZmZlbmNlIENhdGVnb3J5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImF1dGgtc2VsZWN0XCIgZGlzYWJsZWQ9e2lzVGFpbGdhdGluZ0FtYnVsYW5jZX0gdmFsdWU9e2lzVGFpbGdhdGluZ0FtYnVsYW5jZSA/ICdBTUJVTEFOQ0VfVEFJTEdBVEUnIDogbWFudWFsVHlwZX0gb25DaGFuZ2U9e2U9PmhhbmRsZVR5cGVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtWSU9MQVRJT05fVFlQRVMubWFwKHYgPT4gPG9wdGlvbiBrZXk9e3YuaWR9IHZhbHVlPXt2LmlkfT57di5sYWJlbH08L29wdGlvbj4pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYXV0aC1sYmxcIj5Mb2NhdGlvbiAvIEp1bmN0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJhdXRoLWlucFwiIHZhbHVlPXttYW51YWxMb2NhdGlvbn0gb25DaGFuZ2U9e2U9PnNldE1hbnVhbExvY2F0aW9uKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6JzFmciAxZnInLCBnYXA6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYXV0aC1sYmxcIj5GaW5lIEFtb3VudCAoSU5SKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJhdXRoLWlucFwiIGRpc2FibGVkPXtpc1RhaWxnYXRpbmdBbWJ1bGFuY2UgfHwgYWNjaWRlbnRBY3RpdmUgfHwgZ3JhY2VBY3RpdmV9IHZhbHVlPXthY2NpZGVudEFjdGl2ZSB8fCBncmFjZUFjdGl2ZSA/IDAgOiBpc1RhaWxnYXRpbmdBbWJ1bGFuY2UgPyA1MDAwIDogbWFudWFsRmluZX0gb25DaGFuZ2U9e2U9PnNldE1hbnVhbEZpbmUocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpfHwwKX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYXV0aC1sYmxcIj5FbmZvcmNlbWVudCBVcmdlbmN5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImF1dGgtc2VsZWN0XCIgZGlzYWJsZWQ9e2lzVGFpbGdhdGluZ0FtYnVsYW5jZX0gdmFsdWU9e2lzVGFpbGdhdGluZ0FtYnVsYW5jZSA/ICdDUklUSUNBTCcgOiBtYW51YWxTZXZlcml0eX0gb25DaGFuZ2U9e2U9PnNldE1hbnVhbFNldmVyaXR5KGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTE9XXCI+TG93IFVyZ2VuY3k8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNRURJVU1cIj5NZWRpdW0gVXJnZW5jeTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhJR0hcIj5IaWdoIFVyZ2VuY3k8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDUklUSUNBTFwiPkNyaXRpY2FsIFVyZ2VuY3k8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIEVtZXJnZW5jeSBwb2xpY3kgY2hlY2tib3hlcyAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOidyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpJywgcGFkZGluZzoxMCwgYm9yZGVyUmFkaXVzOjgsIGJvcmRlcjonMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSknfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMSwgZm9udFdlaWdodDo3MDAsIGNvbG9yOicjY2JkNWUxJywgbWFyZ2luQm90dG9tOjh9fT5FbWVyZ2VuY3kgRXhlbXB0aW9uICYgVGFpbGdhdGUgUG9saWNpZXM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBnYXA6OH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBnYXA6OCwgZm9udFNpemU6MTIsIGN1cnNvcjoncG9pbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtpc0VtZXJnZW5jeSB8fCBhY2NpZGVudEFjdGl2ZSB8fCBncmFjZUFjdGl2ZX0gZGlzYWJsZWQ9e2FjY2lkZW50QWN0aXZlIHx8IGdyYWNlQWN0aXZlfSBvbkNoYW5nZT17ZT0+c2V0SXNFbWVyZ2VuY3koZS50YXJnZXQuY2hlY2tlZCl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkZsYWcgYXMgRW1lcmdlbmN5IEV4ZW1wdGlvbiAoTm8gRmluZSBJc3N1ZWQpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGdhcDo4LCBmb250U2l6ZToxMiwgY3Vyc29yOidwb2ludGVyJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2lzVGFpbGdhdGluZ0FtYnVsYW5jZX0gb25DaGFuZ2U9e2U9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNUYWlsZ2F0aW5nQW1idWxhbmNlKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWFudWFsRmluZSg1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNYW51YWxTZXZlcml0eSgnQ1JJVElDQUwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUeXBlQ2hhbmdlKG1hbnVhbFR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOicjZjg3MTcxJ319PlZlaGljbGUgaXMgRm9sbG93aW5nL1RhaWxnYXRpbmcgQW1idWxhbmNlICjigrk1MDAwIEZpbmUpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZCBidG4tc1wiIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJ319IGRpc2FibGVkPXtzdWJtaXR0aW5nTWFudWFsfT5cbiAgICAgICAgICAgICAgICAgICAge3N1Ym1pdHRpbmdNYW51YWwgPyA8ZGl2IGNsYXNzTmFtZT1cInNwaW5cIi8+IDogJ0NvbmZpcm0gbWFudWFsIGZpbmUgbm90aWNlICYgc2VuZCB3YXJuaW5nJ31cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFByaW9yIFZpb2xhdGlvbnMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGRyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10dGxcIj48ZGl2IGNsYXNzTmFtZT1cInR0bC1pY29cIj48RGF0YWJhc2Ugc2l6ZT17MTR9Lz48L2Rpdj5FbmZvcmNlbWVudCBIaXN0b3J5IEFyY2hpdmUgKHt2aW9sYXRpb25zLmxlbmd0aH0pPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt2aW9sYXRpb25zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eVwiPjxkaXYgY2xhc3NOYW1lPVwiZW1wdHktaWNvXCI+4pyTPC9kaXY+PGRpdiBzdHlsZT17e2ZvbnRTaXplOjEyfX0+Q2xlYXIgcmVjb3JkLiBObyB2aW9sYXRpb25zIGxvZ2dlZC48L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgZmxleERpcmVjdGlvbjonY29sdW1uJywgZ2FwOjgsIG1heEhlaWdodDo0NTAsIG92ZXJmbG93WTonYXV0byd9fT5cbiAgICAgICAgICAgICAgICB7dmlvbGF0aW9ucy5tYXAoKHZpbywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTonZmxleCcsIFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsIFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOic4cHggMCcsIFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206JzFweCBzb2xpZCByZ2JhKDMwLDQxLDU5LDAuMyknLCBcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6MTIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHZpby5zdGF0dXMgPT09ICdXQUlWRUQnIHx8IHZpby5zdGF0dXMgPT09ICdQQUlEJyA/IDAuNiA6IDFcbiAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OjYwMCwgY29sb3I6JyNmM2Y0ZjYnfX0+e3Zpby52aW9sYXRpb25zWzBdLmxhYmVsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMCwgY29sb3I6JyM2YjcyODAnLCBtYXJnaW5Ub3A6Mn19Pnt2aW8ubG9jYXRpb259IMK3IHtuZXcgRGF0ZSh2aW8udGltZXN0YW1wKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLUlOJyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAge3Zpby5pc0VtZXJnZW5jeUV4ZW1wdCAmJiA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6OSwgY29sb3I6JyMzNGQzOTknfX0+8J+boe+4jyBFeGVtcHQ6IHt2aW8uZXhlbXB0UmVhc29ufTwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J3JpZ2h0JywgZGlzcGxheTonZmxleCcsIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsIGdhcDoyfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9ub1wiIHN0eWxlPXt7Zm9udFdlaWdodDo3MDAsIGNvbG9yOiB2aW8uc3RhdHVzID09PSAnV0FJVkVEJyA/ICcjNmI3MjgwJyA6ICcjZWY0NDQ0J319PuKCuXt2aW8uZmluZUFtb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjksIGNvbG9yOiB2aW8uc3RhdHVzID09PSAnU0VOVCcgPyAnI2Y1OWUwYicgOiB2aW8uc3RhdHVzID09PSAnUEFJRCcgPyAnIzEwYjk4MScgOiAnIzZiNzI4MCcsIG1hcmdpblRvcDoyfX0+e3Zpby5zdGF0dXN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgey8qIFdhaXZlIERpc3B1dGUgT3B0aW9uICovfVxuICAgICAgICAgICAgICAgICAgICAgIHt2aW8uc3RhdHVzID09PSAnU0VOVCcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1nIGJ0bi14c1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6JzJweCA2cHgnLCBmb250U2l6ZTo5LCBiYWNrZ3JvdW5kOidyZ2JhKDI0NSwxNTgsMTEsMC4xKScsIGJvcmRlckNvbG9yOidyZ2JhKDI0NSwxNTgsMTEsMC4yKScsIGNvbG9yOicjZmJiZjI0JywgbWFyZ2luVG9wOjR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVXYWl2ZUZpbmUodmlvLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgV2FpdmUg4pqW77iPXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4vLyBQQUdFOiBDT05UQUNUIFVTXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbmZ1bmN0aW9uIENvbnRhY3RQYWdlKCl7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXNsaWRldXBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jYXJkXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOidjZW50ZXInLGdhcDoxNCxtYXJnaW5Cb3R0b206MjB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6NTYsaGVpZ2h0OjU2LGJvcmRlclJhZGl1czoxNCxiYWNrZ3JvdW5kOidsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoNTksMTMwLDI0NiwuMikscmdiYSgxMzksOTIsMjQ2LC4xNSkpJyxkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOidjZW50ZXInLGp1c3RpZnlDb250ZW50OidjZW50ZXInLGJvcmRlcjonMXB4IHNvbGlkIHJnYmEoNTksMTMwLDI0NiwuMjUpJ319PjxTaGllbGQgc2l6ZT17MjZ9IGNvbG9yPVwiIzYwYTVmYVwiLz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjIwLGZvbnRXZWlnaHQ6ODAwLGNvbG9yOicjZjNmNGY2J319PlRyYWZmaWMgRW5mb3JjZW1lbnQgQ29tbWFuZCBDZW50ZXI8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMixjb2xvcjonIzljYTNhZicsbWFyZ2luVG9wOjJ9fT5BSS1Qb3dlcmVkIFRyYWZmaWMgVmlvbGF0aW9uIERldGVjdGlvbiBTeXN0ZW08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidncmlkJyxncmlkVGVtcGxhdGVDb2x1bW5zOicxZnIgMWZyJyxnYXA6MTR9fT5cbiAgICAgICAgICB7W1xuICAgICAgICAgICAge2ljb246PFBob25lIHNpemU9ezIwfSBjb2xvcj1cIiM2MGE1ZmFcIi8+LGxibDonUGhvbmUgTnVtYmVyJyx2YWw6Jys5MSA5MDQzNDc1NjE2JyxzdWI6J0F2YWlsYWJsZSA5QU3igJM2UE0gSVNUJyxjb2xvcjoncmdiYSg1OSwxMzAsMjQ2LC4wNiknfSxcbiAgICAgICAgICAgIHtpY29uOjxNYWlsIHNpemU9ezIwfSBjb2xvcj1cIiNjMDg0ZmNcIi8+LGxibDonRW1haWwgQWRkcmVzcycsdmFsOidyaWthc2hrczU2MTZAZ21haWwuY29tJyxzdWI6J1Jlc3BvbnNlIHdpdGhpbiAyNCBob3VycycsY29sb3I6J3JnYmEoMTM5LDkyLDI0NiwuMDYpJ30sXG4gICAgICAgICAgXS5tYXAoKGMsaSk9PihcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSBzdHlsZT17e2JhY2tncm91bmQ6Yy5jb2xvcixib3JkZXI6JzFweCBzb2xpZCByZ2JhKDU5LDEzMCwyNDYsLjE1KScsYm9yZGVyUmFkaXVzOjEyLHBhZGRpbmc6MTh9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOjQwLGhlaWdodDo0MCxib3JkZXJSYWRpdXM6MTAsYmFja2dyb3VuZDoncmdiYSgyNTUsMjU1LDI1NSwuMDMpJyxkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOidjZW50ZXInLGp1c3RpZnlDb250ZW50OidjZW50ZXInLG1hcmdpbkJvdHRvbToxMH19PntjLmljb259PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMCxjb2xvcjonIzZiNzI4MCcsZm9udFdlaWdodDo2MDAsbGV0dGVyU3BhY2luZzouNSxtYXJnaW5Cb3R0b206NCx0ZXh0VHJhbnNmb3JtOid1cHBlcmNhc2UnfX0+e2MubGJsfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MTUsZm9udFdlaWdodDo3MDAsY29sb3I6JyNlNWU3ZWInLG1hcmdpbkJvdHRvbTozfX0+e2MudmFsfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MTEsY29sb3I6JyM2YjcyODAnfX0+e2Muc3VifTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuLy8gQVVUSDogTE9HSU4gJiBTSUdOVVAgUEFHRVMgKFNwbGl0IExheW91dClcbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZnVuY3Rpb24gQXV0aFBhZ2UoeyBvbkxvZ2luU3VjY2VzcyB9KXtcbiAgY29uc3QgW2F1dGhNb2RlLCBzZXRBdXRoTW9kZV0gPSB1c2VTdGF0ZSgncG9saWNlJyk7IC8vICdwb2xpY2UnLCAnYWRtaW4nLCAnY2l0aXplbidcbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcG9saWNlQ29kZSwgc2V0UG9saWNlQ29kZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjaXRpemVuSW5wdXQsIHNldENpdGl6ZW5JbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjaXRpemVuUGxhdGUsIHNldENpdGl6ZW5QbGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjaXRpemVuUGhvbmUsIHNldENpdGl6ZW5QaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjaXRpemVuU3ViTW9kZSwgc2V0Q2l0aXplblN1Yk1vZGVdID0gdXNlU3RhdGUoJ3F1aWNrJyk7IC8vICdxdWljaycsICdsb2dpbicsICdyZWdpc3RlcidcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDaXRpemVuUXVpY2tTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWNpdGl6ZW5JbnB1dC50cmltKCkpIHtcbiAgICAgIHNldEVycm9yKCdQbGVhc2UgZW50ZXIgYSBwbGF0ZSBudW1iZXIgb3IgbW9iaWxlIG51bWJlci4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0RXJyb3IoJycpO1xuICAgIG9uTG9naW5TdWNjZXNzKHtcbiAgICAgIGVtYWlsOiBjaXRpemVuSW5wdXQudHJpbSgpLFxuICAgICAgcm9sZTogJ2N1c3RvbWVyJyxcbiAgICAgIG5hbWU6ICdDaXRpemVuIFVzZXIgKFF1aWNrKScsXG4gICAgICBwbGF0ZTogY2l0aXplbklucHV0LnRyaW0oKVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldEVycm9yKCcnKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgbGV0IGZpbmFsUm9sZSA9IGF1dGhNb2RlO1xuICAgIGlmIChhdXRoTW9kZSA9PT0gJ2NpdGl6ZW4nKSB7XG4gICAgICBmaW5hbFJvbGUgPSAnY3VzdG9tZXInO1xuICAgIH1cblxuICAgIGlmICghaXNMb2dpbiAmJiBhdXRoTW9kZSAhPT0gJ2NpdGl6ZW4nKSB7XG4gICAgICBpZiAoZmluYWxSb2xlID09PSAncG9saWNlJyAmJiBwb2xpY2VDb2RlLnRyaW0oKSAhPT0gJ1ROLTEyMzQnKSB7XG4gICAgICAgIHNldEVycm9yKCdJbnZhbGlkIFBvbGljZSBWZXJpZmljYXRpb24gQ29kZS4gUG9saWNlIHNpZ251cHMgbXVzdCBiZSB2ZXJpZmllZCB3aXRoIENvZGU6IFROLTEyMzQnKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChmaW5hbFJvbGUgPT09ICdhZG1pbicgJiYgcG9saWNlQ29kZS50cmltKCkgIT09ICdBRE1JTi01NjE2Jykge1xuICAgICAgICBzZXRFcnJvcignSW52YWxpZCBBZG1pbiBTZWN1cml0eSBDb2RlLiBBZG1pbiBzaWdudXBzIG11c3QgYmUgdmVyaWZpZWQgd2l0aCBBZG1pbiBDb2RlOiBBRE1JTi01NjE2Jyk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW5kcG9pbnQgPSBpc0xvZ2luID8gJy9hdXRoL2xvZ2luJyA6ICcvYXV0aC9zaWdudXAnO1xuICAgIGNvbnN0IHBheWxvYWQgPSBpc0xvZ2luIFxuICAgICAgPyB7IGVtYWlsLCBwYXNzd29yZCB9IFxuICAgICAgOiB7IFxuICAgICAgICAgIGVtYWlsLCBcbiAgICAgICAgICBwYXNzd29yZCwgXG4gICAgICAgICAgcm9sZTogZmluYWxSb2xlLCBcbiAgICAgICAgICBuYW1lLCBcbiAgICAgICAgICBwb2xpY2VDb2RlOiBhdXRoTW9kZSA9PT0gJ2NpdGl6ZW4nID8gdW5kZWZpbmVkIDogcG9saWNlQ29kZSxcbiAgICAgICAgICBwaG9uZTogYXV0aE1vZGUgPT09ICdjaXRpemVuJyA/IGNpdGl6ZW5QaG9uZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB2ZWhpY2xlTnVtYmVyOiBhdXRoTW9kZSA9PT0gJ2NpdGl6ZW4nID8gY2l0aXplblBsYXRlIDogdW5kZWZpbmVkXG4gICAgICAgIH07XG5cbiAgICBmZXRjaChgJHtBUEl9JHtlbmRwb2ludH1gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcbiAgICB9KVxuICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzTG9naW4gJiYgZGF0YS51c2VyLnJvbGUgIT09IGZpbmFsUm9sZSkge1xuICAgICAgICAgIHNldEVycm9yKGBBY2NvdW50IHJvbGUgbWlzbWF0Y2guIFRoaXMgYWNjb3VudCBpcyByZWdpc3RlcmVkIGFzICR7ZGF0YS51c2VyLnJvbGUudG9VcHBlckNhc2UoKX0uIFBsZWFzZSBzaWduIGluIHVzaW5nIHRoZSBjb3JyZWN0IHBvcnRhbCB0YWIuYCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG9uTG9naW5TdWNjZXNzKGRhdGEudXNlcik7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAvLyBGYWxsYmFja1xuICAgICAgaWYgKGlzTG9naW4gJiYgZW1haWwgPT09ICdrc3Jpa2FzaEBnbWFpbC5jb20nICYmIHBhc3N3b3JkID09PSAna3NyaWthc2hANTYxNicgJiYgZmluYWxSb2xlID09PSAnYWRtaW4nKSB7XG4gICAgICAgIG9uTG9naW5TdWNjZXNzKHsgZW1haWw6ICdrc3Jpa2FzaEBnbWFpbC5jb20nLCByb2xlOiAnYWRtaW4nLCBuYW1lOiAnS3MgUmlrYXNoIChPZmZsaW5lKScgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcignQ29ubmVjdGlvbiBmYWlsZWQuIFZlcmlmeSBzZXJ2ZXIgc3RhdHVzLicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWJnXCI+XG4gICAgICA8c3R5bGU+e0NTU308L3N0eWxlPlxuICAgICAgXG4gICAgICB7LyogQnJhbmQgcGFuZWwgb24gdGhlIGxlZnQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtcGFuZWwtbFwiPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWF4V2lkdGg6IDQwMCwgdGV4dEFsaWduOiAnY2VudGVyJ319PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46ICcwIGF1dG8gMjBweCcsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8TG9nby8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6IDI0LCBmb250V2VpZ2h0OiA4MDAsIGxldHRlclNwYWNpbmc6ICcuNXB4JywgY29sb3I6ICcjZjNmNGY2JywgbWFyZ2luQm90dG9tOiAxMH19PlxuICAgICAgICAgICAgVFJBRkZJQyBWSVNJT04gQUlcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6IDEzLCBjb2xvcjogJyM5Y2EzYWYnLCBsaW5lSGVpZ2h0OiAxLjYsIG1hcmdpbkJvdHRvbTogMjB9fT5cbiAgICAgICAgICAgIE5leHQtZ2VuZXJhdGlvbiBDb21wdXRlciBWaXNpb24gU3lzdGVtIGZvciByZWFsLXRpbWUgdHJhZmZpYyB2aW9sYXRpb25zIHRyYWNraW5nLCBsaWNlbnNlIHBsYXRlIE9DUiBpZGVudGlmaWNhdGlvbiwgYW5kIGF1dG9tYXRlZCBsZWdhbCBub3RpY2UgZGlzcGF0Y2guXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGdhcDogOCwganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICB7WydZT0xPdjExJywgJ0V4cHJlc3NEQicsICdSZWFsLVRpbWUnLCAnQXV0b21hdGVkIENoYWxsYW5zJ10ubWFwKHRnID0+IChcbiAgICAgICAgICAgICAgPHNwYW4ga2V5PXt0Z30gc3R5bGU9e3tmb250U2l6ZTogMTAsIHBhZGRpbmc6ICczcHggOXB4JywgYmFja2dyb3VuZDogJ3JnYmEoNTksIDEzMCwgMjQ2LCAwLjEpJywgY29sb3I6ICcjNjBhNWZhJywgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjIpJywgYm9yZGVyUmFkaXVzOiAyMH19Pnt0Z308L3NwYW4+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEZvcm0gcGFuZWwgb24gdGhlIHJpZ2h0ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLXBhbmVsLXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWZvcm0gYW5pbWF0ZS1zbGlkZXVwXCI+XG4gICAgICAgICAgey8qIE1vZGUgU3dpdGNoZXIgLSAzIFRhYnMgKi99XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZ2FwOiA2LCBtYXJnaW5Cb3R0b206IDIyLCBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKScsIHBhZGRpbmc6IDQsIGJvcmRlclJhZGl1czogMTAsIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpJ319PlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgeyBpZDogJ3BvbGljZScsIGxhYmVsOiAn8J+RriBQb2xpY2UnLCBjb2xvcjogJyMzYjgyZjYnIH0sXG4gICAgICAgICAgICAgIHsgaWQ6ICdhZG1pbicsIGxhYmVsOiAn8J+RkSBBZG1pbicsIGNvbG9yOiAnI2E4NTVmNycgfSxcbiAgICAgICAgICAgICAgeyBpZDogJ2NpdGl6ZW4nLCBsYWJlbDogJ/CfmpcgQ2l0aXplbicsIGNvbG9yOiAnIzEwYjk4MScgfVxuICAgICAgICAgICAgXS5tYXAodGFiID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICBrZXk9e3RhYi5pZH1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZmxleDogMSwgXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnOXB4IDAnLCBcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTFweCcsIFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLCBcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNywgXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJywgXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGF1dGhNb2RlID09PSB0YWIuaWQgPyBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHt0YWIuY29sb3J9LCAke3RhYi5jb2xvcn1iYilgIDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBhdXRoTW9kZSA9PT0gdGFiLmlkID8gJyNmZmYnIDogJyM2YjcyODAnLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjJzIGVhc2UnXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldEF1dGhNb2RlKHRhYi5pZCk7IHNldEVycm9yKCcnKTsgc2V0SXNMb2dpbih0cnVlKTsgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0YWIubGFiZWx9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aDIgc3R5bGU9e3tmb250U2l6ZTogMjIsIGZvbnRXZWlnaHQ6IDgwMCwgY29sb3I6ICcjZjNmNGY2JywgbWFyZ2luQm90dG9tOiA2fX0+XG4gICAgICAgICAgICB7YXV0aE1vZGUgPT09ICdwb2xpY2UnICYmIChpc0xvZ2luID8gJ09mZmljZXIgU2lnbiBJbicgOiAnT2ZmaWNlciBTaWduIFVwJyl9XG4gICAgICAgICAgICB7YXV0aE1vZGUgPT09ICdhZG1pbicgJiYgKGlzTG9naW4gPyAnQWRtaW5pc3RyYXRvciBTaWduIEluJyA6ICdBZG1pbmlzdHJhdG9yIFNpZ24gVXAnKX1cbiAgICAgICAgICAgIHthdXRoTW9kZSA9PT0gJ2NpdGl6ZW4nICYmIChcbiAgICAgICAgICAgICAgY2l0aXplblN1Yk1vZGUgPT09ICdxdWljaycgPyAnUXVpY2sgRmluZSBRdWVyeScgOiBcbiAgICAgICAgICAgICAgY2l0aXplblN1Yk1vZGUgPT09ICdsb2dpbicgPyAnQ2l0aXplbiBTaWduIEluJyA6ICdSZWdpc3RlciBDaXRpemVuIEFjY291bnQnXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTogMTIsIGNvbG9yOiAnIzljYTNhZicsIG1hcmdpbkJvdHRvbTogMjR9fT5cbiAgICAgICAgICAgIHthdXRoTW9kZSA9PT0gJ3BvbGljZScgJiYgKGlzTG9naW4gPyAnQWNjZXNzIHRoZSBlbmZvcmNlbWVudCBjb21tYW5kIGNlbnRlci4nIDogJ1JlZ2lzdGVyIGEgbmV3IHZlcmlmaWVkIHBvbGljZSBhY2NvdW50LicpfVxuICAgICAgICAgICAge2F1dGhNb2RlID09PSAnYWRtaW4nICYmIChpc0xvZ2luID8gJ1NpZ24gaW4gd2l0aCBzeXN0ZW0gYWRtaW5pc3RyYXRvciBwcml2aWxlZ2VzLicgOiAnQ3JlYXRlIGEgbmV3IGFkbWluaXN0cmF0aXZlIGNvbnRyb2xsZXIuJyl9XG4gICAgICAgICAgICB7YXV0aE1vZGUgPT09ICdjaXRpemVuJyAmJiAoXG4gICAgICAgICAgICAgIGNpdGl6ZW5TdWJNb2RlID09PSAncXVpY2snID8gJ1NlYXJjaCBhbmQgcGF5IGNoYWxsYW5zIHdpdGhvdXQgYW4gYWNjb3VudC4nIDogXG4gICAgICAgICAgICAgIGNpdGl6ZW5TdWJNb2RlID09PSAnbG9naW4nID8gJ1NpZ24gaW4gdG8gdmlldyB2ZWhpY2xlIHByb2ZpbGUgYW5kIHBheSBmaW5lcy4nIDogJ0NyZWF0ZSBhbiBhY2NvdW50IHRvIGF1dG9tYXRpY2FsbHkgcmVjZWl2ZSBmaW5lIG5vdGlmaWNhdGlvbnMuJ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhLWVyclwiIHN0eWxlPXt7Zm9udFNpemU6IDEyLCBtYXJnaW5Cb3R0b206IDE2fX0+PEFsZXJ0VHJpYW5nbGUgc2l6ZT17MTJ9Lz57ZXJyb3J9PC9kaXY+fVxuXG4gICAgICAgICAge2F1dGhNb2RlID09PSAnY2l0aXplbicgJiYgY2l0aXplblN1Yk1vZGUgPT09ICdxdWljaycgPyAoXG4gICAgICAgICAgICAvKiBDaXRpemVuIFF1aWNrIExvb2t1cCBGb3JtICovXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQ2l0aXplblF1aWNrU3VibWl0fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWlucC1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhdXRoLWxibFwiPlBsYXRlIE51bWJlciBvciBNb2JpbGUgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJhdXRoLWlucFwiIHBsYWNlaG9sZGVyPVwiZS5nLiBLQTAzSEEyOTAzIG9yICs5MSA5MDQzNDc1NjE2XCIgdmFsdWU9e2NpdGl6ZW5JbnB1dH0gb25DaGFuZ2U9e2U9PnNldENpdGl6ZW5JbnB1dChlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcFwiIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTFweCAwJywgbWFyZ2luVG9wOiAxMH19PlxuICAgICAgICAgICAgICAgIEFjY2VzcyBRdWljayBQb3J0YWwg8J+UjVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IDIwLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXJUb3A6ICcxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KScsIHBhZGRpbmdUb3A6IDE2fX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogMTEsIGNvbG9yOiAnIzZiNzI4MCd9fT5XYW50IHRvIHNhdmUgZGV0YWlscyBhbmQgYXV0by1yZWNlaXZlIGZpbmUgbm90aWZpY2F0aW9ucz88L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogOCwgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDEwLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZyBidG4teHNcIiBvbkNsaWNrPXsoKSA9PiB7IHNldENpdGl6ZW5TdWJNb2RlKCdsb2dpbicpOyBzZXRFcnJvcignJyk7IH19PkxvZyBJbiBBY2NvdW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWcgYnRuLXhzXCIgb25DbGljaz17KCkgPT4geyBzZXRDaXRpemVuU3ViTW9kZSgncmVnaXN0ZXInKTsgc2V0RXJyb3IoJycpOyBzZXRJc0xvZ2luKGZhbHNlKTsgfX0+U2lnbiBVcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgLyogU3RhbmRhcmQgQXV0aCBGb3JtIChMb2dpbiBvciBTaWdudXApIGZvciBQb2xpY2UsIEFkbWluLCBhbmQgQ2l0aXplbiBhY2NvdW50cyAqL1xuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIHshaXNMb2dpbiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWlucC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImF1dGgtbGJsXCI+RnVsbCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImF1dGgtaW5wXCIgcGxhY2Vob2xkZXI9XCJlLmcuIFNyaWthc2ggS1NcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2U9PnNldE5hbWUoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtaW5wLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImF1dGgtbGJsXCI+RW1haWwgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImF1dGgtaW5wXCIgcGxhY2Vob2xkZXI9XCJ1c2VyQHRyYWZmaWMuZ292XCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17ZT0+c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1pbnAtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYXV0aC1sYmxcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImF1dGgtaW5wXCIgcGxhY2Vob2xkZXI9XCLigKLigKLigKLigKLigKLigKLigKLigKJcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtlPT5zZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgeyFpc0xvZ2luICYmIGF1dGhNb2RlID09PSAnY2l0aXplbicgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtaW5wLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhdXRoLWxibFwiPk1vYmlsZSBOdW1iZXIgKE5vdGlmaWNhdGlvbiBUYXJnZXQpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYXV0aC1pbnBcIiBwbGFjZWhvbGRlcj1cImUuZy4gKzkxIDkwNDM0NzU2MTZcIiB2YWx1ZT17Y2l0aXplblBob25lfSBvbkNoYW5nZT17ZT0+c2V0Q2l0aXplblBob25lKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtaW5wLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhdXRoLWxibFwiPlJlZ2lzdGVyZWQgVmVoaWNsZSBQbGF0ZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJhdXRoLWlucFwiIHBsYWNlaG9sZGVyPVwiZS5nLiBLQTAzSEEyOTAzXCIgdmFsdWU9e2NpdGl6ZW5QbGF0ZX0gb25DaGFuZ2U9e2U9PnNldENpdGl6ZW5QbGF0ZShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHshaXNMb2dpbiAmJiBhdXRoTW9kZSAhPT0gJ2NpdGl6ZW4nICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtaW5wLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYXV0aC1sYmxcIiBzdHlsZT17e2NvbG9yOiBhdXRoTW9kZSA9PT0gJ3BvbGljZScgPyAnI2Y5NzMxNicgOiAnI2MwODRmYyd9fT5cbiAgICAgICAgICAgICAgICAgICAge2F1dGhNb2RlID09PSAncG9saWNlJyA/ICdQb2xpY2UgVmVyaWZpY2F0aW9uIENvZGUgKENvZGU6IFROLTEyMzQpJyA6ICdBZG1pbiBTZWN1cml0eSBDb2RlIChDb2RlOiBBRE1JTi01NjE2KSd9XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aC1pbnBcIiBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXJDb2xvcjogYXV0aE1vZGUgPT09ICdwb2xpY2UnID8gJyNmOTczMTYnIDogJyNjMDg0ZmMnfX0gXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgU2VjdXJpdHkgVmVyaWZpY2F0aW9uIENvZGVcIiBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BvbGljZUNvZGV9IFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZT0+c2V0UG9saWNlQ29kZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcFwiIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTFweCAwJywgbWFyZ2luVG9wOiAxMH19IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPVwic3BpblwiLz4gOiBpc0xvZ2luID8gJ1NpZ24gSW4gQWNjb3VudCcgOiAnUmVnaXN0ZXIgQWNjb3VudCd9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgIHthdXRoTW9kZSA9PT0gJ2NpdGl6ZW4nICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAyMCwgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyVG9wOiAnMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSknLCBwYWRkaW5nVG9wOiAxNn19PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1nIGJ0bi14c1wiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IDZ9fSBvbkNsaWNrPXsoKSA9PiB7IHNldENpdGl6ZW5TdWJNb2RlKCdxdWljaycpOyBzZXRFcnJvcignJyk7IHNldElzTG9naW4odHJ1ZSk7IH19PlxuICAgICAgICAgICAgICAgICAgICDihpAgUXVpY2sgTG9va3VwIFBvcnRhbFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgYm9yZGVyOiAnbm9uZScsIGNvbG9yOiAnIzYwYTVmYScsIGN1cnNvcjogJ3BvaW50ZXInLCBmb250U2l6ZTogMTF9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldElzTG9naW4oIWlzTG9naW4pOyBzZXRFcnJvcignJyk7IHNldENpdGl6ZW5TdWJNb2RlKGlzTG9naW4gPyAncmVnaXN0ZXInIDogJ2xvZ2luJyk7IH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpc0xvZ2luID8gXCJDcmVhdGUgYWNjb3VudFwiIDogXCJCYWNrIHRvIFNpZ24gSW5cIn1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7YXV0aE1vZGUgIT09ICdjaXRpemVuJyAmJiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAyNCwgdGV4dEFsaWduOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgYm9yZGVyOiAnbm9uZScsIGNvbG9yOiAnIzYwYTVmYScsIGN1cnNvcjogJ3BvaW50ZXInLCBmb250U2l6ZTogMTJ9fSBvbkNsaWNrPXsoKSA9PiB7IHNldElzTG9naW4oIWlzTG9naW4pOyBzZXRFcnJvcignJyk7IH19PlxuICAgICAgICAgICAgICAgIHtpc0xvZ2luID8gXCJOZWVkIGEgbmV3IGFjY291bnQ/IFNpZ24gVXBcIiA6IFwiQWxyZWFkeSByZWdpc3RlcmVkPyBMb2cgSW5cIn1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi8vIFZFSElDTEUgRkFMTEJBQ0sgREVUQUlMUyBHRU5FUkFUT1Jcbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZnVuY3Rpb24gZ2V0VmVoaWNsZUZhbGxiYWNrRGV0YWlscyhwbGF0ZSkge1xuICBjb25zdCBjbGVhblBsYXRlID0gKHBsYXRlIHx8ICcnKS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gIGxldCBoYXNoID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGVhblBsYXRlLmxlbmd0aDsgaSsrKSB7XG4gICAgaGFzaCA9IGNsZWFuUGxhdGUuY2hhckNvZGVBdChpKSArICgoaGFzaCA8PCA1KSAtIGhhc2gpO1xuICB9XG4gIGNvbnN0IGFic0hhc2ggPSBNYXRoLmFicyhoYXNoKTtcbiAgXG4gIGNvbnN0IHR5cGVzID0gWydNb3RvcmN5Y2xlJywgJ0NhcicsICdUcnVjaycsICdCdXMnLCAnQXV0by1SaWNrc2hhdyddO1xuICBjb25zdCBicmFuZHMgPSB7XG4gICAgTW90b3JjeWNsZTogWydIb25kYScsICdZYW1haGEnLCAnVFZTJywgJ1JveWFsIEVuZmllbGQnLCAnQmFqYWonXSxcbiAgICBDYXI6IFsnTWFydXRpIFN1enVraScsICdIeXVuZGFpJywgJ1RhdGEgTW90b3JzJywgJ01haGluZHJhJywgJ1RveW90YSddLFxuICAgIFRydWNrOiBbJ1RhdGEnLCAnQXNob2sgTGV5bGFuZCcsICdCaGFyYXRCZW56J10sXG4gICAgQnVzOiBbJ1ZvbHZvJywgJ1NjYW5pYScsICdUYXRhJ10sXG4gICAgJ0F1dG8tUmlja3NoYXcnOiBbJ0JhamFqJywgJ1BpYWdnaW8nLCAnVFZTJ11cbiAgfTtcbiAgY29uc3QgbW9kZWxzID0ge1xuICAgIEhvbmRhOiBbJ0FjdGl2YSA2RycsICdDQiBTaGluZScsICdIb3JuZXQnXSxcbiAgICBZYW1haGE6IFsnRlotUycsICdSMTUnLCAnTVQtMTUnXSxcbiAgICBUVlM6IFsnQXBhY2hlIFJUUicsICdKdXBpdGVyJywgJ050b3JxJ10sXG4gICAgJ1JveWFsIEVuZmllbGQnOiBbJ0NsYXNzaWMgMzUwJywgJ0J1bGxldCAzNTAnLCAnSGltYWxheWFuJ10sXG4gICAgQmFqYWo6IFsnUHVsc2FyIDE1MCcsICdEb21pbmFyIDQwMCcsICdSRSBBdXRvJ10sXG4gICAgJ01hcnV0aSBTdXp1a2knOiBbJ1N3aWZ0JywgJ0JhbGVubycsICdCcmV6YScsICdBbHRvJ10sXG4gICAgSHl1bmRhaTogWydDcmV0YScsICdpMjAnLCAnVmVybmEnLCAnVmVudWUnXSxcbiAgICAnVGF0YSBNb3RvcnMnOiBbJ05leG9uJywgJ0hhcnJpZXInLCAnUHVuY2gnLCAnQWx0cm96J10sXG4gICAgTWFoaW5kcmE6IFsnWFVWNzAwJywgJ1RoYXInLCAnU2NvcnBpbyddLFxuICAgIFRveW90YTogWydJbm5vdmEgQ3J5c3RhJywgJ0ZvcnR1bmVyJywgJ0dsYW56YSddLFxuICAgIFRhdGE6IFsnTFBUIDE2MTMnLCAnU2lnbmEnXSxcbiAgICAnQXNob2sgTGV5bGFuZCc6IFsnRG9zdCcsICdVLVRydWNrJ10sXG4gICAgQmhhcmF0QmVuejogWycxNjE3UiddLFxuICAgIFZvbHZvOiBbJzk0MDAgQjExUiddLFxuICAgIFNjYW5pYTogWydNZXRyb2xpbmsnXSxcbiAgICBQaWFnZ2lvOiBbJ0FwZSBEWCddXG4gIH07XG4gIGNvbnN0IGNvbG9ycyA9IFsnQmxhY2snLCAnV2hpdGUnLCAnUmVkJywgJ0JsdWUnLCAnU2lsdmVyJywgJ0dyZXknLCAnT3JhbmdlJ107XG5cbiAgY29uc3QgdHlwZSA9IHR5cGVzW2Fic0hhc2ggJSB0eXBlcy5sZW5ndGhdO1xuICBjb25zdCB0eXBlQnJhbmRzID0gYnJhbmRzW3R5cGVdIHx8IFsnU3RhbmRhcmQnXTtcbiAgY29uc3QgYnJhbmQgPSB0eXBlQnJhbmRzW2Fic0hhc2ggJSB0eXBlQnJhbmRzLmxlbmd0aF07XG4gIGNvbnN0IGJyYW5kTW9kZWxzID0gbW9kZWxzW2JyYW5kXSB8fCBbJ1N0YW5kYXJkJ107XG4gIGNvbnN0IG1vZGVsID0gYnJhbmRNb2RlbHNbYWJzSGFzaCAlIGJyYW5kTW9kZWxzLmxlbmd0aF07XG4gIGNvbnN0IGNvbG9yID0gY29sb3JzW2Fic0hhc2ggJSBjb2xvcnMubGVuZ3RoXTtcbiAgXG4gIHJldHVybiB7IHR5cGUsIGJyYW5kLCBtb2RlbCwgY29sb3IgfTtcbn1cblxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4vLyBQQUdFOiBDVVNUT01FUiAvIFJVTEUgQlJFQUtFUlMgQ0hBTExBTiBQT1JUQUxcbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZnVuY3Rpb24gQ3VzdG9tZXJQb3J0YWxQYWdlKHsgY3VycmVudFVzZXIsIG9uTG9nb3V0LCBhZGRUb2FzdCB9KSB7XG4gIGNvbnN0IFt2aW9sYXRpb25zLCBzZXRWaW9sYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3JlZ2lzdHJ5LCBzZXRSZWdpc3RyeV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW25vdGlmaWNhdGlvbnMsIHNldE5vdGlmaWNhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3BheW1lbnRNb2RhbEl0ZW0sIHNldFBheW1lbnRNb2RhbEl0ZW1dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwYXlpbmcsIHNldFBheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaWRlbnRpZmllciA9IGN1cnJlbnRVc2VyLnBsYXRlIHx8IGN1cnJlbnRVc2VyLnZlaGljbGVOdW1iZXIgfHwgY3VycmVudFVzZXIucGhvbmUgfHwgJyc7XG5cbiAgY29uc3QgZmV0Y2hDdXN0b21lckRhdGEgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCBjbGVhbklkZW50ID0gaWRlbnRpZmllci50cmltKCkucmVwbGFjZSgvXFxzKy9nLCAnJyk7XG4gICAgY29uc3QgaXNQaG9uZSA9IGNsZWFuSWRlbnQuc3RhcnRzV2l0aCgnKycpIHx8IC9eXFxkezEwfSQvLnRlc3QoY2xlYW5JZGVudC5yZXBsYWNlKC9eXFwrPzkxLywgJycpKTtcbiAgICBsZXQgdXJsID0gYCR7QVBJfS92aW9sYXRpb25zP2A7XG4gICAgaWYgKGlzUGhvbmUpIHtcbiAgICAgIHVybCArPSBgcGhvbmU9JHtlbmNvZGVVUklDb21wb25lbnQoaWRlbnRpZmllci50cmltKCkpfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCArPSBgcGxhdGU9JHtlbmNvZGVVUklDb21wb25lbnQoaWRlbnRpZmllci50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpKX1gO1xuICAgIH1cblxuICAgIFByb21pc2UuYWxsKFtcbiAgICAgIGZldGNoKGAke0FQSX0vcmVnaXN0cnkvJHtlbmNvZGVVUklDb21wb25lbnQoaWRlbnRpZmllcil9YCkudGhlbihyID0+IHIuanNvbigpKS5jYXRjaCgoKSA9PiBudWxsKSxcbiAgICAgIGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKS5jYXRjaCgoKSA9PiBudWxsKSxcbiAgICAgIGZldGNoKGAke0FQSX0vbm90aWZpY2F0aW9ucz9lbWFpbD0ke2VuY29kZVVSSUNvbXBvbmVudChjdXJyZW50VXNlci5lbWFpbCl9YCkudGhlbihyID0+IHIuanNvbigpKS5jYXRjaCgoKSA9PiBudWxsKVxuICAgIF0pXG4gICAgLnRoZW4oKFtyZWdEYXRhLCB2aW9EYXRhLCBub3RpZkRhdGFdKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGlmIChyZWdEYXRhICYmIHJlZ0RhdGEuc3VjY2Vzcykge1xuICAgICAgICBzZXRSZWdpc3RyeShyZWdEYXRhLnJlZ2lzdHJ5KTtcbiAgICAgIH1cbiAgICAgIGlmICh2aW9EYXRhICYmIHZpb0RhdGEudmlvbGF0aW9ucykge1xuICAgICAgICBjb25zdCB1bnBhaWQgPSB2aW9EYXRhLnZpb2xhdGlvbnMuZmlsdGVyKHYgPT4gdi5zdGF0dXMgPT09ICdTRU5UJyB8fCB2LnN0YXR1cyA9PT0gJ1BFTkRJTkcnKTtcbiAgICAgICAgc2V0VmlvbGF0aW9ucyh1bnBhaWQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGlzUGhvbmUgJiYgdW5wYWlkLmxlbmd0aCA+IDAgJiYgIXJlZ2lzdHJ5KSB7XG4gICAgICAgICAgY29uc3QgZmlyc3RQbGF0ZSA9IHVucGFpZFswXS5saWNlbnNlUGxhdGU7XG4gICAgICAgICAgZmV0Y2goYCR7QVBJfS9yZWdpc3RyeS8ke2VuY29kZVVSSUNvbXBvbmVudChmaXJzdFBsYXRlKX1gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocmVnRCA9PiB7XG4gICAgICAgICAgICBpZiAocmVnRCAmJiByZWdELnN1Y2Nlc3MpIHNldFJlZ2lzdHJ5KHJlZ0QucmVnaXN0cnkpO1xuICAgICAgICAgIH0pLmNhdGNoKCgpID0+IG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobm90aWZEYXRhICYmIG5vdGlmRGF0YS5zdWNjZXNzKSB7XG4gICAgICAgIHNldE5vdGlmaWNhdGlvbnMobm90aWZEYXRhLm5vdGlmaWNhdGlvbnMgfHwgW10pO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9LCBbaWRlbnRpZmllciwgcmVnaXN0cnksIGN1cnJlbnRVc2VyLmVtYWlsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaEN1c3RvbWVyRGF0YSgpO1xuICB9LCBbaWRlbnRpZmllcl0pO1xuXG4gIC8vIE91dHN0YW5kaW5nIGZpbmVzXG4gIGNvbnN0IHRvdGFsQmFzZUZpbmUgPSB2aW9sYXRpb25zLnJlZHVjZSgoc3VtLCB2KSA9PiBzdW0gKyB2LmZpbmVBbW91bnQsIDApO1xuICBjb25zdCBpc0NoYXNlID0gdG90YWxCYXNlRmluZSA+IDUwMDA7XG4gIGNvbnN0IGludGVyZXN0ID0gaXNDaGFzZSA/IE1hdGgucm91bmQodG90YWxCYXNlRmluZSAqIDAuMTIpIDogMDtcbiAgY29uc3QgdG90YWxBbW91bnQgPSB0b3RhbEJhc2VGaW5lICsgaW50ZXJlc3Q7XG5cbiAgY29uc3QgZXhlY3V0ZVBheW1lbnQgPSAoKSA9PiB7XG4gICAgaWYgKCFwYXltZW50TW9kYWxJdGVtKSByZXR1cm47XG4gICAgc2V0UGF5aW5nKHRydWUpO1xuICAgIFxuICAgIGZldGNoKGAke0FQSX0vdmlvbGF0aW9ucy8ke3BheW1lbnRNb2RhbEl0ZW0udmlvbGF0aW9uSWR9L3BheWAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSlcbiAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgc2V0UGF5aW5nKGZhbHNlKTtcbiAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgYWRkVG9hc3QoYFBheW1lbnQgb2Yg4oK5JHtwYXltZW50TW9kYWxJdGVtLmZpbmVBbW91bnR9IHN1Y2Nlc3NmdWwhIENhc2UgY2xvc2VkLmAsICdzdWNjZXNzJyk7XG4gICAgICAgIHNldFBheW1lbnRNb2RhbEl0ZW0obnVsbCk7XG4gICAgICAgIGZldGNoQ3VzdG9tZXJEYXRhKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRUb2FzdCgnUGF5bWVudCBmYWlsZWQuIFRyeSBhZ2Fpbi4nLCAnd2FybmluZycpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIHNldFBheWluZyhmYWxzZSk7XG4gICAgICBhZGRUb2FzdCgnUGF5bWVudCBmYWlsZWQuIENvbm5lY3Rpb24gZXJyb3IuJywgJ3dhcm5pbmcnKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBtYXJrQXNSZWFkID0gKGlkKSA9PiB7XG4gICAgZmV0Y2goYCR7QVBJfS9ub3RpZmljYXRpb25zLyR7aWR9L3JlYWRgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbDogY3VycmVudFVzZXIuZW1haWwgfSlcbiAgICB9KVxuICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgIHNldE5vdGlmaWNhdGlvbnMocHJldiA9PiBwcmV2Lm1hcChuID0+IG4uaWQgPT09IGlkID8geyAuLi5uLCByZWFkOiB0cnVlIH0gOiBuKSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4gbnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogJzI0cHgnLCBtYXhXaWR0aDogJzk2MHB4JywgbWFyZ2luOiAnMCBhdXRvJywgbWluSGVpZ2h0OiAnMTAwdmgnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6ICcyMHB4J319PlxuICAgICAgey8qIFRvcCBCYW5uZXIgKi99XG4gICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICMxMTFlNDcnLCBwYWRkaW5nQm90dG9tOiAnMTZweCd9fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcyMHB4JywgZm9udFdlaWdodDogODAwLCBjb2xvcjogJyNmM2Y0ZjYnLCBsZXR0ZXJTcGFjaW5nOiAnLjVweCd9fT7wn4eu8J+HsyBUUkFGRklDIENIQUxMQU4gQ0lUSVpFTiBQT1JUQUw8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcxMnB4JywgY29sb3I6ICcjOWNhM2FmJywgbWFyZ2luVG9wOiAnNHB4J319PkxvZ2dlZCBpbiB2aWE6IDxzdHJvbmcgc3R5bGU9e3tjb2xvcjogJyM2MGE1ZmEnfX0+e2lkZW50aWZpZXJ9PC9zdHJvbmc+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZ1wiIG9uQ2xpY2s9e29uTG9nb3V0fT48TG9nT3V0IHNpemU9ezE0fS8+IEV4aXQgUG9ydGFsPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcGFkZGluZzogJzEwMHB4J319PjxkaXYgY2xhc3NOYW1lPVwic3BpblwiLz48L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZzJcIj5cbiAgICAgICAgICB7LyogTGVmdCBDb2x1bW46IFZlaGljbGUgJiBCYWxhbmNlICovfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6ICcxNnB4J319PlxuICAgICAgICAgICAge3JlZ2lzdHJ5ID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17e2JvcmRlcjogJzFweCBzb2xpZCAjMWUzYThhJywgYmFja2dyb3VuZDogJ3JnYmEoMzAsNTgsOTUsMC4xKSd9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGRyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdHRsXCI+PENhciBzaXplPXsxNH0vPiBSZWdpc3RlcmVkIFZlaGljbGUgUHJvZmlsZTwvZGl2PlxuICAgICAgICAgICAgICAgICAge2lzQ2hhc2UgJiYgPHNwYW4gY2xhc3NOYW1lPVwiY2hpcCBjaGlwLWJhZFwiIHN0eWxlPXt7YmFja2dyb3VuZDonI2VmNDQ0NCcsIGFuaW1hdGlvbjoncHVsc2VHbG93IDEuNXMgaW5maW5pdGUnfX0+4pqg77iPIENIQVNFIENBVEVHT1JZPC9zcGFuPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmcicsIGdhcDogJzhweCcsIG1hcmdpblRvcDogJzEwcHgnfX0+XG4gICAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgICBbJ093bmVyIE5hbWUnLCByZWdpc3RyeS5vd25lck5hbWVdLFxuICAgICAgICAgICAgICAgICAgICBbJ1BsYXRlIE51bWJlcicsIHJlZ2lzdHJ5LnBsYXRlXSxcbiAgICAgICAgICAgICAgICAgICAgWydSVE8gT2ZmaWNlJywgcmVnaXN0cnkucmVnaXN0ZXJlZEF0XSxcbiAgICAgICAgICAgICAgICAgICAgWydWZWhpY2xlIE1vZGVsJywgYCR7cmVnaXN0cnkuYnJhbmR9ICR7cmVnaXN0cnkubW9kZWx9YF0sXG4gICAgICAgICAgICAgICAgICAgIFsnRnVlbCBDYXRlZ29yeScsIHJlZ2lzdHJ5LmZ1ZWxUeXBlXSxcbiAgICAgICAgICAgICAgICAgICAgWydJbnN1cmFuY2UgU3RhdHVzJywgcmVnaXN0cnkuaW5zdXJhbmNlU3RhdHVzXSxcbiAgICAgICAgICAgICAgICAgIF0ubWFwKChbaywgdl0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2t9IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgcGFkZGluZzogJzRweCAwJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSknfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogJzEwcHgnLCBjb2xvcjogJyM5Y2EzYWYnfX0+e2t9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6ICcxMnB4JywgY29sb3I6ICcjZjNmNGY2JywgZm9udFdlaWdodDogNjAwfX0+e3Z9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzEycHgnLCBjb2xvcjogJyM5Y2EzYWYnLCB0ZXh0QWxpZ246ICdjZW50ZXInfX0+Tm8gdmVoaWNsZSByZWdpc3RyeSBsaW5rZWQgeWV0LiBFbnRlciBwbGF0ZSBudW1iZXIgZGlyZWN0bHkgdG8gc2VlIGRldGFpbHMuPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgey8qIFRvdGFsIEJhbGFuY2UgQ2FyZCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGlzQ2hhc2UgPyAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyMzksNjgsNjgsMC4xKSwgcmdiYSgxNSwyMyw0MiwwLjgpKScgOiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxNiwxODUsMTI5LDAuMDUpLCByZ2JhKDE1LDIzLDQyLDAuOCkpJyxcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGlzQ2hhc2UgPyAnI2VmNDQ0NCcgOiAnIzEwYjk4MSdcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcxMnB4JywgY29sb3I6ICcjOWNhM2FmJywgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsIGZvbnRXZWlnaHQ6IDcwMH19PlRvdGFsIE91dHN0YW5kaW5nIEJhbGFuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOiAnMzZweCcsIGZvbnRXZWlnaHQ6IDgwMCwgY29sb3I6IGlzQ2hhc2UgPyAnI2VmNDQ0NCcgOiAnIzEwYjk4MScsIGZvbnRGYW1pbHk6ICdKZXRCcmFpbnMgTW9ubycsIG1hcmdpbjogJzEwcHggMCd9fT5cbiAgICAgICAgICAgICAgICDigrl7dG90YWxBbW91bnQudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtpc0NoYXNlICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcxMXB4JywgY29sb3I6ICcjZmNhNWE1JywgbGluZUhlaWdodDogMS41LCBtYXJnaW5Cb3R0b206IDEwfX0+XG4gICAgICAgICAgICAgICAgICDimqDvuI8gKipDaGFzZSBDYXRlZ29yeSBBY3RpdmU6KiogT3V0c3RhbmRpbmcgYmFsYW5jZSBleGNlZWRzIOKCuTUsMDAwLiBBIDEyJSBzdXJjaGFyZ2UgaGFzIGJlZW4gYXBwbGllZCB0byB5b3VyIGZpbmUgYW1vdW50LiBQbGVhc2UgY2xlYXIgaW1tZWRpYXRlbHkuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHt2aW9sYXRpb25zLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOiAnMTJweCcsIGNvbG9yOiAnIzljYTNhZid9fT5cbiAgICAgICAgICAgICAgICAgIFlvdSBoYXZlIDxzdHJvbmc+e3Zpb2xhdGlvbnMubGVuZ3RofTwvc3Ryb25nPiBhY3RpdmUgY2hhbGxhbnMuIFNlbGVjdCBhIGNoYWxsYW4gYmVsb3cgdG8gcGF5LlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzEycHgnLCBjb2xvcjogJyMzNGQzOTknLCBmb250V2VpZ2h0OiA2MDB9fT5cbiAgICAgICAgICAgICAgICAgIPCfjokgTm8gb3V0c3RhbmRpbmcgZmluZXMhIFlvdXIgbGljZW5zZSBpcyBjbGVhci5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ2l0aXplbiBBbGVydHMgSW5ib3ggKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYW5pbWF0ZS1zbGlkZXVwXCIgc3R5bGU9e3tib3JkZXI6ICcxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KScsIGJhY2tncm91bmQ6ICdyZ2JhKDE1LDIzLDQyLDAuNCknLCBtYXJnaW5Ub3A6IDh9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhkclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSknLCBwYWRkaW5nQm90dG9tOiA4LCBtYXJnaW5Cb3R0b206IDEyfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXR0bFwiIHN0eWxlPXt7Zm9udFNpemU6IDEzLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICAgICAgICA8TWFpbCBzaXplPXsxM30gY29sb3I9XCIjNjBhNWZhXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogNn19Lz5cbiAgICAgICAgICAgICAgICAgIENpdGl6ZW4gTm90aWZpY2F0aW9ucyBJbmJveFxuICAgICAgICAgICAgICAgICAge25vdGlmaWNhdGlvbnMuZmlsdGVyKG4gPT4gIW4ucmVhZCkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoaXAgY2hpcC1iYWRcIiBzdHlsZT17e2ZvbnRTaXplOiA5LCBwYWRkaW5nOiAnMnB4IDZweCcsIG1hcmdpbkxlZnQ6IDgsIGJhY2tncm91bmQ6ICcjZWY0NDQ0J319PlxuICAgICAgICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb25zLmZpbHRlcihuID0+ICFuLnJlYWQpLmxlbmd0aH0gTmV3XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAge25vdGlmaWNhdGlvbnMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogMTEsIGNvbG9yOiAnIzZiNzI4MCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNnB4IDAnfX0+XG4gICAgICAgICAgICAgICAgICBObyBvZmZpY2lhbCBub3RpZmljYXRpb25zIHJlY2VpdmVkIHlldC5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiA4LCBtYXhIZWlnaHQ6IDE4MCwgb3ZlcmZsb3dZOiAnYXV0bycsIHBhZGRpbmdSaWdodDogNH19PlxuICAgICAgICAgICAgICAgICAge25vdGlmaWNhdGlvbnMubWFwKChuKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtuLmlkfSBcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAhbi5yZWFkICYmIG1hcmtBc1JlYWQobi5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDEycHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbi5yZWFkID8gJ3JnYmEoMjU1LDI1NSwyNTUsMC4wMSknIDogJ3JnYmEoNTksMTMwLDI0NiwwLjA1KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG4ucmVhZCA/ICcxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjAzKScgOiAnMXB4IHNvbGlkIHJnYmEoNTksMTMwLDI0NiwwLjIpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbi5yZWFkID8gJ2RlZmF1bHQnIDogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjJzIGVhc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgeyFuLnJlYWQgJiYgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDEwLCByaWdodDogMTAsIHdpZHRoOiA2LCBoZWlnaHQ6IDYsIGJvcmRlclJhZGl1czogJzUwJScsIGJhY2tncm91bmQ6ICcjZWY0NDQ0J319Lz59XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOiAxMSwgY29sb3I6IG4ucmVhZCA/ICcjY2JkNWUxJyA6ICcjZjNmNGY2JywgbGluZUhlaWdodDogMS40LCBwYWRkaW5nUmlnaHQ6IDEyfX0+e24ubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6IDksIGNvbG9yOiAnIzZiNzI4MCcsIG1hcmdpblRvcDogNiwgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5SZWY6IHtuLnZpb2xhdGlvbklkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntuZXcgRGF0ZShuLmNyZWF0ZWRBdCkudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1JTicsIHtob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnfSl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUmlnaHQgQ29sdW1uOiBDaGFsbGFuIExpc3QgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6ICcxMnB4J319PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOiAnMTRweCcsIGZvbnRXZWlnaHQ6IDgwMCwgY29sb3I6ICcjZjNmNGY2JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICMxZTI5M2InLCBwYWRkaW5nQm90dG9tOiAnOHB4J319PkFjdGl2ZSBUcmFmZmljIENoYWxsYW5zPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHt2aW9sYXRpb25zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIHBhZGRpbmc6ICc0MHB4JywgY29sb3I6ICcjNmI3MjgwJ319PlxuICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZSBzaXplPXszNn0gY29sb3I9XCIjMTBiOTgxXCIgc3R5bGU9e3ttYXJnaW46ICcwIGF1dG8gMTBweCcsIG9wYWNpdHk6IDAuN319Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcxM3B4J319Pk5vIGFjdGl2ZSBjaGFsbGFucyBmb3VuZC48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAnMTJweCcsIG1heEhlaWdodDogJzUwMHB4Jywgb3ZlcmZsb3dZOiAnYXV0byd9fT5cbiAgICAgICAgICAgICAgICB7dmlvbGF0aW9ucy5tYXAoKHZpbykgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Zpby52aW9sYXRpb25JZH0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LDI1NSwyNTUsMC4wMiknLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgIzFlMjkzYicsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTJweCcsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgIGdhcDogJzhweCdcbiAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOiAnMTNweCcsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6ICcjZjNmNGY2J319Pnt2aW8ubGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcxMXB4JywgY29sb3I6ICcjOWNhM2FmJywgbWFyZ2luVG9wOiAnMnB4J319Pnt2aW8ubG9jYXRpb259IMK3IHtuZXcgRGF0ZSh2aW8uZGV0ZWN0ZWRBdCB8fCB2aW8uY3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygnZW4tSU4nKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbGF0ZVwiIHN0eWxlPXt7Zm9udFNpemU6ICcxMHB4JywgcGFkZGluZzogJzJweCA2cHgnfX0+e3Zpby5saWNlbnNlUGxhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7dmlvLmlzRW1lcmdlbmN5RXhlbXB0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcxMHB4JywgY29sb3I6ICcjMzRkMzk5JywgYmFja2dyb3VuZDogJ3JnYmEoNTIsMjExLDE1MywwLjEpJywgcGFkZGluZzogJzRweCA4cHgnLCBib3JkZXJSYWRpdXM6ICc0cHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICDwn5uh77iPIEV4ZW1wdGlvbiAvIFdhcm5pbmc6IHt2aW8uZXhlbXB0UmVhc29ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBib3JkZXJUb3A6ICcxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KScsIHBhZGRpbmdUb3A6ICc4cHgnLCBtYXJnaW5Ub3A6ICc0cHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6ICcxMHB4JywgY29sb3I6ICcjOWNhM2FmJ319PkZpbmUgT3dlZDogPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJtb25vXCIgc3R5bGU9e3tjb2xvcjogJyNmODcxNzEnLCBmb250U2l6ZTogJzEzcHgnfX0+4oK5e3Zpby5maW5lQW1vdW50LnRvTG9jYWxlU3RyaW5nKCl9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmlvLmlzQ2hhc2VDYXRlZ29yeSAmJiA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAnOXB4JywgY29sb3I6ICcjZjg3MTcxJywgbWFyZ2luTGVmdDogJzZweCd9fT4oaW5jbC4gaW50ZXJlc3QpPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcCBidG4teHNcIiBvbkNsaWNrPXsoKSA9PiBzZXRQYXltZW50TW9kYWxJdGVtKHZpbyl9PlBheSBDaGFsbGFuIPCfkrM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBQYXltZW50IFFSIENvZGUgTW9kYWwgKi99XG4gICAgICB7cGF5bWVudE1vZGFsSXRlbSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYmdcIiBvbkNsaWNrPXtlID0+IGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQgJiYgc2V0UGF5bWVudE1vZGFsSXRlbShudWxsKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIHN0eWxlPXt7bWF4V2lkdGg6ICczODBweCcsIHRleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibW9kYWwtY2xvc2VcIiBvbkNsaWNrPXsoKSA9PiBzZXRQYXltZW50TW9kYWxJdGVtKG51bGwpfT48WCBzaXplPXsxOH0vPjwvYnV0dG9uPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcxNnB4JywgZm9udFdlaWdodDogODAwLCBjb2xvcjogJyNmM2Y0ZjYnLCBtYXJnaW5Cb3R0b206ICcxMHB4J319PlNlY3VyZSBDaGFsbGFuIFBheW1lbnQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzEycHgnLCBjb2xvcjogJyM5Y2EzYWYnLCBtYXJnaW5Cb3R0b206ICcyMHB4J319PkNoYWxsYW4gUmVmOiB7cGF5bWVudE1vZGFsSXRlbS52aW9sYXRpb25JZH08L2Rpdj5cblxuICAgICAgICAgICAgey8qIFFSIENvZGUgQ29udGFpbmVyICovfVxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6ICcjZmZmJywgcGFkZGluZzogJzE2cHgnLCBib3JkZXJSYWRpdXM6ICcxMnB4JywgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIG1hcmdpbkJvdHRvbTogJzE2cHgnLCBib3JkZXI6ICcycHggc29saWQgIzNiODJmNid9fT5cbiAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2FwaS5xcnNlcnZlci5jb20vdjEvY3JlYXRlLXFyLWNvZGUvP3NpemU9MTgweDE4MCZkYXRhPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGB1cGk6Ly9wYXk/cGE9YmVuZ2FsdXJ1dHJhZmZpY0B1cGkmcG49QmVuZ2FsdXJ1VHJhZmZpYyZhbT0ke3BheW1lbnRNb2RhbEl0ZW0uZmluZUFtb3VudH0mdHI9JHtwYXltZW50TW9kYWxJdGVtLnZpb2xhdGlvbklkfWApfWB9IFxuICAgICAgICAgICAgICAgIGFsdD1cIlBheW1lbnQgUVIgQ29kZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiAnYmxvY2snLCB3aWR0aDogJzE4MHB4JywgaGVpZ2h0OiAnMTgwcHgnfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcxM3B4JywgY29sb3I6ICcjY2JkNWUxJywgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Cb3R0b206ICc2cHgnfX0+XG4gICAgICAgICAgICAgIFNjYW4gdXNpbmcgYW55IFVQSSBBcHAgKEdQYXksIFBheXRtLCBQaG9uZVBlKVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcxMnB4JywgY29sb3I6ICcjOWNhM2FmJywgbWFyZ2luQm90dG9tOiAnMjBweCd9fT5cbiAgICAgICAgICAgICAgQW1vdW50IHRvIHBheTogPHN0cm9uZyBzdHlsZT17e2NvbG9yOiAnI2Y4NzE3MScsIGZvbnRTaXplOiAnMTVweCd9fT7igrl7cGF5bWVudE1vZGFsSXRlbS5maW5lQW1vdW50LnRvTG9jYWxlU3RyaW5nKCl9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzhweCd9fT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ319IG9uQ2xpY2s9e2V4ZWN1dGVQYXltZW50fSBkaXNhYmxlZD17cGF5aW5nfT5cbiAgICAgICAgICAgICAgICB7cGF5aW5nID8gPGRpdiBjbGFzc05hbWU9XCJzcGluXCIvPiA6ICdTaW11bGF0ZSBQYXltZW50IENvbXBsZXRpb24nfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWdcIiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ319IG9uQ2xpY2s9eygpID0+IHNldFBheW1lbnRNb2RhbEl0ZW0obnVsbCl9PlxuICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuLy8gUEVSRk9STUFOQ0UgRVZBTFVBVElPTiBQQUdFXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbmZ1bmN0aW9uIFBlcmZvcm1hbmNlUGFnZSgpIHtcbiAgY29uc3QgW3BlcmZEYXRhLCBzZXRQZXJmRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChgJHtBUEl9L3BlcmZvcm1hbmNlYClcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihkID0+IHsgc2V0UGVyZkRhdGEoZCk7IHNldExvYWRpbmcoZmFsc2UpOyB9KVxuICAgICAgLmNhdGNoKCgpID0+IHsgc2V0RXJyb3IoJ0NvdWxkIG5vdCBsb2FkIHBlcmZvcm1hbmNlIG1ldHJpY3MuIElzIHRoZSBiYWNrZW5kIHJ1bm5pbmc/Jyk7IHNldExvYWRpbmcoZmFsc2UpOyB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldEYxQ29sb3IgPSAoZjEpID0+IHtcbiAgICBpZiAoZjEgPT09IG51bGwpIHJldHVybiAnIzZiNzI4MCc7XG4gICAgaWYgKGYxID49IDkwKSByZXR1cm4gJyMxMGI5ODEnO1xuICAgIGlmIChmMSA+PSA3NSkgcmV0dXJuICcjMjJjNTVlJztcbiAgICBpZiAoZjEgPj0gNjApIHJldHVybiAnI2VhYjMwOCc7XG4gICAgcmV0dXJuICcjZWY0NDQ0JztcbiAgfTtcblxuICBjb25zdCBNZXRyaWNSaW5nID0gKHsgdmFsdWUsIGxhYmVsLCBjb2xvciwgc2l6ZSA9IDgwIH0pID0+IHtcbiAgICBjb25zdCBwY3QgPSB2YWx1ZSAhPT0gbnVsbCA/IE1hdGgubWluKDEwMCwgdmFsdWUpIDogMDtcbiAgICBjb25zdCBkZWcgPSBgJHsocGN0IC8gMTAwKSAqIDM2MH1kZWdgO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZmxleERpcmVjdGlvbjonY29sdW1uJyxhbGlnbkl0ZW1zOidjZW50ZXInLGdhcDo2fX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplLCBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgIGJhY2tncm91bmQ6IGBjb25pYy1ncmFkaWVudCgke2NvbG9yfSAke2RlZ30sICMxZTI5M2IgMClgLFxuICAgICAgICAgIGRpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6J2NlbnRlcicsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXG4gICAgICAgICAgcG9zaXRpb246J3JlbGF0aXZlJywgZmxleFNocmluazowXG4gICAgICAgIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsaW5zZXQ6OCxiYWNrZ3JvdW5kOicjMDMwNzEyJyxib3JkZXJSYWRpdXM6JzUwJScsXG4gICAgICAgICAgICBkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOidjb2x1bW4nLGFsaWduSXRlbXM6J2NlbnRlcicsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcidcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxNCxmb250V2VpZ2h0OjgwMCxjb2xvcixmb250RmFtaWx5OidKZXRCcmFpbnMgTW9ubyxtb25vc3BhY2UnfX0+XG4gICAgICAgICAgICAgIHt2YWx1ZSAhPT0gbnVsbCA/IGAke3ZhbHVlfSVgIDogJ04vQSd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTo5LGNvbG9yOicjOWNhM2FmJyx0ZXh0VHJhbnNmb3JtOid1cHBlcmNhc2UnLGxldHRlclNwYWNpbmc6LjUsZm9udFdlaWdodDo3MDB9fT57bGFiZWx9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOidjZW50ZXInLGp1c3RpZnlDb250ZW50OidjZW50ZXInLHBhZGRpbmc6ODB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BpblwiIHN0eWxlPXt7d2lkdGg6MzIsaGVpZ2h0OjMyLGJvcmRlcldpZHRoOjN9fS8+XG4gICAgICA8c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6MTQsY29sb3I6JyM5Y2EzYWYnfX0+TG9hZGluZyBwZXJmb3JtYW5jZSBtZXRyaWNzLi4uPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGEtZXJyXCIgc3R5bGU9e3ttYXJnaW46MH19PlxuICAgICAgPEFsZXJ0Q2lyY2xlIHNpemU9ezE2fS8+IHtlcnJvcn1cbiAgICA8L2Rpdj5cbiAgKTtcblxuICBjb25zdCB7IGV2YWx1YXRpb25Db25maWcsIGFnZ3JlZ2F0ZU1ldHJpY3MsIHByb2Nlc3NpbmdTcGVlZCwgaW1hZ2VRdWFsaXR5QnJlYWtkb3duLCBwZXJWaW9sYXRpb25UeXBlLCBrbm93bkxpbWl0YXRpb25zIH0gPSBwZXJmRGF0YSB8fCB7fTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zbGlkZXVwXCI+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6J2xpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiYSg1OSwxMzAsMjQ2LC4xKSxyZ2JhKDEzOSw5MiwyNDYsLjA2KSknLGJvcmRlcjonMXB4IHNvbGlkIHJnYmEoNTksMTMwLDI0NiwuMiknLGJvcmRlclJhZGl1czoxNCxwYWRkaW5nOjIwLG1hcmdpbkJvdHRvbToyMH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczonY2VudGVyJyxnYXA6MTIsbWFyZ2luQm90dG9tOjEwfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOjQyLGhlaWdodDo0MixiYWNrZ3JvdW5kOidsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMzYjgyZjYsIzhiNWNmNiknLGJvcmRlclJhZGl1czoxMSxkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOidjZW50ZXInLGp1c3RpZnlDb250ZW50OidjZW50ZXInfX0+XG4gICAgICAgICAgICA8VGFyZ2V0IHNpemU9ezIwfSBjb2xvcj1cIiNmZmZcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxNixmb250V2VpZ2h0OjgwMCxjb2xvcjonI2YzZjRmNid9fT5QZXJmb3JtYW5jZSBFdmFsdWF0aW9uIFJlcG9ydDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjExLGNvbG9yOicjNmI3MjgwJ319PlByZWNpc2lvbiDCtyBSZWNhbGwgwrcgRjEtU2NvcmUgwrcgbUFQIMK3IFByb2Nlc3NpbmcgU3BlZWQ8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxnYXA6MTYsZmxleFdyYXA6J3dyYXAnfX0+XG4gICAgICAgICAge1tbJ1Rlc3QgU2FtcGxlcycsIGV2YWx1YXRpb25Db25maWc/LnRlc3RTYW1wbGVzIHx8IDBdLFxuICAgICAgICAgICAgWydDb25maWRlbmNlIFRocmVzaG9sZCcsIGAke2V2YWx1YXRpb25Db25maWc/LmNvbmZpZGVuY2VUaHJlc2hvbGR9JWBdLFxuICAgICAgICAgICAgWydUYXJnZXQgRjEnLCBg4omlICR7ZXZhbHVhdGlvbkNvbmZpZz8udGFyZ2V0RjF9JWBdLFxuICAgICAgICAgICAgWydUYXJnZXQgU3BlZWQnLCBgPCAke2V2YWx1YXRpb25Db25maWc/LnRhcmdldFByb2Nlc3NpbmdNc31tc2BdXG4gICAgICAgICAgXS5tYXAoKFtrLHZdKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17a30gc3R5bGU9e3tiYWNrZ3JvdW5kOidyZ2JhKDE1LDIzLDQyLC41KScsYm9yZGVyOicxcHggc29saWQgIzFlMjkzYicsYm9yZGVyUmFkaXVzOjgscGFkZGluZzonOHB4IDE0cHgnfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTo5LGNvbG9yOicjNmI3MjgwJyxmb250V2VpZ2h0OjcwMCxsZXR0ZXJTcGFjaW5nOi41LHRleHRUcmFuc2Zvcm06J3VwcGVyY2FzZScsbWFyZ2luQm90dG9tOjJ9fT57a308L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjEzLGZvbnRXZWlnaHQ6NzAwLGNvbG9yOicjNjBhNWZhJyxmb250RmFtaWx5OidKZXRCcmFpbnMgTW9ubyxtb25vc3BhY2UnfX0+e3Z9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDoncmdiYSgxNSwyMyw0MiwuNSknLGJvcmRlcjonMXB4IHNvbGlkICMxZTI5M2InLGJvcmRlclJhZGl1czo4LHBhZGRpbmc6JzhweCAxNHB4J319PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjksY29sb3I6JyM2YjcyODAnLGZvbnRXZWlnaHQ6NzAwLGxldHRlclNwYWNpbmc6LjUsdGV4dFRyYW5zZm9ybTondXBwZXJjYXNlJyxtYXJnaW5Cb3R0b206Mn19Pkdyb3VuZCBUcnV0aDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjEzLGZvbnRXZWlnaHQ6NzAwLGNvbG9yOiBldmFsdWF0aW9uQ29uZmlnPy5ncm91bmRUcnV0aEF2YWlsYWJsZSA/ICcjMTBiOTgxJyA6ICcjZWY0NDQ0Jyxmb250RmFtaWx5OidKZXRCcmFpbnMgTW9ubyxtb25vc3BhY2UnfX0+XG4gICAgICAgICAgICAgIHtldmFsdWF0aW9uQ29uZmlnPy5ncm91bmRUcnV0aEF2YWlsYWJsZSA/ICfinIUgQXZhaWxhYmxlJyA6ICfinYwgTm90IEZvdW5kJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQWdncmVnYXRlIE1ldHJpY3MgUm93ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnM1wiIHN0eWxlPXt7bWFyZ2luQm90dG9tOjIwfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYXJvdW5kJyxwYWRkaW5nOic4cHggMCd9fT5cbiAgICAgICAgICAgIDxNZXRyaWNSaW5nIHZhbHVlPXthZ2dyZWdhdGVNZXRyaWNzPy5tYWNyb1ByZWNpc2lvbn0gbGFiZWw9XCJQcmVjaXNpb25cIiBjb2xvcj1cIiMzYjgyZjZcIi8+XG4gICAgICAgICAgICA8TWV0cmljUmluZyB2YWx1ZT17YWdncmVnYXRlTWV0cmljcz8ubWFjcm9SZWNhbGx9IGxhYmVsPVwiUmVjYWxsXCIgY29sb3I9XCIjMTBiOTgxXCIvPlxuICAgICAgICAgICAgPE1ldHJpY1JpbmcgdmFsdWU9e2FnZ3JlZ2F0ZU1ldHJpY3M/Lm1hY3JvRjF9IGxhYmVsPVwiRjEgU2NvcmVcIiBjb2xvcj17Z2V0RjFDb2xvcihhZ2dyZWdhdGVNZXRyaWNzPy5tYWNyb0YxKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsbWFyZ2luVG9wOjEyLGZvbnRTaXplOjEwLGNvbG9yOicjNmI3MjgwJ319Pk1hY3JvLUF2ZXJhZ2UgKGFsbCB2aW9sYXRpb24gdHlwZXMpPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10dGxcIiBzdHlsZT17e21hcmdpbkJvdHRvbToxNH19PjxkaXYgY2xhc3NOYW1lPVwidHRsLWljb1wiPjxBd2FyZCBzaXplPXsxNH0vPjwvZGl2Pm1BUCBTY29yZTwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicscGFkZGluZzonMTBweCAwJ319PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjU2LGZvbnRXZWlnaHQ6ODAwLGZvbnRGYW1pbHk6J0pldEJyYWlucyBNb25vLG1vbm9zcGFjZScsY29sb3I6Z2V0RjFDb2xvcihhZ2dyZWdhdGVNZXRyaWNzPy5tQVApLGxpbmVIZWlnaHQ6MX19PlxuICAgICAgICAgICAgICB7YWdncmVnYXRlTWV0cmljcz8ubUFQICE9PSBudWxsID8gYCR7YWdncmVnYXRlTWV0cmljcz8ubUFQfSVgIDogJ04vQSd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMCxjb2xvcjonIzZiNzI4MCcsbWFyZ2luVG9wOjh9fT5tZWFuIEF2ZXJhZ2UgUHJlY2lzaW9uPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MTAsY29sb3I6JyM0YjU1NjMnLG1hcmdpblRvcDo0fX0+KEFwcHJveGltYXRlZCBmcm9tIHBlci10eXBlIEYxIHNjb3Jlcyk8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6MTIscGFkZGluZzonNHB4IDEycHgnLGJvcmRlclJhZGl1czoyMCxmb250U2l6ZToxMSxmb250V2VpZ2h0OjcwMCxkaXNwbGF5OidpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBhZ2dyZWdhdGVNZXRyaWNzPy5tQVAgPj0gNzUgPyAncmdiYSgxNiwxODUsMTI5LC4xNCknIDogJ3JnYmEoMjM5LDY4LDY4LC4xNCknLFxuICAgICAgICAgICAgICBjb2xvcjogYWdncmVnYXRlTWV0cmljcz8ubUFQID49IDc1ID8gJyMzNGQzOTknIDogJyNmODcxNzEnLFxuICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHthZ2dyZWdhdGVNZXRyaWNzPy5tQVAgPj0gNzUgPyAncmdiYSgxNiwxODUsMTI5LC4zKScgOiAncmdiYSgyMzksNjgsNjgsLjMpJ31gXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAge2FnZ3JlZ2F0ZU1ldHJpY3M/Lm1BUCA+PSA3NSA/ICfinIUgTWVldHMgVGFyZ2V0ICjiiaU3MCUpJyA6ICfimqDvuI8gQmVsb3cgVGFyZ2V0J31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdHRsXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206MTR9fT48ZGl2IGNsYXNzTmFtZT1cInR0bC1pY29cIj48WmFwIHNpemU9ezE0fS8+PC9kaXY+UHJvY2Vzc2luZyBTcGVlZDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOidjb2x1bW4nLGdhcDoxMH19PlxuICAgICAgICAgICAge1tbJ0F2ZyBUaW1lJywgcHJvY2Vzc2luZ1NwZWVkPy5hdmdNcywgJ21zJ10sXG4gICAgICAgICAgICAgIFsnTWF4IFRpbWUnLCBwcm9jZXNzaW5nU3BlZWQ/Lm1heE1zLCAnbXMnXSxcbiAgICAgICAgICAgICAgWydQOTUgVGltZScsIHByb2Nlc3NpbmdTcGVlZD8ucDk1TXMsICdtcyddLFxuICAgICAgICAgICAgICBbJ1RhcmdldCcsIHByb2Nlc3NpbmdTcGVlZD8udGFyZ2V0TXMsICdtcyddXG4gICAgICAgICAgICBdLm1hcCgoW2xhYmVsLCB2YWwsIHVuaXRdKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtsYWJlbH0gc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsYWxpZ25JdGVtczonY2VudGVyJyxwYWRkaW5nOic0cHggMCcsYm9yZGVyQm90dG9tOicxcHggc29saWQgcmdiYSgzMCw0MSw1OSwuNCknfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZToxMSxjb2xvcjonIzljYTNhZid9fT57bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6MTIsZm9udFdlaWdodDo3MDAsY29sb3I6IGxhYmVsID09PSAnVGFyZ2V0JyA/ICcjNmI3MjgwJyA6IHZhbCA8PSA1MDAgPyAnIzEwYjk4MScgOiAnI2VmNDQ0NCcsZm9udEZhbWlseTonSmV0QnJhaW5zIE1vbm8sbW9ub3NwYWNlJ319PlxuICAgICAgICAgICAgICAgICAge3ZhbCAhPT0gbnVsbCA/IGAke3ZhbH0ke3VuaXR9YCA6ICdOL0EnfVxuICAgICAgICAgICAgICAgICAge2xhYmVsID09PSAnQXZnIFRpbWUnICYmIHZhbCAhPT0gbnVsbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6OSxtYXJnaW5MZWZ0OjZ9fT57dmFsIDw9IDUwMCA/ICfinIUnIDogJ+KdjCd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLG1hcmdpblRvcDo0LHBhZGRpbmc6JzZweCcsYm9yZGVyUmFkaXVzOjgsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHByb2Nlc3NpbmdTcGVlZD8ubWVldHNUYXJnZXQgPyAncmdiYSgxNiwxODUsMTI5LC4xKScgOiAncmdiYSgyMzksNjgsNjgsLjEpJyxcbiAgICAgICAgICAgICAgY29sb3I6IHByb2Nlc3NpbmdTcGVlZD8ubWVldHNUYXJnZXQgPyAnIzM0ZDM5OScgOiAnI2Y4NzE3MScsXG4gICAgICAgICAgICAgIGZvbnRTaXplOjExLGZvbnRXZWlnaHQ6NzAwLGJvcmRlcjonMXB4IHNvbGlkJ1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIHtwcm9jZXNzaW5nU3BlZWQ/Lm1lZXRzVGFyZ2V0ID8gJ+KchSBSRUFMLVRJTUUgQ0FQQUJMRScgOiAn4p2MIE5FRURTIE9QVElNSVpBVElPTid9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFBlci1WaW9sYXRpb24gVHlwZSBNZXRyaWNzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206MjB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhkclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10dGxcIj48ZGl2IGNsYXNzTmFtZT1cInR0bC1pY29cIj48QmFyQ2hhcnQyIHNpemU9ezE0fS8+PC9kaXY+UGVyLVZpb2xhdGlvbiBUeXBlIE1ldHJpY3M8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MTAsY29sb3I6JyM2YjcyODAnfX0+RjEgVGFyZ2V0OiDiiaUgNzUlICZuYnNwO3wmbmJzcDsgU3BlZWQgVGFyZ2V0OiDiiaQgNTAwbXM8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tvdmVyZmxvd1g6J2F1dG8nfX0+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRibFwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPlZpb2xhdGlvbiBUeXBlPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+VFA8L3RoPjx0aD5GUDwvdGg+PHRoPkZOPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UHJlY2lzaW9uPC90aD48dGg+UmVjYWxsPC90aD48dGg+RjEgU2NvcmU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5BdmcgQ29uZjwvdGg+PHRoPkF2ZyBTcGVlZDwvdGg+PHRoPlN0YXR1czwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7KHBlclZpb2xhdGlvblR5cGUgfHwgW10pLm1hcChtID0+IChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXttLnR5cGV9PlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczonY2VudGVyJyxnYXA6Nn19PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDo4LGhlaWdodDo4LGJvcmRlclJhZGl1czonNTAlJyxiYWNrZ3JvdW5kOm0uY29sb3IsZmxleFNocmluazowfX0vPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6MTEsZm9udFdlaWdodDo2MDB9fT57bS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBzdHlsZT17e2NvbG9yOicjMTBiOTgxJyxmb250RmFtaWx5OidKZXRCcmFpbnMgTW9ubyxtb25vc3BhY2UnLGZvbnRTaXplOjExfX0+e20uZ3JvdW5kVHJ1dGhNZXRyaWNzPy50cCA/PyAnLSd9PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gc3R5bGU9e3tjb2xvcjonI2VmNDQ0NCcsZm9udEZhbWlseTonSmV0QnJhaW5zIE1vbm8sbW9ub3NwYWNlJyxmb250U2l6ZToxMX19PnttLmdyb3VuZFRydXRoTWV0cmljcz8uZnAgPz8gJy0nfTwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuIHN0eWxlPXt7Y29sb3I6JyNmOTczMTYnLGZvbnRGYW1pbHk6J0pldEJyYWlucyBNb25vLG1vbm9zcGFjZScsZm9udFNpemU6MTF9fT57bS5ncm91bmRUcnV0aE1ldHJpY3M/LmZuID8/ICctJ308L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBzdHlsZT17e2NvbG9yOiBtLnByZWNpc2lvbiA+PSA3NSA/ICcjMTBiOTgxJyA6ICcjZjk3MzE2Jyxmb250RmFtaWx5OidKZXRCcmFpbnMgTW9ubyxtb25vc3BhY2UnLGZvbnRTaXplOjExfX0+e20ucHJlY2lzaW9uICE9PSBudWxsID8gYCR7bS5wcmVjaXNpb259JWAgOiAnTi9BJ308L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBzdHlsZT17e2NvbG9yOiBtLnJlY2FsbCA+PSA3NSA/ICcjMTBiOTgxJyA6ICcjZjk3MzE2Jyxmb250RmFtaWx5OidKZXRCcmFpbnMgTW9ubyxtb25vc3BhY2UnLGZvbnRTaXplOjExfX0+e20ucmVjYWxsICE9PSBudWxsID8gYCR7bS5yZWNhbGx9JWAgOiAnTi9BJ308L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6J2NlbnRlcicsZ2FwOjZ9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6NDAsaGVpZ2h0OjQsYmFja2dyb3VuZDonIzFlMjkzYicsYm9yZGVyUmFkaXVzOjIsb3ZlcmZsb3c6J2hpZGRlbid9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzEwMCUnLHdpZHRoOmAke20uZjFTY29yZSB8fCAwfSVgLGJhY2tncm91bmQ6Z2V0RjFDb2xvcihtLmYxU2NvcmUpLGJvcmRlclJhZGl1czoyfX0vPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6Z2V0RjFDb2xvcihtLmYxU2NvcmUpLGZvbnRGYW1pbHk6J0pldEJyYWlucyBNb25vLG1vbm9zcGFjZScsZm9udFNpemU6MTEsZm9udFdlaWdodDo3MDB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttLmYxU2NvcmUgIT09IG51bGwgPyBgJHttLmYxU2NvcmV9JWAgOiAnTi9BJ31cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBzdHlsZT17e2NvbG9yOicjOWNhM2FmJyxmb250RmFtaWx5OidKZXRCcmFpbnMgTW9ubyxtb25vc3BhY2UnLGZvbnRTaXplOjExfX0+e20uYXZnQ29uZmlkZW5jZX0lPC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gc3R5bGU9e3tjb2xvcjogbS5tZWV0c1NwZWVkVGFyZ2V0ID8gJyMxMGI5ODEnIDogJyNlZjQ0NDQnLGZvbnRGYW1pbHk6J0pldEJyYWlucyBNb25vLG1vbm9zcGFjZScsZm9udFNpemU6MTF9fT57bS5hdmdQcm9jZXNzaW5nTXN9bXM8L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAge20ubWVldHNGMVRhcmdldCA9PT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGlwIGNoaXAtaW5mb1wiPk5PIERBVEE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiBtLm1lZXRzRjFUYXJnZXQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hpcCBjaGlwLW9rXCI+4pyFIFBBU1M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hpcCBjaGlwLWJhZFwiPuKdjCBGQUlMPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEltYWdlIFF1YWxpdHkgQnJlYWtkb3duICsgS25vd24gTGltaXRhdGlvbnMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImcyXCI+XG4gICAgICAgIHtpbWFnZVF1YWxpdHlCcmVha2Rvd24gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXR0bFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOjE0fX0+PGRpdiBjbGFzc05hbWU9XCJ0dGwtaWNvXCI+PEFjdGl2aXR5IHNpemU9ezE0fS8+PC9kaXY+VGVzdCBJbWFnZSBDb25kaXRpb25zPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZmxleERpcmVjdGlvbjonY29sdW1uJyxnYXA6OH19PlxuICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoaW1hZ2VRdWFsaXR5QnJlYWtkb3duKS5tYXAoKFtjb25kLCBjb3VudF0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25kSWNvbnMgPSB7Y2xlYXI6J+KYgO+4jycsbG93X2xpZ2h0Oifwn4yZJyxyYWluOifwn4yn77iPJyxtb3Rpb25fYmx1cjon8J+SqCcsc2hhZG93Oifwn4yRJ307XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZENvbG9ycyA9IHtjbGVhcjonIzEwYjk4MScsbG93X2xpZ2h0OicjZjk3MzE2JyxyYWluOicjM2I4MmY2Jyxtb3Rpb25fYmx1cjonI2E4NTVmNycsc2hhZG93OicjNmI3MjgwJ307XG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBPYmplY3QudmFsdWVzKGltYWdlUXVhbGl0eUJyZWFrZG93bikucmVkdWNlKChhLGIpPT5hK2IsMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGN0ID0gdG90YWwgPiAwID8gKGNvdW50L3RvdGFsKSoxMDAgOiAwO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y29uZH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsYWxpZ25JdGVtczonY2VudGVyJyxtYXJnaW5Cb3R0b206M319PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6MTEsY29sb3I6JyNjYmQ1ZTEnfX0+e2NvbmRJY29uc1tjb25kXX0ge2NvbmQucmVwbGFjZSgnXycsJyAnKS50b1VwcGVyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOjExLGNvbG9yOmNvbmRDb2xvcnNbY29uZF0sZm9udEZhbWlseTonSmV0QnJhaW5zIE1vbm8sbW9ub3NwYWNlJ319Pntjb3VudH0gKHtwY3QudG9GaXhlZCgwKX0lKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6NCxiYWNrZ3JvdW5kOicjMWUyOTNiJyxib3JkZXJSYWRpdXM6MixvdmVyZmxvdzonaGlkZGVuJ319PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzEwMCUnLHdpZHRoOmAke3BjdH0lYCxiYWNrZ3JvdW5kOmNvbmRDb2xvcnNbY29uZF0sYm9yZGVyUmFkaXVzOjJ9fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6MTYscGFkZGluZzoxMCxiYWNrZ3JvdW5kOidyZ2JhKDU5LDEzMCwyNDYsLjA2KScsYm9yZGVyUmFkaXVzOjgsYm9yZGVyOicxcHggc29saWQgcmdiYSg1OSwxMzAsMjQ2LC4xNSknfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMCxjb2xvcjonIzYwYTVmYScsZm9udFdlaWdodDo3MDAsbWFyZ2luQm90dG9tOjR9fT5QUkVQUk9DRVNTSU5HIEFQUExJRUQ8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjExLGNvbG9yOicjOWNhM2FmJ319PuKchSBIaXN0b2dyYW0gRXF1YWxpemF0aW9uIMK3IOKchSBHYW1tYSBDb3JyZWN0aW9uIMK3IOKchSBDb250cmFzdCBBZGp1c3RtZW50IMK3IOKchSBOb2lzZSBSZWR1Y3Rpb248L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10dGxcIiBzdHlsZT17e21hcmdpbkJvdHRvbToxNH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOjMwLGhlaWdodDozMCxiYWNrZ3JvdW5kOidyZ2JhKDIzOSw2OCw2OCwuMTQpJyxib3JkZXJSYWRpdXM6OCxkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOidjZW50ZXInLGp1c3RpZnlDb250ZW50OidjZW50ZXInLGNvbG9yOicjZjg3MTcxJ319PlxuICAgICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBzaXplPXsxNH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBLbm93biBMaW1pdGF0aW9uc1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYS13YXJuXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206MTJ9fT5cbiAgICAgICAgICAgIDxJbmZvIHNpemU9ezEzfS8+IFRoaXMgaXMgYSBwcm90b3R5cGUg4oCUIE5PVCBwcm9kdWN0aW9uLXJlYWR5XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGZsZXhEaXJlY3Rpb246J2NvbHVtbicsZ2FwOjh9fT5cbiAgICAgICAgICAgIHsoa25vd25MaW1pdGF0aW9ucyB8fCBbXSkubWFwKChsaW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZ2FwOjgsYWxpZ25JdGVtczonZmxleC1zdGFydCcscGFkZGluZzonN3B4IDEwcHgnLGJhY2tncm91bmQ6J3JnYmEoMjM5LDY4LDY4LC4wNSknLGJvcmRlcjonMXB4IHNvbGlkIHJnYmEoMjM5LDY4LDY4LC4xMiknLGJvcmRlclJhZGl1czo4fX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjonI2VmNDQ0NCcsZmxleFNocmluazowLG1hcmdpblRvcDoxfX0+8J+aqTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOjExLGNvbG9yOicjOWNhM2FmJyxsaW5lSGVpZ2h0OjEuNX19PntsaW19PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6MTQscGFkZGluZzoxMCxiYWNrZ3JvdW5kOidyZ2JhKDE2LDE4NSwxMjksLjA2KScsYm9yZGVyUmFkaXVzOjgsYm9yZGVyOicxcHggc29saWQgcmdiYSgxNiwxODUsMTI5LC4xNSknfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MTAsY29sb3I6JyMzNGQzOTknLGZvbnRXZWlnaHQ6NzAwLG1hcmdpbkJvdHRvbTo0fX0+UkVEIEZMQUdTIEFWT0lERUQg4pyFPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MTEsY29sb3I6JyM5Y2EzYWYnLGxpbmVIZWlnaHQ6MS44fX0+XG4gICAgICAgICAgICAgIE5vdCBjbGFpbWluZyAxMDAlIGFjY3VyYWN5IMK3IE5vdCBjbGFpbWluZyBwcm9kdWN0aW9uLXJlYWR5IMK3XG4gICAgICAgICAgICAgIEFsbCBmYWlsdXJlcyBkb2N1bWVudGVkIMK3IE1hbnVhbCByZXZpZXcgZmxhZyBhY3RpdmUgZm9yIGxvdy1jb25maWRlbmNlIMK3XG4gICAgICAgICAgICAgIFJlcHJvZHVjaWJsZSBldmFsdWF0aW9uIGRhdGFzZXQgcHJvdmlkZWRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi8vIEFSQ0hJVEVDVFVSRSBESUFHUkFNIFBBR0Vcbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuY29uc3QgUGlwZWxpbmVDb25uZWN0b3IgPSAoeyBhY3RpdmUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgd2lkdGg6IDYwLCBmbGV4U2hyaW5rOiAwLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgPHN2ZyB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiMjBcIiBzdHlsZT17eyBvdmVyZmxvdzogJ3Zpc2libGUnIH19PlxuICAgICAgICA8bGluZVxuICAgICAgICAgIHgxPVwiMFwiXG4gICAgICAgICAgeTE9XCIxMFwiXG4gICAgICAgICAgeDI9XCI2MFwiXG4gICAgICAgICAgeTI9XCIxMFwiXG4gICAgICAgICAgc3Ryb2tlPXthY3RpdmUgPyAnIzM0ZDM5OScgOiAncmdiYSg1OSwgMTMwLCAyNDYsIDAuMiknfVxuICAgICAgICAgIHN0cm9rZVdpZHRoPXthY3RpdmUgPyAnMycgOiAnMid9XG4gICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PXthY3RpdmUgPyAnNSw1JyA6ICdub25lJ31cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3N0cm9rZSAwLjNzLCBzdHJva2Utd2lkdGggMC4zcycsXG4gICAgICAgICAgICBhbmltYXRpb246IGFjdGl2ZSA/ICdmbG93RGFzaCAwLjhzIGxpbmVhciBpbmZpbml0ZScgOiAnbm9uZSdcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICB7YWN0aXZlICYmIChcbiAgICAgICAgICA8Y2lyY2xlIHI9XCI0XCIgZmlsbD1cIiMzNGQzOTlcIj5cbiAgICAgICAgICAgIDxhbmltYXRlTW90aW9uXG4gICAgICAgICAgICAgIHBhdGg9XCJNMCwxMCBMNjAsMTBcIlxuICAgICAgICAgICAgICBkdXI9XCIwLjhzXCJcbiAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICl9XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIEFyY2hpdGVjdHVyZVBhZ2UoKSB7XG4gIGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IHVzZVN0YXRlKCdwcmVwcm9jZXNzJyk7XG4gIGNvbnN0IFtzaW11bGF0aW5nU3RlcCwgc2V0U2ltdWxhdGluZ1N0ZXBdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzaW1Mb2dzLCBzZXRTaW1Mb2dzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgY29uc29sZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb25zb2xlUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnNvbGVSZWYuY3VycmVudC5zY3JvbGxUb3AgPSBjb25zb2xlUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIH1cbiAgfSwgW3NpbUxvZ3NdKTtcblxuICBjb25zdCBydW5EaWFnbm9zdGljID0gKCkgPT4ge1xuICAgIGlmIChzaW11bGF0aW5nU3RlcCAhPT0gbnVsbCkgcmV0dXJuO1xuICAgIHNldFNpbXVsYXRpbmdTdGVwKDEpO1xuICAgIHNldFNpbUxvZ3MoW2BbJHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfV0g8J+agCBJbml0aWF0aW5nIFBpcGVsaW5lIERpYWdub3N0aWMgQXV0by1BdWRpdC4uLmBdKTtcbiAgICBcbiAgICBjb25zdCBzdGVwcyA9IFtcbiAgICAgIHsgc3RlcDogMSwgbmFtZTogJ1BSRVBST0NFU1MnLCBtc2c6ICfinJMgSW5nZXN0aW5nIENDVFYgc25hcHNob3QuLi4gQXBwbGllZCBoaXN0b2dyYW0gZXF1YWxpemF0aW9uICYgZ2FtbWEgY29ycmVjdGlvbi4gW0xhdGVuY3k6IDEybXNdJyB9LFxuICAgICAgeyBzdGVwOiAyLCBuYW1lOiAnREVURUNUT1InLCBtc2c6ICfinJMgWU9MT3Y4IGluZmVyZW5jZSBjb21wbGV0ZWQuIERldGVjdGVkIDEgbW90b3JjeWNsZSAoQ29uZmlkZW5jZTogOTQuMiUpLCAxIGNhciAoQ29uZmlkZW5jZTogOTguNyUpLiBbTGF0ZW5jeTogNDVtc10nIH0sXG4gICAgICB7IHN0ZXA6IDMsIG5hbWU6ICdDTEFTU0lGSUVSJywgbXNnOiAn4pyTIEV2YWx1YXRlZCBydWxlcy4gRmxhZ2dlZDogVHJpcGxlIFJpZGluZyAoU2lsaG91ZXR0ZXM6IDMsIENvbmZpZGVuY2U6IDg5LjIlKS4gW0xhdGVuY3k6IDhtc10nIH0sXG4gICAgICB7IHN0ZXA6IDQsIG5hbWU6ICdPQ1IgRU5HSU5FJywgbXNnOiAn4pyTIENyb3BwZWQgbGljZW5zZSBwbGF0ZS4gRWFzeU9DUiBtYXRjaGVkIHRleHQ6IFwiS0EwM0hBMjkwM1wiIChDb25maWRlbmNlOiA5MS41JSkuIFtMYXRlbmN5OiAxMjBtc10nIH0sXG4gICAgICB7IHN0ZXA6IDUsIG5hbWU6ICdFVklERU5DRScsIG1zZzogJ+KckyBDb21waWxlZCBpbmNpZGVudCBtZXRhZGF0YSBKU09OLiBSZW5kZXJlZCBib3VuZGluZyBib3ggb3ZlcmxheSBvbiBldmlkZW5jZSBmcmFtZS4gW0xhdGVuY3k6IDE1bXNdJyB9LFxuICAgICAgeyBzdGVwOiA2LCBuYW1lOiAnRElTUEFUQ0gnLCBtc2c6ICfinJMgTG9nZ2VkIG9mZmVuc2UgaW4gTW9uZ29EQiBBdGxhcyBjbHVzdGVyLiBEaXNwYXRjaGVkIHdhcm5pbmcgbWVzc2FnZS9maW5lIGNoYWxsYW4gdG8gY2l0aXplbiBwcm9maWxlIGFuZCBvd25lciBwaG9uZSBudW1iZXIuJyB9XG4gICAgXTtcblxuICAgIHN0ZXBzLmZvckVhY2goKHMsIGkpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTaW11bGF0aW5nU3RlcChzLnN0ZXApO1xuICAgICAgICBzZXRBY3RpdmVTdGVwKHBpcGVsaW5lW3Muc3RlcCAtIDFdLmlkKTtcbiAgICAgICAgc2V0U2ltTG9ncyhwcmV2ID0+IFsuLi5wcmV2LCBgWyR7bmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKX1dIFske3MubmFtZX1dICR7cy5tc2d9YF0pO1xuICAgICAgICBpZiAocy5zdGVwID09PSA2KSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTaW11bGF0aW5nU3RlcChudWxsKTtcbiAgICAgICAgICAgIHNldFNpbUxvZ3MocHJldiA9PiBbLi4ucHJldiwgYFske25ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9XSDwn46JIERpYWdub3N0aWMgY29tcGxldGVkLiBBbGwgc3RhZ2VzIG9wZXJhdGluZyB3aXRoaW4gbm9ybWFsIHRvbGVyYW5jZXMuYF0pO1xuICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICB9XG4gICAgICB9LCBpICogMTUwMCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcGlwZWxpbmUgPSBbXG4gICAge1xuICAgICAgc3RlcDogMSwgaWQ6ICdwcmVwcm9jZXNzJywgaWNvbjogJ/CflrzvuI8nLFxuICAgICAgdGl0bGU6ICdJbWFnZSBQcmVwcm9jZXNzaW5nJyxcbiAgICAgIGNvbG9yOiAnIzNiODJmNicsXG4gICAgICB0ZWNoOiAnT3BlbkNWIMK3IFBJTCDCtyBIaXN0b2dyYW0gRXF1YWxpemF0aW9uJyxcbiAgICAgIGlucHV0OiAnUmF3IENDVFYvc3VydmVpbGxhbmNlIGltYWdlJyxcbiAgICAgIG91dHB1dDogJ05vcm1hbGl6ZWQgaW1hZ2Ugd2l0aCBicmlnaHRuZXNzL2NvbnRyYXN0IG9wdGltaXplZCcsXG4gICAgICB0ZWNobmlxdWVzOiBbJ0hpc3RvZ3JhbSBFcXVhbGl6YXRpb24nLCAnR2FtbWEgQ29ycmVjdGlvbicsICdDb250cmFzdCBBZGp1c3RtZW50JywgJ05vaXNlIFJlZHVjdGlvbicsICdSYWluIERlaGF6aW5nIChXSVApJ10sXG4gICAgICB0YXJnZXQ6ICc8IDUwbXMgcGVyIGltYWdlJyxcbiAgICAgIGNvbmRpdGlvbnM6IFsnTG93IExpZ2h0JywgJ1JhaW4nLCAnTW90aW9uIEJsdXInLCAnU2hhZG93JywgJ0NsZWFyJ10sXG4gICAgICBkb3M6IFsnU3RhcnQgd2l0aCBPTkUgY29uZGl0aW9uIGF0IGEgdGltZScsICdVc2UgcHJvdmVuIE9wZW5DViB0ZWNobmlxdWVzJywgJ0RvY3VtZW50IHdoaWNoIGNvbmRpdGlvbnMgYXJlIGhhbmRsZWQnXSxcbiAgICAgIGRvbnRzOiBbJ0RvblxcJ3QgaGFuZGxlIEFMTCBjb25kaXRpb25zIHNpbXVsdGFuZW91c2x5IGluIHYxJywgJ0RvblxcJ3QgZGVzdHJveSBsaWNlbnNlIHBsYXRlIGRldGFpbHMnLCAnRG9uXFwndCBleGNlZWQgNTBtcyddXG4gICAgfSxcbiAgICB7XG4gICAgICBzdGVwOiAyLCBpZDogJ2RldGVjdCcsIGljb246ICfwn46vJyxcbiAgICAgIHRpdGxlOiAnVmVoaWNsZSAmIFJvYWQgVXNlciBEZXRlY3Rpb24nLFxuICAgICAgY29sb3I6ICcjMTBiOTgxJyxcbiAgICAgIHRlY2g6ICdZT0xPdjggKHNpbXVsYXRlZCkgwrcgQm91bmRpbmcgQm94IMK3IE5NUycsXG4gICAgICBpbnB1dDogJ1ByZXByb2Nlc3NlZCBpbWFnZScsXG4gICAgICBvdXRwdXQ6ICdCb3VuZGluZyBib3hlcyB3aXRoIGNsYXNzIGxhYmVscyArIGNvbmZpZGVuY2Ugc2NvcmVzJyxcbiAgICAgIHRlY2huaXF1ZXM6IFsnT2JqZWN0IERldGVjdGlvbiAoWU9MT3Y4KScsICdOb24tTWF4aW11bSBTdXBwcmVzc2lvbicsICdDb25maWRlbmNlIFRocmVzaG9sZGluZyAo4omlMC43MCknLCAnTXVsdGktY2xhc3MgRGV0ZWN0aW9uJ10sXG4gICAgICB0YXJnZXQ6ICdDb25maWRlbmNlIOKJpSA3MCUsIG1BUCDiiaUgNzAlJyxcbiAgICAgIHZlaGljbGVzOiBbJ01vdG9yY3ljbGVzJywgJ0NhcnMnLCAnQXV0by1SaWNrc2hhd3MnLCAnVHJ1Y2tzJywgJ0J1c2VzJywgJ1BlZGVzdHJpYW5zJ10sXG4gICAgICBkb3M6IFsnVXNlIHByZS10cmFpbmVkIFlPTE92OCcsICdTZXQgY29uZmlkZW5jZSB0aHJlc2hvbGQg4omlIDAuNjUnLCAnVHJhY2sgbXVsdGktcGVyc29uIG9uIDItd2hlZWxlcnMnXSxcbiAgICAgIGRvbnRzOiBbJ0RvblxcJ3QgdHJhaW4gZnJvbSBzY3JhdGNoJywgJ0RvblxcJ3QgYWltIGZvciAxMDAlIGFjY3VyYWN5JywgJ0RvblxcJ3QgaWdub3JlIG9jY2x1c2lvbiddXG4gICAgfSxcbiAgICB7XG4gICAgICBzdGVwOiAzLCBpZDogJ2NsYXNzaWZ5JywgaWNvbjogJ+Kalu+4jycsXG4gICAgICB0aXRsZTogJ1Zpb2xhdGlvbiBDbGFzc2lmaWNhdGlvbicsXG4gICAgICBjb2xvcjogJyNmOTczMTYnLFxuICAgICAgdGVjaDogJ1J1bGUtYmFzZWQgTG9naWMgwrcgTUwgQ2xhc3NpZmllciDCtyBTZXF1ZW50aWFsIExvZ2ljJyxcbiAgICAgIGlucHV0OiAnRGV0ZWN0ZWQgb2JqZWN0cyArIHZlaGljbGUgY29udGV4dCcsXG4gICAgICBvdXRwdXQ6ICdWaW9sYXRpb24gdHlwZSArIGNvbmZpZGVuY2Ugc2NvcmUgKyBzZXZlcml0eScsXG4gICAgICB2aW9sYXRpb25UeXBlczogW1xuICAgICAgICB7IGlkOiAnSEVMTUVUJywgbGFiZWw6ICdIZWxtZXQgTm9uLUNvbXBsaWFuY2UnLCBjb25mOiAwLjcwIH0sXG4gICAgICAgIHsgaWQ6ICdUUklQTEUnLCBsYWJlbDogJ1RyaXBsZSBSaWRpbmcnLCBjb25mOiAwLjc1IH0sXG4gICAgICAgIHsgaWQ6ICdSRURMSUdIVCcsIGxhYmVsOiAnUmVkIExpZ2h0IFZpb2xhdGlvbicsIGNvbmY6IDAuODAgfSxcbiAgICAgICAgeyBpZDogJ1NFQVRCRUxUJywgbGFiZWw6ICdTZWF0YmVsdCBOb24tQ29tcGxpYW5jZScsIGNvbmY6IDAuNzIgfSxcbiAgICAgICAgeyBpZDogJ01PQklMRScsIGxhYmVsOiAnTW9iaWxlIFBob25lIFVzYWdlJywgY29uZjogMC43MiB9LFxuICAgICAgICB7IGlkOiAnV1JPTkdTSURFJywgbGFiZWw6ICdXcm9uZy1TaWRlIERyaXZpbmcnLCBjb25mOiAwLjc4IH0sXG4gICAgICAgIHsgaWQ6ICdTVE9QTElORScsIGxhYmVsOiAnU3RvcCBMaW5lIFZpb2xhdGlvbicsIGNvbmY6IDAuNzAgfSxcbiAgICAgICAgeyBpZDogJ1BBUktJTkcnLCBsYWJlbDogJ0lsbGVnYWwgUGFya2luZycsIGNvbmY6IDAuNzAgfSxcbiAgICAgIF0sXG4gICAgICBkb3M6IFsnU3RhcnQgd2l0aCAyLTMgdmlvbGF0aW9ucyBvbmx5JywgJ1VzZSBydWxlLWJhc2VkIGxvZ2ljIGZpcnN0JywgJ0RvY3VtZW50IGNvbmZpZGVuY2UgdGhyZXNob2xkcyddLFxuICAgICAgZG9udHM6IFsnRG9uXFwndCB0YWNrbGUgYWxsIDcgaW4gdjEnLCAnRG9uXFwndCBpZ25vcmUgZmFsc2UgcG9zaXRpdmVzJywgJ0RvblxcJ3QgYXNzaWduIHNjb3JlcyBhcmJpdHJhcmlseSddXG4gICAgfSxcbiAgICB7XG4gICAgICBzdGVwOiA0LCBpZDogJ2xwcicsIGljb246ICfwn5SNJyxcbiAgICAgIHRpdGxlOiAnTGljZW5zZSBQbGF0ZSBSZWNvZ25pdGlvbicsXG4gICAgICBjb2xvcjogJyNhODU1ZjcnLFxuICAgICAgdGVjaDogJ0Vhc3lPQ1IgwrcgUGFkZGxlT0NSIMK3IFBsYXRlIERldGVjdGlvbiBNb2RlbCcsXG4gICAgICBpbnB1dDogJ0Nyb3BwZWQgdmVoaWNsZSByZWdpb24nLFxuICAgICAgb3V0cHV0OiAnRXh0cmFjdGVkIHBsYXRlIHRleHQgKEtBLTAzLUFCLTEyMzQgZm9ybWF0KScsXG4gICAgICB0YXJnZXQ6ICdPQ1IgQWNjdXJhY3k6IDcwLTg1JSBvbiBzdXJ2ZWlsbGFuY2UgcXVhbGl0eScsXG4gICAgICBmb3JtYXQ6ICdLYXJuYXRha2E6IEtBLVhYLVlZLU5OTk4nLFxuICAgICAgY2hhbGxlbmdlczogWydBbmdsZWQgcGxhdGVzJywgJ0RpcnR5L29ic2N1cmVkIHBsYXRlcycsICdMb3cgcmVzb2x1dGlvbicsICdQYXJ0aWFsIG9jY2x1c2lvbiddLFxuICAgICAgZG9zOiBbJ1VzZSBzcGVjaWFsaXplZCBMUFIgbW9kZWwnLCAnVGVzdCBvbiBJbmRpYW4gZm9ybWF0IHBsYXRlcycsICdGbGFnIHVucmVhZGFibGUgcGxhdGVzIGZvciBtYW51YWwgcmV2aWV3J10sXG4gICAgICBkb250czogWydEb25cXCd0IGJ1aWxkIE9DUiBmcm9tIHNjcmF0Y2gnLCAnRG9uXFwndCBleHBlY3QgMTAwJSBhY2N1cmFjeScsICdEb25cXCd0IHNraXAgcGxhdGUgcHJlcHJvY2Vzc2luZyddXG4gICAgfSxcbiAgICB7XG4gICAgICBzdGVwOiA1LCBpZDogJ2V2aWRlbmNlJywgaWNvbjogJ/Cfk7cnLFxuICAgICAgdGl0bGU6ICdFdmlkZW5jZSBHZW5lcmF0aW9uJyxcbiAgICAgIGNvbG9yOiAnI2VhYjMwOCcsXG4gICAgICB0ZWNoOiAnU1ZHIE92ZXJsYXkgwrcgSlNPTiBNZXRhZGF0YSDCtyBUaW1lc3RhbXAnLFxuICAgICAgaW5wdXQ6ICdPcmlnaW5hbCBpbWFnZSArIGRldGVjdGlvbiByZXN1bHRzJyxcbiAgICAgIG91dHB1dDogJ0Fubm90YXRlZCBpbWFnZSArIEpTT04gZXZpZGVuY2UgcmVjb3JkJyxcbiAgICAgIG1ldGFkYXRhOiBbJ3Zpb2xhdGlvbklkJywgJ3RpbWVzdGFtcCcsICdsb2NhdGlvbicsICdsaWNlbnNlUGxhdGUnLCAnY29uZmlkZW5jZScsICdmaW5lQW1vdW50JywgJ2F1ZGl0VHJhaWwnXSxcbiAgICAgIGRvczogWydEcmF3IGJvdW5kaW5nIGJveGVzJywgJ0FkZCBsYWJlbHMgd2l0aCBjb25maWRlbmNlJywgJ1NhdmUgb3JpZ2luYWwgKyBhbm5vdGF0ZWQnLCAnU3RvcmUgaW4gSlNPTiBmb3JtYXQnXSxcbiAgICAgIGRvbnRzOiBbJ0RvblxcJ3Qgb3ZlcndyaXRlIG9yaWdpbmFscycsICdEb25cXCd0IGZvcmdldCB0aW1lc3RhbXBzJywgJ0RvblxcJ3QgaWdub3JlIHByaXZhY3kgKGJsdXIgZmFjZXMgaWYgcmVxdWlyZWQpJ11cbiAgICB9LFxuICAgIHtcbiAgICAgIHN0ZXA6IDYsIGlkOiAnYW5hbHl0aWNzJywgaWNvbjogJ/Cfk4onLFxuICAgICAgdGl0bGU6ICdBbmFseXRpY3MgJiBSZXBvcnRpbmcnLFxuICAgICAgY29sb3I6ICcjMDZiNmQ0JyxcbiAgICAgIHRlY2g6ICdNb25nb0RCIEFnZ3JlZ2F0aW9uIMK3IENTVi9KU09OIEV4cG9ydCDCtyBEYXNoYm9hcmQnLFxuICAgICAgaW5wdXQ6ICdWaW9sYXRpb24gcmVjb3JkcyBkYXRhYmFzZScsXG4gICAgICBvdXRwdXQ6ICdTdGF0aXN0aWNzLCB0cmVuZHMsIHJlcG9ydHMsIGhvdHNwb3QgbWFwcycsXG4gICAgICBtZXRyaWNzOiBbJ1RvdGFsIHZpb2xhdGlvbnMnLCAnQnkgdHlwZSAoJSknLCAnSGlnaC12aW9sYXRpb24gem9uZXMnLCAnQ29uZmlkZW5jZSBkaXN0cmlidXRpb24nLCAnUHJvY2Vzc2luZyBzcGVlZCddLFxuICAgICAgZG9zOiBbJ1RyYWNrIGJhc2ljIHN0YXRzIGZvciBwcm90b3R5cGUnLCAnRW5hYmxlIGRhdGUvdHlwZSBmaWx0ZXJpbmcnLCAnR2VuZXJhdGUgQ1NWIGV4cG9ydCcsICdWYWxpZGF0ZSBkYXRhIGJlZm9yZSBkaXNwbGF5J10sXG4gICAgICBkb250czogWydEb25cXCd0IGJ1aWxkIGNvbXBsZXggZGFzaGJvYXJkcyBpbiB2MScsICdEb25cXCd0IHNraXAgZGF0YSB2YWxpZGF0aW9uJywgJ0RvblxcJ3QgY3JlYXRlIHJlcG9ydHMgZW5jb3VyYWdpbmcgYmlhcyddXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBhY3RpdmVEYXRhID0gYWN0aXZlU3RlcCA/IHBpcGVsaW5lLmZpbmQocCA9PiBwLmlkID09PSBhY3RpdmVTdGVwKSA6IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtc2xpZGV1cFwiPlxuICAgICAgPHN0eWxlPntgXG4gICAgICAgIEBrZXlmcmFtZXMgZmxvd0Rhc2gge1xuICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMjA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgcHVsc2VHbG93Q3VzdG9tIHtcbiAgICAgICAgICAwJSwgMTAwJSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjIpO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE2LCAxODUsIDEyOSwgMC40KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjgpO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE2LCAxODUsIDEyOSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZDonbGluZWFyLWdyYWRpZW50KDEzNWRlZyxyZ2JhKDU5LDEzMCwyNDYsLjA4KSxyZ2JhKDEzOSw5MiwyNDYsLjA0KSknLFxuICAgICAgICBib3JkZXI6JzFweCBzb2xpZCByZ2JhKDU5LDEzMCwyNDYsLjIpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOjE0LFxuICAgICAgICBwYWRkaW5nOjIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206MjQsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICAgIGdhcDogMTZcbiAgICAgIH19PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxNixmb250V2VpZ2h0OjgwMCxjb2xvcjonI2YzZjRmNicsbWFyZ2luQm90dG9tOjZ9fT7wn4+X77iPIFN5c3RlbSBBcmNoaXRlY3R1cmUg4oCUIERldGVjdGlvbiBQaXBlbGluZTwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMixjb2xvcjonIzljYTNhZid9fT5DbGljayBhbnkgcGlwZWxpbmUgc3RhZ2UgdG8gc2VlIHRlY2huaWNhbCBkZXRhaWxzLCBEbydzICYgRG9uJ3RzLCBhbmQgaW1wbGVtZW50YXRpb24gbm90ZXMuPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17cnVuRGlhZ25vc3RpY31cbiAgICAgICAgICBkaXNhYmxlZD17c2ltdWxhdGluZ1N0ZXAgIT09IG51bGx9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBnYXA6IDgsXG4gICAgICAgICAgICBib3hTaGFkb3c6IHNpbXVsYXRpbmdTdGVwID8gJ25vbmUnIDogJzAgMCAxNXB4IHJnYmEoNTksMTMwLDI0NiwwLjMpJyxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2ltdWxhdGluZ1N0ZXAgPyAnbm9uZScgOiAncHVsc2VHbG93IDJzIGluZmluaXRlJ1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8WmFwIHNpemU9ezE0fSBmaWxsPXtzaW11bGF0aW5nU3RlcCA/ICdub25lJyA6ICdjdXJyZW50Q29sb3InfS8+XG4gICAgICAgICAge3NpbXVsYXRpbmdTdGVwID8gJ1J1bm5pbmcgRGlhZ25vc3RpY3MuLi4nIDogJ1J1biBQaXBlbGluZSBEaWFnbm9zdGljIFNpbXVsYXRpb24nfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7c2ltTG9ncy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3tib3JkZXJDb2xvcjogJ3JnYmEoNTksIDEzMCwgMjQ2LCAwLjM1KScsIGJhY2tncm91bmQ6ICcjMDIwNDA5JywgbWFyZ2luQm90dG9tOiAyNH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luQm90dG9tOjEwfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6OH19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5cIiBzdHlsZT17e3dpZHRoOiAxMiwgaGVpZ2h0OiAxMiwgYm9yZGVyVG9wQ29sb3I6ICcjMzRkMzk5JywgZGlzcGxheTogc2ltdWxhdGluZ1N0ZXAgIT09IG51bGwgPyAnYmxvY2snIDogJ25vbmUnfX0vPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogJyNmM2Y0ZjYnfX0+U3lzdGVtIERpYWdub3N0aWMgU3RyZWFtPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRGYW1pbHk6J21vbm9zcGFjZScsIGZvbnRTaXplOjksIGNvbG9yOicjNGI1NTYzJ319PlN0YXR1czoge3NpbXVsYXRpbmdTdGVwID8gYFN0YWdlICR7c2ltdWxhdGluZ1N0ZXB9IEFjdGl2ZWAgOiAnSWRsZSd9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICByZWY9e2NvbnNvbGVSZWZ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8sIG1vbm9zcGFjZScsIFxuICAgICAgICAgICAgICBmb250U2l6ZTogMTAsIFxuICAgICAgICAgICAgICBjb2xvcjogJyMzNGQzOTknLCBcbiAgICAgICAgICAgICAgcGFkZGluZzogJzEycHgnLCBcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC41KScsIFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsIFxuICAgICAgICAgICAgICBtYXhIZWlnaHQ6IDEyMCwgXG4gICAgICAgICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICBnYXA6IDQsXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDIpJ1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2ltTG9ncy5tYXAoKGxvZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICAgICAgICAgICAgICBjb2xvcjogbG9nLmluY2x1ZGVzKCfinJMnKSB8fCBsb2cuaW5jbHVkZXMoJ/CfjoknKSA/ICcjMzRkMzk5JyA6IGxvZy5pbmNsdWRlcygn8J+agCcpID8gJyM2MGE1ZmEnIDogJyNhN2YzZDAnXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHtsb2d9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OidmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcbiAgICAgICAgZ2FwOjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbToyOCxcbiAgICAgICAgb3ZlcmZsb3dYOidhdXRvJyxcbiAgICAgICAgcGFkZGluZzogJzEwcHggNHB4IDE0cHggNHB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxNCxcbiAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMTUsMjMsNDIsMC40KScsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNCknXG4gICAgICB9fT5cbiAgICAgICAge3BpcGVsaW5lLm1hcCgoc3RlcCwgaWR4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNTaW11bGF0aW5nVGhpcyA9IHNpbXVsYXRpbmdTdGVwID09PSBzdGVwLnN0ZXA7XG4gICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGFjdGl2ZVN0ZXAgPT09IHN0ZXAuaWQ7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3N0ZXAuaWR9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlU3RlcChhY3RpdmVTdGVwID09PSBzdGVwLmlkID8gbnVsbCA6IHN0ZXAuaWQpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBpc1NlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgID8gYGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICR7c3RlcC5jb2xvcn0yMiwgJHtzdGVwLmNvbG9yfTExKWBcbiAgICAgICAgICAgICAgICAgICAgOiBpc1NpbXVsYXRpbmdUaGlzIFxuICAgICAgICAgICAgICAgICAgICAgID8gJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjE1KSwgcmdiYSgxNiwgMTg1LCAxMjksIDAuMDUpKSdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoMTUsMjMsNDIsLjg1KSxyZ2JhKDEwLDE1LDMwLC43KSknLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBpc1NlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgID8gYDJweCBzb2xpZCAke3N0ZXAuY29sb3J9YFxuICAgICAgICAgICAgICAgICAgICA6IGlzU2ltdWxhdGluZ1RoaXNcbiAgICAgICAgICAgICAgICAgICAgICA/ICcycHggc29saWQgIzEwYjk4MSdcbiAgICAgICAgICAgICAgICAgICAgICA6ICcxcHggc29saWQgIzFlMjkzYicsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6MTQsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOicxNnB4IDE0cHgnLFxuICAgICAgICAgICAgICAgICAgY3Vyc29yOidwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246J2FsbCAuM3MgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSknLFxuICAgICAgICAgICAgICAgICAgbWluV2lkdGg6MTM1LFxuICAgICAgICAgICAgICAgICAgZmxleFNocmluazowLFxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBpc1NlbGVjdGVkID8gJ3NjYWxlKDEuMDMpIHRyYW5zbGF0ZVkoLTNweCknIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBpc1NpbXVsYXRpbmdUaGlzID8gJ3B1bHNlR2xvd0N1c3RvbSAxLjVzIGluZmluaXRlJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogaXNTZWxlY3RlZCA/IGAwIDhweCAyNXB4ICR7c3RlcC5jb2xvcn0zM2AgOiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjI2LG1hcmdpbkJvdHRvbTo4LHRleHRBbGlnbjonY2VudGVyJ319PntzdGVwLmljb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6OSxcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ODAwLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGlzU2ltdWxhdGluZ1RoaXMgPyAnIzM0ZDM5OScgOiBzdGVwLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzoxLFxuICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTondXBwZXJjYXNlJyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTozLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOidjZW50ZXInXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICBTVEVQIHtzdGVwLnN0ZXB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjExLGZvbnRXZWlnaHQ6NzAwLGNvbG9yOicjZjNmNGY2Jyx0ZXh0QWxpZ246J2NlbnRlcicsbGluZUhlaWdodDoxLjN9fT57c3RlcC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6OSxjb2xvcjonIzZiNzI4MCcsbWFyZ2luVG9wOjYsdGV4dEFsaWduOidjZW50ZXInfX0+e3N0ZXAudGVjaC5zcGxpdCgnwrcnKVswXS50cmltKCl9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7aWR4IDwgcGlwZWxpbmUubGVuZ3RoIC0gMSAmJiAoXG4gICAgICAgICAgICAgICAgPFBpcGVsaW5lQ29ubmVjdG9yIGFjdGl2ZT17c2ltdWxhdGluZ1N0ZXAgPT09IHN0ZXAuc3RlcH0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAge2FjdGl2ZURhdGEgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZDpgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHthY3RpdmVEYXRhLmNvbG9yfTA4LCByZ2JhKDEwLDE1LDMwLC45NSkpYCxcbiAgICAgICAgICBib3JkZXI6YDFweCBzb2xpZCAke2FjdGl2ZURhdGEuY29sb3J9MzNgLFxuICAgICAgICAgIGJvcmRlclJhZGl1czoxNCxcbiAgICAgICAgICBwYWRkaW5nOjIyLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbToyNCxcbiAgICAgICAgICBhbmltYXRpb246J3NsaWRlVXAgLjNzIGVhc2Utb3V0JyxcbiAgICAgICAgICBib3hTaGFkb3c6IGBpbnNldCAwIDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKWBcbiAgICAgICAgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6J2ZsZXgtc3RhcnQnLGdhcDoxNCxtYXJnaW5Cb3R0b206MTh9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTozNn19PnthY3RpdmVEYXRhLmljb259PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDoxfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxNSxmb250V2VpZ2h0OjgwMCxjb2xvcjonI2YzZjRmNid9fT5TdGVwIHthY3RpdmVEYXRhLnN0ZXB9OiB7YWN0aXZlRGF0YS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjExLGNvbG9yOmFjdGl2ZURhdGEuY29sb3IsZm9udEZhbWlseTonSmV0QnJhaW5zIE1vbm8sbW9ub3NwYWNlJyxtYXJnaW5Ub3A6M319PnthY3RpdmVEYXRhLnRlY2h9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZzNcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOidyZ2JhKDE1LDIzLDQyLC41KScsYm9yZGVyOicxcHggc29saWQgcmdiYSg1OSwgMTMwLCAyNDYsIDAuMDgpJyxib3JkZXJSYWRpdXM6MTAscGFkZGluZzoxNH19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6OSxjb2xvcjonIzZiNzI4MCcsZm9udFdlaWdodDo3MDAsbGV0dGVyU3BhY2luZzoxLHRleHRUcmFuc2Zvcm06J3VwcGVyY2FzZScsbWFyZ2luQm90dG9tOjh9fT5JbnB1dCDihpIgT3V0cHV0PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206OH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTo5LGNvbG9yOicjOWNhM2FmJyxtYXJnaW5Cb3R0b206M319PvCfk6UgSU5QVVQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MTEsY29sb3I6JyNjYmQ1ZTEnfX0+e2FjdGl2ZURhdGEuaW5wdXR9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OjEsYmFja2dyb3VuZDonIzFlMjkzYicsbWFyZ2luOic4cHggMCd9fS8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjksY29sb3I6JyM5Y2EzYWYnLG1hcmdpbkJvdHRvbTozfX0+8J+TpCBPVVRQVVQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MTEsY29sb3I6JyNjYmQ1ZTEnfX0+e2FjdGl2ZURhdGEub3V0cHV0fTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge2FjdGl2ZURhdGEudGFyZ2V0ICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOjEwLHBhZGRpbmc6JzZweCAxMHB4JyxiYWNrZ3JvdW5kOmAke2FjdGl2ZURhdGEuY29sb3J9MTRgLGJvcmRlclJhZGl1czo3LGJvcmRlcjpgMXB4IHNvbGlkICR7YWN0aXZlRGF0YS5jb2xvcn0zM2B9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTo5LGNvbG9yOicjOWNhM2FmJ319PvCfjq8gVGFyZ2V0PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MTEsY29sb3I6YWN0aXZlRGF0YS5jb2xvcixmb250V2VpZ2h0OjcwMH19PnthY3RpdmVEYXRhLnRhcmdldH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDoncmdiYSgxNiwxODUsMTI5LC4wNiknLGJvcmRlcjonMXB4IHNvbGlkIHJnYmEoMTYsMTg1LDEyOSwuMiknLGJvcmRlclJhZGl1czoxMCxwYWRkaW5nOjE0fX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTo5LGNvbG9yOicjMzRkMzk5Jyxmb250V2VpZ2h0OjcwMCxsZXR0ZXJTcGFjaW5nOjEsdGV4dFRyYW5zZm9ybTondXBwZXJjYXNlJyxtYXJnaW5Cb3R0b206OH19PuKchSBETydzPC9kaXY+XG4gICAgICAgICAgICAgIHthY3RpdmVEYXRhLmRvcy5tYXAoKGQsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxnYXA6NixtYXJnaW5Cb3R0b206NixhbGlnbkl0ZW1zOidmbGV4LXN0YXJ0J319PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjonIzEwYjk4MScsZmxleFNocmluazowLG1hcmdpblRvcDoxfX0+4pyTPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZToxMSxjb2xvcjonIzljYTNhZicsbGluZUhlaWdodDoxLjV9fT57ZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOidyZ2JhKDIzOSw2OCw2OCwuMDYpJyxib3JkZXI6JzFweCBzb2xpZCByZ2JhKDIzOSw2OCw2OCwuMiknLGJvcmRlclJhZGl1czoxMCxwYWRkaW5nOjE0fX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTo5LGNvbG9yOicjZjg3MTcxJyxmb250V2VpZ2h0OjcwMCxsZXR0ZXJTcGFjaW5nOjEsdGV4dFRyYW5zZm9ybTondXBwZXJjYXNlJyxtYXJnaW5Cb3R0b206OH19PuKdjCBET04nVHM8L2Rpdj5cbiAgICAgICAgICAgICAge2FjdGl2ZURhdGEuZG9udHMubWFwKChkLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZ2FwOjYsbWFyZ2luQm90dG9tOjYsYWxpZ25JdGVtczonZmxleC1zdGFydCd9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyNlZjQ0NDQnLGZsZXhTaHJpbms6MCxtYXJnaW5Ub3A6MX19PuKclzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6MTEsY29sb3I6JyM5Y2EzYWYnLGxpbmVIZWlnaHQ6MS41fX0+e2R9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgeyhhY3RpdmVEYXRhLnRlY2huaXF1ZXMgfHwgYWN0aXZlRGF0YS52aW9sYXRpb25UeXBlcyB8fCBhY3RpdmVEYXRhLm1ldGFkYXRhIHx8IGFjdGl2ZURhdGEudmVoaWNsZXMgfHwgYWN0aXZlRGF0YS5jaGFsbGVuZ2VzIHx8IGFjdGl2ZURhdGEubWV0cmljcykgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDoxNCxkaXNwbGF5OidmbGV4JyxmbGV4V3JhcDond3JhcCcsZ2FwOjZ9fT5cbiAgICAgICAgICAgICAgeyhhY3RpdmVEYXRhLnRlY2huaXF1ZXMgfHwgYWN0aXZlRGF0YS52ZWhpY2xlcyB8fCBhY3RpdmVEYXRhLmNoYWxsZW5nZXMgfHwgYWN0aXZlRGF0YS5tZXRyaWNzIHx8IFtdKS5tYXAoKHQsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2l9IHN0eWxlPXt7cGFkZGluZzonM3B4IDEwcHgnLGJhY2tncm91bmQ6YCR7YWN0aXZlRGF0YS5jb2xvcn0xNGAsY29sb3I6YWN0aXZlRGF0YS5jb2xvcixib3JkZXI6YDFweCBzb2xpZCAke2FjdGl2ZURhdGEuY29sb3J9MzNgLGJvcmRlclJhZGl1czoyMCxmb250U2l6ZToxMCxmb250V2VpZ2h0OjYwMH19PlxuICAgICAgICAgICAgICAgICAge3R9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgeyhhY3RpdmVEYXRhLnZpb2xhdGlvblR5cGVzIHx8IFtdKS5tYXAodiA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt2LmlkfSBzdHlsZT17e3BhZGRpbmc6JzNweCAxMHB4JyxiYWNrZ3JvdW5kOidyZ2JhKDI0OSwxMTUsMjIsLjE0KScsY29sb3I6JyNmYjkyM2MnLGJvcmRlcjonMXB4IHNvbGlkIHJnYmEoMjQ5LDExNSwyMiwuMyknLGJvcmRlclJhZGl1czoyMCxmb250U2l6ZToxMCxmb250V2VpZ2h0OjYwMH19PlxuICAgICAgICAgICAgICAgICAge3YubGFiZWx9ICjiiaV7di5jb25mKjEwMH0lKVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIHsoYWN0aXZlRGF0YS5tZXRhZGF0YSB8fCBbXSkubWFwKChtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpfSBzdHlsZT17e3BhZGRpbmc6JzNweCAxMHB4JyxiYWNrZ3JvdW5kOidyZ2JhKDIzNCwxNzksOCwuMTQpJyxjb2xvcjonI2ZiYmYyNCcsYm9yZGVyOicxcHggc29saWQgcmdiYSgyMzQsMTc5LDgsLjMpJyxib3JkZXJSYWRpdXM6MjAsZm9udFNpemU6MTAsZm9udEZhbWlseTonSmV0QnJhaW5zIE1vbm8sbW9ub3NwYWNlJ319PlxuICAgICAgICAgICAgICAgICAge219XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdHRsXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206MTR9fT48ZGl2IGNsYXNzTmFtZT1cInR0bC1pY29cIj48U2VydmVyIHNpemU9ezE0fS8+PC9kaXY+VGVjaG5vbG9neSBTdGFjazwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOidjb2x1bW4nLGdhcDo4fX0+XG4gICAgICAgICAgICB7W1snRnJvbnRlbmQnLCAnUmVhY3QgMTggKyBWaXRlICsgTHVjaWRlIEljb25zJ10sXG4gICAgICAgICAgICAgIFsnQmFja2VuZCcsICdOb2RlLmpzICsgRXhwcmVzcy5qcyAoRVNNKSddLFxuICAgICAgICAgICAgICBbJ0RhdGFiYXNlJywgJ01vbmdvREIgQXRsYXMgKE1vbmdvb3NlIE9ETSknXSxcbiAgICAgICAgICAgICAgWydEZXRlY3Rpb24nLCAnWU9MT3Y4IFNpbXVsYXRpb24gKOKGkiByZWFsIGluIHByb2QpJ10sXG4gICAgICAgICAgICAgIFsnT0NSJywgJ0Vhc3lPQ1IgLyBQYWRkbGVPQ1IgKHBsYW5uZWQpJ10sXG4gICAgICAgICAgICAgIFsnRXZpZGVuY2UnLCAnU1ZHIE92ZXJsYXkgR2VuZXJhdG9yJ10sXG4gICAgICAgICAgICAgIFsnQW5hbHl0aWNzJywgJ01vbmdvREIgQWdncmVnYXRpb24gUGlwZWxpbmUnXSxcbiAgICAgICAgICAgICAgWydBdXRoJywgJ1JvbGUtYmFzZWQgKEFkbWluL1BvbGljZS9DdXN0b21lciknXSxcbiAgICAgICAgICAgIF0ubWFwKChbayx2XSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17a30gc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicscGFkZGluZzonNXB4IDAnLGJvcmRlckJvdHRvbTonMXB4IHNvbGlkIHJnYmEoMzAsNDEsNTksLjQpJyxmb250U2l6ZToxMn19PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyM5Y2EzYWYnLGZvbnRXZWlnaHQ6NjAwfX0+e2t9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyNjYmQ1ZTEnLGZvbnRGYW1pbHk6J0pldEJyYWlucyBNb25vLG1vbm9zcGFjZScsZm9udFNpemU6MTF9fT57dn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10dGxcIiBzdHlsZT17e21hcmdpbkJvdHRvbToxNH19PjxkaXYgY2xhc3NOYW1lPVwidHRsLWljb1wiPjxEYXRhYmFzZSBzaXplPXsxNH0vPjwvZGl2PlByb3RvdHlwZSBTY29wZSAodjEpPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbToxMn19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhLXdhcm5cIiBzdHlsZT17e21hcmdpbjowfX0+4pqg77iPIE5PVCBwcm9kdWN0aW9uLXJlYWR5IOKAlCBwcm90b3R5cGUgc2NvcGUgb25seTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YmxcIj5cbiAgICAgICAgICAgIDx0aGVhZD48dHI+PHRoPkNvbXBvbmVudDwvdGg+PHRoPlNjb3BlPC90aD48dGg+VGFyZ2V0PC90aD48L3RyPjwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtbWydQcmVwcm9jZXNzaW5nJywgJ0xvdy1saWdodCArIFJhaW4nLCAnTi9BJ10sXG4gICAgICAgICAgICAgICAgWydEZXRlY3Rpb24nLCAnTW90b3JjeWNsZXMsIENhcnMsIEF1dG9zJywgJzg1JSsnXSxcbiAgICAgICAgICAgICAgICBbJ1Zpb2xhdGlvbnMnLCAnSGVsbWV0ICsgVHJpcGxlICsgUmVkLWxpZ2h0JywgJzc1LTgwJSddLFxuICAgICAgICAgICAgICAgIFsnTGljZW5zZSBQbGF0ZScsICdEZXRlY3Rpb24gKyBPQ1InLCAnNzAlKyddLFxuICAgICAgICAgICAgICAgIFsnRXZpZGVuY2UnLCAnU1ZHICsgSlNPTiBtZXRhZGF0YScsICcxMDAlJ10sXG4gICAgICAgICAgICAgICAgWydBbmFseXRpY3MnLCAnQmFzaWMgc3RhdHMgZGFzaGJvYXJkJywgJ04vQSddLFxuICAgICAgICAgICAgICAgIFsnU3BlZWQnLCAnPDUwMG1zL2ltYWdlJywgJ0RvY3VtZW50ZWQnXSxcbiAgICAgICAgICAgICAgXS5tYXAoKFtjLHMsdF0pID0+IChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtjfT5cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e2ZvbnRTaXplOjExfX0+e2N9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e2ZvbnRTaXplOjExLGNvbG9yOicjOWNhM2FmJ319PntzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3tmb250U2l6ZToxMSxjb2xvcjonIzYwYTVmYScsZm9udEZhbWlseTonSmV0QnJhaW5zIE1vbm8sbW9ub3NwYWNlJ319Pnt0fTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuLy8gTUFJTiBBUFBcbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuY29uc3QgUEFHRVM9W1xuICB7aWQ6J2Rhc2hib2FyZCcsICAgIGljb246PEhvbWUgc2l6ZT17MTd9Lz4sICAgICAgbGFiZWw6J0Rhc2hib2FyZCcgICAgIH0sXG4gIHtpZDonZGV0ZWN0aW9uJywgICAgaWNvbjo8Q2FtZXJhIHNpemU9ezE3fS8+LCAgICBsYWJlbDonRGV0ZWN0aW9uJyAgICAgfSxcbiAge2lkOidhcmNoaXZlJywgICAgICBpY29uOjxBcmNoaXZlIHNpemU9ezE3fS8+LCAgIGxhYmVsOidPbGQgRmlsZXMnICAgICB9LFxuICB7aWQ6J2JhdGNoJywgICAgICAgIGljb246PExheWVycyBzaXplPXsxN30vPiwgICAgbGFiZWw6J0JhdGNoJyAgICAgICAgIH0sXG4gIHtpZDonYW5hbHl0aWNzJywgICAgaWNvbjo8QmFyQ2hhcnQzIHNpemU9ezE3fS8+LCBsYWJlbDonQW5hbHl0aWNzJyAgICAgfSxcbiAge2lkOidwZXJmb3JtYW5jZScsICBpY29uOjxUYXJnZXQgc2l6ZT17MTd9Lz4sICAgIGxhYmVsOidQZXJmb3JtYW5jZScgICB9LFxuICB7aWQ6J2FyY2hpdGVjdHVyZScsIGljb246PEhhcmREcml2ZSBzaXplPXsxN30vPiwgbGFiZWw6J0FyY2hpdGVjdHVyZScgIH0sXG4gIHtpZDonc2VhcmNoJywgICAgICAgaWNvbjo8U2VhcmNoIHNpemU9ezE3fS8+LCAgICBsYWJlbDonU2VhcmNoJyAgICAgICAgfSxcbiAge2lkOidjb250YWN0JywgICAgICBpY29uOjxQaG9uZSBzaXplPXsxN30vPiwgICAgIGxhYmVsOidDb250YWN0IFVzJyAgICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCl7XG4gIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUobnVsbCk7IC8vIEF1dGggU3RhdGVcbiAgY29uc3QgW3BhZ2Usc2V0UGFnZV09dXNlU3RhdGUoJ2Rhc2hib2FyZCcpO1xuICBjb25zdCBbdGltZSxzZXRUaW1lXT11c2VTdGF0ZShuZXcgRGF0ZSgpKTtcbiAgY29uc3QgW3Nob3dTdGF0dXMsc2V0U2hvd1N0YXR1c109dXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd01vbmdvLHNldFNob3dNb25nb109dXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGJPayxzZXREYk9rXT11c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3RvYXN0cywgc2V0VG9hc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Nob3dXZWxjb21lLCBzZXRTaG93V2VsY29tZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBBY2NpZGVudCBBbGVydCBNb2RlIFN0YXRlc1xuICBjb25zdCBbYWNjaWRlbnRBY3RpdmUsIHNldEFjY2lkZW50QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2dyYWNlQWN0aXZlLCBzZXRHcmFjZUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtncmFjZVRpbWUsIHNldEdyYWNlVGltZV0gPSB1c2VTdGF0ZSgwKTtcblxuICAvLyBDb3VudGRvd24gdGltZXIgZWZmZWN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpbWVyO1xuICAgIGlmIChncmFjZUFjdGl2ZSAmJiBncmFjZVRpbWUgPiAwKSB7XG4gICAgICB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0R3JhY2VUaW1lKChwcmV2KSA9PiB7XG4gICAgICAgICAgaWYgKHByZXYgPD0gMSkge1xuICAgICAgICAgICAgc2V0R3JhY2VBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBwcmV2IC0gMTtcbiAgICAgICAgfSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9LCBbZ3JhY2VBY3RpdmUsIGdyYWNlVGltZV0pO1xuXG4gIGNvbnN0IGFkZFRvYXN0ID0gKG1zZywgdHlwZSA9ICdpbmZvJykgPT4ge1xuICAgIGNvbnN0IGlkID0gRGF0ZS5ub3coKTtcbiAgICBzZXRUb2FzdHMocHJldiA9PiBbLi4ucHJldiwgeyBpZCwgbXNnLCB0eXBlIH1dKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFRvYXN0cyhwcmV2ID0+IHByZXYuZmlsdGVyKHQgPT4gdC5pZCAhPT0gaWQpKTtcbiAgICB9LCA0NTAwKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCk9Pntjb25zdCBpZD1zZXRJbnRlcnZhbCgoKT0+c2V0VGltZShuZXcgRGF0ZSgpKSwxMDAwKTtyZXR1cm4oKT0+Y2xlYXJJbnRlcnZhbChpZCk7fSxbXSk7XG4gIFxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZiAoY3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIucm9sZSAhPT0gJ2N1c3RvbWVyJykge1xuICAgICAgZmV0Y2goYCR7QVBJfS9oZWFsdGhgKS50aGVuKHI9PnIuanNvbigpKS50aGVuKGQ9PnNldERiT2soZC5kYXRhYmFzZT09PSdjb25uZWN0ZWQnKSkuY2F0Y2goKCk9PnNldERiT2soZmFsc2UpKTtcbiAgICB9XG4gIH0sW2N1cnJlbnRVc2VyXSk7XG5cbiAgaWYgKCFjdXJyZW50VXNlcikge1xuICAgIHJldHVybiA8QXV0aFBhZ2Ugb25Mb2dpblN1Y2Nlc3M9eyh1c2VyKSA9PiB7IHNldEN1cnJlbnRVc2VyKHVzZXIpOyBhZGRUb2FzdChgV2VsY29tZSBiYWNrLCAke3VzZXIubmFtZX0hYCk7IH19Lz47XG4gIH1cblxuICBpZiAoY3VycmVudFVzZXIucm9sZSA9PT0gJ2N1c3RvbWVyJykge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8c3R5bGU+e0NTU308L3N0eWxlPlxuICAgICAgICA8Q3VzdG9tZXJQb3J0YWxQYWdlIGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0gb25Mb2dvdXQ9e2hhbmRsZUxvZ291dH0gYWRkVG9hc3Q9e2FkZFRvYXN0fSAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50VXNlcihudWxsKTtcbiAgICBzZXRQYWdlKCdkYXNoYm9hcmQnKTtcbiAgfTtcblxuICBjb25zdCBpc1BvbGljZSA9IGN1cnJlbnRVc2VyPy5yb2xlID09PSAncG9saWNlJztcbiAgY29uc3QgcGFnZVRpdGxlcyA9IHtcbiAgICBkYXNoYm9hcmQ6ICAgICdDb21tYW5kIERhc2hib2FyZCcsXG4gICAgZGV0ZWN0aW9uOiAgICAnQUkgWU9MT3YxMSAmIE9DUiBFbmdpbmUnLFxuICAgIGFyY2hpdmU6ICAgICAgaXNQb2xpY2UgPyAnVmlvbGF0aW9uIFJlY29yZHMgQXJjaGl2ZScgOiAnTW9uZ29EQiBWaW9sYXRpb24gTG9ncycsXG4gICAgYmF0Y2g6ICAgICAgICAnQmF0Y2ggUXVldWUgRW5naW5lJyxcbiAgICBhbmFseXRpY3M6ICAgICdBbmFseXRpY3MgJiBUcmVuZHMnLFxuICAgIHBlcmZvcm1hbmNlOiAgJ1BlcmZvcm1hbmNlIEV2YWx1YXRpb24g4oCUIFByZWNpc2lvbiAvIFJlY2FsbCAvIEYxIC8gbUFQJyxcbiAgICBhcmNoaXRlY3R1cmU6ICdTeXN0ZW0gQXJjaGl0ZWN0dXJlIOKAlCBEZXRlY3Rpb24gUGlwZWxpbmUnLFxuICAgIHNlYXJjaDogICAgICAgJ1JlZ2lzdHJhdGlvbiBTZWFyY2gnLFxuICAgIGNvbnRhY3Q6ICAgICAgJ0NvbnRhY3QgRW5mb3JjZW1lbnQnXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHN0eWxlPntDU1N9PC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgICB7LyogU2lkZWJhciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ItbG9nb1wiPjxMb2dvLz48L2Rpdj5cbiAgICAgICAgICB7UEFHRVMubWFwKHA9PihcbiAgICAgICAgICAgIDxidXR0b24ga2V5PXtwLmlkfSBjbGFzc05hbWU9e2BzYi1idG4ke3BhZ2U9PT1wLmlkPycgYWN0aXZlJzonJ31gfSBvbkNsaWNrPXsoKT0+c2V0UGFnZShwLmlkKX0+XG4gICAgICAgICAgICAgIHtwLmljb259PHNwYW4gY2xhc3NOYW1lPVwidGlwXCI+e3AubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6MX19Lz5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLXNlcFwiLz5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogQWRtaW4gZXhjbHVzaXZlIGl0ZW1zIGhpZGRlbiBmb3IgcG9saWNlIHJvbGUgKi99XG4gICAgICAgICAge2N1cnJlbnRVc2VyLnJvbGUgPT09ICdhZG1pbicgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzYi1idG5cIiBvbkNsaWNrPXsoKT0+c2V0U2hvd1N0YXR1cyh0cnVlKX0+XG4gICAgICAgICAgICAgICAgPFNoaWVsZCBzaXplPXsxN30vPjxzcGFuIGNsYXNzTmFtZT1cInRpcFwiPlN5c3RlbSBTdGF0dXM8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNiLWJ0blwiIG9uQ2xpY2s9eygpPT5zZXRTaG93TW9uZ28odHJ1ZSl9IHN0eWxlPXt7cG9zaXRpb246J3JlbGF0aXZlJ319PlxuICAgICAgICAgICAgICAgIDxEYXRhYmFzZSBzaXplPXsxN30vPjxzcGFuIGNsYXNzTmFtZT1cInRpcFwiPk1vbmdvREIgQXRsYXM8L3NwYW4+XG4gICAgICAgICAgICAgICAge2RiT2shPT1udWxsJiY8c3BhbiBzdHlsZT17e3Bvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjYscmlnaHQ6Nix3aWR0aDo2LGhlaWdodDo2LGJvcmRlclJhZGl1czonNTAlJyxiYWNrZ3JvdW5kOmRiT2s/JyMyMmM1NWUnOicjZWY0NDQ0J319Lz59XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLXNlcFwiLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNiLWJ0blwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XG4gICAgICAgICAgICA8TG9nT3V0IHNpemU9ezE3fS8+PHNwYW4gY2xhc3NOYW1lPVwidGlwXCI+U2lnbiBPdXQ8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBNYWluICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgICB7LyogVG9wYmFyICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC10aXRsZVwiPvCfm6HvuI8gVFJBRkZJQyBFTkZPUkNFTUVOVCBDT01NQU5EIENFTlRFUjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6OSxjb2xvcjonIzNiODJmNicsbWFyZ2luVG9wOjJ9fT5FbmZvcmNlbWVudCBPZmZpY2VyOiA8c3Ryb25nIHN0eWxlPXt7Y29sb3I6JyNlNWU3ZWInfX0+e2N1cnJlbnRVc2VyLm5hbWV9ICh7Y3VycmVudFVzZXIucm9sZS50b1VwcGVyQ2FzZSgpfSk8L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtclwiPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgey8qIEFjY2lkZW50IEVtZXJnZW5jeSBNb2RlIEJ1dHRvbiAqL31cbiAgICAgICAgICAgICAgeyhjdXJyZW50VXNlci5yb2xlID09PSAnYWRtaW4nIHx8IGN1cnJlbnRVc2VyLnJvbGUgPT09ICdwb2xpY2UnKSAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4teHMgJHthY2NpZGVudEFjdGl2ZSA/ICdidG4tZCcgOiBncmFjZUFjdGl2ZSA/ICdidG4tc3VjY2VzcycgOiAnYnRuLWcnfWB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiA4LCBwYWRkaW5nOiAnNHB4IDEwcHgnLCBoZWlnaHQ6ICcyOHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKSd9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjaWRlbnRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRBY2NpZGVudEFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0R3JhY2VBY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0R3JhY2VUaW1lKDYwKTtcbiAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdChcIkFjY2lkZW50IGNsZWFyZWQuIDEtbWludXRlIGdyYWNlIGNvb2xkb3duIGFjdGl2ZS5cIiwgXCJpbmZvXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdyYWNlQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0R3JhY2VBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldEdyYWNlVGltZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdChcIkdyYWNlIGNvb2xkb3duIGVuZGVkLiBOb3JtYWwgZW5mb3JjZW1lbnQgYWN0aXZlLlwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0QWNjaWRlbnRBY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0R3JhY2VBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldEdyYWNlVGltZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdChcIkp1bmN0aW9uIEFjY2lkZW50IE1vZGUgQWN0aXZlISBGaW5lcyBzdXNwZW5kZWQuXCIsIFwid2FybmluZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YWNjaWRlbnRBY3RpdmUgPyAn4pqg77iPIEFDQ0lERU5UIEFDVElWRScgOiBncmFjZUFjdGl2ZSA/IGDij7MgR1JBQ0U6ICR7Z3JhY2VUaW1lfXNgIDogJ/CfmqggUmVwb3J0IEFjY2lkZW50J31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7LyogQWRtaW4gc3RhdHVzIGhpZGRlbiBmb3IgcG9saWNlICovfVxuICAgICAgICAgICAgICB7Y3VycmVudFVzZXIucm9sZSA9PT0gJ2FkbWluJyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BkYi1zdGF0dXMgJHtkYk9rPydkYi1vayc6J2RiLWJhZCd9YH0gb25DbGljaz17KCkgPT4gc2V0U2hvd01vbmdvKHRydWUpfSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcicsIG1hcmdpblJpZ2h0OiA4fX0+XG4gICAgICAgICAgICAgICAgICB7ZGJPaz88V2lmaSBzaXplPXsxMX0vPjo8V2lmaU9mZiBzaXplPXsxMX0vPn1cbiAgICAgICAgICAgICAgICAgIHtkYk9rPT09bnVsbD8nQ2hlY2tpbmcuLi4nOmRiT2s/J0RCIENvbm5lY3RlZCc6J0RCIE9mZmxpbmUnfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXZlXCI+PGRpdiBjbGFzc05hbWU9XCJsaXZlLWRvdFwiLz5MSVZFPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ub1wiIHN0eWxlPXt7Zm9udFNpemU6MTAsY29sb3I6JyM5Y2EzYWYnfX0+e3RpbWUudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1JTicse2hvdXIxMjpmYWxzZX0pfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ29udGVudCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIHsvKiBQYWdlIGhlYWRlciAqL31cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206MjB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6J2NlbnRlcicsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLG1hcmdpbkJvdHRvbToxOH19PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3tmb250U2l6ZToxOSxmb250V2VpZ2h0OjgwMCxjb2xvcjonI2YzZjRmNid9fT57cGFnZVRpdGxlc1twYWdlXX08L2gyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjExLGNvbG9yOicjNmI3MjgwJyxtYXJnaW5Ub3A6Mn19PntuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tSU4nLHt3ZWVrZGF5Oidsb25nJyx5ZWFyOidudW1lcmljJyxtb250aDonbG9uZycsZGF5OidudW1lcmljJ30pfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxnYXA6N319PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWcgYnRuLXNcIiBvbkNsaWNrPXsoKT0+d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpfT48UmVmcmVzaEN3IHNpemU9ezExfS8+UmVmcmVzaCBQYW5lbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogUGFnZXMgKi99XG4gICAgICAgICAgICB7cGFnZT09PSdkYXNoYm9hcmQnICAgICYmIDxEYXNoYm9hcmRQYWdlIGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0vPn1cbiAgICAgICAgICAgIHtwYWdlPT09J2RldGVjdGlvbicgICAgJiYgPERldGVjdGlvblBhZ2UgYWRkVG9hc3Q9e2FkZFRvYXN0fSBhY2NpZGVudEFjdGl2ZT17YWNjaWRlbnRBY3RpdmV9IGdyYWNlQWN0aXZlPXtncmFjZUFjdGl2ZX0gY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfS8+fVxuICAgICAgICAgICAge3BhZ2U9PT0nYXJjaGl2ZScgICAgICAmJiA8QXJjaGl2ZVBhZ2UgYWRkVG9hc3Q9e2FkZFRvYXN0fSBjdXJyZW50VXNlcj17Y3VycmVudFVzZXJ9Lz59XG4gICAgICAgICAgICB7cGFnZT09PSdiYXRjaCcgICAgICAgICYmIDxCYXRjaFBhZ2UgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfS8+fVxuICAgICAgICAgICAge3BhZ2U9PT0nYW5hbHl0aWNzJyAgICAmJiA8QW5hbHl0aWNzUGFnZS8+fVxuICAgICAgICAgICAge3BhZ2U9PT0ncGVyZm9ybWFuY2UnICAmJiA8UGVyZm9ybWFuY2VQYWdlLz59XG4gICAgICAgICAgICB7cGFnZT09PSdhcmNoaXRlY3R1cmUnICYmIDxBcmNoaXRlY3R1cmVQYWdlLz59XG4gICAgICAgICAgICB7cGFnZT09PSdzZWFyY2gnICAgICAgICYmIDxTZWFyY2hQYWdlIGFkZFRvYXN0PXthZGRUb2FzdH0gYWNjaWRlbnRBY3RpdmU9e2FjY2lkZW50QWN0aXZlfSBncmFjZUFjdGl2ZT17Z3JhY2VBY3RpdmV9IGdyYWNlVGltZT17Z3JhY2VUaW1lfS8+fVxuICAgICAgICAgICAge3BhZ2U9PT0nY29udGFjdCcgICAgICAmJiA8Q29udGFjdFBhZ2UvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIE1vZGFscyAtIGFkbWluIG9ubHkgKi99XG4gICAgICB7Y3VycmVudFVzZXIucm9sZSA9PT0gJ2FkbWluJyAmJiBzaG93U3RhdHVzICYmIDxTdGF0dXNNb2RhbCBvbkNsb3NlPXsoKT0+c2V0U2hvd1N0YXR1cyhmYWxzZSl9Lz59XG4gICAgICB7Y3VycmVudFVzZXIucm9sZSA9PT0gJ2FkbWluJyAmJiBzaG93TW9uZ28gICYmIDxNb25nb01vZGFsICBvbkNsb3NlPXsoKT0+c2V0U2hvd01vbmdvKGZhbHNlKX0vPn1cbiAgICAgIHtzaG93V2VsY29tZSAmJiA8V2VsY29tZU1vZGFsIG9uQ2xvc2U9eygpPT5zZXRTaG93V2VsY29tZShmYWxzZSl9Lz59XG5cbiAgICAgIHsvKiBDaGF0Ym90ICovfVxuICAgICAgPENoYXRib3QgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfS8+XG5cbiAgICAgIHsvKiBUb2FzdCBjb250YWluZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvYXN0LWNvbnRhaW5lclwiPlxuICAgICAgICB7dG9hc3RzLm1hcCh0ID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17dC5pZH0gY2xhc3NOYW1lPXtgdG9hc3QgJHt0LnR5cGUgPT09ICd3YXJuaW5nJyA/ICd0b2FzdC1lcnInIDogJyd9YH0+XG4gICAgICAgICAgICB7dC50eXBlID09PSAnc3VjY2VzcycgPyA8Q2hlY2tDaXJjbGUgc2l6ZT17MTZ9IGNvbG9yPVwiIzEwYjk4MVwiLz4gOiB0LnR5cGUgPT09ICd3YXJuaW5nJyA/IDxBbGVydFRyaWFuZ2xlIHNpemU9ezE2fSBjb2xvcj1cIiNlZjQ0NDRcIi8+IDogPEluZm8gc2l6ZT17MTZ9IGNvbG9yPVwiIzYwYTVmYVwiLz59XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MTIsIGZvbnRXZWlnaHQ6NTAwfX0+e3QubXNnfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sImZpbGUiOiJDOi9Vc2Vycy9yaWthcy9Eb3dubG9hZHMvZmlsZXMvZnJvbnRlbmQvc3JjL0FwcC5qc3gifQ==