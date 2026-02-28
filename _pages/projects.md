---
layout: page
title: projects
permalink: /projects/
description: A growing collection of my past and ongoing projects.
nav: true
nav_order: 3
display_categories: [software, hardware]
horizontal: true
tabs: true
---

<!-- pages/projects.md -->
<div class="projects">
{% assign ordered_paths = site.data.project_priority.order %}
<ul class="tab projects-tab" data-tab="projects-tab-content">
  <li id="tab-software" class="active"><a href="#">software</a></li>
  <li id="tab-hardware"><a href="#">hardware</a></li>
</ul>

<div id="projects-tab-content">
  <ul class="tab-content">
    <li class="active">
      {% assign category = "software" %}
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1">
          {% if ordered_paths %}
            {% for project_path in ordered_paths %}
              {% assign matches = categorized_projects | where: "path", project_path %}
              {% for project in matches %}
                {% include projects_horizontal.liquid %}
              {% endfor %}
            {% endfor %}
            {% for project in categorized_projects %}
              {% unless ordered_paths contains project.path %}
                {% include projects_horizontal.liquid %}
              {% endunless %}
            {% endfor %}
          {% else %}
            {% assign sorted_projects = categorized_projects | sort: "importance" %}
            {% for project in sorted_projects %}
              {% include projects_horizontal.liquid %}
            {% endfor %}
          {% endif %}
        </div>
      </div>
      {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% if ordered_paths %}
          {% for project_path in ordered_paths %}
            {% assign matches = categorized_projects | where: "path", project_path %}
            {% for project in matches %}
              {% include projects.liquid %}
            {% endfor %}
          {% endfor %}
          {% for project in categorized_projects %}
            {% unless ordered_paths contains project.path %}
              {% include projects.liquid %}
            {% endunless %}
          {% endfor %}
        {% else %}
          {% assign sorted_projects = categorized_projects | sort: "importance" %}
          {% for project in sorted_projects %}
            {% include projects.liquid %}
          {% endfor %}
        {% endif %}
      </div>
      {% endif %}
    </li>
    <li>
      {% assign category = "hardware" %}
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1">
          {% if ordered_paths %}
            {% for project_path in ordered_paths %}
              {% assign matches = categorized_projects | where: "path", project_path %}
              {% for project in matches %}
                {% include projects_horizontal.liquid %}
              {% endfor %}
            {% endfor %}
            {% for project in categorized_projects %}
              {% unless ordered_paths contains project.path %}
                {% include projects_horizontal.liquid %}
              {% endunless %}
            {% endfor %}
          {% else %}
            {% assign sorted_projects = categorized_projects | sort: "importance" %}
            {% for project in sorted_projects %}
              {% include projects_horizontal.liquid %}
            {% endfor %}
          {% endif %}
        </div>
      </div>
      {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% if ordered_paths %}
          {% for project_path in ordered_paths %}
            {% assign matches = categorized_projects | where: "path", project_path %}
            {% for project in matches %}
              {% include projects.liquid %}
            {% endfor %}
          {% endfor %}
          {% for project in categorized_projects %}
            {% unless ordered_paths contains project.path %}
              {% include projects.liquid %}
            {% endunless %}
          {% endfor %}
        {% else %}
          {% assign sorted_projects = categorized_projects | sort: "importance" %}
          {% for project in sorted_projects %}
            {% include projects.liquid %}
          {% endfor %}
        {% endif %}
      </div>
      {% endif %}
    </li>
  </ul>
</div>
</div>
