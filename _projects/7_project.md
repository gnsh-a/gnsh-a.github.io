---
layout: page
title: Loader Simulation with DEM
description: Modeling wheel loader-soil interaction using Chrono::Engine and DEM
img: assets/img/kom_1.jpeg
importance: 3
category: software
related_publications: false
---

In collaboration with **Komatsu**, this project focuses on the high-fidelity simulation of **wheel loader digging operations**. By leveraging **Chrono::Engine** and a **Discrete Element Method (DEM)** terrain model, the work simulates realistic soil-tool interactions to evaluate loader performance for design, control, and automation purposes.

---

### Key Contributions

- **Vehicle Modeling**: Developed a rigid-body model of a wheel loader using Chrono’s Multi-Body Dynamics (MBD) engine, incorporating articulated steering, hydraulic lift arms, and bucket mechanisms.
- **DEM Terrain Setup**: Configured large-scale granular terrain beds using **DEM-E**, modeling soil as spherical particles with calibrated contact properties to ensure physical accuracy.
- **Loader-Soil Interaction**: Simulated digging operations to analyze the interaction between the moving bucket and DEM terrain, tracking reaction forces, torques, and resistance profiles.
- **Simulation Automation**: Implemented scripts to automate dig cycles, enabling testing under varied approach angles, depths, and bucket trajectories.
- **Performance Metrics & Visualization**: Logged key metrics such as penetration forces, soil flow, and loading efficiency, while visualizing simulations to depict terrain deformation and particle flow fields.

---

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/kom_1.jpeg" title="Image of a Loader" class="img-fluid rounded z-depth-1" width="880" height="530" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/gif/bucket1.gif" title="DEM Soil Response During Digging" class="img-fluid rounded z-depth-1" width="880" height="530" %}
  </div>
</div>

<div class="caption">
  Left: Wheel Loader Model. Right: Visualization of soil particle deformation and interaction during the digging phase.
</div>

---

This project enhances expertise in **physics-based simulation** and **granular material modeling**, contributing to the development of tools for **off-road automation** and **heavy equipment performance evaluation**.
