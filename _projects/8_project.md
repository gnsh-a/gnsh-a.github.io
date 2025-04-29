---
layout: page
title: Robotic Manipulator Simulation
description: Modeling and control of a serial robotic arm
img: assets/img/441_1.png
importance: 1
category: software
related_publications: false
---

As part of **ME/ECE 441: Kinematics, Dynamics, and Control of Robotic Manipulators** at UW–Madison, I am developing a simulation stack for a **serial robotic manipulator**. This includes modeling, analysis, and control of an n-link arm using both analytical methods and numerical simulation.

The project is guided by topics in robotic motion and control, including forward and inverse kinematics, Jacobians, singularities, Lagrangian dynamics, and trajectory tracking.

---

### What I'm Building

- **Forward & Inverse Kinematics**: Implemented using homogeneous transformations and the Denavit-Hartenberg (DH) convention.
- **Jacobian & Differential Kinematics**: Derived analytical Jacobians to compute velocity mappings and evaluate kinematic singularities.
- **Dynamics via Lagrangian Formulation**: Modeled joint torques, inertia matrices, and Coriolis/gravity forces for n-link robots.
- **Numerical Integration**: Solved the equations of motion using custom MATLAB scripts to simulate multi-link dynamics.

---

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/441_1.png" title="Manipulator Kinematics Simulation" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Kinematic structure of the manipulator including DH-based transformation chain.
</div>

---

### Tools Used

- **MATLAB**: Symbolic and numeric modeling, simulation, and animation
- **Python**: For additional plotting and visualization

---

This project provides practical reinforcement of theoretical concepts in **serial chain manipulator kinematics, dynamics, and control**, and gives me a deeper understanding of robotic motion planning in both joint and task space.
