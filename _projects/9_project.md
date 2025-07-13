---
layout: page
title: GPU-Based Linear Solvers for Multibody Dynamics
description: High-performance computing acceleration for large-scale mechanical systems
img: assets/img/publication_preview/gpu_solver.png
importance: 1
category: software
related_publications: false
---

As part of my research at the **Simulation-Based Engineering Lab (UW–Madison)**, I contribute to the development of **GPU-accelerated linear solvers** for multibody dynamics (MBD) simulations. This work focuses on leveraging parallel computing architectures to solve large-scale mechanical systems efficiently.

### Key Contributions:

- **GPU Solver Implementation**: Integrated CUDA-based sparse linear solvers specifically designed for the constraint matrices encountered in multibody dynamics formulations.
- **Performance Analysis**: Conducted comprehensive benchmarking studies to compare GPU solvers with traditional CPU-based approaches, resulting in significant performance improvements for large-scale systems.
- **Integration with Chrono**: Working on integrating GPU solvers into the Project Chrono ecosystem, facilitating scalable simulations of complex mechanical systems comprising thousands of bodies and constraints.
- **Memory Optimization**: Implemented memory-efficient data structures and algorithms to manage the sparse, often ill-conditioned matrices prevalent in multibody dynamics problems.

---

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/publication_preview/gpu_solver.png" title="GPU Solver Performance Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Performance comparison of GPU-based vs CPU-based linear solvers for multibody dynamics applications.
</div>

---

This research demonstrates the potential of GPU computing to dramatically accelerate multibody dynamics simulations, enabling real-time analysis of complex mechanical systems and supporting next-generation simulation-based design workflows.
