---
layout: page
title: GPU-Accelerated Path Planning for Autonomous Robots
description: Accelerated path planning using Rapidly-exploring Random Trees (RRT) with OpenMP/CUDA
img: assets/img/rrt_1.png
importance: 2
category: software
related_publications: false
---

As part of **ECE 759: High Performance Computing (Spring 2025)** at UW–Madison, I contributed to a project that significantly accelerated path planning algorithms using **parallel computing** on both CPU and GPU. We focused on **Standard RRT** and **Bidirectional RRT**, achieving up to **151× speedup** using CUDA on NVIDIA GPUs.

**GitHub Repository**: [https://github.com/xuann6/ece759_final_proj.git](https://github.com/xuann6/ece759_final_proj.git)

---

### Contributions

- Parallelized **nearest node search**, **collision detection**, and **tree expansion** using **OpenMP** (C++) and **CUDA**.
- Developed **highly optimized CUDA kernels** to improve GPU occupancy, reduce memory latency, and minimize kernel launch overhead.
- Implemented **warp-level sampling**, **struct-of-arrays layout**, and **branchless geometry predicates** for efficient path validation.
- Achieved a peak **151× speedup** by fusing kernels, increasing occupancy, and reducing atomic contention in Bidirectional RRT.

---

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/rrt_1.png" title="CUDA-accelerated RRT Path Expansion" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  RRT expansion visualized on a 2D environment using the CUDA-accelerated implementation.
</div>

---

### Key Technologies

- `CUDA`, `OpenMP`, `C++`, `Python`, `cuRAND`, `Thrust`
- Nsight profiling, persistent-thread GPU kernels
- Collision checking using shared memory and branchless logic

---

This project strengthened my skills in **parallel programming, GPU kernel design, and motion planning for autonomous systems**, with direct applicability to robotics and embedded AI applications.
