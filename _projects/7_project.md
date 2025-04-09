---
layout: page
title: Loader Simulation with DEM
description: Modeling wheel loader-soil interaction using Chrono::Engine and DEM
img: assets/img/kom_1.jpeg
importance: 1
category: simulation
related_publications: false
---

As part of a research collaboration between **Komatsu** and the **Simulation-Based Engineering Lab (SBEL)** at UW–Madison, I am working on high-fidelity simulation of **wheel loader digging operations** using **Chrono::Engine** with a **Discrete Element Method (DEM)** terrain model.

The goal is to simulate realistic soil-tool interaction and evaluate loader performance for design, control, and automation applications.

---

### Key Contributions

- **Vehicle Modeling**: I help build a rigid-body model of a wheel loader using Chrono’s MBD engine, including articulated steering, hydraulic lift arms, and bucket mechanisms.
- **DEM Terrain Setup**: I configure large-scale granular terrain beds using **DEM-E**, representing soil as spherical particles with calibrated contact properties.
- **Loader-Soil Interaction**: I simulate digging operations with a moving bucket interacting with DEM terrain, tracking forces, torques, and resistance profiles.
- **Simulation Automation**: I create scripts for running automated dig cycles under varied approach angles, depths, and bucket trajectories.
- **Performance Metrics & Visualization**: I log penetration forces, soil flow, and loading efficiency, and visualize the simulations with terrain deformation and particle flow fields.

---

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">s
    {% include figure.liquid path="assets/img/kom_1.jpeg" title="Image of a Loader" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/komatsu_loader_2.jpg" title="DEM Soil Response During Digging" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Left: Image of a Loader. Right: Soil particle deformation and interaction visualized during the digging phase.
</div>

---

This project strengthens my experience in **physics-based simulation**, **granular material modeling**, and the development of tools for **off-road automation and heavy equipment performance evaluation**.
