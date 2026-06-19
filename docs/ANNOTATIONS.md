# Traffic Violation Detection System — Annotation Guidelines

## Purpose
This document defines what counts as a traffic violation for annotation purposes.
All human annotators must read this before labeling any image.

---

## General Rules

1. **Annotate on original images only** — never use preprocessed/enhanced versions for labeling
2. **When in doubt** → mark as `REQUIRES_SECOND_REVIEW`, do NOT annotate ambiguous cases
3. **Minimum resolution** for annotation: 320×240 pixels
4. **Minimum bounding box**: 20×20 pixels; include 5px padding around target
5. **Inter-annotator agreement target**: Cohen's κ ≥ 0.80

---

## Violation Definitions

### 1. Helmet Non-Compliance (`HELMET_NON_COMPLIANCE`)

**Definition**: The primary rider of a 2-wheeler is NOT wearing a certified motorcycle helmet.

**Visual Indicators**:
- Bare head / hair / scalp clearly visible
- Helmet present but not on head (hanging from handlebar)
- Helmet present but not strapped (visual cue: loose strap)

**Do NOT annotate**:
- Riders travelling within a gated compound or parking lot
- Sikh riders wearing a turban
- Military or police personnel in official uniform
- Children as secondary passengers (handled by PASSENGER_HELMET)

---

### 2. Triple Riding (`TRIPLE_RIDING`)

**Definition**: 3 or more persons seated on a single 2-wheeler.

**Visual Indicators**:
- Three distinct human torsos or heads visible on motorcycle/scooter
- Draw bounding box around entire 2-wheeler

**Do NOT annotate**:
- Child under approximately 6 years of age seated in front (between rider and handlebars) — count as 0
- Sidecar-equipped motorcycles (these are legal for 2 persons)

---

### 3. Red Light Violation (`RED_LIGHT_VIOLATION`)

**Definition**: Vehicle crosses the painted stop-line AFTER signal has turned RED.

**Requires ALL of these simultaneously**:
1. Signal state = RED (visible in frame OR time-synchronized with camera)
2. Vehicle front bumper/wheel is BEYOND the painted stop-line
3. Vehicle is in motion (not already past the line before light changed)

**Do NOT annotate**:
- Vehicles that were mid-intersection when the light turned red
- Emergency vehicles (ambulance, fire truck, police)
- Vehicles that stop just beyond the line (mark as STOP_LINE_VIOLATION instead)

---

### 4. Seatbelt Non-Compliance (`SEATBELT_NON_COMPLIANCE`)

**Definition**: Driver or front passenger not wearing a visible seatbelt strap.

**Visual Indicators**:
- No diagonal seatbelt strap visible across driver's torso
- Strap present but not buckled (loose, hanging to side)

**Do NOT annotate**:
- Rear-seat passengers (not in scope for this prototype)
- Occupants not visible due to tinted windows

---

### 5. Mobile Phone Usage (`MOBILE_PHONE_USAGE`)

**Definition**: Driver actively holding a phone to ear, or visibly looking down at a device, while vehicle is in motion.

**Visual Indicators**:
- Phone-shaped object held near face/ear
- Driver's head tilted downward toward lap (looking at screen)

**Do NOT annotate**:
- Vehicles that are stationary/parked
- Hands-free devices (earpiece, Bluetooth)

---

### 6. Wrong-Side Driving (`WRONG_SIDE_DRIVING`)

**Definition**: Vehicle travelling against the flow of traffic on a divided road.

**Visual Indicators**:
- Vehicle facing camera from the opposite direction on a one-way section
- Vehicle bounding box trajectory pointing into oncoming lane

**Do NOT annotate**:
- Vehicles reversing in a parking area
- Emergency vehicle overtaking maneuvers

---

### 7. Stop Line Violation (`STOP_LINE_VIOLATION`)

**Definition**: Vehicle front stops more than 1 metre past the painted stop-line while signal is RED.

**Visual Indicators**:
- Vehicle front bumper/wheel clearly beyond white painted line
- Distinct from RED_LIGHT_VIOLATION: vehicle is stopped but past the line

---

### 8. Illegal Parking (`ILLEGAL_PARKING`)

**Definition**: Vehicle parked in a clearly marked no-parking zone for more than 5 minutes.

**Visual Indicators**:
- Yellow no-parking markings visible on road/kerb
- Vehicle is stationary with no visible occupant
- Parked at bus stop, fire exit, or intersection yellow box

**Do NOT annotate**:
- Loading/unloading operations under 2 minutes
- Emergency stops (hazards flashing)
- Vehicles on private property

---

### 9. Overloaded Vehicle (`OVERLOADED_VEHICLE`)

**Definition**: Truck/van/auto carrying load exceeding safe limits.

**Visual Indicators**:
- Goods sticking out more than 30cm beyond vehicle boundary
- Rear suspension visibly compressed (vehicle leaning backward)
- Tarpaulin covering goods clearly bulging beyond sides

---

## Bounding Box Standards

| Violation | Box Around |
|-----------|-----------|
| HELMET_NON_COMPLIANCE | Rider's head + 5px padding |
| TRIPLE_RIDING | Entire 2-wheeler + all passengers |
| RED_LIGHT_VIOLATION | Entire vehicle |
| SEATBELT_NON_COMPLIANCE | Driver torso + upper body |
| MOBILE_PHONE_USAGE | Driver head + hand holding phone |
| WRONG_SIDE_DRIVING | Entire vehicle |
| STOP_LINE_VIOLATION | Entire vehicle + stop-line in frame |
| ILLEGAL_PARKING | Entire vehicle |
| OVERLOADED_VEHICLE | Entire vehicle including load |

---

## Confidence Thresholds (for Model Review)

| Violation Type | Confidence Threshold | Rationale |
|----------------|---------------------|-----------|
| HELMET_NON_COMPLIANCE | 70% | Clear visual signal; low threshold acceptable |
| TRIPLE_RIDING | 75% | Person counting can fail in occlusion |
| RED_LIGHT_VIOLATION | 80% | High legal stakes; require high confidence |
| SEATBELT_NON_COMPLIANCE | 72% | Partially obscured in many cases |
| MOBILE_PHONE_USAGE | 72% | Small object; many false positives |
| WRONG_SIDE_DRIVING | 78% | Direction estimation prone to error |
| STOP_LINE_VIOLATION | 70% | Geometric check; generally reliable |
| ILLEGAL_PARKING | 70% | Static scene; high reliability |
| OVERLOADED_VEHICLE | 75% | Visual estimation of load size |

---

## Flag for Manual Review When:

1. Model confidence is below the threshold listed above
2. Image quality score (blur) > 0.35
3. Image brightness < 0.30 (very dark)
4. Multiple violations overlap (vehicle doing triple-riding AND wrong-side)
5. License plate is unreadable or partially visible
6. Vehicle type is ambiguous (e.g., large scooter vs small motorcycle)

---

## Dataset Split

| Split | Percentage | Minimum Images |
|-------|-----------|----------------|
| Training | 60% | 120 images |
| Validation | 20% | 40 images |
| Test | 20% | 40 images |

**CRITICAL**: Never mix train/test data. Label each image as train/val/test BEFORE annotating.

---

## Revision History

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-06-01 | Initial guidelines |
| 1.1 | 2026-06-10 | Added Sikh/turban exemption, sidecar exemption |
