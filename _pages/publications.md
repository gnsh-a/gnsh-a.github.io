---
layout: page
permalink: /publications/
title: publications
description: "publications listed in reverse chronological order.<br>* Equal contribution"
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
