---
layout: page
title: Cliff Detection from RGB Images
description: Monocular depth-based cliff detection pipeline for autonomous robots using Depth Anything V3.
img: assets/img/cliff_detection_warehouse.png
importance: 3
year: 2026
category: software
related_publications: false
---

Cliff edges — stair drops, loading dock ledges — are invisible to traditional 2D LiDAR, which scans horizontally. This project builds a cliff detection pipeline for autonomous robots using only a single RGB camera.

### Approach

The pipeline runs **Depth Anything V3 (DA3)** on each video frame to produce a dense depth map, reconstructs the local 3D geometry, fits a ground plane via **RANSAC**, and flags regions that fall significantly below that plane as potential cliffs.

### Scene Generation

Evaluation data is produced using **Blender + VisionSIM**, which renders synthetic warehouse scenes and outputs RGB frames, per-pixel ground-truth depth, and camera poses. This sidesteps the impracticality of collecting calibrated ground-truth depth from real environments.

Scenes are parameterized — geometry, textures, lighting, and cliff distance can all be varied — and a scene script + seed deterministically regenerates the exact same frames, making evaluations reproducible. The primary test case is a warehouse loading-dock scene: a **3 m × 1.5 m dock** with a **0.75 m drop**, rendered at 640×480 with a 70° horizontal FoV.

### Results

Evaluated on warehouse loading-dock scenarios with synthetic ground-truth depth from **VisionSIM**:

- **DA3-Large**: median AbsRel error of 0.090, δ₁ accuracy of 94.96%
- **Weighted sliding-window alignment** mitigates model scale drift across trajectories

[View project →](https://gnsh-a.github.io/repo766/)
