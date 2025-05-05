---
layout: page
title: Robotic Manipulator Simulation
description: Modeling and control of a serial robotic arm
img: assets/img/441_1.png
importance: 1
category: software
related_publications: false
---

As part of **ME/ECE 441: Kinematics, Dynamics, and Control of Robotic Manipulators** at UW–Madison, I completed a project simulating a **serial robotic manipulator**, applying principles of robotic analysis and control through hands-on MATLAB development.

This work integrates concepts from forward/inverse kinematics, differential kinematics, Lagrangian dynamics, trajectory planning, and control strategies in joint and task space.

---

### Project Highlights

- **Kinematics (Forward & Inverse)**: Modeled using homogeneous transforms and the Denavit-Hartenberg (DH) convention.
- **Jacobian & Differential Kinematics**: Derived analytical Jacobians, evaluated kinematic singularities, and implemented inverse velocity and acceleration mappings.
- **Dynamics via Lagrangian Formulation**: Computed joint torques and modeled n-link robots through energy-based approaches.
- **Numerical Integration**: Developed custom MATLAB solvers to simulate motion under computed torques.
- **Trajectory & Path Planning**: Implemented single-joint trajectory generation and explored fundamentals of path planning.
- **Control**: Explored independent joint control and nonlinear dynamic decoupling concepts.

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

This simulation stack provided a hands-on environment to implement core robotic manipulation concepts and strengthened my understanding of modeling, motion planning, and control of serial manipulators in both joint and operational space.