---
layout: page
permalink: /publications/
title: publications
description: publications listed in reverse chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications-sections">
  <h2 class="category">Journal</h2>
  <div class="publications">
    {% bibliography --group_by none --query @*[pubtype=journal]* %}
  </div>
  <p class="text-muted small mb-0" style="margin-top: 0.5rem;">⁎ Equal contribution.</p>

  <h2 class="category">Conference</h2>
  <div class="publications">
    {% bibliography --group_by none --query @*[pubtype=conference]* %}
  </div>
</div>
