---
layout: page
title: GPU-Based Linear Solvers for Multibody Dynamics
description: High-performance computing acceleration for large-scale mechanical systems
img: assets/img/publication_preview/gpu_solver.png
importance: 1
category: software
related_publications: true
---

As part of my research at the **Simulation-Based Engineering Lab (UW–Madison)**, I contribute to the development of **GPU-accelerated linear solvers** for multibody dynamics (MBD) simulations. This work focuses on leveraging parallel computing architectures to solve large-scale mechanical systems efficiently.


### Key Contributions:

- **GPU Solver Implementation**: I develop and optimize CUDA-based sparse linear solvers specifically tailored for the constraint matrices arising in multibody dynamics formulations.
- **Performance Analysis**: I conduct comprehensive benchmarking studies comparing GPU solvers against traditional CPU-based approaches, achieving significant speedups for large-scale systems.
- **Integration with Chrono**: I integrate GPU solvers into the Project Chrono ecosystem, enabling scalable simulation of complex mechanical systems with thousands of bodies and constraints.
- **Memory Optimization**: I implement memory-efficient data structures and algorithms to handle the sparse, often ill-conditioned matrices common in MBD problems.
- **Numerical Stability**: I address numerical challenges specific to GPU architectures, including precision considerations and iterative solver convergence.

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

### Technical Details:

- **CUDA Programming**: Developed custom CUDA kernels for sparse matrix operations, leveraging GPU memory hierarchy and thread synchronization.
- **Sparse Linear Algebra**: Implemented iterative solvers (CG, BiCGSTAB, GMRES) with GPU-optimized preconditioners for constraint satisfaction problems.
- **Benchmarking Framework**: Created comprehensive testing suite to evaluate solver performance across different problem sizes and system configurations.
- **Integration Testing**: Validated GPU solver accuracy and stability against analytical solutions and established CPU-based reference implementations.

This research demonstrates the potential of GPU computing to dramatically accelerate multibody dynamics simulations, enabling real-time analysis of complex mechanical systems and supporting next-generation simulation-based design workflows.

### Publications:

This work is presented in:
- **Arivoli, G.**, Unjhawala, H., Taylor, M., Serban, R., & Negrut, D. (2025). "On the Use of GPU-Based Linear Solvers in Multibody Dynamics." *ASME IDETC-CIE Conference*.
