const EXERCISES = [
  { id: 'arnold-press', name: 'Arnold Press', description: 'Rotational shoulder press from palms-in to palms-out', tips: 'Rotate smoothly as you press overhead.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'increase', restThreshold: 105, peakThreshold: 155 } },
  { id: 'bench-press', name: 'Bench Press (Dumbbell)', description: 'Press dumbbells up from chest while lying back', tips: 'Plant feet firmly and press to full lockout.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'increase', restThreshold: 100, peakThreshold: 155 } },
  { id: 'bent-over-rear-delt-raise', name: 'Bent-Over Rear Delt Raise', description: 'Raise dumbbells out while hinged at the hips', tips: 'Keep torso stable and raise in a wide arc.', joints: { a: 'hip', b: 'shoulder', c: 'elbow' }, counting: { direction: 'increase', restThreshold: 30, peakThreshold: 75 } },
  { id: 'bicep-curl', name: 'Bicep Curl', description: 'Curl dumbbells toward shoulders', tips: 'Keep elbows tucked and control both directions.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'decrease', restThreshold: 150, peakThreshold: 70 } },
  { id: 'bulgarian-split-squat', name: 'Bulgarian Split Squat (Dumbbell)', description: 'Rear foot elevated split squat while holding dumbbells', tips: 'Keep chest up and drive through the front heel.', joints: { a: 'hip', b: 'knee', c: 'ankle' }, counting: { direction: 'decrease', restThreshold: 170, peakThreshold: 95 } },
  { id: 'clean-and-press', name: 'Clean and Press (Dumbbell)', description: 'Explosive clean followed by an overhead press', tips: 'Use legs and core, then press smoothly.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'increase', restThreshold: 100, peakThreshold: 155 } },
  { id: 'concentration-curl', name: 'Concentration Curl', description: 'Seated curl with elbow braced on inner thigh', tips: 'Stay strict and squeeze at the top.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'decrease', restThreshold: 150, peakThreshold: 70 } },
  { id: 'deadlift-dumbbell', name: 'Deadlift (Dumbbell)', description: 'Hip hinge deadlift with dumbbells', tips: 'Hinge from hips and keep back neutral.', joints: { a: 'shoulder', b: 'hip', c: 'knee' }, counting: { direction: 'increase', restThreshold: 65, peakThreshold: 155 } },
  { id: 'decline-pushup', name: 'Decline Push-up', description: 'Push-up with feet elevated on a chair or bench', tips: 'Keep body straight and lower with control.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'increase', restThreshold: 90, peakThreshold: 150 } },
  { id: 'dumbbell-fly', name: 'Dumbbell Fly', description: 'Open arms wide and squeeze together at the top', tips: 'Maintain a slight elbow bend throughout.', joints: { a: 'hip', b: 'shoulder', c: 'elbow' }, counting: { direction: 'decrease', restThreshold: 85, peakThreshold: 35 } },
  { id: 'dumbbell-jump-squat', name: 'Dumbbell Jump Squat', description: 'Explosive squat jumps while holding light dumbbells', tips: 'Land softly and reset before next jump.', joints: { a: 'hip', b: 'knee', c: 'ankle' }, counting: { direction: 'decrease', restThreshold: 170, peakThreshold: 90 } },
  { id: 'dumbbell-row', name: 'Dumbbell Row', description: 'Bent-over single-arm row pulling dumbbell to hip', tips: 'Brace your torso and drive elbow back.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'decrease', restThreshold: 155, peakThreshold: 70 } },
  { id: 'floor-press', name: 'Floor Press (Dumbbell)', description: 'Press dumbbells lying on the floor', tips: 'Pause lightly at elbows-on-floor position.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'increase', restThreshold: 100, peakThreshold: 155 } },
  { id: 'front-raise', name: 'Front Raise', description: 'Raise dumbbells forward to shoulder height', tips: 'Lift with control; avoid torso swinging.', joints: { a: 'hip', b: 'shoulder', c: 'elbow' }, counting: { direction: 'increase', restThreshold: 30, peakThreshold: 75 } },
  { id: 'goblet-squat', name: 'Goblet Squat', description: 'Front-loaded squat with one dumbbell', tips: 'Keep elbows in and chest tall.', joints: { a: 'hip', b: 'knee', c: 'ankle' }, counting: { direction: 'decrease', restThreshold: 170, peakThreshold: 95 } },
  { id: 'hammer-curl', name: 'Hammer Curl', description: 'Neutral-grip curl with thumbs facing up', tips: 'Keep wrists neutral and elbows still.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'decrease', restThreshold: 150, peakThreshold: 70 } },
  { id: 'hip-thrust-dumbbell', name: 'Hip Thrust (Dumbbell)', description: 'Glute-focused bridge with dumbbell on hips', tips: 'Pause and squeeze glutes at the top.', joints: { a: 'shoulder', b: 'hip', c: 'knee' }, counting: { direction: 'increase', restThreshold: 85, peakThreshold: 150 } },
  { id: 'incline-bench-press', name: 'Incline Bench Press (Dumbbell)', description: 'Incline press to target upper chest', tips: 'Press up and slightly inward.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'increase', restThreshold: 100, peakThreshold: 155 } },
  { id: 'incline-curl', name: 'Incline Curl', description: 'Biceps curls on an incline bench', tips: 'Let arms fully lengthen at the bottom.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'decrease', restThreshold: 150, peakThreshold: 70 } },
  { id: 'incline-reverse-fly', name: 'Incline Reverse Fly', description: 'Chest-supported rear delt raise', tips: 'Lead with elbows and avoid shrugging.', joints: { a: 'hip', b: 'shoulder', c: 'elbow' }, counting: { direction: 'increase', restThreshold: 35, peakThreshold: 75 } },
  { id: 'lateral-lunge-dumbbell', name: 'Lateral Lunge (Dumbbell)', description: 'Side lunges with dumbbells at your sides', tips: 'Sit into one hip and keep the other leg straight.', joints: { a: 'hip', b: 'knee', c: 'ankle' }, counting: { direction: 'decrease', restThreshold: 170, peakThreshold: 95 } },
  { id: 'lateral-raise', name: 'Lateral Raise', description: 'Raise dumbbells out to shoulder height from sides', tips: 'Lead with elbows and keep a slight bend.', joints: { a: 'hip', b: 'shoulder', c: 'elbow' }, counting: { direction: 'increase', restThreshold: 30, peakThreshold: 75 } },
  { id: 'lunge-dumbbell', name: 'Lunge (Dumbbell)', description: 'Forward or reverse lunges with dumbbells', tips: 'Keep front knee tracking over toes.', joints: { a: 'hip', b: 'knee', c: 'ankle' }, counting: { direction: 'decrease', restThreshold: 170, peakThreshold: 95 } },
  { id: 'neutral-grip-press', name: 'Neutral-Grip Press (Dumbbell)', description: 'Press with palms facing each other', tips: 'Keep elbows 30–45° from torso.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'increase', restThreshold: 100, peakThreshold: 155 } },
  { id: 'overhead-carry-dumbbell', name: 'Overhead Carry (Dumbbell)', description: 'Walk while holding one or two dumbbells overhead', tips: 'Keep ribs down and shoulder packed.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'increase', restThreshold: 105, peakThreshold: 155 } },
  { id: 'pullup', name: 'Pull-up', description: 'Vertical pull from dead hang to chin above bar', tips: 'Start from dead hang and pull smoothly.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'decrease', restThreshold: 155, peakThreshold: 70 } },
  { id: 'renegade-row', name: 'Renegade Row', description: 'Plank row alternating dumbbells', tips: 'Keep hips square and core tight.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'decrease', restThreshold: 155, peakThreshold: 70 } },
  { id: 'reverse-fly', name: 'Reverse Fly (Dumbbell)', description: 'Bent-over reverse fly for rear deltoids', tips: 'Slight elbow bend and raise in a wide arc.', joints: { a: 'hip', b: 'shoulder', c: 'elbow' }, counting: { direction: 'increase', restThreshold: 35, peakThreshold: 75 } },
  { id: 'romanian-deadlift-dumbbell', name: 'Romanian Deadlift (Dumbbell)', description: 'Hip-hinge deadlift with slight knee bend', tips: 'Push hips back and keep dumbbells close.', joints: { a: 'shoulder', b: 'hip', c: 'knee' }, counting: { direction: 'increase', restThreshold: 65, peakThreshold: 155 } },
  { id: 'russian-twist-dumbbell', name: 'Russian Twist (Dumbbell)', description: 'Seated rotational core movement', tips: 'Rotate from trunk, not just arms.', joints: { a: 'hip', b: 'shoulder', c: 'elbow' }, counting: { direction: 'increase', restThreshold: 35, peakThreshold: 80 } },
  { id: 'seated-calf-raise-dumbbell', name: 'Seated Calf Raise (Dumbbell)', description: 'Seated calf raises with dumbbells on knees', tips: 'Use full ankle range and pause at top.', joints: { a: 'hip', b: 'knee', c: 'ankle' }, counting: { direction: 'increase', restThreshold: 95, peakThreshold: 165 } },
  { id: 'seated-shoulder-press', name: 'Seated Shoulder Press (Dumbbell)', description: 'Overhead press while seated', tips: 'Keep core braced and press straight up.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'increase', restThreshold: 110, peakThreshold: 155 } },
  { id: 'shoulder-press', name: 'Shoulder Press', description: 'Press dumbbells overhead from shoulder height', tips: 'Start around 90° elbow bend and lock out smoothly.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'increase', restThreshold: 110, peakThreshold: 155 } },
  { id: 'single-leg-romanian-deadlift', name: 'Single-Leg Romanian Deadlift', description: 'Unilateral hinge for balance and posterior chain', tips: 'Keep hips square and move slowly.', joints: { a: 'shoulder', b: 'hip', c: 'knee' }, counting: { direction: 'increase', restThreshold: 65, peakThreshold: 155 } },
  { id: 'skullcrusher', name: 'Skullcrusher', description: 'Lying tricep extension lowering dumbbells toward forehead', tips: 'Keep upper arms still and extend forcefully.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'increase', restThreshold: 80, peakThreshold: 150 } },
  { id: 'split-squat-dumbbell', name: 'Split Squat (Dumbbell)', description: 'Stationary lunge holding dumbbells', tips: 'Drop straight down and maintain balance.', joints: { a: 'hip', b: 'knee', c: 'ankle' }, counting: { direction: 'decrease', restThreshold: 170, peakThreshold: 95 } },
  { id: 'step-up-dumbbell', name: 'Step-Up (Dumbbell)', description: 'Step onto box/bench with dumbbells', tips: 'Drive through the whole foot on the step.', joints: { a: 'hip', b: 'knee', c: 'ankle' }, counting: { direction: 'decrease', restThreshold: 170, peakThreshold: 95 } },
  { id: 'suitcase-carry-dumbbell', name: 'Suitcase Carry (Dumbbell)', description: 'Walk while holding a dumbbell on one side', tips: 'Stay tall and resist side bending.', joints: { a: 'hip', b: 'shoulder', c: 'elbow' }, counting: { direction: 'increase', restThreshold: 35, peakThreshold: 80 } },
  { id: 'thruster-dumbbell', name: 'Thruster (Dumbbell)', description: 'Front squat into overhead press', tips: 'Use leg drive to transition into the press.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'increase', restThreshold: 100, peakThreshold: 155 } },
  { id: 'tricep-extension', name: 'Tricep Extension', description: 'Single-arm overhead tricep extension', tips: 'Keep upper arm nearly vertical and extend fully.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'increase', restThreshold: 100, peakThreshold: 150 } },
  { id: 'upright-row-dumbbell', name: 'Upright Row (Dumbbell)', description: 'Pull dumbbells vertically toward upper chest', tips: 'Lead with elbows; avoid excessive shrugging.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'decrease', restThreshold: 150, peakThreshold: 80 } },
  { id: 'wrist-curl-dumbbell', name: 'Wrist Curl (Dumbbell)', description: 'Forearm flexion-focused wrist curls', tips: 'Use light load and controlled tempo.', joints: { a: 'shoulder', b: 'elbow', c: 'wrist' }, counting: { direction: 'decrease', restThreshold: 150, peakThreshold: 85 } },
];

// ─── Preset Workout Plan Templates ──────────────────────────────────────────
const PRESET_PLANS = [
  {
    id: 'arms-blast',
    name: 'Arms Blast',
    description: 'Dedicated biceps & triceps hypertrophy session',
    plan: [
      { exerciseId: 'bicep-curl',          sets: 4, reps: 12, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'hammer-curl',          sets: 3, reps: 12, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'concentration-curl',   sets: 3, reps: 10, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'tricep-extension',     sets: 4, reps: 12, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'skullcrusher',         sets: 3, reps: 12, restBetweenSets: 60, restAfterExercise: 0 },
    ]
  },
  {
    id: 'arnold-blueprint',
    name: 'Arnold Blueprint',
    description: 'Arnold-inspired high-volume upper-body split',
    plan: [
      { exerciseId: 'bench-press',      sets: 5, reps: 10, restBetweenSets: 90, restAfterExercise: 120 },
      { exerciseId: 'dumbbell-fly',     sets: 5, reps: 10, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'shoulder-press',   sets: 5, reps: 10, restBetweenSets: 90, restAfterExercise: 90 },
      { exerciseId: 'lateral-raise',    sets: 5, reps: 12, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'bicep-curl',       sets: 5, reps: 10, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'tricep-extension', sets: 5, reps: 10, restBetweenSets: 60, restAfterExercise: 0 },
    ]
  },
  {
    id: 'beginner-full-body',
    name: 'Beginner Full Body',
    description: 'Classic 3-day/week full-body routine for beginners',
    plan: [
      { exerciseId: 'shoulder-press',   sets: 3, reps: 10, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'dumbbell-row',     sets: 3, reps: 10, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'bicep-curl',       sets: 3, reps: 12, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'tricep-extension', sets: 3, reps: 12, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'lateral-raise',    sets: 3, reps: 15, restBetweenSets: 45, restAfterExercise: 0 },
    ]
  },
  {
    id: 'ppl-pull',
    name: 'PPL – Pull Day',
    description: 'Push/Pull/Legs split: back & biceps session',
    plan: [
      { exerciseId: 'pullup',              sets: 4, reps: 8,  restBetweenSets: 90, restAfterExercise: 120 },
      { exerciseId: 'dumbbell-row',        sets: 4, reps: 10, restBetweenSets: 90, restAfterExercise: 90 },
      { exerciseId: 'reverse-fly',         sets: 3, reps: 15, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'bicep-curl',          sets: 3, reps: 12, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'hammer-curl',         sets: 3, reps: 12, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'concentration-curl',  sets: 3, reps: 10, restBetweenSets: 60, restAfterExercise: 0 },
    ]
  },
  {
    id: 'ppl-push',
    name: 'PPL – Push Day',
    description: 'Push/Pull/Legs split: chest, shoulders & triceps',
    plan: [
      { exerciseId: 'bench-press',      sets: 4, reps: 10, restBetweenSets: 90, restAfterExercise: 120 },
      { exerciseId: 'shoulder-press',   sets: 3, reps: 10, restBetweenSets: 90, restAfterExercise: 90 },
      { exerciseId: 'dumbbell-fly',     sets: 3, reps: 12, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'lateral-raise',    sets: 3, reps: 15, restBetweenSets: 45, restAfterExercise: 90 },
      { exerciseId: 'tricep-extension', sets: 3, reps: 12, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'skullcrusher',     sets: 3, reps: 12, restBetweenSets: 60, restAfterExercise: 0 },
    ]
  },
  {
    id: 'shoulder-sculpt',
    name: 'Shoulder Sculpt',
    description: 'Complete shoulder development: front, side & rear delts',
    plan: [
      { exerciseId: 'shoulder-press',  sets: 4, reps: 10, restBetweenSets: 90, restAfterExercise: 90 },
      { exerciseId: 'lateral-raise',   sets: 4, reps: 15, restBetweenSets: 60, restAfterExercise: 90 },
      { exerciseId: 'reverse-fly',     sets: 4, reps: 15, restBetweenSets: 60, restAfterExercise: 0 },
    ]
  },
  {
    id: 'strength-5x5',
    name: '5×5 Strength',
    description: 'Heavy compound movements — 5 sets × 5 reps for strength gains',
    plan: [
      { exerciseId: 'bench-press',    sets: 5, reps: 5, restBetweenSets: 180, restAfterExercise: 180 },
      { exerciseId: 'shoulder-press', sets: 5, reps: 5, restBetweenSets: 180, restAfterExercise: 180 },
      { exerciseId: 'dumbbell-row',   sets: 5, reps: 5, restBetweenSets: 180, restAfterExercise: 180 },
      { exerciseId: 'pullup',         sets: 5, reps: 5, restBetweenSets: 180, restAfterExercise: 0 },
    ]
  },
];

// ─── MoveNet keypoint name → index ──────────────────────────────────────────
const KP = {
  nose: 0,
  left_eye: 1, right_eye: 2,
  left_ear: 3, right_ear: 4,
  left_shoulder: 5, right_shoulder: 6,
  left_elbow: 7, right_elbow: 8,
  left_wrist: 9, right_wrist: 10,
  left_hip: 11, right_hip: 12,
  left_knee: 13, right_knee: 14,
  left_ankle: 15, right_ankle: 16
};

const SKELETON = [
  ['left_shoulder', 'right_shoulder'],
  ['left_shoulder', 'left_elbow'],
  ['left_elbow', 'left_wrist'],
  ['right_shoulder', 'right_elbow'],
  ['right_elbow', 'right_wrist'],
  ['left_shoulder', 'left_hip'],
  ['right_shoulder', 'right_hip'],
  ['left_hip', 'right_hip'],
  ['left_hip', 'left_knee'],
  ['left_knee', 'left_ankle'],
  ['right_hip', 'right_knee'],
  ['right_knee', 'right_ankle'],
];

const DEFAULT_REST_BETWEEN_SETS = 30;
const MIN_KEYPOINT_CONFIDENCE = 0.3;
const ANGLE_SMOOTHING_FRAMES = 6;
