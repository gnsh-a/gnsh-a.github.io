---
layout: page
title: Parallel RRT for Autonomous Robots
description: Accelerating path planning using OpenMP and CUDA
img: assets/img/rrt_1.png
importance: 2
category: software
related_publications: false
---

As part of **ECE 759: High Performance Computing (Spring 2025)** at UW–Madison, I am working on a team project to accelerate motion planning algorithms — specifically **RRT (Rapidly-exploring Random Tree)** and **PRM (Probabilistic Roadmap)** — using **parallel computing techniques** on both CPU (OpenMP) and GPU (CUDA).

The goal is to improve the scalability and runtime performance of these algorithms for use in autonomous systems like robots and vehicles navigating complex environments.

**GitHub Repository**: [https://github.com/xuann6/ece759_final_proj.git](https://github.com/xuann6/ece759_final_proj.git)

---

### Motivation

RRT and PRM are widely used in robotics for path planning, but they face challenges in:
- **Nearest node search** latency as the tree grows
- **Expensive collision detection** in cluttered spaces

We aim to overcome these limitations through parallelism, enabling faster planning in large, obstacle-dense environments.

---

### Current Focus

- **Baseline Implementation**: We are implementing sequential versions of RRT and PRM in C++ as performance baselines.
- **Parallel CPU Version**: Using **OpenMP**, we parallelize node sampling and nearest-neighbor computation.
- **GPU Acceleration**: We are designing **CUDA kernels** for collision detection and environment sampling.
- **Visualization & Evaluation**: A Python-based visualization frontend is used to interpret results and compare algorithm behavior in various test environments.

---

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/rrt_1.png" title="CPU-based RRT Exploration (in progress)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  RRT exploration tree being generated using sequential CPU baseline.
</div>

---

### Tools & Topics Involved

- `CUDA`, `OpenMP`, `C++`, and `Python`
- Multi-threaded node sampling and tree extension
- GPU memory management and kernel optimization
- Performance benchmarking techniques

---

This project gives me hands-on experience applying **parallel computing principles** to a real-world robotics problem, while deepening my understanding of **algorithmic design, GPU architecture**, and **performance engineering**.
