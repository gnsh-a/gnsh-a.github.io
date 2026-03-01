---
layout: page
title: Lunar Rover Vehicle Simulation Infrastructure
description: GPU-accelerated framework for lunar vehicle simulation
img: assets/img/int_2.png
importance: 3
year: 2025
category: software
related_publications: false
---

As a graduate researcher at the **Simulation-Based Engineering Lab (UW–Madison)**, I contribute to the development of simulation infrastructure for **MoonRacer** — a lunar mobility simulation project in collaboration with **Intuitive Machines**.

My work focuses on building a GPU-accelerated simulation pipeline for analyzing **lunar vehicle-terrain interaction**, with **CRM-based deformable terrain** and **ANCF tire models**, using **Project Chrono**.

### Key Contributions:

- **Simulation Framework Development**: I extend and maintain Chrono’s modular infrastructure to support MoonRacer simulations, enabling scalable lunar rover testing scenarios.
- **CRM Terrain Modeling**: I integrate **Continuum Representation of Material (CRM)** terrain into Chrono to realistically simulate lunar regolith response under rover wheel loads.
- **ANCF Tire Models**: I implement **Absolute Nodal Coordinate Formulation (ANCF)** for flexible tire modeling, enabling detailed simulation of wheel-soil contact and sinkage.
- **Visualization & Logging Tools**: I build debugging overlays and logging utilities for visualizing contact forces, terrain deformation, and rover response metrics.

---

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/int_1.jpg" title="Concept of the vehicle" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/int_2.png" title="Chrono Simulation Framework" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Left: Vehicle concept. Right: Simulation of rover using ANCF tire model.
</div>

This project strengthens my expertise in **multi-body simulation**, **high-performance computing**, and **vehicle-environment interaction modeling** — and prepares me to contribute to extreme-terrain mobility tools and simulation-based design workflows.
