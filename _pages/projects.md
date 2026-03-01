---
layout: page
title: projects
permalink: /projects/
description: A growing collection of my past and ongoing projects.
nav: true
nav_order: 3
display_categories: [software, hardware]
tabs: true
---

<!-- pages/projects.md -->
<div class="projects">
  {% assign ordered_paths = site.data.project_priority.order %}
  <ul class="tab projects-tab" data-tab="projects-tab-content">
    {% for category in page.display_categories %}
      <li id="tab-{{ category | slugify }}" class="{% if forloop.first %}active{% endif %}">
        <a href="#">{{ category }}</a>
      </li>
    {% endfor %}
  </ul>

  <div id="projects-tab-content">
    <ul class="tab-content">
      {% for category in page.display_categories %}
        {% assign categorized_projects = site.projects | where: "category", category | where_exp: "project", "project.hide_from_projects != true" %}
        <li class="{% if forloop.first %}active{% endif %}">
          <ol class="projects-list">
            {% assign projects_by_title = categorized_projects | sort_natural: "title" %}
            {% assign years = projects_by_title | map: "year" | uniq | sort | reverse %}

            {% for year in years %}
              {% assign year_projects = projects_by_title | where: "year", year %}
              {% assign rendered_paths = "|" %}

              {% if ordered_paths and ordered_paths.size > 0 %}
                {% for project_path in ordered_paths %}
                  {% assign matches = year_projects | where: "path", project_path %}
                  {% for project in matches %}
                    {% include projects_horizontal.liquid %}
                    {% assign rendered_paths = rendered_paths | append: project.path | append: "|" %}
                  {% endfor %}
                {% endfor %}
              {% endif %}

              {% for project in year_projects %}
                {% capture path_token %}|{{ project.path }}|{% endcapture %}
                {% unless rendered_paths contains path_token %}
                  {% include projects_horizontal.liquid %}
                {% endunless %}
              {% endfor %}
            {% endfor %}
          </ol>
        </li>
      {% endfor %}
    </ul>

  </div>
</div>
