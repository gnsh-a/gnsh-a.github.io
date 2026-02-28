---
layout: page
permalink: /publications/
title: publications
description: publications listed in reverse chronological order.
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications-sections">
  <h2 class="category">Journal Papers</h2>
  <div class="publications">
    {% bibliography --group_by none --query @*[pubtype=journal]* %}
  </div>

  <h2 class="category">Conferences</h2>
  <div class="publications">
    {% bibliography --group_by none --query @*[pubtype=conference]* %}
  </div>
</div>
