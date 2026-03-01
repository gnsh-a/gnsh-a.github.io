---
layout: page
permalink: /publications/
title: publications
description: "publications listed in reverse chronological order.<br>* Equal contribution"
_styles: |
  .post .post-description {
    margin-bottom: 1.5rem;
  }

  .post .publications-sections > h2.category {
    margin-top: 0.5rem !important;
  }

  .post .publications-sections > h2.category:first-child {
    margin-top: 0.4rem !important;
  }

  .post .publications-sections > .publications + h2.category {
    margin-top: 0.4rem !important;
  }
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<div class="publications-sections">
  <h2 class="category">Journal</h2>
  <div class="publications">
    {% bibliography --group_by none --query @*[pubtype=journal]* %}
  </div>

  <h2 class="category">Conference</h2>
  <div class="publications">
    {% bibliography --group_by none --query @*[pubtype=conference]* %}
  </div>
</div>
